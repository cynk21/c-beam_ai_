import { c as create_ssr_component, l as getContext, b as subscribe, v as validate_component, g as escape, a as add_attribute } from "./ssr.js";
import "./Toaster.svelte_svelte_type_style_lang.js";
import { M as Modal } from "./Modal.js";
import "./index3.js";
const ImportModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  let { onImport = (e) => {
  } } = $$props;
  let { onClose = () => {
  } } = $$props;
  let { loadUrlHandler = () => {
  } } = $$props;
  let { successMessage = "" } = $$props;
  let url = "";
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.onImport === void 0 && $$bindings.onImport && onImport !== void 0) $$bindings.onImport(onImport);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  if ($$props.loadUrlHandler === void 0 && $$bindings.loadUrlHandler && loadUrlHandler !== void 0) $$bindings.loadUrlHandler(loadUrlHandler);
  if ($$props.successMessage === void 0 && $$bindings.successMessage && successMessage !== void 0) $$bindings.successMessage(successMessage);
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
          return `<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center">${escape($i18n.t("Import"))}</div> <button class="self-center" data-svelte-h="svelte-745w2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-3 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><div class="flex flex-col w-full"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("URL"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden" type="url"${add_attribute("placeholder", $i18n.t("Enter the URL to import"), 0)} required${add_attribute("value", url, 0)}> </div></div></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="${"px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center " + escape("", true)}" type="submit" ${""}>${escape($i18n.t("Import"))} ${``}</button></div></form></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
export {
  ImportModal as I
};
//# sourceMappingURL=ImportModal.js.map
