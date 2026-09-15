import { Field, Toggle } from "@steambrew/client";
import { useEffect, useState } from "react";
import { getLanguageKey, TEXT } from "./i18n";

export interface ActionSettings {
  showReload: boolean;
  showRestart: boolean;
  showDeveloperRestart: boolean;
  alwaysDeveloperRestart: boolean;
}

export const DEFAULT_SETTINGS: ActionSettings = {
  showReload: true,
  showRestart: true,
  showDeveloperRestart: false,
  alwaysDeveloperRestart: false,
};

const SETTINGS_KEY = "easy-restart-reload-for-steam.settings.v1.5";

export function readSettings(): ActionSettings {
  try {
    const stored = window.localStorage.getItem(SETTINGS_KEY);

    if (!stored) {
      return { ...DEFAULT_SETTINGS };
    }

    const parsed = JSON.parse(stored) as Partial<ActionSettings>;

    return {
      showReload:
        typeof parsed.showReload === "boolean"
          ? parsed.showReload
          : DEFAULT_SETTINGS.showReload,

      showRestart:
        typeof parsed.showRestart === "boolean"
          ? parsed.showRestart
          : DEFAULT_SETTINGS.showRestart,

      showDeveloperRestart:
        typeof parsed.showDeveloperRestart === "boolean"
          ? parsed.showDeveloperRestart
          : DEFAULT_SETTINGS.showDeveloperRestart,

      alwaysDeveloperRestart:
        typeof parsed.alwaysDeveloperRestart === "boolean"
          ? parsed.alwaysDeveloperRestart
          : DEFAULT_SETTINGS.alwaysDeveloperRestart,
    };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings(settings: ActionSettings): void {
  try {
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // Keep the plugin usable even if persistent storage is unavailable.
  }
}

export function SettingsPanel() {
  const [settings, setSettings] = useState<ActionSettings>(() => readSettings());
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    let mounted = true;

    void getLanguageKey(document).then((languageKey) => {
      if (mounted) {
        setLanguage(languageKey);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const labels = TEXT[language] || TEXT.english;

  const update = (key: keyof ActionSettings, value: boolean) => {
    const next = { ...settings, [key]: value };
    setSettings(next);
    saveSettings(next);
  };

  return (
    <div>
      <style>{`
        .easy-restart-developer-group {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .easy-restart-developer-group > .easy-restart-developer-field {
          box-sizing: border-box;
          width: 100%;
          margin: 0 !important;
        }

        .easy-restart-developer-group > .easy-restart-developer-field:first-child {
          border-bottom-left-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
        }

        .easy-restart-developer-group > .easy-restart-developer-field:last-child {
          margin-top: -1px !important;
          border-top-left-radius: 0 !important;
          border-top-right-radius: 0 !important;
        }
      `}</style>

      <Field
        label={labels.reload}
        description={labels.reloadDescription}
      >
        <Toggle
          value={settings.showReload}
          onChange={(checked) => update("showReload", checked)}
        />
      </Field>

      <Field
        label={labels.restart}
        description={labels.restartDescription}
      >
        <Toggle
          value={settings.showRestart}
          onChange={(checked) => update("showRestart", checked)}
        />
      </Field>

      <div className="easy-restart-developer-group">
        <Field
          className="easy-restart-developer-field"
          label={labels.developerRestart}
          description={labels.developerRestartDescription}
          bottomSeparator="standard"
        >
          <Toggle
            value={settings.showDeveloperRestart}
            onChange={(checked) => update("showDeveloperRestart", checked)}
          />
        </Field>

        <Field
          className="easy-restart-developer-field"
          label={labels.alwaysDeveloperRestart}
          description={labels.alwaysDeveloperRestartDescription}
        >
          <Toggle
            value={settings.alwaysDeveloperRestart}
            onChange={(checked) => update("alwaysDeveloperRestart", checked)}
          />
        </Field>
      </div>
    </div>
  );
}
