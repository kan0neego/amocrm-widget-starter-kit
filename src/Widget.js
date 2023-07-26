import WidgetCallbacks from "./WidgetCallbacks";
import DEPENDENCIES from "./dependencies";

const Widget = function () {
  const { settingsHelper, widgetContext, getTemplate } = DEPENDENCIES;
  widgetContext.set(this);
  settingsHelper.set(this.get_settings());

  this.setTemplate = getTemplate();
  this.callbacks = new WidgetCallbacks(this);
};

export default Widget;
