export default class WidgetCallbacks {
  /** @type {Widget} */
  widget;

  constructor(widget) {
    this.widget = widget;
  }

  init() {
    return true;
  }

  render() {
    return true;
  }

  bind_actions() {
    return true;
  }

  settings($modalBody) {
    this.widget.setTemplate("settings_modal", {}, function (template) {
      const $body = $modalBody.find(".widget_settings_block");
      $body.append(template.render());
    });
    return true;
  }

  advancedSettings() {
    //
  }

  dpSettings() {
    //
  }

  onSave({ active, fields }) {
   console.log("--onSave", { this: this, active, fields });
   return true;
  }

  destroy() {
    //
  }
}
