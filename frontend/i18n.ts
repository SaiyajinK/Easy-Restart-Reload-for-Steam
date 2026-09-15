export type TextKey =
  | "restart"
  | "reload"
  | "developerRestart"
  | "developerRestartLocalSession"
  | "restartDescription"
  | "reloadDescription"
  | "developerRestartDescription"
  | "alwaysDeveloperRestart"
  | "alwaysDeveloperRestartDescription"
  | "alwaysDeveloperRestartNote"
  | "reloadRequiredTitle"
  | "reloadRequiredDescription"
  | "reloadNow"
  | "restartRequiredTitle"
  | "restartRequiredDescription"
  | "restartNow"
  | "cancel";

export type TranslationSet =
  Record<TextKey, string>;

export const TEXT:
  Record<string, TranslationSet> = {
  schinese: {
    restart: "重启 Steam",
    reload: "重新加载界面",
    developerRestart:
      "以开发者模式重启 Steam",
    developerRestartLocalSession:
      "以开发者模式重启 Steam（当前会话）",
    restartDescription:
      "完全重启 Steam 客户端。",
    reloadDescription:
      "仅重新加载 Steam 界面，不重启客户端。",
    developerRestartDescription:
      "使用 -dev 参数重启 Steam 以启用开发者模式。",
    alwaysDeveloperRestart:
      "始终以开发者模式重启当前 Steam 会话",
    alwaysDeveloperRestartDescription:
      "当插件设置中的“以开发者模式重启 Steam”选项启用时，强制“重启 Steam”始终使用 -dev 参数重新启动当前 Steam 会话。",
    alwaysDeveloperRestartNote:
      "注意：手动退出 Steam 或重启电脑会结束当前会话，但不会更改你的设置。\n若要始终以开发者模式启动 Steam，请在 Steam 快捷方式中添加 -dev 参数。",
    reloadRequiredTitle: "需要重新加载",
    reloadRequiredDescription:
      "要启用或禁用所选选项，需要重新加载。确定要继续吗？",
    reloadNow: "立即重新加载",
    restartRequiredTitle: "需要重启",
    restartRequiredDescription:
      "要启用或禁用所选选项，需要重启 Steam。确定要继续吗？",
    restartNow: "立即重启",
    cancel: "取消",
  },

  tchinese: {
    restart: "重新啟動 Steam",
    reload: "重新載入介面",
    developerRestart:
      "以開發者模式重新啟動 Steam",
    developerRestartLocalSession:
      "以開發者模式重新啟動 Steam（目前的工作階段）",
    restartDescription:
      "完整重新啟動 Steam 用戶端。",
    reloadDescription:
      "僅重新載入 Steam 介面，不重新啟動用戶端。",
    developerRestartDescription:
      "使用 -dev 參數重新啟動 Steam 以啟用開發者模式。",
    alwaysDeveloperRestart:
      "始終以開發者模式重新啟動目前的 Steam 工作階段",
    alwaysDeveloperRestartDescription:
      "當外掛程式設定中的「以開發者模式重新啟動 Steam」選項啟用時，強制「重新啟動 Steam」始終使用 -dev 參數重新啟動目前的 Steam 工作階段。",
    alwaysDeveloperRestartNote:
      "注意：手動退出 Steam 或重新啟動電腦會結束目前的工作階段，但不會變更你的設定。\n若要始終以開發者模式啟動 Steam，請在 Steam 捷徑中加入 -dev 參數。",
    reloadRequiredTitle: "需要重新載入",
    reloadRequiredDescription:
      "若要啟用或停用所選選項，需要重新載入。確定要繼續嗎？",
    reloadNow: "立即重新載入",
    restartRequiredTitle: "需要重新啟動",
    restartRequiredDescription:
      "若要啟用或停用所選選項，需要重新啟動 Steam。確定要繼續嗎？",
    restartNow: "立即重新啟動",
    cancel: "取消",
  },

  japanese: {
    restart: "Steam を再起動",
    reload: "UI を再読み込み",
    developerRestart:
      "Steam を開発者モードで再起動",
    developerRestartLocalSession:
      "Steam を開発者モードで再起動（現在のセッション）",
    restartDescription:
      "Steam クライアントを完全に再起動します。",
    reloadDescription:
      "Steam クライアントを再起動せずにインターフェースのみを再読み込みします。",
    developerRestartDescription:
      "-dev 引数を使用して Steam を再起動し、開発者モードを有効にします。",
    alwaysDeveloperRestart:
      "現在の Steam セッションを常に開発者モードで再起動",
    alwaysDeveloperRestartDescription:
      "プラグイン設定で「Steam を開発者モードで再起動」が有効な場合、「Steam を再起動」で現在の Steam セッションを常に -dev 引数付きで再起動します。",
    alwaysDeveloperRestartNote:
      "注意：Steam を手動で終了するか PC を再起動すると、設定を変更せずに現在のセッションが終了します。\nSteam を常に開発者モードで起動するには、Steam のショートカットに -dev 引数を追加してください。",
    reloadRequiredTitle:
      "再読み込みが必要です",
    reloadRequiredDescription:
      "選択したオプションを有効または無効にするには、再読み込みが必要です。続行してもよろしいですか？",
    reloadNow: "今すぐ再読み込み",
    restartRequiredTitle:
      "再起動が必要です",
    restartRequiredDescription:
      "選択したオプションを有効または無効にするには、Steam の再起動が必要です。続行してもよろしいですか？",
    restartNow: "今すぐ再起動",
    cancel: "キャンセル",
  },

  koreana: {
    restart: "Steam 재시작",
    reload: "UI 새로고침",
    developerRestart:
      "개발자 모드로 Steam 재시작",
    developerRestartLocalSession:
      "개발자 모드로 Steam 재시작 (현재 세션)",
    restartDescription:
      "Steam 클라이언트를 완전히 다시 시작합니다.",
    reloadDescription:
      "클라이언트를 다시 시작하지 않고 Steam 인터페이스만 다시 불러옵니다.",
    developerRestartDescription:
      "-dev 인수로 Steam을 다시 시작하여 개발자 모드를 활성화합니다.",
    alwaysDeveloperRestart:
      "현재 Steam 세션을 항상 개발자 모드로 재시작",
    alwaysDeveloperRestartDescription:
      "플러그인 설정에서 개발자 모드로 Steam 재시작 옵션이 활성화된 경우 Steam 재시작 항목이 현재 Steam 세션을 항상 -dev 인수로 다시 시작하도록 합니다.",
    alwaysDeveloperRestartNote:
      "참고: Steam을 수동으로 종료하거나 PC를 다시 시작하면 설정을 변경하지 않고 현재 세션이 종료됩니다.\nSteam을 항상 개발자 모드로 시작하려면 Steam 바로 가기에 -dev 인수를 추가하세요.",
    reloadRequiredTitle:
      "새로고침 필요",
    reloadRequiredDescription:
      "선택한 옵션을 활성화하거나 비활성화하려면 새로고침이 필요합니다. 계속하시겠습니까?",
    reloadNow: "지금 새로고침",
    restartRequiredTitle:
      "재시작 필요",
    restartRequiredDescription:
      "선택한 옵션을 활성화하거나 비활성화하려면 Steam을 다시 시작해야 합니다. 계속하시겠습니까?",
    restartNow: "지금 재시작",
    cancel: "취소",
  },

  thai: {
    restart: "รีสตาร์ท Steam",
    reload: "โหลดอินเทอร์เฟซใหม่",
    developerRestart:
      "รีสตาร์ท Steam ในโหมดนักพัฒนา",
    developerRestartLocalSession:
      "รีสตาร์ท Steam ในโหมดนักพัฒนา (เซสชันปัจจุบัน)",
    restartDescription:
      "รีสตาร์ทไคลเอนต์ Steam อย่างสมบูรณ์",
    reloadDescription:
      "โหลดเฉพาะอินเทอร์เฟซ Steam ใหม่โดยไม่รีสตาร์ทไคลเอนต์",
    developerRestartDescription:
      "รีสตาร์ท Steam ด้วยอาร์กิวเมนต์ -dev เพื่อเปิดใช้งานโหมดนักพัฒนา",
    alwaysDeveloperRestart:
      "รีสตาร์ทเซสชัน Steam ปัจจุบันในโหมดนักพัฒนาเสมอ",
    alwaysDeveloperRestartDescription:
      "บังคับให้รายการรีสตาร์ท Steam เปิดเซสชัน Steam ปัจจุบันใหม่ด้วย -dev เสมอ เมื่อเปิดใช้งานตัวเลือกรีสตาร์ท Steam ในโหมดนักพัฒนาในการตั้งค่าปลั๊กอิน",
    alwaysDeveloperRestartNote:
      "หมายเหตุ: การออกจาก Steam ด้วยตนเองหรือรีสตาร์ทพีซีจะสิ้นสุดเซสชันปัจจุบันโดยไม่เปลี่ยนการตั้งค่าของคุณ\nหากต้องการเริ่ม Steam ในโหมดนักพัฒนาเสมอ ให้เพิ่มอาร์กิวเมนต์ -dev ในทางลัด Steam",
    reloadRequiredTitle:
      "จำเป็นต้องโหลดใหม่",
    reloadRequiredDescription:
      "จำเป็นต้องโหลดใหม่เพื่อเปิดหรือปิดตัวเลือกที่เลือก คุณแน่ใจหรือไม่ว่าต้องการดำเนินการต่อ",
    reloadNow: "โหลดใหม่ตอนนี้",
    restartRequiredTitle:
      "จำเป็นต้องรีสตาร์ท",
    restartRequiredDescription:
      "จำเป็นต้องรีสตาร์ท Steam เพื่อเปิดหรือปิดตัวเลือกที่เลือก คุณแน่ใจหรือไม่ว่าต้องการดำเนินการต่อ",
    restartNow: "รีสตาร์ทตอนนี้",
    cancel: "ยกเลิก",
  },

  bulgarian: {
    restart: "Рестартирай Steam",
    reload: "Презареди интерфейса",
    developerRestart:
      "Рестартирай Steam в режим за разработчици",
    developerRestartLocalSession:
      "Рестартирай Steam в режим за разработчици (текущата сесия)",
    restartDescription:
      "Рестартира напълно Steam клиента.",
    reloadDescription:
      "Презарежда само интерфейса на Steam, без да рестартира клиента.",
    developerRestartDescription:
      "Рестартира Steam с аргумента -dev, за да активира режима за разработчици.",
    alwaysDeveloperRestart:
      "Винаги рестартирай текущата Steam сесия в режим за разработчици",
    alwaysDeveloperRestartDescription:
      "Принуждава „Рестартирай Steam“ винаги да стартира отново текущата Steam сесия с -dev, когато опцията „Рестартирай Steam в режим за разработчици“ е активирана в настройките на приставката.",
    alwaysDeveloperRestartNote:
      "ЗАБЕЛЕЖКА: Ръчното затваряне на Steam или рестартирането на компютъра прекратява текущата сесия, без да променя настройките ви.\nЗа да стартирате Steam винаги в режим за разработчици, добавете аргумента -dev към прекия път на Steam.",
    reloadRequiredTitle:
      "Необходимо е презареждане",
    reloadRequiredDescription:
      "За да активирате или деактивирате избраните опции, е необходимо презареждане. Сигурни ли сте, че искате да продължите?",
    reloadNow: "Презареди сега",
    restartRequiredTitle:
      "Необходимо е рестартиране",
    restartRequiredDescription:
      "За да активирате или деактивирате избраните опции, е необходимо рестартиране на Steam. Сигурни ли сте, че искате да продължите?",
    restartNow: "Рестартирай сега",
    cancel: "Отказ",
  },

  czech: {
    restart: "Restartovat Steam",
    reload: "Znovu načíst rozhraní",
    developerRestart:
      "Restartovat Steam ve vývojářském režimu",
    developerRestartLocalSession:
      "Restartovat Steam ve vývojářském režimu (aktuální relace)",
    restartDescription:
      "Kompletně restartuje klienta Steam.",
    reloadDescription:
      "Znovu načte pouze rozhraní Steam bez restartování klienta.",
    developerRestartDescription:
      "Restartuje Steam s parametrem -dev a aktivuje vývojářský režim.",
    alwaysDeveloperRestart:
      "Vždy restartovat aktuální relaci Steam ve vývojářském režimu",
    alwaysDeveloperRestartDescription:
      "Vynutí, aby položka Restartovat Steam vždy znovu spustila aktuální relaci Steam s parametrem -dev, když je v nastavení pluginu povolena možnost Restartovat Steam ve vývojářském režimu.",
    alwaysDeveloperRestartNote:
      "POZNÁMKA: Ruční ukončení Steamu nebo restartování počítače ukončí aktuální relaci, aniž by změnilo vaše nastavení.\nChcete-li Steam vždy spouštět ve vývojářském režimu, přidejte parametr -dev do zástupce Steamu.",
    reloadRequiredTitle:
      "Je vyžadováno nové načtení",
    reloadRequiredDescription:
      "Pro aktivaci nebo deaktivaci vybraných možností je nutné nové načtení. Opravdu chcete pokračovat?",
    reloadNow: "Načíst znovu",
    restartRequiredTitle:
      "Je vyžadován restart",
    restartRequiredDescription:
      "Pro aktivaci nebo deaktivaci vybraných možností je nutné restartovat Steam. Opravdu chcete pokračovat?",
    restartNow: "Restartovat nyní",
    cancel: "Zrušit",
  },

  danish: {
    restart: "Genstart Steam",
    reload: "Genindlæs brugerfladen",
    developerRestart:
      "Genstart Steam i udviklertilstand",
    developerRestartLocalSession:
      "Genstart Steam i udviklertilstand (aktuel session)",
    restartDescription:
      "Genstarter Steam-klienten fuldstændigt.",
    reloadDescription:
      "Genindlæser kun Steam-brugerfladen uden at genstarte klienten.",
    developerRestartDescription:
      "Genstarter Steam med parameteren -dev for at aktivere udviklertilstand.",
    alwaysDeveloperRestart:
      "Genstart altid den aktuelle Steam-session i udviklertilstand",
    alwaysDeveloperRestartDescription:
      "Tvinger Genstart Steam til altid at genstarte den aktuelle Steam-session med -dev, når Genstart Steam i udviklertilstand er aktiveret i pluginindstillingerne.",
    alwaysDeveloperRestartNote:
      "BEMÆRK: Manuel afslutning af Steam eller genstart af din pc afslutter den aktuelle session uden at ændre dine indstillinger.\nHvis Steam altid skal starte i udviklertilstand, skal du føje argumentet -dev til din Steam-genvej.",
    reloadRequiredTitle:
      "Genindlæsning påkrævet",
    reloadRequiredDescription:
      "For at aktivere eller deaktivere de valgte indstillinger kræves en genindlæsning. Er du sikker på, at du vil fortsætte?",
    reloadNow: "Genindlæs nu",
    restartRequiredTitle:
      "Genstart påkrævet",
    restartRequiredDescription:
      "For at aktivere eller deaktivere de valgte indstillinger skal Steam genstartes. Er du sikker på, at du vil fortsætte?",
    restartNow: "Genstart nu",
    cancel: "Annuller",
  },

  german: {
    restart: "Steam neu starten",
    reload: "Oberfläche neu laden",
    developerRestart:
      "Steam im Entwicklermodus neu starten",
    developerRestartLocalSession:
      "Steam im Entwicklermodus neu starten (aktuelle Sitzung)",
    restartDescription:
      "Startet den Steam-Client vollständig neu.",
    reloadDescription:
      "Lädt nur die Steam-Oberfläche neu, ohne den Client neu zu starten.",
    developerRestartDescription:
      "Startet Steam mit dem Argument -dev neu, um den Entwicklermodus zu aktivieren.",
    alwaysDeveloperRestart:
      "Die aktuelle Steam-Sitzung immer im Entwicklermodus neu starten",
    alwaysDeveloperRestartDescription:
      "Erzwingt, dass „Steam neu starten“ die aktuelle Steam-Sitzung immer mit -dev neu startet, wenn „Steam im Entwicklermodus neu starten“ in den Plugin-Einstellungen aktiviert ist.",
    alwaysDeveloperRestartNote:
      "HINWEIS: Wenn Sie Steam manuell beenden oder Ihren PC neu starten, wird die aktuelle Sitzung beendet, ohne Ihre Einstellungen zu ändern.\nUm Steam immer im Entwicklermodus zu starten, fügen Sie das Argument -dev zu Ihrer Steam-Verknüpfung hinzu.",
    reloadRequiredTitle:
      "Neuladen erforderlich",
    reloadRequiredDescription:
      "Zum Aktivieren oder Deaktivieren der ausgewählten Optionen ist ein Neuladen erforderlich. Möchten Sie wirklich fortfahren?",
    reloadNow: "Jetzt neu laden",
    restartRequiredTitle:
      "Neustart erforderlich",
    restartRequiredDescription:
      "Zum Aktivieren oder Deaktivieren der ausgewählten Optionen muss Steam neu gestartet werden. Möchten Sie wirklich fortfahren?",
    restartNow: "Jetzt neu starten",
    cancel: "Abbrechen",
  },

  english: {
    restart: "Restart Steam",
    reload: "Reload UI",
    developerRestart:
      "Restart Steam in Developer Mode",
    developerRestartLocalSession:
      "Restart Steam in Developer Mode (current session)",
    restartDescription:
      "Fully restarts the Steam client.",
    reloadDescription:
      "Reloads only the Steam interface without restarting the client.",
    developerRestartDescription:
      "Restarts Steam with the -dev argument to enable Developer Mode.",
    alwaysDeveloperRestart:
      "Always restart the current Steam session in Developer Mode",
    alwaysDeveloperRestartDescription:
      "Forces the Restart Steam entry to always relaunch the current Steam session with -dev when the Restart Steam in Developer Mode option is enabled in the plugin settings.",
    alwaysDeveloperRestartNote:
      "NOTE: Manually quitting Steam or restarting your PC ends the current session without changing your settings.\nTo always start Steam in Developer Mode, add the -dev argument to your Steam shortcut.",
    reloadRequiredTitle:
      "Reload required",
    reloadRequiredDescription:
      "To enable or disable the selected options, a reload is required. Are you sure you want to continue?",
    reloadNow: "Reload now",
    restartRequiredTitle:
      "Restart required",
    restartRequiredDescription:
      "To enable or disable the selected options, a Steam restart is required. Are you sure you want to continue?",
    restartNow: "Restart now",
    cancel: "Cancel",
  },

  spanish: {
    restart: "Reiniciar Steam",
    reload: "Recargar interfaz",
    developerRestart:
      "Reiniciar Steam en modo desarrollador",
    developerRestartLocalSession:
      "Reiniciar Steam en modo desarrollador (sesión actual)",
    restartDescription:
      "Reinicia completamente el cliente de Steam.",
    reloadDescription:
      "Recarga únicamente la interfaz de Steam sin reiniciar el cliente.",
    developerRestartDescription:
      "Reinicia Steam con el argumento -dev para activar el modo desarrollador.",
    alwaysDeveloperRestart:
      "Reiniciar siempre la sesión actual de Steam en modo desarrollador",
    alwaysDeveloperRestartDescription:
      "Fuerza la opción Reiniciar Steam a reiniciar siempre la sesión actual de Steam con -dev cuando la opción Reiniciar Steam en modo desarrollador está activada en los ajustes del complemento.",
    alwaysDeveloperRestartNote:
      "NOTA: Salir manualmente de Steam o reiniciar el PC finaliza la sesión actual sin cambiar tus ajustes.\nPara iniciar Steam siempre en modo desarrollador, añade el argumento -dev al acceso directo de Steam.",
    reloadRequiredTitle:
      "Es necesario recargar",
    reloadRequiredDescription:
      "Para activar o desactivar las opciones seleccionadas, es necesario recargar. ¿Seguro que quieres continuar?",
    reloadNow: "Recargar ahora",
    restartRequiredTitle:
      "Es necesario reiniciar",
    restartRequiredDescription:
      "Para activar o desactivar las opciones seleccionadas, es necesario reiniciar Steam. ¿Seguro que quieres continuar?",
    restartNow: "Reiniciar ahora",
    cancel: "Cancelar",
  },

  latam: {
    restart: "Reiniciar Steam",
    reload: "Recargar interfaz",
    developerRestart:
      "Reiniciar Steam en modo desarrollador",
    developerRestartLocalSession:
      "Reiniciar Steam en modo desarrollador (sesión actual)",
    restartDescription:
      "Reinicia completamente el cliente de Steam.",
    reloadDescription:
      "Recarga únicamente la interfaz de Steam sin reiniciar el cliente.",
    developerRestartDescription:
      "Reinicia Steam con el argumento -dev para activar el modo desarrollador.",
    alwaysDeveloperRestart:
      "Reiniciar siempre la sesión actual de Steam en modo desarrollador",
    alwaysDeveloperRestartDescription:
      "Fuerza la opción Reiniciar Steam a reiniciar siempre la sesión actual de Steam con -dev cuando la opción Reiniciar Steam en modo desarrollador está activada en la configuración del complemento.",
    alwaysDeveloperRestartNote:
      "NOTA: Salir manualmente de Steam o reiniciar tu PC finaliza la sesión actual sin cambiar tu configuración.\nPara iniciar Steam siempre en modo desarrollador, agrega el argumento -dev al acceso directo de Steam.",
    reloadRequiredTitle:
      "Se requiere recargar",
    reloadRequiredDescription:
      "Para activar o desactivar las opciones seleccionadas, es necesario recargar. ¿Estás seguro de que quieres continuar?",
    reloadNow: "Recargar ahora",
    restartRequiredTitle:
      "Se requiere reiniciar",
    restartRequiredDescription:
      "Para activar o desactivar las opciones seleccionadas, es necesario reiniciar Steam. ¿Estás seguro de que quieres continuar?",
    restartNow: "Reiniciar ahora",
    cancel: "Cancelar",
  },

  greek: {
    restart: "Επανεκκίνηση Steam",
    reload: "Επαναφόρτωση διεπαφής",
    developerRestart:
      "Επανεκκίνηση Steam σε λειτουργία προγραμματιστή",
    developerRestartLocalSession:
      "Επανεκκίνηση Steam σε λειτουργία προγραμματιστή (τρέχουσα συνεδρία)",
    restartDescription:
      "Επανεκκινεί πλήρως τον πελάτη Steam.",
    reloadDescription:
      "Επαναφορτώνει μόνο τη διεπαφή του Steam χωρίς επανεκκίνηση του πελάτη.",
    developerRestartDescription:
      "Επανεκκινεί το Steam με το όρισμα -dev για ενεργοποίηση της λειτουργίας προγραμματιστή.",
    alwaysDeveloperRestart:
      "Πάντα επανεκκίνηση της τρέχουσας συνεδρίας Steam σε λειτουργία προγραμματιστή",
    alwaysDeveloperRestartDescription:
      "Αναγκάζει την επιλογή Επανεκκίνηση Steam να επανεκκινεί πάντα την τρέχουσα συνεδρία Steam με -dev όταν η επιλογή Επανεκκίνηση Steam σε λειτουργία προγραμματιστή είναι ενεργοποιημένη στις ρυθμίσεις της προσθήκης.",
    alwaysDeveloperRestartNote:
      "ΣΗΜΕΙΩΣΗ: Η χειροκίνητη έξοδος από το Steam ή η επανεκκίνηση του υπολογιστή σας τερματίζει την τρέχουσα συνεδρία χωρίς να αλλάζει τις ρυθμίσεις σας.\nΓια να ξεκινά πάντα το Steam σε λειτουργία προγραμματιστή, προσθέστε το όρισμα -dev στη συντόμευση του Steam.",
    reloadRequiredTitle:
      "Απαιτείται επαναφόρτωση",
    reloadRequiredDescription:
      "Για να ενεργοποιήσετε ή να απενεργοποιήσετε τις επιλεγμένες επιλογές, απαιτείται επαναφόρτωση. Είστε βέβαιοι ότι θέλετε να συνεχίσετε;",
    reloadNow: "Επαναφόρτωση τώρα",
    restartRequiredTitle:
      "Απαιτείται επανεκκίνηση",
    restartRequiredDescription:
      "Για να ενεργοποιήσετε ή να απενεργοποιήσετε τις επιλεγμένες επιλογές, απαιτείται επανεκκίνηση του Steam. Είστε βέβαιοι ότι θέλετε να συνεχίσετε;",
    restartNow: "Επανεκκίνηση τώρα",
    cancel: "Ακύρωση",
  },

  french: {
    restart: "Redémarrer Steam",
    reload: "Recharger l’interface",
    developerRestart:
      "Redémarrer Steam en mode développeur",
    developerRestartLocalSession:
      "Redémarrer Steam en mode développeur (session en cours)",
    restartDescription:
      "Redémarre complètement le client Steam.",
    reloadDescription:
      "Recharge uniquement l’interface Steam sans redémarrer le client.",
    developerRestartDescription:
      "Redémarre Steam avec l’argument -dev afin d’activer le mode développeur.",
    alwaysDeveloperRestart:
      "Toujours redémarrer la session en cours de Steam en mode développeur",
    alwaysDeveloperRestartDescription:
      "Force l’entrée Redémarrer Steam à toujours relancer la session en cours de Steam avec -dev lorsque l’option Redémarrer Steam en mode développeur est activée dans les options du plugin.",
    alwaysDeveloperRestartNote:
      "NOTE : Quitter Steam manuellement ou redémarrer votre PC termine la session en cours sans modifier vos réglages.\nPour toujours démarrer Steam en mode développeur, ajoutez l’argument -dev dans votre raccourci Steam.",
    reloadRequiredTitle:
      "Rechargement requis",
    reloadRequiredDescription:
      "Pour activer ou désactiver les options sélectionnées, un rechargement est nécessaire. Êtes-vous sûr de vouloir continuer ?",
    reloadNow: "Recharger maintenant",
    restartRequiredTitle:
      "Redémarrage requis",
    restartRequiredDescription:
      "Pour activer ou désactiver les options sélectionnées, un redémarrage de Steam est nécessaire. Êtes-vous sûr de vouloir continuer ?",
    restartNow: "Redémarrer maintenant",
    cancel: "Annuler",
  },

  indonesian: {
    restart: "Mulai ulang Steam",
    reload: "Muat ulang antarmuka",
    developerRestart:
      "Mulai ulang Steam dalam mode pengembang",
    developerRestartLocalSession:
      "Mulai ulang Steam dalam mode pengembang (sesi saat ini)",
    restartDescription:
      "Memulai ulang klien Steam sepenuhnya.",
    reloadDescription:
      "Hanya memuat ulang antarmuka Steam tanpa memulai ulang klien.",
    developerRestartDescription:
      "Memulai ulang Steam dengan argumen -dev untuk mengaktifkan mode pengembang.",
    alwaysDeveloperRestart:
      "Selalu mulai ulang sesi Steam saat ini dalam mode pengembang",
    alwaysDeveloperRestartDescription:
      "Memaksa opsi Mulai ulang Steam untuk selalu memulai ulang sesi Steam saat ini dengan -dev ketika opsi Mulai ulang Steam dalam mode pengembang diaktifkan di pengaturan plugin.",
    alwaysDeveloperRestartNote:
      "CATATAN: Keluar dari Steam secara manual atau memulai ulang PC akan mengakhiri sesi saat ini tanpa mengubah pengaturan Anda.\nAgar Steam selalu dimulai dalam mode pengembang, tambahkan argumen -dev ke pintasan Steam.",
    reloadRequiredTitle:
      "Perlu memuat ulang",
    reloadRequiredDescription:
      "Untuk mengaktifkan atau menonaktifkan opsi yang dipilih, diperlukan pemuatan ulang. Yakin ingin melanjutkan?",
    reloadNow: "Muat ulang sekarang",
    restartRequiredTitle:
      "Perlu memulai ulang",
    restartRequiredDescription:
      "Untuk mengaktifkan atau menonaktifkan opsi yang dipilih, Steam perlu dimulai ulang. Yakin ingin melanjutkan?",
    restartNow: "Mulai ulang sekarang",
    cancel: "Batal",
  },

  malay: {
    restart: "Mulakan semula Steam",
    reload: "Muat semula antara muka",
    developerRestart:
      "Mulakan semula Steam dalam Mod Pembangun",
    developerRestartLocalSession:
      "Mulakan semula Steam dalam Mod Pembangun (sesi semasa)",
    restartDescription:
      "Mulakan semula klien Steam sepenuhnya.",
    reloadDescription:
      "Muat semula antara muka Steam sahaja tanpa memulakan semula klien.",
    developerRestartDescription:
      "Mulakan semula Steam dengan argumen -dev untuk mengaktifkan Mod Pembangun.",
    alwaysDeveloperRestart:
      "Sentiasa mulakan semula sesi Steam semasa dalam Mod Pembangun",
    alwaysDeveloperRestartDescription:
      "Memaksa pilihan Mulakan semula Steam untuk sentiasa melancarkan semula sesi Steam semasa dengan -dev apabila pilihan Mulakan semula Steam dalam Mod Pembangun diaktifkan dalam tetapan plugin.",
    alwaysDeveloperRestartNote:
      "NOTA: Keluar daripada Steam secara manual atau memulakan semula PC anda akan menamatkan sesi semasa tanpa mengubah tetapan anda.\nUntuk sentiasa memulakan Steam dalam Mod Pembangun, tambahkan argumen -dev pada pintasan Steam anda.",
    reloadRequiredTitle:
      "Muat semula diperlukan",
    reloadRequiredDescription:
      "Untuk mengaktifkan atau menyahaktifkan pilihan yang dipilih, muat semula diperlukan. Adakah anda pasti mahu meneruskan?",
    reloadNow: "Muat semula sekarang",
    restartRequiredTitle:
      "Mulakan semula diperlukan",
    restartRequiredDescription:
      "Untuk mengaktifkan atau menyahaktifkan pilihan yang dipilih, Steam perlu dimulakan semula. Adakah anda pasti mahu meneruskan?",
    restartNow: "Mulakan semula sekarang",
    cancel: "Batal",
  },

  italian: {
    restart: "Riavvia Steam",
    reload: "Ricarica interfaccia",
    developerRestart:
      "Riavvia Steam in modalità sviluppatore",
    developerRestartLocalSession:
      "Riavvia Steam in modalità sviluppatore (sessione corrente)",
    restartDescription:
      "Riavvia completamente il client Steam.",
    reloadDescription:
      "Ricarica solo l’interfaccia di Steam senza riavviare il client.",
    developerRestartDescription:
      "Riavvia Steam con l’argomento -dev per attivare la modalità sviluppatore.",
    alwaysDeveloperRestart:
      "Riavvia sempre la sessione Steam corrente in modalità sviluppatore",
    alwaysDeveloperRestartDescription:
      "Forza l’opzione Riavvia Steam a riavviare sempre la sessione Steam corrente con -dev quando l’opzione Riavvia Steam in modalità sviluppatore è attivata nelle impostazioni del plugin.",
    alwaysDeveloperRestartNote:
      "NOTA: Uscire manualmente da Steam o riavviare il PC termina la sessione corrente senza modificare le impostazioni.\nPer avviare sempre Steam in modalità sviluppatore, aggiungi l’argomento -dev al collegamento di Steam.",
    reloadRequiredTitle:
      "Ricaricamento richiesto",
    reloadRequiredDescription:
      "Per attivare o disattivare le opzioni selezionate è necessario ricaricare. Vuoi continuare?",
    reloadNow: "Ricarica ora",
    restartRequiredTitle:
      "Riavvio richiesto",
    restartRequiredDescription:
      "Per attivare o disattivare le opzioni selezionate è necessario riavviare Steam. Vuoi continuare?",
    restartNow: "Riavvia ora",
    cancel: "Annulla",
  },

  hungarian: {
    restart: "Steam újraindítása",
    reload: "Felület újratöltése",
    developerRestart:
      "Steam újraindítása fejlesztői módban",
    developerRestartLocalSession:
      "Steam újraindítása fejlesztői módban (aktuális munkamenet)",
    restartDescription:
      "Teljesen újraindítja a Steam klienst.",
    reloadDescription:
      "Csak a Steam felületét tölti újra a kliens újraindítása nélkül.",
    developerRestartDescription:
      "A Steamet a -dev argumentummal indítja újra a fejlesztői mód engedélyezéséhez.",
    alwaysDeveloperRestart:
      "Az aktuális Steam-munkamenet mindig fejlesztői módban induljon újra",
    alwaysDeveloperRestartDescription:
      "Arra kényszeríti a Steam újraindítása műveletet, hogy mindig a -dev argumentummal indítsa újra az aktuális Steam-munkamenetet, amikor a Steam újraindítása fejlesztői módban beállítás engedélyezve van a bővítmény beállításaiban.",
    alwaysDeveloperRestartNote:
      "MEGJEGYZÉS: A Steam kézi bezárása vagy a számítógép újraindítása az aktuális munkamenetet a beállítások módosítása nélkül fejezi be.\nHa a Steam mindig fejlesztői módban induljon, adja hozzá a -dev argumentumot a Steam parancsikonjához.",
    reloadRequiredTitle:
      "Újratöltés szükséges",
    reloadRequiredDescription:
      "A kijelölt beállítások engedélyezéséhez vagy letiltásához újratöltés szükséges. Biztosan folytatja?",
    reloadNow: "Újratöltés most",
    restartRequiredTitle:
      "Újraindítás szükséges",
    restartRequiredDescription:
      "A kijelölt beállítások engedélyezéséhez vagy letiltásához a Steam újraindítása szükséges. Biztosan folytatja?",
    restartNow: "Újraindítás most",
    cancel: "Mégse",
  },

  dutch: {
    restart: "Steam opnieuw starten",
    reload: "Interface herladen",
    developerRestart:
      "Steam opnieuw starten in ontwikkelaarsmodus",
    developerRestartLocalSession:
      "Steam opnieuw starten in ontwikkelaarsmodus (huidige sessie)",
    restartDescription:
      "Start de Steam-client volledig opnieuw.",
    reloadDescription:
      "Herlaadt alleen de Steam-interface zonder de client opnieuw te starten.",
    developerRestartDescription:
      "Start Steam opnieuw met het argument -dev om de ontwikkelaarsmodus in te schakelen.",
    alwaysDeveloperRestart:
      "De huidige Steam-sessie altijd opnieuw starten in ontwikkelaarsmodus",
    alwaysDeveloperRestartDescription:
      "Dwingt Steam opnieuw starten om de huidige Steam-sessie altijd opnieuw te starten met -dev wanneer Steam opnieuw starten in ontwikkelaarsmodus is ingeschakeld in de plugininstellingen.",
    alwaysDeveloperRestartNote:
      "OPMERKING: Als je Steam handmatig afsluit of je pc opnieuw opstart, wordt de huidige sessie beëindigd zonder je instellingen te wijzigen.\nOm Steam altijd in ontwikkelaarsmodus te starten, voeg je het argument -dev toe aan je Steam-snelkoppeling.",
    reloadRequiredTitle:
      "Herladen vereist",
    reloadRequiredDescription:
      "Om de geselecteerde opties in of uit te schakelen, moet de interface worden herladen. Weet je zeker dat je wilt doorgaan?",
    reloadNow: "Nu herladen",
    restartRequiredTitle:
      "Opnieuw starten vereist",
    restartRequiredDescription:
      "Om de geselecteerde opties in of uit te schakelen, moet Steam opnieuw worden gestart. Weet je zeker dat je wilt doorgaan?",
    restartNow: "Nu opnieuw starten",
    cancel: "Annuleren",
  },

  norwegian: {
    restart: "Start Steam på nytt",
    reload: "Last inn grensesnittet på nytt",
    developerRestart:
      "Start Steam på nytt i utviklermodus",
    developerRestartLocalSession:
      "Start Steam på nytt i utviklermodus (gjeldende økt)",
    restartDescription:
      "Starter Steam-klienten fullstendig på nytt.",
    reloadDescription:
      "Laster bare Steam-grensesnittet på nytt uten å starte klienten på nytt.",
    developerRestartDescription:
      "Starter Steam på nytt med argumentet -dev for å aktivere utviklermodus.",
    alwaysDeveloperRestart:
      "Start alltid den gjeldende Steam-økten på nytt i utviklermodus",
    alwaysDeveloperRestartDescription:
      "Tvinger Start Steam på nytt til alltid å starte den gjeldende Steam-økten på nytt med -dev når Start Steam på nytt i utviklermodus er aktivert i plugininnstillingene.",
    alwaysDeveloperRestartNote:
      "MERK: Hvis du avslutter Steam manuelt eller starter PC-en på nytt, avsluttes den gjeldende økten uten at innstillingene dine endres.\nFor å alltid starte Steam i utviklermodus legger du til argumentet -dev i Steam-snarveien.",
    reloadRequiredTitle:
      "Ny innlasting kreves",
    reloadRequiredDescription:
      "For å aktivere eller deaktivere de valgte alternativene kreves en ny innlasting. Er du sikker på at du vil fortsette?",
    reloadNow: "Last inn på nytt nå",
    restartRequiredTitle:
      "Omstart kreves",
    restartRequiredDescription:
      "For å aktivere eller deaktivere de valgte alternativene må Steam startes på nytt. Er du sikker på at du vil fortsette?",
    restartNow: "Start på nytt nå",
    cancel: "Avbryt",
  },

  polish: {
    restart: "Uruchom ponownie Steam",
    reload: "Przeładuj interfejs",
    developerRestart:
      "Uruchom ponownie Steam w trybie deweloperskim",
    developerRestartLocalSession:
      "Uruchom ponownie Steam w trybie deweloperskim (bieżąca sesja)",
    restartDescription:
      "Całkowicie ponownie uruchamia klienta Steam.",
    reloadDescription:
      "Przeładowuje tylko interfejs Steam bez ponownego uruchamiania klienta.",
    developerRestartDescription:
      "Uruchamia Steam ponownie z argumentem -dev, aby włączyć tryb deweloperski.",
    alwaysDeveloperRestart:
      "Zawsze uruchamiaj ponownie bieżącą sesję Steam w trybie deweloperskim",
    alwaysDeveloperRestartDescription:
      "Wymusza, aby opcja Uruchom ponownie Steam zawsze uruchamiała ponownie bieżącą sesję Steam z argumentem -dev, gdy opcja Uruchom ponownie Steam w trybie deweloperskim jest włączona w ustawieniach wtyczki.",
    alwaysDeveloperRestartNote:
      "UWAGA: Ręczne zamknięcie Steam lub ponowne uruchomienie komputera kończy bieżącą sesję bez zmiany ustawień.\nAby Steam zawsze uruchamiał się w trybie deweloperskim, dodaj argument -dev do skrótu Steam.",
    reloadRequiredTitle:
      "Wymagane przeładowanie",
    reloadRequiredDescription:
      "Aby włączyć lub wyłączyć wybrane opcje, wymagane jest przeładowanie. Czy na pewno chcesz kontynuować?",
    reloadNow: "Przeładuj teraz",
    restartRequiredTitle:
      "Wymagane ponowne uruchomienie",
    restartRequiredDescription:
      "Aby włączyć lub wyłączyć wybrane opcje, należy ponownie uruchomić Steam. Czy na pewno chcesz kontynuować?",
    restartNow:
      "Uruchom ponownie teraz",
    cancel: "Anuluj",
  },

  portuguese: {
    restart: "Reiniciar Steam",
    reload: "Recarregar interface",
    developerRestart:
      "Reiniciar Steam no modo de programador",
    developerRestartLocalSession:
      "Reiniciar Steam no modo de programador (sessão atual)",
    restartDescription:
      "Reinicia completamente o cliente Steam.",
    reloadDescription:
      "Recarrega apenas a interface do Steam sem reiniciar o cliente.",
    developerRestartDescription:
      "Reinicia o Steam com o argumento -dev para ativar o modo de programador.",
    alwaysDeveloperRestart:
      "Reiniciar sempre a sessão atual do Steam no modo de programador",
    alwaysDeveloperRestartDescription:
      "Força a opção Reiniciar Steam a reiniciar sempre a sessão atual do Steam com -dev quando a opção Reiniciar Steam no modo de programador está ativada nas definições do plugin.",
    alwaysDeveloperRestartNote:
      "NOTA: Sair manualmente do Steam ou reiniciar o PC termina a sessão atual sem alterar as suas definições.\nPara iniciar sempre o Steam no modo de programador, adicione o argumento -dev ao atalho do Steam.",
    reloadRequiredTitle:
      "É necessário recarregar",
    reloadRequiredDescription:
      "Para ativar ou desativar as opções selecionadas, é necessário recarregar. Tem a certeza de que pretende continuar?",
    reloadNow: "Recarregar agora",
    restartRequiredTitle:
      "É necessário reiniciar",
    restartRequiredDescription:
      "Para ativar ou desativar as opções selecionadas, é necessário reiniciar o Steam. Tem a certeza de que pretende continuar?",
    restartNow: "Reiniciar agora",
    cancel: "Cancelar",
  },

  brazilian: {
    restart: "Reiniciar Steam",
    reload: "Recarregar interface",
    developerRestart:
      "Reiniciar Steam no modo de desenvolvedor",
    developerRestartLocalSession:
      "Reiniciar Steam no modo de desenvolvedor (sessão atual)",
    restartDescription:
      "Reinicia completamente o cliente Steam.",
    reloadDescription:
      "Recarrega apenas a interface do Steam sem reiniciar o cliente.",
    developerRestartDescription:
      "Reinicia o Steam com o argumento -dev para ativar o modo de desenvolvedor.",
    alwaysDeveloperRestart:
      "Sempre reiniciar a sessão atual do Steam no modo de desenvolvedor",
    alwaysDeveloperRestartDescription:
      "Força a opção Reiniciar Steam a sempre reiniciar a sessão atual do Steam com -dev quando a opção Reiniciar Steam no modo de desenvolvedor está ativada nas configurações do plugin.",
    alwaysDeveloperRestartNote:
      "OBSERVAÇÃO: Sair manualmente do Steam ou reiniciar o PC encerra a sessão atual sem alterar suas configurações.\nPara sempre iniciar o Steam no modo de desenvolvedor, adicione o argumento -dev ao atalho do Steam.",
    reloadRequiredTitle:
      "É necessário recarregar",
    reloadRequiredDescription:
      "Para ativar ou desativar as opções selecionadas, é necessário recarregar. Tem certeza de que deseja continuar?",
    reloadNow: "Recarregar agora",
    restartRequiredTitle:
      "É necessário reiniciar",
    restartRequiredDescription:
      "Para ativar ou desativar as opções selecionadas, é necessário reiniciar o Steam. Tem certeza de que deseja continuar?",
    restartNow: "Reiniciar agora",
    cancel: "Cancelar",
  },

  romanian: {
    restart: "Repornește Steam",
    reload: "Reîncarcă interfața",
    developerRestart:
      "Repornește Steam în modul dezvoltator",
    developerRestartLocalSession:
      "Repornește Steam în modul dezvoltator (sesiunea curentă)",
    restartDescription:
      "Repornește complet clientul Steam.",
    reloadDescription:
      "Reîncarcă doar interfața Steam fără a reporni clientul.",
    developerRestartDescription:
      "Repornește Steam cu argumentul -dev pentru a activa modul dezvoltator.",
    alwaysDeveloperRestart:
      "Repornește întotdeauna sesiunea Steam curentă în modul dezvoltator",
    alwaysDeveloperRestartDescription:
      "Forțează opțiunea Repornește Steam să repornească întotdeauna sesiunea Steam curentă cu -dev atunci când opțiunea Repornește Steam în modul dezvoltator este activată în setările pluginului.",
    alwaysDeveloperRestartNote:
      "NOTĂ: Închiderea manuală a Steam sau repornirea PC-ului încheie sesiunea curentă fără a modifica setările.\nPentru a porni întotdeauna Steam în modul dezvoltator, adăugați argumentul -dev la comanda rapidă Steam.",
    reloadRequiredTitle:
      "Este necesară reîncărcarea",
    reloadRequiredDescription:
      "Pentru a activa sau dezactiva opțiunile selectate, este necesară o reîncărcare. Sigur doriți să continuați?",
    reloadNow: "Reîncarcă acum",
    restartRequiredTitle:
      "Este necesară repornirea",
    restartRequiredDescription:
      "Pentru a activa sau dezactiva opțiunile selectate, este necesară repornirea Steam. Sigur doriți să continuați?",
    restartNow: "Repornește acum",
    cancel: "Anulează",
  },

  russian: {
    restart: "Перезапустить Steam",
    reload: "Перезагрузить интерфейс",
    developerRestart:
      "Перезапустить Steam в режиме разработчика",
    developerRestartLocalSession:
      "Перезапустить Steam в режиме разработчика (текущий сеанс)",
    restartDescription:
      "Полностью перезапускает клиент Steam.",
    reloadDescription:
      "Перезагружает только интерфейс Steam без перезапуска клиента.",
    developerRestartDescription:
      "Перезапускает Steam с аргументом -dev для включения режима разработчика.",
    alwaysDeveloperRestart:
      "Всегда перезапускать текущий сеанс Steam в режиме разработчика",
    alwaysDeveloperRestartDescription:
      "Заставляет пункт «Перезапустить Steam» всегда перезапускать текущий сеанс Steam с аргументом -dev, когда параметр «Перезапустить Steam в режиме разработчика» включён в настройках плагина.",
    alwaysDeveloperRestartNote:
      "ПРИМЕЧАНИЕ: Ручной выход из Steam или перезапуск компьютера завершает текущий сеанс без изменения настроек.\nЧтобы Steam всегда запускался в режиме разработчика, добавьте аргумент -dev в ярлык Steam.",
    reloadRequiredTitle:
      "Требуется перезагрузка",
    reloadRequiredDescription:
      "Для включения или отключения выбранных параметров требуется перезагрузка интерфейса. Продолжить?",
    reloadNow: "Перезагрузить сейчас",
    restartRequiredTitle:
      "Требуется перезапуск",
    restartRequiredDescription:
      "Для включения или отключения выбранных параметров требуется перезапуск Steam. Продолжить?",
    restartNow: "Перезапустить сейчас",
    cancel: "Отмена",
  },

  finnish: {
    restart: "Käynnistä Steam uudelleen",
    reload: "Lataa käyttöliittymä uudelleen",
    developerRestart:
      "Käynnistä Steam uudelleen kehittäjätilassa",
    developerRestartLocalSession:
      "Käynnistä Steam uudelleen kehittäjätilassa (nykyinen istunto)",
    restartDescription:
      "Käynnistää Steam-asiakasohjelman kokonaan uudelleen.",
    reloadDescription:
      "Lataa vain Steamin käyttöliittymän uudelleen käynnistämättä asiakasohjelmaa uudelleen.",
    developerRestartDescription:
      "Käynnistää Steamin uudelleen -dev-argumentilla kehittäjätilan käyttöön ottamiseksi.",
    alwaysDeveloperRestart:
      "Käynnistä nykyinen Steam-istunto aina uudelleen kehittäjätilassa",
    alwaysDeveloperRestartDescription:
      "Pakottaa Käynnistä Steam uudelleen -toiminnon käynnistämään nykyisen Steam-istunnon aina uudelleen -dev-argumentilla, kun Käynnistä Steam uudelleen kehittäjätilassa on käytössä laajennuksen asetuksissa.",
    alwaysDeveloperRestartNote:
      "HUOMAUTUS: Steamin sulkeminen manuaalisesti tai tietokoneen käynnistäminen uudelleen päättää nykyisen istunnon muuttamatta asetuksiasi.\nJos haluat Steamin käynnistyvän aina kehittäjätilassa, lisää -dev-argumentti Steamin pikakuvakkeeseen.",
    reloadRequiredTitle:
      "Uudelleenlataus vaaditaan",
    reloadRequiredDescription:
      "Valittujen asetusten ottaminen käyttöön tai poistaminen käytöstä vaatii uudelleenlatauksen. Haluatko varmasti jatkaa?",
    reloadNow: "Lataa nyt uudelleen",
    restartRequiredTitle:
      "Uudelleenkäynnistys vaaditaan",
    restartRequiredDescription:
      "Valittujen asetusten ottaminen käyttöön tai poistaminen käytöstä vaatii Steamin uudelleenkäynnistyksen. Haluatko varmasti jatkaa?",
    restartNow:
      "Käynnistä uudelleen nyt",
    cancel: "Peruuta",
  },

  swedish: {
    restart: "Starta om Steam",
    reload: "Ladda om gränssnittet",
    developerRestart:
      "Starta om Steam i utvecklarläge",
    developerRestartLocalSession:
      "Starta om Steam i utvecklarläge (aktuell session)",
    restartDescription:
      "Startar om Steam-klienten helt.",
    reloadDescription:
      "Laddar endast om Steam-gränssnittet utan att starta om klienten.",
    developerRestartDescription:
      "Startar om Steam med argumentet -dev för att aktivera utvecklarläget.",
    alwaysDeveloperRestart:
      "Starta alltid om den aktuella Steam-sessionen i utvecklarläge",
    alwaysDeveloperRestartDescription:
      "Tvingar Starta om Steam att alltid starta om den aktuella Steam-sessionen med -dev när Starta om Steam i utvecklarläge är aktiverat i plugininställningarna.",
    alwaysDeveloperRestartNote:
      "OBS: Om du avslutar Steam manuellt eller startar om datorn avslutas den aktuella sessionen utan att dina inställningar ändras.\nFör att alltid starta Steam i utvecklarläge lägger du till argumentet -dev i Steam-genvägen.",
    reloadRequiredTitle:
      "Omladdning krävs",
    reloadRequiredDescription:
      "För att aktivera eller inaktivera de valda alternativen krävs en omladdning. Är du säker på att du vill fortsätta?",
    reloadNow: "Ladda om nu",
    restartRequiredTitle:
      "Omstart krävs",
    restartRequiredDescription:
      "För att aktivera eller inaktivera de valda alternativen måste Steam startas om. Är du säker på att du vill fortsätta?",
    restartNow: "Starta om nu",
    cancel: "Avbryt",
  },

  turkish: {
    restart: "Steam’i yeniden başlat",
    reload: "Arayüzü yenile",
    developerRestart:
      "Steam’i geliştirici modunda yeniden başlat",
    developerRestartLocalSession:
      "Steam’i geliştirici modunda yeniden başlat (geçerli oturum)",
    restartDescription:
      "Steam istemcisini tamamen yeniden başlatır.",
    reloadDescription:
      "İstemciyi yeniden başlatmadan yalnızca Steam arayüzünü yeniden yükler.",
    developerRestartDescription:
      "Geliştirici modunu etkinleştirmek için Steam’i -dev argümanıyla yeniden başlatır.",
    alwaysDeveloperRestart:
      "Geçerli Steam oturumunu her zaman geliştirici modunda yeniden başlat",
    alwaysDeveloperRestartDescription:
      "Eklenti ayarlarında Steam’i geliştirici modunda yeniden başlat seçeneği etkinleştirildiğinde Steam’i yeniden başlat seçeneğinin geçerli Steam oturumunu her zaman -dev ile yeniden başlatmasını sağlar.",
    alwaysDeveloperRestartNote:
      "NOT: Steam’den manuel olarak çıkmak veya bilgisayarınızı yeniden başlatmak, ayarlarınızı değiştirmeden geçerli oturumu sonlandırır.\nSteam’i her zaman geliştirici modunda başlatmak için Steam kısayolunuza -dev argümanını ekleyin.",
    reloadRequiredTitle:
      "Yeniden yükleme gerekli",
    reloadRequiredDescription:
      "Seçili seçenekleri etkinleştirmek veya devre dışı bırakmak için yeniden yükleme gereklidir. Devam etmek istediğinizden emin misiniz?",
    reloadNow: "Şimdi yeniden yükle",
    restartRequiredTitle:
      "Yeniden başlatma gerekli",
    restartRequiredDescription:
      "Seçili seçenekleri etkinleştirmek veya devre dışı bırakmak için Steam’in yeniden başlatılması gerekir. Devam etmek istediğinizden emin misiniz?",
    restartNow: "Şimdi yeniden başlat",
    cancel: "İptal",
  },

  vietnamese: {
    restart: "Khởi động lại Steam",
    reload: "Tải lại giao diện",
    developerRestart:
      "Khởi động lại Steam ở chế độ nhà phát triển",
    developerRestartLocalSession:
      "Khởi động lại Steam ở chế độ nhà phát triển (phiên hiện tại)",
    restartDescription:
      "Khởi động lại hoàn toàn ứng dụng Steam.",
    reloadDescription:
      "Chỉ tải lại giao diện Steam mà không khởi động lại ứng dụng.",
    developerRestartDescription:
      "Khởi động lại Steam với đối số -dev để bật chế độ nhà phát triển.",
    alwaysDeveloperRestart:
      "Luôn khởi động lại phiên Steam hiện tại ở chế độ nhà phát triển",
    alwaysDeveloperRestartDescription:
      "Buộc mục Khởi động lại Steam luôn khởi động lại phiên Steam hiện tại với -dev khi tùy chọn Khởi động lại Steam ở chế độ nhà phát triển được bật trong cài đặt plugin.",
    alwaysDeveloperRestartNote:
      "LƯU Ý: Thoát Steam theo cách thủ công hoặc khởi động lại PC sẽ kết thúc phiên hiện tại mà không thay đổi cài đặt của bạn.\nĐể luôn khởi động Steam ở chế độ nhà phát triển, hãy thêm đối số -dev vào lối tắt Steam.",
    reloadRequiredTitle:
      "Cần tải lại",
    reloadRequiredDescription:
      "Để bật hoặc tắt các tùy chọn đã chọn, bạn cần tải lại. Bạn có chắc chắn muốn tiếp tục không?",
    reloadNow: "Tải lại ngay",
    restartRequiredTitle:
      "Cần khởi động lại",
    restartRequiredDescription:
      "Để bật hoặc tắt các tùy chọn đã chọn, bạn cần khởi động lại Steam. Bạn có chắc chắn muốn tiếp tục không?",
    restartNow: "Khởi động lại ngay",
    cancel: "Hủy",
  },

  ukrainian: {
    restart: "Перезапустити Steam",
    reload: "Перезавантажити інтерфейс",
    developerRestart:
      "Перезапустити Steam у режимі розробника",
    developerRestartLocalSession:
      "Перезапустити Steam у режимі розробника (поточний сеанс)",
    restartDescription:
      "Повністю перезапускає клієнт Steam.",
    reloadDescription:
      "Перезавантажує лише інтерфейс Steam без перезапуску клієнта.",
    developerRestartDescription:
      "Перезапускає Steam з аргументом -dev для ввімкнення режиму розробника.",
    alwaysDeveloperRestart:
      "Завжди перезапускати поточний сеанс Steam у режимі розробника",
    alwaysDeveloperRestartDescription:
      "Змушує пункт «Перезапустити Steam» завжди перезапускати поточний сеанс Steam з аргументом -dev, коли параметр «Перезапустити Steam у режимі розробника» ввімкнено в налаштуваннях плагіна.",
    alwaysDeveloperRestartNote:
      "ПРИМІТКА: Ручний вихід зі Steam або перезапуск комп’ютера завершує поточний сеанс без зміни ваших налаштувань.\nЩоб Steam завжди запускався в режимі розробника, додайте аргумент -dev до ярлика Steam.",
    reloadRequiredTitle:
      "Потрібне перезавантаження",
    reloadRequiredDescription:
      "Для ввімкнення або вимкнення вибраних параметрів потрібне перезавантаження інтерфейсу. Продовжити?",
    reloadNow:
      "Перезавантажити зараз",
    restartRequiredTitle:
      "Потрібен перезапуск",
    restartRequiredDescription:
      "Для ввімкнення або вимкнення вибраних параметрів потрібен перезапуск Steam. Продовжити?",
    restartNow:
      "Перезапустити зараз",
    cancel: "Скасувати",
  },
};

