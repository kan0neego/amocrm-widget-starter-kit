import { setDeps } from "./dependencies";
import Widget from "./Widget";
import settingsHelper from "./lib/settingsHelper";
import contextHelper from "./lib/contextHelper";
import getTemplate from "./lib/getTemplate";

define(["jquery"], ($) => {
  setDeps({
    $: $,
    settingsHelper: settingsHelper,
    widgetContext: contextHelper,
    getTemplate: getTemplate,
  });
  return Widget;
});
