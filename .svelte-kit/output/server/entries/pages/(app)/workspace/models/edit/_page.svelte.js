import { c as create_ssr_component, b as subscribe, l as getContext } from "../../../../../../chunks/ssr.js";
import "../../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "../../../../../../chunks/client.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { a as settings, c as config } from "../../../../../../chunks/index2.js";
import "../../../../../../chunks/index3.js";
import "yaml";
import "dequal";
import "../../../../../../chunks/create.js";
import "dompurify";
/* empty css                                                           */
import "marked";
import "postcss";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_i18n;
  let $$unsubscribe_settings;
  let $$unsubscribe_config;
  let $$unsubscribe_page;
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_config = subscribe(config, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => value);
  $$unsubscribe_i18n();
  $$unsubscribe_settings();
  $$unsubscribe_config();
  $$unsubscribe_page();
  return `${``}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
