import { c as create_ssr_component, a as add_attribute, l as getContext, b as subscribe, v as validate_component, g as escape, e as each, p as createEventDispatcher } from "./ssr.js";
import { t as tick } from "./scheduler.js";
import { p as page } from "./stores.js";
import "./client.js";
import { a as toast } from "./Toaster.svelte_svelte_type_style_lang.js";
import { j as WEBUI_API_BASE_URL, c as config, a as settings, u as user, r as models } from "./index2.js";
import { g as getModels, a as getBackendConfig } from "./index7.js";
import fileSaver from "file-saver";
import { T as TTS_RESPONSE_SPLIT, c as copyToClipboard } from "./index3.js";
import "dompurify";
import "yaml";
import "dequal";
import "./create.js";
import { S as Spinner } from "./Spinner.js";
import "sortablejs";
import { marked } from "marked";
import { d as deleteAllModels, g as getBaseModels, u as updateModelById, c as createNewModel } from "./index9.js";
import { L as Link, S as Search } from "./Search.js";
import { T as Tooltip } from "./Tooltip.js";
import { S as Switch_1 } from "./Switch.js";
/* empty css                                    */
import "postcss";
/* empty css                                            */
import { C as Cog6 } from "./Cog6.js";
import { M as Modal } from "./Modal.js";
import { C as ConfirmDialog } from "./ConfirmDialog.js";
import { E as EllipsisVertical } from "./EllipsisVertical.js";
import { C as ChevronUp } from "./ChevronUp.js";
import { C as ChevronDown } from "./ChevronDown.js";
import { A as ArrowDownTray } from "./ArrowDownTray.js";
import { M as Menu_item } from "./menu-item.js";
import { M as Menu_content, f as flyAndScale } from "./menu-trigger.js";
import { D as Dropdown } from "./Dropdown.js";
import { E as EllipsisHorizontal } from "./EllipsisHorizontal.js";
import { P as Plus } from "./Plus.js";
import { T as Tags } from "./Tags.js";
import "socket.io-client";
import { P as PencilSolid } from "./PencilSolid.js";
import { A as AccessControl } from "./AccessControl.js";
const setToolServerConnections = async (token, connections) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/tool_servers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...connections
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getModelsConfig = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/models`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const SensitiveInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { required = true } = $$props;
  let { readOnly = false } = $$props;
  let { outerClassName = "flex flex-1 bg-transparent" } = $$props;
  let { inputClassName = "w-full text-sm py-0.5 placeholder:text-gray-300 dark:placeholder:text-gray-700 bg-transparent outline-hidden" } = $$props;
  let { showButtonClassName = "pl-1.5  transition bg-transparent" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0) $$bindings.readOnly(readOnly);
  if ($$props.outerClassName === void 0 && $$bindings.outerClassName && outerClassName !== void 0) $$bindings.outerClassName(outerClassName);
  if ($$props.inputClassName === void 0 && $$bindings.inputClassName && inputClassName !== void 0) $$bindings.inputClassName(inputClassName);
  if ($$props.showButtonClassName === void 0 && $$bindings.showButtonClassName && showButtonClassName !== void 0) $$bindings.showButtonClassName(showButtonClassName);
  return `<div${add_attribute("class", outerClassName, 0)}><input${add_attribute("class", `${inputClassName} ${"password"}`, 0)}${add_attribute("placeholder", placeholder, 0)} ${required && !readOnly ? "required" : ""} ${readOnly ? "disabled" : ""} autocomplete="off" type="text"${add_attribute("value", value, 0)}> <button${add_attribute("class", showButtonClassName, 0)} type="button">${`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"></path></svg>`}</button></div>`;
});
const Minus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path></svg>`;
});
const AddConnectionModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { onSubmit = () => {
  } } = $$props;
  let { onDelete = () => {
  } } = $$props;
  let { show = false } = $$props;
  let { edit = false } = $$props;
  let { ollama = false } = $$props;
  let { direct = false } = $$props;
  let { connection = null } = $$props;
  let url = "";
  let key = "";
  let connectionType = "external";
  let azure = false;
  let prefixId = "";
  let enable = true;
  let apiVersion = "";
  let tags = [];
  let modelId = "";
  let modelIds = [];
  const init = () => {
    if (connection) {
      url = connection.url;
      key = connection.key;
      enable = connection.config?.enable ?? true;
      tags = connection.config?.tags ?? [];
      prefixId = connection.config?.prefix_id ?? "";
      modelIds = connection.config?.model_ids ?? [];
      if (ollama) {
        connectionType = connection.config?.connection_type ?? "local";
      } else {
        connectionType = connection.config?.connection_type ?? "external";
        azure = connection.config?.azure ?? false;
        apiVersion = connection.config?.api_version ?? "";
      }
    }
  };
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0) $$bindings.onSubmit(onSubmit);
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0) $$bindings.onDelete(onDelete);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.edit === void 0 && $$bindings.edit && edit !== void 0) $$bindings.edit(edit);
  if ($$props.ollama === void 0 && $$bindings.ollama && ollama !== void 0) $$bindings.ollama(ollama);
  if ($$props.direct === void 0 && $$bindings.direct && direct !== void 0) $$bindings.direct(direct);
  if ($$props.connection === void 0 && $$bindings.connection && connection !== void 0) $$bindings.connection(connection);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    azure = (url.includes("azure.com") || url.includes("cognitive.microsoft.com")) && !direct ? true : false;
    {
      if (show) {
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
          return `<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-1.5"><div class="text-lg font-medium self-center font-primary">${edit ? `${escape($i18n.t("Edit Connection"))}` : `${escape($i18n.t("Add Connection"))}`}</div> <button class="self-center" data-svelte-h="svelte-745w2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1">${!direct ? `<div class="flex gap-2"><div class="flex w-full justify-between items-center"><div class="text-xs text-gray-500">${escape($i18n.t("Connection Type"))}</div> <div class=""><button type="button" class="text-xs text-gray-700 dark:text-gray-300">${connectionType === "local" ? `${escape($i18n.t("Local"))}` : `${escape($i18n.t("External"))}`}</button></div></div></div>` : ``} <div class="flex gap-2 mt-1.5"><div class="flex flex-col w-full"><div class="mb-0.5 text-xs text-gray-500">${escape($i18n.t("URL"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("API Base URL"), 0)} autocomplete="off" required${add_attribute("value", url, 0)}></div></div> ${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              content: $i18n.t("Verify Connection"),
              className: "self-end -mb-1"
            },
            {},
            {
              default: () => {
                return `<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 rounded-lg transition" type="button" data-svelte-h="svelte-kma1qx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path></svg></button>`;
              }
            }
          )} <div class="flex flex-col shrink-0 self-end">${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              content: enable ? $i18n.t("Enabled") : $i18n.t("Disabled")
            },
            {},
            {
              default: () => {
                return `${validate_component(Switch_1, "Switch").$$render(
                  $$result,
                  { state: enable },
                  {
                    state: ($$value) => {
                      enable = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}</div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="mb-0.5 text-xs text-gray-500">${escape($i18n.t("Key"))}</div> <div class="flex-1">${validate_component(SensitiveInput, "SensitiveInput").$$render(
            $$result,
            {
              className: "w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden",
              placeholder: $i18n.t("API Key"),
              required: false,
              value: key
            },
            {
              value: ($$value) => {
                key = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div> <div class="flex flex-col w-full"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("Prefix ID"))}</div> <div class="flex-1">${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              content: $i18n.t("Prefix ID is used to avoid conflicts with other connections by adding a prefix to the model IDs - leave empty to disable")
            },
            {},
            {
              default: () => {
                return `<input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("Prefix ID"), 0)} autocomplete="off"${add_attribute("value", prefixId, 0)}>`;
              }
            }
          )}</div></div></div> ${azure ? `<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("API Version"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("API Version"), 0)} autocomplete="off" required${add_attribute("value", apiVersion, 0)}></div></div></div>` : ``} <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="mb-1.5 text-xs text-gray-500">${escape($i18n.t("Tags"))}</div> <div class="flex-1">${validate_component(Tags, "Tags").$$render(
            $$result,
            { tags },
            {
              tags: ($$value) => {
                tags = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div></div> <hr class="border-gray-100 dark:border-gray-700/10 my-2.5 w-full"> <div class="flex flex-col w-full"><div class="mb-1 flex justify-between"><div class="text-xs text-gray-500">${escape($i18n.t("Model IDs"))}</div></div> ${modelIds.length > 0 ? `<div class="flex flex-col">${each(modelIds, (modelId2, modelIdx) => {
            return `<div class="flex gap-2 w-full justify-between items-center"><div class="text-sm flex-1 py-1 rounded-lg">${escape(modelId2)}</div> <div class="shrink-0"><button type="button">${validate_component(Minus, "Minus").$$render($$result, { strokeWidth: "2", className: "size-3.5" }, {}, {})} </button></div> </div>`;
          })}</div>` : `<div class="text-gray-500 text-xs text-center py-2 px-10">${ollama ? `${escape($i18n.t('Leave empty to include all models from "{{url}}/api/tags" endpoint', { url }))}` : `${azure ? `${escape($i18n.t("Deployment names are required for Azure OpenAI"))} ` : `${escape($i18n.t('Leave empty to include all models from "{{url}}/models" endpoint', { url }))}`}`}</div>`}</div> <hr class="border-gray-100 dark:border-gray-700/10 my-1.5 w-full"> <div class="flex items-center"><input class="${"w-full py-1 text-sm rounded-lg bg-transparent " + escape("text-gray-500", true) + " placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden"}"${add_attribute("placeholder", $i18n.t("Add a model ID"), 0)}${add_attribute("value", modelId, 0)}> <div><button type="button">${validate_component(Plus, "Plus").$$render($$result, { className: "size-3.5", strokeWidth: "2" }, {}, {})}</button></div></div></div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5">${edit ? `<button class="px-3.5 py-1.5 text-sm font-medium dark:bg-black dark:hover:bg-gray-900 dark:text-white bg-white text-black hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="button">${escape($i18n.t("Delete"))}</button>` : ``} <button class="${"px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center " + escape("", true)}" type="submit" ${""}>${escape($i18n.t("Save"))} ${``}</button></div></form></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const AddServerModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { onSubmit = () => {
  } } = $$props;
  let { onDelete = () => {
  } } = $$props;
  let { show = false } = $$props;
  let { edit = false } = $$props;
  let { direct = false } = $$props;
  let { connection = null } = $$props;
  let url = "";
  let path = "openapi.json";
  let auth_type = "bearer";
  let key = "";
  let accessControl = {};
  let name = "";
  let description = "";
  let enable = true;
  const init = () => {
    if (connection) {
      url = connection.url;
      path = connection?.path ?? "openapi.json";
      auth_type = connection?.auth_type ?? "bearer";
      key = connection?.key ?? "";
      name = connection.info?.name ?? "";
      description = connection.info?.description ?? "";
      enable = connection.config?.enable ?? true;
      accessControl = connection.config?.access_control ?? null;
    }
  };
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0) $$bindings.onSubmit(onSubmit);
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0) $$bindings.onDelete(onDelete);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.edit === void 0 && $$bindings.edit && edit !== void 0) $$bindings.edit(edit);
  if ($$props.direct === void 0 && $$bindings.direct && direct !== void 0) $$bindings.direct(direct);
  if ($$props.connection === void 0 && $$bindings.connection && connection !== void 0) $$bindings.connection(connection);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (show) {
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
          return `<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center font-primary">${edit ? `${escape($i18n.t("Edit Connection"))}` : `${escape($i18n.t("Add Connection"))}`}</div> <button class="self-center" data-svelte-h="svelte-745w2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><div class="flex gap-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><div class="text-xs text-gray-500">${escape($i18n.t("URL"))}</div></div> <div class="flex flex-1 items-center"><input class="w-full flex-1 text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("API Base URL"), 0)} autocomplete="off" required${add_attribute("value", url, 0)}> ${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              content: $i18n.t("Verify Connection"),
              className: "shrink-0 flex items-center mr-1"
            },
            {},
            {
              default: () => {
                return `<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 rounded-lg transition" type="button" data-svelte-h="svelte-glitwn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path></svg></button>`;
              }
            }
          )} ${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              content: enable ? $i18n.t("Enabled") : $i18n.t("Disabled")
            },
            {},
            {
              default: () => {
                return `${validate_component(Switch_1, "Switch").$$render(
                  $$result,
                  { state: enable },
                  {
                    state: ($$value) => {
                      enable = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}</div> <div class="flex-1 flex items-center"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("openapi.json URL or Path"), 0)} autocomplete="off" required${add_attribute("value", path, 0)}></div></div></div> <div class="text-xs text-gray-500 mt-1">${escape($i18n.t(`WebUI will make requests to "{{url}}"`, {
            url: path.includes("://") ? path : `${url}${path.startsWith("/") ? "" : "/"}${path}`
          }))}</div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="text-xs text-gray-500">${escape($i18n.t("Auth"))}</div> <div class="flex gap-2"><div class="flex-shrink-0 self-start"><select class="w-full text-sm bg-transparent dark:bg-gray-900 placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden pr-5"><option value="bearer" data-svelte-h="svelte-udkl5y">Bearer</option><option value="session" data-svelte-h="svelte-erbvei">Session</option></select></div> <div class="flex flex-1 items-center">${auth_type === "bearer" ? `${validate_component(SensitiveInput, "SensitiveInput").$$render(
            $$result,
            {
              className: "w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden",
              placeholder: $i18n.t("API Key"),
              required: false,
              value: key
            },
            {
              value: ($$value) => {
                key = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `${auth_type === "session" ? `<div class="text-xs text-gray-500 self-center translate-y-[1px]">${escape($i18n.t("Forwards system user session credentials to authenticate"))}</div>` : ``}`}</div></div></div></div> ${!direct ? `<hr class="border-gray-100 dark:border-gray-700/10 my-2.5 w-full"> <div class="flex gap-2"><div class="flex flex-col w-full"><div class="mb-0.5 text-xs text-gray-500">${escape($i18n.t("Name"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("Enter name"), 0)} autocomplete="off" required${add_attribute("value", name, 0)}></div></div></div> <div class="flex flex-col w-full mt-2"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("Description"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("Enter description"), 0)} autocomplete="off"${add_attribute("value", description, 0)}></div></div> <hr class="border-gray-100 dark:border-gray-700/10 my-2.5 w-full"> <div class="my-2 -mx-2"><div class="px-3 py-2 bg-gray-50 dark:bg-gray-950 rounded-lg">${validate_component(AccessControl, "AccessControl").$$render(
            $$result,
            { accessControl },
            {
              accessControl: ($$value) => {
                accessControl = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div>` : ``}</div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5">${edit ? `<button class="px-3.5 py-1.5 text-sm font-medium dark:bg-black dark:hover:bg-gray-900 dark:text-white bg-white text-black hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="button">${escape($i18n.t("Delete"))}</button>` : ``} <button class="${"px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center " + escape("", true)}" type="submit" ${""}>${escape($i18n.t("Save"))} ${``}</button></div></form></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const Connection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { onDelete = () => {
  } } = $$props;
  let { onSubmit = () => {
  } } = $$props;
  let { connection = null } = $$props;
  let { direct = false } = $$props;
  let showConfigModal = false;
  let showDeleteConfirmDialog = false;
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0) $$bindings.onDelete(onDelete);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0) $$bindings.onSubmit(onSubmit);
  if ($$props.connection === void 0 && $$bindings.connection && connection !== void 0) $$bindings.connection(connection);
  if ($$props.direct === void 0 && $$bindings.direct && direct !== void 0) $$bindings.direct(direct);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(AddServerModal, "AddServerModal").$$render(
      $$result,
      {
        edit: true,
        direct,
        connection,
        onDelete: () => {
          showDeleteConfirmDialog = true;
        },
        onSubmit: (c) => {
          connection = c;
          onSubmit(c);
        },
        show: showConfigModal
      },
      {
        show: ($$value) => {
          showConfigModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ConfirmDialog, "ConfirmDialog").$$render(
      $$result,
      { show: showDeleteConfirmDialog },
      {
        show: ($$value) => {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex w-full gap-2 items-center">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        className: "w-full relative",
        content: $i18n.t(`WebUI will make requests to "{{url}}"`, {
          url: `${connection?.url}/${connection?.path ?? "openapi.json"}`
        }),
        placement: "top-start"
      },
      {},
      {
        default: () => {
          return `${!(connection?.config?.enable ?? true) ? `<div class="absolute top-0 bottom-0 left-0 right-0 opacity-60 bg-white dark:bg-gray-900 z-10"></div>` : ``} <div class="flex w-full"><div class="flex-1 relative"><input class="outline-hidden w-full bg-transparent"${add_attribute("placeholder", $i18n.t("API Base URL"), 0)} autocomplete="off"${add_attribute("value", connection.url, 0)}></div> ${(connection?.auth_type ?? "bearer") === "bearer" ? `${validate_component(SensitiveInput, "SensitiveInput").$$render(
            $$result,
            {
              inputClassName: " outline-hidden bg-transparent w-full",
              placeholder: $i18n.t("API Key"),
              required: false,
              value: connection.key
            },
            {
              value: ($$value) => {
                connection.key = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}</div>`;
        }
      }
    )} <div class="flex gap-1">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Configure"),
        className: "self-start"
      },
      {},
      {
        default: () => {
          return `<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 rounded-lg transition" type="button">${validate_component(Cog6, "Cog6").$$render($$result, {}, {}, {})}</button>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const Database = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $config, $$unsubscribe_config;
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { saveHandler } = $$props;
  if ($$props.saveHandler === void 0 && $$bindings.saveHandler && saveHandler !== void 0) $$bindings.saveHandler(saveHandler);
  $$unsubscribe_i18n();
  $$unsubscribe_config();
  return `<form class="flex flex-col h-full justify-between space-y-3 text-sm"><div class="space-y-3 overflow-y-scroll scrollbar-hidden h-full"><div><div class="mb-2 text-sm font-medium">${escape($i18n.t("Database"))}</div> <input id="config-json-input" hidden type="file" accept=".json"> <button type="button" class="flex rounded-md py-2 px-3 w-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><div class="self-center mr-3" data-svelte-h="svelte-uk5zsu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z"></path><path fill-rule="evenodd" d="M13 6H3v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6ZM8.75 7.75a.75.75 0 0 0-1.5 0v2.69L6.03 9.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V7.75Z" clip-rule="evenodd"></path></svg></div> <div class="self-center text-sm font-medium">${escape($i18n.t("Import Config from JSON File"))}</div></button> <button type="button" class="flex rounded-md py-2 px-3 w-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><div class="self-center mr-3" data-svelte-h="svelte-uk5zsu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z"></path><path fill-rule="evenodd" d="M13 6H3v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6ZM8.75 7.75a.75.75 0 0 0-1.5 0v2.69L6.03 9.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V7.75Z" clip-rule="evenodd"></path></svg></div> <div class="self-center text-sm font-medium">${escape($i18n.t("Export Config to JSON File"))}</div></button> <hr class="border-gray-100 dark:border-gray-850 my-1"> ${$config?.features.enable_admin_export ?? true ? `<div class="flex w-full justify-between"> <button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-200 dark:hover:bg-gray-800 transition" type="button"><div class="self-center mr-3" data-svelte-h="svelte-1n29mwa"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z"></path><path fill-rule="evenodd" d="M13 6H3v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6ZM8.75 7.75a.75.75 0 0 0-1.5 0v2.69L6.03 9.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V7.75Z" clip-rule="evenodd"></path></svg></div> <div class="self-center text-sm font-medium">${escape($i18n.t("Download Database"))}</div></button></div> <button class="flex rounded-md py-2 px-3 w-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><div class="self-center mr-3" data-svelte-h="svelte-1l0oz0g"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z"></path><path fill-rule="evenodd" d="M13 6H3v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6ZM8.75 7.75a.75.75 0 0 0-1.5 0v2.69L6.03 9.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V7.75Z" clip-rule="evenodd"></path></svg></div> <div class="self-center text-sm font-medium">${escape($i18n.t("Export All Chats (All Users)"))}</div></button>` : ``}</div></div> </form>`;
});
const General = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $$unsubscribe_config;
  $$unsubscribe_config = subscribe(config, (value) => value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { saveHandler } = $$props;
  if ($$props.saveHandler === void 0 && $$bindings.saveHandler && saveHandler !== void 0) $$bindings.saveHandler(saveHandler);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form class="flex flex-col h-full justify-between space-y-3 text-sm"><div class="mt-0.5 space-y-3 overflow-y-scroll scrollbar-hidden h-full">${``}</div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape($i18n.t("Save"))}</button></div></form>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  $$unsubscribe_config();
  return $$rendered;
});
const Pipelines = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_settings;
  let $$unsubscribe_config;
  let $$unsubscribe_i18n;
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_config = subscribe(config, (value) => value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => value);
  let { saveHandler } = $$props;
  if ($$props.saveHandler === void 0 && $$bindings.saveHandler && saveHandler !== void 0) $$bindings.saveHandler(saveHandler);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form class="flex flex-col h-full justify-between space-y-3 text-sm"><div class="overflow-y-scroll scrollbar-hidden h-full">${`<div class="flex justify-center h-full"><div class="my-auto">${validate_component(Spinner, "Spinner").$$render($$result, { className: "size-6" }, {}, {})}</div></div>`}</div> ${``}</form>`;
  } while (!$$settled);
  $$unsubscribe_settings();
  $$unsubscribe_config();
  $$unsubscribe_i18n();
  return $$rendered;
});
const Audio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $$unsubscribe_settings;
  let $$unsubscribe_config;
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_config = subscribe(config, (value) => value);
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { saveHandler } = $$props;
  let TTS_VOICE = "";
  TTS_RESPONSE_SPLIT.PUNCTUATION;
  let STT_WHISPER_MODEL = "";
  let voices = [];
  if ($$props.saveHandler === void 0 && $$bindings.saveHandler && saveHandler !== void 0) $$bindings.saveHandler(saveHandler);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form class="flex flex-col h-full justify-between space-y-3 text-sm"><div class="space-y-3 overflow-y-scroll scrollbar-hidden h-full"><div class="flex flex-col gap-3"><div><div class="mb-1 text-sm font-medium">${escape($i18n.t("STT Settings"))}</div> <div class="py-0.5 flex w-full justify-between"><div class="self-center text-xs font-medium">${escape($i18n.t("Speech-to-Text Engine"))}</div> <div class="flex items-center relative"><select class="dark:bg-gray-900 cursor-pointer w-fit pr-8 rounded-sm px-2 p-1 text-xs bg-transparent outline-hidden text-right" placeholder="Select an engine"><option value="">${escape($i18n.t("Whisper (Local)"))}</option><option value="openai" data-svelte-h="svelte-bbvrw2">OpenAI</option><option value="web">${escape($i18n.t("Web API"))}</option><option value="deepgram" data-svelte-h="svelte-htpsvy">Deepgram</option><option value="azure" data-svelte-h="svelte-1i7rqok">Azure AI Speech</option></select></div></div> ${`${`${`${`<div><div class="mb-1.5 text-sm font-medium">${escape($i18n.t("STT Model"))}</div> <div class="flex w-full"><div class="flex-1 mr-2"><input class="w-full rounded-lg py-2 px-4 text-sm bg-gray-50 dark:text-gray-300 dark:bg-gray-850 outline-hidden"${add_attribute("placeholder", $i18n.t("Set whisper model"), 0)}${add_attribute("value", STT_WHISPER_MODEL, 0)}></div> <button class="px-2.5 bg-gray-50 hover:bg-gray-200 text-gray-800 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-100 rounded-lg transition" ${""}>${`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"></path><path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"></path></svg>`}</button></div> <div class="mt-2 mb-1 text-xs text-gray-400 dark:text-gray-500">${escape($i18n.t(`Open WebUI uses faster-whisper internally.`))} <a class="hover:underline dark:text-gray-200 text-gray-800" href="https://github.com/SYSTRAN/faster-whisper" target="_blank">${escape($i18n.t(`Click here to learn more about faster-whisper and see the available models.`))}</a></div></div>`}`}`}`}</div> <hr class="border-gray-100 dark:border-gray-850"> <div><div class="mb-1 text-sm font-medium">${escape($i18n.t("TTS Settings"))}</div> <div class="py-0.5 flex w-full justify-between"><div class="self-center text-xs font-medium">${escape($i18n.t("Text-to-Speech Engine"))}</div> <div class="flex items-center relative"><select class="dark:bg-gray-900 w-fit pr-8 cursor-pointer rounded-sm px-2 p-1 text-xs bg-transparent outline-hidden text-right" placeholder="Select a mode"><option value="">${escape($i18n.t("Web API"))}</option><option value="transformers">${escape($i18n.t("Transformers"))} (${escape($i18n.t("Local"))})</option><option value="openai">${escape($i18n.t("OpenAI"))}</option><option value="elevenlabs">${escape($i18n.t("ElevenLabs"))}</option><option value="azure">${escape($i18n.t("Azure AI Speech"))}</option></select></div></div> ${`${`${``}`}`} <hr class="border-gray-100 dark:border-gray-850 my-2"> ${`<div><div class="mb-1.5 text-sm font-medium">${escape($i18n.t("TTS Voice"))}</div> <div class="flex w-full"><div class="flex-1"><select class="w-full rounded-lg py-2 px-4 text-sm bg-gray-50 dark:text-gray-300 dark:bg-gray-850 outline-hidden"><option value="" ${""}>${escape($i18n.t("Default"))}</option>${each(voices, (voice) => {
      return `<option${add_attribute("value", voice.voiceURI, 0)} class="bg-gray-100 dark:bg-gray-700" ${TTS_VOICE === voice.voiceURI ? "selected" : ""}>${escape(voice.name)}</option>`;
    })}</select></div></div></div>`} <hr class="border-gray-100 dark:border-gray-850 my-2"> <div class="pt-0.5 flex w-full justify-between"><div class="self-center text-xs font-medium">${escape($i18n.t("Response splitting"))}</div> <div class="flex items-center relative"><select class="dark:bg-gray-900 w-fit pr-8 cursor-pointer rounded-sm px-2 p-1 text-xs bg-transparent outline-hidden text-right" aria-label="Select how to split message text for TTS requests">${each(Object.values(TTS_RESPONSE_SPLIT), (split) => {
      return `<option${add_attribute("value", split, 0)}>${escape($i18n.t(split.charAt(0).toUpperCase() + split.slice(1)))}</option>`;
    })}</select></div></div> <div class="mt-2 mb-1 text-xs text-gray-400 dark:text-gray-500">${escape($i18n.t("Control how message text is split for TTS requests. 'Punctuation' splits into sentences, 'paragraphs' splits into paragraphs, and 'none' keeps the message as a single string."))}</div></div></div></div> <div class="flex justify-end text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape($i18n.t("Save"))}</button></div></form>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  $$unsubscribe_settings();
  $$unsubscribe_config();
  return $$rendered;
});
const Images = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_user = subscribe(user, (value) => value);
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form class="flex flex-col h-full justify-between space-y-3 text-sm"><div class="space-y-3 overflow-y-scroll scrollbar-hidden pr-2">${``}</div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="${"px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center " + escape("", true)}" type="submit" ${""}>${escape($i18n.t("Save"))} ${``}</button></div></form>`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_i18n();
  return $$rendered;
});
const Interface = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_config;
  let $$unsubscribe_i18n;
  let $$unsubscribe_user;
  $$unsubscribe_config = subscribe(config, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${`<div class="h-full w-full flex justify-center items-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}`;
  } while (!$$settled);
  $$unsubscribe_config();
  $$unsubscribe_i18n();
  $$unsubscribe_user();
  return $$rendered;
});
const ModelList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $models, $$unsubscribe_models;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_models = subscribe(models, (value) => $models = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { modelIds = [] } = $$props;
  let modelListElement = null;
  if ($$props.modelIds === void 0 && $$bindings.modelIds && modelIds !== void 0) $$bindings.modelIds(modelIds);
  $$unsubscribe_models();
  $$unsubscribe_i18n();
  return `${modelIds.length > 0 ? `<div class="flex flex-col -translate-x-1"${add_attribute("this", modelListElement, 0)}>${each(modelIds, (modelId, modelIdx) => {
    return `<div class="flex gap-2 w-full justify-between items-center" id="${"model-item-" + escape(modelId, true)}">${validate_component(Tooltip, "Tooltip").$$render($$result, { content: modelId, placement: "top-start" }, {}, {
      default: () => {
        return `<div class="flex items-center gap-1">${validate_component(EllipsisVertical, "EllipsisVertical").$$render(
          $$result,
          {
            className: "size-4 cursor-move item-handle"
          },
          {},
          {}
        )} <div class="text-sm flex-1 py-1 rounded-lg">${$models.find((model) => model.id === modelId) ? `${escape($models.find((model) => model.id === modelId).name)}` : `${escape(modelId)}`} </div></div> `;
      }
    })} </div>`;
  })}</div>` : `<div class="text-gray-500 text-xs text-center py-2">${escape($i18n.t("No models found"))}</div>`}`;
});
const ConfigureModelsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $models, $$unsubscribe_models;
  $$unsubscribe_models = subscribe(models, (value) => $models = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  createEventDispatcher();
  let { show = false } = $$props;
  let { initHandler = () => {
  } } = $$props;
  let config2 = null;
  let defaultModelIds = [];
  let modelIds = [];
  let sortKey = "";
  let sortOrder = "";
  let showResetModal = false;
  const init = async () => {
    config2 = await getModelsConfig(localStorage.token);
    if (config2?.DEFAULT_MODELS) {
      defaultModelIds = config2?.DEFAULT_MODELS.split(",").filter((id) => id);
    } else {
      defaultModelIds = [];
    }
    const modelOrderList = config2.MODEL_ORDER_LIST || [];
    const allModelIds = $models.map((model) => model.id);
    const orderedSet = new Set(modelOrderList);
    modelIds = [
      // Add all IDs from MODEL_ORDER_LIST that exist in allModelIds
      ...modelOrderList.filter((id) => orderedSet.has(id) && allModelIds.includes(id)),
      // Add remaining IDs not in MODEL_ORDER_LIST, sorted alphabetically
      ...allModelIds.filter((id) => !orderedSet.has(id)).sort((a, b) => a.localeCompare(b))
    ];
    sortKey = "";
    sortOrder = "";
  };
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.initHandler === void 0 && $$bindings.initHandler && initHandler !== void 0) $$bindings.initHandler(initHandler);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (show) {
        init();
      }
    }
    $$rendered = `${validate_component(ConfirmDialog, "ConfirmDialog").$$render(
      $$result,
      {
        title: $i18n.t("Reset All Models"),
        message: $i18n.t("This will delete all models including custom models and cannot be undone."),
        onConfirm: async () => {
          const res = deleteAllModels(localStorage.token);
          if (res) {
            toast.success($i18n.t("All models deleted successfully"));
            initHandler();
          }
        },
        show: showResetModal
      },
      {
        show: ($$value) => {
          showResetModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Modal, "Modal").$$render(
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
          return `<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center font-primary">${escape($i18n.t("Settings"))}</div> <button class="self-center" data-svelte-h="svelte-745w2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6">${config2 ? `<form class="flex flex-col w-full"><div><div class="flex flex-col w-full"><button class="mb-1 flex gap-2" type="button"><div class="text-xs text-gray-500">${escape($i18n.t("Reorder Models"))}</div> ${sortKey === "model" ? `<span class="font-normal self-center">${sortOrder === "asc" ? `${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-3" }, {}, {})}` : `${validate_component(ChevronDown, "ChevronDown").$$render($$result, { className: "size-3" }, {}, {})}`}</span>` : `<span class="invisible">${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-3" }, {}, {})}</span>`}</button> ${validate_component(ModelList, "ModelList").$$render(
            $$result,
            { modelIds },
            {
              modelIds: ($$value) => {
                modelIds = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div> <hr class="border-gray-100 dark:border-gray-700/10 my-2.5 w-full"> <div><div class="flex flex-col w-full"><div class="mb-1 flex justify-between"><div class="text-xs text-gray-500">${escape($i18n.t("Default Models"))}</div></div> <div class="flex items-center -mr-1"><select class="${"w-full py-1 text-sm rounded-lg bg-transparent " + escape("text-gray-500", true) + " placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden"}"><option value="">${escape($i18n.t("Select a model"))}</option>${each($models, (model) => {
            return `<option${add_attribute("value", model.id, 0)} class="bg-gray-50 dark:bg-gray-700">${escape(model.name)}</option>`;
          })}</select></div>  ${defaultModelIds.length > 0 ? `<div class="flex flex-col">${each(defaultModelIds, (modelId, modelIdx) => {
            return `<div class="flex gap-2 w-full justify-between items-center"><div class="text-sm flex-1 py-1 rounded-lg">${escape($models.find((model) => model.id === modelId)?.name)}</div> <div class="shrink-0"><button type="button">${validate_component(Minus, "Minus").$$render($$result, { strokeWidth: "2", className: "size-3.5" }, {}, {})} </button></div> </div>`;
          })}</div>` : `<div class="text-gray-500 text-xs text-center py-2">${escape($i18n.t("No models selected"))}</div>`}</div></div> <div class="flex justify-between pt-3 text-sm font-medium gap-1.5">${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              content: $i18n.t("This will delete all models including custom models")
            },
            {},
            {
              default: () => {
                return `<button class="px-3.5 py-1.5 text-sm font-medium dark:bg-black dark:hover:bg-gray-950 dark:text-white bg-white text-black hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="button"> ${escape($i18n.t("Reset All Models"))}</button>`;
              }
            }
          )} <button class="${"px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center " + escape("", true)}" type="submit" ${""}>${escape($i18n.t("Save"))} ${``}</button></div></form>` : `<div>${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}</div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  $$unsubscribe_models();
  return $$rendered;
});
const ManageModelsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_user = subscribe(user, (value) => value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  createEventDispatcher();
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
      { size: "sm", show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4"><div class="text-lg font-medium self-center font-primary">${escape($i18n.t("Manage Models"))}</div> <button class="self-center" data-svelte-h="svelte-745w2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full px-3 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6">${`${`<div class="py-5">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}`}</div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_i18n();
  return $$rendered;
});
const ModelMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { user: user2 } = $$props;
  let { model } = $$props;
  let { exportHandler } = $$props;
  let { hideHandler } = $$props;
  let { copyLinkHandler } = $$props;
  let { onClose } = $$props;
  let show = false;
  if ($$props.user === void 0 && $$bindings.user && user2 !== void 0) $$bindings.user(user2);
  if ($$props.model === void 0 && $$bindings.model && model !== void 0) $$bindings.model(model);
  if ($$props.exportHandler === void 0 && $$bindings.exportHandler && exportHandler !== void 0) $$bindings.exportHandler(exportHandler);
  if ($$props.hideHandler === void 0 && $$bindings.hideHandler && hideHandler !== void 0) $$bindings.hideHandler(hideHandler);
  if ($$props.copyLinkHandler === void 0 && $$bindings.copyLinkHandler && copyLinkHandler !== void 0) $$bindings.copyLinkHandler(copyLinkHandler);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
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
              class: "w-full max-w-[170px] rounded-xl px-1 py-1.5 border border-gray-300/30 dark:border-gray-700/50 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-sm",
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
                    class: "flex  gap-2  items-center px-3 py-2 text-sm  font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${model?.meta?.hidden ?? false ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`} <div class="flex items-center">${model?.meta?.hidden ?? false ? `${escape($i18n.t("Show Model"))}` : `${escape($i18n.t("Hide Model"))}`}</div>`;
                    }
                  }
                )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center px-3 py-2 text-sm  font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Link, "Link").$$render($$result, {}, {}, {})} <div class="flex items-center">${escape($i18n.t("Copy Link"))}</div>`;
                    }
                  }
                )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center px-3 py-2 text-sm  font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(ArrowDownTray, "ArrowDownTray").$$render($$result, {}, {}, {})} <div class="flex items-center">${escape($i18n.t("Export"))}</div>`;
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
const Models = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $settings, $$unsubscribe_settings;
  let $config, $$unsubscribe_config;
  let $user, $$unsubscribe_user;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let models$1 = null;
  let workspaceModels = null;
  let baseModels = null;
  let filteredModels = [];
  let showConfigModal = false;
  let showManageModal = false;
  let searchValue = "";
  const init = async () => {
    models$1 = null;
    workspaceModels = await getBaseModels(localStorage.token);
    baseModels = await getModels(localStorage.token, null, true);
    models$1 = baseModels.map((m) => {
      const workspaceModel = workspaceModels.find((wm) => wm.id === m.id);
      if (workspaceModel) {
        return { ...m, ...workspaceModel };
      } else {
        return {
          ...m,
          id: m.id,
          name: m.name,
          is_active: true
        };
      }
    });
  };
  const upsertModelHandler = async (model) => {
    model.base_model_id = null;
    if (workspaceModels.find((m) => m.id === model.id)) {
      const res = await updateModelById(localStorage.token, model.id, model).catch((error) => {
        return null;
      });
      if (res) {
        toast.success($i18n.t("Model updated successfully"));
      }
    } else {
      const res = await createNewModel(localStorage.token, {
        meta: {},
        id: model.id,
        name: model.name,
        base_model_id: null,
        params: {},
        access_control: {},
        ...model
      }).catch((error) => {
        return null;
      });
      if (res) {
        toast.success($i18n.t("Model updated successfully"));
      }
    }
    await init();
    models.set(await getModels(localStorage.token, $config?.features?.enable_direct_connections && ($settings?.directConnections ?? null)));
  };
  const hideModelHandler = async (model) => {
    model.meta = {
      ...model.meta,
      hidden: !(model?.meta?.hidden ?? false)
    };
    console.debug(model);
    toast.success(model.meta.hidden ? $i18n.t(`Model {{name}} is now hidden`, { name: model.id }) : $i18n.t(`Model {{name}} is now visible`, { name: model.id }));
    upsertModelHandler(model);
  };
  const copyLinkHandler = async (model) => {
    const baseUrl = window.location.origin;
    const res = await copyToClipboard(`${baseUrl}/?model=${encodeURIComponent(model.id)}`);
    if (res) {
      toast.success($i18n.t("Copied link to clipboard"));
    } else {
      toast.error($i18n.t("Failed to copy link"));
    }
  };
  const exportModelHandler = async (model) => {
    let blob = new Blob([JSON.stringify([model])], { type: "application/json" });
    saveAs(blob, `${model.id}-${Date.now()}.json`);
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (models$1) {
        filteredModels = models$1.filter((m) => searchValue === "").sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
    }
    $$rendered = `${validate_component(ConfigureModelsModal, "ConfigureModelsModal").$$render(
      $$result,
      { initHandler: init, show: showConfigModal },
      {
        show: ($$value) => {
          showConfigModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ManageModelsModal, "ManageModelsModal").$$render(
      $$result,
      { show: showManageModal },
      {
        show: ($$value) => {
          showManageModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${models$1 !== null ? `${`<div class="flex flex-col gap-1 mt-1.5 mb-2"><div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5">${escape($i18n.t("Models"))} <div class="flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"></div> <span class="text-lg font-medium text-gray-500 dark:text-gray-300">${escape(filteredModels.length)}</span></div> <div class="flex items-center gap-1.5">${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Manage Models") }, {}, {
      default: () => {
        return `<button class="p-1 rounded-full flex gap-1 items-center" type="button">${validate_component(ArrowDownTray, "ArrowDownTray").$$render($$result, {}, {}, {})}</button>`;
      }
    })} ${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Settings") }, {}, {
      default: () => {
        return `<button class="p-1 rounded-full flex gap-1 items-center" type="button">${validate_component(Cog6, "Cog6").$$render($$result, {}, {}, {})}</button>`;
      }
    })}</div></div> <div class="flex flex-1 items-center w-full space-x-2"><div class="flex flex-1 items-center"><div class="self-center ml-1 mr-3">${validate_component(Search, "Search").$$render($$result, { className: "size-3.5" }, {}, {})}</div> <input class="w-full text-sm py-1 rounded-r-xl outline-hidden bg-transparent"${add_attribute("placeholder", $i18n.t("Search Models"), 0)}${add_attribute("value", searchValue, 0)}> ${``}</div></div></div> <div class="my-2 mb-5" id="model-list">${models$1.length > 0 ? `${each(filteredModels, (model, modelIdx) => {
      return `<div class="${"flex space-x-4 cursor-pointer w-full px-3 py-2 dark:hover:bg-white/5 hover:bg-black/5 rounded-lg transition " + escape(
        model?.meta?.hidden ? "opacity-50 dark:opacity-50" : "",
        true
      )}" id="${"model-item-" + escape(model.id, true)}"><button class="flex flex-1 text-left space-x-3.5 cursor-pointer w-full" type="button"><div class="self-center w-8"><div class="${"rounded-full object-cover " + escape(
        model?.is_active ?? true ? "" : "opacity-50 dark:opacity-50",
        true
      )}"><img${add_attribute("src", model?.meta?.profile_image_url ?? "/static/favicon.png", 0)} alt="modelfile profile" class="rounded-full w-full h-auto object-cover"> </div></div> <div class="${"flex-1 self-center " + escape(model?.is_active ?? true ? "" : "text-gray-500", true)}">${validate_component(Tooltip, "Tooltip").$$render(
        $$result,
        {
          content: marked.parse(!!model?.meta?.description ? model?.meta?.description : model?.ollama?.digest ? `${model?.ollama?.digest} **(${model?.ollama?.modified_at})**` : model.id),
          className: " w-fit",
          placement: "top-start"
        },
        {},
        {
          default: () => {
            return `<div class="font-semibold line-clamp-1">${escape(model.name)}</div> `;
          }
        }
      )} <div class="text-xs overflow-hidden text-ellipsis line-clamp-1 text-gray-500"><span class="line-clamp-1">${escape(!!model?.meta?.description ? model?.meta?.description : model?.ollama?.digest ? `${model.id} (${model?.ollama?.digest})` : model.id)} </span></div> </div></button> <div class="flex flex-row gap-0.5 items-center self-center">${`<button class="self-center w-fit text-sm px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button" data-svelte-h="svelte-jdmw8w"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path></svg></button> ${validate_component(ModelMenu, "ModelMenu").$$render(
        $$result,
        {
          user: $user,
          model,
          exportHandler: () => {
            exportModelHandler(model);
          },
          hideHandler: () => {
            hideModelHandler(model);
          },
          copyLinkHandler: () => {
            copyLinkHandler(model);
          },
          onClose: () => {
          }
        },
        {},
        {
          default: () => {
            return `<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button">${validate_component(EllipsisHorizontal, "EllipsisHorizontal").$$render($$result, { className: "size-5" }, {}, {})}</button> `;
          }
        }
      )} <div class="ml-1">${validate_component(Tooltip, "Tooltip").$$render(
        $$result,
        {
          content: model?.is_active ?? true ? $i18n.t("Enabled") : $i18n.t("Disabled")
        },
        {},
        {
          default: () => {
            return `${validate_component(Switch_1, "Switch").$$render(
              $$result,
              { state: model.is_active },
              {
                state: ($$value) => {
                  model.is_active = $$value;
                  $$settled = false;
                }
              },
              {}
            )} `;
          }
        }
      )} </div>`}</div> </div>`;
    })}` : `<div class="flex flex-col items-center justify-center w-full h-20"><div class="text-gray-500 dark:text-gray-400 text-xs">${escape($i18n.t("No models found"))}</div></div>`}</div> ${$user?.role === "admin" ? `<div class="flex justify-end w-full mb-3"><div class="flex space-x-1"><input id="models-import-input" type="file" accept=".json" hidden> <button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition"><div class="self-center mr-2 font-medium line-clamp-1">${escape($i18n.t("Import Presets"))}</div> <div class="self-center" data-svelte-h="svelte-1ikvh1y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3.5 h-3.5"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm4 9.5a.75.75 0 0 1-.75-.75V8.06l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v2.69a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"></path></svg></div></button> <button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition"><div class="self-center mr-2 font-medium line-clamp-1">${escape($i18n.t("Export Presets"))} (${escape(models$1.length)})</div> <div class="self-center" data-svelte-h="svelte-1v8dg5r"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3.5 h-3.5"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm4 3.5a.75.75 0 0 1 .75.75v2.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V6.25A.75.75 0 0 1 8 5.5Z" clip-rule="evenodd"></path></svg></div></button></div></div>` : ``}`}` : `<div class="h-full w-full flex justify-center items-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  $$unsubscribe_settings();
  $$unsubscribe_config();
  $$unsubscribe_user();
  return $$rendered;
});
const Connections = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $i18n, $$unsubscribe_i18n;
  let $$unsubscribe_settings;
  let $$unsubscribe_config;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_config = subscribe(config, (value) => value);
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let OLLAMA_BASE_URLS = [""];
  let OLLAMA_API_CONFIGS = {};
  let OPENAI_API_KEYS = [""];
  let OPENAI_API_BASE_URLS = [""];
  let OPENAI_API_CONFIGS = {};
  let showAddOpenAIConnectionModal = false;
  let showAddOllamaConnectionModal = false;
  const updateOpenAIHandler = async () => {
  };
  const updateOllamaHandler = async () => {
  };
  const addOpenAIConnectionHandler = async (connection) => {
    OPENAI_API_BASE_URLS = [...OPENAI_API_BASE_URLS, connection.url];
    OPENAI_API_KEYS = [...OPENAI_API_KEYS, connection.key];
    OPENAI_API_CONFIGS[OPENAI_API_BASE_URLS.length - 1] = connection.config;
    await updateOpenAIHandler();
  };
  const addOllamaConnectionHandler = async (connection) => {
    OLLAMA_BASE_URLS = [...OLLAMA_BASE_URLS, connection.url];
    OLLAMA_API_CONFIGS[OLLAMA_BASE_URLS.length - 1] = {
      ...connection.config,
      key: connection.key
    };
    await updateOllamaHandler();
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(AddConnectionModal, "AddConnectionModal").$$render(
      $$result,
      {
        onSubmit: addOpenAIConnectionHandler,
        show: showAddOpenAIConnectionModal
      },
      {
        show: ($$value) => {
          showAddOpenAIConnectionModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(AddConnectionModal, "AddConnectionModal").$$render(
      $$result,
      {
        ollama: true,
        onSubmit: addOllamaConnectionHandler,
        show: showAddOllamaConnectionModal
      },
      {
        show: ($$value) => {
          showAddOllamaConnectionModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} <form class="flex flex-col h-full justify-between text-sm"><div class="overflow-y-scroll scrollbar-hidden h-full">${`<div class="flex h-full justify-center"><div class="my-auto">${validate_component(Spinner, "Spinner").$$render($$result, { className: "size-6" }, {}, {})}</div></div>`}</div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape($i18n.t("Save"))}</button></div></form>`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_i18n();
  $$unsubscribe_settings();
  $$unsubscribe_config();
  return $$rendered;
});
const Documents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_i18n;
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => value);
  let showResetConfirm = false;
  let showResetUploadDirConfirm = false;
  let showReindexConfirm = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ConfirmDialog, "ResetUploadDirConfirmDialog").$$render(
      $$result,
      { show: showResetUploadDirConfirm },
      {
        show: ($$value) => {
          showResetUploadDirConfirm = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ConfirmDialog, "ResetVectorDBConfirmDialog").$$render(
      $$result,
      { show: showResetConfirm },
      {
        show: ($$value) => {
          showResetConfirm = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ConfirmDialog, "ReindexKnowledgeFilesConfirmDialog").$$render(
      $$result,
      { show: showReindexConfirm },
      {
        show: ($$value) => {
          showReindexConfirm = $$value;
          $$settled = false;
        }
      },
      {}
    )} <form class="flex flex-col h-full justify-between space-y-3 text-sm">${`<div class="flex items-center justify-center h-full">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}</form>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const WebSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { saveHandler } = $$props;
  if ($$props.saveHandler === void 0 && $$bindings.saveHandler && saveHandler !== void 0) $$bindings.saveHandler(saveHandler);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form class="flex flex-col h-full justify-between space-y-3 text-sm"><div class="space-y-3 overflow-y-scroll scrollbar-hidden h-full">${``}</div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape($i18n.t("Save"))}</button></div></form>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const DocumentChartBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${add_attribute("class", className, 0)}><path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z" clip-rule="evenodd"></path><path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"></path></svg>`;
});
const ArenaModelModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $models, $$unsubscribe_models;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_models = subscribe(models, (value) => $models = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  createEventDispatcher();
  let { show = false } = $$props;
  let { edit = false } = $$props;
  let { model = null } = $$props;
  let name = "";
  let id = "";
  const generateId = () => {
    if (!edit) {
      id = name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
    }
  };
  let profileImageUrl = "/favicon.png";
  let description = "";
  let modelIds = [];
  let filterMode = "include";
  let accessControl = {};
  let showDeleteConfirmDialog = false;
  const initModel = () => {
    if (model) {
      name = model.name;
      id = model.id;
      profileImageUrl = model.meta.profile_image_url;
      description = model.meta.description;
      modelIds = model.meta.model_ids || [];
      filterMode = model.meta?.filter_mode ?? "include";
      accessControl = "access_control" in model.meta ? model.meta.access_control : {};
    }
  };
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.edit === void 0 && $$bindings.edit && edit !== void 0) $$bindings.edit(edit);
  if ($$props.model === void 0 && $$bindings.model && model !== void 0) $$bindings.model(model);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (name) {
        generateId();
      }
    }
    {
      if (show) {
        initModel();
      }
    }
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
      { size: "sm", show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center font-primary">${edit ? `${escape($i18n.t("Edit Arena Model"))}` : `${escape($i18n.t("Add Arena Model"))}`}</div> <button class="self-center" data-svelte-h="svelte-745w2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><div class="flex justify-center pb-3"><input type="file" hidden accept="image/*"> <button class="relative rounded-full w-fit h-fit shrink-0" type="button"><img${add_attribute("src", profileImageUrl, 0)} class="size-16 rounded-full object-cover shrink-0" alt="Profile"> <div class="absolute flex justify-center rounded-full bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"><div class="my-auto text-white">${validate_component(PencilSolid, "PencilSolid").$$render($$result, { className: "size-4" }, {}, {})}</div></div></button></div> <div class="flex gap-2"><div class="flex flex-col w-full"><div class="mb-0.5 text-xs text-gray-500">${escape($i18n.t("Name"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("Model Name"), 0)} autocomplete="off" required${add_attribute("value", name, 0)}></div></div> <div class="flex flex-col w-full"><div class="mb-0.5 text-xs text-gray-500">${escape($i18n.t("ID"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("Model ID"), 0)} autocomplete="off" required ${edit ? "disabled" : ""}${add_attribute("value", id, 0)}></div></div></div> <div class="flex flex-col w-full mt-2"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("Description"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("Enter description"), 0)} autocomplete="off"${add_attribute("value", description, 0)}></div></div> <hr class="border-gray-100 dark:border-gray-700/10 my-2.5 w-full"> <div class="my-2 -mx-2"><div class="px-3 py-2 bg-gray-50 dark:bg-gray-950 rounded-lg">${validate_component(AccessControl, "AccessControl").$$render(
            $$result,
            { accessControl },
            {
              accessControl: ($$value) => {
                accessControl = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div> <hr class="border-gray-100 dark:border-gray-700/10 my-2.5 w-full"> <div class="flex flex-col w-full"><div class="mb-1 flex justify-between"><div class="text-xs text-gray-500">${escape($i18n.t("Models"))}</div> <div><button class="text-xs text-gray-500" type="button">${filterMode === "include" ? `${escape($i18n.t("Include"))}` : `${escape($i18n.t("Exclude"))}`}</button></div></div> ${modelIds.length > 0 ? `<div class="flex flex-col">${each(modelIds, (modelId, modelIdx) => {
            return `<div class="flex gap-2 w-full justify-between items-center"><div class="text-sm flex-1 py-1 rounded-lg">${escape($models.find((model2) => model2.id === modelId)?.name)}</div> <div class="shrink-0"><button type="button">${validate_component(Minus, "Minus").$$render($$result, { strokeWidth: "2", className: "size-3.5" }, {}, {})} </button></div> </div>`;
          })}</div>` : `<div class="text-gray-500 text-xs text-center py-2">${escape($i18n.t("Leave empty to include all models or select specific models"))}</div>`}</div> <hr class="border-gray-100 dark:border-gray-700/10 my-2.5 w-full"> <div class="flex items-center"><select class="${"w-full py-1 text-sm rounded-lg bg-transparent " + escape("text-gray-500", true) + " placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden"}"><option value="">${escape($i18n.t("Select a model"))}</option>${each($models.filter((m) => m?.owned_by !== "arena"), (model2) => {
            return `<option${add_attribute("value", model2.id, 0)} class="bg-gray-50 dark:bg-gray-700">${escape(model2.name)}</option>`;
          })}</select> <div><button type="button">${validate_component(Plus, "Plus").$$render($$result, { className: "size-3.5", strokeWidth: "2" }, {}, {})}</button></div></div></div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5">${edit ? `<button class="px-3.5 py-1.5 text-sm font-medium dark:bg-black dark:hover:bg-gray-950 dark:text-white bg-white text-black hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="button">${escape($i18n.t("Delete"))}</button>` : ``} <button class="${"px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center " + escape("", true)}" type="submit" ${""}>${escape($i18n.t("Save"))} ${``}</button></div></form></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_models();
  $$unsubscribe_i18n();
  return $$rendered;
});
const Evaluations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $$unsubscribe_settings;
  let $$unsubscribe_config;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_config = subscribe(config, (value) => value);
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let showAddModel = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ArenaModelModal, "ArenaModelModal").$$render(
      $$result,
      { show: showAddModel },
      {
        show: ($$value) => {
          showAddModel = $$value;
          $$settled = false;
        }
      },
      {}
    )} <form class="flex flex-col h-full justify-between text-sm"><div class="overflow-y-scroll scrollbar-hidden h-full">${`<div class="flex h-full justify-center"><div class="my-auto">${validate_component(Spinner, "Spinner").$$render($$result, { className: "size-6" }, {}, {})}</div></div>`}</div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape($i18n.t("Save"))}</button></div></form>`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_settings();
  $$unsubscribe_config();
  $$unsubscribe_i18n();
  return $$rendered;
});
const CodeExecution = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { saveHandler } = $$props;
  if ($$props.saveHandler === void 0 && $$bindings.saveHandler && saveHandler !== void 0) $$bindings.saveHandler(saveHandler);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form class="flex flex-col h-full justify-between space-y-3 text-sm"><div class="space-y-3 overflow-y-scroll scrollbar-hidden h-full">${``}</div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape($i18n.t("Save"))}</button></div></form>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const Tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { saveSettings } = $$props;
  let servers = null;
  let showConnectionModal = false;
  const addConnectionHandler = async (server) => {
    servers = [...servers, server];
    await updateHandler();
  };
  const updateHandler = async () => {
    const res = await setToolServerConnections(localStorage.token, { TOOL_SERVER_CONNECTIONS: servers }).catch((err) => {
      toast.error($i18n.t("Failed to save connections"));
      return null;
    });
    if (res) {
      toast.success($i18n.t("Connections saved successfully"));
    }
  };
  if ($$props.saveSettings === void 0 && $$bindings.saveSettings && saveSettings !== void 0) $$bindings.saveSettings(saveSettings);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(AddServerModal, "AddServerModal").$$render(
      $$result,
      {
        onSubmit: addConnectionHandler,
        show: showConnectionModal
      },
      {
        show: ($$value) => {
          showConnectionModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} <form class="flex flex-col h-full justify-between text-sm"><div class="overflow-y-scroll scrollbar-hidden h-full">${servers !== null ? `<div class=""><div class="mb-3"><div class="mb-2.5 text-base font-medium">${escape($i18n.t("General"))}</div> <hr class="border-gray-100 dark:border-gray-850 my-2"> <div class="mb-2.5 flex flex-col w-full justify-between"> <div class="flex justify-between items-center mb-0.5"><div class="font-medium">${escape($i18n.t("Manage Tool Servers"))}</div> ${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t(`Add Connection`) }, {}, {
      default: () => {
        return `<button class="px-1" type="button">${validate_component(Plus, "Plus").$$render($$result, {}, {}, {})}</button>`;
      }
    })}</div> <div class="flex flex-col gap-1.5">${each(servers, (server, idx) => {
      return `${validate_component(Connection, "Connection").$$render(
        $$result,
        {
          onSubmit: () => {
            updateHandler();
          },
          onDelete: () => {
            servers = servers.filter((_, i) => i !== idx);
            updateHandler();
          },
          connection: server
        },
        {
          connection: ($$value) => {
            server = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div> <div class="my-1.5"><div class="text-xs text-gray-500">${escape($i18n.t("Connect to your own OpenAPI compatible external tool servers."))}</div></div></div> </div></div>` : `<div class="flex h-full justify-center"><div class="my-auto">${validate_component(Spinner, "Spinner").$$render($$result, { className: "size-6" }, {}, {})}</div></div>`}</div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape($i18n.t("Save"))}</button></div></form>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let selectedTab = "general";
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
      selectedTab = [
        "general",
        "connections",
        "models",
        "evaluations",
        "tools",
        "documents",
        "web",
        "code-execution",
        "interface",
        "audio",
        "images",
        "pipelines",
        "db"
      ].includes(tabFromPath) ? tabFromPath : "general";
    }
  }
  {
    if (selectedTab) {
      scrollToTab(selectedTab);
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_i18n();
  return `<div class="flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4"><div id="admin-settings-tabs-container" class="tabs flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-40 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"><button id="general" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 lg:flex-none flex text-right transition " + escape(
    selectedTab === "general" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-1e9u9pw"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M6.955 1.45A.5.5 0 0 1 7.452 1h1.096a.5.5 0 0 1 .497.45l.17 1.699c.484.12.94.312 1.356.562l1.321-1.081a.5.5 0 0 1 .67.033l.774.775a.5.5 0 0 1 .034.67l-1.08 1.32c.25.417.44.873.561 1.357l1.699.17a.5.5 0 0 1 .45.497v1.096a.5.5 0 0 1-.45.497l-1.699.17c-.12.484-.312.94-.562 1.356l1.082 1.322a.5.5 0 0 1-.034.67l-.774.774a.5.5 0 0 1-.67.033l-1.322-1.08c-.416.25-.872.44-1.356.561l-.17 1.699a.5.5 0 0 1-.497.45H7.452a.5.5 0 0 1-.497-.45l-.17-1.699a4.973 4.973 0 0 1-1.356-.562L4.108 13.37a.5.5 0 0 1-.67-.033l-.774-.775a.5.5 0 0 1-.034-.67l1.08-1.32a4.971 4.971 0 0 1-.561-1.357l-1.699-.17A.5.5 0 0 1 1 8.548V7.452a.5.5 0 0 1 .45-.497l1.699-.17c.12-.484.312-.94.562-1.356L2.629 4.107a.5.5 0 0 1 .034-.67l.774-.774a.5.5 0 0 1 .67-.033L5.43 3.71a4.97 4.97 0 0 1 1.356-.561l.17-1.699ZM6 8c0 .538.212 1.026.558 1.385l.057.057a2 2 0 0 0 2.828-2.828l-.058-.056A2 2 0 0 0 6 8Z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("General"))}</div></button> <button id="connections" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "connections" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-1xixjje"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M1 9.5A3.5 3.5 0 0 0 4.5 13H12a3 3 0 0 0 .917-5.857 2.503 2.503 0 0 0-3.198-3.019 3.5 3.5 0 0 0-6.628 2.171A3.5 3.5 0 0 0 1 9.5Z"></path></svg></div> <div class="self-center">${escape($i18n.t("Connections"))}</div></button> <button id="models" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "models" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-17kkxfv"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37zM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 013 13.179z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("Models"))}</div></button> <button id="evaluations" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "evaluations" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2">${validate_component(DocumentChartBar, "DocumentChartBar").$$render($$result, {}, {}, {})}</div> <div class="self-center">${escape($i18n.t("Evaluations"))}</div></button> <button id="tools" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "tools" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-18r8u50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("Tools"))}</div></button> <button id="documents" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "documents" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-ofbvgh"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z"></path><path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z" clip-rule="evenodd"></path><path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"></path></svg></div> <div class="self-center">${escape($i18n.t("Documents"))}</div></button> <button id="web" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "web" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-1t9ru36"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z"></path></svg></div> <div class="self-center">${escape($i18n.t("Web Search"))}</div></button> <button id="code-execution" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "code-execution" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-b77hoq"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2.22 1.97a.75.75 0 0 0 0 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0ZM8.75 8.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("Code Execution"))}</div></button> <button id="interface" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "interface" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-1i52rm6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("Interface"))}</div></button> <button id="audio" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "audio" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-sf0iba"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M7.557 2.066A.75.75 0 0 1 8 2.75v10.5a.75.75 0 0 1-1.248.56L3.59 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.59l3.162-2.81a.75.75 0 0 1 .805-.124ZM12.95 3.05a.75.75 0 1 0-1.06 1.06 5.5 5.5 0 0 1 0 7.78.75.75 0 1 0 1.06 1.06 7 7 0 0 0 0-9.9Z"></path><path d="M10.828 5.172a.75.75 0 1 0-1.06 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 1 0 1.06 1.06 4 4 0 0 0 0-5.656Z"></path></svg></div> <div class="self-center">${escape($i18n.t("Audio"))}</div></button> <button id="images" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "images" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-1gc3odz"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd"></path></svg></div> <div class="self-center">${escape($i18n.t("Images"))}</div></button> <button id="pipelines" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "pipelines" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-1q46caf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z"></path><path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z"></path><path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z"></path></svg></div> <div class="self-center">${escape($i18n.t("Pipelines"))}</div></button> <button id="db" class="${"px-0.5 py-1 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition " + escape(
    selectedTab === "db" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-35c53k"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M8 7c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"></path><path d="M8 8.5c1.84 0 3.579-.37 4.914-1.037A6.33 6.33 0 0 0 14 6.78V8c0 1.657-2.686 3-6 3S2 9.657 2 8V6.78c.346.273.72.5 1.087.683C4.42 8.131 6.16 8.5 8 8.5Z"></path><path d="M8 12.5c1.84 0 3.579-.37 4.914-1.037.366-.183.74-.41 1.086-.684V12c0 1.657-2.686 3-6 3s-6-1.343-6-3v-1.22c.346.273.72.5 1.087.683C4.42 12.131 6.16 12.5 8 12.5Z"></path></svg></div> <div class="self-center">${escape($i18n.t("Database"))}</div></button></div> <div class="flex-1 mt-3 lg:mt-0 overflow-y-scroll pr-1 scrollbar-hidden">${selectedTab === "general" ? `${validate_component(General, "General").$$render(
    $$result,
    {
      saveHandler: async () => {
        toast.success($i18n.t("Settings saved successfully!"));
        await tick();
        await config.set(await getBackendConfig());
      }
    },
    {},
    {}
  )}` : `${selectedTab === "connections" ? `${validate_component(Connections, "Connections").$$render($$result, {}, {}, {})}` : `${selectedTab === "models" ? `${validate_component(Models, "Models").$$render($$result, {}, {}, {})}` : `${selectedTab === "evaluations" ? `${validate_component(Evaluations, "Evaluations").$$render($$result, {}, {}, {})}` : `${selectedTab === "tools" ? `${validate_component(Tools, "Tools").$$render($$result, {}, {}, {})}` : `${selectedTab === "documents" ? `${validate_component(Documents, "Documents").$$render($$result, {}, {}, {})}` : `${selectedTab === "web" ? `${validate_component(WebSearch, "WebSearch").$$render(
    $$result,
    {
      saveHandler: async () => {
        toast.success($i18n.t("Settings saved successfully!"));
        await tick();
        await config.set(await getBackendConfig());
      }
    },
    {},
    {}
  )}` : `${selectedTab === "code-execution" ? `${validate_component(CodeExecution, "CodeExecution").$$render(
    $$result,
    {
      saveHandler: async () => {
        toast.success($i18n.t("Settings saved successfully!"));
        await tick();
        await config.set(await getBackendConfig());
      }
    },
    {},
    {}
  )}` : `${selectedTab === "interface" ? `${validate_component(Interface, "Interface").$$render($$result, {}, {}, {})}` : `${selectedTab === "audio" ? `${validate_component(Audio, "Audio").$$render(
    $$result,
    {
      saveHandler: () => {
        toast.success($i18n.t("Settings saved successfully!"));
      }
    },
    {},
    {}
  )}` : `${selectedTab === "images" ? `${validate_component(Images, "Images").$$render($$result, {}, {}, {})}` : `${selectedTab === "db" ? `${validate_component(Database, "Database").$$render(
    $$result,
    {
      saveHandler: () => {
        toast.success($i18n.t("Settings saved successfully!"));
      }
    },
    {},
    {}
  )}` : `${selectedTab === "pipelines" ? `${validate_component(Pipelines, "Pipelines").$$render(
    $$result,
    {
      saveHandler: () => {
        toast.success($i18n.t("Settings saved successfully!"));
      }
    },
    {},
    {}
  )}` : ``}`}`}`}`}`}`}`}`}`}`}`}`}</div></div>`;
});
export {
  Settings as S
};
//# sourceMappingURL=Settings.js.map
