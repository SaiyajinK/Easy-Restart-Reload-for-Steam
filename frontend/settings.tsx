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

type RequiredAction = "reload" | "restart";

interface SettingsModalState {
  phase: "idle" | "scheduled" | "open";
  requiredAction: RequiredAction | null;
}

interface ModalHostWindow extends Window {
  __easyRestartReloadSettingsModalStateV15?: SettingsModalState;
}

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

function getModalHost(): ModalHostWindow {
  try {
    return (window.top || window) as ModalHostWindow;
  } catch {
    return window as ModalHostWindow;
  }
}

function getModalState(
  host: ModalHostWindow,
): SettingsModalState {
  if (host.__easyRestartReloadSettingsModalStateV15) {
    return host.__easyRestartReloadSettingsModalStateV15;
  }

  const state: SettingsModalState = {
    phase: "idle",
    requiredAction: null,
  };

  host.__easyRestartReloadSettingsModalStateV15 =
    state;

  return state;
}

function ensureModalStyles(
  host: ModalHostWindow,
): void {
  const hostDocument = host.document;

  if (hostDocument.getElementById(MODAL_STYLE_ID)) {
    return;
  }

  const style = hostDocument.createElement("style");

  style.id = MODAL_STYLE_ID;
  style.textContent = `
    .easy-restart-reload-modal-position {
      height: auto !important;
      min-height: 0 !important;
      max-height: calc(100vh - 64px) !important;
    }

    .easy-restart-reload-modal-position > * {
      flex-grow: 0 !important;
      flex-shrink: 0 !important;
      min-height: 0 !important;
    }

    .easy-restart-reload-modal-transition {
      flex: 0 0 auto !important;
      height: auto !important;
      min-height: 0 !important;
      max-height: calc(100vh - 64px) !important;
    }

    .easy-restart-reload-modal-content {
      position: relative !important;
      inset: auto !important;
      height: auto !important;
      min-height: 0 !important;
      max-height: calc(100vh - 64px) !important;
    }

    .easy-restart-reload-modal-inner,
    .easy-restart-reload-modal-form,
    .easy-restart-reload-modal-body {
      flex: none !important;
      height: auto !important;
      min-height: 0 !important;
      overflow: visible !important;
    }

    .easy-restart-reload-modal-footer {
      margin-top: 16px !important;
      padding-top: 0 !important;
    }

    .easy-restart-reload-modal-description {
      display: block;
    }
  `;

  hostDocument.head.appendChild(style);
}

function CompactModalDescription({
  text,
}: {
  text: string;
}) {
  const markerRef =
    useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const marker = markerRef.current;

    if (!marker) {
      return undefined;
    }

    const dialogBody =
      marker.closest(".DialogBody");

    const innerWidth =
      marker.closest(".DialogContent_InnerWidth");

    const dialogContent =
      marker.closest(".DialogContent");

    const transition =
      marker.closest(".DialogContentTransition");

    const positionContent =
      marker.closest(".ModalPosition_Content");

    const form =
      innerWidth?.querySelector("form");

    const footer =
      dialogContent?.querySelector(".DialogFooter");

    positionContent?.classList.add(
      "easy-restart-reload-modal-position",
    );

    transition?.classList.add(
      "easy-restart-reload-modal-transition",
    );

    dialogContent?.classList.add(
      "easy-restart-reload-modal-content",
    );

    innerWidth?.classList.add(
      "easy-restart-reload-modal-inner",
    );

    form?.classList.add(
      "easy-restart-reload-modal-form",
    );

    dialogBody?.classList.add(
      "easy-restart-reload-modal-body",
    );

    footer?.classList.add(
      "easy-restart-reload-modal-footer",
    );

    return () => {
      positionContent?.classList.remove(
        "easy-restart-reload-modal-position",
      );

      transition?.classList.remove(
        "easy-restart-reload-modal-transition",
      );

      dialogContent?.classList.remove(
        "easy-restart-reload-modal-content",
      );

      innerWidth?.classList.remove(
        "easy-restart-reload-modal-inner",
      );

      form?.classList.remove(
        "easy-restart-reload-modal-form",
      );

      dialogBody?.classList.remove(
        "easy-restart-reload-modal-body",
      );

      footer?.classList.remove(
        "easy-restart-reload-modal-footer",
      );
    };
  }, []);

  return (
    <span
      ref={markerRef}
      className="easy-restart-reload-modal-description"
    >
      {text}
    </span>
  );
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
  host: ModalHostWindow,
  labels: TranslationSet,
  requiredAction: RequiredAction,
  releaseModal: () => void,
): void {
  ensureModalStyles(host);

  const restartRequired =
    requiredAction === "restart";

  showModal(
    <ConfirmModal
      strTitle={
        restartRequired
          ? labels.restartRequiredTitle
          : labels.reloadRequiredTitle
      }
      strDescription={
        <CompactModalDescription
          text={
            restartRequired
              ? labels.restartRequiredDescription
              : labels.reloadRequiredDescription
          }
        />
      }
      strOKButtonText={
        restartRequired
          ? labels.restartNow
          : labels.reloadNow
      }
      strCancelButtonText={labels.cancel}
      onOK={() => {
        releaseModal();

        if (restartRequired) {
          void restartSteamFromSettings();
          return;
        }

        host.location.reload();
      }}
      onCancel={releaseModal}
    />,
    host,
    {
      strTitle: restartRequired
        ? labels.restartRequiredTitle
        : labels.reloadRequiredTitle,
      fnOnClose: releaseModal,
    },
  );
}

function queueSettingsChangeModal(
  requiredAction: RequiredAction,
): void {
  const host = getModalHost();
  const state = getModalState(host);

  if (state.phase === "open") {
    return;
  }

  if (
    state.requiredAction !== "restart" ||
    requiredAction === "restart"
  ) {
    state.requiredAction = requiredAction;
  }

  if (state.phase === "scheduled") {
    return;
  }

  state.phase = "scheduled";

  host.setTimeout(() => {
    void getLanguageKey(host.document).then(
      (languageKey) => {
        if (state.phase !== "scheduled") {
          return;
        }

        const action =
          state.requiredAction || "reload";

        state.requiredAction = null;
        state.phase = "open";

        showSettingsChangeModal(
          host,
          TEXT[languageKey] || TEXT.english,
          action,
          () => {
            state.phase = "idle";
            state.requiredAction = null;
          },
        );
      },
    );
  }, 50);
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

  const requiredActionRef =
    useRef<RequiredAction | null>(null);

  const labels =
    TEXT[language] || TEXT.english;

  latestSettingsRef.current = settings;

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

      const requiredAction =
        restartRequired
          ? "restart"
          : requiredActionRef.current;

      requiredActionRef.current = null;

      if (!requiredAction) {
        return;
      }

      queueSettingsChangeModal(requiredAction);
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

    if (
      key !== "showDeveloperRestart" &&
      requiredActionRef.current !== "restart"
    ) {
      requiredActionRef.current = "reload";
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