interface SteamClientWindow extends Window {
  SteamClient?: {
    Settings?: {
      GetCurrentLanguage?:
        () => string | Promise<string>;
    };
  };
}

const steamWindow =
  window as SteamClientWindow;

function normalizeLanguage(
  language: string,
): string {
  const normalized =
    String(language || "english")
      .toLowerCase();

  if (TEXT[normalized]) {
    return normalized;
  }

  const shortLanguage =
    normalized.split(/[-_]/)[0];

  const aliases:
    Record<string, string> = {
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
    pt:
      normalized.includes("br")
        ? "brazilian"
        : "portuguese",
    ro: "romanian",
    ru: "russian",
    fi: "finnish",
    sv: "swedish",
    tr: "turkish",
    vi: "vietnamese",
    uk: "ukrainian",
  };

  return (
    aliases[shortLanguage] ||
    "english"
  );
}

export async function getLanguageKey(
  documentRef: Document = document,
): Promise<string> {
  try {
    const result =
      steamWindow.SteamClient?.Settings
        ?.GetCurrentLanguage?.();

    const steamLanguage =
      result &&
      typeof (result as Promise<string>)
        ?.then === "function"
        ? await result
        : result;

    if (steamLanguage) {
      return normalizeLanguage(
        String(steamLanguage),
      );
    }
  } catch {
    // Fall back to the document or system language.
  }

  const htmlLanguage =
    documentRef.documentElement
      ?.getAttribute("lang") ||
    documentRef.documentElement?.lang ||
    document.documentElement
      ?.getAttribute("lang") ||
    document.documentElement?.lang ||
    navigator.language ||
    "english";

  return normalizeLanguage(
    String(htmlLanguage),
  );
}

export async function translate(
  key: TextKey,
  documentRef: Document = document,
): Promise<string> {
  const languageKey =
    await getLanguageKey(documentRef);

  return (
    TEXT[languageKey] || TEXT.english
  )[key];
}
