var notifications = require("sdk/notifications");
var self = require("sdk/self");

exports.main = function (options, callbacks) {
  if (self.loadReason == "install" || self.loadReason == "enable" || self.loadReason == "upgrade"
    || options.loadReason == "install" || options.loadReason == "enable" || options.loadReason == "upgrade") {
    notifications.notify({
      title: "Firefox Add-on Upgrade Test",
      text: "This should run at some point after the upgrade!",
    });
  }
};