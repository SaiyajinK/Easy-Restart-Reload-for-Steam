(function () {
  "use strict";

  const ROOT_MENU_TITLE = "Steam Root Menu";
  const MENU_ITEM_SELECTOR = "div#popup_target div[role='menuitem']";
  const ITEM_MARKER = "data-restart-steam-root-item";

  const TEXT = {
    fr: { restart: "Redémarrer Steam", reload: "Recharger l’interface" },
    en: { restart: "Restart Steam", reload: "Reload UI" },
    de: { restart: "Steam neu starten", reload: "Oberfläche neu laden" },
    es: { restart: "Reiniciar Steam", reload: "Recargar interfaz" },
    it: { restart: "Riavvia Steam", reload: "Ricarica interfaccia" },
    pt: { restart: "Reiniciar Steam", reload: "Recarregar interface" },
    br: { restart: "Reiniciar Steam", reload: "Recarregar interface" },
    ru: { restart: "Перезапустить Steam", reload: "Перезагрузить интерфейс" },
    ja: { restart: "Steam を再起動", reload: "UI を再読み込み" },
    ko: { restart: "Steam 재시작", reload: "UI 새로고침" },
    schinese: { restart: "重启 Steam", reload: "重新加载界面" },
    tchinese: { restart: "重新啟動 Steam", reload: "重新載入介面" },
    polish: { restart: "Uruchom ponownie Steam", reload: "Przeładuj interfejs" },
    turkish: { restart: "Steam’i yeniden başlat", reload: "Arayüzü yenile" },
    dutch: { restart: "Steam opnieuw starten", reload: "Interface herladen" }
  };

  async function getLanguage(documentRef) {
    try {
      const result =
        SteamClient?.Settings?.GetCurrentLanguage?.();

      const steamLanguage =
        result && typeof result.then === "function"
          ? await result
          : result;

      if (steamLanguage) {
        return String(steamLanguage).toLowerCase();
      }
    } catch (_) {}

    const htmlLanguage =
      documentRef?.documentElement?.getAttribute("lang") ||
      documentRef?.documentElement?.lang ||
      document.documentElement?.getAttribute("lang") ||
      document.documentElement?.lang;

    if (htmlLanguage) {
      return String(htmlLanguage).toLowerCase();
    }

    return String(navigator.language || "en").toLowerCase();
  }

  async function getLanguageKey(documentRef) {
    const language = await getLanguage(documentRef);

    if (language.includes("fr") || language.includes("french")) return "fr";
    if (language.includes("en") || language.includes("english")) return "en";
    if (language.includes("de") || language.includes("german")) return "de";
    if (language.includes("es") || language.includes("spanish")) return "es";
    if (language.includes("it") || language.includes("italian")) return "it";
    if (language.includes("pt-br") || language.includes("brazilian")) return "br";
    if (language.includes("pt") || language.includes("portuguese")) return "pt";
    if (language.includes("ru") || language.includes("russian")) return "ru";
    if (language.includes("ja") || language.includes("japanese")) return "ja";
    if (language.includes("ko") || language.includes("koreana")) return "ko";
    if (language.includes("zh-cn") || language.includes("schinese")) return "schinese";
    if (language.includes("zh-tw") || language.includes("tchinese")) return "tchinese";
    if (language.includes("pl") || language.includes("polish")) return "polish";
    if (language.includes("tr") || language.includes("turkish")) return "turkish";
    if (language.includes("nl") || language.includes("dutch")) return "dutch";

    return "en";
  }

  async function translate(key, documentRef) {
    const languageKey = await getLanguageKey(documentRef);

    return TEXT[languageKey]?.[key] || TEXT.en[key];
  }

  function createMenuItem(template, label, marker, onClick) {
    const item = template.cloneNode(true);

    item.setAttribute(ITEM_MARKER, marker);
    item.textContent = label;

    item.addEventListener("click", function () {
      onClick();
    });

    return item;
  }

  async function waitForMenuItems(documentRef) {
    for (let attempt = 0; attempt < 20; attempt++) {
      const items =
        documentRef.querySelectorAll(MENU_ITEM_SELECTOR);

      if (items.length > 0) {
        return items;
      }

      await new Promise((resolve) =>
        setTimeout(resolve, 50)
      );
    }

    return [];
  }

  async function injectRootMenuItems(windowInfo) {
    const documentRef =
      windowInfo?.m_popup?.document || document;

    if (documentRef.querySelector("[" + ITEM_MARKER + "]")) {
      return;
    }

    const menuItems = await waitForMenuItems(documentRef);

    if (!menuItems.length) {
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
      function () {
        SteamClient.User.StartRestart(true);
      }
    );

    const reloadItem = createMenuItem(
      quitItem,
      await translate("reload", documentRef),
      "reload",
      function () {
        window.location.reload();
      }
    );

    parent.insertBefore(restartItem, quitItem);
    parent.insertBefore(reloadItem, quitItem);
  }

  function onWindowCreated(windowInfo) {
    if (windowInfo?.m_strTitle !== ROOT_MENU_TITLE) {
      return;
    }

    injectRootMenuItems(windowInfo);
  }

  window.MILLENNIUM_API.Millennium.AddWindowCreateHook(
    onWindowCreated
  );
})();
