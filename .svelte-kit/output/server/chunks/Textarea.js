import { c as create_ssr_component, a as add_attribute, g as escape } from "./ssr.js";
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { rows = 1 } = $$props;
  let { minSize = null } = $$props;
  let { required = false } = $$props;
  let { className = "w-full rounded-lg px-3.5 py-2 text-sm bg-gray-50 dark:text-gray-300 dark:bg-gray-850 outline-hidden  h-full" } = $$props;
  let textareaElement;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0) $$bindings.rows(rows);
  if ($$props.minSize === void 0 && $$bindings.minSize && minSize !== void 0) $$bindings.minSize(minSize);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<textarea${add_attribute("placeholder", placeholder, 0)}${add_attribute("class", className, 0)} style="field-sizing: content;"${add_attribute("rows", rows, 0)} ${required ? "required" : ""}${add_attribute("this", textareaElement, 0)}>${escape(value || "")}</textarea>`;
});
export {
  Textarea as T
};
//# sourceMappingURL=Textarea.js.map
