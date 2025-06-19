import { c as create_ssr_component, b as subscribe, p as createEventDispatcher, l as getContext, g as escape, a as add_attribute, e as each, v as validate_component } from "./ssr.js";
import { l as tags } from "./index2.js";
import "./Toaster.svelte_svelte_type_style_lang.js";
import { T as Tooltip } from "./Tooltip.js";
import { X as XMark } from "./XMark.js";
const TagInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $$unsubscribe_tags;
  $$unsubscribe_tags = subscribe(tags, (value) => value);
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { label = "" } = $$props;
  let showTagInput = false;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  $$unsubscribe_i18n();
  $$unsubscribe_tags();
  return `<div class="${"px-0.5 flex " + escape("", true)}">${``} <button class="cursor-pointer self-center p-0.5 flex h-fit items-center dark:hover:bg-gray-700 rounded-full transition border dark:border-gray-600 border-dashed" type="button"${add_attribute("aria-label", $i18n.t("Add Tag"), 0)}><div class="m-auto self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="${"w-3 h-3 " + escape("", true) + " transition-all transform"}"><path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path></svg></div></button> ${label && !showTagInput ? `<span class="text-xs pl-2 self-center">${escape(label)}</span>` : ``}</div>`;
});
const TagList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { tags: tags2 = [] } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags2 !== void 0) $$bindings.tags(tags2);
  return `${each(tags2, (tag) => {
    return `${validate_component(Tooltip, "Tooltip").$$render($$result, { content: tag.name }, {}, {
      default: () => {
        return `<div class="relative group/tags px-1.5 py-[0.2px] gap-0.5 flex justify-between h-fit max-h-fit w-fit items-center rounded-full bg-gray-500/20 text-gray-700 dark:text-gray-200 transition cursor-pointer"><div class="text-[0.7rem] font-medium self-center line-clamp-1 w-fit">${escape(tag.name)}</div> <div class="absolute invisible right-0.5 group-hover/tags:visible transition"><button class="rounded-full border bg-white dark:bg-gray-700 h-full flex self-center cursor-pointer" type="button">${validate_component(XMark, "XMark").$$render($$result, { className: "size-3", strokeWidth: "2.5" }, {}, {})}</button> </div></div> `;
      }
    })}`;
  })}`;
});
const Tags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { tags: tags2 = [] } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags2 !== void 0) $$bindings.tags(tags2);
  $$unsubscribe_i18n();
  return `<div class="flex flex-row flex-wrap gap-1 line-clamp-1">${validate_component(TagList, "TagList").$$render($$result, { tags: tags2 }, {}, {})} ${validate_component(TagInput, "TagInput").$$render(
    $$result,
    {
      label: tags2.length == 0 ? $i18n.t("Add Tags") : ""
    },
    {},
    {}
  )}</div>`;
});
export {
  Tags as T
};
//# sourceMappingURL=Tags.js.map
