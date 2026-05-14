const MILLENNIUM_IS_CLIENT_MODULE = false;
const pluginName = "easy-restart-reload-for-steam";

window.PLUGIN_LIST ||= {};
window.PLUGIN_LIST[pluginName] ||= {};

async function ExecutePluginModule() {
  await import("./index.js");
}

window.PLUGIN_LIST[pluginName].ExecutePluginModule =
  ExecutePluginModule;

ExecutePluginModule();