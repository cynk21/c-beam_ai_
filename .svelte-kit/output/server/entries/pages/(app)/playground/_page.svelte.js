import { c as create_ssr_component, l as getContext, b as subscribe, g as escape, a as add_attribute, e as each, v as validate_component } from "../../../../chunks/ssr.js";
import { t as tick } from "../../../../chunks/scheduler.js";
import "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "../../../../chunks/client.js";
import { c as config, a as settings, u as user, r as models } from "../../../../chunks/index2.js";
import "../../../../chunks/index3.js";
import { C as Collapsible } from "../../../../chunks/Collapsible.js";
import { C as ChevronUp } from "../../../../chunks/ChevronUp.js";
import { P as Pencil } from "../../../../chunks/Pencil.js";
import { C as Cog6 } from "../../../../chunks/Cog6.js";
import { S as Sidebar, A as ArrowRight } from "../../../../chunks/ArrowRight.js";
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { message } = $$props;
  let { idx } = $$props;
  let { onDelete } = $$props;
  let textAreaElement;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
  if ($$props.idx === void 0 && $$bindings.idx && idx !== void 0) $$bindings.idx(idx);
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0) $$bindings.onDelete(onDelete);
  $$unsubscribe_i18n();
  return `<div class="flex gap-2 group"><div class="flex items-start pt-1"><div class="px-2 py-1 text-sm font-semibold uppercase min-w-[6rem] text-left rounded-lg transition">${escape($i18n.t(message.role))}</div></div> <div class="flex-1">  <textarea id="${escape(message.role, true) + "-" + escape(idx, true) + "-textarea"}" class="w-full bg-transparent outline-hidden rounded-lg p-2 text-sm resize-none overflow-hidden"${add_attribute(
    "placeholder",
    $i18n.t(`Enter {{role}} message here`, {
      role: message.role === "user" ? $i18n.t("a user") : $i18n.t("an assistant")
    }),
    0
  )} rows="1"${add_attribute("this", textAreaElement, 0)}>${escape(message.content || "")}</textarea></div> <div class="pt-1"><button class="group-hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300 transition" data-svelte-h="svelte-8q5l7q"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></button></div></div>`;
});
const Messages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getContext("i18n");
  let { messages = [] } = $$props;
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0) $$bindings.messages(messages);
  return `<div class="py-3 space-y-3">${each(messages, (message, idx) => {
    return `${validate_component(Message, "Message").$$render(
      $$result,
      {
        message,
        idx,
        onDelete: () => {
          messages = messages.filter((message2, messageIdx) => messageIdx !== idx);
        }
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_config;
  let $$unsubscribe_settings;
  let $$unsubscribe_user;
  let $models, $$unsubscribe_models;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_config = subscribe(config, (value) => value);
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_models = subscribe(models, (value) => $models = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let selectedModelId = "";
  let systemTextareaElement;
  let messagesContainerElement;
  let showSystem = false;
  let showSettings = false;
  let system = "";
  let messages = [];
  const resizeSystemTextarea = async () => {
    await tick();
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (showSystem) {
        resizeSystemTextarea();
      }
    }
    $$rendered = `<div class="flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full relative">${validate_component(Sidebar, "Sidebar").$$render(
      $$result,
      {
        className: " bg-white dark:bg-gray-900",
        width: "300px",
        show: showSettings
      },
      {
        show: ($$value) => {
          showSettings = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-col px-5 py-3 text-sm"><div class="flex justify-between items-center mb-2"><div class="font-medium text-base" data-svelte-h="svelte-1dw76ku">Settings</div> <div class="translate-x-1.5"><button class="p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg">${validate_component(ArrowRight, "ArrowRight").$$render($$result, { className: "size-3", strokeWidth: "2.5" }, {}, {})}</button></div></div> <div class="mt-1"><div><div class="text-xs font-medium mb-1" data-svelte-h="svelte-vz1bvh">Model</div> <div class="w-full"><select class="w-full bg-transparent border border-gray-100 dark:border-gray-850 rounded-lg py-1 px-2 -mx-0.5 text-sm outline-hidden">${each($models, (model) => {
            return `<option${add_attribute("value", model.id, 0)} class="bg-gray-50 dark:bg-gray-700">${escape(model.name)}</option>`;
          })}</select></div></div></div></div>`;
        }
      }
    )} <div class="flex flex-col h-full px-3.5"><div class="flex w-full items-start gap-1.5">${validate_component(Collapsible, "Collapsible").$$render(
      $$result,
      {
        className: "w-full flex-1",
        buttonClassName: "w-full rounded-lg text-sm border border-gray-100 dark:border-gray-850 w-full py-1 px-1.5",
        grow: true,
        open: showSystem
      },
      {
        open: ($$value) => {
          showSystem = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `<div slot="content"><div class="pt-1 px-1.5"><textarea class="w-full h-full bg-transparent resize-none outline-hidden text-sm"${add_attribute("placeholder", $i18n.t("You're a helpful assistant."), 0)} rows="4"${add_attribute("this", systemTextareaElement, 0)}>${escape("")}</textarea></div></div>`;
        },
        default: () => {
          return `<div class="flex gap-2 justify-between items-center"><div class="shrink-0 font-medium ml-1.5">${escape($i18n.t("System Instructions"))}</div> ${!showSystem ? `<div class="flex-1 text-gray-500 line-clamp-1">${escape(system)}</div>` : ``} <div class="shrink-0"><button class="p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg">${showSystem ? `${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-3.5" }, {}, {})}` : `${validate_component(Pencil, "Pencil").$$render($$result, { className: "size-3.5" }, {}, {})}`}</button></div></div>`;
        }
      }
    )} <div class="translate-y-1"><button class="p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg">${validate_component(Cog6, "Cog6").$$render($$result, {}, {}, {})}</button></div></div> <div class="pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0" id="messages-container"${add_attribute("this", messagesContainerElement, 0)}><div class="h-full w-full flex flex-col"><div class="flex-1 p-1">${validate_component(Messages, "Messages").$$render(
      $$result,
      { messages },
      {
        messages: ($$value) => {
          messages = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div> <div class="pb-3"><div class="text-xs font-medium text-gray-500 px-2 py-1">${escape(selectedModelId)}</div> <div class="border border-gray-100 dark:border-gray-850 w-full px-3 py-2.5 rounded-xl"><div class="py-0.5">  <textarea class="w-full h-full bg-transparent resize-none outline-hidden text-sm"${add_attribute(
      "placeholder",
      $i18n.t(`Enter {{role}} message here`, {
        role: $i18n.t("a user")
      }),
      0
    )} rows="2">${escape("")}</textarea></div> <div class="flex justify-between"><div><button class="px-3.5 py-1.5 text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition rounded-lg">${`${escape($i18n.t("User"))}`}</button></div> <div>${`<button ${"disabled"} class="px-3.5 py-1.5 text-sm font-medium disabled:bg-gray-50 dark:disabled:hover:bg-gray-850 disabled:cursor-not-allowed bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition rounded-lg">${escape($i18n.t("Add"))}</button> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-lg">${escape($i18n.t("Run"))}</button>`}</div></div></div></div></div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_config();
  $$unsubscribe_settings();
  $$unsubscribe_user();
  $$unsubscribe_models();
  $$unsubscribe_i18n();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Chat, "Chat").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
