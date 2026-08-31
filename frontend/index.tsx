import { Millennium, definePlugin } from "@steambrew/client";
import { SettingsPanel, readSettings } from "./settings";
import { translate } from "./i18n";

const ROOT_MENU_TITLE = "Steam Root Menu";
const MENU_ITEM_SELECTOR = "div#popup_target div[role='menuitem']";
const ITEM_MARKER = "data-restart-steam-root-item";

interface SteamWindowInfo {
  m_strTitle?: string;
  m_popup?: {
    document?: Document;
  };
}

interface SteamClientWindow extends Window {
  SteamClient?: {
    User?: {
      StartRestart?: (force: boolean) => void;
    };
  };
}

const steamWindow = window as SteamClientWindow;

function createMenuItem(
  template: Element,
  label: string,
  marker: string,
  onClick: () => void,
): Element {
  const item = template.cloneNode(true) as Element;

  item.setAttribute(ITEM_MARKER, marker);
  item.textContent = label;
  item.addEventListener("click", onClick);

  return item;
}

async function waitForMenuItems(
  documentRef: Document,
): Promise<NodeListOf<Element> | Element[]> {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const items = documentRef.querySelectorAll(MENU_ITEM_SELECTOR);

    if (items.length > 0) {
      return items;
    }

    await new Promise<void>((resolve) => setTimeout(resolve, 50));
  }

  return [];
}

async function restartDeveloperMode(): Promise<void> {
  try {
	await Millennium.callServerMethod(
	  "restart_developer_mode",
	  {},
	);
  } catch (error: unknown) {
    console.error("Unable to restart Steam in developer mode:", error);
  }
}

async function injectRootMenuItems(
  windowInfo: SteamWindowInfo,
  trackedDocuments: Set<Document>,
): Promise<void> {
  // Keep the v1.3 menu lookup behavior unchanged.
  const documentRef = windowInfo.m_popup?.document || document;
  trackedDocuments.add(documentRef);

  if (documentRef.querySelector(`[${ITEM_MARKER}]`)) {
    return;
  }

  const menuItems = await waitForMenuItems(documentRef);

  if (menuItems.length === 0) {
    return;
  }

  const quitItem = menuItems[menuItems.length - 1];
  const parent = quitItem.parentNode;

  if (!parent) {
    return;
  }

  const settings = readSettings();
  const injectedItems: Element[] = [];

  // Preserve v1.3 ordering and behavior for the existing actions.
  if (settings.showRestart) {
    injectedItems.push(
      createMenuItem(
        quitItem,
        await translate("restart", documentRef),
        "restart",
        () => steamWindow.SteamClient?.User?.StartRestart?.(true),
      ),
    );
  }

  if (settings.showReload) {
    injectedItems.push(
      createMenuItem(
        quitItem,
        await translate("reload", documentRef),
        "reload",
        () => window.location.reload(),
      ),
    );
  }

  if (settings.showDeveloperRestart) {
    injectedItems.push(
      createMenuItem(
        quitItem,
        await translate("developerRestart", documentRef),
        "developer-restart",
        () => void restartDeveloperMode(),
      ),
    );
  }

  injectedItems.forEach((item) => parent.insertBefore(item, quitItem));

  if (injectedItems.length > 0) {
    const separator = documentRef.createElement("div");

    separator.setAttribute(ITEM_MARKER, "separator");
    separator.style.height = ".5px";
    separator.style.background = "rgba(19, 19, 19, .85)";
    separator.style.pointerEvents = "none";

    parent.insertBefore(separator, quitItem);
  }
}

export default definePlugin(() => {
  let active = true;
  const trackedDocuments = new Set<Document>();

  // Intentionally preserve the v1.3 hook instead of carrying experimental
  // popup/menu fixes into v1.4.
  Millennium.AddWindowCreateHook?.((windowInfo: SteamWindowInfo) => {
    if (!active || windowInfo.m_strTitle !== ROOT_MENU_TITLE) {
      return;
    }

    void injectRootMenuItems(windowInfo, trackedDocuments).catch(
      (error: unknown) => {
        console.error("Unable to inject the Steam root menu items:", error);
      },
    );
  });

  return {
    title: "Easy Restart / Reload for Steam",
    icon: null,
    content: <SettingsPanel />,
    onDismount: () => {
      active = false;

      trackedDocuments.forEach((documentRef) => {
        documentRef
          .querySelectorAll(`[${ITEM_MARKER}]`)
          .forEach((item) => item.remove());
      });

      trackedDocuments.clear();
    },
  };
});
