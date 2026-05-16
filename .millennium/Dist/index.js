(function () {
  "use strict";

  const ROOT_MENU_TITLE = "Steam Root Menu";
  const MENU_ITEM_SELECTOR = "div#popup_target div[role='menuitem']";
  const ITEM_MARKER = "data-restart-steam-root-item";

  const TEXT = {
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
	ukrainian: { restart: "Перезапустити Steam", reload: "Перезавантажити інтерфейс" }
  };

  async function getLanguage(documentRef) {
    try {
      const result =
        window.SteamClient?.Settings?.GetCurrentLanguage?.();

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

	if (TEXT[language]) {
	  return language;
  }

  return "english";
}

  async function translate(key, documentRef) {
    const languageKey = await getLanguageKey(documentRef);

    return TEXT[languageKey]?.[key] || TEXT.english[key];
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
        window.SteamClient?.User?.StartRestart?.(true);
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
	
	const separator = document.createElement("div");
	separator.style.height = ".5px";
	separator.style.background = "rgba(19, 19, 19, .85)";
	separator.style.pointerEvents = "none";

	parent.insertBefore(separator, quitItem);
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
