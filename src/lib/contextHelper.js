const contextHelper = {
  context: {},
  set: function (widget_context) {
    this.context = widget_context;
  },
  get: function () {
    return this.context;
  },
};

export default contextHelper;
