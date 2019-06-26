
function newActivityPlugin() {}


newActivityPlugin.prototype.new_activity = function (arg0, success, error) {
    cordova.exec(success, error, 'OpenAndroidActivity', 'new_activity', [arg0]);
}

newActivityPlugin.install = function() {
    if (!window.plugins) {
      window.plugins = {};
    }
    window.plugins.newActivityPlugin = new newActivityPlugin();
    return window.plugins.newActivityPlugin;
  };
  cordova.addConstructor(newActivityPlugin.install);