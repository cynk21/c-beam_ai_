import { c as create_ssr_component, a as add_attribute, l as getContext, b as subscribe, v as validate_component, g as escape, p as createEventDispatcher } from "./ssr.js";
import "dequal";
import "./create.js";
import { M as Menu_item } from "./menu-item.js";
import { a as Menu, b as Menu_trigger, M as Menu_content } from "./menu-trigger.js";
import "./client.js";
import { m as mobile, I as activeUserIds, U as USAGE_POOL } from "./index2.js";
import { f as fade } from "./index11.js";
import { T as Tooltip } from "./Tooltip.js";
import { M as Modal } from "./Modal.js";
const ArchiveBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-3.5" } = $$props;
  let { strokeWidth = "2.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path></svg>`;
});
const QuestionMarkCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "2" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"></path></svg>`;
});
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "2" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"></path></svg>`;
});
const Keyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "2" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)}${add_attribute("class", className, 0)}><path fill-rule="evenodd" d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm5.01 1H5v2.01h2.01V8Zm3 0H8v2.01h2.01V8Zm3 0H11v2.01h2.01V8Zm3 0H14v2.01h2.01V8Zm3 0H17v2.01h2.01V8Zm-12 3H5v2.01h2.01V11Zm3 0H8v2.01h2.01V11Zm3 0H11v2.01h2.01V11Zm3 0H14v2.01h2.01V11Zm3 0H17v2.01h2.01V11Zm-12 3H5v2.01h2.01V14ZM8 14l-.001 2 8.011.01V14H8Zm11.01 0H17v2.01h2.01V14Z" clip-rule="evenodd"></path></svg>`;
});
const ShortcutsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
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
      { show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="text-gray-700 dark:text-gray-100"><div class="flex justify-between dark:text-gray-300 px-5 pt-4"><div class="text-lg font-medium self-center">${escape($i18n.t("Keyboard shortcuts"))}</div> <button class="self-center" data-svelte-h="svelte-745w2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full p-5 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><div class="flex flex-col space-y-3 w-full self-start"><div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Open new chat"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-1ykt4pq"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Ctrl/⌘</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Shift</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">O</div></div></div> <div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Focus chat input"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-9s7il5"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Shift</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Esc</div></div></div> <div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Copy last code block"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-1rhjj6y"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Ctrl/⌘</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Shift</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">;</div></div></div> <div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Copy last response"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-88t2mq"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Ctrl/⌘</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Shift</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">C</div></div></div> <div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Generate prompt pair"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-71xcgz"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Ctrl/⌘</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Shift</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Enter</div></div></div></div> <div class="flex flex-col space-y-3 w-full self-start"><div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Toggle search"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-633ekr"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Ctrl/⌘</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">K</div></div></div> <div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Toggle settings"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-sstb0e"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Ctrl/⌘</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">.</div></div></div> <div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Toggle sidebar"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-shqiv6"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Ctrl/⌘</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Shift</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">S</div></div></div> <div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Delete chat"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-1czc2xm"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Ctrl/⌘</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Shift</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">⌫/Delete</div></div></div> <div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Show shortcuts"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-10s6aob"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">Ctrl/⌘</div> <div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">/</div></div></div></div></div></div> <div class="flex justify-between dark:text-gray-300 px-5"><div class="text-lg font-medium self-center">${escape($i18n.t("Input commands"))}</div></div> <div class="flex flex-col md:flex-row w-full p-5 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><div class="flex flex-col space-y-3 w-full self-start"><div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Attach file from knowledge"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-npid8c"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">#</div></div></div> <div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Add custom prompt"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-1x4z9aw"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">/</div></div></div> <div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Talk to model"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-1ia95ih"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">@</div></div></div> <div class="w-full flex justify-between items-center"><div class="text-sm">${escape($i18n.t("Accept autocomplete generation / Jump to prompt variable"))}</div> <div class="flex space-x-1 text-xs" data-svelte-h="svelte-1hbxzzi"><div class="h-fit py-1 px-2 flex items-center justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300">TAB</div></div></div></div></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const UserMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mobile;
  let $i18n, $$unsubscribe_i18n;
  let $activeUserIds, $$unsubscribe_activeUserIds;
  let $USAGE_POOL, $$unsubscribe_USAGE_POOL;
  $$unsubscribe_mobile = subscribe(mobile, (value) => value);
  $$unsubscribe_activeUserIds = subscribe(activeUserIds, (value) => $activeUserIds = value);
  $$unsubscribe_USAGE_POOL = subscribe(USAGE_POOL, (value) => $USAGE_POOL = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  let { role = "" } = $$props;
  let { help = false } = $$props;
  let { className = "max-w-[240px]" } = $$props;
  let showShortcuts = false;
  const dispatch = createEventDispatcher();
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.help === void 0 && $$bindings.help && help !== void 0) $$bindings.help(help);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ShortcutsModal, "ShortcutsModal").$$render(
      $$result,
      { show: showShortcuts },
      {
        show: ($$value) => {
          showShortcuts = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Menu, "DropdownMenu.Root").$$render(
      $$result,
      {
        onOpenChange: (state) => {
          dispatch("change", state);
        },
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
              return `${slots.default ? slots.default({}) : ``}`;
            }
          })} ${slots.content ? slots.content({}) : ` ${validate_component(Menu_content, "DropdownMenu.Content").$$render(
            $$result,
            {
              class: "w-full " + className + " text-sm rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg font-primary",
              sideOffset: 4,
              side: "bottom",
              align: "start",
              transition: (e) => fade(e, { duration: 100 })
            },
            {},
            {
              default: () => {
                return `<button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"><div class="self-center mr-3" data-svelte-h="svelte-1ew1v3e"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div> <div class="self-center truncate">${escape($i18n.t("Settings"))}</div></button> <button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"><div class="self-center mr-3">${validate_component(ArchiveBox, "ArchiveBox").$$render($$result, { className: "size-5", strokeWidth: "1.5" }, {}, {})}</div> <div class="self-center truncate">${escape($i18n.t("Archived Chats"))}</div></button> ${role === "admin" ? `<a class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition" href="/playground"><div class="self-center mr-3" data-svelte-h="svelte-4ehrk0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"></path></svg></div> <div class="self-center truncate">${escape($i18n.t("Playground"))}</div></a> <a class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition" href="/admin"><div class="self-center mr-3" data-svelte-h="svelte-1vodyax"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div> <div class="self-center truncate">${escape($i18n.t("Admin Panel"))}</div></a>` : ``} ${help ? `<hr class="border-gray-100 dark:border-gray-800 my-1 p-0">  ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center py-1.5 px-3 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
                    id: "chat-share-button"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(QuestionMarkCircle, "QuestionMarkCircle").$$render($$result, { className: "size-5" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Documentation"))}</div>`;
                    }
                  }
                )}  ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center py-1.5 px-3 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
                    id: "menu-item-releases"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Map, "Map").$$render($$result, { className: "size-5" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Releases"))}</div>`;
                    }
                  }
                )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex gap-2 items-center py-1.5 px-3 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
                    id: "chat-share-button"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Keyboard, "Keyboard").$$render($$result, { className: "size-5" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Keyboard shortcuts"))}</div>`;
                    }
                  }
                )}` : ``} <hr class="border-gray-100 dark:border-gray-800 my-1 p-0"> <button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"><div class="self-center mr-3" data-svelte-h="svelte-1svlfdm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clip-rule="evenodd"></path></svg></div> <div class="self-center truncate">${escape($i18n.t("Sign Out"))}</div></button> ${$activeUserIds?.length > 0 ? `<hr class="border-gray-100 dark:border-gray-800 my-1 p-0"> ${validate_component(Tooltip, "Tooltip").$$render(
                  $$result,
                  {
                    content: $USAGE_POOL && $USAGE_POOL.length > 0 ? `${$i18n.t("Running")}: ${$USAGE_POOL.join(", ")} ✨` : ""
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex rounded-md py-1 px-3 text-xs gap-2.5 items-center"><div class="flex items-center" data-svelte-h="svelte-dl2p8d"><span class="relative flex size-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full size-2 bg-green-500"></span></span></div> <div class=""><span class="">${escape($i18n.t("Active Users"))}:</span> <span class="font-semibold">${escape($activeUserIds?.length)}</span></div></div>`;
                    }
                  }
                )}` : ``} `;
              }
            }
          )} `}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_mobile();
  $$unsubscribe_i18n();
  $$unsubscribe_activeUserIds();
  $$unsubscribe_USAGE_POOL();
  return $$rendered;
});
export {
  ArchiveBox as A,
  Map as M,
  UserMenu as U
};
//# sourceMappingURL=UserMenu.js.map
