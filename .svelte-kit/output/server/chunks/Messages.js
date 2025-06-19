import { c as create_ssr_component, g as escape, b as subscribe, l as getContext, p as createEventDispatcher, e as each, a as add_attribute, v as validate_component, o as onDestroy, q as null_to_empty } from "./ssr.js";
import { t as tick } from "./scheduler.js";
import { v4 } from "uuid";
import { r as models, j as WEBUI_API_BASE_URL, m as mobile, a as settings, d as chatId, F as showArtifacts, C as showControls, P as artifactCode, G as showOverview, c as config, T as TTSWorker, u as user, t as temporaryChatEnabled, h as WEBUI_BASE_URL, W as WEBUI_NAME, x as WEBUI_VERSION, b as currentChatPage, k as chats } from "./index2.js";
import { a as toast } from "./Toaster.svelte_svelte_type_style_lang.js";
import { M as MagnifyingGlass, S as Sparkles, u as updateChatById, d as getChatList } from "./MagnifyingGlass.js";
import { d as createMessagesList, i as formatDate, s as sanitizeResponseContent } from "./index3.js";
import dayjs from "dayjs";
import "yaml";
import "panzoom";
import "file-saver";
import "dompurify";
import "dayjs/locale/af.js";
import "dayjs/locale/am.js";
import "dayjs/locale/ar.js";
import "dayjs/locale/az.js";
import "dayjs/locale/be.js";
import "dayjs/locale/bg.js";
import "dayjs/locale/bi.js";
import "dayjs/locale/bm.js";
import "dayjs/locale/bn.js";
import "dayjs/locale/bo.js";
import "dayjs/locale/br.js";
import "dayjs/locale/bs.js";
import "dayjs/locale/ca.js";
import "dayjs/locale/cs.js";
import "dayjs/locale/cv.js";
import "dayjs/locale/cy.js";
import "dayjs/locale/da.js";
import "dayjs/locale/de.js";
import "dayjs/locale/dv.js";
import "dayjs/locale/el.js";
import "dayjs/locale/en.js";
import "dayjs/locale/eo.js";
import "dayjs/locale/es.js";
import "dayjs/locale/eu.js";
import "dayjs/locale/fa.js";
import "dayjs/locale/fi.js";
import "dayjs/locale/fo.js";
import "dayjs/locale/fr.js";
import "dayjs/locale/fy.js";
import "dayjs/locale/ga.js";
import "dayjs/locale/gd.js";
import "dayjs/locale/gl.js";
import "dayjs/locale/gu.js";
import "dayjs/locale/he.js";
import "dayjs/locale/hi.js";
import "dayjs/locale/hr.js";
import "dayjs/locale/ht.js";
import "dayjs/locale/hu.js";
import "dayjs/locale/id.js";
import "dayjs/locale/is.js";
import "dayjs/locale/it.js";
import "dayjs/locale/ja.js";
import "dayjs/locale/jv.js";
import "dayjs/locale/ka.js";
import "dayjs/locale/kk.js";
import "dayjs/locale/km.js";
import "dayjs/locale/kn.js";
import "dayjs/locale/ko.js";
import "dayjs/locale/ku.js";
import "dayjs/locale/ky.js";
import "dayjs/locale/lb.js";
import "dayjs/locale/lo.js";
import "dayjs/locale/lt.js";
import "dayjs/locale/lv.js";
import "dayjs/locale/me.js";
import "dayjs/locale/mi.js";
import "dayjs/locale/mk.js";
import "dayjs/locale/ml.js";
import "dayjs/locale/mn.js";
import "dayjs/locale/mr.js";
import "dayjs/locale/ms.js";
import "dayjs/locale/mt.js";
import "dayjs/locale/my.js";
import "dayjs/locale/nb.js";
import "dayjs/locale/ne.js";
import "dayjs/locale/nl.js";
import "dayjs/locale/nn.js";
import "dayjs/locale/pl.js";
import "dayjs/locale/pt.js";
import "dayjs/locale/ro.js";
import "dayjs/locale/ru.js";
import "dayjs/locale/rw.js";
import "dayjs/locale/sd.js";
import "dayjs/locale/se.js";
import "dayjs/locale/si.js";
import "dayjs/locale/sk.js";
import "dayjs/locale/sl.js";
import "dayjs/locale/sq.js";
import "dayjs/locale/sr.js";
import "dayjs/locale/ss.js";
import "dayjs/locale/sv.js";
import "dayjs/locale/sw.js";
import "dayjs/locale/ta.js";
import "dayjs/locale/te.js";
import "dayjs/locale/tet.js";
import "dayjs/locale/tg.js";
import "dayjs/locale/th.js";
import "dayjs/locale/tk.js";
import "dayjs/locale/tlh.js";
import "dayjs/locale/tr.js";
import "dayjs/locale/tzl.js";
import "dayjs/locale/tzm.js";
import "dayjs/locale/uk.js";
import "dayjs/locale/ur.js";
import "dayjs/locale/uz.js";
import "dayjs/locale/vi.js";
import "dayjs/locale/yo.js";
import "dayjs/locale/zh.js";
import "dayjs/locale/et.js";
import "dayjs/plugin/duration.js";
import "dayjs/plugin/relativeTime.js";
import "mermaid";
import { C as Collapsible, c as CodeBlock, L as LightBulb, M as Markdown, B as Bolt } from "./Collapsible.js";
import { marked } from "marked";
import "katex";
import "katex/contrib/mhchem";
/* empty css                                            */
/* empty css                                    */
import "dequal";
import "./create.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import { P as ProfileImage, N as Name } from "./ProfileImage.js";
import { a as Info, I as Image } from "./Info.js";
import { T as Tooltip } from "./Tooltip.js";
import { T as Tags } from "./Tags.js";
import { C as ChevronDown } from "./ChevronDown.js";
import { C as ChevronUp } from "./ChevronUp.js";
import { C as ConfirmDialog } from "./ConfirmDialog.js";
import { M as Modal } from "./Modal.js";
import { S as Spinner } from "./Spinner.js";
import { B as Badge } from "./Badge.js";
import { C as Check, E as EyeSlash } from "./EyeSlash.js";
import { X as XMark } from "./XMark.js";
import { E as EllipsisHorizontal } from "./EllipsisHorizontal.js";
import { F as FileItem } from "./FileItem.js";
import { L as Loader } from "./Loader.js";
import Fuse from "fuse.js";
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "md" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  return `<div class="w-full mt-2 mb-2"><div class="animate-pulse flex w-full"><div class="${escape(size === "md" ? "space-y-2" : "space-y-1.5", true) + " w-full"}"><div class="${escape(size === "md" ? "h-2" : "h-1.5", true) + " bg-gray-200 dark:bg-gray-600 rounded-sm mr-14"}"></div> <div class="grid grid-cols-3 gap-4"><div class="${escape(size === "md" ? "h-2" : "h-1.5", true) + " bg-gray-200 dark:bg-gray-600 rounded-sm col-span-2"}"></div> <div class="${escape(size === "md" ? "h-2" : "h-1.5", true) + " bg-gray-200 dark:bg-gray-600 rounded-sm col-span-1"}"></div></div> <div class="grid grid-cols-4 gap-4"><div class="${escape(size === "md" ? "h-2" : "h-1.5", true) + " bg-gray-200 dark:bg-gray-600 rounded-sm col-span-1"}"></div> <div class="${escape(size === "md" ? "h-2" : "h-1.5", true) + " bg-gray-200 dark:bg-gray-600 rounded-sm col-span-2"}"></div> <div class="${escape(size === "md" ? "h-2" : "h-1.5", true) + " bg-gray-200 dark:bg-gray-600 rounded-sm col-span-1 mr-4"}"></div></div> <div class="${escape(size === "md" ? "h-2" : "h-1.5", true) + " bg-gray-200 dark:bg-gray-600 rounded-sm"}"></div></div></div></div>`;
});
const RateComment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $$unsubscribe_models;
  $$unsubscribe_models = subscribe(models, (value) => value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  createEventDispatcher();
  let { message } = $$props;
  let { show = false } = $$props;
  let LIKE_REASONS = [
    "accurate_information",
    "followed_instructions_perfectly",
    "showcased_creativity",
    "positive_attitude",
    "attention_to_detail",
    "thorough_explanation",
    "other"
  ];
  let DISLIKE_REASONS = [
    "dont_like_the_style",
    "too_verbose",
    "not_helpful",
    "not_factually_correct",
    "didnt_fully_follow_instructions",
    "refused_when_it_shouldnt_have",
    "being_lazy",
    "other"
  ];
  let tags = [];
  let reasons = [];
  let selectedReason = null;
  let comment = "";
  let detailedRating = null;
  const init = () => {
    if (!selectedReason) {
      selectedReason = message?.annotation?.reason ?? "";
    }
    if (!comment) {
      comment = message?.annotation?.comment ?? "";
    }
    tags = (message?.annotation?.tags ?? []).map((tag) => ({ name: tag }));
    if (!detailedRating) {
      detailedRating = message?.annotation?.details?.rating ?? null;
    }
  };
  if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  {
    if (message?.annotation?.rating === 1) {
      reasons = LIKE_REASONS;
    } else if (message?.annotation?.rating === -1) {
      reasons = DISLIKE_REASONS;
    }
  }
  {
    if (message) {
      init();
    }
  }
  $$unsubscribe_i18n();
  $$unsubscribe_models();
  return `${message?.arena ? `<div class="text-xs font-medium pt-1.5 -mb-0.5">${escape($i18n.t('This response was generated by "{{model}}"', {
    model: message.selectedModelId
  }))}</div>` : ``} <div class="my-2.5 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-850" id="${"message-feedback-" + escape(message.id, true)}"><div class="flex justify-between items-center"><div class="text-sm font-medium">${escape($i18n.t("How would you rate this response?"))}</div>  <button data-svelte-h="svelte-1ew22ui"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></button></div> <div class="w-full flex justify-center"><div class="relative w-fit overflow-x-auto scrollbar-none"><div class="mt-1.5 w-fit flex gap-1 pb-2"> ${each(Array.from({ length: 10 }).map((_, i) => i + 1), (rating) => {
    return `<button class="${"size-7 text-sm border border-gray-100 dark:border-gray-850 hover:bg-gray-50 dark:hover:bg-gray-850 " + escape(
      detailedRating === rating ? "bg-gray-100 dark:bg-gray-800" : "",
      true
    ) + " transition rounded-full disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-white dark:disabled:bg-gray-900"}" ${(message?.annotation?.rating === -1 ? rating > 5 : rating < 6) ? "disabled" : ""}>${escape(rating)} </button>`;
  })}</div> <div class="sticky top-0 bottom-0 left-0 right-0 flex justify-between text-xs"><div>1 - ${escape($i18n.t("Awful"))}</div> <div>10 - ${escape($i18n.t("Amazing"))}</div></div></div></div> <div>${reasons.length > 0 ? `<div class="text-sm mt-1.5 font-medium">${escape($i18n.t("Why?"))}</div> <div class="flex flex-wrap gap-1.5 text-sm mt-1.5">${each(reasons, (reason) => {
    return `<button class="${"px-3 py-0.5 border border-gray-100 dark:border-gray-850 hover:bg-gray-50 dark:hover:bg-gray-850 " + escape(
      selectedReason === reason ? "bg-gray-100 dark:bg-gray-800" : "",
      true
    ) + " transition rounded-xl"}">${reason === "accurate_information" ? `${escape($i18n.t("Accurate information"))}` : `${reason === "followed_instructions_perfectly" ? `${escape($i18n.t("Followed instructions perfectly"))}` : `${reason === "showcased_creativity" ? `${escape($i18n.t("Showcased creativity"))}` : `${reason === "positive_attitude" ? `${escape($i18n.t("Positive attitude"))}` : `${reason === "attention_to_detail" ? `${escape($i18n.t("Attention to detail"))}` : `${reason === "thorough_explanation" ? `${escape($i18n.t("Thorough explanation"))}` : `${reason === "dont_like_the_style" ? `${escape($i18n.t("Don't like the style"))}` : `${reason === "too_verbose" ? `${escape($i18n.t("Too verbose"))}` : `${reason === "not_helpful" ? `${escape($i18n.t("Not helpful"))}` : `${reason === "not_factually_correct" ? `${escape($i18n.t("Not factually correct"))}` : `${reason === "didnt_fully_follow_instructions" ? `${escape($i18n.t("Didn't fully follow instructions"))}` : `${reason === "refused_when_it_shouldnt_have" ? `${escape($i18n.t("Refused when it shouldn't have"))}` : `${reason === "being_lazy" ? `${escape($i18n.t("Being lazy"))}` : `${reason === "other" ? `${escape($i18n.t("Other"))}` : `${escape(reason)}`}`}`}`}`}`}`}`}`}`}`}`}`}`} </button>`;
  })}</div>` : ``}</div> <div class="mt-2"><textarea class="w-full text-sm px-1 py-2 bg-transparent outline-hidden resize-none rounded-xl"${add_attribute("placeholder", $i18n.t("Feel free to add specific details"), 0)} rows="3">${escape(comment || "")}</textarea></div> <div class="mt-2 gap-1.5 flex justify-between"><div class="flex items-end group">${validate_component(Tags, "Tags").$$render($$result, { tags }, {}, {})}</div> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full">${escape($i18n.t("Save"))}</button></div></div>`;
});
const WebSearchResults = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status = { urls: [], query: "" } } = $$props;
  let state = false;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Collapsible, "Collapsible").$$render(
      $$result,
      {
        className: "w-full space-y-1",
        open: state
      },
      {
        open: ($$value) => {
          state = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `<div class="text-sm border border-gray-300/30 dark:border-gray-700/50 rounded-xl mb-1.5" slot="content">${status?.query ? `<a href="${"https://www.google.com/search?q=" + escape(status.query, true)}" target="_blank" class="flex w-full items-center p-3 px-4 border-b border-gray-300/30 dark:border-gray-700/50 group/item justify-between font-normal text-gray-800 dark:text-gray-300 no-underline"><div class="flex gap-2 items-center">${validate_component(MagnifyingGlass, "MagnifyingGlass").$$render($$result, {}, {}, {})} <div class="line-clamp-1">${escape(status.query)}</div></div> <div class="ml-1 text-white dark:text-gray-900 group-hover/item:text-gray-600 dark:group-hover/item:text-white transition" data-svelte-h="svelte-14xjows"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd"></path></svg></div></a>` : ``} ${each(status.urls, (url, urlIdx) => {
            return `<a${add_attribute("href", url, 0)} target="_blank" class="${"flex w-full items-center p-3 px-4 " + escape(
              urlIdx === status.urls.length - 1 ? "" : "border-b border-gray-300/30 dark:border-gray-700/50",
              true
            ) + " group/item justify-between font-normal text-gray-800 dark:text-gray-300"}"><div class="line-clamp-1">${escape(url)}</div> <div class="ml-1 text-white dark:text-gray-900 group-hover/item:text-gray-600 dark:group-hover/item:text-white transition" data-svelte-h="svelte-14xjows"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd"></path></svg></div> </a>`;
          })}</div>`;
        },
        default: () => {
          return `<div class="flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition">${slots.default ? slots.default({}) : ``} ${state ? `${validate_component(ChevronUp, "ChevronUp").$$render(
            $$result,
            {
              strokeWidth: "3.5",
              className: "size-3.5 "
            },
            {},
            {}
          )}` : `${validate_component(ChevronDown, "ChevronDown").$$render(
            $$result,
            {
              strokeWidth: "3.5",
              className: "size-3.5 "
            },
            {},
            {}
          )}`}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = "" } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  return `<div class="flex my-2 gap-2.5 border px-4 py-3 border-red-600/10 bg-red-600/10 rounded-lg"><div class="self-start mt-0.5">${validate_component(Info, "Info").$$render(
    $$result,
    {
      className: "size-5 text-red-700 dark:text-red-400"
    },
    {},
    {}
  )}</div> <div class="self-center text-sm">${escape(typeof content === "string" ? content : JSON.stringify(content))}</div></div>`;
});
function calculatePercentage(distance) {
  if (typeof distance !== "number") return null;
  if (distance < 0) return 0;
  if (distance > 1) return 100;
  return Math.round(distance * 1e4) / 100;
}
function getRelevanceColor(percentage) {
  if (percentage >= 80) return "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200";
  if (percentage >= 60) return "bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200";
  if (percentage >= 40) return "bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200";
  return "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200";
}
const CitationsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  let { citation } = $$props;
  let { showPercentage = false } = $$props;
  let { showRelevance = true } = $$props;
  let mergedDocuments = [];
  const decodeString = (str) => {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  };
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.citation === void 0 && $$bindings.citation && citation !== void 0) $$bindings.citation(citation);
  if ($$props.showPercentage === void 0 && $$bindings.showPercentage && showPercentage !== void 0) $$bindings.showPercentage(showPercentage);
  if ($$props.showRelevance === void 0 && $$bindings.showRelevance && showRelevance !== void 0) $$bindings.showRelevance(showRelevance);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (citation) {
        mergedDocuments = citation.document?.map((c, i) => {
          return {
            source: citation.source,
            document: c,
            metadata: citation.metadata?.[i],
            distance: citation.distances?.[i]
          };
        });
        if (mergedDocuments.every((doc) => doc.distance !== void 0)) {
          mergedDocuments = mergedDocuments.sort((a, b) => (b.distance ?? Infinity) - (a.distance ?? Infinity));
        }
      }
    }
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { size: "lg", show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center capitalize">${escape($i18n.t("Citation"))}</div> <button class="self-center" data-svelte-h="svelte-745w2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full px-6 pb-5 md:space-x-4"><div class="flex flex-col w-full dark:text-gray-200 overflow-y-scroll max-h-[22rem] scrollbar-hidden">${each(mergedDocuments, (document2, documentIdx) => {
            return `<div class="flex flex-col w-full"><div class="text-sm font-medium dark:text-gray-300">${escape($i18n.t("Source"))}</div> ${document2.source?.name ? `${validate_component(Tooltip, "Tooltip").$$render(
              $$result,
              {
                className: "w-fit",
                content: $i18n.t("Open file"),
                placement: "top-start",
                tippyOptions: { duration: [500, 0] }
              },
              {},
              {
                default: () => {
                  return `<div class="text-sm dark:text-gray-400 flex items-center gap-2 w-fit"><a class="hover:text-gray-500 dark:hover:text-gray-100 underline grow"${add_attribute(
                    "href",
                    document2?.metadata?.file_id ? `${WEBUI_API_BASE_URL}/files/${document2?.metadata?.file_id}/content${document2?.metadata?.page !== void 0 ? `#page=${document2.metadata.page + 1}` : ""}` : document2.source?.url?.includes("http") ? document2.source.url : `#`,
                    0
                  )} target="_blank">${escape(decodeString(document2?.metadata?.name ?? document2.source.name))}</a> ${document2?.metadata?.page ? `<span class="text-xs text-gray-500 dark:text-gray-400">(${escape($i18n.t("page"))} ${escape(document2.metadata.page + 1)})
										</span>` : ``}</div> `;
                }
              }
            )} ${document2.metadata?.parameters ? `<div class="text-sm font-medium dark:text-gray-300 mt-2">${escape($i18n.t("Parameters"))}</div> <pre class="text-sm dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded-md overflow-auto max-h-40">${escape(JSON.stringify(document2.metadata.parameters, null, 2))}</pre>` : ``} ${showRelevance ? `<div class="text-sm font-medium dark:text-gray-300 mt-2">${escape($i18n.t("Relevance"))}</div> ${document2.distance !== void 0 ? `${validate_component(Tooltip, "Tooltip").$$render(
              $$result,
              {
                className: "w-fit",
                content: $i18n.t("Semantic distance to query"),
                placement: "top-start",
                tippyOptions: { duration: [500, 0] }
              },
              {},
              {
                default: () => {
                  return `<div class="text-sm my-1 dark:text-gray-400 flex items-center gap-2 w-fit">${showPercentage ? (() => {
                    let percentage = calculatePercentage(document2.distance);
                    return ` ${typeof percentage === "number" ? `<span${add_attribute("class", `px-1 rounded-sm font-medium ${getRelevanceColor(percentage)}`, 0)}>${escape(percentage.toFixed(2))}%
													</span>` : ``} ${typeof document2?.distance === "number" ? `<span class="text-gray-500 dark:text-gray-500">(${escape((document2?.distance ?? 0).toFixed(4))})
													</span>` : ``}`;
                  })() : `${typeof document2?.distance === "number" ? `<span class="text-gray-500 dark:text-gray-500">(${escape((document2?.distance ?? 0).toFixed(4))})
												</span>` : ``}`}</div> `;
                }
              }
            )}` : `<div class="text-sm dark:text-gray-400">${escape($i18n.t("No distance available"))} </div>`}` : ``}` : `<div class="text-sm dark:text-gray-400">${escape($i18n.t("No source available"))} </div>`}</div> <div class="flex flex-col w-full"><div class="text-sm font-medium dark:text-gray-300 mt-2">${escape($i18n.t("Content"))}</div> ${document2.metadata?.html ? `<iframe class="w-full border-0 h-auto rounded-none" sandbox="allow-scripts allow-forms allow-same-origin"${add_attribute("srcdoc", document2.document, 0)}${add_attribute("title", $i18n.t("Content"), 0)}></iframe>` : `<pre class="text-sm dark:text-gray-400 whitespace-pre-line">                ${escape(document2.document)}
              </pre>`}</div> ${documentIdx !== mergedDocuments.length - 1 ? `<hr class="border-gray-100 dark:border-gray-850 my-3">` : ``}`;
          })}</div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
function calculateShowRelevance(sources2) {
  const distances = sources2.flatMap((citation) => citation.distances ?? []);
  const inRange = distances.filter((d) => d !== void 0 && d >= -1 && d <= 1).length;
  const outOfRange = distances.filter((d) => d !== void 0 && (d < -1 || d > 1)).length;
  if (distances.length === 0) {
    return false;
  }
  if (inRange === distances.length - 1 && outOfRange === 1 || outOfRange === distances.length - 1 && inRange === 1) {
    return false;
  }
  return true;
}
function shouldShowPercentage(sources2) {
  const distances = sources2.flatMap((citation) => citation.distances ?? []);
  return distances.every((d) => d !== void 0 && d >= -1 && d <= 1);
}
const Citations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { id = "" } = $$props;
  let { sources = [] } = $$props;
  let citations = [];
  let showPercentage = false;
  let showRelevance = true;
  let showCitationModal = false;
  let selectedCitation = null;
  let isCollapsibleOpen = false;
  const decodeString = (str) => {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.sources === void 0 && $$bindings.sources && sources !== void 0) $$bindings.sources(sources);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        console.log("sources", sources);
        citations = sources.reduce(
          (acc, source) => {
            if (Object.keys(source).length === 0) {
              return acc;
            }
            source.document.forEach((document2, index) => {
              const metadata = source.metadata?.[index];
              const distance = source.distances?.[index];
              const id2 = metadata?.source ?? source?.source?.id ?? "N/A";
              let _source = source?.source;
              if (metadata?.name) {
                _source = { ..._source, name: metadata.name };
              }
              if (id2.startsWith("http://") || id2.startsWith("https://")) {
                _source = { ..._source, name: id2, url: id2 };
              }
              const existingSource = acc.find((item) => item.id === id2);
              if (existingSource) {
                existingSource.document.push(document2);
                existingSource.metadata.push(metadata);
                if (distance !== void 0) existingSource.distances.push(distance);
              } else {
                acc.push({
                  id: id2,
                  source: _source,
                  document: [document2],
                  metadata: metadata ? [metadata] : [],
                  distances: distance !== void 0 ? [distance] : void 0
                });
              }
            });
            return acc;
          },
          []
        );
        console.log("citations", citations);
        showRelevance = calculateShowRelevance(citations);
        showPercentage = shouldShowPercentage(citations);
      }
    }
    $$rendered = `${validate_component(CitationsModal, "CitationsModal").$$render(
      $$result,
      {
        citation: selectedCitation,
        showPercentage,
        showRelevance,
        show: showCitationModal
      },
      {
        show: ($$value) => {
          showCitationModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${citations.length > 0 ? `<div class="py-0.5 -mx-0.5 w-full flex gap-1 items-center flex-wrap">${citations.length <= 3 ? `<div class="flex text-xs font-medium flex-wrap">${each(citations, (citation, idx) => {
      return `<button${add_attribute("id", `source-${id}-${idx + 1}`, 0)} class="no-toggle outline-hidden flex dark:text-gray-300 p-1 bg-white dark:bg-gray-900 rounded-xl max-w-96">${citations.every((c) => c.distances !== void 0) ? `<div class="bg-gray-50 dark:bg-gray-800 rounded-full size-4">${escape(idx + 1)} </div>` : ``} <div class="flex-1 mx-1 truncate text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition">${escape(decodeString(citation.source.name))}</div> </button>`;
    })}</div>` : `${validate_component(Collapsible, "Collapsible").$$render(
      $$result,
      {
        id: `collapsible-${id}`,
        className: "w-full max-w-full ",
        buttonClassName: "w-fit max-w-full",
        open: isCollapsibleOpen
      },
      {
        open: ($$value) => {
          isCollapsibleOpen = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `<div slot="content"><div class="flex text-xs font-medium flex-wrap">${each(citations, (citation, idx) => {
            return `<button${add_attribute("id", `source-${id}-${idx + 1}`, 0)} class="no-toggle outline-hidden flex dark:text-gray-300 p-1 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition rounded-xl max-w-96">${citations.every((c) => c.distances !== void 0) ? `<div class="bg-gray-50 dark:bg-gray-800 rounded-full size-4">${escape(idx + 1)} </div>` : ``} <div class="flex-1 mx-1 truncate">${escape(decodeString(citation.source.name))}</div> </button>`;
          })}</div></div>`;
        },
        default: () => {
          return `<div class="flex w-full overflow-auto items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition cursor-pointer"><div class="flex-1 flex items-center gap-1 overflow-auto scrollbar-none w-full max-w-full"><span class="whitespace-nowrap hidden sm:inline shrink-0">${escape($i18n.t("References from"))}</span> <div class="flex items-center overflow-auto scrollbar-none w-full max-w-full flex-1"><div class="flex text-xs font-medium items-center">${each(citations.slice(0, 2), (citation, idx) => {
            return `<button class="no-toggle outline-hidden flex dark:text-gray-300 p-1 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition rounded-xl max-w-96">${citations.every((c) => c.distances !== void 0) ? `<div class="bg-gray-50 dark:bg-gray-800 rounded-full size-4">${escape(idx + 1)} </div>` : ``} <div class="flex-1 mx-1 truncate">${escape(decodeString(citation.source.name))}</div> </button>`;
          })}</div></div> <div class="flex items-center gap-1 whitespace-nowrap shrink-0"><span class="hidden sm:inline">${escape($i18n.t("and"))}</span> ${escape(citations.length - 2)} <span>${escape($i18n.t("more"))}</span></div></div> <div class="shrink-0">${isCollapsibleOpen ? `${validate_component(ChevronUp, "ChevronUp").$$render(
            $$result,
            {
              strokeWidth: "3.5",
              className: "size-3.5"
            },
            {},
            {}
          )}` : `${validate_component(ChevronDown, "ChevronDown").$$render(
            $$result,
            {
              strokeWidth: "3.5",
              className: "size-3.5"
            },
            {},
            {}
          )}`}</div></div>`;
        }
      }
    )}`}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const CodeExecutionModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  let { codeExecution = null } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.codeExecution === void 0 && $$bindings.codeExecution && codeExecution !== void 0) $$bindings.codeExecution(codeExecution);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { size: "lg", show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center flex flex-col gap-0.5 capitalize">${codeExecution?.result ? `<div>${codeExecution.result?.error ? `${validate_component(Badge, "Badge").$$render($$result, { type: "error", content: "error" }, {}, {})}` : `${codeExecution.result?.output ? `${validate_component(Badge, "Badge").$$render($$result, { type: "success", content: "success" }, {}, {})}` : `${validate_component(Badge, "Badge").$$render($$result, { type: "warning", content: "incomplete" }, {}, {})}`}`}</div>` : ``} <div class="flex gap-2 items-center">${!codeExecution?.result ? `<div>${validate_component(Spinner, "Spinner").$$render($$result, { className: "size-4" }, {}, {})}</div>` : ``} <div>${codeExecution?.name ? `${escape($i18n.t("Code execution"))}: ${escape(codeExecution?.name)}` : `${escape($i18n.t("Code execution"))}`}</div></div></div> <button class="self-center" data-svelte-h="svelte-vnrwun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-5"><div class="flex flex-col w-full dark:text-gray-200 overflow-y-scroll max-h-[22rem] scrollbar-hidden"><div class="flex flex-col w-full">${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              id: "code-exec-" + codeExecution?.id + "-code",
              lang: codeExecution?.language ?? "",
              code: codeExecution?.code ?? "",
              className: "",
              editorClassName: codeExecution?.result && (codeExecution?.result?.error || codeExecution?.result?.output) ? "rounded-b-none" : "",
              stickyButtonsClassName: "top-0",
              run: false
            },
            {},
            {}
          )}</div> ${codeExecution?.result && (codeExecution?.result?.error || codeExecution?.result?.output) ? `<div class="dark:bg-[#202123] dark:text-white px-4 py-4 rounded-b-lg flex flex-col gap-3">${codeExecution?.result?.error ? `<div><div class="text-gray-500 text-xs mb-1">${escape($i18n.t("ERROR"))}</div> <div class="text-sm">${escape(codeExecution?.result?.error)}</div></div>` : ``} ${codeExecution?.result?.output ? `<div><div class="text-gray-500 text-xs mb-1">${escape($i18n.t("OUTPUT"))}</div> <div class="text-sm">${escape(codeExecution?.result?.output)}</div></div>` : ``}</div>` : ``} ${codeExecution?.result?.files && codeExecution?.result?.files.length > 0 ? `<div class="flex flex-col w-full"><hr class="border-gray-100 dark:border-gray-850 my-2"> <div class="text-sm font-medium dark:text-gray-300">${escape($i18n.t("Files"))}</div> <ul class="mt-1 list-disc pl-4 text-xs">${each(codeExecution?.result?.files, (file) => {
            return `<li><a${add_attribute("href", file.url, 0)} target="_blank">${escape(file.name)}</a> </li>`;
          })}</ul></div>` : ``}</div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const css$2 = {
  code: "@keyframes svelte-1gvtig2-pulse{0%,100%{opacity:1}50%{opacity:0.6}}.pulse.svelte-1gvtig2{opacity:1;animation:svelte-1gvtig2-pulse 1.5s ease}",
  map: `{"version":3,"file":"CodeExecutions.svelte","sources":["CodeExecutions.svelte"],"sourcesContent":["<script lang=\\"ts\\">import CodeExecutionModal from \\"./CodeExecutionModal.svelte\\";\\nimport Spinner from \\"$lib/components/common/Spinner.svelte\\";\\nimport Check from \\"$lib/components/icons/Check.svelte\\";\\nimport XMark from \\"$lib/components/icons/XMark.svelte\\";\\nimport EllipsisHorizontal from \\"$lib/components/icons/EllipsisHorizontal.svelte\\";\\nexport let codeExecutions = [];\\nlet selectedCodeExecution = null;\\nlet showCodeExecutionModal = false;\\n$: if (codeExecutions) {\\n  updateSelectedCodeExecution();\\n}\\nconst updateSelectedCodeExecution = () => {\\n  if (selectedCodeExecution) {\\n    selectedCodeExecution = codeExecutions.find(\\n      (execution) => execution.id === selectedCodeExecution.id\\n    );\\n  }\\n};\\n<\/script>\\n\\n<CodeExecutionModal bind:show={showCodeExecutionModal} codeExecution={selectedCodeExecution} />\\n\\n{#if codeExecutions.length > 0}\\n\\t<div class=\\"mt-1 mb-2 w-full flex gap-1 items-center flex-wrap\\">\\n\\t\\t{#each codeExecutions as execution (execution.id)}\\n\\t\\t\\t<div class=\\"flex gap-1 text-xs font-semibold\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"flex dark:text-gray-300 py-1 px-1 bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition rounded-xl max-w-96\\"\\n\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\tselectedCodeExecution = execution;\\n\\t\\t\\t\\t\\t\\tshowCodeExecutionModal = true;\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tclass=\\"bg-white dark:bg-gray-700 rounded-full size-4 flex items-center justify-center\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{#if execution?.result}\\n\\t\\t\\t\\t\\t\\t\\t{#if execution.result?.error}\\n\\t\\t\\t\\t\\t\\t\\t\\t<XMark />\\n\\t\\t\\t\\t\\t\\t\\t{:else if execution.result?.output}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Check strokeWidth=\\"3\\" className=\\"size-3\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<EllipsisHorizontal />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<Spinner className=\\"size-4\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tclass=\\"flex-1 mx-2 line-clamp-1 code-execution-name {execution?.result ? '' : 'pulse'}\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{execution.name}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t@keyframes pulse {\\n\\t\\t0%,\\n\\t\\t100% {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\t50% {\\n\\t\\t\\topacity: 0.6;\\n\\t\\t}\\n\\t}\\n\\n\\t.pulse {\\n\\t\\topacity: 1;\\n\\t\\tanimation: pulse 1.5s ease;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4DC,WAAW,oBAAM,CAChB,EAAE,CACF,IAAK,CACJ,OAAO,CAAE,CACV,CACA,GAAI,CACH,OAAO,CAAE,GACV,CACD,CAEA,qBAAO,CACN,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,oBAAK,CAAC,IAAI,CAAC,IACvB"}`
};
const CodeExecutions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { codeExecutions = [] } = $$props;
  let selectedCodeExecution = null;
  let showCodeExecutionModal = false;
  if ($$props.codeExecutions === void 0 && $$bindings.codeExecutions && codeExecutions !== void 0) $$bindings.codeExecutions(codeExecutions);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(CodeExecutionModal, "CodeExecutionModal").$$render(
      $$result,
      {
        codeExecution: selectedCodeExecution,
        show: showCodeExecutionModal
      },
      {
        show: ($$value) => {
          showCodeExecutionModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${codeExecutions.length > 0 ? `<div class="mt-1 mb-2 w-full flex gap-1 items-center flex-wrap">${each(codeExecutions, (execution) => {
      return `<div class="flex gap-1 text-xs font-semibold"><button class="flex dark:text-gray-300 py-1 px-1 bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition rounded-xl max-w-96"><div class="bg-white dark:bg-gray-700 rounded-full size-4 flex items-center justify-center">${execution?.result ? `${execution.result?.error ? `${validate_component(XMark, "XMark").$$render($$result, {}, {}, {})}` : `${execution.result?.output ? `${validate_component(Check, "Check").$$render($$result, { strokeWidth: "3", className: "size-3" }, {}, {})}` : `${validate_component(EllipsisHorizontal, "EllipsisHorizontal").$$render($$result, {}, {}, {})}`}`}` : `${validate_component(Spinner, "Spinner").$$render($$result, { className: "size-4" }, {}, {})}`}</div> <div class="${"flex-1 mx-2 line-clamp-1 code-execution-name " + escape(execution?.result ? "" : "pulse", true) + " svelte-1gvtig2"}">${escape(execution.name)} </div></button> </div>`;
    })}</div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const ChatBubble = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"></path></svg>`;
});
const FloatingButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { id = "" } = $$props;
  let { model = null } = $$props;
  let { messages = [] } = $$props;
  let { onAdd = () => {
  } } = $$props;
  let floatingInput = false;
  let floatingInputValue = "";
  let prompt = "";
  let responseContent = null;
  let responseDone = false;
  const closeHandler = () => {
    responseContent = null;
    responseDone = false;
    floatingInput = false;
    floatingInputValue = "";
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.model === void 0 && $$bindings.model && model !== void 0) $$bindings.model(model);
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0) $$bindings.messages(messages);
  if ($$props.onAdd === void 0 && $$bindings.onAdd && onAdd !== void 0) $$bindings.onAdd(onAdd);
  if ($$props.closeHandler === void 0 && $$bindings.closeHandler && closeHandler !== void 0) $$bindings.closeHandler(closeHandler);
  $$unsubscribe_i18n();
  return `<div${add_attribute("id", `floating-buttons-${id}`, 0)} class="absolute rounded-lg mt-1 text-xs z-9999" style="display: none">${responseContent === null ? `${!floatingInput ? `<div class="flex flex-row gap-0.5 shrink-0 p-1 bg-white dark:bg-gray-850 dark:text-gray-100 text-medium rounded-lg shadow-xl"><button class="px-1 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-sm flex items-center gap-1 min-w-fit">${validate_component(ChatBubble, "ChatBubble").$$render($$result, { className: "size-3 shrink-0" }, {}, {})} <div class="shrink-0">${escape($i18n.t("Ask"))}</div></button> <button class="px-1 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-sm flex items-center gap-1 min-w-fit">${validate_component(LightBulb, "LightBulb").$$render($$result, { className: "size-3 shrink-0" }, {}, {})} <div class="shrink-0">${escape($i18n.t("Explain"))}</div></button></div>` : `<div class="py-1 flex dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-850 w-72 rounded-full shadow-xl"><input type="text" id="floating-message-input" class="ml-5 bg-transparent outline-hidden w-full flex-1 text-sm"${add_attribute("placeholder", $i18n.t("Ask a question"), 0)}${add_attribute("value", floatingInputValue, 0)}> <div class="ml-1 mr-2"><button class="${escape(
    floatingInputValue !== "" ? "bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 " : "text-white bg-gray-200 dark:text-gray-900 dark:bg-gray-700 disabled",
    true
  ) + " transition rounded-full p-1.5 m-0.5 self-center"}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z" clip-rule="evenodd"></path></svg></button></div></div>`}` : `<div class="bg-white dark:bg-gray-850 dark:text-gray-100 rounded-xl shadow-xl w-80 max-w-full"><div class="bg-gray-50/50 dark:bg-gray-800 dark:text-gray-100 text-medium rounded-xl px-3.5 py-3 w-full"><div class="font-medium">${validate_component(Markdown, "Markdown").$$render(
    $$result,
    {
      id: `${id}-float-prompt`,
      content: prompt
    },
    {},
    {}
  )}</div></div> <div class="bg-white dark:bg-gray-850 dark:text-gray-100 text-medium rounded-xl px-3.5 py-3 w-full"><div class="max-h-80 overflow-y-auto w-full markdown-prose-xs" id="response-container">${responseContent.trim() === "" ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { size: "sm" }, {}, {})}` : `${validate_component(Markdown, "Markdown").$$render(
    $$result,
    {
      id: `${id}-float-response`,
      content: responseContent
    },
    {},
    {}
  )}`} ${responseDone ? `<div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full">${escape($i18n.t("Add"))}</button></div>` : ``}</div></div></div>`}</div>`;
});
const ContentRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mobile, $$unsubscribe_mobile;
  let $settings, $$unsubscribe_settings;
  let $chatId, $$unsubscribe_chatId;
  $$unsubscribe_mobile = subscribe(mobile, (value) => $mobile = value);
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_chatId = subscribe(chatId, (value) => $chatId = value);
  getContext("i18n");
  let { id } = $$props;
  let { content } = $$props;
  let { history } = $$props;
  let { model = null } = $$props;
  let { sources = null } = $$props;
  let { save = false } = $$props;
  let { preview = false } = $$props;
  let { floatingButtons = true } = $$props;
  let { onSave = () => {
  } } = $$props;
  let { onSourceClick = () => {
  } } = $$props;
  let { onTaskClick = () => {
  } } = $$props;
  let { onAddMessages = () => {
  } } = $$props;
  let contentContainerElement;
  let floatingButtonsElement;
  const updateButtonPosition = (event) => {
    const buttonsContainerElement = document.getElementById(`floating-buttons-${id}`);
    if (!buttonsContainerElement?.contains(event.target)) {
      closeFloatingButtons();
      return;
    }
    setTimeout(
      async () => {
        await tick();
        return;
      },
      0
    );
  };
  const closeFloatingButtons = () => {
    const buttonsContainerElement = document.getElementById(`floating-buttons-${id}`);
    if (buttonsContainerElement) {
      buttonsContainerElement.style.display = "none";
    }
    if (floatingButtonsElement) {
      if (typeof floatingButtonsElement?.closeHandler === "function") {
        floatingButtonsElement?.closeHandler();
      }
    }
  };
  const keydownHandler = (e) => {
    if (e.key === "Escape") {
      closeFloatingButtons();
    }
  };
  onDestroy(() => {
    if (floatingButtons) {
      document.removeEventListener("mouseup", updateButtonPosition);
      document.removeEventListener("keydown", keydownHandler);
    }
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.history === void 0 && $$bindings.history && history !== void 0) $$bindings.history(history);
  if ($$props.model === void 0 && $$bindings.model && model !== void 0) $$bindings.model(model);
  if ($$props.sources === void 0 && $$bindings.sources && sources !== void 0) $$bindings.sources(sources);
  if ($$props.save === void 0 && $$bindings.save && save !== void 0) $$bindings.save(save);
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0) $$bindings.preview(preview);
  if ($$props.floatingButtons === void 0 && $$bindings.floatingButtons && floatingButtons !== void 0) $$bindings.floatingButtons(floatingButtons);
  if ($$props.onSave === void 0 && $$bindings.onSave && onSave !== void 0) $$bindings.onSave(onSave);
  if ($$props.onSourceClick === void 0 && $$bindings.onSourceClick && onSourceClick !== void 0) $$bindings.onSourceClick(onSourceClick);
  if ($$props.onTaskClick === void 0 && $$bindings.onTaskClick && onTaskClick !== void 0) $$bindings.onTaskClick(onTaskClick);
  if ($$props.onAddMessages === void 0 && $$bindings.onAddMessages && onAddMessages !== void 0) $$bindings.onAddMessages(onAddMessages);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div${add_attribute("this", contentContainerElement, 0)}>${validate_component(Markdown, "Markdown").$$render(
      $$result,
      {
        id,
        content,
        model,
        save,
        preview,
        sourceIds: (sources ?? []).reduce(
          (acc, s) => {
            let ids = [];
            s.document.forEach((document2, index) => {
              if (model?.info?.meta?.capabilities?.citations == false) {
                ids.push("N/A");
                return ids;
              }
              const metadata = s.metadata?.[index];
              const id2 = metadata?.source ?? "N/A";
              if (metadata?.name) {
                ids.push(metadata.name);
                return ids;
              }
              if (id2.startsWith("http://") || id2.startsWith("https://")) {
                ids.push(id2);
              } else {
                ids.push(s?.source?.name ?? id2);
              }
              return ids;
            });
            acc = [...acc, ...ids];
            return acc.filter((item, index) => acc.indexOf(item) === index);
          },
          []
        ),
        onSourceClick,
        onTaskClick,
        onSave,
        onUpdate: (token) => {
          const { lang, text: code } = token;
          if (($settings?.detectArtifacts ?? true) && (["html", "svg"].includes(lang) || lang === "xml" && code.includes("svg")) && !$mobile && $chatId) {
            showArtifacts.set(true);
            showControls.set(true);
          }
        },
        onPreview: async (value) => {
          console.log("Preview", value);
          await artifactCode.set(value);
          await showControls.set(true);
          await showArtifacts.set(true);
          await showOverview.set(false);
        }
      },
      {},
      {}
    )}</div> ${floatingButtons && model ? `${validate_component(FloatingButtons, "FloatingButtons").$$render(
      $$result,
      {
        id,
        model: model?.id,
        messages: createMessagesList(history, id),
        onAdd: ({ modelId, parentId, messages }) => {
          console.log(modelId, parentId, messages);
          onAddMessages({ modelId, parentId, messages });
          closeFloatingButtons();
        },
        this: floatingButtonsElement
      },
      {
        this: ($$value) => {
          floatingButtonsElement = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_mobile();
  $$unsubscribe_settings();
  $$unsubscribe_chatId();
  return $$rendered;
});
const ArrowTurnDownRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"${add_attribute("class", className, 0)}><path fill-rule="evenodd" d="M2.75 2a.75.75 0 0 1 .75.75v6.5h7.94l-.97-.97a.75.75 0 0 1 1.06-1.06l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H2.75A.75.75 0 0 1 2 10V2.75A.75.75 0 0 1 2.75 2Z" clip-rule="evenodd"></path></svg>`;
});
const FollowUps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { followUps = [] } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.followUps === void 0 && $$bindings.followUps && followUps !== void 0) $$bindings.followUps(followUps);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  $$unsubscribe_i18n();
  return `<div class="mt-4"><div class="text-sm font-medium">${escape($i18n.t("Follow up"))}</div> <div class="flex flex-col text-left gap-1 mt-1.5">${each(followUps, (followUp, idx) => {
    return `<button class="mr-2 py-1.5 bg-transparent text-left text-sm flex items-center gap-2 px-1.5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"${add_attribute("title", followUp, 0)}${add_attribute("aria-label", followUp, 0)}>${validate_component(ArrowTurnDownRight, "ArrowTurnDownRight").$$render($$result, { className: "size-3.5" }, {}, {})} <div class="line-clamp-1">${escape(followUp)} </div></button> ${idx < followUps.length - 1 ? `<hr class="border-gray-100 dark:border-gray-850">` : ``}`;
  })}</div></div>`;
});
const css$1 = {
  code: ".buttons.svelte-1u5gq5j::-webkit-scrollbar{display:none}.buttons.svelte-1u5gq5j{-ms-overflow-style:none;scrollbar-width:none}",
  map: `{"version":3,"file":"ResponseMessage.svelte","sources":["ResponseMessage.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { toast } from \\"svelte-sonner\\";\\nimport dayjs from \\"dayjs\\";\\nimport { createEventDispatcher } from \\"svelte\\";\\nimport { onMount, tick, getContext } from \\"svelte\\";\\nconst i18n = getContext(\\"i18n\\");\\nconst dispatch = createEventDispatcher();\\nimport { createNewFeedback, getFeedbackById, updateFeedbackById } from \\"$lib/apis/evaluations\\";\\nimport { getChatById } from \\"$lib/apis/chats\\";\\nimport { generateTags } from \\"$lib/apis\\";\\nimport { config, models, settings, temporaryChatEnabled, TTSWorker, user } from \\"$lib/stores\\";\\nimport { synthesizeOpenAISpeech } from \\"$lib/apis/audio\\";\\nimport { imageGenerations } from \\"$lib/apis/images\\";\\nimport {\\n  copyToClipboard as _copyToClipboard,\\n  approximateToHumanReadable,\\n  getMessageContentParts,\\n  sanitizeResponseContent,\\n  createMessagesList,\\n  formatDate,\\n  removeDetails,\\n  removeAllDetails\\n} from \\"$lib/utils\\";\\nimport { WEBUI_BASE_URL } from \\"$lib/constants\\";\\nimport Name from \\"./Name.svelte\\";\\nimport ProfileImage from \\"./ProfileImage.svelte\\";\\nimport Skeleton from \\"./Skeleton.svelte\\";\\nimport Image from \\"$lib/components/common/Image.svelte\\";\\nimport Tooltip from \\"$lib/components/common/Tooltip.svelte\\";\\nimport RateComment from \\"./RateComment.svelte\\";\\nimport Spinner from \\"$lib/components/common/Spinner.svelte\\";\\nimport WebSearchResults from \\"./ResponseMessage/WebSearchResults.svelte\\";\\nimport Sparkles from \\"$lib/components/icons/Sparkles.svelte\\";\\nimport DeleteConfirmDialog from \\"$lib/components/common/ConfirmDialog.svelte\\";\\nimport Error from \\"./Error.svelte\\";\\nimport Citations from \\"./Citations.svelte\\";\\nimport CodeExecutions from \\"./CodeExecutions.svelte\\";\\nimport ContentRenderer from \\"./ContentRenderer.svelte\\";\\nimport { KokoroWorker } from \\"$lib/workers/KokoroWorker\\";\\nimport FileItem from \\"$lib/components/common/FileItem.svelte\\";\\nimport FollowUps from \\"./ResponseMessage/FollowUps.svelte\\";\\nimport { fade } from \\"svelte/transition\\";\\nimport { flyAndScale } from \\"$lib/utils/transitions\\";\\nexport let chatId = \\"\\";\\nexport let history;\\nexport let messageId;\\nlet message = JSON.parse(JSON.stringify(history.messages[messageId]));\\n$: if (history.messages) {\\n  if (JSON.stringify(message) !== JSON.stringify(history.messages[messageId])) {\\n    message = JSON.parse(JSON.stringify(history.messages[messageId]));\\n  }\\n}\\nexport let siblings;\\nexport let gotoMessage = () => {\\n};\\nexport let showPreviousMessage;\\nexport let showNextMessage;\\nexport let updateChat;\\nexport let editMessage;\\nexport let saveMessage;\\nexport let rateMessage;\\nexport let actionMessage;\\nexport let deleteMessage;\\nexport let submitMessage;\\nexport let continueResponse;\\nexport let regenerateResponse;\\nexport let addMessages;\\nexport let isLastMessage = true;\\nexport let readOnly = false;\\nlet buttonsContainerElement;\\nlet showDeleteConfirm = false;\\nlet model = null;\\n$: model = $models.find((m) => m.id === message.model);\\nlet edit = false;\\nlet editedContent = \\"\\";\\nlet editTextAreaElement;\\nlet messageIndexEdit = false;\\nlet audioParts = {};\\nlet speaking = false;\\nlet speakingIdx;\\nlet loadingSpeech = false;\\nlet generatingImage = false;\\nlet showRateComment = false;\\nconst copyToClipboard = async (text) => {\\n  text = removeAllDetails(text);\\n  if (($config?.ui?.response_watermark ?? \\"\\").trim() !== \\"\\") {\\n    text = \`\${text}\\n\\n\${$config?.ui?.response_watermark}\`;\\n  }\\n  const res = await _copyToClipboard(text, $settings?.copyFormatted ?? false);\\n  if (res) {\\n    toast.success($i18n.t(\\"Copying to clipboard was successful!\\"));\\n  }\\n};\\nconst playAudio = (idx) => {\\n  return new Promise((res) => {\\n    speakingIdx = idx;\\n    const audio = audioParts[idx];\\n    if (!audio) {\\n      return res();\\n    }\\n    audio.play();\\n    audio.onended = async () => {\\n      await new Promise((r) => setTimeout(r, 300));\\n      if (Object.keys(audioParts).length - 1 === idx) {\\n        speaking = false;\\n      }\\n      res();\\n    };\\n  });\\n};\\nconst toggleSpeakMessage = async () => {\\n  if (speaking) {\\n    try {\\n      speechSynthesis.cancel();\\n      if (speakingIdx !== void 0 && audioParts[speakingIdx]) {\\n        audioParts[speakingIdx].pause();\\n        audioParts[speakingIdx].currentTime = 0;\\n      }\\n    } catch {\\n    }\\n    speaking = false;\\n    speakingIdx = void 0;\\n    return;\\n  }\\n  if (!(message?.content ?? \\"\\").trim().length) {\\n    toast.info($i18n.t(\\"No content to speak\\"));\\n    return;\\n  }\\n  speaking = true;\\n  const content = removeAllDetails(message.content);\\n  if ($config.audio.tts.engine === \\"\\") {\\n    let voices = [];\\n    const getVoicesLoop = setInterval(() => {\\n      voices = speechSynthesis.getVoices();\\n      if (voices.length > 0) {\\n        clearInterval(getVoicesLoop);\\n        const voice = voices?.filter(\\n          (v) => v.voiceURI === ($settings?.audio?.tts?.voice ?? $config?.audio?.tts?.voice)\\n        )?.at(0) ?? void 0;\\n        console.log(voice);\\n        const speak = new SpeechSynthesisUtterance(content);\\n        speak.rate = $settings.audio?.tts?.playbackRate ?? 1;\\n        console.log(speak);\\n        speak.onend = () => {\\n          speaking = false;\\n          if ($settings.conversationMode) {\\n            document.getElementById(\\"voice-input-button\\")?.click();\\n          }\\n        };\\n        if (voice) {\\n          speak.voice = voice;\\n        }\\n        speechSynthesis.speak(speak);\\n      }\\n    }, 100);\\n  } else {\\n    loadingSpeech = true;\\n    const messageContentParts = getMessageContentParts(\\n      content,\\n      $config?.audio?.tts?.split_on ?? \\"punctuation\\"\\n    );\\n    if (!messageContentParts.length) {\\n      console.log(\\"No content to speak\\");\\n      toast.info($i18n.t(\\"No content to speak\\"));\\n      speaking = false;\\n      loadingSpeech = false;\\n      return;\\n    }\\n    console.debug(\\"Prepared message content for TTS\\", messageContentParts);\\n    audioParts = messageContentParts.reduce(\\n      (acc, _sentence, idx) => {\\n        acc[idx] = null;\\n        return acc;\\n      },\\n      {}\\n    );\\n    let lastPlayedAudioPromise = Promise.resolve();\\n    if ($settings.audio?.tts?.engine === \\"browser-kokoro\\") {\\n      if (!$TTSWorker) {\\n        await TTSWorker.set(\\n          new KokoroWorker({\\n            dtype: $settings.audio?.tts?.engineConfig?.dtype ?? \\"fp32\\"\\n          })\\n        );\\n        await $TTSWorker.init();\\n      }\\n      for (const [idx, sentence] of messageContentParts.entries()) {\\n        const blob = await $TTSWorker.generate({\\n          text: sentence,\\n          voice: $settings?.audio?.tts?.voice ?? $config?.audio?.tts?.voice\\n        }).catch((error) => {\\n          console.error(error);\\n          toast.error(\`\${error}\`);\\n          speaking = false;\\n          loadingSpeech = false;\\n        });\\n        if (blob) {\\n          const audio = new Audio(blob);\\n          audio.playbackRate = $settings.audio?.tts?.playbackRate ?? 1;\\n          audioParts[idx] = audio;\\n          loadingSpeech = false;\\n          lastPlayedAudioPromise = lastPlayedAudioPromise.then(() => playAudio(idx));\\n        }\\n      }\\n    } else {\\n      for (const [idx, sentence] of messageContentParts.entries()) {\\n        const res = await synthesizeOpenAISpeech(\\n          localStorage.token,\\n          $settings?.audio?.tts?.defaultVoice === $config.audio.tts.voice ? $settings?.audio?.tts?.voice ?? $config?.audio?.tts?.voice : $config?.audio?.tts?.voice,\\n          sentence\\n        ).catch((error) => {\\n          console.error(error);\\n          toast.error(\`\${error}\`);\\n          speaking = false;\\n          loadingSpeech = false;\\n        });\\n        if (res) {\\n          const blob = await res.blob();\\n          const blobUrl = URL.createObjectURL(blob);\\n          const audio = new Audio(blobUrl);\\n          audio.playbackRate = $settings.audio?.tts?.playbackRate ?? 1;\\n          audioParts[idx] = audio;\\n          loadingSpeech = false;\\n          lastPlayedAudioPromise = lastPlayedAudioPromise.then(() => playAudio(idx));\\n        }\\n      }\\n    }\\n  }\\n};\\nlet preprocessedDetailsCache = [];\\nfunction preprocessForEditing(content) {\\n  const detailsBlocks = [];\\n  let i = 0;\\n  content = content.replace(/<details[\\\\s\\\\S]*?<\\\\/details>/gi, (match) => {\\n    detailsBlocks.push(match);\\n    return \`<details id=\\"__DETAIL_\${i++}__\\"/>\`;\\n  });\\n  preprocessedDetailsCache = detailsBlocks;\\n  return content;\\n}\\nfunction postprocessAfterEditing(content) {\\n  const restoredContent = content.replace(\\n    /<details id=\\"__DETAIL_(\\\\d+)__\\"\\\\/>/g,\\n    (_, index) => preprocessedDetailsCache[parseInt(index)] || \\"\\"\\n  );\\n  return restoredContent;\\n}\\nconst editMessageHandler = async () => {\\n  edit = true;\\n  editedContent = preprocessForEditing(message.content);\\n  await tick();\\n  editTextAreaElement.style.height = \\"\\";\\n  editTextAreaElement.style.height = \`\${editTextAreaElement.scrollHeight}px\`;\\n};\\nconst editMessageConfirmHandler = async () => {\\n  const messageContent = postprocessAfterEditing(editedContent ? editedContent : \\"\\");\\n  editMessage(message.id, { content: messageContent }, false);\\n  edit = false;\\n  editedContent = \\"\\";\\n  await tick();\\n};\\nconst saveAsCopyHandler = async () => {\\n  const messageContent = postprocessAfterEditing(editedContent ? editedContent : \\"\\");\\n  editMessage(message.id, { content: messageContent });\\n  edit = false;\\n  editedContent = \\"\\";\\n  await tick();\\n};\\nconst cancelEditMessage = async () => {\\n  edit = false;\\n  editedContent = \\"\\";\\n  await tick();\\n};\\nconst generateImage = async (message2) => {\\n  generatingImage = true;\\n  const res = await imageGenerations(localStorage.token, message2.content).catch((error) => {\\n    toast.error(\`\${error}\`);\\n  });\\n  console.log(res);\\n  if (res) {\\n    const files = res.map((image) => ({\\n      type: \\"image\\",\\n      url: \`\${image.url}\`\\n    }));\\n    saveMessage(message2.id, {\\n      ...message2,\\n      files\\n    });\\n  }\\n  generatingImage = false;\\n};\\nlet feedbackLoading = false;\\nconst feedbackHandler = async (rating = null, details = null) => {\\n  feedbackLoading = true;\\n  console.log(\\"Feedback\\", rating, details);\\n  const updatedMessage = {\\n    ...message,\\n    annotation: {\\n      ...message?.annotation ?? {},\\n      ...rating !== null ? { rating } : {},\\n      ...details ? details : {}\\n    }\\n  };\\n  const chat = await getChatById(localStorage.token, chatId).catch((error) => {\\n    toast.error(\`\${error}\`);\\n  });\\n  if (!chat) {\\n    return;\\n  }\\n  const messages = createMessagesList(history, message.id);\\n  let feedbackItem = {\\n    type: \\"rating\\",\\n    data: {\\n      ...updatedMessage?.annotation ? updatedMessage.annotation : {},\\n      model_id: message?.selectedModelId ?? message.model,\\n      ...history.messages[message.parentId].childrenIds.length > 1 ? {\\n        sibling_model_ids: history.messages[message.parentId].childrenIds.filter((id) => id !== message.id).map((id) => history.messages[id]?.selectedModelId ?? history.messages[id].model)\\n      } : {}\\n    },\\n    meta: {\\n      arena: message ? message.arena : false,\\n      model_id: message.model,\\n      message_id: message.id,\\n      message_index: messages.length,\\n      chat_id: chatId\\n    },\\n    snapshot: {\\n      chat\\n    }\\n  };\\n  const baseModels = [\\n    feedbackItem.data.model_id,\\n    ...feedbackItem.data.sibling_model_ids ?? []\\n  ].reduce((acc, modelId) => {\\n    const model2 = $models.find((m) => m.id === modelId);\\n    if (model2) {\\n      acc[model2.id] = model2?.info?.base_model_id ?? null;\\n    } else {\\n      console.warn(\`Model with ID \${modelId} not found\`);\\n    }\\n    return acc;\\n  }, {});\\n  feedbackItem.meta.base_models = baseModels;\\n  let feedback = null;\\n  if (message?.feedbackId) {\\n    feedback = await updateFeedbackById(\\n      localStorage.token,\\n      message.feedbackId,\\n      feedbackItem\\n    ).catch((error) => {\\n      toast.error(\`\${error}\`);\\n    });\\n  } else {\\n    feedback = await createNewFeedback(localStorage.token, feedbackItem).catch((error) => {\\n      toast.error(\`\${error}\`);\\n    });\\n    if (feedback) {\\n      updatedMessage.feedbackId = feedback.id;\\n    }\\n  }\\n  console.log(updatedMessage);\\n  saveMessage(message.id, updatedMessage);\\n  await tick();\\n  if (!details) {\\n    showRateComment = true;\\n    if (!updatedMessage.annotation?.tags) {\\n      const tags = await generateTags(localStorage.token, message.model, messages, chatId).catch(\\n        (error) => {\\n          console.error(error);\\n          return [];\\n        }\\n      );\\n      console.log(tags);\\n      if (tags) {\\n        updatedMessage.annotation.tags = tags;\\n        feedbackItem.data.tags = tags;\\n        saveMessage(message.id, updatedMessage);\\n        await updateFeedbackById(\\n          localStorage.token,\\n          updatedMessage.feedbackId,\\n          feedbackItem\\n        ).catch((error) => {\\n          toast.error(\`\${error}\`);\\n        });\\n      }\\n    }\\n  }\\n  feedbackLoading = false;\\n};\\nconst deleteMessageHandler = async () => {\\n  deleteMessage(message.id);\\n};\\n$: if (!edit) {\\n  (async () => {\\n    await tick();\\n  })();\\n}\\nonMount(async () => {\\n  await tick();\\n  if (buttonsContainerElement) {\\n    console.log(buttonsContainerElement);\\n    buttonsContainerElement.addEventListener(\\"wheel\\", function(event) {\\n      if (buttonsContainerElement.scrollWidth <= buttonsContainerElement.clientWidth) {\\n        return;\\n      } else {\\n        event.preventDefault();\\n        if (event.deltaY !== 0) {\\n          buttonsContainerElement.scrollLeft += event.deltaY;\\n        }\\n      }\\n    });\\n  }\\n});\\n<\/script>\\n\\n<DeleteConfirmDialog\\n\\tbind:show={showDeleteConfirm}\\n\\ttitle={$i18n.t('Delete message?')}\\n\\ton:confirm={() => {\\n\\t\\tdeleteMessageHandler();\\n\\t}}\\n/>\\n\\n{#key message.id}\\n\\t<div\\n\\t\\tclass=\\" flex w-full message-{message.id}\\"\\n\\t\\tid=\\"message-{message.id}\\"\\n\\t\\tdir={$settings.chatDirection}\\n\\t>\\n\\t\\t<div class={\`shrink-0 ltr:mr-3 rtl:ml-3 hidden @lg:flex \`}>\\n\\t\\t\\t<ProfileImage\\n\\t\\t\\t\\tsrc={model?.info?.meta?.profile_image_url ??\\n\\t\\t\\t\\t\\t($i18n.language === 'dg-DG' ? \`/doge.png\` : \`\${WEBUI_BASE_URL}/static/favicon.png\`)}\\n\\t\\t\\t\\tclassName={'size-8'}\\n\\t\\t\\t/>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"flex-auto w-0 pl-1 relative -translate-y-0.5\\">\\n\\t\\t\\t<Name>\\n\\t\\t\\t\\t<Tooltip content={model?.name ?? message.model} placement=\\"top-start\\">\\n\\t\\t\\t\\t\\t<span class=\\"line-clamp-1 text-black dark:text-white\\">\\n\\t\\t\\t\\t\\t\\t{model?.name ?? message.model}\\n\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t</Tooltip>\\n\\n\\t\\t\\t\\t{#if message.timestamp}\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tclass=\\" self-center text-xs invisible group-hover:visible text-gray-400 font-medium first-letter:capitalize ml-0.5 translate-y-[1px]\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<Tooltip content={dayjs(message.timestamp * 1000).format('LLLL')}>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"line-clamp-1\\">{formatDate(message.timestamp * 1000)}</span>\\n\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</Name>\\n\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<div class=\\"chat-{message.role} w-full min-w-full markdown-prose\\">\\n\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t{#if (message?.statusHistory ?? [...(message?.status ? [message?.status] : [])]).length > 0}\\n\\t\\t\\t\\t\\t\\t\\t{@const status = (\\n\\t\\t\\t\\t\\t\\t\\t\\tmessage?.statusHistory ?? [...(message?.status ? [message?.status] : [])]\\n\\t\\t\\t\\t\\t\\t\\t).at(-1)}\\n\\t\\t\\t\\t\\t\\t\\t{#if !status?.hidden}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"status-description flex items-center gap-2 py-0.5\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if status?.action === 'web_search' && status?.urls}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<WebSearchResults {status}>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-col justify-center -space-y-0.5\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{status?.done === false\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'shimmer'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''} text-base line-clamp-1 text-wrap\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- $i18n.t(\\"Generating search query\\") -->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- $i18n.t(\\"No search query generated\\") -->\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- $i18n.t('Searched {{count}} sites') -->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if status?.description.includes('{{count}}')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t(status?.description, {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcount: status?.urls.length\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t})}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else if status?.description === 'No search query generated'}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('No search query generated')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else if status?.description === 'Generating search query'}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Generating search query')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{status?.description}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</WebSearchResults>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else if status?.action === 'knowledge_search'}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-col justify-center -space-y-0.5\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{status?.done === false\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'shimmer'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''} text-gray-500 dark:text-gray-500 text-base line-clamp-1 text-wrap\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t(\`Searching Knowledge for \\"{{searchQuery}}\\"\`, {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsearchQuery: status.query\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t})}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-col justify-center -space-y-0.5\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{status?.done === false\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'shimmer'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''} text-gray-500 dark:text-gray-500 text-base line-clamp-1 text-wrap\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- $i18n.t(\`Searching \\"{{searchQuery}}\\"\`) -->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if status?.description.includes('{{searchQuery}}')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t(status?.description, {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsearchQuery: status?.query\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t})}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else if status?.description === 'No search query generated'}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('No search query generated')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else if status?.description === 'Generating search query'}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Generating search query')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else if status?.description === 'Searching the web'}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Searching the web...')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{status?.description}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t{#if message?.files && message.files?.filter((f) => f.type === 'image').length > 0}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"my-1 w-full flex overflow-x-auto gap-2 flex-wrap\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{#each message.files as file}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if file.type === 'image'}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Image src={file.url} alt={message.content} />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<FileItem\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\titem={file}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\turl={file.url}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tname={file.name}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype={file.type}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsize={file?.size}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcolorClassName=\\"bg-white dark:bg-gray-850 \\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t{#if edit === true}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"w-full bg-gray-50 dark:bg-gray-800 rounded-3xl px-5 py-3 my-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<textarea\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tid=\\"message-edit-{message.id}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:this={editTextAreaElement}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\" bg-transparent outline-hidden w-full resize-none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={editedContent}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:input={(e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\te.target.style.height = '';\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\te.target.style.height = \`\${e.target.scrollHeight}px\`;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:keydown={(e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (e.key === 'Escape') {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdocument.getElementById('close-edit-message-button')?.click();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst isCmdOrCtrlPressed = e.metaKey || e.ctrlKey;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst isEnterPressed = e.key === 'Enter';\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (isCmdOrCtrlPressed && isEnterPressed) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdocument.getElementById('confirm-edit-message-button')?.click();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" mt-2 mb-1 flex justify-between text-sm font-medium\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid=\\"save-new-message-button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\" px-4 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 transition rounded-3xl\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsaveAsCopyHandler();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Save As Copy')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex space-x-1.5\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid=\\"close-edit-message-button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"px-4 py-2 bg-white dark:bg-gray-900 hover:bg-gray-100 text-gray-800 dark:text-gray-100 transition rounded-3xl\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcancelEditMessage();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Cancel')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid=\\"confirm-edit-message-button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\" px-4 py-2 bg-gray-900 dark:bg-white hover:bg-gray-850 text-gray-100 dark:text-gray-800 transition rounded-3xl\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\teditMessageConfirmHandler();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Save')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"w-full flex flex-col relative\\" id=\\"response-content-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if message.content === '' && !message.error && (message?.statusHistory ?? [...(message?.status ? [message?.status] : [])]).length === 0}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Skeleton />\\n\\t\\t\\t\\t\\t\\t\\t\\t{:else if message.content && message.error !== true}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- always show message contents even if there's an error -->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- unless message.error === true which is legacy error handling, where the error message is stored in message.content -->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<ContentRenderer\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid={message.id}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{history}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcontent={message.content}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsources={message.sources}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfloatingButtons={message?.done && !readOnly}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsave={!readOnly}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tpreview={!readOnly}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{model}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tonTaskClick={async (e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconsole.log(e);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tonSourceClick={async (id, idx) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconsole.log(id, idx);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tlet sourceButton = document.getElementById(\`source-\${message.id}-\${idx}\`);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst sourcesCollapsible = document.getElementById(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\`collapsible-\${message.id}\`\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t);\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (sourceButton) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsourceButton.click();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t} else if (sourcesCollapsible) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t// Open sources collapsible so we can click the source button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsourcesCollapsible\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.querySelector('div:first-child')\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.dispatchEvent(new PointerEvent('pointerup', {}));\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t// Wait for next frame to ensure DOM updates\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tawait new Promise((resolve) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trequestAnimationFrame(() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trequestAnimationFrame(resolve);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t// Try clicking the source button again\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsourceButton = document.getElementById(\`source-\${message.id}-\${idx}\`);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsourceButton && sourceButton.click();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tonAddMessages={({ modelId, parentId, messages }) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taddMessages({ modelId, parentId, messages });\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tonSave={({ raw, oldContent, newContent }) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\thistory.messages[message.id].content = history.messages[\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tmessage.id\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t].content.replace(raw, raw.replace(oldContent, newContent));\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tupdateChat();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if message?.error}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Error content={message?.error?.content ?? message.content} />\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if (message?.sources || message?.citations) && (model?.info?.meta?.capabilities?.citations ?? true)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Citations id={message?.id} sources={message?.sources ?? message?.citations} />\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if message.code_executions}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<CodeExecutions codeExecutions={message.code_executions} />\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t{#if !edit}\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tbind:this={buttonsContainerElement}\\n\\t\\t\\t\\t\\t\\tclass=\\"flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{#if message.done || siblings.length > 1}\\n\\t\\t\\t\\t\\t\\t\\t{#if siblings.length > 1}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex self-center min-w-fit\\" dir=\\"ltr\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={$i18n.t('Previous message')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tshowPreviousMessage(message);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"size-3.5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M15.75 19.5 8.25 12l7.5-7.5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if messageIndexEdit}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"text-sm flex justify-center font-semibold self-center dark:text-gray-100 min-w-fit\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid=\\"message-index-input-{message.id}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"number\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvalue={siblings.indexOf(message.id) + 1}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tmin=\\"1\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tmax={siblings.length}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:focus={(e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\te.target.select();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:blur={(e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tgotoMessage(message, e.target.value - 1);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tmessageIndexEdit = false;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:keydown={(e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (e.key === 'Enter') {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tgotoMessage(message, e.target.value - 1);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tmessageIndexEdit = false;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"bg-transparent font-semibold self-center dark:text-gray-100 min-w-fit outline-hidden\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>/{siblings.length}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"text-sm tracking-widest font-semibold self-center dark:text-gray-100 min-w-fit\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:dblclick={async () => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tmessageIndexEdit = true;\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tawait tick();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst input = document.getElementById(\`message-index-input-\${message.id}\`);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (input) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tinput.focus();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tinput.select();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{siblings.indexOf(message.id) + 1}/{siblings.length}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tshowNextMessage(message);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={$i18n.t('Next message')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"size-3.5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"m8.25 4.5 7.5 7.5-7.5 7.5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t{#if message.done}\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if !readOnly}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if $user?.role === 'user' ? ($user?.permissions?.chat?.edit ?? true) : true}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content={$i18n.t('Edit')} placement=\\"bottom\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={$i18n.t('Edit')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{isLastMessage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'visible'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'invisible group-hover:visible'} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\teditMessageHandler();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.3\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content={$i18n.t('Copy')} placement=\\"bottom\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={$i18n.t('Copy')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{isLastMessage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'visible'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'invisible group-hover:visible'} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition copy-response-button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcopyToClipboard(message.content);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.3\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if $user?.role === 'admin' || ($user?.permissions?.chat?.tts ?? true)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content={$i18n.t('Read Aloud')} placement=\\"bottom\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={$i18n.t('Read Aloud')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid=\\"speak-button-{message.id}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{isLastMessage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'visible'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'invisible group-hover:visible'} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (!loadingSpeech) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttoggleSpeakMessage();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if loadingSpeech}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\" w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<style>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.spinner_S1WN {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tanimation: spinner_MGfb 0.8s linear infinite;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tanimation-delay: -0.8s;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.spinner_Km9P {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tanimation-delay: -0.65s;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.spinner_JApP {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tanimation-delay: -0.5s;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t@keyframes spinner_MGfb {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t93.75%,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t100% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\topacity: 0.2;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</style>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle class=\\"spinner_S1WN\\" cx=\\"4\\" cy=\\"12\\" r=\\"3\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle class=\\"spinner_S1WN spinner_Km9P\\" cx=\\"12\\" cy=\\"12\\" r=\\"3\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle class=\\"spinner_S1WN spinner_JApP\\" cx=\\"20\\" cy=\\"12\\" r=\\"3\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else if speaking}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.3\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.3\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if $config?.features.enable_image_generation && ($user?.role === 'admin' || $user?.permissions?.features?.image_generation) && !readOnly}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content={$i18n.t('Generate Image')} placement=\\"bottom\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={$i18n.t('Generate Image')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{isLastMessage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'visible'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'invisible group-hover:visible'}  p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (!generatingImage) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tgenerateImage(message);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if generatingImage}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\" w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<style>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.spinner_S1WN {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tanimation: spinner_MGfb 0.8s linear infinite;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tanimation-delay: -0.8s;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.spinner_Km9P {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tanimation-delay: -0.65s;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.spinner_JApP {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tanimation-delay: -0.5s;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t@keyframes spinner_MGfb {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t93.75%,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t100% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\topacity: 0.2;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</style>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle class=\\"spinner_S1WN\\" cx=\\"4\\" cy=\\"12\\" r=\\"3\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle class=\\"spinner_S1WN spinner_Km9P\\" cx=\\"12\\" cy=\\"12\\" r=\\"3\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle class=\\"spinner_S1WN spinner_JApP\\" cx=\\"20\\" cy=\\"12\\" r=\\"3\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.3\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if message.usage}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcontent={message.usage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? \`<pre>\${sanitizeResponseContent(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tJSON.stringify(message.usage, null, 2)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.replace(/\\"([^(\\")\\"]+)\\":/g, '$1:')\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.slice(1, -1)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.split('\\\\n')\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.map((line) => line.slice(2))\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.map((line) => (line.endsWith(',') ? line.slice(0, -1) : line))\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.join('\\\\n')\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t)}</pre>\`\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tplacement=\\"bottom\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\" {isLastMessage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'visible'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'invisible group-hover:visible'} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition whitespace-pre-wrap\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconsole.log(message);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid=\\"info-{message.id}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.3\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if !readOnly}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if !$temporaryChatEnabled && ($config?.features.enable_message_rating ?? true)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content={$i18n.t('Good Response')} placement=\\"bottom\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={$i18n.t('Good Response')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{isLastMessage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'visible'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'invisible group-hover:visible'} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg {(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tmessage?.annotation?.rating ?? ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t).toString() === '1'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'bg-gray-100 dark:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''} dark:hover:text-white hover:text-black transition disabled:cursor-progress disabled:hover:bg-transparent\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdisabled={feedbackLoading}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={async () => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tawait feedbackHandler(1);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\twindow.setTimeout(() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdocument\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.getElementById(\`message-feedback-\${message.id}\`)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t?.scrollIntoView();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}, 0);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.3\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content={$i18n.t('Bad Response')} placement=\\"bottom\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={$i18n.t('Bad Response')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{isLastMessage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'visible'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'invisible group-hover:visible'} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg {(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tmessage?.annotation?.rating ?? ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t).toString() === '-1'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'bg-gray-100 dark:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''} dark:hover:text-white hover:text-black transition disabled:cursor-progress disabled:hover:bg-transparent\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdisabled={feedbackLoading}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={async () => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tawait feedbackHandler(-1);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\twindow.setTimeout(() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdocument\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.getElementById(\`message-feedback-\${message.id}\`)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t?.scrollIntoView();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}, 0);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.3\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if isLastMessage}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content={$i18n.t('Continue Response')} placement=\\"bottom\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={$i18n.t('Continue Response')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid=\\"continue-response-button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{isLastMessage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'visible'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'invisible group-hover:visible'} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcontinueResponse();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.3\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content={$i18n.t('Regenerate')} placement=\\"bottom\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={$i18n.t('Regenerate')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{isLastMessage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'visible'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'invisible group-hover:visible'} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tshowRateComment = false;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tregenerateResponse(message);\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t(model?.actions ?? []).forEach((action) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdispatch('action', {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid: action.id,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tevent: {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid: 'regenerate-response',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdata: {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tmessageId: message.id\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2.3\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if siblings.length > 1}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content={$i18n.t('Delete')} placement=\\"bottom\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={$i18n.t('Delete')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid=\\"delete-response-button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{isLastMessage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'visible'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'invisible group-hover:visible'} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tshowDeleteConfirm = true;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if isLastMessage}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#each model?.actions ?? [] as action}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content={action.name} placement=\\"bottom\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taria-label={action.name}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{isLastMessage\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'visible'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'invisible group-hover:visible'} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tactionMessage(action.id, message);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if action?.icon}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"size-4\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsrc={action.icon}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4 {action.icon.includes('svg')\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'dark:invert-[80%]'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\"fill: currentColor;\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\talt={action.name}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Sparkles strokeWidth=\\"2.1\\" className=\\"size-4\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t{#if message.done && showRateComment}\\n\\t\\t\\t\\t\\t\\t<RateComment\\n\\t\\t\\t\\t\\t\\t\\tbind:message\\n\\t\\t\\t\\t\\t\\t\\tbind:show={showRateComment}\\n\\t\\t\\t\\t\\t\\t\\ton:save={async (e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\tawait feedbackHandler(null, {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t...e.detail\\n\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t{#if isLastMessage && message.done && !readOnly && (message?.followUps ?? []).length > 0}\\n\\t\\t\\t\\t\\t\\t<div class=\\"mt-2.5\\" in:fade={{ duration: 100 }}>\\n\\t\\t\\t\\t\\t\\t\\t<FollowUps\\n\\t\\t\\t\\t\\t\\t\\t\\tfollowUps={message?.followUps}\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick={(prompt) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tsubmitMessage(message?.id, prompt);\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t{#if message?.done}\\n\\t\\t\\t\\t<div aria-live=\\"polite\\" class=\\"sr-only\\">\\n\\t\\t\\t\\t\\t{message?.content ?? ''}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n{/key}\\n\\n<style>\\n\\t.buttons::-webkit-scrollbar {\\n\\t\\tdisplay: none; /* for Chrome, Safari and Opera */\\n\\t}\\n\\n\\t.buttons {\\n\\t\\t-ms-overflow-style: none; /* IE and Edge */\\n\\t\\tscrollbar-width: none; /* Firefox */\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA6xCC,uBAAQ,mBAAoB,CAC3B,OAAO,CAAE,IACV,CAEA,uBAAS,CACR,kBAAkB,CAAE,IAAI,CACxB,eAAe,CAAE,IAClB"}`
};
const ResponseMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $models, $$unsubscribe_models;
  let $settings, $$unsubscribe_settings;
  let $config, $$unsubscribe_config;
  let $$unsubscribe_TTSWorker;
  let $i18n, $$unsubscribe_i18n;
  let $user, $$unsubscribe_user;
  let $temporaryChatEnabled, $$unsubscribe_temporaryChatEnabled;
  $$unsubscribe_models = subscribe(models, (value) => $models = value);
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$unsubscribe_TTSWorker = subscribe(TTSWorker, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_temporaryChatEnabled = subscribe(temporaryChatEnabled, (value) => $temporaryChatEnabled = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  createEventDispatcher();
  let { chatId: chatId2 = "" } = $$props;
  let { history } = $$props;
  let { messageId } = $$props;
  let message = JSON.parse(JSON.stringify(history.messages[messageId]));
  let { siblings } = $$props;
  let { gotoMessage = () => {
  } } = $$props;
  let { showPreviousMessage } = $$props;
  let { showNextMessage } = $$props;
  let { updateChat } = $$props;
  let { editMessage } = $$props;
  let { saveMessage } = $$props;
  let { rateMessage } = $$props;
  let { actionMessage } = $$props;
  let { deleteMessage } = $$props;
  let { submitMessage } = $$props;
  let { continueResponse } = $$props;
  let { regenerateResponse } = $$props;
  let { addMessages } = $$props;
  let { isLastMessage = true } = $$props;
  let { readOnly = false } = $$props;
  let buttonsContainerElement;
  let showDeleteConfirm = false;
  let model = null;
  let showRateComment = false;
  if ($$props.chatId === void 0 && $$bindings.chatId && chatId2 !== void 0) $$bindings.chatId(chatId2);
  if ($$props.history === void 0 && $$bindings.history && history !== void 0) $$bindings.history(history);
  if ($$props.messageId === void 0 && $$bindings.messageId && messageId !== void 0) $$bindings.messageId(messageId);
  if ($$props.siblings === void 0 && $$bindings.siblings && siblings !== void 0) $$bindings.siblings(siblings);
  if ($$props.gotoMessage === void 0 && $$bindings.gotoMessage && gotoMessage !== void 0) $$bindings.gotoMessage(gotoMessage);
  if ($$props.showPreviousMessage === void 0 && $$bindings.showPreviousMessage && showPreviousMessage !== void 0) $$bindings.showPreviousMessage(showPreviousMessage);
  if ($$props.showNextMessage === void 0 && $$bindings.showNextMessage && showNextMessage !== void 0) $$bindings.showNextMessage(showNextMessage);
  if ($$props.updateChat === void 0 && $$bindings.updateChat && updateChat !== void 0) $$bindings.updateChat(updateChat);
  if ($$props.editMessage === void 0 && $$bindings.editMessage && editMessage !== void 0) $$bindings.editMessage(editMessage);
  if ($$props.saveMessage === void 0 && $$bindings.saveMessage && saveMessage !== void 0) $$bindings.saveMessage(saveMessage);
  if ($$props.rateMessage === void 0 && $$bindings.rateMessage && rateMessage !== void 0) $$bindings.rateMessage(rateMessage);
  if ($$props.actionMessage === void 0 && $$bindings.actionMessage && actionMessage !== void 0) $$bindings.actionMessage(actionMessage);
  if ($$props.deleteMessage === void 0 && $$bindings.deleteMessage && deleteMessage !== void 0) $$bindings.deleteMessage(deleteMessage);
  if ($$props.submitMessage === void 0 && $$bindings.submitMessage && submitMessage !== void 0) $$bindings.submitMessage(submitMessage);
  if ($$props.continueResponse === void 0 && $$bindings.continueResponse && continueResponse !== void 0) $$bindings.continueResponse(continueResponse);
  if ($$props.regenerateResponse === void 0 && $$bindings.regenerateResponse && regenerateResponse !== void 0) $$bindings.regenerateResponse(regenerateResponse);
  if ($$props.addMessages === void 0 && $$bindings.addMessages && addMessages !== void 0) $$bindings.addMessages(addMessages);
  if ($$props.isLastMessage === void 0 && $$bindings.isLastMessage && isLastMessage !== void 0) $$bindings.isLastMessage(isLastMessage);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0) $$bindings.readOnly(readOnly);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (history.messages) {
        if (JSON.stringify(message) !== JSON.stringify(history.messages[messageId])) {
          message = JSON.parse(JSON.stringify(history.messages[messageId]));
        }
      }
    }
    model = $models.find((m) => m.id === message.model);
    {
      {
        (async () => {
          await tick();
        })();
      }
    }
    $$rendered = `${validate_component(ConfirmDialog, "DeleteConfirmDialog").$$render(
      $$result,
      {
        title: $i18n.t("Delete message?"),
        show: showDeleteConfirm
      },
      {
        show: ($$value) => {
          showDeleteConfirm = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="${"flex w-full message-" + escape(message.id, true) + " svelte-1u5gq5j"}" id="${"message-" + escape(message.id, true)}"${add_attribute("dir", $settings.chatDirection, 0)}><div class="${escape(null_to_empty(`shrink-0 ltr:mr-3 rtl:ml-3 hidden @lg:flex `), true) + " svelte-1u5gq5j"}">${validate_component(ProfileImage, "ProfileImage").$$render(
      $$result,
      {
        src: model?.info?.meta?.profile_image_url ?? ($i18n.language === "dg-DG" ? `/doge.png` : `${WEBUI_BASE_URL}/static/favicon.png`),
        className: "size-8"
      },
      {},
      {}
    )}</div> <div class="flex-auto w-0 pl-1 relative -translate-y-0.5">${validate_component(Name, "Name").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            content: model?.name ?? message.model,
            placement: "top-start"
          },
          {},
          {
            default: () => {
              return `<span class="line-clamp-1 text-black dark:text-white">${escape(model?.name ?? message.model)}</span>`;
            }
          }
        )} ${message.timestamp ? `<div class="self-center text-xs invisible group-hover:visible text-gray-400 font-medium first-letter:capitalize ml-0.5 translate-y-[1px]">${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            content: dayjs(message.timestamp * 1e3).format("LLLL")
          },
          {},
          {
            default: () => {
              return `<span class="line-clamp-1">${escape(formatDate(message.timestamp * 1e3))}</span>`;
            }
          }
        )}</div>` : ``}`;
      }
    })} <div><div class="${"chat-" + escape(message.role, true) + " w-full min-w-full markdown-prose svelte-1u5gq5j"}"><div>${(message?.statusHistory ?? [...message?.status ? [message?.status] : []]).length > 0 ? (() => {
      let status = (message?.statusHistory ?? [...message?.status ? [message?.status] : []]).at(-1);
      return ` ${!status?.hidden ? `<div class="status-description flex items-center gap-2 py-0.5">${status?.action === "web_search" && status?.urls ? `${validate_component(WebSearchResults, "WebSearchResults").$$render($$result, { status }, {}, {
        default: () => {
          return `<div class="flex flex-col justify-center -space-y-0.5"><div class="${escape(status?.done === false ? "shimmer" : "", true) + " text-base line-clamp-1 text-wrap"}">   ${status?.description.includes("{{count}}") ? `${escape($i18n.t(status?.description, { count: status?.urls.length }))}` : `${status?.description === "No search query generated" ? `${escape($i18n.t("No search query generated"))}` : `${status?.description === "Generating search query" ? `${escape($i18n.t("Generating search query"))}` : `${escape(status?.description)}`}`}`}</div></div>`;
        }
      })}` : `${status?.action === "knowledge_search" ? `<div class="flex flex-col justify-center -space-y-0.5"><div class="${escape(status?.done === false ? "shimmer" : "", true) + " text-gray-500 dark:text-gray-500 text-base line-clamp-1 text-wrap"}">${escape($i18n.t(`Searching Knowledge for "{{searchQuery}}"`, { searchQuery: status.query }))}</div></div>` : `<div class="flex flex-col justify-center -space-y-0.5"><div class="${escape(status?.done === false ? "shimmer" : "", true) + " text-gray-500 dark:text-gray-500 text-base line-clamp-1 text-wrap"}"> ${status?.description.includes("{{searchQuery}}") ? `${escape($i18n.t(status?.description, { searchQuery: status?.query }))}` : `${status?.description === "No search query generated" ? `${escape($i18n.t("No search query generated"))}` : `${status?.description === "Generating search query" ? `${escape($i18n.t("Generating search query"))}` : `${status?.description === "Searching the web" ? `${escape($i18n.t("Searching the web..."))}` : `${escape(status?.description)}`}`}`}`}</div></div>`}`}</div>` : ``}`;
    })() : ``} ${message?.files && message.files?.filter((f) => f.type === "image").length > 0 ? `<div class="my-1 w-full flex overflow-x-auto gap-2 flex-wrap">${each(message.files, (file) => {
      return `<div>${file.type === "image" ? `${validate_component(Image, "Image").$$render($$result, { src: file.url, alt: message.content }, {}, {})}` : `${validate_component(FileItem, "FileItem").$$render(
        $$result,
        {
          item: file,
          url: file.url,
          name: file.name,
          type: file.type,
          size: file?.size,
          colorClassName: "bg-white dark:bg-gray-850 "
        },
        {},
        {}
      )}`} </div>`;
    })}</div>` : ``} ${`<div class="w-full flex flex-col relative" id="response-content-container">${message.content === "" && !message.error && (message?.statusHistory ?? [...message?.status ? [message?.status] : []]).length === 0 ? `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}` : `${message.content && message.error !== true ? `  ${validate_component(ContentRenderer, "ContentRenderer").$$render(
      $$result,
      {
        id: message.id,
        history,
        content: message.content,
        sources: message.sources,
        floatingButtons: message?.done && !readOnly,
        save: !readOnly,
        preview: !readOnly,
        model,
        onTaskClick: async (e) => {
          console.log(e);
        },
        onSourceClick: async (id, idx) => {
          console.log(id, idx);
          let sourceButton = document.getElementById(`source-${message.id}-${idx}`);
          const sourcesCollapsible = document.getElementById(`collapsible-${message.id}`);
          if (sourceButton) {
            sourceButton.click();
          } else if (sourcesCollapsible) {
            sourcesCollapsible.querySelector("div:first-child").dispatchEvent(new PointerEvent("pointerup", {}));
            await new Promise((resolve) => {
              requestAnimationFrame(() => {
                requestAnimationFrame(resolve);
              });
            });
            sourceButton = document.getElementById(`source-${message.id}-${idx}`);
            sourceButton && sourceButton.click();
          }
        },
        onAddMessages: ({ modelId, parentId, messages }) => {
          addMessages({ modelId, parentId, messages });
        },
        onSave: ({ raw, oldContent, newContent }) => {
          history.messages[message.id].content = history.messages[message.id].content.replace(raw, raw.replace(oldContent, newContent));
          updateChat();
        }
      },
      {},
      {}
    )}` : ``}`} ${message?.error ? `${validate_component(Error, "Error").$$render(
      $$result,
      {
        content: message?.error?.content ?? message.content
      },
      {},
      {}
    )}` : ``} ${(message?.sources || message?.citations) && (model?.info?.meta?.capabilities?.citations ?? true) ? `${validate_component(Citations, "Citations").$$render(
      $$result,
      {
        id: message?.id,
        sources: message?.sources ?? message?.citations
      },
      {},
      {}
    )}` : ``} ${message.code_executions ? `${validate_component(CodeExecutions, "CodeExecutions").$$render($$result, { codeExecutions: message.code_executions }, {}, {})}` : ``}</div>`}</div></div> ${`<div class="flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5 svelte-1u5gq5j"${add_attribute("this", buttonsContainerElement, 0)}>${message.done || siblings.length > 1 ? `${siblings.length > 1 ? `<div class="flex self-center min-w-fit" dir="ltr"><button${add_attribute("aria-label", $i18n.t("Previous message"), 0)} class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> ${` <div class="text-sm tracking-widest font-semibold self-center dark:text-gray-100 min-w-fit">${escape(siblings.indexOf(message.id) + 1)}/${escape(siblings.length)}</div>`} <button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition"${add_attribute("aria-label", $i18n.t("Next message"), 0)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button></div>` : ``} ${message.done ? `${!readOnly ? `${($user?.role === "user" ? $user?.permissions?.chat?.edit ?? true : true) ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Edit"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button${add_attribute("aria-label", $i18n.t("Edit"), 0)} class="${escape(
            isLastMessage ? "visible" : "invisible group-hover:visible",
            true
          ) + " p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition"}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" aria-hidden="true" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg></button>`;
        }
      }
    )}` : ``}` : ``} ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Copy"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button${add_attribute("aria-label", $i18n.t("Copy"), 0)} class="${escape(
            isLastMessage ? "visible" : "invisible group-hover:visible",
            true
          ) + " p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition copy-response-button"}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"></path></svg></button>`;
        }
      }
    )} ${$user?.role === "admin" || ($user?.permissions?.chat?.tts ?? true) ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Read Aloud"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button${add_attribute("aria-label", $i18n.t("Read Aloud"), 0)} id="${"speak-button-" + escape(message.id, true)}" class="${escape(
            isLastMessage ? "visible" : "invisible group-hover:visible",
            true
          ) + " p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition"}">${`${`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"></path></svg>`}`}</button>`;
        }
      }
    )}` : ``} ${$config?.features.enable_image_generation && ($user?.role === "admin" || $user?.permissions?.features?.image_generation) && !readOnly ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Generate Image"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button${add_attribute("aria-label", $i18n.t("Generate Image"), 0)} class="${escape(
            isLastMessage ? "visible" : "invisible group-hover:visible",
            true
          ) + " p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition"}">${`<svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>`}</button>`;
        }
      }
    )}` : ``} ${message.usage ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: message.usage ? `<pre>${sanitizeResponseContent(JSON.stringify(message.usage, null, 2).replace(/"([^(")"]+)":/g, "$1:").slice(1, -1).split("\n").map((line) => line.slice(2)).map((line) => line.endsWith(",") ? line.slice(0, -1) : line).join("\n"))}</pre>` : "",
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button aria-hidden="true" class="${"" + escape(
            isLastMessage ? "visible" : "invisible group-hover:visible",
            true
          ) + " p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition whitespace-pre-wrap"}" id="${"info-" + escape(message.id, true)}"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></button>`;
        }
      }
    )}` : ``} ${!readOnly ? `${!$temporaryChatEnabled && ($config?.features.enable_message_rating ?? true) ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Good Response"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button${add_attribute("aria-label", $i18n.t("Good Response"), 0)} class="${escape(
            isLastMessage ? "visible" : "invisible group-hover:visible",
            true
          ) + " p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg " + escape(
            (message?.annotation?.rating ?? "").toString() === "1" ? "bg-gray-100 dark:bg-gray-800" : "",
            true
          ) + " dark:hover:text-white hover:text-black transition disabled:cursor-progress disabled:hover:bg-transparent"}" ${""}><svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2.3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></button>`;
        }
      }
    )} ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Bad Response"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button${add_attribute("aria-label", $i18n.t("Bad Response"), 0)} class="${escape(
            isLastMessage ? "visible" : "invisible group-hover:visible",
            true
          ) + " p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg " + escape(
            (message?.annotation?.rating ?? "").toString() === "-1" ? "bg-gray-100 dark:bg-gray-800" : "",
            true
          ) + " dark:hover:text-white hover:text-black transition disabled:cursor-progress disabled:hover:bg-transparent"}" ${""}><svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2.3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg></button>`;
        }
      }
    )}` : ``} ${isLastMessage ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Continue Response"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button${add_attribute("aria-label", $i18n.t("Continue Response"), 0)} type="button" id="continue-response-button" class="${escape(
            isLastMessage ? "visible" : "invisible group-hover:visible",
            true
          ) + " p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button"}"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"></path></svg></button>`;
        }
      }
    )}` : ``} ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Regenerate"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button type="button"${add_attribute("aria-label", $i18n.t("Regenerate"), 0)} class="${escape(
            isLastMessage ? "visible" : "invisible group-hover:visible",
            true
          ) + " p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button"}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" aria-hidden="true" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg></button>`;
        }
      }
    )} ${siblings.length > 1 ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Delete"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button type="button"${add_attribute("aria-label", $i18n.t("Delete"), 0)} id="delete-response-button" class="${escape(
            isLastMessage ? "visible" : "invisible group-hover:visible",
            true
          ) + " p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button"}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg></button>`;
        }
      }
    )}` : ``} ${isLastMessage ? `${each(model?.actions ?? [], (action) => {
      return `${validate_component(Tooltip, "Tooltip").$$render(
        $$result,
        {
          content: action.name,
          placement: "bottom"
        },
        {},
        {
          default: () => {
            return `<button type="button"${add_attribute("aria-label", action.name, 0)} class="${escape(
              isLastMessage ? "visible" : "invisible group-hover:visible",
              true
            ) + " p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition"}">${action?.icon ? `<div class="size-4"><img${add_attribute("src", action.icon, 0)} class="${"w-4 h-4 " + escape(action.icon.includes("svg") ? "dark:invert-[80%]" : "", true)}" style="fill: currentColor;"${add_attribute("alt", action.name, 0)}> </div>` : `${validate_component(Sparkles, "Sparkles").$$render($$result, { strokeWidth: "2.1", className: "size-4" }, {}, {})}`}</button> `;
          }
        }
      )}`;
    })}` : ``}` : ``}` : ``}` : ``}</div> ${message.done && showRateComment ? `${validate_component(RateComment, "RateComment").$$render(
      $$result,
      { message, show: showRateComment },
      {
        message: ($$value) => {
          message = $$value;
          $$settled = false;
        },
        show: ($$value) => {
          showRateComment = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${isLastMessage && message.done && !readOnly && (message?.followUps ?? []).length > 0 ? `<div class="mt-2.5">${validate_component(FollowUps, "FollowUps").$$render(
      $$result,
      {
        followUps: message?.followUps,
        onClick: (prompt) => {
          submitMessage(message?.id, prompt);
        }
      },
      {},
      {}
    )}</div>` : ``}`}</div> ${message?.done ? `<div aria-live="polite" class="sr-only">${escape(message?.content ?? "")}</div>` : ``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_models();
  $$unsubscribe_settings();
  $$unsubscribe_config();
  $$unsubscribe_TTSWorker();
  $$unsubscribe_i18n();
  $$unsubscribe_user();
  $$unsubscribe_temporaryChatEnabled();
  return $$rendered;
});
const MultiResponseMessages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_settings;
  let $$unsubscribe_mobile;
  let $$unsubscribe_i18n;
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_mobile = subscribe(mobile, (value) => value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => value);
  dayjs.extend(localizedFormat);
  let { chatId: chatId2 } = $$props;
  let { history } = $$props;
  let { messageId } = $$props;
  let { isLastMessage } = $$props;
  let { readOnly = false } = $$props;
  let { updateChat } = $$props;
  let { editMessage } = $$props;
  let { saveMessage } = $$props;
  let { rateMessage } = $$props;
  let { actionMessage } = $$props;
  let { submitMessage } = $$props;
  let { deleteMessage } = $$props;
  let { continueResponse } = $$props;
  let { regenerateResponse } = $$props;
  let { mergeResponses } = $$props;
  let { addMessages } = $$props;
  let { triggerScroll } = $$props;
  createEventDispatcher();
  let message = JSON.parse(JSON.stringify(history.messages[messageId]));
  if ($$props.chatId === void 0 && $$bindings.chatId && chatId2 !== void 0) $$bindings.chatId(chatId2);
  if ($$props.history === void 0 && $$bindings.history && history !== void 0) $$bindings.history(history);
  if ($$props.messageId === void 0 && $$bindings.messageId && messageId !== void 0) $$bindings.messageId(messageId);
  if ($$props.isLastMessage === void 0 && $$bindings.isLastMessage && isLastMessage !== void 0) $$bindings.isLastMessage(isLastMessage);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0) $$bindings.readOnly(readOnly);
  if ($$props.updateChat === void 0 && $$bindings.updateChat && updateChat !== void 0) $$bindings.updateChat(updateChat);
  if ($$props.editMessage === void 0 && $$bindings.editMessage && editMessage !== void 0) $$bindings.editMessage(editMessage);
  if ($$props.saveMessage === void 0 && $$bindings.saveMessage && saveMessage !== void 0) $$bindings.saveMessage(saveMessage);
  if ($$props.rateMessage === void 0 && $$bindings.rateMessage && rateMessage !== void 0) $$bindings.rateMessage(rateMessage);
  if ($$props.actionMessage === void 0 && $$bindings.actionMessage && actionMessage !== void 0) $$bindings.actionMessage(actionMessage);
  if ($$props.submitMessage === void 0 && $$bindings.submitMessage && submitMessage !== void 0) $$bindings.submitMessage(submitMessage);
  if ($$props.deleteMessage === void 0 && $$bindings.deleteMessage && deleteMessage !== void 0) $$bindings.deleteMessage(deleteMessage);
  if ($$props.continueResponse === void 0 && $$bindings.continueResponse && continueResponse !== void 0) $$bindings.continueResponse(continueResponse);
  if ($$props.regenerateResponse === void 0 && $$bindings.regenerateResponse && regenerateResponse !== void 0) $$bindings.regenerateResponse(regenerateResponse);
  if ($$props.mergeResponses === void 0 && $$bindings.mergeResponses && mergeResponses !== void 0) $$bindings.mergeResponses(mergeResponses);
  if ($$props.addMessages === void 0 && $$bindings.addMessages && addMessages !== void 0) $$bindings.addMessages(addMessages);
  if ($$props.triggerScroll === void 0 && $$bindings.triggerScroll && triggerScroll !== void 0) $$bindings.triggerScroll(triggerScroll);
  {
    if (history.messages) {
      if (JSON.stringify(message) !== JSON.stringify(history.messages[messageId])) {
        message = JSON.parse(JSON.stringify(history.messages[messageId]));
      }
    }
  }
  $$unsubscribe_settings();
  $$unsubscribe_mobile();
  $$unsubscribe_i18n();
  return `${``}`;
});
const UserMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $settings, $$unsubscribe_settings;
  let $models, $$unsubscribe_models;
  let $_user, $$unsubscribe__user;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_models = subscribe(models, (value) => $models = value);
  $$unsubscribe__user = subscribe(user, (value) => $_user = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  dayjs.extend(localizedFormat);
  let { user: user$1 } = $$props;
  let { history } = $$props;
  let { messageId } = $$props;
  let { siblings } = $$props;
  let { gotoMessage } = $$props;
  let { showPreviousMessage } = $$props;
  let { showNextMessage } = $$props;
  let { editMessage } = $$props;
  let { deleteMessage } = $$props;
  let { isFirstMessage } = $$props;
  let { readOnly } = $$props;
  let showDeleteConfirm = false;
  let message = JSON.parse(JSON.stringify(history.messages[messageId]));
  if ($$props.user === void 0 && $$bindings.user && user$1 !== void 0) $$bindings.user(user$1);
  if ($$props.history === void 0 && $$bindings.history && history !== void 0) $$bindings.history(history);
  if ($$props.messageId === void 0 && $$bindings.messageId && messageId !== void 0) $$bindings.messageId(messageId);
  if ($$props.siblings === void 0 && $$bindings.siblings && siblings !== void 0) $$bindings.siblings(siblings);
  if ($$props.gotoMessage === void 0 && $$bindings.gotoMessage && gotoMessage !== void 0) $$bindings.gotoMessage(gotoMessage);
  if ($$props.showPreviousMessage === void 0 && $$bindings.showPreviousMessage && showPreviousMessage !== void 0) $$bindings.showPreviousMessage(showPreviousMessage);
  if ($$props.showNextMessage === void 0 && $$bindings.showNextMessage && showNextMessage !== void 0) $$bindings.showNextMessage(showNextMessage);
  if ($$props.editMessage === void 0 && $$bindings.editMessage && editMessage !== void 0) $$bindings.editMessage(editMessage);
  if ($$props.deleteMessage === void 0 && $$bindings.deleteMessage && deleteMessage !== void 0) $$bindings.deleteMessage(deleteMessage);
  if ($$props.isFirstMessage === void 0 && $$bindings.isFirstMessage && isFirstMessage !== void 0) $$bindings.isFirstMessage(isFirstMessage);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0) $$bindings.readOnly(readOnly);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (history.messages) {
        if (JSON.stringify(message) !== JSON.stringify(history.messages[messageId])) {
          message = JSON.parse(JSON.stringify(history.messages[messageId]));
        }
      }
    }
    $$rendered = `${validate_component(ConfirmDialog, "DeleteConfirmDialog").$$render(
      $$result,
      {
        title: $i18n.t("Delete message?"),
        show: showDeleteConfirm
      },
      {
        show: ($$value) => {
          showDeleteConfirm = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex w-full user-message"${add_attribute("dir", $settings.chatDirection, 0)} id="${"message-" + escape(message.id, true)}">${!($settings?.chatBubble ?? true) ? `<div${add_attribute("class", `shrink-0 ltr:mr-3 rtl:ml-3`, 0)}>${validate_component(ProfileImage, "ProfileImage").$$render(
      $$result,
      {
        src: message.user ? $models.find((m) => m.id === message.user)?.info?.meta?.profile_image_url ?? "/user.png" : user$1?.profile_image_url ?? "/user.png",
        className: "size-8"
      },
      {},
      {}
    )}</div>` : ``} <div class="flex-auto w-0 max-w-full pl-1">${!($settings?.chatBubble ?? true) ? `<div>${validate_component(Name, "Name").$$render($$result, {}, {}, {
      default: () => {
        return `${message.user ? `${escape($i18n.t("You"))} <span class="text-gray-500 text-sm font-medium">${escape(message?.user ?? "")}</span>` : `${$settings.showUsername || $_user.name !== user$1.name ? `${escape(user$1.name)}` : `${escape($i18n.t("You"))}`}`} ${message.timestamp ? `<div class="self-center text-xs invisible group-hover:visible text-gray-400 font-medium first-letter:capitalize ml-0.5 translate-y-[1px]">${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            content: dayjs(message.timestamp * 1e3).format("LLLL")
          },
          {},
          {
            default: () => {
              return `<span class="line-clamp-1">${escape(formatDate(message.timestamp * 1e3))}</span>`;
            }
          }
        )}</div>` : ``}`;
      }
    })}</div>` : ``} <div class="${"chat-" + escape(message.role, true) + " w-full min-w-full markdown-prose"}">${`${message.files ? `<div class="mt-2.5 mb-1 w-full flex flex-col justify-end overflow-x-auto gap-1 flex-wrap">${each(message.files, (file) => {
      return `<div${add_attribute("class", $settings?.chatBubble ?? true ? "self-end" : "", 0)}>${file.type === "image" ? `${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: file.url,
          imageClassName: " max-h-96 rounded-lg"
        },
        {},
        {}
      )}` : `${validate_component(FileItem, "FileItem").$$render(
        $$result,
        {
          item: file,
          url: file.url,
          name: file.name,
          type: file.type,
          size: file?.size,
          colorClassName: "bg-white dark:bg-gray-850 "
        },
        {},
        {}
      )}`} </div>`;
    })}</div>` : ``}`} ${message.content !== "" ? `${`<div class="w-full"><div class="${"flex " + escape(
      $settings?.chatBubble ?? true ? "justify-end pb-1" : "w-full",
      true
    )}"><div class="${"rounded-3xl " + escape(
      $settings?.chatBubble ?? true ? `max-w-[90%] px-5 py-2  bg-gray-50 dark:bg-gray-850 ${message.files ? "rounded-tr-lg" : ""}` : " w-full",
      true
    )}">${message.content ? `${validate_component(Markdown, "Markdown").$$render($$result, { id: message.id, content: message.content }, {}, {})}` : ``}</div></div> <div class="${"flex " + escape($settings?.chatBubble ?? true ? "justify-end" : "", true) + " text-gray-600 dark:text-gray-500"}">${!($settings?.chatBubble ?? true) ? `${siblings.length > 1 ? `<div class="flex self-center" dir="ltr"><button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition" data-svelte-h="svelte-buado9"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> ${` <div class="text-sm tracking-widest font-semibold self-center dark:text-gray-100 min-w-fit">${escape(siblings.indexOf(message.id) + 1)}/${escape(siblings.length)}</div>`} <button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition" data-svelte-h="svelte-4phel2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button></div>` : ``}` : ``} ${!readOnly ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Edit"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button class="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition edit-user-message-button" data-svelte-h="svelte-tlrz1q"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg></button>`;
        }
      }
    )}` : ``} ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Copy"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button class="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition" data-svelte-h="svelte-1ivgdx2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"></path></svg></button>`;
        }
      }
    )} ${!readOnly && (!isFirstMessage || siblings.length > 1) ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Delete"),
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<button class="invisible group-hover:visible p-1 rounded-sm dark:hover:text-white hover:text-black transition" data-svelte-h="svelte-146x2zz"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg></button>`;
        }
      }
    )}` : ``} ${$settings?.chatBubble ?? true ? `${siblings.length > 1 ? `<div class="flex self-center" dir="ltr"><button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition" data-svelte-h="svelte-buado9"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> ${` <div class="text-sm tracking-widest font-semibold self-center dark:text-gray-100 min-w-fit">${escape(siblings.indexOf(message.id) + 1)}/${escape(siblings.length)}</div>`} <button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition" data-svelte-h="svelte-4phel2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button></div>` : ``}` : ``}</div></div>`}` : ``}</div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  $$unsubscribe_settings();
  $$unsubscribe_models();
  $$unsubscribe__user();
  return $$rendered;
});
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  createEventDispatcher();
  getContext("i18n");
  let { chatId: chatId2 } = $$props;
  let { idx = 0 } = $$props;
  let { history } = $$props;
  let { messageId } = $$props;
  let { user: user2 } = $$props;
  let { gotoMessage } = $$props;
  let { showPreviousMessage } = $$props;
  let { showNextMessage } = $$props;
  let { updateChat } = $$props;
  let { editMessage } = $$props;
  let { saveMessage } = $$props;
  let { deleteMessage } = $$props;
  let { rateMessage } = $$props;
  let { actionMessage } = $$props;
  let { submitMessage } = $$props;
  let { regenerateResponse } = $$props;
  let { continueResponse } = $$props;
  let { mergeResponses } = $$props;
  let { addMessages } = $$props;
  let { triggerScroll } = $$props;
  let { readOnly = false } = $$props;
  if ($$props.chatId === void 0 && $$bindings.chatId && chatId2 !== void 0) $$bindings.chatId(chatId2);
  if ($$props.idx === void 0 && $$bindings.idx && idx !== void 0) $$bindings.idx(idx);
  if ($$props.history === void 0 && $$bindings.history && history !== void 0) $$bindings.history(history);
  if ($$props.messageId === void 0 && $$bindings.messageId && messageId !== void 0) $$bindings.messageId(messageId);
  if ($$props.user === void 0 && $$bindings.user && user2 !== void 0) $$bindings.user(user2);
  if ($$props.gotoMessage === void 0 && $$bindings.gotoMessage && gotoMessage !== void 0) $$bindings.gotoMessage(gotoMessage);
  if ($$props.showPreviousMessage === void 0 && $$bindings.showPreviousMessage && showPreviousMessage !== void 0) $$bindings.showPreviousMessage(showPreviousMessage);
  if ($$props.showNextMessage === void 0 && $$bindings.showNextMessage && showNextMessage !== void 0) $$bindings.showNextMessage(showNextMessage);
  if ($$props.updateChat === void 0 && $$bindings.updateChat && updateChat !== void 0) $$bindings.updateChat(updateChat);
  if ($$props.editMessage === void 0 && $$bindings.editMessage && editMessage !== void 0) $$bindings.editMessage(editMessage);
  if ($$props.saveMessage === void 0 && $$bindings.saveMessage && saveMessage !== void 0) $$bindings.saveMessage(saveMessage);
  if ($$props.deleteMessage === void 0 && $$bindings.deleteMessage && deleteMessage !== void 0) $$bindings.deleteMessage(deleteMessage);
  if ($$props.rateMessage === void 0 && $$bindings.rateMessage && rateMessage !== void 0) $$bindings.rateMessage(rateMessage);
  if ($$props.actionMessage === void 0 && $$bindings.actionMessage && actionMessage !== void 0) $$bindings.actionMessage(actionMessage);
  if ($$props.submitMessage === void 0 && $$bindings.submitMessage && submitMessage !== void 0) $$bindings.submitMessage(submitMessage);
  if ($$props.regenerateResponse === void 0 && $$bindings.regenerateResponse && regenerateResponse !== void 0) $$bindings.regenerateResponse(regenerateResponse);
  if ($$props.continueResponse === void 0 && $$bindings.continueResponse && continueResponse !== void 0) $$bindings.continueResponse(continueResponse);
  if ($$props.mergeResponses === void 0 && $$bindings.mergeResponses && mergeResponses !== void 0) $$bindings.mergeResponses(mergeResponses);
  if ($$props.addMessages === void 0 && $$bindings.addMessages && addMessages !== void 0) $$bindings.addMessages(addMessages);
  if ($$props.triggerScroll === void 0 && $$bindings.triggerScroll && triggerScroll !== void 0) $$bindings.triggerScroll(triggerScroll);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0) $$bindings.readOnly(readOnly);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="${"flex flex-col justify-between px-5 mb-3 w-full " + escape(
      $settings?.widescreenMode ?? null ? "max-w-full" : "max-w-5xl",
      true
    ) + " mx-auto rounded-lg group"}">${history.messages[messageId] ? `${history.messages[messageId].role === "user" ? `${validate_component(UserMessage, "UserMessage").$$render(
      $$result,
      {
        user: user2,
        history,
        messageId,
        isFirstMessage: idx === 0,
        siblings: history.messages[messageId].parentId !== null ? history.messages[history.messages[messageId].parentId]?.childrenIds ?? [] : Object.values(history.messages).filter((message) => message.parentId === null).map((message) => message.id) ?? [],
        gotoMessage,
        showPreviousMessage,
        showNextMessage,
        editMessage,
        deleteMessage,
        readOnly
      },
      {},
      {}
    )}` : `${(history.messages[history.messages[messageId].parentId]?.models?.length ?? 1) === 1 ? `${validate_component(ResponseMessage, "ResponseMessage").$$render(
      $$result,
      {
        chatId: chatId2,
        history,
        messageId,
        isLastMessage: messageId === history.currentId,
        siblings: history.messages[history.messages[messageId].parentId]?.childrenIds ?? [],
        gotoMessage,
        showPreviousMessage,
        showNextMessage,
        updateChat,
        editMessage,
        saveMessage,
        rateMessage,
        actionMessage,
        submitMessage,
        deleteMessage,
        continueResponse,
        regenerateResponse,
        addMessages,
        readOnly
      },
      {},
      {}
    )}` : `${validate_component(MultiResponseMessages, "MultiResponseMessages").$$render(
      $$result,
      {
        chatId: chatId2,
        messageId,
        isLastMessage: messageId === history?.currentId,
        updateChat,
        editMessage,
        saveMessage,
        rateMessage,
        actionMessage,
        submitMessage,
        deleteMessage,
        continueResponse,
        regenerateResponse,
        mergeResponses,
        triggerScroll,
        addMessages,
        readOnly,
        history
      },
      {
        history: ($$value) => {
          history = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}`}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_settings();
  return $$rendered;
});
const css = {
  code: "@keyframes svelte-1co34if-fadeInUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}.waterfall.svelte-1co34if{opacity:0;animation-name:svelte-1co34if-fadeInUp;animation-duration:200ms;animation-fill-mode:forwards;animation-timing-function:ease}",
  map: `{"version":3,"file":"Suggestions.svelte","sources":["Suggestions.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Fuse from \\"fuse.js\\";\\nimport Bolt from \\"$lib/components/icons/Bolt.svelte\\";\\nimport { onMount, getContext, createEventDispatcher } from \\"svelte\\";\\nimport { settings, WEBUI_NAME } from \\"$lib/stores\\";\\nimport { WEBUI_VERSION } from \\"$lib/constants\\";\\nconst i18n = getContext(\\"i18n\\");\\nconst dispatch = createEventDispatcher();\\nexport let suggestionPrompts = [];\\nexport let className = \\"\\";\\nexport let inputValue = \\"\\";\\nlet sortedPrompts = [];\\nconst fuseOptions = {\\n  keys: [\\"content\\", \\"title\\"],\\n  threshold: 0.5\\n};\\nlet fuse;\\nlet filteredPrompts = [];\\n$: fuse = new Fuse(sortedPrompts, fuseOptions);\\n$: getFilteredPrompts(inputValue);\\nfunction arraysEqual(a, b) {\\n  if (a.length !== b.length) return false;\\n  for (let i = 0; i < a.length; i++) {\\n    if ((a[i].id ?? a[i].content) !== (b[i].id ?? b[i].content)) {\\n      return false;\\n    }\\n  }\\n  return true;\\n}\\nconst getFilteredPrompts = (inputValue2) => {\\n  if (inputValue2.length > 500) {\\n    filteredPrompts = [];\\n  } else {\\n    const newFilteredPrompts = inputValue2.trim() && fuse ? fuse.search(inputValue2.trim()).map((result) => result.item) : sortedPrompts;\\n    if (!arraysEqual(filteredPrompts, newFilteredPrompts)) {\\n      filteredPrompts = newFilteredPrompts;\\n    }\\n  }\\n};\\n$: if (suggestionPrompts) {\\n  sortedPrompts = [...suggestionPrompts ?? []].sort(() => Math.random() - 0.5);\\n  getFilteredPrompts(inputValue);\\n}\\n<\/script>\\n\\n<div class=\\"mb-1 flex gap-1 text-xs font-medium items-center text-gray-600 dark:text-gray-400\\">\\n\\t{#if filteredPrompts.length > 0}\\n\\t\\t<Bolt />\\n\\t\\t{$i18n.t('Suggested')}\\n\\t{:else}\\n\\t\\t<!-- Keine Vorschläge -->\\n\\n\\t\\t<div\\n\\t\\t\\tclass=\\"flex w-full {$settings?.landingPageMode === 'chat'\\n\\t\\t\\t\\t? ' -mt-1'\\n\\t\\t\\t\\t: 'text-center items-center justify-center'}  self-start text-gray-600 dark:text-gray-400\\"\\n\\t\\t>\\n\\t\\t\\t{$WEBUI_NAME} ‧ v{WEBUI_VERSION}\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<div class=\\"h-40 w-full\\">\\n\\t{#if filteredPrompts.length > 0}\\n\\t\\t<div class=\\"max-h-40 overflow-auto scrollbar-none items-start {className}\\">\\n\\t\\t\\t{#each filteredPrompts as prompt, idx (prompt.id || prompt.content)}\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"waterfall flex flex-col flex-1 shrink-0 w-full justify-between\\n\\t\\t\\t\\t       px-3 py-2 rounded-xl bg-transparent hover:bg-black/5\\n\\t\\t\\t\\t       dark:hover:bg-white/5 transition group\\"\\n\\t\\t\\t\\t\\tstyle=\\"animation-delay: {idx * 60}ms\\"\\n\\t\\t\\t\\t\\ton:click={() => dispatch('select', prompt.content)}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<div class=\\"flex flex-col text-left\\">\\n\\t\\t\\t\\t\\t\\t{#if prompt.title && prompt.title[0] !== ''}\\n\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{prompt.title[0]}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"text-xs text-gray-600 dark:text-gray-400 font-normal line-clamp-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{prompt.title[1]}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{prompt.content}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"text-xs text-gray-600 dark:text-gray-400 font-normal line-clamp-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Prompt')}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t/* Waterfall animation for the suggestions */\\n\\t@keyframes fadeInUp {\\n\\t\\t0% {\\n\\t\\t\\topacity: 0;\\n\\t\\t\\ttransform: translateY(20px);\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\topacity: 1;\\n\\t\\t\\ttransform: translateY(0);\\n\\t\\t}\\n\\t}\\n\\n\\t.waterfall {\\n\\t\\topacity: 0;\\n\\t\\tanimation-name: fadeInUp;\\n\\t\\tanimation-duration: 200ms;\\n\\t\\tanimation-fill-mode: forwards;\\n\\t\\tanimation-timing-function: ease;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAqGC,WAAW,uBAAS,CACnB,EAAG,CACF,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,IAAI,CAC3B,CACA,IAAK,CACJ,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,CAAC,CACxB,CACD,CAEA,yBAAW,CACV,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,uBAAQ,CACxB,kBAAkB,CAAE,KAAK,CACzB,mBAAmB,CAAE,QAAQ,CAC7B,yBAAyB,CAAE,IAC5B"}`
};
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if ((a[i].id ?? a[i].content) !== (b[i].id ?? b[i].content)) {
      return false;
    }
  }
  return true;
}
const Suggestions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $settings, $$unsubscribe_settings;
  let $WEBUI_NAME, $$unsubscribe_WEBUI_NAME;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_WEBUI_NAME = subscribe(WEBUI_NAME, (value) => $WEBUI_NAME = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  createEventDispatcher();
  let { suggestionPrompts = [] } = $$props;
  let { className = "" } = $$props;
  let { inputValue = "" } = $$props;
  let sortedPrompts = [];
  const fuseOptions = {
    keys: ["content", "title"],
    threshold: 0.5
  };
  let fuse;
  let filteredPrompts = [];
  const getFilteredPrompts = (inputValue2) => {
    if (inputValue2.length > 500) {
      filteredPrompts = [];
    } else {
      const newFilteredPrompts = inputValue2.trim() && fuse ? fuse.search(inputValue2.trim()).map((result) => result.item) : sortedPrompts;
      if (!arraysEqual(filteredPrompts, newFilteredPrompts)) {
        filteredPrompts = newFilteredPrompts;
      }
    }
  };
  if ($$props.suggestionPrompts === void 0 && $$bindings.suggestionPrompts && suggestionPrompts !== void 0) $$bindings.suggestionPrompts(suggestionPrompts);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0) $$bindings.inputValue(inputValue);
  $$result.css.add(css);
  {
    if (suggestionPrompts) {
      sortedPrompts = [...suggestionPrompts ?? []].sort(() => Math.random() - 0.5);
      getFilteredPrompts(inputValue);
    }
  }
  fuse = new Fuse(sortedPrompts, fuseOptions);
  {
    getFilteredPrompts(inputValue);
  }
  $$unsubscribe_i18n();
  $$unsubscribe_settings();
  $$unsubscribe_WEBUI_NAME();
  return `<div class="mb-1 flex gap-1 text-xs font-medium items-center text-gray-600 dark:text-gray-400">${filteredPrompts.length > 0 ? `${validate_component(Bolt, "Bolt").$$render($$result, {}, {}, {})} ${escape($i18n.t("Suggested"))}` : ` <div class="${"flex w-full " + escape(
    $settings?.landingPageMode === "chat" ? " -mt-1" : "text-center items-center justify-center",
    true
  ) + " self-start text-gray-600 dark:text-gray-400"}">${escape($WEBUI_NAME)} ‧ v${escape(WEBUI_VERSION)}</div>`}</div> <div class="h-40 w-full">${filteredPrompts.length > 0 ? `<div class="${"max-h-40 overflow-auto scrollbar-none items-start " + escape(className, true) + " svelte-1co34if"}">${each(filteredPrompts, (prompt, idx) => {
    return `<button class="waterfall flex flex-col flex-1 shrink-0 w-full justify-between px-3 py-2 rounded-xl bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition group svelte-1co34if" style="${"animation-delay: " + escape(idx * 60, true) + "ms"}"><div class="flex flex-col text-left">${prompt.title && prompt.title[0] !== "" ? `<div class="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1">${escape(prompt.title[0])}</div> <div class="text-xs text-gray-600 dark:text-gray-400 font-normal line-clamp-1">${escape(prompt.title[1])} </div>` : `<div class="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1">${escape(prompt.content)}</div> <div class="text-xs text-gray-600 dark:text-gray-400 font-normal line-clamp-1">${escape($i18n.t("Prompt"))} </div>`}</div> </button>`;
  })}</div>` : ``} </div>`;
});
const ChatPlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_models, $$unsubscribe__models;
  let $i18n, $$unsubscribe_i18n;
  let $temporaryChatEnabled, $$unsubscribe_temporaryChatEnabled;
  let $user, $$unsubscribe_user;
  let $config, $$unsubscribe_config;
  $$unsubscribe__models = subscribe(models, (value) => $_models = value);
  $$unsubscribe_temporaryChatEnabled = subscribe(temporaryChatEnabled, (value) => $temporaryChatEnabled = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { modelIds = [] } = $$props;
  let { models: models$1 = [] } = $$props;
  let { atSelectedModel } = $$props;
  let { submitPrompt } = $$props;
  let selectedModelIdx = 0;
  if ($$props.modelIds === void 0 && $$bindings.modelIds && modelIds !== void 0) $$bindings.modelIds(modelIds);
  if ($$props.models === void 0 && $$bindings.models && models$1 !== void 0) $$bindings.models(models$1);
  if ($$props.atSelectedModel === void 0 && $$bindings.atSelectedModel && atSelectedModel !== void 0) $$bindings.atSelectedModel(atSelectedModel);
  if ($$props.submitPrompt === void 0 && $$bindings.submitPrompt && submitPrompt !== void 0) $$bindings.submitPrompt(submitPrompt);
  models$1 = modelIds.map((id) => $_models.find((m) => m.id === id));
  {
    if (modelIds.length > 0) {
      selectedModelIdx = models$1.length - 1;
    }
  }
  $$unsubscribe__models();
  $$unsubscribe_i18n();
  $$unsubscribe_temporaryChatEnabled();
  $$unsubscribe_user();
  $$unsubscribe_config();
  return `<div class="m-auto w-full max-w-6xl px-8 lg:px-20"><div class="flex justify-start"><div class="flex -space-x-4 mb-0.5">${each(models$1, (model, modelIdx) => {
    return `<button>${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: marked.parse(sanitizeResponseContent(models$1[selectedModelIdx]?.info?.meta?.description ?? "")),
        placement: "right"
      },
      {},
      {
        default: () => {
          return `<img crossorigin="anonymous"${add_attribute(
            "src",
            model?.info?.meta?.profile_image_url ?? ($i18n.language === "dg-DG" ? `/doge.png` : `${WEBUI_BASE_URL}/static/favicon.png`),
            0
          )} class="size-[2.7rem] rounded-full border-[1px] border-gray-100 dark:border-none" alt="logo" draggable="false"> `;
        }
      }
    )} </button>`;
  })}</div></div> ${$temporaryChatEnabled ? `${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: $i18n.t("This chat won’t appear in history and your messages will not be saved."),
      className: "w-full flex justify-start mb-0.5",
      placement: "top"
    },
    {},
    {
      default: () => {
        return `<div class="flex items-center gap-2 text-gray-500 font-medium text-lg mt-2 w-fit">${validate_component(EyeSlash, "EyeSlash").$$render($$result, { strokeWidth: "2.5", className: "size-5" }, {}, {})}${escape($i18n.t("Temporary Chat"))}</div>`;
      }
    }
  )}` : ``} <div class="mt-2 mb-4 text-3xl text-gray-800 dark:text-gray-100 font-medium text-left flex items-center gap-4 font-primary"><div><div class="capitalize line-clamp-1">${models$1[selectedModelIdx]?.name ? `${escape(models$1[selectedModelIdx]?.name)}` : `${escape($i18n.t("Hello, {{name}}", { name: $user?.name }))}`}</div> <div>${models$1[selectedModelIdx]?.info?.meta?.description ?? null ? `<div class="mt-0.5 text-base font-normal text-gray-500 dark:text-gray-400 line-clamp-3 markdown"><!-- HTML_TAG_START -->${marked.parse(sanitizeResponseContent(models$1[selectedModelIdx]?.info?.meta?.description))}<!-- HTML_TAG_END --></div> ${models$1[selectedModelIdx]?.info?.meta?.user ? `<div class="mt-0.5 text-sm font-normal text-gray-400 dark:text-gray-500">By
								${models$1[selectedModelIdx]?.info?.meta?.user.community ? `<a href="${"https://openwebui.com/m/" + escape(models$1[selectedModelIdx]?.info?.meta?.user.username, true)}">${escape(models$1[selectedModelIdx]?.info?.meta?.user.name ? models$1[selectedModelIdx]?.info?.meta?.user.name : `@${models$1[selectedModelIdx]?.info?.meta?.user.username}`)}</a>` : `${escape(models$1[selectedModelIdx]?.info?.meta?.user.name)}`}</div>` : ``}` : `<div class="font-medium text-gray-400 dark:text-gray-500 line-clamp-1 font-p">${escape($i18n.t("How can I help you today?"))}</div>`}</div></div></div> <div class="w-full font-primary">${validate_component(Suggestions, "Suggestions").$$render(
    $$result,
    {
      className: "grid grid-cols-2",
      suggestionPrompts: atSelectedModel?.info?.meta?.suggestion_prompts ?? models$1[selectedModelIdx]?.info?.meta?.suggestion_prompts ?? $config?.default_prompt_suggestions ?? []
    },
    {},
    {}
  )}</div></div>`;
});
const Messages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  let $currentChatPage, $$unsubscribe_currentChatPage;
  let $temporaryChatEnabled, $$unsubscribe_temporaryChatEnabled;
  let $_user, $$unsubscribe__user;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_currentChatPage = subscribe(currentChatPage, (value) => $currentChatPage = value);
  $$unsubscribe_temporaryChatEnabled = subscribe(temporaryChatEnabled, (value) => $temporaryChatEnabled = value);
  $$unsubscribe__user = subscribe(user, (value) => $_user = value);
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { className = "h-full flex pt-8" } = $$props;
  let { chatId: chatId2 = "" } = $$props;
  let { user: user$1 = $_user } = $$props;
  let { prompt } = $$props;
  let { history = {} } = $$props;
  let { selectedModels } = $$props;
  let { atSelectedModel } = $$props;
  let messages = [];
  let { sendPrompt } = $$props;
  let { continueResponse } = $$props;
  let { regenerateResponse } = $$props;
  let { mergeResponses } = $$props;
  let { chatActionHandler } = $$props;
  let { showMessage = () => {
  } } = $$props;
  let { submitMessage = () => {
  } } = $$props;
  let { addMessages = () => {
  } } = $$props;
  let { readOnly = false } = $$props;
  let { bottomPadding = false } = $$props;
  let { autoScroll } = $$props;
  let messagesCount = 20;
  const scrollToBottom = () => {
    const element = document.getElementById("messages-container");
    element.scrollTop = element.scrollHeight;
  };
  const updateChat = async () => {
    if (!$temporaryChatEnabled) {
      history = history;
      await tick();
      await updateChatById(localStorage.token, chatId2, { history, messages });
      currentChatPage.set(1);
      await chats.set(await getChatList(localStorage.token, $currentChatPage));
    }
  };
  const gotoMessage = async (message, idx) => {
    let siblings;
    if (message.parentId !== null) {
      siblings = history.messages[message.parentId].childrenIds;
    } else {
      siblings = Object.values(history.messages).filter((msg) => msg.parentId === null).map((msg) => msg.id);
    }
    idx = Math.max(0, Math.min(idx, siblings.length - 1));
    let messageId = siblings[idx];
    if (message.id !== messageId) {
      let messageChildrenIds = history.messages[messageId].childrenIds;
      while (messageChildrenIds.length !== 0) {
        messageId = messageChildrenIds.at(-1);
        messageChildrenIds = history.messages[messageId].childrenIds;
      }
      history.currentId = messageId;
    }
    await tick();
    if ($settings?.scrollOnBranchChange ?? true) {
      const element = document.getElementById("messages-container");
      autoScroll = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
      setTimeout(
        () => {
          scrollToBottom();
        },
        100
      );
    }
  };
  const showPreviousMessage = async (message) => {
    if (message.parentId !== null) {
      let messageId = history.messages[message.parentId].childrenIds[Math.max(history.messages[message.parentId].childrenIds.indexOf(message.id) - 1, 0)];
      if (message.id !== messageId) {
        let messageChildrenIds = history.messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history.messages[messageId].childrenIds;
        }
        history.currentId = messageId;
      }
    } else {
      let childrenIds = Object.values(history.messages).filter((message2) => message2.parentId === null).map((message2) => message2.id);
      let messageId = childrenIds[Math.max(childrenIds.indexOf(message.id) - 1, 0)];
      if (message.id !== messageId) {
        let messageChildrenIds = history.messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history.messages[messageId].childrenIds;
        }
        history.currentId = messageId;
      }
    }
    await tick();
    if ($settings?.scrollOnBranchChange ?? true) {
      const element = document.getElementById("messages-container");
      autoScroll = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
      setTimeout(
        () => {
          scrollToBottom();
        },
        100
      );
    }
  };
  const showNextMessage = async (message) => {
    if (message.parentId !== null) {
      let messageId = history.messages[message.parentId].childrenIds[Math.min(history.messages[message.parentId].childrenIds.indexOf(message.id) + 1, history.messages[message.parentId].childrenIds.length - 1)];
      if (message.id !== messageId) {
        let messageChildrenIds = history.messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history.messages[messageId].childrenIds;
        }
        history.currentId = messageId;
      }
    } else {
      let childrenIds = Object.values(history.messages).filter((message2) => message2.parentId === null).map((message2) => message2.id);
      let messageId = childrenIds[Math.min(childrenIds.indexOf(message.id) + 1, childrenIds.length - 1)];
      if (message.id !== messageId) {
        let messageChildrenIds = history.messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history.messages[messageId].childrenIds;
        }
        history.currentId = messageId;
      }
    }
    await tick();
    if ($settings?.scrollOnBranchChange ?? true) {
      const element = document.getElementById("messages-container");
      autoScroll = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
      setTimeout(
        () => {
          scrollToBottom();
        },
        100
      );
    }
  };
  const rateMessage = async (messageId, rating) => {
    history.messages[messageId].annotation = {
      ...history.messages[messageId].annotation,
      rating
    };
    await updateChat();
  };
  const editMessage = async (messageId, { content, files }, submit = true) => {
    if (history.messages[messageId].role === "user") {
      if (submit) {
        let userPrompt = content;
        let userMessageId = v4();
        let userMessage = {
          id: userMessageId,
          parentId: history.messages[messageId].parentId,
          childrenIds: [],
          role: "user",
          content: userPrompt,
          ...files && { files },
          models: selectedModels,
          timestamp: Math.floor(Date.now() / 1e3)
        };
        let messageParentId = history.messages[messageId].parentId;
        if (messageParentId !== null) {
          history.messages[messageParentId].childrenIds = [...history.messages[messageParentId].childrenIds, userMessageId];
        }
        history.messages[userMessageId] = userMessage;
        history.currentId = userMessageId;
        await tick();
        await sendPrompt(history, userPrompt, userMessageId);
      } else {
        history.messages[messageId].content = content;
        history.messages[messageId].files = files;
        await updateChat();
      }
    } else {
      if (submit) {
        const responseMessageId = v4();
        const message = history.messages[messageId];
        const parentId = message.parentId;
        const responseMessage = {
          ...message,
          id: responseMessageId,
          parentId,
          childrenIds: [],
          files: void 0,
          content,
          timestamp: Math.floor(Date.now() / 1e3)
        };
        history.messages[responseMessageId] = responseMessage;
        history.currentId = responseMessageId;
        if (parentId !== null) {
          history.messages[parentId].childrenIds = [...history.messages[parentId].childrenIds, responseMessageId];
        }
        await updateChat();
      } else {
        history.messages[messageId].originalContent = history.messages[messageId].content;
        history.messages[messageId].content = content;
        await updateChat();
      }
    }
  };
  const actionMessage = async (actionId, message, event = null) => {
    await chatActionHandler(chatId2, actionId, message.model, message.id, event);
  };
  const saveMessage = async (messageId, message) => {
    history.messages[messageId] = message;
    await updateChat();
  };
  const deleteMessage = async (messageId) => {
    const messageToDelete = history.messages[messageId];
    const parentMessageId = messageToDelete.parentId;
    const childMessageIds = messageToDelete.childrenIds ?? [];
    const grandchildrenIds = childMessageIds.flatMap((childId) => history.messages[childId]?.childrenIds ?? []);
    if (parentMessageId && history.messages[parentMessageId]) {
      history.messages[parentMessageId].childrenIds = [
        ...history.messages[parentMessageId].childrenIds.filter((id) => id !== messageId),
        ...grandchildrenIds
      ];
    }
    grandchildrenIds.forEach((grandchildId) => {
      if (history.messages[grandchildId]) {
        history.messages[grandchildId].parentId = parentMessageId;
      }
    });
    [messageId, ...childMessageIds].forEach((id) => {
      delete history.messages[id];
    });
    await tick();
    showMessage({ id: parentMessageId });
    await updateChat();
  };
  const triggerScroll = () => {
    if (autoScroll) {
      const element = document.getElementById("messages-container");
      autoScroll = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
      setTimeout(
        () => {
          scrollToBottom();
        },
        100
      );
    }
  };
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.chatId === void 0 && $$bindings.chatId && chatId2 !== void 0) $$bindings.chatId(chatId2);
  if ($$props.user === void 0 && $$bindings.user && user$1 !== void 0) $$bindings.user(user$1);
  if ($$props.prompt === void 0 && $$bindings.prompt && prompt !== void 0) $$bindings.prompt(prompt);
  if ($$props.history === void 0 && $$bindings.history && history !== void 0) $$bindings.history(history);
  if ($$props.selectedModels === void 0 && $$bindings.selectedModels && selectedModels !== void 0) $$bindings.selectedModels(selectedModels);
  if ($$props.atSelectedModel === void 0 && $$bindings.atSelectedModel && atSelectedModel !== void 0) $$bindings.atSelectedModel(atSelectedModel);
  if ($$props.sendPrompt === void 0 && $$bindings.sendPrompt && sendPrompt !== void 0) $$bindings.sendPrompt(sendPrompt);
  if ($$props.continueResponse === void 0 && $$bindings.continueResponse && continueResponse !== void 0) $$bindings.continueResponse(continueResponse);
  if ($$props.regenerateResponse === void 0 && $$bindings.regenerateResponse && regenerateResponse !== void 0) $$bindings.regenerateResponse(regenerateResponse);
  if ($$props.mergeResponses === void 0 && $$bindings.mergeResponses && mergeResponses !== void 0) $$bindings.mergeResponses(mergeResponses);
  if ($$props.chatActionHandler === void 0 && $$bindings.chatActionHandler && chatActionHandler !== void 0) $$bindings.chatActionHandler(chatActionHandler);
  if ($$props.showMessage === void 0 && $$bindings.showMessage && showMessage !== void 0) $$bindings.showMessage(showMessage);
  if ($$props.submitMessage === void 0 && $$bindings.submitMessage && submitMessage !== void 0) $$bindings.submitMessage(submitMessage);
  if ($$props.addMessages === void 0 && $$bindings.addMessages && addMessages !== void 0) $$bindings.addMessages(addMessages);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0) $$bindings.readOnly(readOnly);
  if ($$props.bottomPadding === void 0 && $$bindings.bottomPadding && bottomPadding !== void 0) $$bindings.bottomPadding(bottomPadding);
  if ($$props.autoScroll === void 0 && $$bindings.autoScroll && autoScroll !== void 0) $$bindings.autoScroll(autoScroll);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (history.currentId) {
        let _messages = [];
        let message = history.messages[history.currentId];
        while (message && _messages.length <= messagesCount) {
          _messages.unshift({ ...message });
          message = message.parentId !== null ? history.messages[message.parentId] : null;
        }
        messages = _messages;
      } else {
        messages = [];
      }
    }
    {
      if (autoScroll && bottomPadding) {
        (async () => {
          await tick();
          scrollToBottom();
        })();
      }
    }
    $$rendered = `<div${add_attribute("class", className, 0)}>${Object.keys(history?.messages ?? {}).length == 0 ? `${validate_component(ChatPlaceholder, "ChatPlaceholder").$$render(
      $$result,
      {
        modelIds: selectedModels,
        atSelectedModel,
        submitPrompt: async (p) => {
          let text = p;
          if (p.includes("{{CLIPBOARD}}")) {
            const clipboardText = await navigator.clipboard.readText().catch((err) => {
              toast.error($i18n.t("Failed to read clipboard contents"));
              return "{{CLIPBOARD}}";
            });
            text = p.replaceAll("{{CLIPBOARD}}", clipboardText);
          }
          prompt = text;
          await tick();
        }
      },
      {},
      {}
    )}` : `<div class="w-full pt-2"><div class="w-full">${messages.at(0)?.parentId !== null ? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2">${validate_component(Spinner, "Spinner").$$render($$result, { className: " size-4" }, {}, {})} <div class="" data-svelte-h="svelte-17uns3n">Loading...</div></div>`;
      }
    })}` : ``} ${each(messages, (message, messageIdx) => {
      return `${validate_component(Message, "Message").$$render(
        $$result,
        {
          chatId: chatId2,
          messageId: message.id,
          idx: messageIdx,
          user: user$1,
          gotoMessage,
          showPreviousMessage,
          showNextMessage,
          updateChat,
          editMessage,
          deleteMessage,
          rateMessage,
          actionMessage,
          saveMessage,
          submitMessage,
          regenerateResponse,
          continueResponse,
          mergeResponses,
          addMessages,
          triggerScroll,
          readOnly,
          history
        },
        {
          history: ($$value) => {
            history = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div> <div class="pb-12"></div> ${bottomPadding ? `<div class="pb-6"></div>` : ``}</div>`}</div>`;
  } while (!$$settled);
  $$unsubscribe_settings();
  $$unsubscribe_currentChatPage();
  $$unsubscribe_temporaryChatEnabled();
  $$unsubscribe__user();
  $$unsubscribe_i18n();
  return $$rendered;
});
export {
  Messages as M,
  Suggestions as S
};
//# sourceMappingURL=Messages.js.map
