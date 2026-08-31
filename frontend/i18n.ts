export type TextKey = "restart" | "reload" | "developerRestart";
export type TranslationSet = Record<TextKey, string>;

export const TEXT: Record<string, TranslationSet> = {
  schinese: { restart: "重启 Steam", reload: "重新加载界面", developerRestart: "以开发者模式重启 Steam" },
  tchinese: { restart: "重新啟動 Steam", reload: "重新載入介面", developerRestart: "以開發者模式重新啟動 Steam" },
  japanese: { restart: "Steam を再起動", reload: "UI を再読み込み", developerRestart: "Steam を開発者モードで再起動" },
  koreana: { restart: "Steam 재시작", reload: "UI 새로고침", developerRestart: "개발자 모드로 Steam 재시작" },
  thai: { restart: "รีสตาร์ท Steam", reload: "โหลดอินเทอร์เฟซใหม่", developerRestart: "รีสตาร์ท Steam ในโหมดนักพัฒนา" },
  bulgarian: { restart: "Рестартирай Steam", reload: "Презареди интерфейса", developerRestart: "Рестартирай Steam в режим за разработчици" },
  czech: { restart: "Restartovat Steam", reload: "Znovu načíst rozhraní", developerRestart: "Restartovat Steam ve vývojářském režimu" },
  danish: { restart: "Genstart Steam", reload: "Genindlæs brugerfladen", developerRestart: "Genstart Steam i udviklertilstand" },
  german: { restart: "Steam neu starten", reload: "Oberfläche neu laden", developerRestart: "Steam im Entwicklermodus neu starten" },
  english: { restart: "Restart Steam", reload: "Reload UI", developerRestart: "Restart Steam in Developer Mode" },
  spanish: { restart: "Reiniciar Steam", reload: "Recargar interfaz", developerRestart: "Reiniciar Steam en modo desarrollador" },
  latam: { restart: "Reiniciar Steam", reload: "Recargar interfaz", developerRestart: "Reiniciar Steam en modo desarrollador" },
  greek: { restart: "Επανεκκίνηση Steam", reload: "Επαναφόρτωση διεπαφής", developerRestart: "Επανεκκίνηση Steam σε λειτουργία προγραμματιστή" },
  french: { restart: "Redémarrer Steam", reload: "Recharger l’interface", developerRestart: "Redémarrer Steam en mode développeur" },
  indonesian: { restart: "Mulai ulang Steam", reload: "Muat ulang antarmuka", developerRestart: "Mulai ulang Steam dalam mode pengembang" },
  malay: { restart: "Mulakan semula Steam", reload: "Muat semula antara muka", developerRestart: "Mulakan semula Steam dalam Mod Pembangun" },
  italian: { restart: "Riavvia Steam", reload: "Ricarica interfaccia", developerRestart: "Riavvia Steam in modalità sviluppatore" },
  hungarian: { restart: "Steam újraindítása", reload: "Felület újratöltése", developerRestart: "Steam újraindítása fejlesztői módban" },
  dutch: { restart: "Steam opnieuw starten", reload: "Interface herladen", developerRestart: "Steam opnieuw starten in ontwikkelaarsmodus" },
  norwegian: { restart: "Start Steam på nytt", reload: "Last inn grensesnittet på nytt", developerRestart: "Start Steam på nytt i utviklermodus" },
  polish: { restart: "Uruchom ponownie Steam", reload: "Przeładuj interfejs", developerRestart: "Uruchom ponownie Steam w trybie deweloperskim" },
  portuguese: { restart: "Reiniciar Steam", reload: "Recarregar interface", developerRestart: "Reiniciar Steam no modo de programador" },
  brazilian: { restart: "Reiniciar Steam", reload: "Recarregar interface", developerRestart: "Reiniciar Steam no modo de desenvolvedor" },
  romanian: { restart: "Repornește Steam", reload: "Reîncarcă interfața", developerRestart: "Repornește Steam în modul dezvoltator" },
  russian: { restart: "Перезапустить Steam", reload: "Перезагрузить интерфейс", developerRestart: "Перезапустить Steam в режиме разработчика" },
  finnish: { restart: "Käynnistä Steam uudelleen", reload: "Lataa käyttöliittymä uudelleen", developerRestart: "Käynnistä Steam uudelleen kehittäjätilassa" },
  swedish: { restart: "Starta om Steam", reload: "Ladda om gränssnittet", developerRestart: "Starta om Steam i utvecklarläge" },
  turkish: { restart: "Steam’i yeniden başlat", reload: "Arayüzü yenile", developerRestart: "Steam’i geliştirici modunda yeniden başlat" },
  vietnamese: { restart: "Khởi động lại Steam", reload: "Tải lại giao diện", developerRestart: "Khởi động lại Steam ở chế độ nhà phát triển" },
  ukrainian: { restart: "Перезапустити Steam", reload: "Перезавантажити інтерфейс", developerRestart: "Перезапустити Steam у режимі розробника" },
};

interface SteamClientWindow extends Window {
  SteamClient?: {
    Settings?: {
      GetCurrentLanguage?: () => string | Promise<string>;
    };
  };
}

const steamWindow = window as SteamClientWindow;

function normalizeLanguage(language: string): string {
  const normalized = String(language || "english").toLowerCase();

  if (TEXT[normalized]) {
    return normalized;
  }

  const shortLanguage = normalized.split(/[-_]/)[0];
  const aliases: Record<string, string> = {
    zh: normalized.includes("tw") || normalized.includes("hk") || normalized.includes("hant") ? "tchinese" : "schinese",
    ja: "japanese",
    ko: "koreana",
    th: "thai",
    bg: "bulgarian",
    cs: "czech",
    da: "danish",
    de: "german",
    en: "english",
    es: "spanish",
    el: "greek",
    fr: "french",
    id: "indonesian",
    ms: "malay",
    it: "italian",
    hu: "hungarian",
    nl: "dutch",
    no: "norwegian",
    nb: "norwegian",
    pl: "polish",
    pt: normalized.includes("br") ? "brazilian" : "portuguese",
    ro: "romanian",
    ru: "russian",
    fi: "finnish",
    sv: "swedish",
    tr: "turkish",
    vi: "vietnamese",
    uk: "ukrainian",
  };

  return aliases[shortLanguage] || "english";
}

export async function getLanguageKey(documentRef: Document = document): Promise<string> {
  try {
    const result = steamWindow.SteamClient?.Settings?.GetCurrentLanguage?.();
    const steamLanguage = result && typeof (result as Promise<string>)?.then === "function"
      ? await result
      : result;

    if (steamLanguage) {
      return normalizeLanguage(String(steamLanguage));
    }
  } catch {
    // Fall back to the document or system language.
  }

  const htmlLanguage =
    documentRef.documentElement?.getAttribute("lang") ||
    documentRef.documentElement?.lang ||
    document.documentElement?.getAttribute("lang") ||
    document.documentElement?.lang ||
    navigator.language ||
    "english";

  return normalizeLanguage(String(htmlLanguage));
}

export async function translate(key: TextKey, documentRef: Document = document): Promise<string> {
  const languageKey = await getLanguageKey(documentRef);
  return (TEXT[languageKey] || TEXT.english)[key];
}
