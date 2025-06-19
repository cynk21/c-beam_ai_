import { c as create_ssr_component, p as createEventDispatcher, v as validate_component, b as subscribe, l as getContext, g as escape, a as add_attribute } from "./ssr.js";
import "./index3.js";
import { r as models, c as config } from "./index2.js";
import { T as Tags } from "./Tags.js";
import "./Toaster.svelte_svelte_type_style_lang.js";
import { h as getChatById } from "./MagnifyingGlass.js";
import { M as Modal } from "./Modal.js";
import { L as Link } from "./Search.js";
const Tags_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { chatId = "" } = $$props;
  let tags$1 = [];
  if ($$props.chatId === void 0 && $$bindings.chatId && chatId !== void 0) $$bindings.chatId(chatId);
  return `${validate_component(Tags, "Tags").$$render($$result, { tags: tags$1 }, {}, {})}`;
});
const ShareChatModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_models;
  let $i18n, $$unsubscribe_i18n;
  let $config, $$unsubscribe_config;
  $$unsubscribe_models = subscribe(models, (value) => value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  let { chatId } = $$props;
  let chat = null;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  const isDifferentChat = (_chat) => {
    if (!chat) {
      return true;
    }
    if (!_chat) {
      return false;
    }
    return chat.id !== _chat.id || chat.share_id !== _chat.share_id;
  };
  if ($$props.chatId === void 0 && $$bindings.chatId && chatId !== void 0) $$bindings.chatId(chatId);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (show) {
        (async () => {
          if (chatId) {
            const _chat = await getChatById(localStorage.token, chatId);
            if (isDifferentChat(_chat)) {
              chat = _chat;
            }
          } else {
            chat = null;
            console.log(chat);
          }
        })();
      }
    }
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { size: "md", show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-0.5"><div class="text-lg font-medium self-center">${escape($i18n.t("Share Chat"))}</div> <button class="self-center" data-svelte-h="svelte-745w2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> ${chat ? `<div class="px-5 pt-4 pb-5 w-full flex flex-col justify-center"><div class="text-sm dark:text-gray-300 mb-1">${chat.share_id ? `<a href="${"/s/" + escape(chat.share_id, true)}" target="_blank">${escape($i18n.t("You have shared this chat"))} <span class="underline">${escape($i18n.t("before"))}</span>.</a> ${escape($i18n.t("Click here to"))} <button class="underline">${escape($i18n.t("delete this link"))}</button> ${escape($i18n.t("and create a new shared link."))}` : `${escape($i18n.t("Messages you send after creating your link won't be shared. Users with the URL will be able to view the shared chat."))}`}</div> <div class="flex justify-end"><div class="flex flex-col items-end space-x-1 mt-3"><div class="flex gap-1">${$config?.features.enable_community_sharing ? `<button class="self-center flex items-center gap-1 px-3.5 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-850 dark:text-white dark:hover:bg-gray-800 transition rounded-full" type="button">${escape($i18n.t("Share to Open WebUI Community"))}</button>` : ``} <button class="self-center flex items-center gap-1 px-3.5 py-2 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="button" id="copy-and-share-chat-button">${validate_component(Link, "Link").$$render($$result, {}, {}, {})} ${chat.share_id ? `${escape($i18n.t("Update and Copy Link"))}` : `${escape($i18n.t("Copy Link"))}`}</button></div></div></div></div>` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_models();
  $$unsubscribe_i18n();
  $$unsubscribe_config();
  return $$rendered;
});
const PencilSquare = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path></svg>`;
});
export {
  PencilSquare as P,
  ShareChatModal as S,
  Tags_1 as T
};
//# sourceMappingURL=PencilSquare.js.map
