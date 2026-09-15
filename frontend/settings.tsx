import { ConfirmModal, Field, Toggle, showModal } from "@steambrew/client";s
import { useEffect, useRef, useState } from "react";
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

const SETTINGS_KEY =
  "easy-restart-reload-for-steam.settings.v1.5";

export function readSettings(): ActionSettings {
  try {
    const stored =
      window.localStorage.getItem(SETTINGS_KEY);

    if (!stored) {
      return { ...DEFAULT_SETTINGS };
    }

    const parsed =
      JSON.parse(stored) as Partial<ActionSettings>;

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
    window.localStorage.setItem(
      SETTINGS_KEY,
      JSON.stringify(settings),
    );
  } catch {
    // Keep the plugin usable even if persistent storage is unavailable.
  }
}

export function SettingsPanel() {
  const [settings, setSettings] =
    useState<ActionSettings>(() => readSettings());

  const [language, setLanguage] =
    useState("english");

  const settingsChangedRef = useRef(false);
  const labelsRef = useRef(TEXT.english);

  const labels = TEXT[language] || TEXT.english;
  labelsRef.current = labels;

  useEffect(() => {
    let mounted = true;

    void getLanguageKey(document).then(
      (languageKey) => {
        if (mounted) {
          setLanguage(languageKey);
        }
      },
    );

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (!settingsChangedRef.current) {
        return;
      }

      settingsChangedRef.current = false;

      const currentLabels = labelsRef.current;

      showModal(
        <ConfirmModal
          strTitle={
            currentLabels.reloadRequiredTitle
          }
          strDescription={
            currentLabels.reloadRequiredDescription
          }
          strOKButtonText={
            currentLabels.reloadNow
          }
          strCancelButtonText={
            currentLabels.cancel
          }
          onOK={() => {
            window.location.reload();
          }}
          onCancel={() => undefined}
        />,
        window,
        {
          strTitle:
            currentLabels.reloadRequiredTitle,
        },
      );
    };
  }, []);

  const update = (
    key: keyof ActionSettings,
    value: boolean,
  ) => {
    if (settings[key] === value) {
      return;
    }

    const next = {
      ...settings,
      [key]: value,
    };

    settingsChangedRef.current = true;
    setSettings(next);
    saveSettings(next);
  };

  const developerRestartDisabled =
    !settings.showDeveloperRestart;

  const dependentTextClass =
    developerRestartDisabled
      ? "easy-restart-dependent-text easy-restart-dependent-text-disabled"
      : "easy-restart-dependent-text";

  return (
    <div>
      <style>{`
        .easy-restart-developer-group {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-top: 6px;
        }

        .easy-restart-developer-group
          > .easy-restart-developer-field {
          box-sizing: border-box;
          width: 100%;
          margin: 0 !important;
        }

        .easy-restart-developer-group
          > .easy-restart-developer-field:first-child {
          border-bottom-left-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
        }

        .easy-restart-developer-group
          > .easy-restart-developer-field:last-child {
          margin-top: -1px !important;
          border-top-left-radius: 0 !important;
          border-top-right-radius: 0 !important;
        }

        .easy-restart-dependent-text {
          font-size: inherit !important;
          line-height: inherit !important;
          transform: none !important;
          transition: none !important;
          opacity: 1;
        }

        .easy-restart-dependent-text-disabled {
          opacity: 0.5;
        }

        .easy-restart-dependent-description {
          display: block;
        }

        .easy-restart-dependent-note {
          display: block;
          margin-top: 8px;
          white-space: pre-line;
        }
      `}</style>

      <Field
        label={labels.reload}
        description={labels.reloadDescription}
      >
        <Toggle
          value={settings.showReload}
          onChange={(checked) =>
            update("showReload", checked)
          }
        />
      </Field>

      <Field
        label={labels.restart}
        description={labels.restartDescription}
      >
        <Toggle
          value={settings.showRestart}
          onChange={(checked) =>
            update("showRestart", checked)
          }
        />
      </Field>

      <div className="easy-restart-developer-group">
        <Field
          className="easy-restart-developer-field"
          label={labels.developerRestart}
          description={
            labels.developerRestartDescription
          }
          bottomSeparator="standard"
        >
          <Toggle
            value={settings.showDeveloperRestart}
            onChange={(checked) =>
              update(
                "showDeveloperRestart",
                checked,
              )
            }
          />
        </Field>

        <Field
          className="easy-restart-developer-field"
          label={
            <span className={dependentTextClass}>
              {labels.alwaysDeveloperRestart}
            </span>
          }
          description={
            <span className={dependentTextClass}>
              <span className="easy-restart-dependent-description">
                {
                  labels.alwaysDeveloperRestartDescription
                }
              </span>

              <span className="easy-restart-dependent-note">
                {
                  labels.alwaysDeveloperRestartNote
                }
              </span>
            </span>
          }
        >
          <Toggle
            value={
              settings.alwaysDeveloperRestart
            }
            disabled={developerRestartDisabled}
            onChange={(checked) =>
              update(
                "alwaysDeveloperRestart",
                checked,
              )
            }
          />
        </Field>
      </div>
    </div>
  );
}
