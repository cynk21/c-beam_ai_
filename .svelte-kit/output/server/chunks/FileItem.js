import { c as create_ssr_component, l as getContext, b as subscribe, v as validate_component, g as escape, a as add_attribute, p as createEventDispatcher } from "./ssr.js";
import { q as formatFileSize, t as getLineCount } from "./index3.js";
import { j as WEBUI_API_BASE_URL } from "./index2.js";
import { M as Modal } from "./Modal.js";
import { X as XMark } from "./XMark.js";
import { a as Info } from "./Info.js";
import { S as Switch_1 } from "./Switch.js";
import { T as Tooltip } from "./Tooltip.js";
import { S as Spinner } from "./Spinner.js";
const FileItemModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isPDF;
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { item } = $$props;
  let { show = false } = $$props;
  let { edit = false } = $$props;
  let enableFullContent = false;
  let isAudio = false;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.edit === void 0 && $$bindings.edit && edit !== void 0) $$bindings.edit(edit);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isPDF = item?.meta?.content_type === "application/pdf" || item?.name && item?.name.toLowerCase().endsWith(".pdf");
    isAudio = (item?.meta?.content_type ?? "").startsWith("audio/") || item?.name && item?.name.toLowerCase().endsWith(".mp3") || item?.name && item?.name.toLowerCase().endsWith(".wav") || item?.name && item?.name.toLowerCase().endsWith(".ogg") || item?.name && item?.name.toLowerCase().endsWith(".m4a") || item?.name && item?.name.toLowerCase().endsWith(".webm");
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
          return `<div class="font-primary px-6 py-5 w-full flex flex-col justify-center dark:text-gray-400"><div class="pb-2"><div class="flex items-start justify-between"><div><div class="font-medium text-lg dark:text-gray-100"><a href="#" class="hover:underline line-clamp-1">${escape(item?.name ?? "File")}</a></div></div> <div><button>${validate_component(XMark, "XMark").$$render($$result, {}, {}, {})}</button></div></div> <div><div class="flex flex-col items-center md:flex-row gap-1 justify-between w-full"><div class="flex flex-wrap text-sm gap-1 text-gray-500">${item.size ? `<div class="capitalize shrink-0">${escape(formatFileSize(item.size))}</div>
							•` : ``} ${item?.file?.data?.content ? `<div class="capitalize shrink-0">${escape(getLineCount(item?.file?.data?.content ?? ""))} extracted lines</div> <div class="flex items-center gap-1 shrink-0">${validate_component(Info, "Info").$$render($$result, {}, {}, {})}

								Formatting may be inconsistent from source.</div>` : ``}</div> ${edit ? `<div>${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              content: enableFullContent ? $i18n.t("Inject the entire content as context for comprehensive processing, this is recommended for complex queries.") : $i18n.t("Default to segmented retrieval for focused and relevant content extraction, this is recommended for most cases.")
            },
            {},
            {
              default: () => {
                return `<div class="flex items-center gap-1.5 text-xs">${enableFullContent ? `Using Entire Document` : `Using Focused Retrieval`} ${validate_component(Switch_1, "Switch").$$render(
                  $$result,
                  { state: enableFullContent },
                  {
                    state: ($$value) => {
                      enableFullContent = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div>`;
              }
            }
          )}</div>` : ``}</div></div></div> <div class="max-h-[75vh] overflow-auto">${isPDF ? `<iframe${add_attribute("title", item?.name, 0)}${add_attribute("src", `${WEBUI_API_BASE_URL}/files/${item.id}/content`, 0)} class="w-full h-[70vh] border-0 rounded-lg mt-4"></iframe>` : `${isAudio ? `<audio${add_attribute("src", `${WEBUI_API_BASE_URL}/files/${item.id}/content`, 0)} class="w-full border-0 rounded-lg mb-2" controls playsinline></audio>` : ``} <div class="max-h-96 overflow-scroll scrollbar-hidden text-xs whitespace-pre-wrap">${escape(item?.file?.data?.content ?? "No content")}</div>`}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const FileItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  createEventDispatcher();
  let { className = "w-60" } = $$props;
  let { colorClassName = "bg-white dark:bg-gray-850 border border-gray-50 dark:border-white/5" } = $$props;
  let { url = null } = $$props;
  let { dismissible = false } = $$props;
  let { loading = false } = $$props;
  let { item = null } = $$props;
  let { edit = false } = $$props;
  let { small = false } = $$props;
  let { name } = $$props;
  let { type } = $$props;
  let { size } = $$props;
  let showModal = false;
  const decodeString = (str) => {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  };
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.colorClassName === void 0 && $$bindings.colorClassName && colorClassName !== void 0) $$bindings.colorClassName(colorClassName);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.dismissible === void 0 && $$bindings.dismissible && dismissible !== void 0) $$bindings.dismissible(dismissible);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.edit === void 0 && $$bindings.edit && edit !== void 0) $$bindings.edit(edit);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${item ? `${validate_component(FileItemModal, "FileItemModal").$$render(
      $$result,
      { edit, show: showModal, item },
      {
        show: ($$value) => {
          showModal = $$value;
          $$settled = false;
        },
        item: ($$value) => {
          item = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <button class="${"relative group p-1.5 " + escape(className, true) + " flex items-center gap-1 " + escape(colorClassName, true) + " " + escape(small ? "rounded-xl" : "rounded-2xl", true) + " text-left"}" type="button">${!small ? `<div class="p-3 bg-black/20 dark:bg-white/10 text-white rounded-xl">${!loading ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd"></path><path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"></path></svg>` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}</div>` : ``} ${!small ? `<div class="flex flex-col justify-center -space-y-0.5 px-2.5 w-full"><div class="dark:text-gray-100 text-sm font-medium line-clamp-1 mb-1">${escape(decodeString(name))}</div> <div class="flex justify-between text-gray-500 text-xs line-clamp-1">${type === "file" ? `${escape($i18n.t("File"))}` : `${type === "doc" ? `${escape($i18n.t("Document"))}` : `${type === "collection" ? `${escape($i18n.t("Collection"))}` : `<span class="capitalize line-clamp-1">${escape(type)}</span>`}`}`} ${size ? `<span class="capitalize">${escape(formatFileSize(size))}</span>` : ``}</div></div>` : `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: decodeString(name),
        className: "flex flex-col w-full",
        placement: "top-start"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col justify-center -space-y-0.5 px-2.5 w-full"><div class="dark:text-gray-100 text-sm flex justify-between items-center">${loading ? `<div class="shrink-0 mr-2">${validate_component(Spinner, "Spinner").$$render($$result, { className: "size-4" }, {}, {})}</div>` : ``} <div class="font-medium line-clamp-1 flex-1">${escape(decodeString(name))}</div> <div class="text-gray-500 text-xs capitalize shrink-0">${escape(formatFileSize(size))}</div></div></div>`;
        }
      }
    )}`} ${dismissible ? `<div class="absolute -top-1 -right-1"><button class="bg-white text-black border border-gray-50 rounded-full group-hover:visible invisible transition" type="button" data-svelte-h="svelte-c953ou"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button> </div>` : ``}</button>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
export {
  FileItem as F
};
//# sourceMappingURL=FileItem.js.map
