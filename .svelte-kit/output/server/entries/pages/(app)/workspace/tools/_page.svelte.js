import { c as create_ssr_component, b as subscribe, l as getContext, g as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "file-saver";
import { W as WEBUI_NAME, u as user, c as config } from "../../../../../chunks/index2.js";
import { g as goto } from "../../../../../chunks/client.js";
import { l as loadToolByUrl } from "../../../../../chunks/index8.js";
import "dompurify";
import "marked";
/* empty css                                                                */
import "dequal";
import "../../../../../chunks/create.js";
import "../../../../../chunks/index3.js";
/* empty css                                                        */
import { S as Spinner } from "../../../../../chunks/Spinner.js";
import { I as ImportModal } from "../../../../../chunks/ImportModal.js";
const Tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $WEBUI_NAME, $$unsubscribe_WEBUI_NAME;
  let $$unsubscribe_user;
  let $$unsubscribe_config;
  $$unsubscribe_WEBUI_NAME = subscribe(WEBUI_NAME, (value) => $WEBUI_NAME = value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_config = subscribe(config, (value) => value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let showImportModal = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1cg3erf_START -->${$$result.title = `<title> ${escape($i18n.t("Tools"))} • ${escape($WEBUI_NAME)} </title>`, ""}<!-- HEAD_svelte-1cg3erf_END -->`, ""} ${validate_component(ImportModal, "ImportModal").$$render(
      $$result,
      {
        onImport: (tool) => {
          sessionStorage.tool = JSON.stringify({ ...tool });
          goto();
        },
        loadUrlHandler: async (url) => {
          return await loadToolByUrl(localStorage.token, url);
        },
        successMessage: $i18n.t("Tool imported successfully"),
        show: showImportModal
      },
      {
        show: ($$value) => {
          showImportModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${`<div class="w-full h-full flex justify-center items-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  $$unsubscribe_WEBUI_NAME();
  $$unsubscribe_user();
  $$unsubscribe_config();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Tools, "Tools").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
