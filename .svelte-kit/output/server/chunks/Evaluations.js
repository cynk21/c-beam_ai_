import { c as create_ssr_component, b as subscribe, l as getContext } from "./ssr.js";
import "./client.js";
import { p as page } from "./stores.js";
import "onnxruntime-web";
import "@huggingface/transformers";
import "./index2.js";
import "dompurify";
import "./Toaster.svelte_svelte_type_style_lang.js";
import "file-saver";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "dequal";
import "./create.js";
const Evaluations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_i18n;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => value);
  let selectedTab;
  const scrollToTab = (tabId) => {
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
      tabElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    }
  };
  {
    {
      const pathParts = $page.url.pathname.split("/");
      const tabFromPath = pathParts[pathParts.length - 1];
      selectedTab = ["leaderboard", "feedbacks"].includes(tabFromPath) ? tabFromPath : "leaderboard";
    }
  }
  {
    if (selectedTab) {
      scrollToTab(selectedTab);
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_i18n();
  return `${``}`;
});
export {
  Evaluations as E
};
//# sourceMappingURL=Evaluations.js.map
