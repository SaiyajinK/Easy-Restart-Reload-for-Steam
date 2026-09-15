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

      <Field
        label={labels.developerRestart}
        description={labels.developerRestartDescription}
      >
        <Toggle
          value={settings.showDeveloperRestart}
          onChange={(checked) => update("showDeveloperRestart", checked)}
        />
      </Field>

      <Field
        label={labels.alwaysDeveloperRestart}
        description={labels.alwaysDeveloperRestartDescription}
      >
        <Toggle
          value={settings.alwaysDeveloperRestart}
          onChange={(checked) => update("alwaysDeveloperRestart", checked)}
        />
      </Field>
    </div>
  );
}
