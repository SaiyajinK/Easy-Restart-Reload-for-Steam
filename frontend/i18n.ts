export type TextKey =
  | "restart"
  | "reload"
  | "developerRestart"
  | "exitDeveloperMode"
  | "restartDescription"
  | "reloadDescription"
  | "developerRestartDescription"
  | "alwaysDeveloperRestart"
  | "alwaysDeveloperRestartDescription";

export type TranslationSet = Record<TextKey, string>;

export const TEXT: Record<string, TranslationSet> = {
  schinese: {
    restart: "重启 Steam",
    reload: "重新加载界面",
    developerRestart: "以开发者模式重启 Steam",
    exitDeveloperMode: "退出开发者模式",
    restartDescription: "完全重启 Steam 客户端。",
    reloadDescription: "仅重新加载 Steam 界面，不重启客户端。",
    developerRestartDescription: "使用 -dev 参数重启 Steam 以启用开发者模式。",
    alwaysDeveloperRestart: "始终以开发者模式重启 Steam",
    alwaysDeveloperRestartDescription: "启用“以开发者模式重启 Steam”时，强制“重启 Steam”始终使用 -dev 参数重启 Steam。",
  },

  tchinese: {
    restart: "重新啟動 Steam",
    reload: "重新載入介面",
    developerRestart: "以開發者模式重新啟動 Steam",
    exitDeveloperMode: "退出開發者模式",
    restartDescription: "完整重新啟動 Steam 用戶端。",
    reloadDescription: "僅重新載入 Steam 介面，不重新啟動用戶端。",
    developerRestartDescription: "使用 -dev 參數重新啟動 Steam 以啟用開發者模式。",
    alwaysDeveloperRestart: "始終以開發者模式重新啟動 Steam",
    alwaysDeveloperRestartDescription: "啟用「以開發者模式重新啟動 Steam」時，強制「重新啟動 Steam」始終使用 -dev 參數重新啟動 Steam。",
  },

  japanese: {
    restart: "Steam を再起動",
    reload: "UI を再読み込み",
    developerRestart: "Steam を開発者モードで再起動",
    exitDeveloperMode: "開発者モードを終了",
    restartDescription: "Steam クライアントを完全に再起動します。",
    reloadDescription: "Steam クライアントを再起動せずにインターフェースのみを再読み込みします。",
    developerRestartDescription: "-dev 引数を使用して Steam を再起動し、開発者モードを有効にします。",
    alwaysDeveloperRestart: "常に Steam を開発者モードで再起動",
    alwaysDeveloperRestartDescription: "「Steam を開発者モードで再起動」が有効な間、「Steam を再起動」で常に -dev 引数を使用して Steam を再起動します。",
  },

  koreana: {
    restart: "Steam 재시작",
    reload: "UI 새로고침",
    developerRestart: "개발자 모드로 Steam 재시작",
    exitDeveloperMode: "개발자 모드 종료",
    restartDescription: "Steam 클라이언트를 완전히 다시 시작합니다.",
    reloadDescription: "클라이언트를 다시 시작하지 않고 Steam 인터페이스만 다시 불러옵니다.",
    developerRestartDescription: "-dev 인수로 Steam을 다시 시작하여 개발자 모드를 활성화합니다.",
    alwaysDeveloperRestart: "항상 개발자 모드로 Steam 재시작",
    alwaysDeveloperRestartDescription: "개발자 모드로 Steam 재시작이 활성화된 동안 Steam 재시작 항목이 항상 -dev 인수로 Steam을 다시 시작하도록 합니다.",
  },

  thai: {
    restart: "รีสตาร์ท Steam",
    reload: "โหลดอินเทอร์เฟซใหม่",
    developerRestart: "รีสตาร์ท Steam ในโหมดนักพัฒนา",
    exitDeveloperMode: "ออกจากโหมดนักพัฒนา",
    restartDescription: "รีสตาร์ทไคลเอนต์ Steam อย่างสมบูรณ์",
    reloadDescription: "โหลดเฉพาะอินเทอร์เฟซ Steam ใหม่โดยไม่รีสตาร์ทไคลเอนต์",
    developerRestartDescription: "รีสตาร์ท Steam ด้วยอาร์กิวเมนต์ -dev เพื่อเปิดใช้งานโหมดนักพัฒนา",
    alwaysDeveloperRestart: "รีสตาร์ท Steam ในโหมดนักพัฒนาเสมอ",
    alwaysDeveloperRestartDescription: "บังคับให้รายการรีสตาร์ท Steam รีสตาร์ท Steam ด้วยอาร์กิวเมนต์ -dev เสมอ ขณะที่เปิดใช้งานรีสตาร์ท Steam ในโหมดนักพัฒนา",
  },

  bulgarian: {
    restart: "Рестартирай Steam",
    reload: "Презареди интерфейса",
    developerRestart: "Рестартирай Steam в режим за разработчици",
    exitDeveloperMode: "Изход от режима за разработчици",
    restartDescription: "Рестартира напълно Steam клиента.",
    reloadDescription: "Презарежда само интерфейса на Steam, без да рестартира клиента.",
    developerRestartDescription: "Рестартира Steam с аргумента -dev, за да активира режима за разработчици.",
    alwaysDeveloperRestart: "Винаги рестартирай Steam в режим за разработчици",
    alwaysDeveloperRestartDescription: "Принуждава „Рестартирай Steam“ винаги да рестартира Steam с аргумента -dev, докато „Рестартирай Steam в режим за разработчици“ е активирано.",
  },

  czech: {
    restart: "Restartovat Steam",
    reload: "Znovu načíst rozhraní",
    developerRestart: "Restartovat Steam ve vývojářském režimu",
    exitDeveloperMode: "Ukončit vývojářský režim",
    restartDescription: "Kompletně restartuje klienta Steam.",
    reloadDescription: "Znovu načte pouze rozhraní Steam bez restartování klienta.",
    developerRestartDescription: "Restartuje Steam s parametrem -dev a aktivuje vývojářský režim.",
    alwaysDeveloperRestart: "Vždy restartovat Steam ve vývojářském režimu",
    alwaysDeveloperRestartDescription: "Vynutí, aby položka Restartovat Steam vždy restartovala Steam s parametrem -dev, když je povolena možnost Restartovat Steam ve vývojářském režimu.",
  },

  danish: {
    restart: "Genstart Steam",
    reload: "Genindlæs brugerfladen",
    developerRestart: "Genstart Steam i udviklertilstand",
    exitDeveloperMode: "Afslut udviklertilstand",
    restartDescription: "Genstarter Steam-klienten fuldstændigt.",
    reloadDescription: "Genindlæser kun Steam-brugerfladen uden at genstarte klienten.",
    developerRestartDescription: "Genstarter Steam med parameteren -dev for at aktivere udviklertilstand.",
    alwaysDeveloperRestart: "Genstart altid Steam i udviklertilstand",
    alwaysDeveloperRestartDescription: "Tvinger Genstart Steam til altid at genstarte Steam med parameteren -dev, når Genstart Steam i udviklertilstand er aktiveret.",
  },

  german: {
    restart: "Steam neu starten",
    reload: "Oberfläche neu laden",
    developerRestart: "Steam im Entwicklermodus neu starten",
    exitDeveloperMode: "Entwicklermodus verlassen",
    restartDescription: "Startet den Steam-Client vollständig neu.",
    reloadDescription: "Lädt nur die Steam-Oberfläche neu, ohne den Client neu zu starten.",
    developerRestartDescription: "Startet Steam mit dem Argument -dev neu, um den Entwicklermodus zu aktivieren.",
    alwaysDeveloperRestart: "Steam immer im Entwicklermodus neu starten",
    alwaysDeveloperRestartDescription: "Erzwingt, dass „Steam neu starten“ Steam immer mit dem Argument -dev neu startet, wenn „Steam im Entwicklermodus neu starten“ aktiviert ist.",
  },

  english: {
    restart: "Restart Steam",
    reload: "Reload UI",
    developerRestart: "Restart Steam in Developer Mode",
    exitDeveloperMode: "Exit Developer Mode",
    restartDescription: "Fully restarts the Steam client.",
    reloadDescription: "Reloads only the Steam interface without restarting the client.",
    developerRestartDescription: "Restarts Steam with the -dev argument to enable Developer Mode.",
    alwaysDeveloperRestart: "Always restart Steam in Developer Mode",
    alwaysDeveloperRestartDescription: "Forces the Restart Steam entry to always restart Steam with -dev while Restart Steam in Developer Mode is enabled.",
  },

  spanish: {
    restart: "Reiniciar Steam",
    reload: "Recargar interfaz",
    developerRestart: "Reiniciar Steam en modo desarrollador",
    exitDeveloperMode: "Salir del modo desarrollador",
    restartDescription: "Reinicia completamente el cliente de Steam.",
    reloadDescription: "Recarga únicamente la interfaz de Steam sin reiniciar el cliente.",
    developerRestartDescription: "Reinicia Steam con el argumento -dev para activar el modo desarrollador.",
    alwaysDeveloperRestart: "Reiniciar siempre Steam en modo desarrollador",
    alwaysDeveloperRestartDescription: "Fuerza la opción Reiniciar Steam a reiniciar siempre Steam con el argumento -dev cuando Reiniciar Steam en modo desarrollador está activado.",
  },

  latam: {
    restart: "Reiniciar Steam",
    reload: "Recargar interfaz",
    developerRestart: "Reiniciar Steam en modo desarrollador",
    exitDeveloperMode: "Salir del modo desarrollador",
    restartDescription: "Reinicia completamente el cliente de Steam.",
    reloadDescription: "Recarga únicamente la interfaz de Steam sin reiniciar el cliente.",
    developerRestartDescription: "Reinicia Steam con el argumento -dev para activar el modo desarrollador.",
    alwaysDeveloperRestart: "Reiniciar siempre Steam en modo desarrollador",
    alwaysDeveloperRestartDescription: "Fuerza la opción Reiniciar Steam a reiniciar siempre Steam con el argumento -dev cuando Reiniciar Steam en modo desarrollador está activado.",
  },

  greek: {
    restart: "Επανεκκίνηση Steam",
    reload: "Επαναφόρτωση διεπαφής",
    developerRestart: "Επανεκκίνηση Steam σε λειτουργία προγραμματιστή",
    exitDeveloperMode: "Έξοδος από τη λειτουργία προγραμματιστή",
    restartDescription: "Επανεκκινεί πλήρως τον πελάτη Steam.",
    reloadDescription: "Επαναφορτώνει μόνο τη διεπαφή του Steam χωρίς επανεκκίνηση του πελάτη.",
    developerRestartDescription: "Επανεκκινεί το Steam με το όρισμα -dev για ενεργοποίηση της λειτουργίας προγραμματιστή.",
    alwaysDeveloperRestart: "Πάντα επανεκκίνηση Steam σε λειτουργία προγραμματιστή",
    alwaysDeveloperRestartDescription: "Αναγκάζει την επιλογή Επανεκκίνηση Steam να επανεκκινεί πάντα το Steam με το όρισμα -dev όταν είναι ενεργοποιημένη η Επανεκκίνηση Steam σε λειτουργία προγραμματιστή.",
  },

  french: {
    restart: "Redémarrer Steam",
    reload: "Recharger l’interface",
    developerRestart: "Redémarrer Steam en mode développeur",
    exitDeveloperMode: "Quitter le mode développeur",
    restartDescription: "Redémarre complètement le client Steam.",
    reloadDescription: "Recharge uniquement l’interface Steam sans redémarrer le client.",
    developerRestartDescription: "Redémarre Steam avec l’argument -dev afin d’activer le mode développeur.",
    alwaysDeveloperRestart: "Toujours redémarrer Steam en mode développeur",
    alwaysDeveloperRestartDescription: "Force l’entrée Redémarrer Steam à toujours relancer Steam avec -dev lorsque Redémarrer Steam en mode développeur est activé.",
  },

  indonesian: {
    restart: "Mulai ulang Steam",
    reload: "Muat ulang antarmuka",
    developerRestart: "Mulai ulang Steam dalam mode pengembang",
    exitDeveloperMode: "Keluar dari mode pengembang",
    restartDescription: "Memulai ulang klien Steam sepenuhnya.",
    reloadDescription: "Hanya memuat ulang antarmuka Steam tanpa memulai ulang klien.",
    developerRestartDescription: "Memulai ulang Steam dengan argumen -dev untuk mengaktifkan mode pengembang.",
    alwaysDeveloperRestart: "Selalu mulai ulang Steam dalam mode pengembang",
    alwaysDeveloperRestartDescription: "Memaksa opsi Mulai ulang Steam untuk selalu memulai ulang Steam dengan argumen -dev saat Mulai ulang Steam dalam mode pengembang diaktifkan.",
  },

  malay: {
    restart: "Mulakan semula Steam",
    reload: "Muat semula antara muka",
    developerRestart: "Mulakan semula Steam dalam Mod Pembangun",
    exitDeveloperMode: "Keluar daripada Mod Pembangun",
    restartDescription: "Mulakan semula klien Steam sepenuhnya.",
    reloadDescription: "Muat semula antara muka Steam sahaja tanpa memulakan semula klien.",
    developerRestartDescription: "Mulakan semula Steam dengan argumen -dev untuk mengaktifkan Mod Pembangun.",
    alwaysDeveloperRestart: "Sentiasa mulakan semula Steam dalam Mod Pembangun",
    alwaysDeveloperRestartDescription: "Memaksa pilihan Mulakan semula Steam untuk sentiasa memulakan semula Steam dengan argumen -dev apabila Mulakan semula Steam dalam Mod Pembangun diaktifkan.",
  },

  italian: {
    restart: "Riavvia Steam",
    reload: "Ricarica interfaccia",
    developerRestart: "Riavvia Steam in modalità sviluppatore",
    exitDeveloperMode: "Esci dalla modalità sviluppatore",
    restartDescription: "Riavvia completamente il client Steam.",
    reloadDescription: "Ricarica solo l’interfaccia di Steam senza riavviare il client.",
    developerRestartDescription: "Riavvia Steam con l’argomento -dev per attivare la modalità sviluppatore.",
    alwaysDeveloperRestart: "Riavvia sempre Steam in modalità sviluppatore",
    alwaysDeveloperRestartDescription: "Forza l’opzione Riavvia Steam a riavviare sempre Steam con l’argomento -dev quando Riavvia Steam in modalità sviluppatore è attivo.",
  },

  hungarian: {
    restart: "Steam újraindítása",
    reload: "Felület újratöltése",
    developerRestart: "Steam újraindítása fejlesztői módban",
    exitDeveloperMode: "Kilépés a fejlesztői módból",
    restartDescription: "Teljesen újraindítja a Steam klienst.",
    reloadDescription: "Csak a Steam felületét tölti újra a kliens újraindítása nélkül.",
    developerRestartDescription: "A Steamet a -dev argumentummal indítja újra a fejlesztői mód engedélyezéséhez.",
    alwaysDeveloperRestart: "Steam mindig fejlesztői módban induljon újra",
    alwaysDeveloperRestartDescription: "Arra kényszeríti a Steam újraindítása műveletet, hogy mindig a -dev argumentummal indítsa újra a Steamet, amikor a Steam újraindítása fejlesztői módban engedélyezve van.",
  },

  dutch: {
    restart: "Steam opnieuw starten",
    reload: "Interface herladen",
    developerRestart: "Steam opnieuw starten in ontwikkelaarsmodus",
    exitDeveloperMode: "Ontwikkelaarsmodus afsluiten",
    restartDescription: "Start de Steam-client volledig opnieuw.",
    reloadDescription: "Herlaadt alleen de Steam-interface zonder de client opnieuw te starten.",
    developerRestartDescription: "Start Steam opnieuw met het argument -dev om de ontwikkelaarsmodus in te schakelen.",
    alwaysDeveloperRestart: "Steam altijd opnieuw starten in ontwikkelaarsmodus",
    alwaysDeveloperRestartDescription: "Dwingt Steam opnieuw starten om Steam altijd opnieuw te starten met het argument -dev wanneer Steam opnieuw starten in ontwikkelaarsmodus is ingeschakeld.",
  },

  norwegian: {
    restart: "Start Steam på nytt",
    reload: "Last inn grensesnittet på nytt",
    developerRestart: "Start Steam på nytt i utviklermodus",
    exitDeveloperMode: "Avslutt utviklermodus",
    restartDescription: "Starter Steam-klienten fullstendig på nytt.",
    reloadDescription: "Laster bare Steam-grensesnittet på nytt uten å starte klienten på nytt.",
    developerRestartDescription: "Starter Steam på nytt med argumentet -dev for å aktivere utviklermodus.",
    alwaysDeveloperRestart: "Start alltid Steam på nytt i utviklermodus",
    alwaysDeveloperRestartDescription: "Tvinger Start Steam på nytt til alltid å starte Steam på nytt med argumentet -dev når Start Steam på nytt i utviklermodus er aktivert.",
  },

  polish: {
    restart: "Uruchom ponownie Steam",
    reload: "Przeładuj interfejs",
    developerRestart: "Uruchom ponownie Steam w trybie deweloperskim",
    exitDeveloperMode: "Wyjdź z trybu deweloperskiego",
    restartDescription: "Całkowicie ponownie uruchamia klienta Steam.",
    reloadDescription: "Przeładowuje tylko interfejs Steam bez ponownego uruchamiania klienta.",
    developerRestartDescription: "Uruchamia Steam ponownie z argumentem -dev, aby włączyć tryb deweloperski.",
    alwaysDeveloperRestart: "Zawsze uruchamiaj Steam ponownie w trybie deweloperskim",
    alwaysDeveloperRestartDescription: "Wymusza, aby opcja Uruchom ponownie Steam zawsze uruchamiała Steam ponownie z argumentem -dev, gdy opcja Uruchom ponownie Steam w trybie deweloperskim jest włączona.",
  },

  portuguese: {
    restart: "Reiniciar Steam",
    reload: "Recarregar interface",
    developerRestart: "Reiniciar Steam no modo de programador",
    exitDeveloperMode: "Sair do modo de programador",
    restartDescription: "Reinicia completamente o cliente Steam.",
    reloadDescription: "Recarrega apenas a interface do Steam sem reiniciar o cliente.",
    developerRestartDescription: "Reinicia o Steam com o argumento -dev para ativar o modo de programador.",
    alwaysDeveloperRestart: "Reiniciar sempre o Steam no modo de programador",
    alwaysDeveloperRestartDescription: "Força a opção Reiniciar Steam a reiniciar sempre o Steam com o argumento -dev quando Reiniciar Steam no modo de programador está ativado.",
  },

  brazilian: {
    restart: "Reiniciar Steam",
    reload: "Recarregar interface",
    developerRestart: "Reiniciar Steam no modo de desenvolvedor",
    exitDeveloperMode: "Sair do modo de desenvolvedor",
    restartDescription: "Reinicia completamente o cliente Steam.",
    reloadDescription: "Recarrega apenas a interface do Steam sem reiniciar o cliente.",
    developerRestartDescription: "Reinicia o Steam com o argumento -dev para ativar o modo de desenvolvedor.",
    alwaysDeveloperRestart: "Sempre reiniciar o Steam no modo de desenvolvedor",
    alwaysDeveloperRestartDescription: "Força a opção Reiniciar Steam a sempre reiniciar o Steam com o argumento -dev quando Reiniciar Steam no modo de desenvolvedor está ativado.",
  },

  romanian: {
    restart: "Repornește Steam",
    reload: "Reîncarcă interfața",
    developerRestart: "Repornește Steam în modul dezvoltator",
    exitDeveloperMode: "Ieși din modul dezvoltator",
    restartDescription: "Repornește complet clientul Steam.",
    reloadDescription: "Reîncarcă doar interfața Steam fără a reporni clientul.",
    developerRestartDescription: "Repornește Steam cu argumentul -dev pentru a activa modul dezvoltator.",
    alwaysDeveloperRestart: "Repornește întotdeauna Steam în modul dezvoltator",
    alwaysDeveloperRestartDescription: "Forțează opțiunea Repornește Steam să repornească întotdeauna Steam cu argumentul -dev atunci când Repornește Steam în modul dezvoltator este activată.",
  },

  russian: {
    restart: "Перезапустить Steam",
    reload: "Перезагрузить интерфейс",
    developerRestart: "Перезапустить Steam в режиме разработчика",
    exitDeveloperMode: "Выйти из режима разработчика",
    restartDescription: "Полностью перезапускает клиент Steam.",
    reloadDescription: "Перезагружает только интерфейс Steam без перезапуска клиента.",
    developerRestartDescription: "Перезапускает Steam с аргументом -dev для включения режима разработчика.",
    alwaysDeveloperRestart: "Всегда перезапускать Steam в режиме разработчика",
    alwaysDeveloperRestartDescription: "Заставляет пункт «Перезапустить Steam» всегда перезапускать Steam с аргументом -dev, когда включён пункт «Перезапустить Steam в режиме разработчика».",
  },

  finnish: {
    restart: "Käynnistä Steam uudelleen",
    reload: "Lataa käyttöliittymä uudelleen",
    developerRestart: "Käynnistä Steam uudelleen kehittäjätilassa",
    exitDeveloperMode: "Poistu kehittäjätilasta",
    restartDescription: "Käynnistää Steam-asiakasohjelman kokonaan uudelleen.",
    reloadDescription: "Lataa vain Steamin käyttöliittymän uudelleen käynnistämättä asiakasohjelmaa uudelleen.",
    developerRestartDescription: "Käynnistää Steamin uudelleen -dev-argumentilla kehittäjätilan käyttöön ottamiseksi.",
    alwaysDeveloperRestart: "Käynnistä Steam aina uudelleen kehittäjätilassa",
    alwaysDeveloperRestartDescription: "Pakottaa Käynnistä Steam uudelleen -toiminnon käynnistämään Steamin aina uudelleen -dev-argumentilla, kun Käynnistä Steam uudelleen kehittäjätilassa on käytössä.",
  },

  swedish: {
    restart: "Starta om Steam",
    reload: "Ladda om gränssnittet",
    developerRestart: "Starta om Steam i utvecklarläge",
    exitDeveloperMode: "Avsluta utvecklarläge",
    restartDescription: "Startar om Steam-klienten helt.",
    reloadDescription: "Laddar endast om Steam-gränssnittet utan att starta om klienten.",
    developerRestartDescription: "Startar om Steam med argumentet -dev för att aktivera utvecklarläget.",
    alwaysDeveloperRestart: "Starta alltid om Steam i utvecklarläge",
    alwaysDeveloperRestartDescription: "Tvingar Starta om Steam att alltid starta om Steam med argumentet -dev när Starta om Steam i utvecklarläge är aktiverat.",
  },

  turkish: {
    restart: "Steam’i yeniden başlat",
    reload: "Arayüzü yenile",
    developerRestart: "Steam’i geliştirici modunda yeniden başlat",
    exitDeveloperMode: "Geliştirici modundan çık",
    restartDescription: "Steam istemcisini tamamen yeniden başlatır.",
    reloadDescription: "İstemciyi yeniden başlatmadan yalnızca Steam arayüzünü yeniden yükler.",
    developerRestartDescription: "Geliştirici modunu etkinleştirmek için Steam’i -dev argümanıyla yeniden başlatır.",
    alwaysDeveloperRestart: "Steam’i her zaman geliştirici modunda yeniden başlat",
    alwaysDeveloperRestartDescription: "Geliştirici modunda Steam’i yeniden başlat etkinleştirildiğinde Steam’i yeniden başlat seçeneğinin Steam’i her zaman -dev argümanıyla yeniden başlatmasını sağlar.",
  },

  vietnamese: {
    restart: "Khởi động lại Steam",
    reload: "Tải lại giao diện",
    developerRestart: "Khởi động lại Steam ở chế độ nhà phát triển",
    exitDeveloperMode: "Thoát chế độ nhà phát triển",
    restartDescription: "Khởi động lại hoàn toàn ứng dụng Steam.",
    reloadDescription: "Chỉ tải lại giao diện Steam mà không khởi động lại ứng dụng.",
    developerRestartDescription: "Khởi động lại Steam với đối số -dev để bật chế độ nhà phát triển.",
    alwaysDeveloperRestart: "Luôn khởi động lại Steam ở chế độ nhà phát triển",
    alwaysDeveloperRestartDescription: "Buộc mục Khởi động lại Steam luôn khởi động lại Steam với đối số -dev khi Khởi động lại Steam ở chế độ nhà phát triển được bật.",
  },

  ukrainian: {
    restart: "Перезапустити Steam",
    reload: "Перезавантажити інтерфейс",
    developerRestart: "Перезапустити Steam у режимі розробника",
    exitDeveloperMode: "Вийти з режиму розробника",
    restartDescription: "Повністю перезапускає клієнт Steam.",
    reloadDescription: "Перезавантажує лише інтерфейс Steam без перезапуску клієнта.",
    developerRestartDescription: "Перезапускає Steam з аргументом -dev для ввімкнення режиму розробника.",
    alwaysDeveloperRestart: "Завжди перезапускати Steam у режимі розробника",
    alwaysDeveloperRestartDescription: "Змушує пункт «Перезапустити Steam» завжди перезапускати Steam з аргументом -dev, коли ввімкнено «Перезапустити Steam у режимі розробника».",
  },
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
    zh:
      normalized.includes("tw") ||
      normalized.includes("hk") ||
      normalized.includes("hant")
        ? "tchinese"
        : "schinese",
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

export async function getLanguageKey(
  documentRef: Document = document,
): Promise<string> {
  try {
    const result = steamWindow.SteamClient?.Settings?.GetCurrentLanguage?.();

    const steamLanguage =
      result && typeof (result as Promise<string>)?.then === "function"
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

export async function translate(
  key: TextKey,
  documentRef: Document = document,
): Promise<string> {
  const languageKey = await getLanguageKey(documentRef);
  return (TEXT[languageKey] || TEXT.english)[key];
}
