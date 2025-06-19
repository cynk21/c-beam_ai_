import { c as create_ssr_component, p as createEventDispatcher, o as onDestroy, g as escape, a as add_attribute } from "./ssr.js";
import "marked";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";
import "./AutoCompletion.js";
import "@tiptap/extension-table";
import "@tiptap/extension-table-row";
import "@tiptap/extension-table-header";
import "@tiptap/extension-table-cell";
import "@tiptap/extension-code-block-lowlight";
import "@tiptap/extension-placeholder";
import { createLowlight, all } from "lowlight";
import "@tiptap/starter-kit";
import "@tiptap/extension-highlight";
import "@tiptap/extension-typography";
const RichTextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const turndownService = new TurndownService({
    codeBlockStyle: "fenced",
    headingStyle: "atx"
  });
  turndownService.escape = (string) => string;
  turndownService.use(gfm);
  createEventDispatcher();
  let { oncompositionstart = (e) => {
  } } = $$props;
  let { oncompositionend = (e) => {
  } } = $$props;
  let { onChange = (e) => {
  } } = $$props;
  createLowlight(all);
  let { className = "input-prose" } = $$props;
  let { placeholder = "Type here..." } = $$props;
  let { id = "" } = $$props;
  let { value = "" } = $$props;
  let { html = "" } = $$props;
  let { json = false } = $$props;
  let { raw = false } = $$props;
  let { editable = true } = $$props;
  let { preserveBreaks = false } = $$props;
  let { generateAutoCompletion = async () => null } = $$props;
  let { autocomplete = false } = $$props;
  let { messageInput = false } = $$props;
  let { shiftEnter = false } = $$props;
  let { largeTextAsFile = false } = $$props;
  let element;
  let editor;
  const setContent = (content) => {
    editor.commands.setContent(content);
  };
  onDestroy(() => {
  });
  if ($$props.oncompositionstart === void 0 && $$bindings.oncompositionstart && oncompositionstart !== void 0) $$bindings.oncompositionstart(oncompositionstart);
  if ($$props.oncompositionend === void 0 && $$bindings.oncompositionend && oncompositionend !== void 0) $$bindings.oncompositionend(oncompositionend);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0) $$bindings.onChange(onChange);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.html === void 0 && $$bindings.html && html !== void 0) $$bindings.html(html);
  if ($$props.json === void 0 && $$bindings.json && json !== void 0) $$bindings.json(json);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0) $$bindings.raw(raw);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0) $$bindings.editable(editable);
  if ($$props.preserveBreaks === void 0 && $$bindings.preserveBreaks && preserveBreaks !== void 0) $$bindings.preserveBreaks(preserveBreaks);
  if ($$props.generateAutoCompletion === void 0 && $$bindings.generateAutoCompletion && generateAutoCompletion !== void 0) $$bindings.generateAutoCompletion(generateAutoCompletion);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0) $$bindings.autocomplete(autocomplete);
  if ($$props.messageInput === void 0 && $$bindings.messageInput && messageInput !== void 0) $$bindings.messageInput(messageInput);
  if ($$props.shiftEnter === void 0 && $$bindings.shiftEnter && shiftEnter !== void 0) $$bindings.shiftEnter(shiftEnter);
  if ($$props.largeTextAsFile === void 0 && $$bindings.largeTextAsFile && largeTextAsFile !== void 0) $$bindings.largeTextAsFile(largeTextAsFile);
  if ($$props.setContent === void 0 && $$bindings.setContent && setContent !== void 0) $$bindings.setContent(setContent);
  {
    if (value === null && html !== null && editor) {
      editor.commands.setContent(html);
    }
  }
  return `<div class="${"relative w-full min-w-full h-full min-h-fit " + escape(className, true)}"${add_attribute("this", element, 0)}></div>`;
});
export {
  RichTextInput as R
};
//# sourceMappingURL=RichTextInput.js.map
