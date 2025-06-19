import { c as create_ssr_component, l as getContext, b as subscribe, v as validate_component, g as escape, a as add_attribute, e as each, p as createEventDispatcher, o as onDestroy, q as null_to_empty } from "../../../chunks/ssr.js";
import { a as toast } from "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "idb";
import "file-saver";
import "mermaid";
import { g as goto } from "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
import "../../../chunks/index3.js";
import "yaml";
import { j as WEBUI_API_BASE_URL, a as settings, u as user, d as chatId, b as currentChatPage, m as mobile, k as chats, p as pinnedChats, l as tags, n as showSidebar, o as showArchivedChats, s as socket, f as isApp, q as showSearch, c as config, t as temporaryChatEnabled, r as models, v as channels, w as scrollPaginationEnabled, h as WEBUI_BASE_URL, W as WEBUI_NAME, x as WEBUI_VERSION, y as showSettings, z as showChangelog } from "../../../chunks/index2.js";
import { t as tick } from "../../../chunks/scheduler.js";
import { v4 } from "uuid";
import { g as getArchivedChatList, a as archiveChatById, b as getChatPinnedStatusById, c as cloneChatById, d as getChatList, e as getPinnedChatList, S as Sparkles, M as MagnifyingGlass, f as getAllTags, i as importChat } from "../../../chunks/MagnifyingGlass.js";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import { M as Modal } from "../../../chunks/Modal.js";
import { T as Tooltip } from "../../../chunks/Tooltip.js";
import { C as ConfirmDialog } from "../../../chunks/ConfirmDialog.js";
import { S as Spinner } from "../../../chunks/Spinner.js";
import { L as Loader } from "../../../chunks/Loader.js";
import { X as XMark } from "../../../chunks/XMark.js";
import { C as ChevronUp } from "../../../chunks/ChevronUp.js";
import { C as ChevronDown } from "../../../chunks/ChevronDown.js";
import { A as ArchiveBox, U as UserMenu } from "../../../chunks/UserMenu.js";
import "dequal";
import "../../../chunks/create.js";
import { M as Menu_sub, a as Menu_sub_trigger, b as Menu_sub_content } from "../../../chunks/menu-sub-trigger.js";
import { M as Menu_item } from "../../../chunks/menu-item.js";
import { M as Menu_content, f as flyAndScale } from "../../../chunks/menu-trigger.js";
import "jspdf";
import "html2canvas-pro";
import { D as Dropdown } from "../../../chunks/Dropdown.js";
import { G as GarbageBin } from "../../../chunks/GarbageBin.js";
import { P as Pencil } from "../../../chunks/Pencil.js";
import { T as Tags_1, S as ShareChatModal, P as PencilSquare } from "../../../chunks/PencilSquare.js";
import { D as DocumentDuplicate, S as Share } from "../../../chunks/DocumentDuplicate.js";
import { D as Download } from "../../../chunks/Download.js";
import { C as ChevronRight } from "../../../chunks/ChevronRight.js";
import { C as Collapsible } from "../../../chunks/Collapsible.js";
import { P as Plus } from "../../../chunks/Plus.js";
import DOMPurify from "dompurify";
import { E as EllipsisHorizontal } from "../../../chunks/EllipsisHorizontal.js";
import { u as updateChannelById, c as createNewChannel, g as getChannels } from "../../../chunks/index5.js";
import { A as AccessControl } from "../../../chunks/AccessControl.js";
import { C as Cog6 } from "../../../chunks/Cog6.js";
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
import calendar from "dayjs/plugin/calendar.js";
import { u as updateUserSettings } from "../../../chunks/index6.js";
import { g as getModels } from "../../../chunks/index7.js";
import "../../../chunks/index4.js";
import { T as Textarea } from "../../../chunks/Textarea.js";
import "kokoro-js";
import "@huggingface/transformers";
import "marked";
/* empty css                                                          */
import "../../../chunks/index.js";
import { S as Search } from "../../../chunks/Search.js";
const createNewFolder = async (token, name) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getFolders = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateFolderIsExpandedById = async (token, id, isExpanded) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/${id}/update/expanded`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      is_expanded: isExpanded
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const ChatsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  dayjs.extend(localizedFormat);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  let { title = "Chats" } = $$props;
  let { emptyPlaceholder = "" } = $$props;
  let { shareUrl = false } = $$props;
  let { query = "" } = $$props;
  let { orderBy = "updated_at" } = $$props;
  let { direction = "desc" } = $$props;
  let { chatList = null } = $$props;
  let { allChatsLoaded = false } = $$props;
  let { chatListLoading = false } = $$props;
  let showDeleteConfirmDialog = false;
  let { onUpdate = () => {
  } } = $$props;
  let { loadHandler = null } = $$props;
  let { unarchiveHandler = null } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.emptyPlaceholder === void 0 && $$bindings.emptyPlaceholder && emptyPlaceholder !== void 0) $$bindings.emptyPlaceholder(emptyPlaceholder);
  if ($$props.shareUrl === void 0 && $$bindings.shareUrl && shareUrl !== void 0) $$bindings.shareUrl(shareUrl);
  if ($$props.query === void 0 && $$bindings.query && query !== void 0) $$bindings.query(query);
  if ($$props.orderBy === void 0 && $$bindings.orderBy && orderBy !== void 0) $$bindings.orderBy(orderBy);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0) $$bindings.direction(direction);
  if ($$props.chatList === void 0 && $$bindings.chatList && chatList !== void 0) $$bindings.chatList(chatList);
  if ($$props.allChatsLoaded === void 0 && $$bindings.allChatsLoaded && allChatsLoaded !== void 0) $$bindings.allChatsLoaded(allChatsLoaded);
  if ($$props.chatListLoading === void 0 && $$bindings.chatListLoading && chatListLoading !== void 0) $$bindings.chatListLoading(chatListLoading);
  if ($$props.onUpdate === void 0 && $$bindings.onUpdate && onUpdate !== void 0) $$bindings.onUpdate(onUpdate);
  if ($$props.loadHandler === void 0 && $$bindings.loadHandler && loadHandler !== void 0) $$bindings.loadHandler(loadHandler);
  if ($$props.unarchiveHandler === void 0 && $$bindings.unarchiveHandler && unarchiveHandler !== void 0) $$bindings.unarchiveHandler(unarchiveHandler);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ConfirmDialog, "ConfirmDialog").$$render(
      $$result,
      { show: showDeleteConfirmDialog },
      {
        show: ($$value) => {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Modal, "Modal").$$render(
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
          return `<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-1"><div class="text-lg font-medium self-center">${escape(title)}</div> <button class="self-center" data-svelte-h="svelte-i7w487"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" clip-rule="evenodd"></path></svg></button></div> <div class="flex flex-col w-full px-5 pb-4 dark:text-gray-200"><div class="flex w-full space-x-2 mb-0.5"><div class="flex flex-1"><div class="self-center ml-1 mr-3" data-svelte-h="svelte-kinl2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class="w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"${add_attribute("placeholder", $i18n.t("Search Chats"), 0)}${add_attribute("value", query, 0)}> ${query ? `<div class="self-center pl-1.5 pr-1 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition">${validate_component(XMark, "XMark").$$render($$result, { className: "size-3", strokeWidth: "2" }, {}, {})}</button></div>` : ``}</div></div> <div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6">${chatList ? `<div class="w-full">${chatList.length > 0 ? `<div class="flex text-xs font-medium mb-1.5"><button class="px-1.5 py-1 cursor-pointer select-none basis-3/5"><div class="flex gap-1.5 items-center">${escape($i18n.t("Title"))} ${orderBy === "title" ? `<span class="font-normal">${direction === "asc" ? ` ${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-2" }, {}, {})}` : ` ${validate_component(ChevronDown, "ChevronDown").$$render($$result, { className: "size-2" }, {}, {})}`}</span>` : `<span class="invisible">${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-2" }, {}, {})}</span>`}</div></button> <button class="px-1.5 py-1 cursor-pointer select-none hidden sm:flex sm:basis-2/5 justify-end"><div class="flex gap-1.5 items-center">${escape($i18n.t("Updated at"))} ${orderBy === "updated_at" ? `<span class="font-normal">${direction === "asc" ? ` ${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-2" }, {}, {})}` : ` ${validate_component(ChevronDown, "ChevronDown").$$render($$result, { className: "size-2" }, {}, {})}`}</span>` : `<span class="invisible">${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-2" }, {}, {})}</span>`}</div></button></div>` : ``} <div class="text-left text-sm w-full mb-3 max-h-[22rem] overflow-y-scroll">${chatList.length === 0 ? `<div class="text-xs text-gray-500 dark:text-gray-400 text-center px-5 min-h-20 w-full h-full flex justify-center items-center">${escape($i18n.t("No results found"))}</div>` : ``} ${each(chatList, (chat, idx) => {
            return `${(idx === 0 || idx > 0 && chat.time_range !== chatList[idx - 1].time_range) && chat?.time_range ? `<div class="${"w-full text-xs text-gray-500 dark:text-gray-500 font-medium " + escape(idx === 0 ? "" : "pt-5", true) + " pb-2 px-2"}">${escape($i18n.t(chat.time_range))}  </div>` : ``} <div class="w-full flex justify-between items-center rounded-lg text-sm py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-850" draggable="false"><a class="basis-3/5"${add_attribute("href", shareUrl ? `/s/${chat.id}` : `/c/${chat.id}`, 0)}><div class="text-ellipsis line-clamp-1 w-full">${escape(chat?.title)} </div></a> <div class="basis-2/5 flex items-center justify-end"><div class="hidden sm:flex text-gray-500 dark:text-gray-400 text-xs">${escape(dayjs(chat?.updated_at * 1e3).calendar())}</div> <div class="flex justify-end pl-2.5 text-gray-600 dark:text-gray-300">${unarchiveHandler ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Unarchive Chat") }, {}, {
              default: () => {
                return `<button class="self-center w-fit px-1 text-sm rounded-xl" data-svelte-h="svelte-akwxe0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"></path></svg></button> `;
              }
            })}` : ``} ${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Delete Chat") }, {}, {
              default: () => {
                return `<button class="self-center w-fit px-1 text-sm rounded-xl" data-svelte-h="svelte-uod23x"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg></button> `;
              }
            })} </div></div> </div>`;
          })} ${!allChatsLoaded && loadHandler ? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2">${validate_component(Spinner, "Spinner").$$render($$result, { className: " size-4" }, {}, {})} <div class="" data-svelte-h="svelte-17uns3n">Loading...</div></div>`;
            }
          })}` : ``}</div> ${query === "" ? `${slots.footer ? slots.footer({}) : ``}` : ``}</div>` : `<div class="w-full h-full flex justify-center items-center min-h-20">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`} </div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const ArchivedChatsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  let { onUpdate = () => {
  } } = $$props;
  let chatList = null;
  let page2 = 1;
  let query = "";
  let orderBy = "updated_at";
  let direction = "desc";
  let allChatsLoaded = false;
  let chatListLoading = false;
  let searchDebounceTimeout;
  let showUnarchiveAllConfirmDialog = false;
  let filter = {};
  const searchHandler = async () => {
    if (searchDebounceTimeout) {
      clearTimeout(searchDebounceTimeout);
    }
    page2 = 1;
    chatList = null;
    if (query === "") {
      chatList = await getArchivedChatList(localStorage.token, page2, filter);
    } else {
      searchDebounceTimeout = setTimeout(
        async () => {
          chatList = await getArchivedChatList(localStorage.token, page2, filter);
        },
        500
      );
    }
    if ((chatList ?? []).length === 0) {
      allChatsLoaded = true;
    } else {
      allChatsLoaded = false;
    }
  };
  const loadMoreChats = async () => {
    chatListLoading = true;
    page2 += 1;
    let newChatList = [];
    if (query) {
      newChatList = await getArchivedChatList(localStorage.token, page2, filter);
    } else {
      newChatList = await getArchivedChatList(localStorage.token, page2, filter);
    }
    allChatsLoaded = newChatList.length === 0;
    if (newChatList.length > 0) {
      chatList = [...chatList, ...newChatList];
    }
    chatListLoading = false;
  };
  const unarchiveHandler = async (chatId2) => {
    await archiveChatById(localStorage.token, chatId2).catch((error) => {
      toast.error(`${error}`);
    });
    onUpdate();
    init();
  };
  const init = async () => {
    chatList = await getArchivedChatList(localStorage.token);
  };
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.onUpdate === void 0 && $$bindings.onUpdate && onUpdate !== void 0) $$bindings.onUpdate(onUpdate);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    filter = {
      ...query ? { query } : {},
      ...orderBy ? { order_by: orderBy } : {},
      ...direction ? { direction } : {}
    };
    {
      if (filter !== null) {
        searchHandler();
      }
    }
    {
      if (show) {
        init();
      }
    }
    $$rendered = `${validate_component(ConfirmDialog, "UnarchiveAllConfirmDialog").$$render(
      $$result,
      {
        message: $i18n.t("Are you sure you want to unarchive all archived chats?"),
        confirmLabel: $i18n.t("Unarchive All"),
        show: showUnarchiveAllConfirmDialog
      },
      {
        show: ($$value) => {
          showUnarchiveAllConfirmDialog = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ChatsModal, "ChatsModal").$$render(
      $$result,
      {
        title: $i18n.t("Archived Chats"),
        emptyPlaceholder: $i18n.t("You have no archived conversations."),
        chatList,
        allChatsLoaded,
        chatListLoading,
        onUpdate: () => {
          init();
        },
        loadHandler: loadMoreChats,
        unarchiveHandler,
        show,
        query,
        orderBy,
        direction
      },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        },
        query: ($$value) => {
          query = $$value;
          $$settled = false;
        },
        orderBy: ($$value) => {
          orderBy = $$value;
          $$settled = false;
        },
        direction: ($$value) => {
          direction = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `<div slot="footer"><div class="flex flex-wrap text-sm font-medium gap-1.5 mt-2 m-1 justify-end w-full"><button class="px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-800 rounded-3xl">${escape($i18n.t("Unarchive All Archived Chats"))}</button> <button class="px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-800 rounded-3xl">${escape($i18n.t("Export All Archived Chats"))}</button></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const Bookmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path></svg>`;
});
const BookmarkSlash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"></path></svg>`;
});
const ChatMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_settings;
  let $i18n, $$unsubscribe_i18n;
  let $user, $$unsubscribe_user;
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { shareHandler } = $$props;
  let { cloneChatHandler } = $$props;
  let { archiveChatHandler } = $$props;
  let { renameHandler } = $$props;
  let { deleteHandler } = $$props;
  let { onClose } = $$props;
  let { chatId: chatId2 = "" } = $$props;
  let show = false;
  let pinned = false;
  const checkPinned = async () => {
    pinned = await getChatPinnedStatusById(localStorage.token, chatId2);
  };
  if ($$props.shareHandler === void 0 && $$bindings.shareHandler && shareHandler !== void 0) $$bindings.shareHandler(shareHandler);
  if ($$props.cloneChatHandler === void 0 && $$bindings.cloneChatHandler && cloneChatHandler !== void 0) $$bindings.cloneChatHandler(cloneChatHandler);
  if ($$props.archiveChatHandler === void 0 && $$bindings.archiveChatHandler && archiveChatHandler !== void 0) $$bindings.archiveChatHandler(archiveChatHandler);
  if ($$props.renameHandler === void 0 && $$bindings.renameHandler && renameHandler !== void 0) $$bindings.renameHandler(renameHandler);
  if ($$props.deleteHandler === void 0 && $$bindings.deleteHandler && deleteHandler !== void 0) $$bindings.deleteHandler(deleteHandler);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  if ($$props.chatId === void 0 && $$bindings.chatId && chatId2 !== void 0) $$bindings.chatId(chatId2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (show) {
        checkPinned();
      }
    }
    $$rendered = `${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      { show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `<div slot="content">${validate_component(Menu_content, "DropdownMenu.Content").$$render(
            $$result,
            {
              class: "w-full max-w-[200px] rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
              sideOffset: -2,
              side: "bottom",
              align: "start",
              transition: flyAndScale
            },
            {},
            {
              default: () => {
                return `${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${pinned ? `${validate_component(BookmarkSlash, "BookmarkSlash").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Unpin"))}</div>` : `${validate_component(Bookmark, "Bookmark").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Pin"))}</div>`}`;
                    }
                  }
                )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Pencil, "Pencil").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Rename"))}</div>`;
                    }
                  }
                )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(DocumentDuplicate, "DocumentDuplicate").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Clone"))}</div>`;
                    }
                  }
                )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(ArchiveBox, "ArchiveBox").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Archive"))}</div>`;
                    }
                  }
                )} ${$user?.role === "admin" || ($user.permissions?.chat?.share ?? true) ? `${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800  rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Share, "Share").$$render($$result, {}, {}, {})} <div class="flex items-center">${escape($i18n.t("Share"))}</div>`;
                    }
                  }
                )}` : ``} ${validate_component(Menu_sub, "DropdownMenu.Sub").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Menu_sub_trigger, "DropdownMenu.SubTrigger").$$render(
                      $$result,
                      {
                        class: "flex gap-2 items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Download, "Download").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Download"))}</div>`;
                        }
                      }
                    )} ${validate_component(Menu_sub_content, "DropdownMenu.SubContent").$$render(
                      $$result,
                      {
                        class: "w-full rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
                        transition: flyAndScale,
                        sideOffset: 8
                      },
                      {},
                      {
                        default: () => {
                          return `${$user?.role === "admin" || ($user.permissions?.chat?.export ?? true) ? `${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                            $$result,
                            {
                              class: "flex gap-2 items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="flex items-center line-clamp-1">${escape($i18n.t("Export chat (.json)"))}</div>`;
                              }
                            }
                          )}` : ``} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                            $$result,
                            {
                              class: "flex gap-2 items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="flex items-center line-clamp-1">${escape($i18n.t("Plain text (.txt)"))}</div>`;
                              }
                            }
                          )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                            $$result,
                            {
                              class: "flex gap-2 items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="flex items-center line-clamp-1">${escape($i18n.t("PDF document (.pdf)"))}</div>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(GarbageBin, "GarbageBin").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Delete"))}</div>`;
                    }
                  }
                )} <hr class="border-gray-100 dark:border-gray-850 my-0.5"> <div class="flex p-1">${validate_component(Tags_1, "Tags").$$render($$result, { chatId: chatId2 }, {}, {})}</div>`;
              }
            }
          )}</div>`;
        },
        default: () => {
          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("More") }, {}, {
            default: () => {
              return `${slots.default ? slots.default({}) : ``}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_settings();
  $$unsubscribe_i18n();
  $$unsubscribe_user();
  return $$rendered;
});
const ChatItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $chatId, $$unsubscribe_chatId;
  let $currentChatPage, $$unsubscribe_currentChatPage;
  let $i18n, $$unsubscribe_i18n;
  let $$unsubscribe_mobile;
  $$unsubscribe_chatId = subscribe(chatId, (value) => $chatId = value);
  $$unsubscribe_currentChatPage = subscribe(currentChatPage, (value) => $currentChatPage = value);
  $$unsubscribe_mobile = subscribe(mobile, (value) => value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  const dispatch = createEventDispatcher();
  let { className = "" } = $$props;
  let { id } = $$props;
  let { title } = $$props;
  let { selected = false } = $$props;
  let { shiftKey = false } = $$props;
  let mouseOver = false;
  let draggable = false;
  let showShareChatModal = false;
  let confirmEdit = false;
  let chatTitle$1 = title;
  const cloneChatHandler = async (id2) => {
    const res = await cloneChatById(localStorage.token, id2, $i18n.t("Clone of {{TITLE}}", { TITLE: title })).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      goto(`/c/${res.id}`);
      currentChatPage.set(1);
      await chats.set(await getChatList(localStorage.token, $currentChatPage));
      await pinnedChats.set(await getPinnedChatList(localStorage.token));
    }
  };
  const archiveChatHandler = async (id2) => {
    await archiveChatById(localStorage.token, id2);
    dispatch("change");
  };
  let itemElement;
  const dragImage = new Image();
  dragImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  onDestroy(() => {
  });
  let showDeleteConfirm = false;
  const renameHandler = async () => {
    chatTitle$1 = title;
    confirmEdit = true;
    await tick();
    setTimeout(
      () => {
        const input = document.getElementById(`chat-title-input-${id}`);
        if (input) input.focus();
      },
      0
    );
  };
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.shiftKey === void 0 && $$bindings.shiftKey && shiftKey !== void 0) $$bindings.shiftKey(shiftKey);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ShareChatModal, "ShareChatModal").$$render(
      $$result,
      { chatId: id, show: showShareChatModal },
      {
        show: ($$value) => {
          showShareChatModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ConfirmDialog, "DeleteConfirmDialog").$$render(
      $$result,
      {
        title: $i18n.t("Delete chat?"),
        show: showDeleteConfirm
      },
      {
        show: ($$value) => {
          showDeleteConfirm = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="text-sm text-gray-500 flex-1 line-clamp-3">${escape($i18n.t("This will delete"))} <span class="font-semibold">${escape(title)}</span>.</div>`;
        }
      }
    )} ${``} <div class="${"w-full " + escape(className, true) + " relative group"}"${add_attribute("draggable", draggable, 0)}${add_attribute("this", itemElement, 0)}>${confirmEdit ? `<div class="${"w-full flex justify-between rounded-lg px-[11px] py-[6px] " + escape(
      id === $chatId || confirmEdit ? "bg-gray-200 dark:bg-gray-900" : selected ? "bg-gray-100 dark:bg-gray-950" : "group-hover:bg-gray-100 dark:group-hover:bg-gray-950",
      true
    ) + " whitespace-nowrap text-ellipsis relative " + escape("", true)}"><input id="${"chat-title-input-" + escape(id, true)}" class="bg-transparent w-full outline-hidden mr-10"${add_attribute("placeholder", "", 0)}${add_attribute("value", chatTitle$1, 0)}></div>` : `<a class="${"w-full flex justify-between rounded-lg px-[11px] py-[6px] " + escape(
      id === $chatId || confirmEdit ? "bg-gray-200 dark:bg-gray-900" : selected ? "bg-gray-100 dark:bg-gray-950" : " group-hover:bg-gray-100 dark:group-hover:bg-gray-950",
      true
    ) + " whitespace-nowrap text-ellipsis"}" href="${"/c/" + escape(id, true)}" draggable="false"><div class="flex self-center flex-1 w-full"><div dir="auto" class="text-left self-center overflow-hidden w-full h-[20px]">${escape(title)}</div></div></a>`}  <div class="${"" + escape(
      id === $chatId || confirmEdit ? "from-gray-200 dark:from-gray-900" : selected ? "from-gray-100 dark:from-gray-950" : "invisible group-hover:visible from-gray-100 dark:from-gray-950",
      true
    ) + " absolute " + escape(className === "pr-2" ? "right-[8px]" : "right-1", true) + " top-[4px] py-1 pr-0.5 mr-1.5 pl-5 bg-linear-to-l from-80% to-transparent"}">${confirmEdit ? `<div class="flex self-center items-center space-x-1.5 z-10 translate-y-[0.5px] -translate-x-[0.5px]">${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Generate") }, {}, {
      default: () => {
        return `<button class="self-center dark:hover:text-white transition" id="generate-title-button">${validate_component(Sparkles, "Sparkles").$$render($$result, { strokeWidth: "2" }, {}, {})}</button>`;
      }
    })}</div>` : `${shiftKey && mouseOver ? `<div class="flex items-center self-center space-x-1.5">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Archive"),
        className: "flex items-center"
      },
      {},
      {
        default: () => {
          return `<button class="self-center dark:hover:text-white transition" type="button">${validate_component(ArchiveBox, "ArchiveBox").$$render(
            $$result,
            {
              className: "size-4  translate-y-[0.5px]",
              strokeWidth: "2"
            },
            {},
            {}
          )}</button>`;
        }
      }
    )} ${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Delete") }, {}, {
      default: () => {
        return `<button class="self-center dark:hover:text-white transition" type="button">${validate_component(GarbageBin, "GarbageBin").$$render($$result, { strokeWidth: "2" }, {}, {})}</button>`;
      }
    })}</div>` : `<div class="flex self-center z-10 items-end">${validate_component(ChatMenu, "ChatMenu").$$render(
      $$result,
      {
        chatId: id,
        cloneChatHandler: () => {
          cloneChatHandler(id);
        },
        shareHandler: () => {
          showShareChatModal = true;
        },
        archiveChatHandler: () => {
          archiveChatHandler(id);
        },
        renameHandler,
        deleteHandler: () => {
          showDeleteConfirm = true;
        },
        onClose: () => {
          dispatch("unselect");
        }
      },
      {},
      {
        default: () => {
          return `<button aria-label="Chat Menu" class="self-center dark:hover:text-white transition m-0" data-svelte-h="svelte-1d8pkdr"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path></svg></button>`;
        }
      }
    )} ${id === $chatId ? ` <button id="delete-chat-button" class="hidden" data-svelte-h="svelte-1gozylk"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path></svg></button>` : ``}</div>`}`}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_chatId();
  $$unsubscribe_currentChatPage();
  $$unsubscribe_i18n();
  $$unsubscribe_mobile();
  return $$rendered;
});
const Folder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getContext("i18n");
  const dispatch = createEventDispatcher();
  let { open = true } = $$props;
  let { id = "" } = $$props;
  let { name = "" } = $$props;
  let { collapsible = true } = $$props;
  let { onAddLabel = "" } = $$props;
  let { onAdd = null } = $$props;
  let { dragAndDrop = true } = $$props;
  let { className = "" } = $$props;
  let folderElement;
  let draggedOver = false;
  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    draggedOver = true;
  };
  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (folderElement.contains(e.target)) {
      console.log("Dropped on the Button");
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        for (const item of Array.from(e.dataTransfer.items)) {
          if (item.kind === "file") {
            const file = item.getAsFile();
            if (file && file.type === "application/json") {
              console.log("Dropped file is a JSON file!");
              const reader = new FileReader();
              reader.onload = async function(event) {
                try {
                  const fileContent = JSON.parse(event.target.result);
                  console.log("Parsed JSON Content: ", fileContent);
                  open = true;
                  dispatch("import", fileContent);
                } catch (error) {
                  console.error("Error parsing JSON file:", error);
                }
              };
              reader.readAsText(file);
            } else {
              console.error("Only JSON file types are supported.");
            }
          } else {
            open = true;
            const dataTransfer = e.dataTransfer.getData("text/plain");
            const data = JSON.parse(dataTransfer);
            console.log(data);
            dispatch("drop", data);
          }
        }
      }
      draggedOver = false;
    }
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    draggedOver = false;
  };
  onDestroy(() => {
    if (!dragAndDrop) {
      return;
    }
    folderElement.addEventListener("dragover", onDragOver);
    folderElement.removeEventListener("drop", onDrop);
    folderElement.removeEventListener("dragleave", onDragLeave);
  });
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.collapsible === void 0 && $$bindings.collapsible && collapsible !== void 0) $$bindings.collapsible(collapsible);
  if ($$props.onAddLabel === void 0 && $$bindings.onAddLabel && onAddLabel !== void 0) $$bindings.onAddLabel(onAddLabel);
  if ($$props.onAdd === void 0 && $$bindings.onAdd && onAdd !== void 0) $$bindings.onAdd(onAdd);
  if ($$props.dragAndDrop === void 0 && $$bindings.dragAndDrop && dragAndDrop !== void 0) $$bindings.dragAndDrop(dragAndDrop);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="${"relative " + escape(className, true)}"${add_attribute("this", folderElement, 0)}>${draggedOver ? `<div class="absolute top-0 left-0 w-full h-full rounded-xs bg-gray-100/50 dark:bg-gray-700/20 bg-opacity-50 dark:bg-opacity-10 z-50 pointer-events-none touch-none"></div>` : ``} ${collapsible ? `${validate_component(Collapsible, "Collapsible").$$render(
      $$result,
      {
        className: "w-full ",
        buttonClassName: "w-full",
        onChange: (state) => {
          dispatch("change", state);
        },
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `<div slot="content" class="w-full">${slots.default ? slots.default({}) : ``}</div>`;
        },
        default: () => {
          return ` <div class="w-full group rounded-md relative flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-500 dark:text-gray-500 transition"><button class="w-full py-1.5 pl-2 flex items-center gap-1.5 text-xs font-medium"><div class="text-gray-300 dark:text-gray-600">${open ? `${validate_component(ChevronDown, "ChevronDown").$$render($$result, { className: " size-3", strokeWidth: "2.5" }, {}, {})}` : `${validate_component(ChevronRight, "ChevronRight").$$render($$result, { className: " size-3", strokeWidth: "2.5" }, {}, {})}`}</div> <div class="translate-y-[0.5px]">${escape(name)}</div></button> ${onAdd ? `<button class="absolute z-10 right-2 invisible group-hover:visible self-center flex items-center dark:text-gray-300">${validate_component(Tooltip, "Tooltip").$$render($$result, { content: onAddLabel }, {}, {
            default: () => {
              return `<button class="p-0.5 dark:hover:bg-gray-850 rounded-lg touch-auto">${validate_component(Plus, "Plus").$$render($$result, { className: " size-3", strokeWidth: "2.5" }, {}, {})}</button>`;
            }
          })}</button>` : ``}</div>`;
        }
      }
    )}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const FolderMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  createEventDispatcher();
  let show = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      { show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `<div slot="content">${validate_component(Menu_content, "DropdownMenu.Content").$$render(
            $$result,
            {
              class: "w-full max-w-[170px] rounded-lg px-1 py-1.5  z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
              sideOffset: -2,
              side: "bottom",
              align: "start",
              transition: flyAndScale
            },
            {},
            {
              default: () => {
                return `${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Pencil, "Pencil").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Rename"))}</div>`;
                    }
                  }
                )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Download, "Download").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Export"))}</div>`;
                    }
                  }
                )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(GarbageBin, "GarbageBin").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Delete"))}</div>`;
                    }
                  }
                )}`;
              }
            }
          )}</div>`;
        },
        default: () => {
          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("More") }, {}, {
            default: () => {
              return `${slots.default ? slots.default({}) : ``}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const RecursiveFolder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  const dispatch = createEventDispatcher();
  let { open = false } = $$props;
  let { folders } = $$props;
  let { folderId } = $$props;
  let { className = "" } = $$props;
  let { parentDragged = false } = $$props;
  let folderElement;
  let dragged = false;
  const dragImage = new Image();
  dragImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  onDestroy(() => {
  });
  let showDeleteConfirm = false;
  const isExpandedUpdateHandler = async () => {
    await updateFolderIsExpandedById(localStorage.token, folderId, open).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
  };
  let isExpandedUpdateTimeout;
  const isExpandedUpdateDebounceHandler = (open2) => {
    clearTimeout(isExpandedUpdateTimeout);
    isExpandedUpdateTimeout = setTimeout(
      () => {
        isExpandedUpdateHandler();
      },
      500
    );
  };
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.folders === void 0 && $$bindings.folders && folders !== void 0) $$bindings.folders(folders);
  if ($$props.folderId === void 0 && $$bindings.folderId && folderId !== void 0) $$bindings.folderId(folderId);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.parentDragged === void 0 && $$bindings.parentDragged && parentDragged !== void 0) $$bindings.parentDragged(parentDragged);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      isExpandedUpdateDebounceHandler();
    }
    $$rendered = `${validate_component(ConfirmDialog, "DeleteConfirmDialog").$$render(
      $$result,
      {
        title: $i18n.t("Delete folder?"),
        show: showDeleteConfirm
      },
      {
        show: ($$value) => {
          showDeleteConfirm = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="text-sm text-gray-700 dark:text-gray-300 flex-1 line-clamp-3"><!-- HTML_TAG_START -->${DOMPurify.sanitize($i18n.t("This will delete <strong>{{NAME}}</strong> and <strong>all its contents</strong>.", { NAME: folders[folderId].name }))}<!-- HTML_TAG_END --></div>`;
        }
      }
    )} ${``} <div class="${"relative " + escape(className, true)}" draggable="true"${add_attribute("this", folderElement, 0)}>${``} ${validate_component(Collapsible, "Collapsible").$$render(
      $$result,
      {
        className: "w-full",
        buttonClassName: "w-full",
        hide: (folders[folderId]?.childrenIds ?? []).length === 0 && (folders[folderId].items?.chats ?? []).length === 0,
        onChange: (state) => {
          dispatch("open", state);
        },
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `<div slot="content" class="w-full">${(folders[folderId]?.childrenIds ?? []).length > 0 || (folders[folderId].items?.chats ?? []).length > 0 ? `<div class="ml-3 pl-1 mt-[1px] flex flex-col overflow-y-auto scrollbar-hidden border-s border-gray-100 dark:border-gray-900">${folders[folderId]?.childrenIds ? (() => {
            let children = folders[folderId]?.childrenIds.map((id) => folders[id]).sort((a, b) => a.name.localeCompare(b.name, void 0, { numeric: true, sensitivity: "base" }));
            return ` ${each(children, (childFolder) => {
              return `${validate_component(RecursiveFolder, "svelte:self").$$render(
                $$result,
                {
                  folders,
                  folderId: childFolder.id,
                  parentDragged: dragged
                },
                {},
                {}
              )}`;
            })}`;
          })() : ``} ${folders[folderId].items?.chats ? `${each(folders[folderId].items.chats, (chat) => {
            return `${validate_component(ChatItem, "ChatItem").$$render($$result, { id: chat.id, title: chat.title }, {}, {})}`;
          })}` : ``}</div>` : ``}</div>`;
        },
        default: () => {
          return ` <div class="w-full group"><button id="${"folder-" + escape(folderId, true) + "-button"}" class="relative w-full py-1.5 px-2 rounded-md flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500 font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition"><div class="text-gray-300 dark:text-gray-600">${open ? `${validate_component(ChevronDown, "ChevronDown").$$render($$result, { className: " size-3", strokeWidth: "2.5" }, {}, {})}` : `${validate_component(ChevronRight, "ChevronRight").$$render($$result, { className: " size-3", strokeWidth: "2.5" }, {}, {})}`}</div> <div class="translate-y-[0.5px] flex-1 justify-start text-start line-clamp-1">${`${escape(folders[folderId].name)}`}</div> <button class="absolute z-10 right-2 invisible group-hover:visible self-center flex items-center dark:text-gray-300">${validate_component(FolderMenu, "FolderMenu").$$render($$result, {}, {}, {
            default: () => {
              return `<button class="p-0.5 dark:hover:bg-gray-850 rounded-lg touch-auto">${validate_component(EllipsisHorizontal, "EllipsisHorizontal").$$render($$result, { className: "size-4", strokeWidth: "2.5" }, {}, {})}</button>`;
            }
          })}</button></button></div>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const Folders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { folders = {} } = $$props;
  let folderList = [];
  if ($$props.folders === void 0 && $$bindings.folders && folders !== void 0) $$bindings.folders(folders);
  folderList = Object.keys(folders).filter((key) => folders[key].parent_id === null).sort((a, b) => folders[a].name.localeCompare(folders[b].name, void 0, { numeric: true, sensitivity: "base" }));
  return `${each(folderList, (folderId) => {
    return `${validate_component(RecursiveFolder, "RecursiveFolder").$$render($$result, { className: "", folders, folderId }, {}, {})}`;
  })}`;
});
const ChannelModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  let { onSubmit = () => {
  } } = $$props;
  let { onUpdate = () => {
  } } = $$props;
  let { channel = null } = $$props;
  let { edit = false } = $$props;
  let name = "";
  let accessControl = {};
  const init = () => {
    name = channel.name;
    accessControl = channel.access_control;
  };
  let showDeleteConfirmDialog = false;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0) $$bindings.onSubmit(onSubmit);
  if ($$props.onUpdate === void 0 && $$bindings.onUpdate && onUpdate !== void 0) $$bindings.onUpdate(onUpdate);
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0) $$bindings.channel(channel);
  if ($$props.edit === void 0 && $$bindings.edit && edit !== void 0) $$bindings.edit(edit);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (name) {
        name = name.replace(/\s/g, "-").toLocaleLowerCase();
      }
    }
    {
      if (channel) {
        init();
      }
    }
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { size: "sm", show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-1"><div class="text-lg font-medium self-center">${edit ? `${escape($i18n.t("Edit Channel"))}` : `${escape($i18n.t("Create Channel"))}`}</div> <button class="self-center" data-svelte-h="svelte-i7w487"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" clip-rule="evenodd"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col w-full mt-2"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("Channel Name"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("new-channel"), 0)} autocomplete="off"${add_attribute("value", name, 0)}></div></div> <hr class="border-gray-100 dark:border-gray-700/10 my-2.5 w-full"> <div class="my-2 -mx-2"><div class="px-3 py-2 bg-gray-50 dark:bg-gray-950 rounded-lg">${validate_component(AccessControl, "AccessControl").$$render(
            $$result,
            { accessControl },
            {
              accessControl: ($$value) => {
                accessControl = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5">${edit ? `<button class="px-3.5 py-1.5 text-sm font-medium dark:bg-black dark:hover:bg-black/90 dark:text-white bg-white text-black hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="button">${escape($i18n.t("Delete"))}</button>` : ``} <button class="${"px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center " + escape("", true)}" type="submit" ${""}>${edit ? `${escape($i18n.t("Update"))}` : `${escape($i18n.t("Create"))}`} ${``}</button></div></form></div></div></div>`;
        }
      }
    )} ${validate_component(ConfirmDialog, "DeleteConfirmDialog").$$render(
      $$result,
      {
        message: $i18n.t("Are you sure you want to delete this channel?"),
        confirmLabel: $i18n.t("Delete"),
        show: showDeleteConfirmDialog
      },
      {
        show: ($$value) => {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_i18n();
  return $$rendered;
});
const ChannelItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_mobile;
  let $user, $$unsubscribe_user;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_mobile = subscribe(mobile, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  getContext("i18n");
  let { onUpdate = () => {
  } } = $$props;
  let { className = "" } = $$props;
  let { channel } = $$props;
  let showEditChannelModal = false;
  let itemElement;
  if ($$props.onUpdate === void 0 && $$bindings.onUpdate && onUpdate !== void 0) $$bindings.onUpdate(onUpdate);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0) $$bindings.channel(channel);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ChannelModal, "ChannelModal").$$render(
      $$result,
      {
        channel,
        edit: true,
        onUpdate,
        onSubmit: async ({ name, access_control }) => {
          const res = await updateChannelById(localStorage.token, channel.id, { name, access_control }).catch((error) => {
            toast.error(error.message);
          });
          if (res) {
            toast.success("Channel updated successfully");
          }
          onUpdate();
        },
        show: showEditChannelModal
      },
      {
        show: ($$value) => {
          showEditChannelModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="${"w-full " + escape(className, true) + " rounded-lg flex relative group hover:bg-gray-100 dark:hover:bg-gray-900 " + escape(
      $page.url.pathname === `/channels/${channel.id}` ? "bg-gray-100 dark:bg-gray-900" : "",
      true
    ) + " px-2.5 py-1"}"${add_attribute("this", itemElement, 0)}><a class="w-full flex justify-between" href="${"/channels/" + escape(channel.id, true)}" draggable="false"><div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M7.487 2.89a.75.75 0 1 0-1.474-.28l-.455 2.388H3.61a.75.75 0 0 0 0 1.5h1.663l-.571 2.998H2.75a.75.75 0 0 0 0 1.5h1.666l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h2.973l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h1.947a.75.75 0 0 0 0-1.5h-1.661l.57-2.998h1.95a.75.75 0 0 0 0-1.5h-1.664l.402-2.108a.75.75 0 0 0-1.474-.28l-.455 2.388H7.085l.402-2.108ZM6.8 6.498l-.571 2.998h2.973l.57-2.998H6.8Z" clip-rule="evenodd"></path></svg> <div class="text-left self-center overflow-hidden w-full line-clamp-1">${escape(channel.name)}</div></div></a> ${$user?.role === "admin" ? `<button class="absolute z-10 right-2 invisible group-hover:visible self-center flex items-center dark:text-gray-300"><button class="p-0.5 dark:hover:bg-gray-850 rounded-lg touch-auto">${validate_component(Cog6, "Cog6").$$render($$result, { className: "size-3.5" }, {}, {})}</button></button>` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_mobile();
  $$unsubscribe_user();
  return $$rendered;
});
const SearchInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $tags, $$unsubscribe_tags;
  $$unsubscribe_tags = subscribe(tags, (value2) => $tags = value2);
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value2) => $i18n = value2);
  let { placeholder = "" } = $$props;
  let { value = "" } = $$props;
  let { showClearButton = false } = $$props;
  let { onKeydown = (e) => {
  } } = $$props;
  let selectedIdx = 0;
  let lastWord = "";
  let options = [
    {
      name: "tag:",
      description: $i18n.t("search for tags")
    }
  ];
  let focused = false;
  let filteredOptions = options;
  let filteredTags = [];
  const documentClickHandler = (e) => {
    const searchContainer = document.getElementById("search-container");
    const chatSearch = document.getElementById("chat-search");
    if (!searchContainer.contains(e.target) && !chatSearch.contains(e.target)) {
      if (e.target.id.startsWith("search-tag-") || e.target.id.startsWith("search-option-")) {
        return;
      }
      focused = false;
    }
  };
  onDestroy(() => {
    document.removeEventListener("click", documentClickHandler);
  });
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.showClearButton === void 0 && $$bindings.showClearButton && showClearButton !== void 0) $$bindings.showClearButton(showClearButton);
  if ($$props.onKeydown === void 0 && $$bindings.onKeydown && onKeydown !== void 0) $$bindings.onKeydown(onKeydown);
  lastWord = value ? value.split(" ").at(-1) : value;
  filteredOptions = options.filter((option) => {
    return option.name.startsWith(lastWord);
  });
  filteredTags = lastWord.startsWith("tag:") ? [...$tags, { id: "none", name: $i18n.t("Untagged") }].filter((tag) => {
    const tagName = lastWord.slice(4);
    if (tagName) {
      const tagId = tagName.replace(" ", "_").toLowerCase();
      if (tag.id !== tagId) {
        return tag.id.startsWith(tagId);
      } else {
        return false;
      }
    } else {
      return true;
    }
  }) : [];
  $$unsubscribe_i18n();
  $$unsubscribe_tags();
  return `<div class="px-1 mb-1 flex justify-center space-x-2 relative z-10" id="search-container"><div class="flex w-full rounded-xl" id="chat-search"><div class="self-center py-2 rounded-l-xl bg-transparent dark:text-gray-300" data-svelte-h="svelte-fjsp45"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class="w-full rounded-r-xl py-1.5 pl-2.5 text-sm bg-transparent dark:text-gray-300 outline-hidden"${add_attribute("placeholder", placeholder ? placeholder : $i18n.t("Search"), 0)}${add_attribute("value", value, 0)}> ${showClearButton && value ? `<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition">${validate_component(XMark, "XMark").$$render($$result, { className: "size-3", strokeWidth: "2" }, {}, {})}</button></div>` : ``}</div> ${focused && (filteredOptions.length > 0 || filteredTags.length > 0) ? ` <div class="absolute top-0 mt-8 left-0 right-1 border border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-950 rounded-lg z-10 shadow-lg" id="search-options-container"><div class="px-2 py-2 text-xs group">${filteredTags.length > 0 ? `<div class="px-1 font-medium dark:text-gray-300 text-gray-700 mb-1" data-svelte-h="svelte-16um22k">Tags</div> <div class="max-h-60 overflow-auto">${each(filteredTags, (tag, tagIdx) => {
    return `<button class="${"px-1.5 py-0.5 flex gap-1 hover:bg-gray-100 dark:hover:bg-gray-900 w-full rounded " + escape(
      selectedIdx === tagIdx ? "bg-gray-100 dark:bg-gray-900" : "",
      true
    )}" id="${"search-tag-" + escape(tagIdx, true)}"><div class="dark:text-gray-300 text-gray-700 font-medium line-clamp-1 shrink-0">${escape(tag.name)}</div> <div class="text-gray-500 line-clamp-1">${escape(tag.id)}</div> </button>`;
  })}</div>` : `${filteredOptions.length > 0 ? `<div class="px-1 font-medium dark:text-gray-300 text-gray-700 mb-1">${escape($i18n.t("Search options"))}</div> <div class="max-h-60 overflow-auto">${each(filteredOptions, (option, optionIdx) => {
    return `<button class="${"px-1.5 py-0.5 flex gap-1 hover:bg-gray-100 dark:hover:bg-gray-900 w-full rounded " + escape(
      selectedIdx === optionIdx ? "bg-gray-100 dark:bg-gray-900" : "",
      true
    )}" id="${"search-option-" + escape(optionIdx, true)}"><div class="dark:text-gray-300 text-gray-700 font-medium">${escape(option.name)}</div> <div class="text-gray-500 line-clamp-1">${escape(option.description)}</div> </button>`;
  })}</div>` : ``}`}</div></div>` : ``}</div>`;
});
const SearchModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  dayjs.extend(calendar);
  let { show = false } = $$props;
  let { onClose = () => {
  } } = $$props;
  let query = "";
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
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
          return `<div class="py-2.5 dark:text-gray-300 text-gray-700"><div class="px-3.5 pb-1.5">${validate_component(SearchInput, "SearchInput").$$render(
            $$result,
            {
              placeholder: $i18n.t("Search"),
              showClearButton: true,
              onKeydown: (e) => {
                console.log("e", e);
                if (e.code === "Enter" && [].length > 0) {
                  const item2 = document.querySelector(`[data-arrow-selected="true"]`);
                  if (item2) {
                    item2?.click();
                  }
                  show = false;
                  return;
                } else if (e.code === "ArrowDown") ;
                else if (e.code === "ArrowUp") ;
                else ;
                const item = document.querySelector(`[data-arrow-selected="true"]`);
                item?.scrollIntoView({
                  block: "center",
                  inline: "nearest",
                  behavior: "instant"
                });
              },
              value: query
            },
            {
              value: ($$value) => {
                query = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>  <div class="flex flex-col overflow-y-auto h-80 scrollbar-hidden px-3 pb-1">${`<div class="w-full h-full flex justify-center items-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const css$3 = {
  code: ".scrollbar-hidden.svelte-141e0sl:active::-webkit-scrollbar-thumb,.scrollbar-hidden.svelte-141e0sl:focus::-webkit-scrollbar-thumb,.scrollbar-hidden.svelte-141e0sl:hover::-webkit-scrollbar-thumb{visibility:visible}.scrollbar-hidden.svelte-141e0sl::-webkit-scrollbar-thumb{visibility:hidden}",
  map: `{"version":3,"file":"Sidebar.svelte","sources":["Sidebar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { toast } from \\"svelte-sonner\\";\\nimport { v4 as uuidv4 } from \\"uuid\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport {\\n  user,\\n  chats,\\n  settings,\\n  showSettings,\\n  chatId,\\n  tags,\\n  showSidebar,\\n  showSearch,\\n  mobile,\\n  showArchivedChats,\\n  pinnedChats,\\n  scrollPaginationEnabled,\\n  currentChatPage,\\n  temporaryChatEnabled,\\n  channels,\\n  socket,\\n  config,\\n  isApp,\\n  models\\n} from \\"$lib/stores\\";\\nimport { onMount, getContext, tick, onDestroy } from \\"svelte\\";\\nconst i18n = getContext(\\"i18n\\");\\nimport {\\n  deleteChatById,\\n  getChatList,\\n  getAllTags,\\n  getChatListBySearchText,\\n  createNewChat,\\n  getPinnedChatList,\\n  toggleChatPinnedStatusById,\\n  getChatPinnedStatusById,\\n  getChatById,\\n  updateChatFolderIdById,\\n  importChat\\n} from \\"$lib/apis/chats\\";\\nimport { createNewFolder, getFolders, updateFolderParentIdById } from \\"$lib/apis/folders\\";\\nimport { WEBUI_BASE_URL } from \\"$lib/constants\\";\\nimport ArchivedChatsModal from \\"./ArchivedChatsModal.svelte\\";\\nimport UserMenu from \\"./Sidebar/UserMenu.svelte\\";\\nimport ChatItem from \\"./Sidebar/ChatItem.svelte\\";\\nimport Spinner from \\"../common/Spinner.svelte\\";\\nimport Loader from \\"../common/Loader.svelte\\";\\nimport AddFilesPlaceholder from \\"../AddFilesPlaceholder.svelte\\";\\nimport Folder from \\"../common/Folder.svelte\\";\\nimport Plus from \\"../icons/Plus.svelte\\";\\nimport Tooltip from \\"../common/Tooltip.svelte\\";\\nimport Folders from \\"./Sidebar/Folders.svelte\\";\\nimport { getChannels, createNewChannel } from \\"$lib/apis/channels\\";\\nimport ChannelModal from \\"./Sidebar/ChannelModal.svelte\\";\\nimport ChannelItem from \\"./Sidebar/ChannelItem.svelte\\";\\nimport PencilSquare from \\"../icons/PencilSquare.svelte\\";\\nimport Home from \\"../icons/Home.svelte\\";\\nimport MagnifyingGlass from \\"../icons/MagnifyingGlass.svelte\\";\\nimport SearchModal from \\"./SearchModal.svelte\\";\\nconst BREAKPOINT = 768;\\nlet navElement;\\nlet shiftKey = false;\\nlet selectedChatId = null;\\nlet showDropdown = false;\\nlet showPinnedChat = true;\\nlet showCreateChannel = false;\\nlet chatListLoading = false;\\nlet allChatsLoaded = false;\\nlet folders = {};\\nlet newFolderId = null;\\nconst initFolders = async () => {\\n  const folderList = await getFolders(localStorage.token).catch((error) => {\\n    toast.error(\`\${error}\`);\\n    return [];\\n  });\\n  folders = {};\\n  for (const folder of folderList) {\\n    folders[folder.id] = { ...folders[folder.id] || {}, ...folder };\\n    if (newFolderId && folder.id === newFolderId) {\\n      folders[folder.id].new = true;\\n      newFolderId = null;\\n    }\\n  }\\n  for (const folder of folderList) {\\n    if (folder.parent_id) {\\n      if (!folders[folder.parent_id]) {\\n        folders[folder.parent_id] = {};\\n      }\\n      folders[folder.parent_id].childrenIds = folders[folder.parent_id].childrenIds ? [...folders[folder.parent_id].childrenIds, folder.id] : [folder.id];\\n      folders[folder.parent_id].childrenIds.sort((a, b) => {\\n        return folders[b].updated_at - folders[a].updated_at;\\n      });\\n    }\\n  }\\n};\\nconst createFolder = async (name = \\"Untitled\\") => {\\n  if (name === \\"\\") {\\n    toast.error($i18n.t(\\"Folder name cannot be empty.\\"));\\n    return;\\n  }\\n  const rootFolders = Object.values(folders).filter((folder) => folder.parent_id === null);\\n  if (rootFolders.find((folder) => folder.name.toLowerCase() === name.toLowerCase())) {\\n    let i = 1;\\n    while (rootFolders.find((folder) => folder.name.toLowerCase() === \`\${name} \${i}\`.toLowerCase())) {\\n      i++;\\n    }\\n    name = \`\${name} \${i}\`;\\n  }\\n  const tempId = uuidv4();\\n  folders = {\\n    ...folders,\\n    tempId: {\\n      id: tempId,\\n      name,\\n      created_at: Date.now(),\\n      updated_at: Date.now()\\n    }\\n  };\\n  const res = await createNewFolder(localStorage.token, name).catch((error) => {\\n    toast.error(\`\${error}\`);\\n    return null;\\n  });\\n  if (res) {\\n    newFolderId = res.id;\\n    await initFolders();\\n  }\\n};\\nconst initChannels = async () => {\\n  await channels.set(await getChannels(localStorage.token));\\n};\\nconst initChatList = async () => {\\n  tags.set(await getAllTags(localStorage.token));\\n  pinnedChats.set(await getPinnedChatList(localStorage.token));\\n  initFolders();\\n  currentChatPage.set(1);\\n  allChatsLoaded = false;\\n  await chats.set(await getChatList(localStorage.token, $currentChatPage));\\n  scrollPaginationEnabled.set(true);\\n};\\nconst loadMoreChats = async () => {\\n  chatListLoading = true;\\n  currentChatPage.set($currentChatPage + 1);\\n  let newChatList = [];\\n  newChatList = await getChatList(localStorage.token, $currentChatPage);\\n  allChatsLoaded = newChatList.length === 0;\\n  await chats.set([...$chats ? $chats : [], ...newChatList]);\\n  chatListLoading = false;\\n};\\nconst importChatHandler = async (items, pinned = false, folderId = null) => {\\n  console.log(\\"importChatHandler\\", items, pinned, folderId);\\n  for (const item of items) {\\n    console.log(item);\\n    if (item.chat) {\\n      await importChat(localStorage.token, item.chat, item?.meta ?? {}, pinned, folderId);\\n    }\\n  }\\n  initChatList();\\n};\\nconst inputFilesHandler = async (files) => {\\n  console.log(files);\\n  for (const file of files) {\\n    const reader = new FileReader();\\n    reader.onload = async (e) => {\\n      const content = e.target.result;\\n      try {\\n        const chatItems = JSON.parse(content);\\n        importChatHandler(chatItems);\\n      } catch {\\n        toast.error($i18n.t(\`Invalid file format.\`));\\n      }\\n    };\\n    reader.readAsText(file);\\n  }\\n};\\nconst tagEventHandler = async (type, tagName, chatId2) => {\\n  console.log(type, tagName, chatId2);\\n  if (type === \\"delete\\") {\\n    initChatList();\\n  } else if (type === \\"add\\") {\\n    initChatList();\\n  }\\n};\\nlet draggedOver = false;\\nconst onDragOver = (e) => {\\n  e.preventDefault();\\n  if (e.dataTransfer?.types?.includes(\\"Files\\")) {\\n    draggedOver = true;\\n  } else {\\n    draggedOver = false;\\n  }\\n};\\nconst onDragLeave = () => {\\n  draggedOver = false;\\n};\\nconst onDrop = async (e) => {\\n  e.preventDefault();\\n  console.log(e);\\n  if (e.dataTransfer?.files) {\\n    const inputFiles = Array.from(e.dataTransfer?.files);\\n    if (inputFiles && inputFiles.length > 0) {\\n      console.log(inputFiles);\\n      inputFilesHandler(inputFiles);\\n    }\\n  }\\n  draggedOver = false;\\n};\\nlet touchstart;\\nlet touchend;\\nfunction checkDirection() {\\n  const screenWidth = window.innerWidth;\\n  const swipeDistance = Math.abs(touchend.screenX - touchstart.screenX);\\n  if (touchstart.clientX < 40 && swipeDistance >= screenWidth / 8) {\\n    if (touchend.screenX < touchstart.screenX) {\\n      showSidebar.set(false);\\n    }\\n    if (touchend.screenX > touchstart.screenX) {\\n      showSidebar.set(true);\\n    }\\n  }\\n}\\nconst onTouchStart = (e) => {\\n  touchstart = e.changedTouches[0];\\n  console.log(touchstart.clientX);\\n};\\nconst onTouchEnd = (e) => {\\n  touchend = e.changedTouches[0];\\n  checkDirection();\\n};\\nconst onKeyDown = (e) => {\\n  if (e.key === \\"Shift\\") {\\n    shiftKey = true;\\n  }\\n};\\nconst onKeyUp = (e) => {\\n  if (e.key === \\"Shift\\") {\\n    shiftKey = false;\\n  }\\n};\\nconst onFocus = () => {\\n};\\nconst onBlur = () => {\\n  shiftKey = false;\\n  selectedChatId = null;\\n};\\nonMount(async () => {\\n  showPinnedChat = localStorage?.showPinnedChat ? localStorage.showPinnedChat === \\"true\\" : true;\\n  mobile.subscribe((value) => {\\n    if ($showSidebar && value) {\\n      showSidebar.set(false);\\n    }\\n    if ($showSidebar && !value) {\\n      const navElement2 = document.getElementsByTagName(\\"nav\\")[0];\\n      if (navElement2) {\\n        navElement2.style[\\"-webkit-app-region\\"] = \\"drag\\";\\n      }\\n    }\\n    if (!$showSidebar && !value) {\\n      showSidebar.set(true);\\n    }\\n  });\\n  showSidebar.set(!$mobile ? localStorage.sidebar === \\"true\\" : false);\\n  showSidebar.subscribe((value) => {\\n    localStorage.sidebar = value;\\n    const navElement2 = document.getElementsByTagName(\\"nav\\")[0];\\n    if (navElement2) {\\n      if ($mobile) {\\n        if (!value) {\\n          navElement2.style[\\"-webkit-app-region\\"] = \\"drag\\";\\n        } else {\\n          navElement2.style[\\"-webkit-app-region\\"] = \\"no-drag\\";\\n        }\\n      } else {\\n        navElement2.style[\\"-webkit-app-region\\"] = \\"drag\\";\\n      }\\n    }\\n  });\\n  await initChannels();\\n  await initChatList();\\n  window.addEventListener(\\"keydown\\", onKeyDown);\\n  window.addEventListener(\\"keyup\\", onKeyUp);\\n  window.addEventListener(\\"touchstart\\", onTouchStart);\\n  window.addEventListener(\\"touchend\\", onTouchEnd);\\n  window.addEventListener(\\"focus\\", onFocus);\\n  window.addEventListener(\\"blur\\", onBlur);\\n  const dropZone = document.getElementById(\\"sidebar\\");\\n  dropZone?.addEventListener(\\"dragover\\", onDragOver);\\n  dropZone?.addEventListener(\\"drop\\", onDrop);\\n  dropZone?.addEventListener(\\"dragleave\\", onDragLeave);\\n});\\nonDestroy(() => {\\n  window.removeEventListener(\\"keydown\\", onKeyDown);\\n  window.removeEventListener(\\"keyup\\", onKeyUp);\\n  window.removeEventListener(\\"touchstart\\", onTouchStart);\\n  window.removeEventListener(\\"touchend\\", onTouchEnd);\\n  window.removeEventListener(\\"focus\\", onFocus);\\n  window.removeEventListener(\\"blur\\", onBlur);\\n  const dropZone = document.getElementById(\\"sidebar\\");\\n  dropZone?.removeEventListener(\\"dragover\\", onDragOver);\\n  dropZone?.removeEventListener(\\"drop\\", onDrop);\\n  dropZone?.removeEventListener(\\"dragleave\\", onDragLeave);\\n});\\n<\/script>\\n\\n<ArchivedChatsModal\\n\\tbind:show={$showArchivedChats}\\n\\tonUpdate={async () => {\\n\\t\\tawait initChatList();\\n\\t}}\\n/>\\n\\n<ChannelModal\\n\\tbind:show={showCreateChannel}\\n\\tonSubmit={async ({ name, access_control }) => {\\n\\t\\tconst res = await createNewChannel(localStorage.token, {\\n\\t\\t\\tname: name,\\n\\t\\t\\taccess_control: access_control\\n\\t\\t}).catch((error) => {\\n\\t\\t\\ttoast.error(\`\${error}\`);\\n\\t\\t\\treturn null;\\n\\t\\t});\\n\\n\\t\\tif (res) {\\n\\t\\t\\t$socket.emit('join-channels', { auth: { token: $user?.token } });\\n\\t\\t\\tawait initChannels();\\n\\t\\t\\tshowCreateChannel = false;\\n\\t\\t}\\n\\t}}\\n/>\\n\\n<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\n{#if $showSidebar}\\n\\t<div\\n\\t\\tclass=\\" {$isApp\\n\\t\\t\\t? ' ml-[4.5rem] md:ml-0'\\n\\t\\t\\t: ''} fixed md:hidden z-40 top-0 right-0 left-0 bottom-0 bg-black/60 w-full min-h-screen h-screen flex justify-center overflow-hidden overscroll-contain\\"\\n\\t\\ton:mousedown={() => {\\n\\t\\t\\tshowSidebar.set(!$showSidebar);\\n\\t\\t}}\\n\\t/>\\n{/if}\\n\\n<SearchModal\\n\\tbind:show={$showSearch}\\n\\tonClose={() => {\\n\\t\\tif ($mobile) {\\n\\t\\t\\tshowSidebar.set(false);\\n\\t\\t}\\n\\t}}\\n/>\\n\\n<div\\n\\tbind:this={navElement}\\n\\tid=\\"sidebar\\"\\n\\tclass=\\"h-screen max-h-[100dvh] min-h-screen select-none {$showSidebar\\n\\t\\t? 'md:relative w-[260px] max-w-[260px]'\\n\\t\\t: '-translate-x-[260px] w-[0px]'} {$isApp\\n\\t\\t? \`ml-[4.5rem] md:ml-0 \`\\n\\t\\t: 'transition-width duration-200 ease-in-out'}  shrink-0 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-200 text-sm fixed z-50 top-0 left-0 overflow-x-hidden\\n        \\"\\n\\tdata-state={$showSidebar}\\n>\\n\\t<div\\n\\t\\tclass=\\"py-2 my-auto flex flex-col justify-between h-screen max-h-[100dvh] w-[260px] overflow-x-hidden z-50 {$showSidebar\\n\\t\\t\\t? ''\\n\\t\\t\\t: 'invisible'}\\"\\n\\t>\\n\\t\\t<div class=\\"px-1.5 flex justify-between space-x-1 text-gray-600 dark:text-gray-400\\">\\n\\t\\t\\t<button\\n\\t\\t\\t\\tclass=\\" cursor-pointer p-[7px] flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition\\"\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tshowSidebar.set(!$showSidebar);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div class=\\" m-auto self-center\\">\\n\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\tstroke-width=\\"2\\"\\n\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"size-5\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\td=\\"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12\\"\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</button>\\n\\n\\t\\t\\t<a\\n\\t\\t\\t\\tid=\\"sidebar-new-chat-button\\"\\n\\t\\t\\t\\tclass=\\"flex justify-between items-center flex-1 rounded-lg px-2 py-1 h-full text-right hover:bg-gray-100 dark:hover:bg-gray-900 transition no-drag-region\\"\\n\\t\\t\\t\\thref=\\"/\\"\\n\\t\\t\\t\\tdraggable=\\"false\\"\\n\\t\\t\\t\\ton:click={async () => {\\n\\t\\t\\t\\t\\tselectedChatId = null;\\n\\t\\t\\t\\t\\tawait goto('/');\\n\\t\\t\\t\\t\\tconst newChatButton = document.getElementById('new-chat-button');\\n\\t\\t\\t\\t\\tsetTimeout(() => {\\n\\t\\t\\t\\t\\t\\tnewChatButton?.click();\\n\\t\\t\\t\\t\\t\\tif ($mobile) {\\n\\t\\t\\t\\t\\t\\t\\tshowSidebar.set(false);\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t}, 0);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div class=\\"flex items-center\\">\\n\\t\\t\\t\\t\\t<div class=\\"self-center mx-1.5\\">\\n\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\tcrossorigin=\\"anonymous\\"\\n\\t\\t\\t\\t\\t\\t\\tsrc=\\"{WEBUI_BASE_URL}/static/favicon.png\\"\\n\\t\\t\\t\\t\\t\\t\\tclass=\\" size-5 -translate-x-1.5 rounded-full\\"\\n\\t\\t\\t\\t\\t\\t\\talt=\\"logo\\"\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\" self-center font-medium text-sm text-gray-850 dark:text-white font-primary\\">\\n\\t\\t\\t\\t\\t\\t{$i18n.t('New Chat')}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t<PencilSquare className=\\" size-5\\" strokeWidth=\\"2\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</a>\\n\\t\\t</div>\\n\\n\\t\\t<!-- {#if $user?.role === 'admin'}\\n\\t\\t\\t<div class=\\"px-1.5 flex justify-center text-gray-800 dark:text-gray-200\\">\\n\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\tclass=\\"grow flex items-center space-x-3 rounded-lg px-2 py-[7px] hover:bg-gray-100 dark:hover:bg-gray-900 transition\\"\\n\\t\\t\\t\\t\\thref=\\"/home\\"\\n\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\tselectedChatId = null;\\n\\t\\t\\t\\t\\t\\tchatId.set('');\\n\\n\\t\\t\\t\\t\\t\\tif ($mobile) {\\n\\t\\t\\t\\t\\t\\t\\tshowSidebar.set(false);\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\tdraggable=\\"false\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<div class=\\"self-center\\">\\n\\t\\t\\t\\t\\t\\t<Home strokeWidth=\\"2\\" className=\\"size-[1.1rem]\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"flex self-center translate-y-[0.5px]\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\" self-center font-medium text-sm font-primary\\">{$i18n.t('Home')}</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t{/if} -->\\n\\n\\t\\t<div class=\\"px-1.5 flex justify-center text-gray-800 dark:text-gray-200\\">\\n\\t\\t\\t<button\\n\\t\\t\\t\\tclass=\\"grow flex items-center space-x-3 rounded-lg px-2 py-[7px] hover:bg-gray-100 dark:hover:bg-gray-900 transition outline-none\\"\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tshowSearch.set(true);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t\\tdraggable=\\"false\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div class=\\"self-center\\">\\n\\t\\t\\t\\t\\t<MagnifyingGlass strokeWidth=\\"2\\" className=\\"size-[1.1rem]\\" />\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"flex self-center translate-y-[0.5px]\\">\\n\\t\\t\\t\\t\\t<div class=\\" self-center font-medium text-sm font-primary\\">{$i18n.t('Search')}</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</button>\\n\\t\\t</div>\\n\\n\\t\\t{#if ($config?.features?.enable_notes ?? false) && ($user?.role === 'admin' || ($user?.permissions?.features?.notes ?? true))}\\n\\t\\t\\t<div class=\\"px-1.5 flex justify-center text-gray-800 dark:text-gray-200\\">\\n\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\tclass=\\"grow flex items-center space-x-3 rounded-lg px-2 py-[7px] hover:bg-gray-100 dark:hover:bg-gray-900 transition\\"\\n\\t\\t\\t\\t\\thref=\\"/notes\\"\\n\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\tselectedChatId = null;\\n\\t\\t\\t\\t\\t\\tchatId.set('');\\n\\n\\t\\t\\t\\t\\t\\tif ($mobile) {\\n\\t\\t\\t\\t\\t\\t\\tshowSidebar.set(false);\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\tdraggable=\\"false\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<div class=\\"self-center\\">\\n\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"size-4\\"\\n\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\twidth=\\"24\\"\\n\\t\\t\\t\\t\\t\\t\\theight=\\"24\\"\\n\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2\\"\\n\\t\\t\\t\\t\\t\\t\\t\\td=\\"M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"flex self-center translate-y-[0.5px]\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\" self-center font-medium text-sm font-primary\\">{$i18n.t('Notes')}</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\n\\t\\t{#if $user?.role === 'admin' || $user?.permissions?.workspace?.models || $user?.permissions?.workspace?.knowledge || $user?.permissions?.workspace?.prompts || $user?.permissions?.workspace?.tools}\\n\\t\\t\\t<div class=\\"px-1.5 flex justify-center text-gray-800 dark:text-gray-200\\">\\n\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\tclass=\\"grow flex items-center space-x-3 rounded-lg px-2 py-[7px] hover:bg-gray-100 dark:hover:bg-gray-900 transition\\"\\n\\t\\t\\t\\t\\thref=\\"/workspace\\"\\n\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\tselectedChatId = null;\\n\\t\\t\\t\\t\\t\\tchatId.set('');\\n\\n\\t\\t\\t\\t\\t\\tif ($mobile) {\\n\\t\\t\\t\\t\\t\\t\\tshowSidebar.set(false);\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\tdraggable=\\"false\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<div class=\\"self-center\\">\\n\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"2\\"\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"size-[1.1rem]\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t\\t\\t\\td=\\"M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"flex self-center translate-y-[0.5px]\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\" self-center font-medium text-sm font-primary\\">{$i18n.t('Workspace')}</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\n\\t\\t<div\\n\\t\\t\\tclass=\\"relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden {$temporaryChatEnabled\\n\\t\\t\\t\\t? 'opacity-20'\\n\\t\\t\\t\\t: ''}\\"\\n\\t\\t>\\n\\t\\t\\t{#if ($models ?? []).length > 0 && ($settings?.pinnedModels ?? []).length > 0}\\n\\t\\t\\t\\t<div class=\\"mt-0.5\\">\\n\\t\\t\\t\\t\\t{#each $settings.pinnedModels as modelId (modelId)}\\n\\t\\t\\t\\t\\t\\t{@const model = $models.find((model) => model.id === modelId)}\\n\\t\\t\\t\\t\\t\\t{#if model}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"px-1.5 flex justify-center text-gray-800 dark:text-gray-200\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"grow flex items-center space-x-2.5 rounded-lg px-2 py-[7px] hover:bg-gray-100 dark:hover:bg-gray-900 transition\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\thref=\\"/?model={modelId}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedChatId = null;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tchatId.set('');\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif ($mobile) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tshowSidebar.set(false);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tdraggable=\\"false\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"self-center shrink-0\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcrossorigin=\\"anonymous\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsrc={model?.info?.meta?.profile_image_url ?? '/static/favicon.png'}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\" size-5 rounded-full -translate-x-[0.5px]\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\talt=\\"logo\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex self-center translate-y-[0.5px]\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center font-medium text-sm font-primary line-clamp-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{model?.name ?? modelId}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\n\\t\\t\\t{#if $config?.features?.enable_channels && ($user?.role === 'admin' || $channels.length > 0)}\\n\\t\\t\\t\\t<Folder\\n\\t\\t\\t\\t\\tclassName=\\"px-2 mt-0.5\\"\\n\\t\\t\\t\\t\\tname={$i18n.t('Channels')}\\n\\t\\t\\t\\t\\tdragAndDrop={false}\\n\\t\\t\\t\\t\\tonAdd={async () => {\\n\\t\\t\\t\\t\\t\\tif ($user?.role === 'admin') {\\n\\t\\t\\t\\t\\t\\t\\tawait tick();\\n\\n\\t\\t\\t\\t\\t\\t\\tsetTimeout(() => {\\n\\t\\t\\t\\t\\t\\t\\t\\tshowCreateChannel = true;\\n\\t\\t\\t\\t\\t\\t\\t}, 0);\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\tonAddLabel={$i18n.t('Create Channel')}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{#each $channels as channel}\\n\\t\\t\\t\\t\\t\\t<ChannelItem\\n\\t\\t\\t\\t\\t\\t\\t{channel}\\n\\t\\t\\t\\t\\t\\t\\tonUpdate={async () => {\\n\\t\\t\\t\\t\\t\\t\\t\\tawait initChannels();\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</Folder>\\n\\t\\t\\t{/if}\\n\\n\\t\\t\\t<Folder\\n\\t\\t\\t\\tclassName=\\"px-2 mt-0.5\\"\\n\\t\\t\\t\\tname={$i18n.t('Chats')}\\n\\t\\t\\t\\tonAdd={() => {\\n\\t\\t\\t\\t\\tcreateFolder();\\n\\t\\t\\t\\t}}\\n\\t\\t\\t\\tonAddLabel={$i18n.t('New Folder')}\\n\\t\\t\\t\\ton:import={(e) => {\\n\\t\\t\\t\\t\\timportChatHandler(e.detail);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t\\ton:drop={async (e) => {\\n\\t\\t\\t\\t\\tconst { type, id, item } = e.detail;\\n\\n\\t\\t\\t\\t\\tif (type === 'chat') {\\n\\t\\t\\t\\t\\t\\tlet chat = await getChatById(localStorage.token, id).catch((error) => {\\n\\t\\t\\t\\t\\t\\t\\treturn null;\\n\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\tif (!chat && item) {\\n\\t\\t\\t\\t\\t\\t\\tchat = await importChat(localStorage.token, item.chat, item?.meta ?? {});\\n\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\tif (chat) {\\n\\t\\t\\t\\t\\t\\t\\tconsole.log(chat);\\n\\t\\t\\t\\t\\t\\t\\tif (chat.folder_id) {\\n\\t\\t\\t\\t\\t\\t\\t\\tconst res = await updateChatFolderIdById(localStorage.token, chat.id, null).catch(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t(error) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttoast.error(\`\${error}\`);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\treturn null;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t);\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\tif (chat.pinned) {\\n\\t\\t\\t\\t\\t\\t\\t\\tconst res = await toggleChatPinnedStatusById(localStorage.token, chat.id);\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\tinitChatList();\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t} else if (type === 'folder') {\\n\\t\\t\\t\\t\\t\\tif (folders[id].parent_id === null) {\\n\\t\\t\\t\\t\\t\\t\\treturn;\\n\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\tconst res = await updateFolderParentIdById(localStorage.token, id, null).catch(\\n\\t\\t\\t\\t\\t\\t\\t(error) => {\\n\\t\\t\\t\\t\\t\\t\\t\\ttoast.error(\`\${error}\`);\\n\\t\\t\\t\\t\\t\\t\\t\\treturn null;\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t);\\n\\n\\t\\t\\t\\t\\t\\tif (res) {\\n\\t\\t\\t\\t\\t\\t\\tawait initFolders();\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{#if $temporaryChatEnabled}\\n\\t\\t\\t\\t\\t<div class=\\"absolute z-40 w-full h-full flex justify-center\\"></div>\\n\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t{#if $pinnedChats.length > 0}\\n\\t\\t\\t\\t\\t<div class=\\"flex flex-col space-y-1 rounded-xl\\">\\n\\t\\t\\t\\t\\t\\t<Folder\\n\\t\\t\\t\\t\\t\\t\\tclassName=\\"\\"\\n\\t\\t\\t\\t\\t\\t\\tbind:open={showPinnedChat}\\n\\t\\t\\t\\t\\t\\t\\ton:change={(e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\tlocalStorage.setItem('showPinnedChat', e.detail);\\n\\t\\t\\t\\t\\t\\t\\t\\tconsole.log(e.detail);\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\ton:import={(e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\timportChatHandler(e.detail, true);\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\ton:drop={async (e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\tconst { type, id, item } = e.detail;\\n\\n\\t\\t\\t\\t\\t\\t\\t\\tif (type === 'chat') {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tlet chat = await getChatById(localStorage.token, id).catch((error) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\treturn null;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tif (!chat && item) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tchat = await importChat(localStorage.token, item.chat, item?.meta ?? {});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tif (chat) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconsole.log(chat);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (chat.folder_id) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst res = await updateChatFolderIdById(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tlocalStorage.token,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tchat.id,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tnull\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t).catch((error) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttoast.error(\`\${error}\`);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\treturn null;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (!chat.pinned) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst res = await toggleChatPinnedStatusById(localStorage.token, chat.id);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tinitChatList();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\tname={$i18n.t('Pinned')}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"ml-3 pl-1 mt-[1px] flex flex-col overflow-y-auto scrollbar-hidden border-s border-gray-100 dark:border-gray-900\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{#each $pinnedChats as chat, idx (\`pinned-chat-\${chat?.id ?? idx}\`)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<ChatItem\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclassName=\\"\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid={chat.id}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttitle={chat.title}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{shiftKey}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tselected={selectedChatId === chat.id}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:select={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedChatId = chat.id;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:unselect={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedChatId = null;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:change={async () => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tinitChatList();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:tag={(e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst { type, name } = e.detail;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttagEventHandler(type, name, chat.id);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Folder>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t{#if folders}\\n\\t\\t\\t\\t\\t<Folders\\n\\t\\t\\t\\t\\t\\t{folders}\\n\\t\\t\\t\\t\\t\\ton:import={(e) => {\\n\\t\\t\\t\\t\\t\\t\\tconst { folderId, items } = e.detail;\\n\\t\\t\\t\\t\\t\\t\\timportChatHandler(items, false, folderId);\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\ton:update={async (e) => {\\n\\t\\t\\t\\t\\t\\t\\tinitChatList();\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\ton:change={async () => {\\n\\t\\t\\t\\t\\t\\t\\tinitChatList();\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t<div class=\\" flex-1 flex flex-col overflow-y-auto scrollbar-hidden\\">\\n\\t\\t\\t\\t\\t<div class=\\"pt-1.5\\">\\n\\t\\t\\t\\t\\t\\t{#if $chats}\\n\\t\\t\\t\\t\\t\\t\\t{#each $chats as chat, idx (\`chat-\${chat?.id ?? idx}\`)}\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if idx === 0 || (idx > 0 && chat.time_range !== $chats[idx - 1].time_range)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-full pl-2.5 text-xs text-gray-500 dark:text-gray-500 font-medium {idx ===\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t0\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'pt-5'} pb-1.5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t(chat.time_range)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- localisation keys for time_range to be recognized from the i18next parser (so they don't get automatically removed):\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Today')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Yesterday')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Previous 7 days')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Previous 30 days')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('January')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('February')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('March')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('April')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('May')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('June')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('July')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('August')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('September')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('October')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('November')}\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('December')}\\n\\t\\t\\t\\t\\t\\t\\t-->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<ChatItem\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclassName=\\"\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tid={chat.id}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttitle={chat.title}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{shiftKey}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselected={selectedChatId === chat.id}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:select={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedChatId = chat.id;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:unselect={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedChatId = null;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:change={async () => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tinitChatList();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:tag={(e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst { type, name } = e.detail;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttagEventHandler(type, name, chat.id);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\n\\t\\t\\t\\t\\t\\t\\t{#if $scrollPaginationEnabled && !allChatsLoaded}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loader\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:visible={(e) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (!chatListLoading) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tloadMoreChats();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Spinner className=\\" size-4\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" \\">Loading...</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</Loader>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Spinner className=\\" size-4\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" \\">Loading...</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Folder>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"px-2\\">\\n\\t\\t\\t<div class=\\"flex flex-col font-primary\\">\\n\\t\\t\\t\\t{#if $user !== undefined && $user !== null}\\n\\t\\t\\t\\t\\t<UserMenu\\n\\t\\t\\t\\t\\t\\trole={$user?.role}\\n\\t\\t\\t\\t\\t\\ton:show={(e) => {\\n\\t\\t\\t\\t\\t\\t\\tif (e.detail === 'archived-chat') {\\n\\t\\t\\t\\t\\t\\t\\t\\tshowArchivedChats.set(true);\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\" flex items-center rounded-xl py-2.5 px-2.5 w-full hover:bg-gray-100 dark:hover:bg-gray-900 transition\\"\\n\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\tshowDropdown = !showDropdown;\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-3\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tsrc={$user?.profile_image_url}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\" max-w-[30px] object-cover rounded-full\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\talt=\\"User profile\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center font-medium\\">{$user?.name}</div>\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t</UserMenu>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.scrollbar-hidden:active::-webkit-scrollbar-thumb,\\n\\t.scrollbar-hidden:focus::-webkit-scrollbar-thumb,\\n\\t.scrollbar-hidden:hover::-webkit-scrollbar-thumb {\\n\\t\\tvisibility: visible;\\n\\t}\\n\\t.scrollbar-hidden::-webkit-scrollbar-thumb {\\n\\t\\tvisibility: hidden;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA63BC,gCAAiB,OAAO,yBAAyB,CACjD,gCAAiB,MAAM,yBAAyB,CAChD,gCAAiB,MAAM,yBAA0B,CAChD,UAAU,CAAE,OACb,CACA,gCAAiB,yBAA0B,CAC1C,UAAU,CAAE,MACb"}`
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mobile, $$unsubscribe_mobile;
  let $showSidebar, $$unsubscribe_showSidebar;
  let $i18n, $$unsubscribe_i18n;
  let $chats, $$unsubscribe_chats;
  let $currentChatPage, $$unsubscribe_currentChatPage;
  let $showArchivedChats, $$unsubscribe_showArchivedChats;
  let $socket, $$unsubscribe_socket;
  let $user, $$unsubscribe_user;
  let $isApp, $$unsubscribe_isApp;
  let $showSearch, $$unsubscribe_showSearch;
  let $config, $$unsubscribe_config;
  let $temporaryChatEnabled, $$unsubscribe_temporaryChatEnabled;
  let $models, $$unsubscribe_models;
  let $settings, $$unsubscribe_settings;
  let $channels, $$unsubscribe_channels;
  let $pinnedChats, $$unsubscribe_pinnedChats;
  let $scrollPaginationEnabled, $$unsubscribe_scrollPaginationEnabled;
  $$unsubscribe_mobile = subscribe(mobile, (value) => $mobile = value);
  $$unsubscribe_showSidebar = subscribe(showSidebar, (value) => $showSidebar = value);
  $$unsubscribe_chats = subscribe(chats, (value) => $chats = value);
  $$unsubscribe_currentChatPage = subscribe(currentChatPage, (value) => $currentChatPage = value);
  $$unsubscribe_showArchivedChats = subscribe(showArchivedChats, (value) => $showArchivedChats = value);
  $$unsubscribe_socket = subscribe(socket, (value) => $socket = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_isApp = subscribe(isApp, (value) => $isApp = value);
  $$unsubscribe_showSearch = subscribe(showSearch, (value) => $showSearch = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$unsubscribe_temporaryChatEnabled = subscribe(temporaryChatEnabled, (value) => $temporaryChatEnabled = value);
  $$unsubscribe_models = subscribe(models, (value) => $models = value);
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_channels = subscribe(channels, (value) => $channels = value);
  $$unsubscribe_pinnedChats = subscribe(pinnedChats, (value) => $pinnedChats = value);
  $$unsubscribe_scrollPaginationEnabled = subscribe(scrollPaginationEnabled, (value) => $scrollPaginationEnabled = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let navElement;
  let shiftKey = false;
  let selectedChatId = null;
  let showPinnedChat = true;
  let showCreateChannel = false;
  let allChatsLoaded = false;
  let folders = {};
  let newFolderId = null;
  const initFolders = async () => {
    const folderList = await getFolders(localStorage.token).catch((error) => {
      toast.error(`${error}`);
      return [];
    });
    folders = {};
    for (const folder of folderList) {
      folders[folder.id] = { ...folders[folder.id] || {}, ...folder };
      if (newFolderId && folder.id === newFolderId) {
        folders[folder.id].new = true;
        newFolderId = null;
      }
    }
    for (const folder of folderList) {
      if (folder.parent_id) {
        if (!folders[folder.parent_id]) {
          folders[folder.parent_id] = {};
        }
        folders[folder.parent_id].childrenIds = folders[folder.parent_id].childrenIds ? [...folders[folder.parent_id].childrenIds, folder.id] : [folder.id];
        folders[folder.parent_id].childrenIds.sort((a, b) => {
          return folders[b].updated_at - folders[a].updated_at;
        });
      }
    }
  };
  const createFolder = async (name = "Untitled") => {
    if (name === "") {
      toast.error($i18n.t("Folder name cannot be empty."));
      return;
    }
    const rootFolders = Object.values(folders).filter((folder) => folder.parent_id === null);
    if (rootFolders.find((folder) => folder.name.toLowerCase() === name.toLowerCase())) {
      let i = 1;
      while (rootFolders.find((folder) => folder.name.toLowerCase() === `${name} ${i}`.toLowerCase())) {
        i++;
      }
      name = `${name} ${i}`;
    }
    const tempId = v4();
    folders = {
      ...folders,
      tempId: {
        id: tempId,
        name,
        created_at: Date.now(),
        updated_at: Date.now()
      }
    };
    const res = await createNewFolder(localStorage.token, name).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      newFolderId = res.id;
      await initFolders();
    }
  };
  const initChannels = async () => {
    await channels.set(await getChannels(localStorage.token));
  };
  const initChatList = async () => {
    tags.set(await getAllTags(localStorage.token));
    pinnedChats.set(await getPinnedChatList(localStorage.token));
    initFolders();
    currentChatPage.set(1);
    allChatsLoaded = false;
    await chats.set(await getChatList(localStorage.token, $currentChatPage));
    scrollPaginationEnabled.set(true);
  };
  const importChatHandler = async (items, pinned = false, folderId = null) => {
    console.log("importChatHandler", items, pinned, folderId);
    for (const item of items) {
      console.log(item);
      if (item.chat) {
        await importChat(localStorage.token, item.chat, item?.meta ?? {}, pinned, folderId);
      }
    }
    initChatList();
  };
  const inputFilesHandler = async (files) => {
    console.log(files);
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const content = e.target.result;
        try {
          const chatItems = JSON.parse(content);
          importChatHandler(chatItems);
        } catch {
          toast.error($i18n.t(`Invalid file format.`));
        }
      };
      reader.readAsText(file);
    }
  };
  const onDragOver = (e) => {
    e.preventDefault();
    if (e.dataTransfer?.types?.includes("Files")) ;
  };
  const onDragLeave = () => {
  };
  const onDrop = async (e) => {
    e.preventDefault();
    console.log(e);
    if (e.dataTransfer?.files) {
      const inputFiles = Array.from(e.dataTransfer?.files);
      if (inputFiles && inputFiles.length > 0) {
        console.log(inputFiles);
        inputFilesHandler(inputFiles);
      }
    }
  };
  let touchstart;
  let touchend;
  function checkDirection() {
    const screenWidth = window.innerWidth;
    const swipeDistance = Math.abs(touchend.screenX - touchstart.screenX);
    if (touchstart.clientX < 40 && swipeDistance >= screenWidth / 8) {
      if (touchend.screenX < touchstart.screenX) {
        showSidebar.set(false);
      }
      if (touchend.screenX > touchstart.screenX) {
        showSidebar.set(true);
      }
    }
  }
  const onTouchStart = (e) => {
    touchstart = e.changedTouches[0];
    console.log(touchstart.clientX);
  };
  const onTouchEnd = (e) => {
    touchend = e.changedTouches[0];
    checkDirection();
  };
  const onKeyDown = (e) => {
    if (e.key === "Shift") {
      shiftKey = true;
    }
  };
  const onKeyUp = (e) => {
    if (e.key === "Shift") {
      shiftKey = false;
    }
  };
  const onFocus = () => {
  };
  const onBlur = () => {
    shiftKey = false;
    selectedChatId = null;
  };
  onDestroy(() => {
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("focus", onFocus);
    window.removeEventListener("blur", onBlur);
    const dropZone = document.getElementById("sidebar");
    dropZone?.removeEventListener("dragover", onDragOver);
    dropZone?.removeEventListener("drop", onDrop);
    dropZone?.removeEventListener("dragleave", onDragLeave);
  });
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ArchivedChatsModal, "ArchivedChatsModal").$$render(
      $$result,
      {
        onUpdate: async () => {
          await initChatList();
        },
        show: $showArchivedChats
      },
      {
        show: ($$value) => {
          $showArchivedChats = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ChannelModal, "ChannelModal").$$render(
      $$result,
      {
        onSubmit: async ({ name, access_control }) => {
          const res = await createNewChannel(localStorage.token, { name, access_control }).catch((error) => {
            toast.error(`${error}`);
            return null;
          });
          if (res) {
            $socket.emit("join-channels", { auth: { token: $user?.token } });
            await initChannels();
            showCreateChannel = false;
          }
        },
        show: showCreateChannel
      },
      {
        show: ($$value) => {
          showCreateChannel = $$value;
          $$settled = false;
        }
      },
      {}
    )}  ${$showSidebar ? `<div class="${"" + escape($isApp ? " ml-[4.5rem] md:ml-0" : "", true) + " fixed md:hidden z-40 top-0 right-0 left-0 bottom-0 bg-black/60 w-full min-h-screen h-screen flex justify-center overflow-hidden overscroll-contain"}"></div>` : ``} ${validate_component(SearchModal, "SearchModal").$$render(
      $$result,
      {
        onClose: () => {
          if ($mobile) {
            showSidebar.set(false);
          }
        },
        show: $showSearch
      },
      {
        show: ($$value) => {
          $showSearch = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div id="sidebar" class="${"h-screen max-h-[100dvh] min-h-screen select-none " + escape(
      $showSidebar ? "md:relative w-[260px] max-w-[260px]" : "-translate-x-[260px] w-[0px]",
      true
    ) + " " + escape(
      $isApp ? `ml-[4.5rem] md:ml-0 ` : "transition-width duration-200 ease-in-out",
      true
    ) + " shrink-0 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-200 text-sm fixed z-50 top-0 left-0 overflow-x-hidden svelte-141e0sl"}"${add_attribute("data-state", $showSidebar, 0)}${add_attribute("this", navElement, 0)}><div class="${"py-2 my-auto flex flex-col justify-between h-screen max-h-[100dvh] w-[260px] overflow-x-hidden z-50 " + escape($showSidebar ? "" : "invisible", true)}"><div class="px-1.5 flex justify-between space-x-1 text-gray-600 dark:text-gray-400"><button class="cursor-pointer p-[7px] flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition" data-svelte-h="svelte-uwd94y"><div class="m-auto self-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path></svg></div></button> <a id="sidebar-new-chat-button" class="flex justify-between items-center flex-1 rounded-lg px-2 py-1 h-full text-right hover:bg-gray-100 dark:hover:bg-gray-900 transition no-drag-region" href="/" draggable="false"><div class="flex items-center"><div class="self-center mx-1.5" data-svelte-h="svelte-irsu7d"><img crossorigin="anonymous" src="${escape(WEBUI_BASE_URL, true) + "/static/favicon.png"}" class="size-5 -translate-x-1.5 rounded-full" alt="logo"></div> <div class="self-center font-medium text-sm text-gray-850 dark:text-white font-primary">${escape($i18n.t("New Chat"))}</div></div> <div>${validate_component(PencilSquare, "PencilSquare").$$render($$result, { className: " size-5", strokeWidth: "2" }, {}, {})}</div></a></div>  <div class="px-1.5 flex justify-center text-gray-800 dark:text-gray-200"><button class="grow flex items-center space-x-3 rounded-lg px-2 py-[7px] hover:bg-gray-100 dark:hover:bg-gray-900 transition outline-none" draggable="false"><div class="self-center">${validate_component(MagnifyingGlass, "MagnifyingGlass").$$render(
      $$result,
      {
        strokeWidth: "2",
        className: "size-[1.1rem]"
      },
      {},
      {}
    )}</div> <div class="flex self-center translate-y-[0.5px]"><div class="self-center font-medium text-sm font-primary">${escape($i18n.t("Search"))}</div></div></button></div> ${($config?.features?.enable_notes ?? false) && ($user?.role === "admin" || ($user?.permissions?.features?.notes ?? true)) ? `<div class="px-1.5 flex justify-center text-gray-800 dark:text-gray-200"><a class="grow flex items-center space-x-3 rounded-lg px-2 py-[7px] hover:bg-gray-100 dark:hover:bg-gray-900 transition" href="/notes" draggable="false"><div class="self-center" data-svelte-h="svelte-653rpx"><svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"></path></svg></div> <div class="flex self-center translate-y-[0.5px]"><div class="self-center font-medium text-sm font-primary">${escape($i18n.t("Notes"))}</div></div></a></div>` : ``} ${$user?.role === "admin" || $user?.permissions?.workspace?.models || $user?.permissions?.workspace?.knowledge || $user?.permissions?.workspace?.prompts || $user?.permissions?.workspace?.tools ? `<div class="px-1.5 flex justify-center text-gray-800 dark:text-gray-200"><a class="grow flex items-center space-x-3 rounded-lg px-2 py-[7px] hover:bg-gray-100 dark:hover:bg-gray-900 transition" href="/workspace" draggable="false"><div class="self-center" data-svelte-h="svelte-zod9jr"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-[1.1rem]"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg></div> <div class="flex self-center translate-y-[0.5px]"><div class="self-center font-medium text-sm font-primary">${escape($i18n.t("Workspace"))}</div></div></a></div>` : ``} <div class="${"relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden " + escape($temporaryChatEnabled ? "opacity-20" : "", true)}">${($models ?? []).length > 0 && ($settings?.pinnedModels ?? []).length > 0 ? `<div class="mt-0.5">${each($settings.pinnedModels, (modelId) => {
      let model = $models.find((model2) => model2.id === modelId);
      return ` ${model ? `<div class="px-1.5 flex justify-center text-gray-800 dark:text-gray-200"><a class="grow flex items-center space-x-2.5 rounded-lg px-2 py-[7px] hover:bg-gray-100 dark:hover:bg-gray-900 transition" href="${"/?model=" + escape(modelId, true)}" draggable="false"><div class="self-center shrink-0"><img crossorigin="anonymous"${add_attribute("src", model?.info?.meta?.profile_image_url ?? "/static/favicon.png", 0)} class="size-5 rounded-full -translate-x-[0.5px]" alt="logo"></div> <div class="flex self-center translate-y-[0.5px]"><div class="self-center font-medium text-sm font-primary line-clamp-1">${escape(model?.name ?? modelId)}</div> </div></a> </div>` : ``}`;
    })}</div>` : ``} ${$config?.features?.enable_channels && ($user?.role === "admin" || $channels.length > 0) ? `${validate_component(Folder, "Folder").$$render(
      $$result,
      {
        className: "px-2 mt-0.5",
        name: $i18n.t("Channels"),
        dragAndDrop: false,
        onAdd: async () => {
          if ($user?.role === "admin") {
            await tick();
            setTimeout(
              () => {
                showCreateChannel = true;
              },
              0
            );
          }
        },
        onAddLabel: $i18n.t("Create Channel")
      },
      {},
      {
        default: () => {
          return `${each($channels, (channel) => {
            return `${validate_component(ChannelItem, "ChannelItem").$$render(
              $$result,
              {
                channel,
                onUpdate: async () => {
                  await initChannels();
                }
              },
              {},
              {}
            )}`;
          })}`;
        }
      }
    )}` : ``} ${validate_component(Folder, "Folder").$$render(
      $$result,
      {
        className: "px-2 mt-0.5",
        name: $i18n.t("Chats"),
        onAdd: () => {
          createFolder();
        },
        onAddLabel: $i18n.t("New Folder")
      },
      {},
      {
        default: () => {
          return `${$temporaryChatEnabled ? `<div class="absolute z-40 w-full h-full flex justify-center"></div>` : ``} ${$pinnedChats.length > 0 ? `<div class="flex flex-col space-y-1 rounded-xl">${validate_component(Folder, "Folder").$$render(
            $$result,
            {
              className: "",
              name: $i18n.t("Pinned"),
              open: showPinnedChat
            },
            {
              open: ($$value) => {
                showPinnedChat = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div class="ml-3 pl-1 mt-[1px] flex flex-col overflow-y-auto scrollbar-hidden border-s border-gray-100 dark:border-gray-900 svelte-141e0sl">${each($pinnedChats, (chat, idx) => {
                  return `${validate_component(ChatItem, "ChatItem").$$render(
                    $$result,
                    {
                      className: "",
                      id: chat.id,
                      title: chat.title,
                      shiftKey,
                      selected: selectedChatId === chat.id
                    },
                    {},
                    {}
                  )}`;
                })}</div>`;
              }
            }
          )}</div>` : ``} ${folders ? `${validate_component(Folders, "Folders").$$render($$result, { folders }, {}, {})}` : ``} <div class="flex-1 flex flex-col overflow-y-auto scrollbar-hidden svelte-141e0sl"><div class="pt-1.5">${$chats ? `${each($chats, (chat, idx) => {
            return `${idx === 0 || idx > 0 && chat.time_range !== $chats[idx - 1].time_range ? `<div class="${"w-full pl-2.5 text-xs text-gray-500 dark:text-gray-500 font-medium " + escape(idx === 0 ? "" : "pt-5", true) + " pb-1.5"}">${escape($i18n.t(chat.time_range))}  </div>` : ``} ${validate_component(ChatItem, "ChatItem").$$render(
              $$result,
              {
                className: "",
                id: chat.id,
                title: chat.title,
                shiftKey,
                selected: selectedChatId === chat.id
              },
              {},
              {}
            )}`;
          })} ${$scrollPaginationEnabled && !allChatsLoaded ? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2">${validate_component(Spinner, "Spinner").$$render($$result, { className: " size-4" }, {}, {})} <div class="" data-svelte-h="svelte-17uns3n">Loading...</div></div>`;
            }
          })}` : ``}` : `<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2">${validate_component(Spinner, "Spinner").$$render($$result, { className: " size-4" }, {}, {})} <div class="" data-svelte-h="svelte-17uns3n">Loading...</div></div>`}</div></div>`;
        }
      }
    )}</div> <div class="px-2"><div class="flex flex-col font-primary">${$user !== void 0 && $user !== null ? `${validate_component(UserMenu, "UserMenu").$$render($$result, { role: $user?.role }, {}, {
      default: () => {
        return `<button class="flex items-center rounded-xl py-2.5 px-2.5 w-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><div class="self-center mr-3"><img${add_attribute("src", $user?.profile_image_url, 0)} class="max-w-[30px] object-cover rounded-full" alt="User profile"></div> <div class="self-center font-medium">${escape($user?.name)}</div></button>`;
      }
    })}` : ``}</div></div></div> </div>`;
  } while (!$$settled);
  $$unsubscribe_mobile();
  $$unsubscribe_showSidebar();
  $$unsubscribe_i18n();
  $$unsubscribe_chats();
  $$unsubscribe_currentChatPage();
  $$unsubscribe_showArchivedChats();
  $$unsubscribe_socket();
  $$unsubscribe_user();
  $$unsubscribe_isApp();
  $$unsubscribe_showSearch();
  $$unsubscribe_config();
  $$unsubscribe_temporaryChatEnabled();
  $$unsubscribe_models();
  $$unsubscribe_settings();
  $$unsubscribe_channels();
  $$unsubscribe_pinnedChats();
  $$unsubscribe_scrollPaginationEnabled();
  return $$rendered;
});
const General = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_settings;
  let $i18n, $$unsubscribe_i18n;
  let $user, $$unsubscribe_user;
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { saveSettings } = $$props;
  let { getModels: getModels2 } = $$props;
  let languages = [];
  $i18n.language;
  let system = "";
  if ($$props.saveSettings === void 0 && $$bindings.saveSettings && saveSettings !== void 0) $$bindings.saveSettings(saveSettings);
  if ($$props.getModels === void 0 && $$bindings.getModels && getModels2 !== void 0) $$bindings.getModels(getModels2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-col h-full justify-between text-sm"><div class="overflow-y-scroll max-h-[28rem] lg:max-h-full"><div class=""><div class="mb-1 text-sm font-medium">${escape($i18n.t("WebUI Settings"))}</div> <div class="flex w-full justify-between"><div class="self-center text-xs font-medium">${escape($i18n.t("Theme"))}</div> <div class="flex items-center relative"><select class="dark:bg-gray-900 w-fit pr-8 rounded-sm py-2 px-2 text-xs bg-transparent outline-hidden text-right" placeholder="Select a theme"><option value="system">⚙️ ${escape($i18n.t("System"))}</option><option value="dark">🌑 ${escape($i18n.t("Dark"))}</option><option value="oled-dark">🌃 ${escape($i18n.t("OLED Dark"))}</option><option value="light">☀️ ${escape($i18n.t("Light"))}</option><option value="her" data-svelte-h="svelte-188ouwx">🌷 Her</option></select></div></div> <div class="flex w-full justify-between"><div class="self-center text-xs font-medium">${escape($i18n.t("Language"))}</div> <div class="flex items-center relative"><select class="dark:bg-gray-900 w-fit pr-8 rounded-sm py-2 px-2 text-xs bg-transparent outline-hidden text-right" placeholder="Select a language">${each(languages, (language) => {
      return `<option${add_attribute("value", language["code"], 0)}>${escape(language["title"])}</option>`;
    })}</select></div></div> ${$i18n.language === "en-US" ? `<div class="mb-2 text-xs text-gray-400 dark:text-gray-500" data-svelte-h="svelte-3hlwzt">Couldn&#39;t find your language?
					<a class="text-gray-300 font-medium underline" href="https://github.com/open-webui/open-webui/blob/main/docs/CONTRIBUTING.md#-translations-and-internationalization" target="_blank">Help us translate Open WebUI!</a></div>` : ``} <div><div class="py-0.5 flex w-full justify-between"><div class="self-center text-xs font-medium">${escape($i18n.t("Notifications"))}</div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button">${`<span class="ml-2 self-center">${escape($i18n.t("Off"))}</span>`}</button></div></div></div> ${$user?.role === "admin" || $user?.permissions.chat?.controls ? `<hr class="border-gray-50 dark:border-gray-850 my-3"> <div><div class="my-2.5 text-sm font-medium">${escape($i18n.t("System Prompt"))}</div> ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        className: "w-full text-sm bg-white dark:text-gray-300 dark:bg-gray-900 outline-hidden resize-none",
        rows: "4",
        placeholder: $i18n.t("Enter system prompt here"),
        value: system
      },
      {
        value: ($$value) => {
          system = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="mt-2 space-y-3 pr-1.5"><div class="flex justify-between items-center text-sm"><div class="font-medium">${escape($i18n.t("Advanced Parameters"))}</div> <button class="text-xs font-medium text-gray-500" type="button">${escape($i18n.t("Show"))}</button></div> ${``}</div>` : ``}</div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full">${escape($i18n.t("Save"))}</button></div></div>`;
  } while (!$$settled);
  $$unsubscribe_settings();
  $$unsubscribe_i18n();
  $$unsubscribe_user();
  return $$rendered;
});
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${add_attribute("class", className, 0)}><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd"></path></svg>`;
});
const css$2 = {
  code: "input.svelte-187gxci::-webkit-outer-spin-button,input.svelte-187gxci::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.tabs.svelte-187gxci::-webkit-scrollbar{display:none}.tabs.svelte-187gxci{-ms-overflow-style:none;scrollbar-width:none}",
  map: `{"version":3,"file":"SettingsModal.svelte","sources":["SettingsModal.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { getContext, tick } from \\"svelte\\";\\nimport { toast } from \\"svelte-sonner\\";\\nimport { config, models, settings, user } from \\"$lib/stores\\";\\nimport { updateUserSettings } from \\"$lib/apis/users\\";\\nimport { getModels as _getModels } from \\"$lib/apis\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport Modal from \\"../common/Modal.svelte\\";\\nimport Account from \\"./Settings/Account.svelte\\";\\nimport About from \\"./Settings/About.svelte\\";\\nimport General from \\"./Settings/General.svelte\\";\\nimport Interface from \\"./Settings/Interface.svelte\\";\\nimport Audio from \\"./Settings/Audio.svelte\\";\\nimport Chats from \\"./Settings/Chats.svelte\\";\\nimport User from \\"../icons/User.svelte\\";\\nimport Personalization from \\"./Settings/Personalization.svelte\\";\\nimport Search from \\"../icons/Search.svelte\\";\\nimport XMark from \\"../icons/XMark.svelte\\";\\nimport Connections from \\"./Settings/Connections.svelte\\";\\nimport Tools from \\"./Settings/Tools.svelte\\";\\nconst i18n = getContext(\\"i18n\\");\\nexport let show = false;\\nconst searchData = [\\n  {\\n    id: \\"general\\",\\n    title: \\"General\\",\\n    keywords: [\\n      \\"advancedparams\\",\\n      \\"advancedparameters\\",\\n      \\"advanced params\\",\\n      \\"advanced parameters\\",\\n      \\"configuration\\",\\n      \\"defaultparameters\\",\\n      \\"default parameters\\",\\n      \\"defaultsettings\\",\\n      \\"default settings\\",\\n      \\"general\\",\\n      \\"keepalive\\",\\n      \\"keep alive\\",\\n      \\"languages\\",\\n      \\"notifications\\",\\n      \\"requestmode\\",\\n      \\"request mode\\",\\n      \\"systemparameters\\",\\n      \\"system parameters\\",\\n      \\"systemprompt\\",\\n      \\"system prompt\\",\\n      \\"systemsettings\\",\\n      \\"system settings\\",\\n      \\"theme\\",\\n      \\"translate\\",\\n      \\"webuisettings\\",\\n      \\"webui settings\\"\\n    ]\\n  },\\n  {\\n    id: \\"interface\\",\\n    title: \\"Interface\\",\\n    keywords: [\\n      \\"allow user location\\",\\n      \\"allow voice interruption in call\\",\\n      \\"allowuserlocation\\",\\n      \\"allowvoiceinterruptionincall\\",\\n      \\"always collapse codeblocks\\",\\n      \\"always collapse code blocks\\",\\n      \\"always expand details\\",\\n      \\"always on web search\\",\\n      \\"always play notification sound\\",\\n      \\"alwayscollapsecodeblocks\\",\\n      \\"alwaysexpanddetails\\",\\n      \\"alwaysonwebsearch\\",\\n      \\"alwaysplaynotificationsound\\",\\n      \\"android\\",\\n      \\"auto chat tags\\",\\n      \\"auto copy response to clipboard\\",\\n      \\"auto title\\",\\n      \\"autochattags\\",\\n      \\"autocopyresponsetoclipboard\\",\\n      \\"autotitle\\",\\n      \\"beta\\",\\n      \\"call\\",\\n      \\"chat background image\\",\\n      \\"chat bubble ui\\",\\n      \\"chat direction\\",\\n      \\"chat tags autogen\\",\\n      \\"chat tags autogeneration\\",\\n      \\"chat ui\\",\\n      \\"chatbackgroundimage\\",\\n      \\"chatbubbleui\\",\\n      \\"chatdirection\\",\\n      \\"chat tags autogeneration\\",\\n      \\"chattagsautogeneration\\",\\n      \\"chatui\\",\\n      \\"copy formatted text\\",\\n      \\"copyformattedtext\\",\\n      \\"default model\\",\\n      \\"defaultmodel\\",\\n      \\"design\\",\\n      \\"detect artifacts automatically\\",\\n      \\"detectartifactsautomatically\\",\\n      \\"display emoji in call\\",\\n      \\"display username\\",\\n      \\"displayemojiincall\\",\\n      \\"displayusername\\",\\n      \\"enter key behavior\\",\\n      \\"enterkeybehavior\\",\\n      \\"expand mode\\",\\n      \\"expandmode\\",\\n      \\"file\\",\\n      \\"followup autogeneration\\",\\n      \\"followupautogeneration\\",\\n      \\"fullscreen\\",\\n      \\"fullwidthmode\\",\\n      \\"full width mode\\",\\n      \\"haptic feedback\\",\\n      \\"hapticfeedback\\",\\n      \\"high contrast mode\\",\\n      \\"highcontrastmode\\",\\n      \\"iframe sandbox allow forms\\",\\n      \\"iframe sandbox allow same origin\\",\\n      \\"iframesandboxallowforms\\",\\n      \\"iframesandboxallowsameorigin\\",\\n      \\"imagecompression\\",\\n      \\"image compression\\",\\n      \\"imagemaxcompressionsize\\",\\n      \\"image max compression size\\",\\n      \\"interface customization\\",\\n      \\"interface options\\",\\n      \\"interfacecustomization\\",\\n      \\"interfaceoptions\\",\\n      \\"landing page mode\\",\\n      \\"landingpagemode\\",\\n      \\"layout\\",\\n      \\"left to right\\",\\n      \\"left-to-right\\",\\n      \\"lefttoright\\",\\n      \\"ltr\\",\\n      \\"paste large text as file\\",\\n      \\"pastelargetextasfile\\",\\n      \\"reset background\\",\\n      \\"resetbackground\\",\\n      \\"response auto copy\\",\\n      \\"responseautocopy\\",\\n      \\"rich text input for chat\\",\\n      \\"richtextinputforchat\\",\\n      \\"right to left\\",\\n      \\"right-to-left\\",\\n      \\"righttoleft\\",\\n      \\"rtl\\",\\n      \\"scroll behavior\\",\\n      \\"scroll on branch change\\",\\n      \\"scrollbehavior\\",\\n      \\"scrollonbranchchange\\",\\n      \\"select model\\",\\n      \\"selectmodel\\",\\n      \\"settings\\",\\n      \\"show username\\",\\n      \\"showusername\\",\\n      \\"stream large chunks\\",\\n      \\"streamlargechunks\\",\\n      \\"stylized pdf export\\",\\n      \\"stylizedpdfexport\\",\\n      \\"title autogeneration\\",\\n      \\"titleautogeneration\\",\\n      \\"toast notifications for new updates\\",\\n      \\"toastnotificationsfornewupdates\\",\\n      \\"upload background\\",\\n      \\"uploadbackground\\",\\n      \\"user interface\\",\\n      \\"user location access\\",\\n      \\"userinterface\\",\\n      \\"userlocationaccess\\",\\n      \\"vibration\\",\\n      \\"voice control\\",\\n      \\"voicecontrol\\",\\n      \\"widescreen mode\\",\\n      \\"widescreenmode\\",\\n      \\"whatsnew\\",\\n      \\"whats new\\",\\n      \\"websearchinchat\\",\\n      \\"web search in chat\\"\\n    ]\\n  },\\n  ...$user?.role === \\"admin\\" || $user?.role === \\"user\\" && $config?.features?.enable_direct_connections ? [\\n    {\\n      id: \\"connections\\",\\n      title: \\"Connections\\",\\n      keywords: [\\n        \\"addconnection\\",\\n        \\"add connection\\",\\n        \\"manageconnections\\",\\n        \\"manage connections\\",\\n        \\"manage direct connections\\",\\n        \\"managedirectconnections\\",\\n        \\"settings\\"\\n      ]\\n    }\\n  ] : [],\\n  ...$user?.role === \\"admin\\" || $user?.role === \\"user\\" && $user?.permissions?.features?.direct_tool_servers ? [\\n    {\\n      id: \\"tools\\",\\n      title: \\"Tools\\",\\n      keywords: [\\n        \\"addconnection\\",\\n        \\"add connection\\",\\n        \\"managetools\\",\\n        \\"manage tools\\",\\n        \\"manage tool servers\\",\\n        \\"managetoolservers\\",\\n        \\"settings\\"\\n      ]\\n    }\\n  ] : [],\\n  {\\n    id: \\"personalization\\",\\n    title: \\"Personalization\\",\\n    keywords: [\\n      \\"account preferences\\",\\n      \\"account settings\\",\\n      \\"accountpreferences\\",\\n      \\"accountsettings\\",\\n      \\"custom settings\\",\\n      \\"customsettings\\",\\n      \\"experimental\\",\\n      \\"memories\\",\\n      \\"memory\\",\\n      \\"personalization\\",\\n      \\"personalize\\",\\n      \\"personal settings\\",\\n      \\"personalsettings\\",\\n      \\"profile\\",\\n      \\"user preferences\\",\\n      \\"userpreferences\\"\\n    ]\\n  },\\n  {\\n    id: \\"audio\\",\\n    title: \\"Audio\\",\\n    keywords: [\\n      \\"audio config\\",\\n      \\"audio control\\",\\n      \\"audio features\\",\\n      \\"audio input\\",\\n      \\"audio output\\",\\n      \\"audio playback\\",\\n      \\"audio voice\\",\\n      \\"audioconfig\\",\\n      \\"audiocontrol\\",\\n      \\"audiofeatures\\",\\n      \\"audioinput\\",\\n      \\"audiooutput\\",\\n      \\"audioplayback\\",\\n      \\"audiovoice\\",\\n      \\"auto playback response\\",\\n      \\"autoplaybackresponse\\",\\n      \\"auto transcribe\\",\\n      \\"autotranscribe\\",\\n      \\"instant auto send after voice transcription\\",\\n      \\"instantautosendaftervoicetranscription\\",\\n      \\"language\\",\\n      \\"non local voices\\",\\n      \\"nonlocalvoices\\",\\n      \\"save settings\\",\\n      \\"savesettings\\",\\n      \\"set voice\\",\\n      \\"setvoice\\",\\n      \\"sound settings\\",\\n      \\"soundsettings\\",\\n      \\"speech config\\",\\n      \\"speech mode\\",\\n      \\"speech playback speed\\",\\n      \\"speech rate\\",\\n      \\"speech recognition\\",\\n      \\"speech settings\\",\\n      \\"speech speed\\",\\n      \\"speech synthesis\\",\\n      \\"speech to text engine\\",\\n      \\"speechconfig\\",\\n      \\"speechmode\\",\\n      \\"speechplaybackspeed\\",\\n      \\"speechrate\\",\\n      \\"speechrecognition\\",\\n      \\"speechsettings\\",\\n      \\"speechspeed\\",\\n      \\"speechsynthesis\\",\\n      \\"speechtotextengine\\",\\n      \\"speedch playback rate\\",\\n      \\"speedchplaybackrate\\",\\n      \\"stt settings\\",\\n      \\"sttsettings\\",\\n      \\"text to speech engine\\",\\n      \\"text to speech\\",\\n      \\"textospeechengine\\",\\n      \\"texttospeech\\",\\n      \\"texttospeechvoice\\",\\n      \\"text to speech voice\\",\\n      \\"voice control\\",\\n      \\"voice modes\\",\\n      \\"voice options\\",\\n      \\"voice playback\\",\\n      \\"voice recognition\\",\\n      \\"voice speed\\",\\n      \\"voicecontrol\\",\\n      \\"voicemodes\\",\\n      \\"voiceoptions\\",\\n      \\"voiceplayback\\",\\n      \\"voicerecognition\\",\\n      \\"voicespeed\\",\\n      \\"volume\\"\\n    ]\\n  },\\n  {\\n    id: \\"chats\\",\\n    title: \\"Chats\\",\\n    keywords: [\\n      \\"archive all chats\\",\\n      \\"archive chats\\",\\n      \\"archiveallchats\\",\\n      \\"archivechats\\",\\n      \\"archived chats\\",\\n      \\"archivedchats\\",\\n      \\"chat activity\\",\\n      \\"chat history\\",\\n      \\"chat settings\\",\\n      \\"chatactivity\\",\\n      \\"chathistory\\",\\n      \\"chatsettings\\",\\n      \\"conversation activity\\",\\n      \\"conversation history\\",\\n      \\"conversationactivity\\",\\n      \\"conversationhistory\\",\\n      \\"conversations\\",\\n      \\"convos\\",\\n      \\"delete all chats\\",\\n      \\"delete chats\\",\\n      \\"deleteallchats\\",\\n      \\"deletechats\\",\\n      \\"export chats\\",\\n      \\"exportchats\\",\\n      \\"import chats\\",\\n      \\"importchats\\",\\n      \\"message activity\\",\\n      \\"message archive\\",\\n      \\"message history\\",\\n      \\"messagearchive\\",\\n      \\"messagehistory\\"\\n    ]\\n  },\\n  {\\n    id: \\"account\\",\\n    title: \\"Account\\",\\n    keywords: [\\n      \\"account preferences\\",\\n      \\"account settings\\",\\n      \\"accountpreferences\\",\\n      \\"accountsettings\\",\\n      \\"api keys\\",\\n      \\"apikeys\\",\\n      \\"change password\\",\\n      \\"changepassword\\",\\n      \\"jwt token\\",\\n      \\"jwttoken\\",\\n      \\"login\\",\\n      \\"new password\\",\\n      \\"newpassword\\",\\n      \\"notification webhook url\\",\\n      \\"notificationwebhookurl\\",\\n      \\"personal settings\\",\\n      \\"personalsettings\\",\\n      \\"privacy settings\\",\\n      \\"privacysettings\\",\\n      \\"profileavatar\\",\\n      \\"profile avatar\\",\\n      \\"profile details\\",\\n      \\"profile image\\",\\n      \\"profile picture\\",\\n      \\"profiledetails\\",\\n      \\"profileimage\\",\\n      \\"profilepicture\\",\\n      \\"security settings\\",\\n      \\"securitysettings\\",\\n      \\"update account\\",\\n      \\"update password\\",\\n      \\"updateaccount\\",\\n      \\"updatepassword\\",\\n      \\"user account\\",\\n      \\"user data\\",\\n      \\"user preferences\\",\\n      \\"user profile\\",\\n      \\"useraccount\\",\\n      \\"userdata\\",\\n      \\"username\\",\\n      \\"userpreferences\\",\\n      \\"userprofile\\",\\n      \\"webhook url\\",\\n      \\"webhookurl\\"\\n    ]\\n  },\\n  {\\n    id: \\"about\\",\\n    title: \\"About\\",\\n    keywords: [\\n      \\"about app\\",\\n      \\"about me\\",\\n      \\"about open webui\\",\\n      \\"about page\\",\\n      \\"about us\\",\\n      \\"aboutapp\\",\\n      \\"aboutme\\",\\n      \\"aboutopenwebui\\",\\n      \\"aboutpage\\",\\n      \\"aboutus\\",\\n      \\"check for updates\\",\\n      \\"checkforupdates\\",\\n      \\"contact\\",\\n      \\"copyright\\",\\n      \\"details\\",\\n      \\"discord\\",\\n      \\"documentation\\",\\n      \\"github\\",\\n      \\"help\\",\\n      \\"information\\",\\n      \\"license\\",\\n      \\"redistributions\\",\\n      \\"release\\",\\n      \\"see whats new\\",\\n      \\"seewhatsnew\\",\\n      \\"settings\\",\\n      \\"software info\\",\\n      \\"softwareinfo\\",\\n      \\"support\\",\\n      \\"terms and conditions\\",\\n      \\"terms of use\\",\\n      \\"termsandconditions\\",\\n      \\"termsofuse\\",\\n      \\"timothy jae ryang baek\\",\\n      \\"timothy j baek\\",\\n      \\"timothyjaeryangbaek\\",\\n      \\"timothyjbaek\\",\\n      \\"twitter\\",\\n      \\"update info\\",\\n      \\"updateinfo\\",\\n      \\"version info\\",\\n      \\"versioninfo\\"\\n    ]\\n  }\\n];\\nlet search = \\"\\";\\nlet visibleTabs = searchData.map((tab) => tab.id);\\nlet searchDebounceTimeout;\\nconst searchSettings = (query) => {\\n  const lowerCaseQuery = query.toLowerCase().trim();\\n  return searchData.filter(\\n    (tab) => tab.title.toLowerCase().includes(lowerCaseQuery) || tab.keywords.some((keyword) => keyword.includes(lowerCaseQuery))\\n  ).map((tab) => tab.id);\\n};\\nconst searchDebounceHandler = () => {\\n  clearTimeout(searchDebounceTimeout);\\n  searchDebounceTimeout = setTimeout(() => {\\n    visibleTabs = searchSettings(search);\\n    if (visibleTabs.length > 0 && !visibleTabs.includes(selectedTab)) {\\n      selectedTab = visibleTabs[0];\\n    }\\n  }, 100);\\n};\\nconst saveSettings = async (updated) => {\\n  console.log(updated);\\n  await settings.set({ ...$settings, ...updated });\\n  await models.set(await getModels());\\n  await updateUserSettings(localStorage.token, { ui: $settings });\\n};\\nconst getModels = async () => {\\n  return await _getModels(\\n    localStorage.token,\\n    $config?.features?.enable_direct_connections && ($settings?.directConnections ?? null)\\n  );\\n};\\nlet selectedTab = \\"general\\";\\nconst scrollHandler = (event) => {\\n  const settingsTabsContainer = document.getElementById(\\"settings-tabs-container\\");\\n  if (settingsTabsContainer) {\\n    event.preventDefault();\\n    settingsTabsContainer.scrollLeft += event.deltaY;\\n  }\\n};\\nconst addScrollListener = async () => {\\n  await tick();\\n  const settingsTabsContainer = document.getElementById(\\"settings-tabs-container\\");\\n  if (settingsTabsContainer) {\\n    settingsTabsContainer.addEventListener(\\"wheel\\", scrollHandler);\\n  }\\n};\\nconst removeScrollListener = async () => {\\n  await tick();\\n  const settingsTabsContainer = document.getElementById(\\"settings-tabs-container\\");\\n  if (settingsTabsContainer) {\\n    settingsTabsContainer.removeEventListener(\\"wheel\\", scrollHandler);\\n  }\\n};\\n$: if (show) {\\n  addScrollListener();\\n} else {\\n  removeScrollListener();\\n}\\n<\/script>\\n\\n<Modal size=\\"xl\\" bind:show>\\n\\t<div class=\\"text-gray-700 dark:text-gray-100\\">\\n\\t\\t<div class=\\" flex justify-between dark:text-gray-300 px-5 pt-4 pb-1\\">\\n\\t\\t\\t<div class=\\" text-lg font-medium self-center\\">{$i18n.t('Settings')}</div>\\n\\t\\t\\t<button\\n\\t\\t\\t\\taria-label={$i18n.t('Close settings modal')}\\n\\t\\t\\t\\tclass=\\"self-center\\"\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tshow = false;\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<XMark className=\\"w-5 h-5\\"></XMark>\\n\\t\\t\\t</button>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"flex flex-col md:flex-row w-full px-4 pt-1 pb-4 md:space-x-4\\">\\n\\t\\t\\t<div\\n\\t\\t\\t\\tid=\\"settings-tabs-container\\"\\n\\t\\t\\t\\tclass=\\"tabs flex flex-row overflow-x-auto gap-2.5 md:gap-1 md:flex-col flex-1 md:flex-none md:w-40 md:min-h-[32rem] md:max-h-[32rem] dark:text-gray-200 text-sm font-medium text-left mb-1 md:mb-0 -translate-y-1\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div class=\\"hidden md:flex w-full rounded-xl -mb-1 px-0.5 gap-2\\" id=\\"settings-search\\">\\n\\t\\t\\t\\t\\t<div class=\\"self-center rounded-l-xl bg-transparent\\">\\n\\t\\t\\t\\t\\t\\t<Search\\n\\t\\t\\t\\t\\t\\t\\tclassName=\\"size-3.5\\"\\n\\t\\t\\t\\t\\t\\t\\tstrokeWidth={($settings?.highContrastMode ?? false) ? '3' : '1.5'}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<label class=\\"sr-only\\" for=\\"search-input-settings-modal\\">{$i18n.t('Search')}</label>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\tclass={\`w-full py-1.5 text-sm bg-transparent dark:text-gray-300 outline-hidden\\n\\t\\t\\t\\t\\t\\t\\t\\t\${($settings?.highContrastMode ?? false) ? 'placeholder-gray-800' : ''}\`}\\n\\t\\t\\t\\t\\t\\tbind:value={search}\\n\\t\\t\\t\\t\\t\\tid=\\"search-input-settings-modal\\"\\n\\t\\t\\t\\t\\t\\ton:input={searchDebounceHandler}\\n\\t\\t\\t\\t\\t\\tplaceholder={$i18n.t('Search')}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t{#if visibleTabs.length > 0}\\n\\t\\t\\t\\t\\t{#each visibleTabs as tabId (tabId)}\\n\\t\\t\\t\\t\\t\\t{#if tabId === 'general'}\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass={\`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition\\n\\t\\t\\t\\t\\t\\t\\t\\t\${\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab === 'general'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'dark:bg-gray-800 bg-gray-200'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'hover:bg-gray-200 dark:hover:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'\\n\\t\\t\\t\\t\\t\\t\\t\\t}\`}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab = 'general';\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 20 20\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclip-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center\\">{$i18n.t('General')}</div>\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t{:else if tabId === 'interface'}\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass={\`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition\\n\\t\\t\\t\\t\\t\\t\\t\\t\${\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab === 'interface'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'dark:bg-gray-800 bg-gray-200'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'hover:bg-gray-200 dark:hover:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'\\n\\t\\t\\t\\t\\t\\t\\t\\t}\`}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab = 'interface';\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 16 16\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclip-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center\\">{$i18n.t('Interface')}</div>\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t{:else if tabId === 'connections'}\\n\\t\\t\\t\\t\\t\\t\\t{#if $user?.role === 'admin' || ($user?.role === 'user' && $config?.features?.enable_direct_connections)}\\n\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass={\`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition\\n\\t\\t\\t\\t\\t\\t\\t\\t\${\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab === 'connections'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'dark:bg-gray-800 bg-gray-200'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'hover:bg-gray-200 dark:hover:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'\\n\\t\\t\\t\\t\\t\\t\\t\\t}\`}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab = 'connections';\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 16 16\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M1 9.5A3.5 3.5 0 0 0 4.5 13H12a3 3 0 0 0 .917-5.857 2.503 2.503 0 0 0-3.198-3.019 3.5 3.5 0 0 0-6.628 2.171A3.5 3.5 0 0 0 1 9.5Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center\\">{$i18n.t('Connections')}</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t{:else if tabId === 'tools'}\\n\\t\\t\\t\\t\\t\\t\\t{#if $user?.role === 'admin' || ($user?.role === 'user' && $user?.permissions?.features?.direct_tool_servers)}\\n\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass={\`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition\\n\\t\\t\\t\\t\\t\\t\\t\\t\${\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab === 'tools'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'dark:bg-gray-800 bg-gray-200'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'hover:bg-gray-200 dark:hover:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'\\n\\t\\t\\t\\t\\t\\t\\t\\t}\`}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab = 'tools';\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"size-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclip-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center\\">{$i18n.t('Tools')}</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t{:else if tabId === 'personalization'}\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass={\`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition\\n\\t\\t\\t\\t\\t\\t\\t\\t\${\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab === 'personalization'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'dark:bg-gray-800 bg-gray-200'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'hover:bg-gray-200 dark:hover:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'\\n\\t\\t\\t\\t\\t\\t\\t\\t}\`}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab = 'personalization';\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<User />\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center\\">{$i18n.t('Personalization')}</div>\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t{:else if tabId === 'audio'}\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass={\`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition\\n\\t\\t\\t\\t\\t\\t\\t\\t\${\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab === 'audio'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'dark:bg-gray-800 bg-gray-200'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'hover:bg-gray-200 dark:hover:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'\\n\\t\\t\\t\\t\\t\\t\\t\\t}\`}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab = 'audio';\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 16 16\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M7.557 2.066A.75.75 0 0 1 8 2.75v10.5a.75.75 0 0 1-1.248.56L3.59 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.59l3.162-2.81a.75.75 0 0 1 .805-.124ZM12.95 3.05a.75.75 0 1 0-1.06 1.06 5.5 5.5 0 0 1 0 7.78.75.75 0 1 0 1.06 1.06 7 7 0 0 0 0-9.9Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M10.828 5.172a.75.75 0 1 0-1.06 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 1 0 1.06 1.06 4 4 0 0 0 0-5.656Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center\\">{$i18n.t('Audio')}</div>\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t{:else if tabId === 'chats'}\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass={\`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition\\n\\t\\t\\t\\t\\t\\t\\t\\t\${\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab === 'chats'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'dark:bg-gray-800 bg-gray-200'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'hover:bg-gray-200 dark:hover:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'\\n\\t\\t\\t\\t\\t\\t\\t\\t}\`}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab = 'chats';\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 16 16\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M8 2C4.262 2 1 4.57 1 8c0 1.86.98 3.486 2.455 4.566a3.472 3.472 0 0 1-.469 1.26.75.75 0 0 0 .713 1.14 6.961 6.961 0 0 0 3.06-1.06c.403.062.818.094 1.241.094 3.738 0 7-2.57 7-6s-3.262-6-7-6ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclip-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center\\">{$i18n.t('Chats')}</div>\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t{:else if tabId === 'account'}\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass={\`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition\\n\\t\\t\\t\\t\\t\\t\\t\\t\${\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab === 'account'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'dark:bg-gray-800 bg-gray-200'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'hover:bg-gray-200 dark:hover:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'\\n\\t\\t\\t\\t\\t\\t\\t\\t}\`}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab = 'account';\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 16 16\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclip-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center\\">{$i18n.t('Account')}</div>\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t{:else if tabId === 'about'}\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass={\`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition\\n\\t\\t\\t\\t\\t\\t\\t\\t\${\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab === 'about'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'dark:bg-gray-800 bg-gray-200'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ''\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: ($settings?.highContrastMode ?? false)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'hover:bg-gray-200 dark:hover:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'\\n\\t\\t\\t\\t\\t\\t\\t\\t}\`}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tselectedTab = 'about';\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 20 20\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclip-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center\\">{$i18n.t('About')}</div>\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<div class=\\"text-center text-gray-500 mt-4\\">\\n\\t\\t\\t\\t\\t\\t{$i18n.t('No results found')}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t{#if $user?.role === 'admin'}\\n\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\thref=\\"/admin/settings\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none md:mt-auto flex text-left transition {$settings?.highContrastMode\\n\\t\\t\\t\\t\\t\\t\\t? 'hover:bg-gray-200 dark:hover:bg-gray-800'\\n\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'}\\"\\n\\t\\t\\t\\t\\t\\ton:click={async (e) => {\\n\\t\\t\\t\\t\\t\\t\\te.preventDefault();\\n\\t\\t\\t\\t\\t\\t\\tawait goto('/admin/settings');\\n\\t\\t\\t\\t\\t\\t\\tshow = false;\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-2\\">\\n\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"size-4\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tfill-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclip-rule=\\"evenodd\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\" self-center\\">{$i18n.t('Admin Settings')}</div>\\n\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"flex-1 md:min-h-[32rem] max-h-[32rem]\\">\\n\\t\\t\\t\\t{#if selectedTab === 'general'}\\n\\t\\t\\t\\t\\t<General\\n\\t\\t\\t\\t\\t\\t{getModels}\\n\\t\\t\\t\\t\\t\\t{saveSettings}\\n\\t\\t\\t\\t\\t\\ton:save={() => {\\n\\t\\t\\t\\t\\t\\t\\ttoast.success($i18n.t('Settings saved successfully!'));\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{:else if selectedTab === 'interface'}\\n\\t\\t\\t\\t\\t<Interface\\n\\t\\t\\t\\t\\t\\t{saveSettings}\\n\\t\\t\\t\\t\\t\\ton:save={() => {\\n\\t\\t\\t\\t\\t\\t\\ttoast.success($i18n.t('Settings saved successfully!'));\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{:else if selectedTab === 'connections'}\\n\\t\\t\\t\\t\\t<Connections\\n\\t\\t\\t\\t\\t\\tsaveSettings={async (updated) => {\\n\\t\\t\\t\\t\\t\\t\\tawait saveSettings(updated);\\n\\t\\t\\t\\t\\t\\t\\ttoast.success($i18n.t('Settings saved successfully!'));\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{:else if selectedTab === 'tools'}\\n\\t\\t\\t\\t\\t<Tools\\n\\t\\t\\t\\t\\t\\tsaveSettings={async (updated) => {\\n\\t\\t\\t\\t\\t\\t\\tawait saveSettings(updated);\\n\\t\\t\\t\\t\\t\\t\\ttoast.success($i18n.t('Settings saved successfully!'));\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{:else if selectedTab === 'personalization'}\\n\\t\\t\\t\\t\\t<Personalization\\n\\t\\t\\t\\t\\t\\t{saveSettings}\\n\\t\\t\\t\\t\\t\\ton:save={() => {\\n\\t\\t\\t\\t\\t\\t\\ttoast.success($i18n.t('Settings saved successfully!'));\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{:else if selectedTab === 'audio'}\\n\\t\\t\\t\\t\\t<Audio\\n\\t\\t\\t\\t\\t\\t{saveSettings}\\n\\t\\t\\t\\t\\t\\ton:save={() => {\\n\\t\\t\\t\\t\\t\\t\\ttoast.success($i18n.t('Settings saved successfully!'));\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{:else if selectedTab === 'chats'}\\n\\t\\t\\t\\t\\t<Chats {saveSettings} />\\n\\t\\t\\t\\t{:else if selectedTab === 'account'}\\n\\t\\t\\t\\t\\t<Account\\n\\t\\t\\t\\t\\t\\t{saveSettings}\\n\\t\\t\\t\\t\\t\\tsaveHandler={() => {\\n\\t\\t\\t\\t\\t\\t\\ttoast.success($i18n.t('Settings saved successfully!'));\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{:else if selectedTab === 'about'}\\n\\t\\t\\t\\t\\t<About />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</Modal>\\n\\n<style>\\n\\tinput::-webkit-outer-spin-button,\\n\\tinput::-webkit-inner-spin-button {\\n\\t\\t/* display: none; <- Crashes Chrome on hover */\\n\\t\\t-webkit-appearance: none;\\n\\t\\tmargin: 0; /* <-- Apparently some margin are still there even though it's hidden */\\n\\t}\\n\\n\\t.tabs::-webkit-scrollbar {\\n\\t\\tdisplay: none; /* for Chrome, Safari and Opera */\\n\\t}\\n\\n\\t.tabs {\\n\\t\\t-ms-overflow-style: none; /* IE and Edge */\\n\\t\\tscrollbar-width: none; /* Firefox */\\n\\t}\\n\\n\\tinput[type='number'] {\\n\\t\\tappearance: textfield;\\n\\t\\t-moz-appearance: textfield; /* Firefox */\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA85BC,oBAAK,2BAA2B,CAChC,oBAAK,2BAA4B,CAEhC,kBAAkB,CAAE,IAAI,CACxB,MAAM,CAAE,CACT,CAEA,oBAAK,mBAAoB,CACxB,OAAO,CAAE,IACV,CAEA,oBAAM,CACL,kBAAkB,CAAE,IAAI,CACxB,eAAe,CAAE,IAClB"}`
};
const SettingsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  let $config, $$unsubscribe_config;
  let $user, $$unsubscribe_user;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  const searchData = [
    {
      id: "general",
      title: "General",
      keywords: [
        "advancedparams",
        "advancedparameters",
        "advanced params",
        "advanced parameters",
        "configuration",
        "defaultparameters",
        "default parameters",
        "defaultsettings",
        "default settings",
        "general",
        "keepalive",
        "keep alive",
        "languages",
        "notifications",
        "requestmode",
        "request mode",
        "systemparameters",
        "system parameters",
        "systemprompt",
        "system prompt",
        "systemsettings",
        "system settings",
        "theme",
        "translate",
        "webuisettings",
        "webui settings"
      ]
    },
    {
      id: "interface",
      title: "Interface",
      keywords: [
        "allow user location",
        "allow voice interruption in call",
        "allowuserlocation",
        "allowvoiceinterruptionincall",
        "always collapse codeblocks",
        "always collapse code blocks",
        "always expand details",
        "always on web search",
        "always play notification sound",
        "alwayscollapsecodeblocks",
        "alwaysexpanddetails",
        "alwaysonwebsearch",
        "alwaysplaynotificationsound",
        "android",
        "auto chat tags",
        "auto copy response to clipboard",
        "auto title",
        "autochattags",
        "autocopyresponsetoclipboard",
        "autotitle",
        "beta",
        "call",
        "chat background image",
        "chat bubble ui",
        "chat direction",
        "chat tags autogen",
        "chat tags autogeneration",
        "chat ui",
        "chatbackgroundimage",
        "chatbubbleui",
        "chatdirection",
        "chat tags autogeneration",
        "chattagsautogeneration",
        "chatui",
        "copy formatted text",
        "copyformattedtext",
        "default model",
        "defaultmodel",
        "design",
        "detect artifacts automatically",
        "detectartifactsautomatically",
        "display emoji in call",
        "display username",
        "displayemojiincall",
        "displayusername",
        "enter key behavior",
        "enterkeybehavior",
        "expand mode",
        "expandmode",
        "file",
        "followup autogeneration",
        "followupautogeneration",
        "fullscreen",
        "fullwidthmode",
        "full width mode",
        "haptic feedback",
        "hapticfeedback",
        "high contrast mode",
        "highcontrastmode",
        "iframe sandbox allow forms",
        "iframe sandbox allow same origin",
        "iframesandboxallowforms",
        "iframesandboxallowsameorigin",
        "imagecompression",
        "image compression",
        "imagemaxcompressionsize",
        "image max compression size",
        "interface customization",
        "interface options",
        "interfacecustomization",
        "interfaceoptions",
        "landing page mode",
        "landingpagemode",
        "layout",
        "left to right",
        "left-to-right",
        "lefttoright",
        "ltr",
        "paste large text as file",
        "pastelargetextasfile",
        "reset background",
        "resetbackground",
        "response auto copy",
        "responseautocopy",
        "rich text input for chat",
        "richtextinputforchat",
        "right to left",
        "right-to-left",
        "righttoleft",
        "rtl",
        "scroll behavior",
        "scroll on branch change",
        "scrollbehavior",
        "scrollonbranchchange",
        "select model",
        "selectmodel",
        "settings",
        "show username",
        "showusername",
        "stream large chunks",
        "streamlargechunks",
        "stylized pdf export",
        "stylizedpdfexport",
        "title autogeneration",
        "titleautogeneration",
        "toast notifications for new updates",
        "toastnotificationsfornewupdates",
        "upload background",
        "uploadbackground",
        "user interface",
        "user location access",
        "userinterface",
        "userlocationaccess",
        "vibration",
        "voice control",
        "voicecontrol",
        "widescreen mode",
        "widescreenmode",
        "whatsnew",
        "whats new",
        "websearchinchat",
        "web search in chat"
      ]
    },
    ...$user?.role === "admin" || $user?.role === "user" && $config?.features?.enable_direct_connections ? [
      {
        id: "connections",
        title: "Connections",
        keywords: [
          "addconnection",
          "add connection",
          "manageconnections",
          "manage connections",
          "manage direct connections",
          "managedirectconnections",
          "settings"
        ]
      }
    ] : [],
    ...$user?.role === "admin" || $user?.role === "user" && $user?.permissions?.features?.direct_tool_servers ? [
      {
        id: "tools",
        title: "Tools",
        keywords: [
          "addconnection",
          "add connection",
          "managetools",
          "manage tools",
          "manage tool servers",
          "managetoolservers",
          "settings"
        ]
      }
    ] : [],
    {
      id: "personalization",
      title: "Personalization",
      keywords: [
        "account preferences",
        "account settings",
        "accountpreferences",
        "accountsettings",
        "custom settings",
        "customsettings",
        "experimental",
        "memories",
        "memory",
        "personalization",
        "personalize",
        "personal settings",
        "personalsettings",
        "profile",
        "user preferences",
        "userpreferences"
      ]
    },
    {
      id: "audio",
      title: "Audio",
      keywords: [
        "audio config",
        "audio control",
        "audio features",
        "audio input",
        "audio output",
        "audio playback",
        "audio voice",
        "audioconfig",
        "audiocontrol",
        "audiofeatures",
        "audioinput",
        "audiooutput",
        "audioplayback",
        "audiovoice",
        "auto playback response",
        "autoplaybackresponse",
        "auto transcribe",
        "autotranscribe",
        "instant auto send after voice transcription",
        "instantautosendaftervoicetranscription",
        "language",
        "non local voices",
        "nonlocalvoices",
        "save settings",
        "savesettings",
        "set voice",
        "setvoice",
        "sound settings",
        "soundsettings",
        "speech config",
        "speech mode",
        "speech playback speed",
        "speech rate",
        "speech recognition",
        "speech settings",
        "speech speed",
        "speech synthesis",
        "speech to text engine",
        "speechconfig",
        "speechmode",
        "speechplaybackspeed",
        "speechrate",
        "speechrecognition",
        "speechsettings",
        "speechspeed",
        "speechsynthesis",
        "speechtotextengine",
        "speedch playback rate",
        "speedchplaybackrate",
        "stt settings",
        "sttsettings",
        "text to speech engine",
        "text to speech",
        "textospeechengine",
        "texttospeech",
        "texttospeechvoice",
        "text to speech voice",
        "voice control",
        "voice modes",
        "voice options",
        "voice playback",
        "voice recognition",
        "voice speed",
        "voicecontrol",
        "voicemodes",
        "voiceoptions",
        "voiceplayback",
        "voicerecognition",
        "voicespeed",
        "volume"
      ]
    },
    {
      id: "chats",
      title: "Chats",
      keywords: [
        "archive all chats",
        "archive chats",
        "archiveallchats",
        "archivechats",
        "archived chats",
        "archivedchats",
        "chat activity",
        "chat history",
        "chat settings",
        "chatactivity",
        "chathistory",
        "chatsettings",
        "conversation activity",
        "conversation history",
        "conversationactivity",
        "conversationhistory",
        "conversations",
        "convos",
        "delete all chats",
        "delete chats",
        "deleteallchats",
        "deletechats",
        "export chats",
        "exportchats",
        "import chats",
        "importchats",
        "message activity",
        "message archive",
        "message history",
        "messagearchive",
        "messagehistory"
      ]
    },
    {
      id: "account",
      title: "Account",
      keywords: [
        "account preferences",
        "account settings",
        "accountpreferences",
        "accountsettings",
        "api keys",
        "apikeys",
        "change password",
        "changepassword",
        "jwt token",
        "jwttoken",
        "login",
        "new password",
        "newpassword",
        "notification webhook url",
        "notificationwebhookurl",
        "personal settings",
        "personalsettings",
        "privacy settings",
        "privacysettings",
        "profileavatar",
        "profile avatar",
        "profile details",
        "profile image",
        "profile picture",
        "profiledetails",
        "profileimage",
        "profilepicture",
        "security settings",
        "securitysettings",
        "update account",
        "update password",
        "updateaccount",
        "updatepassword",
        "user account",
        "user data",
        "user preferences",
        "user profile",
        "useraccount",
        "userdata",
        "username",
        "userpreferences",
        "userprofile",
        "webhook url",
        "webhookurl"
      ]
    },
    {
      id: "about",
      title: "About",
      keywords: [
        "about app",
        "about me",
        "about open webui",
        "about page",
        "about us",
        "aboutapp",
        "aboutme",
        "aboutopenwebui",
        "aboutpage",
        "aboutus",
        "check for updates",
        "checkforupdates",
        "contact",
        "copyright",
        "details",
        "discord",
        "documentation",
        "github",
        "help",
        "information",
        "license",
        "redistributions",
        "release",
        "see whats new",
        "seewhatsnew",
        "settings",
        "software info",
        "softwareinfo",
        "support",
        "terms and conditions",
        "terms of use",
        "termsandconditions",
        "termsofuse",
        "timothy jae ryang baek",
        "timothy j baek",
        "timothyjaeryangbaek",
        "timothyjbaek",
        "twitter",
        "update info",
        "updateinfo",
        "version info",
        "versioninfo"
      ]
    }
  ];
  let search = "";
  let visibleTabs = searchData.map((tab) => tab.id);
  const saveSettings = async (updated) => {
    console.log(updated);
    await settings.set({ ...$settings, ...updated });
    await models.set(await getModels$1());
    await updateUserSettings(localStorage.token, { ui: $settings });
  };
  const getModels$1 = async () => {
    return await getModels(localStorage.token, $config?.features?.enable_direct_connections && ($settings?.directConnections ?? null));
  };
  const scrollHandler = (event) => {
    const settingsTabsContainer = document.getElementById("settings-tabs-container");
    if (settingsTabsContainer) {
      event.preventDefault();
      settingsTabsContainer.scrollLeft += event.deltaY;
    }
  };
  const addScrollListener = async () => {
    await tick();
    const settingsTabsContainer = document.getElementById("settings-tabs-container");
    if (settingsTabsContainer) {
      settingsTabsContainer.addEventListener("wheel", scrollHandler);
    }
  };
  const removeScrollListener = async () => {
    await tick();
    const settingsTabsContainer = document.getElementById("settings-tabs-container");
    if (settingsTabsContainer) {
      settingsTabsContainer.removeEventListener("wheel", scrollHandler);
    }
  };
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (show) {
        addScrollListener();
      } else {
        removeScrollListener();
      }
    }
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { size: "xl", show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="text-gray-700 dark:text-gray-100"><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-1"><div class="text-lg font-medium self-center">${escape($i18n.t("Settings"))}</div> <button${add_attribute("aria-label", $i18n.t("Close settings modal"), 0)} class="self-center">${validate_component(XMark, "XMark").$$render($$result, { className: "w-5 h-5" }, {}, {})}</button></div> <div class="flex flex-col md:flex-row w-full px-4 pt-1 pb-4 md:space-x-4"><div id="settings-tabs-container" class="tabs flex flex-row overflow-x-auto gap-2.5 md:gap-1 md:flex-col flex-1 md:flex-none md:w-40 md:min-h-[32rem] md:max-h-[32rem] dark:text-gray-200 text-sm font-medium text-left mb-1 md:mb-0 -translate-y-1 svelte-187gxci"><div class="hidden md:flex w-full rounded-xl -mb-1 px-0.5 gap-2" id="settings-search"><div class="self-center rounded-l-xl bg-transparent">${validate_component(Search, "Search").$$render(
            $$result,
            {
              className: "size-3.5",
              strokeWidth: $settings?.highContrastMode ?? false ? "3" : "1.5"
            },
            {},
            {}
          )}</div> <label class="sr-only" for="search-input-settings-modal">${escape($i18n.t("Search"))}</label> <input class="${escape(
            null_to_empty(`w-full py-1.5 text-sm bg-transparent dark:text-gray-300 outline-hidden
								${$settings?.highContrastMode ?? false ? "placeholder-gray-800" : ""}`),
            true
          ) + " svelte-187gxci"}" id="search-input-settings-modal"${add_attribute("placeholder", $i18n.t("Search"), 0)}${add_attribute("value", search, 0)}></div> ${visibleTabs.length > 0 ? `${each(visibleTabs, (tabId) => {
            return `${tabId === "general" ? `<button class="${escape(
              null_to_empty(`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition
								${$settings?.highContrastMode ?? false ? "dark:bg-gray-800 bg-gray-200" : ""}`),
              true
            ) + " svelte-187gxci"}"><div class="self-center mr-2" data-svelte-h="svelte-d0uebp"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("General"))}</div> </button>` : `${tabId === "interface" ? `<button class="${escape(
              null_to_empty(`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition
								${$settings?.highContrastMode ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`),
              true
            ) + " svelte-187gxci"}"><div class="self-center mr-2" data-svelte-h="svelte-183k9gv"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("Interface"))}</div> </button>` : `${tabId === "connections" ? `${$user?.role === "admin" || $user?.role === "user" && $config?.features?.enable_direct_connections ? `<button class="${escape(
              null_to_empty(`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition
								${$settings?.highContrastMode ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`),
              true
            ) + " svelte-187gxci"}"><div class="self-center mr-2" data-svelte-h="svelte-zidmj0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M1 9.5A3.5 3.5 0 0 0 4.5 13H12a3 3 0 0 0 .917-5.857 2.503 2.503 0 0 0-3.198-3.019 3.5 3.5 0 0 0-6.628 2.171A3.5 3.5 0 0 0 1 9.5Z"></path></svg></div> <div class="self-center">${escape($i18n.t("Connections"))}</div> </button>` : ``}` : `${tabId === "tools" ? `${$user?.role === "admin" || $user?.role === "user" && $user?.permissions?.features?.direct_tool_servers ? `<button class="${escape(
              null_to_empty(`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition
								${$settings?.highContrastMode ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`),
              true
            ) + " svelte-187gxci"}"><div class="self-center mr-2" data-svelte-h="svelte-1x5q2q2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("Tools"))}</div> </button>` : ``}` : `${tabId === "personalization" ? `<button class="${escape(
              null_to_empty(`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition
								${$settings?.highContrastMode ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`),
              true
            ) + " svelte-187gxci"}"><div class="self-center mr-2">${validate_component(User, "User").$$render($$result, {}, {}, {})}</div> <div class="self-center">${escape($i18n.t("Personalization"))}</div> </button>` : `${tabId === "audio" ? `<button class="${escape(
              null_to_empty(`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition
								${$settings?.highContrastMode ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`),
              true
            ) + " svelte-187gxci"}"><div class="self-center mr-2" data-svelte-h="svelte-1bad48g"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M7.557 2.066A.75.75 0 0 1 8 2.75v10.5a.75.75 0 0 1-1.248.56L3.59 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.59l3.162-2.81a.75.75 0 0 1 .805-.124ZM12.95 3.05a.75.75 0 1 0-1.06 1.06 5.5 5.5 0 0 1 0 7.78.75.75 0 1 0 1.06 1.06 7 7 0 0 0 0-9.9Z"></path><path d="M10.828 5.172a.75.75 0 1 0-1.06 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 1 0 1.06 1.06 4 4 0 0 0 0-5.656Z"></path></svg></div> <div class="self-center">${escape($i18n.t("Audio"))}</div> </button>` : `${tabId === "chats" ? `<button class="${escape(
              null_to_empty(`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition
								${$settings?.highContrastMode ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`),
              true
            ) + " svelte-187gxci"}"><div class="self-center mr-2" data-svelte-h="svelte-hp16vk"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M8 2C4.262 2 1 4.57 1 8c0 1.86.98 3.486 2.455 4.566a3.472 3.472 0 0 1-.469 1.26.75.75 0 0 0 .713 1.14 6.961 6.961 0 0 0 3.06-1.06c.403.062.818.094 1.241.094 3.738 0 7-2.57 7-6s-3.262-6-7-6ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("Chats"))}</div> </button>` : `${tabId === "account" ? `<button class="${escape(
              null_to_empty(`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition
								${$settings?.highContrastMode ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`),
              true
            ) + " svelte-187gxci"}"><div class="self-center mr-2" data-svelte-h="svelte-uyxh8m"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("Account"))}</div> </button>` : `${tabId === "about" ? `<button class="${escape(
              null_to_empty(`px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition
								${$settings?.highContrastMode ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`),
              true
            ) + " svelte-187gxci"}"><div class="self-center mr-2" data-svelte-h="svelte-im5r31"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("About"))}</div> </button>` : ``}`}`}`}`}`}`}`}`}`;
          })}` : `<div class="text-center text-gray-500 mt-4">${escape($i18n.t("No results found"))}</div>`} ${$user?.role === "admin" ? `<a href="/admin/settings" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none md:mt-auto flex text-left transition " + escape(
            $settings?.highContrastMode ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
            true
          )}"><div class="self-center mr-2" data-svelte-h="svelte-tj9033"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-4"><path fill-rule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("Admin Settings"))}</div></a>` : ``}</div> <div class="flex-1 md:min-h-[32rem] max-h-[32rem]">${`${validate_component(General, "General").$$render($$result, { getModels: getModels$1, saveSettings }, {}, {})}`}</div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_settings();
  $$unsubscribe_config();
  $$unsubscribe_user();
  $$unsubscribe_i18n();
  return $$rendered;
});
const css$1 = {
  code: ".confetti-holder.svelte-io58ff.svelte-io58ff{position:relative}@keyframes svelte-io58ff-rotate{0%{transform:skew(var(--skew)) rotate3d(var(--full-rotation))}100%{transform:skew(var(--skew)) rotate3d(var(--rotation-xyz), calc(var(--rotation-deg) + 360deg))}}@keyframes svelte-io58ff-translate{0%{opacity:1}8%{transform:translateY(calc(var(--translate-y) * 0.95)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.9)));opacity:1}12%{transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.95)));opacity:1}16%{transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x) * var(--x-spread)));opacity:1}100%{transform:translateY(calc(var(--translate-y) + var(--fall-distance))) translateX(var(--translate-x));opacity:0}}@keyframes svelte-io58ff-no-gravity-translate{0%{opacity:1}100%{transform:translateY(var(--translate-y)) translateX(var(--translate-x));opacity:0}}.confetti.svelte-io58ff.svelte-io58ff{--translate-y:calc(-200px * var(--translate-y-multiplier));--translate-x:calc(200px * var(--translate-x-multiplier));position:absolute;height:calc(var(--size) * var(--scale));width:calc(var(--size) * var(--scale));animation:svelte-io58ff-translate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;opacity:0;pointer-events:none}.confetti.svelte-io58ff.svelte-io58ff::before{--full-rotation:var(--rotation-xyz), var(--rotation-deg);content:'';display:block;width:100%;height:100%;background:var(--color);background-size:contain;transform:skew(var(--skew)) rotate3d(var(--full-rotation));animation:svelte-io58ff-rotate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear}.rounded.svelte-io58ff .confetti.svelte-io58ff::before{border-radius:50%}.cone.svelte-io58ff .confetti.svelte-io58ff{--translate-x:calc(200px * var(--translate-y-multiplier) * var(--translate-x-multiplier))}.no-gravity.svelte-io58ff .confetti.svelte-io58ff{animation-name:svelte-io58ff-no-gravity-translate;animation-timing-function:ease-out}@media(prefers-reduced-motion){.confetti.svelte-io58ff.svelte-io58ff,.confetti.svelte-io58ff.svelte-io58ff::before{animation:none}}",
  map: '{"version":3,"file":"Confetti.svelte","sources":["Confetti.svelte"],"sourcesContent":["<script>\\r\\n  import { onMount } from \\"svelte\\"\\r\\n\\r\\n  export let size = 10\\r\\n  export let x = [-0.5, 0.5]\\r\\n  export let y = [0.25, 1]\\r\\n  export let duration = 2000\\r\\n  export let infinite = false\\r\\n  export let delay = [0, 50]\\r\\n  export let colorRange = [0, 360]\\r\\n  export let colorArray = []\\r\\n  export let amount = 50\\r\\n  export let iterationCount = 1\\r\\n  export let fallDistance = \\"100px\\"\\r\\n  export let rounded = false\\r\\n  export let cone = false\\r\\n  export let noGravity = false\\r\\n  export let xSpread = 0.15\\r\\n  export let destroyOnComplete = true\\r\\n\\r\\n  let complete = false\\r\\n\\r\\n  onMount(() => {\\r\\n    if (!destroyOnComplete || infinite || iterationCount == \\"infinite\\") return\\r\\n\\r\\n    setTimeout(() => complete = true, (duration + delay[1]) * iterationCount)\\r\\n  })\\r\\n\\r\\n  function randomBetween(min, max) {\\r\\n    return Math.random() * (max - min) + min\\r\\n  }\\r\\n\\r\\n  function getColor() {\\r\\n    if (colorArray.length) return colorArray[Math.round(Math.random() * (colorArray.length - 1))]\\r\\n    else return `hsl(${Math.round(randomBetween(colorRange[0], colorRange[1]))}, 75%, 50%)`\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n{#if !complete}\\r\\n  <div class=\\"confetti-holder\\" class:rounded class:cone class:no-gravity={noGravity}>\\r\\n    {#each { length: amount } as _}\\r\\n      <div\\r\\n        class=\\"confetti\\"\\r\\n        style=\\"\\r\\n        --fall-distance: {fallDistance};\\r\\n        --size: {size}px;\\r\\n        --color: {getColor()};\\r\\n        --skew: {randomBetween(-45, 45)}deg,{randomBetween(-45, 45)}deg;\\r\\n        --rotation-xyz: {randomBetween(-10, 10)}, {randomBetween(-10, 10)}, {randomBetween(-10, 10)};\\r\\n        --rotation-deg: {randomBetween(0, 360)}deg;\\r\\n        --translate-y-multiplier: {randomBetween(y[0], y[1])};\\r\\n        --translate-x-multiplier: {randomBetween(x[0], x[1])};\\r\\n        --scale: {0.1 * randomBetween(2, 10)};\\r\\n        --transition-duration: {infinite ? `calc(${duration}ms * var(--scale))` : `${duration}ms`};\\r\\n        --transition-delay: {randomBetween(delay[0], delay[1])}ms;\\r\\n        --transition-iteration-count: {infinite ? \'infinite\' : iterationCount};\\r\\n        --x-spread: {(1 - xSpread)}\\" />\\r\\n    {/each}\\r\\n  </div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n  .confetti-holder {\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  @keyframes rotate {\\r\\n    0% {\\r\\n      transform: skew(var(--skew)) rotate3d(var(--full-rotation));\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n      transform: skew(var(--skew)) rotate3d(var(--rotation-xyz), calc(var(--rotation-deg) + 360deg));\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes translate {\\r\\n    0% {\\r\\n      opacity: 1;\\r\\n    }\\r\\n\\r\\n    8% {\\r\\n      transform: translateY(calc(var(--translate-y) * 0.95)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.9)));\\r\\n      opacity: 1;\\r\\n    }\\r\\n\\r\\n    12% {\\r\\n      transform: translateY(var(--translate-y)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.95)));\\r\\n      opacity: 1;\\r\\n    }\\r\\n\\r\\n    16% {\\r\\n      transform: translateY(var(--translate-y)) translateX(calc(var(--translate-x) * var(--x-spread)));\\r\\n      opacity: 1;\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n      transform: translateY(calc(var(--translate-y) + var(--fall-distance))) translateX(var(--translate-x));\\r\\n      opacity: 0;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes no-gravity-translate {\\r\\n    0% {\\r\\n      opacity: 1;\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n      transform: translateY(var(--translate-y)) translateX(var(--translate-x));\\r\\n      opacity: 0;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .confetti {\\r\\n    --translate-y: calc(-200px * var(--translate-y-multiplier));\\r\\n    --translate-x: calc(200px * var(--translate-x-multiplier));\\r\\n    position: absolute;\\r\\n    height: calc(var(--size) * var(--scale));\\r\\n    width: calc(var(--size) * var(--scale));\\r\\n    animation: translate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;\\r\\n    opacity: 0;\\r\\n    pointer-events: none;\\r\\n  }\\r\\n\\r\\n  .confetti::before {\\r\\n    --full-rotation: var(--rotation-xyz), var(--rotation-deg);\\r\\n    content: \'\';\\r\\n    display: block;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background: var(--color);\\r\\n    background-size: contain;\\r\\n    transform: skew(var(--skew)) rotate3d(var(--full-rotation));\\r\\n    animation: rotate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;\\r\\n  }\\r\\n\\r\\n  .rounded .confetti::before {\\r\\n    border-radius: 50%;\\r\\n  }\\r\\n\\r\\n  .cone .confetti {\\r\\n    --translate-x: calc(200px * var(--translate-y-multiplier) * var(--translate-x-multiplier));\\r\\n  }\\r\\n\\r\\n  .no-gravity .confetti {\\r\\n    animation-name: no-gravity-translate;\\r\\n    animation-timing-function: ease-out;\\r\\n  }\\r\\n\\r\\n  @media (prefers-reduced-motion) {\\r\\n    .confetti,\\r\\n    .confetti::before {\\r\\n      animation: none;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA8DE,4CAAiB,CACf,QAAQ,CAAE,QACZ,CAEA,WAAW,oBAAO,CAChB,EAAG,CACD,SAAS,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,SAAS,IAAI,eAAe,CAAC,CAC5D,CAEA,IAAK,CACH,SAAS,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,SAAS,IAAI,cAAc,CAAC,CAAC,CAAC,KAAK,IAAI,cAAc,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAC/F,CACF,CAEA,WAAW,uBAAU,CACnB,EAAG,CACD,OAAO,CAAE,CACX,CAEA,EAAG,CACD,SAAS,CAAE,WAAW,KAAK,IAAI,aAAa,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,WAAW,KAAK,IAAI,aAAa,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,UAAU,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CACrH,OAAO,CAAE,CACX,CAEA,GAAI,CACF,SAAS,CAAE,WAAW,IAAI,aAAa,CAAC,CAAC,CAAC,WAAW,KAAK,IAAI,aAAa,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,UAAU,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CACzG,OAAO,CAAE,CACX,CAEA,GAAI,CACF,SAAS,CAAE,WAAW,IAAI,aAAa,CAAC,CAAC,CAAC,WAAW,KAAK,IAAI,aAAa,CAAC,CAAC,CAAC,CAAC,IAAI,UAAU,CAAC,CAAC,CAAC,CAChG,OAAO,CAAE,CACX,CAEA,IAAK,CACH,SAAS,CAAE,WAAW,KAAK,IAAI,aAAa,CAAC,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC,CAAC,WAAW,IAAI,aAAa,CAAC,CAAC,CACrG,OAAO,CAAE,CACX,CACF,CAEA,WAAW,kCAAqB,CAC9B,EAAG,CACD,OAAO,CAAE,CACX,CAEA,IAAK,CACH,SAAS,CAAE,WAAW,IAAI,aAAa,CAAC,CAAC,CAAC,WAAW,IAAI,aAAa,CAAC,CAAC,CACxE,OAAO,CAAE,CACX,CACF,CAEA,qCAAU,CACR,aAAa,CAAE,4CAA4C,CAC3D,aAAa,CAAE,2CAA2C,CAC1D,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,IAAI,OAAO,CAAC,CAAC,CACxC,KAAK,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,IAAI,OAAO,CAAC,CAAC,CACvC,SAAS,CAAE,uBAAS,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,CAAC,IAAI,4BAA4B,CAAC,CAAC,MAAM,CAChH,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IAClB,CAEA,qCAAS,QAAS,CAChB,eAAe,CAAE,wCAAwC,CACzD,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,eAAe,CAAE,OAAO,CACxB,SAAS,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,SAAS,IAAI,eAAe,CAAC,CAAC,CAC3D,SAAS,CAAE,oBAAM,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,CAAC,IAAI,4BAA4B,CAAC,CAAC,MACzG,CAEA,sBAAQ,CAAC,uBAAS,QAAS,CACzB,aAAa,CAAE,GACjB,CAEA,mBAAK,CAAC,uBAAU,CACd,aAAa,CAAE,2EACjB,CAEA,yBAAW,CAAC,uBAAU,CACpB,cAAc,CAAE,kCAAoB,CACpC,yBAAyB,CAAE,QAC7B,CAEA,MAAO,wBAAyB,CAC9B,qCAAS,CACT,qCAAS,QAAS,CAChB,SAAS,CAAE,IACb,CACF"}'
};
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
const Confetti = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 10 } = $$props;
  let { x = [-0.5, 0.5] } = $$props;
  let { y = [0.25, 1] } = $$props;
  let { duration = 2e3 } = $$props;
  let { infinite = false } = $$props;
  let { delay = [0, 50] } = $$props;
  let { colorRange = [0, 360] } = $$props;
  let { colorArray = [] } = $$props;
  let { amount = 50 } = $$props;
  let { iterationCount = 1 } = $$props;
  let { fallDistance = "100px" } = $$props;
  let { rounded = false } = $$props;
  let { cone = false } = $$props;
  let { noGravity = false } = $$props;
  let { xSpread = 0.15 } = $$props;
  let { destroyOnComplete = true } = $$props;
  function getColor() {
    if (colorArray.length) return colorArray[Math.round(Math.random() * (colorArray.length - 1))];
    else return `hsl(${Math.round(randomBetween(colorRange[0], colorRange[1]))}, 75%, 50%)`;
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0) $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0) $$bindings.y(y);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.infinite === void 0 && $$bindings.infinite && infinite !== void 0) $$bindings.infinite(infinite);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0) $$bindings.delay(delay);
  if ($$props.colorRange === void 0 && $$bindings.colorRange && colorRange !== void 0) $$bindings.colorRange(colorRange);
  if ($$props.colorArray === void 0 && $$bindings.colorArray && colorArray !== void 0) $$bindings.colorArray(colorArray);
  if ($$props.amount === void 0 && $$bindings.amount && amount !== void 0) $$bindings.amount(amount);
  if ($$props.iterationCount === void 0 && $$bindings.iterationCount && iterationCount !== void 0) $$bindings.iterationCount(iterationCount);
  if ($$props.fallDistance === void 0 && $$bindings.fallDistance && fallDistance !== void 0) $$bindings.fallDistance(fallDistance);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.cone === void 0 && $$bindings.cone && cone !== void 0) $$bindings.cone(cone);
  if ($$props.noGravity === void 0 && $$bindings.noGravity && noGravity !== void 0) $$bindings.noGravity(noGravity);
  if ($$props.xSpread === void 0 && $$bindings.xSpread && xSpread !== void 0) $$bindings.xSpread(xSpread);
  if ($$props.destroyOnComplete === void 0 && $$bindings.destroyOnComplete && destroyOnComplete !== void 0) $$bindings.destroyOnComplete(destroyOnComplete);
  $$result.css.add(css$1);
  return `${`<div class="${[
    "confetti-holder svelte-io58ff",
    (rounded ? "rounded" : "") + " " + (cone ? "cone" : "") + " " + (noGravity ? "no-gravity" : "")
  ].join(" ").trim()}">${each({ length: amount }, (_) => {
    return `<div class="confetti svelte-io58ff" style="${"--fall-distance: " + escape(fallDistance, true) + "; --size: " + escape(size, true) + "px; --color: " + escape(getColor(), true) + "; --skew: " + escape(randomBetween(-45, 45), true) + "deg," + escape(randomBetween(-45, 45), true) + "deg; --rotation-xyz: " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + "; --rotation-deg: " + escape(randomBetween(0, 360), true) + "deg; --translate-y-multiplier: " + escape(randomBetween(y[0], y[1]), true) + "; --translate-x-multiplier: " + escape(randomBetween(x[0], x[1]), true) + "; --scale: " + escape(0.1 * randomBetween(2, 10), true) + "; --transition-duration: " + escape(
      infinite ? `calc(${duration}ms * var(--scale))` : `${duration}ms`,
      true
    ) + "; --transition-delay: " + escape(randomBetween(delay[0], delay[1]), true) + "ms; --transition-iteration-count: " + escape(infinite ? "infinite" : iterationCount, true) + "; --x-spread: " + escape(1 - xSpread, true)}"></div>`;
  })}</div>`}`;
});
const ChangelogModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $WEBUI_NAME, $$unsubscribe_WEBUI_NAME;
  let $$unsubscribe_config;
  let $$unsubscribe_settings;
  $$unsubscribe_WEBUI_NAME = subscribe(WEBUI_NAME, (value) => $WEBUI_NAME = value);
  $$unsubscribe_config = subscribe(config, (value) => value);
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
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
          return `<div class="px-5 pt-4 dark:text-gray-300 text-gray-700"><div class="flex justify-between items-start"><div class="text-xl font-semibold">${escape($i18n.t("What’s New in"))} ${escape($WEBUI_NAME)} ${validate_component(Confetti, "Confetti").$$render($$result, { x: [-1, -0.25], y: [0, 0.5] }, {}, {})}</div> <button class="self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><p class="sr-only">${escape($i18n.t("Close"))}</p><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex items-center mt-1"><div class="text-sm dark:text-gray-200">${escape($i18n.t("Release Notes"))}</div> <div class="flex self-center w-[1px] h-6 mx-2.5 bg-gray-200 dark:bg-gray-700"></div> <div class="text-sm dark:text-gray-200">v${escape(WEBUI_VERSION)}</div></div></div> <div class="w-full p-4 px-5 text-gray-700 dark:text-gray-100"><div class="overflow-y-scroll max-h-96 scrollbar-hidden"><div class="mb-3">${``}</div></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"><span class="relative">${escape($i18n.t("Okay, Let's Go!"))}</span></button></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  $$unsubscribe_WEBUI_NAME();
  $$unsubscribe_config();
  $$unsubscribe_settings();
  return $$rendered;
});
const AccountPending = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $config, $$unsubscribe_config;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  $$unsubscribe_config();
  $$unsubscribe_i18n();
  return `<div class="fixed w-full h-full flex z-999"><div class="absolute w-full h-full backdrop-blur-lg bg-white/10 dark:bg-gray-900/50 flex justify-center"><div class="m-auto pb-10 flex flex-col justify-center"><div class="max-w-md"><div class="text-center dark:text-white text-2xl font-medium z-50" style="white-space: pre-wrap;">${($config?.ui?.pending_user_overlay_title ?? "").trim() !== "" ? `${escape($config.ui.pending_user_overlay_title)}` : `${escape($i18n.t("Account Activation Pending"))}<br> ${escape($i18n.t("Contact Admin for WebUI Access"))}`}</div> <div class="mt-4 text-center text-sm dark:text-gray-200 w-full" style="white-space: pre-wrap;">${($config?.ui?.pending_user_overlay_content ?? "").trim() !== "" ? `${escape($config.ui.pending_user_overlay_content)}` : `${escape($i18n.t("Your account status is currently pending activation."))}${escape("\n")}${escape($i18n.t("To access the WebUI, please reach out to the administrator. Admins can manage user statuses from the Admin Panel."))}`}</div> ${``} <div class="mt-6 mx-auto relative group w-fit"><button class="relative z-20 flex px-5 py-2 rounded-full bg-white border border-gray-100 dark:border-none hover:bg-gray-100 text-gray-700 transition font-medium text-sm">${escape($i18n.t("Check Again"))}</button> <button class="text-xs text-center w-full mt-2 text-gray-400 underline">${escape($i18n.t("Sign Out"))}</button></div></div></div></div></div>`;
});
const css = {
  code: "@keyframes svelte-19023qi-l{to{clip-path:inset(0 -1ch 0 0)}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { toast } from \\"svelte-sonner\\";\\nimport { onMount, tick, getContext } from \\"svelte\\";\\nimport { openDB, deleteDB } from \\"idb\\";\\nimport fileSaver from \\"file-saver\\";\\nconst { saveAs } = fileSaver;\\nimport mermaid from \\"mermaid\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport { page } from \\"$app/stores\\";\\nimport { fade } from \\"svelte/transition\\";\\nimport { getKnowledgeBases } from \\"$lib/apis/knowledge\\";\\nimport { getFunctions } from \\"$lib/apis/functions\\";\\nimport { getModels, getToolServersData, getVersionUpdates } from \\"$lib/apis\\";\\nimport { getAllTags } from \\"$lib/apis/chats\\";\\nimport { getPrompts } from \\"$lib/apis/prompts\\";\\nimport { getTools } from \\"$lib/apis/tools\\";\\nimport { getBanners } from \\"$lib/apis/configs\\";\\nimport { getUserSettings } from \\"$lib/apis/users\\";\\nimport { WEBUI_VERSION } from \\"$lib/constants\\";\\nimport { compareVersion } from \\"$lib/utils\\";\\nimport {\\n  config,\\n  user,\\n  settings,\\n  models,\\n  prompts,\\n  knowledge,\\n  tools,\\n  functions,\\n  tags,\\n  banners,\\n  showSettings,\\n  showChangelog,\\n  temporaryChatEnabled,\\n  toolServers,\\n  showSearch\\n} from \\"$lib/stores\\";\\nimport Sidebar from \\"$lib/components/layout/Sidebar.svelte\\";\\nimport SettingsModal from \\"$lib/components/chat/SettingsModal.svelte\\";\\nimport ChangelogModal from \\"$lib/components/ChangelogModal.svelte\\";\\nimport AccountPending from \\"$lib/components/layout/Overlay/AccountPending.svelte\\";\\nimport UpdateInfoToast from \\"$lib/components/layout/UpdateInfoToast.svelte\\";\\nimport { get } from \\"svelte/store\\";\\nimport Spinner from \\"$lib/components/common/Spinner.svelte\\";\\nconst i18n = getContext(\\"i18n\\");\\nlet loaded = false;\\nlet DB = null;\\nlet localDBChats = [];\\nlet version;\\nonMount(async () => {\\n  if ($user === void 0 || $user === null) {\\n    await goto(\\"/auth\\");\\n  } else if ([\\"user\\", \\"admin\\"].includes($user?.role)) {\\n    try {\\n      DB = await openDB(\\"Chats\\", 1);\\n      if (DB) {\\n        const chats = await DB.getAllFromIndex(\\"chats\\", \\"timestamp\\");\\n        localDBChats = chats.map((item, idx) => chats[chats.length - 1 - idx]);\\n        if (localDBChats.length === 0) {\\n          await deleteDB(\\"Chats\\");\\n        }\\n      }\\n      console.log(DB);\\n    } catch (error) {\\n    }\\n    const chatInputKeys = Object.keys(localStorage).filter(\\n      (key) => key.startsWith(\\"chat-input-\\")\\n    );\\n    if (chatInputKeys.length > 0) {\\n      chatInputKeys.forEach((key) => {\\n        localStorage.removeItem(key);\\n      });\\n    }\\n    const userSettings = await getUserSettings(localStorage.token).catch((error) => {\\n      console.error(error);\\n      return null;\\n    });\\n    if (userSettings) {\\n      settings.set(userSettings.ui);\\n    } else {\\n      let localStorageSettings = {};\\n      try {\\n        localStorageSettings = JSON.parse(localStorage.getItem(\\"settings\\") ?? \\"{}\\");\\n      } catch (e) {\\n        console.error(\\"Failed to parse settings from localStorage\\", e);\\n      }\\n      settings.set(localStorageSettings);\\n    }\\n    models.set(\\n      await getModels(\\n        localStorage.token,\\n        $config?.features?.enable_direct_connections && ($settings?.directConnections ?? null)\\n      )\\n    );\\n    banners.set(await getBanners(localStorage.token));\\n    tools.set(await getTools(localStorage.token));\\n    toolServers.set(await getToolServersData($i18n, $settings?.toolServers ?? []));\\n    document.addEventListener(\\"keydown\\", async function(event) {\\n      const isCtrlPressed = event.ctrlKey || event.metaKey;\\n      const isShiftPressed = event.shiftKey;\\n      if (isCtrlPressed && event.key.toLowerCase() === \\"k\\") {\\n        event.preventDefault();\\n        console.log(\\"search\\");\\n        showSearch.set(!$showSearch);\\n      }\\n      if (isCtrlPressed && isShiftPressed && event.key.toLowerCase() === \\"o\\") {\\n        event.preventDefault();\\n        console.log(\\"newChat\\");\\n        document.getElementById(\\"sidebar-new-chat-button\\")?.click();\\n      }\\n      if (isShiftPressed && event.key === \\"Escape\\") {\\n        event.preventDefault();\\n        console.log(\\"focusInput\\");\\n        document.getElementById(\\"chat-input\\")?.focus();\\n      }\\n      if (isCtrlPressed && isShiftPressed && event.key === \\";\\") {\\n        event.preventDefault();\\n        console.log(\\"copyLastCodeBlock\\");\\n        const button = [...document.getElementsByClassName(\\"copy-code-button\\")]?.at(-1);\\n        button?.click();\\n      }\\n      if (isCtrlPressed && isShiftPressed && event.key.toLowerCase() === \\"c\\") {\\n        event.preventDefault();\\n        console.log(\\"copyLastResponse\\");\\n        const button = [...document.getElementsByClassName(\\"copy-response-button\\")]?.at(-1);\\n        console.log(button);\\n        button?.click();\\n      }\\n      if (isCtrlPressed && isShiftPressed && event.key.toLowerCase() === \\"s\\") {\\n        event.preventDefault();\\n        console.log(\\"toggleSidebar\\");\\n        document.getElementById(\\"sidebar-toggle-button\\")?.click();\\n      }\\n      if (isCtrlPressed && isShiftPressed && (event.key === \\"Backspace\\" || event.key === \\"Delete\\")) {\\n        event.preventDefault();\\n        console.log(\\"deleteChat\\");\\n        document.getElementById(\\"delete-chat-button\\")?.click();\\n      }\\n      if (isCtrlPressed && event.key === \\".\\") {\\n        event.preventDefault();\\n        console.log(\\"openSettings\\");\\n        showSettings.set(!$showSettings);\\n      }\\n      if (isCtrlPressed && event.key === \\"/\\") {\\n        event.preventDefault();\\n        console.log(\\"showShortcuts\\");\\n        document.getElementById(\\"show-shortcuts-button\\")?.click();\\n      }\\n      if (isCtrlPressed && isShiftPressed && (event.key.toLowerCase() === \`'\` || event.key.toLowerCase() === \`\\"\`)) {\\n        event.preventDefault();\\n        console.log(\\"temporaryChat\\");\\n        temporaryChatEnabled.set(!$temporaryChatEnabled);\\n        await goto(\\"/\\");\\n        const newChatButton = document.getElementById(\\"new-chat-button\\");\\n        setTimeout(() => {\\n          newChatButton?.click();\\n        }, 0);\\n      }\\n    });\\n    if ($user?.role === \\"admin\\" && ($settings?.showChangelog ?? true)) {\\n      showChangelog.set($settings?.version !== $config.version);\\n    }\\n    if ($user?.role === \\"admin\\" || ($user?.permissions?.chat?.temporary ?? true)) {\\n      if ($page.url.searchParams.get(\\"temporary-chat\\") === \\"true\\") {\\n        temporaryChatEnabled.set(true);\\n      }\\n      if ($user?.permissions?.chat?.temporary_enforced) {\\n        temporaryChatEnabled.set(true);\\n      }\\n    }\\n    if ($user?.role === \\"admin\\") {\\n      if (localStorage.dismissedUpdateToast) {\\n        const dismissedUpdateToast = new Date(Number(localStorage.dismissedUpdateToast));\\n        const now = /* @__PURE__ */ new Date();\\n        if (now - dismissedUpdateToast > 24 * 60 * 60 * 1e3) {\\n          checkForVersionUpdates();\\n        }\\n      } else {\\n        checkForVersionUpdates();\\n      }\\n    }\\n    await tick();\\n  }\\n  loaded = true;\\n});\\nconst checkForVersionUpdates = async () => {\\n  version = await getVersionUpdates(localStorage.token).catch((error) => {\\n    return {\\n      current: WEBUI_VERSION,\\n      latest: WEBUI_VERSION\\n    };\\n  });\\n};\\n<\/script>\\n\\n<SettingsModal bind:show={$showSettings} />\\n<ChangelogModal bind:show={$showChangelog} />\\n\\n{#if version && compareVersion(version.latest, version.current) && ($settings?.showUpdateToast ?? true)}\\n\\t<div class=\\" absolute bottom-8 right-8 z-50\\" in:fade={{ duration: 100 }}>\\n\\t\\t<UpdateInfoToast\\n\\t\\t\\t{version}\\n\\t\\t\\ton:close={() => {\\n\\t\\t\\t\\tlocalStorage.setItem('dismissedUpdateToast', Date.now().toString());\\n\\t\\t\\t\\tversion = null;\\n\\t\\t\\t}}\\n\\t\\t/>\\n\\t</div>\\n{/if}\\n\\n{#if $user}\\n\\t<div class=\\"app relative\\">\\n\\t\\t<div\\n\\t\\t\\tclass=\\" text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] overflow-auto flex flex-row justify-end\\"\\n\\t\\t>\\n\\t\\t\\t{#if !['user', 'admin'].includes($user?.role)}\\n\\t\\t\\t\\t<AccountPending />\\n\\t\\t\\t{:else if localDBChats.length > 0}\\n\\t\\t\\t\\t<div class=\\"fixed w-full h-full flex z-50\\">\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tclass=\\"absolute w-full h-full backdrop-blur-md bg-white/20 dark:bg-gray-900/50 flex justify-center\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<div class=\\"m-auto pb-44 flex flex-col justify-center\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"max-w-md\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"text-center dark:text-white text-2xl font-medium z-50\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tImportant Update<br /> Action Required for Chat Log Storage\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" mt-4 text-center text-sm dark:text-gray-200 w-full\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\"Saving chat logs directly to your browser's storage is no longer supported. Please take a moment to download and delete your chat logs by clicking the button below. Don't worry, you can easily re-import your chat logs to the backend through\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"font-semibold dark:text-white\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$i18n.t('Settings')} > {$i18n.t('Chats')} > {$i18n.t('Import Chats')}</span\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>. {$i18n.t(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'This ensures that your valuable conversations are securely saved to your backend database. Thank you!'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" mt-6 mx-auto relative group w-fit\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"relative z-20 flex px-5 py-2 rounded-full bg-white border border-gray-100 dark:border-none hover:bg-gray-100 transition font-medium text-sm\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={async () => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tlet blob = new Blob([JSON.stringify(localDBChats)], {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype: 'application/json'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsaveAs(blob, \`chat-export-\${Date.now()}.json\`);\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst tx = DB.transaction('chats', 'readwrite');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tawait Promise.all([tx.store.clear(), tx.done]);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tawait deleteDB('Chats');\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tlocalDBChats = [];\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tDownload & Delete\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"text-xs text-center w-full mt-2 text-gray-400 underline\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={async () => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tlocalDBChats = [];\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}>{$i18n.t('Close')}</button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\n\\t\\t\\t<Sidebar />\\n\\n\\t\\t\\t{#if loaded}\\n\\t\\t\\t\\t<slot />\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<div class=\\"w-full flex-1 h-full flex items-center justify-center\\">\\n\\t\\t\\t\\t\\t<Spinner />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.loading {\\n\\t\\tdisplay: inline-block;\\n\\t\\tclip-path: inset(0 1ch 0 0);\\n\\t\\tanimation: l 1s steps(3) infinite;\\n\\t\\tletter-spacing: -0.5px;\\n\\t}\\n\\n\\t@keyframes l {\\n\\t\\tto {\\n\\t\\t\\tclip-path: inset(0 -1ch 0 0);\\n\\t\\t}\\n\\t}\\n\\n\\tpre[class*='language-'] {\\n\\t\\tposition: relative;\\n\\t\\toverflow: auto;\\n\\n\\t\\t/* make space  */\\n\\t\\tmargin: 5px 0;\\n\\t\\tpadding: 1.75rem 0 1.75rem 1rem;\\n\\t\\tborder-radius: 10px;\\n\\t}\\n\\n\\tpre[class*='language-'] button {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 5px;\\n\\t\\tright: 5px;\\n\\n\\t\\tfont-size: 0.9rem;\\n\\t\\tpadding: 0.15rem;\\n\\t\\tbackground-color: #828282;\\n\\n\\t\\tborder: ridge 1px #7b7b7c;\\n\\t\\tborder-radius: 5px;\\n\\t\\ttext-shadow: #c4c4c4 0 0 2px;\\n\\t}\\n\\n\\tpre[class*='language-'] button:hover {\\n\\t\\tcursor: pointer;\\n\\t\\tbackground-color: #bcbabb;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmSC,WAAW,gBAAE,CACZ,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAC5B,CACD"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $$unsubscribe_page;
  let $$unsubscribe_config;
  let $$unsubscribe_settings;
  let $$unsubscribe_temporaryChatEnabled;
  let $showSettings, $$unsubscribe_showSettings;
  let $$unsubscribe_showSearch;
  let $i18n, $$unsubscribe_i18n;
  let $showChangelog, $$unsubscribe_showChangelog;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_config = subscribe(config, (value) => value);
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_temporaryChatEnabled = subscribe(temporaryChatEnabled, (value) => value);
  $$unsubscribe_showSettings = subscribe(showSettings, (value) => $showSettings = value);
  $$unsubscribe_showSearch = subscribe(showSearch, (value) => value);
  $$unsubscribe_showChangelog = subscribe(showChangelog, (value) => $showChangelog = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let localDBChats = [];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(SettingsModal, "SettingsModal").$$render(
      $$result,
      { show: $showSettings },
      {
        show: ($$value) => {
          $showSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ChangelogModal, "ChangelogModal").$$render(
      $$result,
      { show: $showChangelog },
      {
        show: ($$value) => {
          $showChangelog = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${``} ${$user ? `<div class="app relative"><div class="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] overflow-auto flex flex-row justify-end">${!["user", "admin"].includes($user?.role) ? `${validate_component(AccountPending, "AccountPending").$$render($$result, {}, {}, {})}` : `${localDBChats.length > 0 ? `<div class="fixed w-full h-full flex z-50"><div class="absolute w-full h-full backdrop-blur-md bg-white/20 dark:bg-gray-900/50 flex justify-center"><div class="m-auto pb-44 flex flex-col justify-center"><div class="max-w-md"><div class="text-center dark:text-white text-2xl font-medium z-50" data-svelte-h="svelte-mnqwc6">Important Update<br> Action Required for Chat Log Storage</div> <div class="mt-4 text-center text-sm dark:text-gray-200 w-full">${escape($i18n.t("Saving chat logs directly to your browser's storage is no longer supported. Please take a moment to download and delete your chat logs by clicking the button below. Don't worry, you can easily re-import your chat logs to the backend through"))} <span class="font-semibold dark:text-white">${escape($i18n.t("Settings"))} &gt; ${escape($i18n.t("Chats"))} &gt; ${escape($i18n.t("Import Chats"))}</span>. ${escape($i18n.t("This ensures that your valuable conversations are securely saved to your backend database. Thank you!"))}</div> <div class="mt-6 mx-auto relative group w-fit"><button class="relative z-20 flex px-5 py-2 rounded-full bg-white border border-gray-100 dark:border-none hover:bg-gray-100 transition font-medium text-sm" data-svelte-h="svelte-1ia8i9q">Download &amp; Delete</button> <button class="text-xs text-center w-full mt-2 text-gray-400 underline">${escape($i18n.t("Close"))}</button></div></div></div></div></div>` : ``}`} ${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})} ${`<div class="w-full flex-1 h-full flex items-center justify-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}</div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_page();
  $$unsubscribe_config();
  $$unsubscribe_settings();
  $$unsubscribe_temporaryChatEnabled();
  $$unsubscribe_showSettings();
  $$unsubscribe_showSearch();
  $$unsubscribe_i18n();
  $$unsubscribe_showChangelog();
  return $$rendered;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte.js.map
