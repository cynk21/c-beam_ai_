import { c as create_ssr_component, a as add_attribute, b as subscribe, l as getContext, v as validate_component, g as escape, e as each, p as createEventDispatcher } from "./ssr.js";
import { t as tick } from "./scheduler.js";
import "dequal";
import "./create.js";
import { a as Menu, b as Menu_trigger, M as Menu_content, f as flyAndScale } from "./menu-trigger.js";
import { marked } from "marked";
import Fuse from "fuse.js";
import dayjs from "dayjs";
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
import relativeTime from "dayjs/plugin/relativeTime.js";
import "./client.js";
import { O as OLLAMA_API_BASE_URL, a as settings, u as user, c as config, M as MODEL_DOWNLOAD_POOL, m as mobile, t as temporaryChatEnabled, r as models } from "./index2.js";
import { a as toast } from "./Toaster.svelte_svelte_type_style_lang.js";
import { s as sanitizeResponseContent, c as copyToClipboard } from "./index3.js";
import { g as getModels } from "./index7.js";
import { C as ChevronDown } from "./ChevronDown.js";
import { L as Link, S as Search } from "./Search.js";
import { T as Tooltip } from "./Tooltip.js";
import { S as Switch_1 } from "./Switch.js";
import { E as EyeSlash, C as Check } from "./EyeSlash.js";
import { E as EllipsisHorizontal } from "./EllipsisHorizontal.js";
const unloadModel = async (token, tagName) => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/api/unload`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name: tagName
    })
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const ChatBubbleOval = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"></path></svg>`;
});
const ArrowUpTray = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"></path></svg>`;
});
const Eye = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`;
});
const ModelItemMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  let { model } = $$props;
  let { pinModelHandler = () => {
  } } = $$props;
  let { copyLinkHandler = () => {
  } } = $$props;
  let { onClose = () => {
  } } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.model === void 0 && $$bindings.model && model !== void 0) $$bindings.model(model);
  if ($$props.pinModelHandler === void 0 && $$bindings.pinModelHandler && pinModelHandler !== void 0) $$bindings.pinModelHandler(pinModelHandler);
  if ($$props.copyLinkHandler === void 0 && $$bindings.copyLinkHandler && copyLinkHandler !== void 0) $$bindings.copyLinkHandler(copyLinkHandler);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Menu, "DropdownMenu.Root").$$render(
      $$result,
      {
        closeFocus: false,
        onOpenChange: (state) => {
          if (state === false) {
            onClose();
          }
        },
        typeahead: false,
        open: show
      },
      {
        open: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Menu_trigger, "DropdownMenu.Trigger").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Tooltip, "Tooltip").$$render(
                $$result,
                {
                  content: $i18n.t("More"),
                  className: " group-hover/item:opacity-100  opacity-0"
                },
                {},
                {
                  default: () => {
                    return `${slots.default ? slots.default({}) : ``}`;
                  }
                }
              )}`;
            }
          })} ${validate_component(Menu_content, "DropdownMenu.Content").$$render(
            $$result,
            {
              strategy: "fixed",
              class: "w-full max-w-[180px] text-sm rounded-xl px-1 py-1.5 z-[9999999] bg-white dark:bg-gray-850 dark:text-white shadow-lg",
              sideOffset: -2,
              side: "bottom",
              align: "end",
              transition: flyAndScale
            },
            {},
            {
              default: () => {
                return `<button type="button" class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition items-center gap-2">${($settings?.pinnedModels ?? []).includes(model?.id) ? `${validate_component(EyeSlash, "EyeSlash").$$render($$result, {}, {}, {})}` : `${validate_component(Eye, "Eye").$$render($$result, {}, {}, {})}`} <div class="flex items-center">${($settings?.pinnedModels ?? []).includes(model?.id) ? `${escape($i18n.t("Hide from Sidebar"))}` : `${escape($i18n.t("Keep in Sidebar"))}`}</div></button> <button type="button" class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition items-center gap-2">${validate_component(Link, "Link").$$render($$result, {}, {}, {})} <div class="flex items-center">${escape($i18n.t("Copy Link"))}</div></button>`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  $$unsubscribe_settings();
  return $$rendered;
});
const ModelItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value2) => $user = value2);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value2) => $i18n = value2);
  let { selectedModelIdx = -1 } = $$props;
  let { item = {} } = $$props;
  let { index = -1 } = $$props;
  let { value = "" } = $$props;
  let { unloadModelHandler = () => {
  } } = $$props;
  let { pinModelHandler = () => {
  } } = $$props;
  let { onClick = () => {
  } } = $$props;
  const copyLinkHandler = async (model) => {
    const baseUrl = window.location.origin;
    const res = await copyToClipboard(`${baseUrl}/?model=${encodeURIComponent(model.id)}`);
    if (res) {
      toast.success($i18n.t("Copied link to clipboard"));
    } else {
      toast.error($i18n.t("Failed to copy link"));
    }
  };
  let showMenu = false;
  if ($$props.selectedModelIdx === void 0 && $$bindings.selectedModelIdx && selectedModelIdx !== void 0) $$bindings.selectedModelIdx(selectedModelIdx);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.unloadModelHandler === void 0 && $$bindings.unloadModelHandler && unloadModelHandler !== void 0) $$bindings.unloadModelHandler(unloadModelHandler);
  if ($$props.pinModelHandler === void 0 && $$bindings.pinModelHandler && pinModelHandler !== void 0) $$bindings.pinModelHandler(pinModelHandler);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<button aria-label="model-item" class="${"flex group/item w-full text-left font-medium line-clamp-1 select-none items-center rounded-button py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-hidden transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer data-highlighted:bg-muted " + escape(
      index === selectedModelIdx ? "bg-gray-100 dark:bg-gray-800 group-hover:bg-transparent" : "",
      true
    )}"${add_attribute("data-arrow-selected", index === selectedModelIdx, 0)}${add_attribute("data-value", item.value, 0)}><div class="flex flex-col flex-1 gap-1.5">${(item?.model?.tags ?? []).length > 0 ? `<div class="flex gap-0.5 self-center items-start h-full w-full translate-y-[0.5px] overflow-x-auto scrollbar-none">${each(item.model?.tags.sort((a, b) => a.name.localeCompare(b.name)), (tag) => {
      return `${validate_component(Tooltip, "Tooltip").$$render(
        $$result,
        {
          content: tag.name,
          className: "flex-shrink-0"
        },
        {},
        {
          default: () => {
            return `<div class="text-xs font-bold px-1 rounded-sm uppercase bg-gray-500/20 text-gray-700 dark:text-gray-200">${escape(tag.name)}</div> `;
          }
        }
      )}`;
    })}</div>` : ``} <div class="flex items-center gap-2"><div class="flex items-center min-w-fit">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $user?.role === "admin" ? item?.value ?? "" : "",
        placement: "top-start"
      },
      {},
      {
        default: () => {
          return `<img${add_attribute("src", item.model?.info?.meta?.profile_image_url ?? "/static/favicon.png", 0)} alt="Model" class="rounded-full size-5 flex items-center">`;
        }
      }
    )}</div> <div class="flex items-center">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: `${item.label} (${item.value})`,
        placement: "top-start"
      },
      {},
      {
        default: () => {
          return `<div class="line-clamp-1">${escape(item.label)}</div>`;
        }
      }
    )}</div> <div class="shrink-0 flex items-center gap-2">${item.model.owned_by === "ollama" ? `${(item.model.ollama?.details?.parameter_size ?? "") !== "" ? `<div class="flex items-center translate-y-[0.5px]">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: `${item.model.ollama?.details?.quantization_level ? item.model.ollama?.details?.quantization_level + " " : ""}${item.model.ollama?.size ? `(${(item.model.ollama?.size / 1024 ** 3).toFixed(1)}GB)` : ""}`,
        className: "self-end"
      },
      {},
      {
        default: () => {
          return `<span class="text-xs font-medium text-gray-600 dark:text-gray-400 line-clamp-1">${escape(item.model.ollama?.details?.parameter_size ?? "")}</span>`;
        }
      }
    )}</div>` : ``} ${item.model.ollama?.expires_at && new Date(item.model.ollama?.expires_at * 1e3) > /* @__PURE__ */ new Date() ? `<div class="flex items-center translate-y-[0.5px] px-0.5">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: `${$i18n.t("Unloads {{FROM_NOW}}", {
          FROM_NOW: dayjs(item.model.ollama?.expires_at * 1e3).fromNow()
        })}`,
        className: "self-end"
      },
      {},
      {
        default: () => {
          return `<div class="flex items-center" data-svelte-h="svelte-pq0hxj"><span class="relative flex size-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full size-2 bg-green-500"></span></span></div>`;
        }
      }
    )}</div>` : ``}` : ``}  ${item.model?.direct ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { content: `${$i18n.t("Direct")}` }, {}, {
      default: () => {
        return `<div class="translate-y-[1px]" data-svelte-h="svelte-1pvx0j8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3"><path fill-rule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2C8.963 2 14 7.037 14 13.25a.75.75 0 0 1-1.5 0c0-5.385-4.365-9.75-9.75-9.75A.75.75 0 0 1 2 2.75Zm0 4.5a.75.75 0 0 1 .75-.75 6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0C8 10.35 5.65 8 2.75 8A.75.75 0 0 1 2 7.25ZM3.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" clip-rule="evenodd"></path></svg></div>`;
      }
    })}` : `${item.model.connection_type === "external" ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { content: `${$i18n.t("External")}` }, {}, {
      default: () => {
        return `<div class="translate-y-[1px]" data-svelte-h="svelte-1we9nfa"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3"><path fill-rule="evenodd" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path></svg></div>`;
      }
    })}` : ``}`} ${item.model?.info?.meta?.description ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: `${marked.parse(sanitizeResponseContent(item.model?.info?.meta?.description).replaceAll("\n", "<br>"))}`
      },
      {},
      {
        default: () => {
          return `<div class="translate-y-[1px]" data-svelte-h="svelte-i7zoyb"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path></svg></div>`;
        }
      }
    )}` : ``}</div></div></div> <div class="ml-auto pl-2 pr-1 flex items-center gap-1.5 shrink-0">${$user?.role === "admin" && item.model.owned_by === "ollama" && item.model.ollama?.expires_at && new Date(item.model.ollama?.expires_at * 1e3) > /* @__PURE__ */ new Date() ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: `${$i18n.t("Eject")}`,
        className: "flex-shrink-0 group-hover/item:opacity-100 opacity-0 "
      },
      {},
      {
        default: () => {
          return `<button class="flex">${validate_component(ArrowUpTray, "ArrowUpTray").$$render($$result, { className: "size-3" }, {}, {})}</button>`;
        }
      }
    )}` : ``} ${validate_component(ModelItemMenu, "ModelItemMenu").$$render(
      $$result,
      {
        model: item.model,
        pinModelHandler,
        copyLinkHandler: () => {
          copyLinkHandler(item.model);
        },
        show: showMenu
      },
      {
        show: ($$value) => {
          showMenu = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<button class="flex">${validate_component(EllipsisHorizontal, "EllipsisHorizontal").$$render($$result, {}, {}, {})}</button>`;
        }
      }
    )} ${value === item.value ? `<div>${validate_component(Check, "Check").$$render($$result, { className: "size-3" }, {}, {})}</div>` : ``}</div></button>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  $$unsubscribe_user();
  return $$rendered;
});
const Selector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredItems;
  let $settings, $$unsubscribe_settings;
  let $config, $$unsubscribe_config;
  let $i18n, $$unsubscribe_i18n;
  let $MODEL_DOWNLOAD_POOL, $$unsubscribe_MODEL_DOWNLOAD_POOL;
  let $mobile, $$unsubscribe_mobile;
  let $user, $$unsubscribe_user;
  let $temporaryChatEnabled, $$unsubscribe_temporaryChatEnabled;
  $$unsubscribe_settings = subscribe(settings, (value2) => $settings = value2);
  $$unsubscribe_config = subscribe(config, (value2) => $config = value2);
  $$unsubscribe_MODEL_DOWNLOAD_POOL = subscribe(MODEL_DOWNLOAD_POOL, (value2) => $MODEL_DOWNLOAD_POOL = value2);
  $$unsubscribe_mobile = subscribe(mobile, (value2) => $mobile = value2);
  $$unsubscribe_user = subscribe(user, (value2) => $user = value2);
  $$unsubscribe_temporaryChatEnabled = subscribe(temporaryChatEnabled, (value2) => $temporaryChatEnabled = value2);
  dayjs.extend(relativeTime);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value2) => $i18n = value2);
  createEventDispatcher();
  let { id = "" } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "Select a model" } = $$props;
  let { searchEnabled = true } = $$props;
  let { searchPlaceholder = $i18n.t("Search a model") } = $$props;
  let { showTemporaryChatControl = false } = $$props;
  let { items = [] } = $$props;
  let { className = "w-[32rem]" } = $$props;
  let { triggerClassName = "text-lg" } = $$props;
  let { pinModelHandler = () => {
  } } = $$props;
  let tagsContainerElement;
  let show = false;
  let tags = [];
  let selectedModel = "";
  let searchValue = "";
  let selectedTag = "";
  let ollamaVersion = null;
  let selectedModelIdx = 0;
  const fuse = new Fuse(
    items.map((item) => {
      const _item = {
        ...item,
        modelName: item.model?.name,
        tags: (item.model?.tags ?? []).map((tag) => tag.name).join(" "),
        desc: item.model?.info?.meta?.description
      };
      return _item;
    }),
    {
      keys: ["value", "tags", "modelName"],
      threshold: 0.4
    }
  );
  const resetView = async () => {
    await tick();
    const selectedInFiltered = filteredItems.findIndex((item2) => item2.value === value);
    if (selectedInFiltered >= 0) {
      selectedModelIdx = selectedInFiltered;
    } else {
      selectedModelIdx = 0;
    }
    await tick();
    const item = document.querySelector(`[data-arrow-selected="true"]`);
    item?.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "instant"
    });
  };
  const unloadModelHandler = async (model) => {
    const res = await unloadModel(localStorage.token, model).catch((error) => {
      toast.error($i18n.t("Error unloading model: {{error}}", { error }));
    });
    if (res) {
      toast.success($i18n.t("Model unloaded successfully"));
      models.set(await getModels(localStorage.token, $config?.features?.enable_direct_connections && ($settings?.directConnections ?? null)));
    }
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.searchEnabled === void 0 && $$bindings.searchEnabled && searchEnabled !== void 0) $$bindings.searchEnabled(searchEnabled);
  if ($$props.searchPlaceholder === void 0 && $$bindings.searchPlaceholder && searchPlaceholder !== void 0) $$bindings.searchPlaceholder(searchPlaceholder);
  if ($$props.showTemporaryChatControl === void 0 && $$bindings.showTemporaryChatControl && showTemporaryChatControl !== void 0) $$bindings.showTemporaryChatControl(showTemporaryChatControl);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.triggerClassName === void 0 && $$bindings.triggerClassName && triggerClassName !== void 0) $$bindings.triggerClassName(triggerClassName);
  if ($$props.pinModelHandler === void 0 && $$bindings.pinModelHandler && pinModelHandler !== void 0) $$bindings.pinModelHandler(pinModelHandler);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selectedModel = items.find((item) => item.value === value) ?? "";
    filteredItems = (searchValue ? fuse.search(searchValue).map((e) => {
      return e.item;
    }).filter((item) => {
      {
        return true;
      }
    }).filter((item) => {
      {
        return true;
      }
    }) : items.filter((item) => {
      {
        return true;
      }
    }).filter((item) => {
      {
        return true;
      }
    })).filter((item) => !(item.model?.info?.meta?.hidden ?? false));
    {
      {
        resetView();
      }
    }
    $$rendered = `${validate_component(Menu, "DropdownMenu.Root").$$render(
      $$result,
      {
        onOpenChange: async () => {
          searchValue = "";
          window.setTimeout(() => document.getElementById("model-search-input")?.focus(), 0);
          resetView();
        },
        closeFocus: false,
        open: show
      },
      {
        open: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Menu_trigger, "DropdownMenu.Trigger").$$render(
            $$result,
            {
              class: "relative w-full font-primary",
              "aria-label": placeholder,
              id: "model-selector-" + id + "-button"
            },
            {},
            {
              default: () => {
                return `<button class="${"flex w-full text-left px-0.5 outline-hidden bg-transparent truncate " + escape(triggerClassName, true) + " justify-between font-medium placeholder-gray-400 focus:outline-hidden"}" type="button">${selectedModel ? `${escape(selectedModel.label)}` : `${escape(placeholder)}`} ${validate_component(ChevronDown, "ChevronDown").$$render(
                  $$result,
                  {
                    className: " self-center ml-2 size-3",
                    strokeWidth: "2.5"
                  },
                  {},
                  {}
                )}</button>`;
              }
            }
          )} ${validate_component(Menu_content, "DropdownMenu.Content").$$render(
            $$result,
            {
              class: " z-40 " + ($mobile ? `w-full` : `${className}`) + " max-w-[calc(100vw-1rem)] justify-start rounded-xl  bg-white dark:bg-gray-850 dark:text-white shadow-lg  outline-hidden",
              transition: flyAndScale,
              side: $mobile ? "bottom" : "bottom-start",
              sideOffset: 3
            },
            {},
            {
              default: () => {
                return `${slots.default ? slots.default({}) : ` ${searchEnabled ? `<div class="flex items-center gap-2.5 px-5 mt-3.5 mb-1.5">${validate_component(Search, "Search").$$render($$result, { className: "size-4", strokeWidth: "2.5" }, {}, {})} <input id="model-search-input" class="w-full text-sm bg-transparent outline-hidden"${add_attribute("placeholder", searchPlaceholder, 0)} autocomplete="off"${add_attribute("value", searchValue, 0)}></div>` : ``} <div class="px-3">${tags && items.filter((item) => !(item.model?.info?.meta?.hidden ?? false)).length > 0 ? `<div class="flex w-full bg-white dark:bg-gray-850 overflow-x-auto scrollbar-none"><div class="flex gap-1 w-fit text-center text-sm font-medium rounded-full bg-transparent px-1.5 pb-0.5"${add_attribute("this", tagsContainerElement, 0)}>${items.find((item) => item.model?.connection_type === "local") && items.find((item) => item.model?.connection_type === "external") || items.find((item) => item.model?.direct) || tags.length > 0 ? `<button class="${"min-w-fit outline-none p-1.5 " + escape(
                  "",
                  true
                ) + " transition capitalize"}">${escape($i18n.t("All"))}</button>` : ``} ${items.find((item) => item.model?.connection_type === "local") && items.find((item) => item.model?.connection_type === "external") ? `<button class="${"min-w-fit outline-none p-1.5 " + escape(
                  "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
                  true
                ) + " transition capitalize"}">${escape($i18n.t("Local"))}</button> <button class="${"min-w-fit outline-none p-1.5 " + escape(
                  "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
                  true
                ) + " transition capitalize"}">${escape($i18n.t("External"))}</button>` : ``} ${items.find((item) => item.model?.direct) ? `<button class="${"min-w-fit outline-none p-1.5 " + escape(
                  "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
                  true
                ) + " transition capitalize"}">${escape($i18n.t("Direct"))}</button>` : ``} ${each(tags, (tag) => {
                  return `<button class="${"min-w-fit outline-none p-1.5 " + escape(
                    selectedTag === tag ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
                    true
                  ) + " transition capitalize"}">${escape(tag)} </button>`;
                })}</div></div>` : ``}</div> <div class="px-3 max-h-64 overflow-y-auto group relative">${filteredItems.length ? each(filteredItems, (item, index) => {
                  return `${validate_component(ModelItem, "ModelItem").$$render(
                    $$result,
                    {
                      selectedModelIdx,
                      item,
                      index,
                      value,
                      pinModelHandler,
                      unloadModelHandler,
                      onClick: () => {
                        value = item.value;
                        selectedModelIdx = index;
                        show = false;
                      }
                    },
                    {},
                    {}
                  )}`;
                }) : `<div class=""><div class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-100">${escape($i18n.t("No results found"))}</div> </div>`} ${!(searchValue.trim() in $MODEL_DOWNLOAD_POOL) && searchValue && ollamaVersion && $user?.role === "admin" ? `${validate_component(Tooltip, "Tooltip").$$render(
                  $$result,
                  {
                    content: $i18n.t(`Pull "{{searchValue}}" from Ollama.com`, { searchValue }),
                    placement: "top-start"
                  },
                  {},
                  {
                    default: () => {
                      return `<button class="flex w-full font-medium line-clamp-1 select-none items-center rounded-button py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-hidden transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer data-highlighted:bg-muted"><div class="truncate">${escape($i18n.t(`Pull "{{searchValue}}" from Ollama.com`, { searchValue }))}</div></button>`;
                    }
                  }
                )}` : ``} ${each(Object.keys($MODEL_DOWNLOAD_POOL), (model) => {
                  return `<div class="flex w-full justify-between font-medium select-none rounded-button py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-hidden transition-all duration-75 rounded-lg cursor-pointer data-highlighted:bg-muted"><div class="flex"><div class="-ml-2 mr-2.5 translate-y-0.5" data-svelte-h="svelte-102rp4j"><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY {
											transform-origin: center;
											animation: spinner_AtaB 0.75s infinite linear;
										}
										@keyframes spinner_AtaB {
											100% {
												transform: rotate(360deg);
											}
										}
									</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></path><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_ajPY"></path></svg></div> <div class="flex flex-col self-start"><div class="flex gap-1"><div class="line-clamp-1">Downloading &quot;${escape(model)}&quot;</div> <div class="shrink-0">${escape("pullProgress" in $MODEL_DOWNLOAD_POOL[model] ? `(${$MODEL_DOWNLOAD_POOL[model].pullProgress}%)` : "")} </div></div> ${"digest" in $MODEL_DOWNLOAD_POOL[model] && $MODEL_DOWNLOAD_POOL[model].digest ? `<div class="-mt-1 h-fit text-[0.7rem] dark:text-gray-500 line-clamp-1">${escape($MODEL_DOWNLOAD_POOL[model].digest)} </div>` : ``} </div></div> <div class="mr-2 ml-1 translate-y-0.5">${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Cancel") }, {}, {
                    default: () => {
                      return `<button class="text-gray-800 dark:text-gray-100" data-svelte-h="svelte-19bzgft"><svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"></path></svg></button> `;
                    }
                  })}</div> </div>`;
                })}</div> ${showTemporaryChatControl ? `<div class="flex items-center mx-2 mt-1 mb-2"><button class="flex justify-between w-full font-medium line-clamp-1 select-none items-center rounded-button py-2 px-3 text-sm text-gray-700 dark:text-gray-100 outline-hidden transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer data-highlighted:bg-muted"><div class="flex gap-2.5 items-center">${validate_component(ChatBubbleOval, "ChatBubbleOval").$$render($$result, { className: "size-4", strokeWidth: "2.5" }, {}, {})} ${escape($i18n.t(`Temporary Chat`))}</div> <div>${validate_component(Switch_1, "Switch").$$render($$result, { state: $temporaryChatEnabled }, {}, {})}</div></button></div>` : `<div class="mb-3"></div>`} <div class="hidden w-[42rem]"></div> <div class="hidden w-[32rem]"></div> `}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_settings();
  $$unsubscribe_config();
  $$unsubscribe_i18n();
  $$unsubscribe_MODEL_DOWNLOAD_POOL();
  $$unsubscribe_mobile();
  $$unsubscribe_user();
  $$unsubscribe_temporaryChatEnabled();
  return $$rendered;
});
export {
  Selector as S
};
//# sourceMappingURL=Selector.js.map
