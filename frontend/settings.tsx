import { ConfirmModal, Field, Millennium, Toggle, showModal } from "@steambrew/client";
import { useEffect, useRef, useState } from "react";
import { getLanguageKey, TEXT, type TranslationSet } from "./i18n";

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

const APPLIED_DEVELOPER_RESTART_KEY =
  "easy-restart-reload-for-steam.developer-restart.applied.v1.5";

const MODAL_STYLE_ID =
  "easy-restart-reload-confirm-modal-style";

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

export function readAppliedDeveloperRestartSetting(): boolean {
  const configuredValue =
    readSettings().showDeveloperRestart;

  try {
    const storedValue =
      window.sessionStorage.getItem(
        APPLIED_DEVELOPER_RESTART_KEY,
      );

    if (storedValue === "true") {
      return true;
    }

    if (storedValue === "false") {
      return false;
    }

    window.sessionStorage.setItem(
      APPLIED_DEVELOPER_RESTART_KEY,
      configuredValue ? "true" : "false",
    );

    return configuredValue;
  } catch {
    return configuredValue;
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

function ensureModalStyles(): void {
  if (document.getElementById(MODAL_STYLE_ID)) {
    return;
  }

  const style = document.createElement("style");

  style.id = MODAL_STYLE_ID;
  style.textContent = `
    .easy-restart-reload-confirm-modal,
    .easy-restart-reload-confirm-modal-root {
      flex: none !important;
      height: auto !important;
      min-height: 0 !important;
      max-height: calc(100vh - 64px) !important;
    }

    [class*="DialogContentTransition"]:has(
      .easy-restart-reload-confirm-modal-root
    ) {
      flex: none !important;
      height: auto !important;
      min-height: 0 !important;
      max-height: calc(100vh - 64px) !important;
    }

    .easy-restart-reload-confirm-modal-root
      [class*="DialogContent_InnerWidth"],
    .easy-restart-reload-confirm-modal-root
      [class*="DialogBody"],
    .easy-restart-reload-confirm-modal-root
      [class*="DialogInnerBody"] {
      flex: none !important;
      height: auto !important;
      min-height: 0 !important;
      overflow: visible !important;
    }

    .easy-restart-reload-confirm-modal-root
      [class*="DialogFooter"] {
      margin-top: 16px !important;
      padding-top: 0 !important;
    }
  `;

  document.head.appendChild(style);
}

async function restartSteamFromSettings(): Promise<void> {
  const settings = readSettings();

  try {
    if (
      settings.showDeveloperRestart &&
      settings.alwaysDeveloperRestart
    ) {
      await Millennium.callServerMethod(
        "restart_developer_mode",
        {},
      );
    } else {
      await Millennium.callServerMethod(
        "restart_normal",
        {},
      );
    }
  } catch (error: unknown) {
    console.error(
      "Unable to restart Steam after changing settings:",
      error,
    );
  }
}

function showSettingsChangeModal(
  labels: TranslationSet,
  requiredAction: "reload" | "restart",
): void {
  ensureModalStyles();

  const restartRequired =
    requiredAction === "restart";

  showModal(
    <ConfirmModal
      className="easy-restart-reload-confirm-modal-root"
      modalClassName="easy-restart-reload-confirm-modal"
      strTitle={
        restartRequired
          ? labels.restartRequiredTitle
          : labels.reloadRequiredTitle
      }
      strDescription={
        restartRequired
          ? labels.restartRequiredDescription
          : labels.reloadRequiredDescription
      }
      strOKButtonText={
        restartRequired
          ? labels.restartNow
          : labels.reloadNow
      }
      strCancelButtonText={labels.cancel}
      onOK={() => {
        if (restartRequired) {
          void restartSteamFromSettings();
          return;
        }

        window.location.reload();
      }}
      onCancel={() => undefined}
    />,
    window,
    {
      strTitle: restartRequired
        ? labels.restartRequiredTitle
        : labels.reloadRequiredTitle,
    },
  );
}

export function SettingsPanel() {
  const [settings, setSettings] =
    useState<ActionSettings>(() => readSettings());

  const [language, setLanguage] =
    useState("english");

  const latestSettingsRef =
    useRef(settings);

  const appliedDeveloperRestartRef =
    useRef(
      readAppliedDeveloperRestartSetting(),
    );

  const reloadRequiredRef =
    useRef(false);

  const labelsRef =
    useRef(TEXT.english);

  const labels =
    TEXT[language] || TEXT.english;

  latestSettingsRef.current = settings;
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
      const restartRequired =
        latestSettingsRef.current
          .showDeveloperRestart !==
        appliedDeveloperRestartRef.current;

      if (
        !restartRequired &&
        !reloadRequiredRef.current
      ) {
        return;
      }

      reloadRequiredRef.current = false;

      showSettingsChangeModal(
        labelsRef.current,
        restartRequired
          ? "restart"
          : "reload",
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

    if (key !== "showDeveloperRestart") {
      reloadRequiredRef.current = true;
    }

    latestSettingsRef.current = next;
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
