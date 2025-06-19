import { c as create_ssr_component, l as getContext, b as subscribe, g as escape } from "./ssr.js";
const AddFilesPlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let { title = "" } = $$props;
  let { content = "" } = $$props;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  $$unsubscribe_i18n();
  return `<div class="px-3"><div class="text-center text-6xl mb-3" data-svelte-h="svelte-1f01f7u">📄</div> <div class="text-center dark:text-white text-xl font-semibold z-50">${title ? `${escape(title)}` : `${escape($i18n.t("Add Files"))}`}</div> ${slots.default ? slots.default({}) : `<div class="px-2 mt-2 text-center text-sm dark:text-gray-200 w-full">${content ? `${escape(content)}` : `${escape($i18n.t("Drop any files here to upload"))}`}</div> `}</div>`;
});
export {
  AddFilesPlaceholder as A
};
//# sourceMappingURL=AddFilesPlaceholder.js.map
