import { Millennium, definePlugin } from "@steambrew/client";

const ROOT_MENU_TITLE = "Steam Root Menu";
const MENU_ITEM_SELECTOR = "div#popup_target div[role='menuitem']";
const ITEM_MARKER = "data-restart-steam-root-item";

const TEXT: Record<string, { restart: string; reload: string }> = {
  schinese: { restart: "重启 Steam", reload: "重新加载界面" },
  tchinese: { restart: "重新啟動 Steam", reload: "重新載入介面" },
  japanese: { restart: "Steam を再起動", reload: "UI を再読み込み" },
  koreana: { restart: "Steam 재시작", reload: "UI 새로고침" },
  thai: { restart: "รีสตาร์ท Steam", reload: "โหลดอินเทอร์เฟซใหม่" },
  bulgarian: { restart: "Рестартирай Steam", reload: "Презареди интерфейса" },
  czech: { restart: "Restartovat Steam", reload: "Znovu načíst rozhraní" },
  danish: { restart: "Genstart Steam", reload: "Genindlæs brugerfladen" },
  german: { restart: "Steam neu starten", reload: "Oberfläche neu laden" },
  english: { restart: "Restart Steam", reload: "Reload UI" },
  spanish: { restart: "Reiniciar Steam", reload: "Recargar interfaz" },
  latam: { restart: "Reiniciar Steam", reload: "Recargar interfaz" },
  greek: { restart: "Επανεκκίνηση Steam", reload: "Επαναφόρτωση διεπαφής" },
  french: { restart: "Redémarrer Steam", reload: "Recharger l’interface" },
  indonesian: { restart: "Mulai ulang Steam", reload: "Muat ulang antarmuka" },
  italian: { restart: "Riavvia Steam", reload: "Ricarica interfaccia" },
  hungarian: { restart: "Steam újraindítása", reload: "Felület újratöltése" },
  dutch: { restart: "Steam opnieuw starten", reload: "Interface herladen" },
  norwegian: { restart: "Start Steam på nytt", reload: "Last inn grensesnittet på nytt" },
  polish: { restart: "Uruchom ponownie Steam", reload: "Przeładuj interfejs" },
  portuguese: { restart: "Reiniciar Steam", reload: "Recarregar interface" },
  brazilian: { restart: "Reiniciar Steam", reload: "Recarregar interface" },
  romanian: { restart: "Repornește Steam", reload: "Reîncarcă interfața" },
  russian: { restart: "Перезапустить Steam", reload: "Перезагрузить интерфейс" },
  finnish: { restart: "Käynnistä Steam uudelleen", reload: "Lataa käyttöliittymä uudelleen" },
  swedish: { restart: "Starta om Steam", reload: "Ladda om gränssnittet" },
  turkish: { restart: "Steam’i yeniden başlat", reload: "Arayüzü yenile" },
  vietnamese: { restart: "Khởi động lại Steam", reload: "Tải lại giao diện" },
  ukrainian: { restart: "Перезапустити Steam", reload: "Перезавантажити інтерфейс" },
};

interface SteamWindowInfo {
  m_strTitle?: string;
  m_popup?: {
    document?: Document;
  };
}

interface SteamClientWindow extends Window {
  SteamClient?: {
    Settings?: {
      GetCurrentLanguage?: () => string | Promise<string>;
    };
    User?: {
      StartRestart?: (force: boolean) => void;
    };
  };
}

const steamWindow = window as SteamClientWindow;

async function getLanguage(documentRef: Document): Promise<string> {
  try {
    const steamLanguage =
      await steamWindow.SteamClient?.Settings?.GetCurrentLanguage?.();

    if (steamLanguage) {
      return String(steamLanguage).toLowerCase();
    }
  } catch {
    // Fall back to the document or system language.
  }

  const htmlLanguage =
    documentRef.documentElement?.getAttribute("lang") ||
    documentRef.documentElement?.lang ||
    document.documentElement?.getAttribute("lang") ||
    document.documentElement?.lang;

  return String(
    htmlLanguage || navigator.language || "english",
  ).toLowerCase();
}

async function translate(
  key: "restart" | "reload",
  documentRef: Document,
): Promise<string> {
  const language = await getLanguage(documentRef);
  return (TEXT[language] || TEXT.english)[key];
}

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

async function injectRootMenuItems(
  windowInfo: SteamWindowInfo,
  trackedDocuments: Set<Document>,
): Promise<void> {
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

  const restartItem = createMenuItem(
    quitItem,
    await translate("restart", documentRef),
    "restart",
    () => steamWindow.SteamClient?.User?.StartRestart?.(true),
  );

  const reloadItem = createMenuItem(
    quitItem,
    await translate("reload", documentRef),
    "reload",
    () => documentRef.defaultView?.location.reload(),
  );

  const separator = documentRef.createElement("div");

  separator.setAttribute(ITEM_MARKER, "separator");
  separator.style.height = ".5px";
  separator.style.background = "rgba(19, 19, 19, .85)";
  separator.style.pointerEvents = "none";

  parent.insertBefore(restartItem, quitItem);
  parent.insertBefore(reloadItem, quitItem);
  parent.insertBefore(separator, quitItem);
}

export default definePlugin(() => {
  let active = true;
  const trackedDocuments = new Set<Document>();

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
    icon: null,
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