import { c as create_ssr_component, b as subscribe, l as getContext, g as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import { W as WEBUI_NAME, N as knowledge } from "../../../../../chunks/index2.js";
import Fuse from "fuse.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import "../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "../../../../../chunks/client.js";
import "dompurify";
import "marked";
/* empty css                                                                */
import "dequal";
import "../../../../../chunks/create.js";
import "../../../../../chunks/index3.js";
import { S as Spinner } from "../../../../../chunks/Spinner.js";
const Knowledge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $WEBUI_NAME, $$unsubscribe_WEBUI_NAME;
  $$unsubscribe_WEBUI_NAME = subscribe(WEBUI_NAME, (value) => $WEBUI_NAME = value);
  dayjs.extend(relativeTime);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let knowledgeBases = [];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (knowledgeBases.length > 0) {
        new Fuse(
          knowledgeBases,
          {
            keys: [
              "name",
              "description",
              "user.name",
              // Ensures Fuse looks into item.user.name
              "user.email"
            ],
            // Ensures Fuse looks into item.user.email
            threshold: 0
          }
        );
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1w4ysqo_START -->${$$result.title = `<title> ${escape($i18n.t("Knowledge"))} • ${escape($WEBUI_NAME)} </title>`, ""}<!-- HEAD_svelte-1w4ysqo_END -->`, ""} ${`<div class="w-full h-full flex justify-center items-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  $$unsubscribe_WEBUI_NAME();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $knowledge, $$unsubscribe_knowledge;
  $$unsubscribe_knowledge = subscribe(knowledge, (value) => $knowledge = value);
  $$unsubscribe_knowledge();
  return `${$knowledge !== null ? `${validate_component(Knowledge, "Knowledge").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
