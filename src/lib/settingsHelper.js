const settingsHelper = {
  settings: {},
  set: function (widget_settings) {
    this.settings = widget_settings;
  },
  get: function () {
    return this.settings;
  },
};

export default settingsHelper;
