import DEPENDENCIES from "../dependencies";

const getTemplate = () => {
  const { widgetContext } = DEPENDENCIES;
  const context = widgetContext.get();

  return function (template, params, callback) {
    params = typeof params == "object" ? params : {};
    template = template || "";
    const base_path = context.params.path;

    const configuration = {
      base_path: base_path,
      href: `/templates/${template}.twig`,
      v: window[`${context.params.widget_code}__widget_version`],
      load: callback,
    };

    return context.render(configuration, params);
  };
};

export default getTemplate;
