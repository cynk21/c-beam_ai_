import { c as create_ssr_component, b as subscribe, g as escape, a as add_attribute, v as validate_component } from "./ssr.js";
import { n as showSidebar } from "./index2.js";
import { A as AddFilesPlaceholder } from "./AddFilesPlaceholder.js";
const FilesOverlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showSidebar, $$unsubscribe_showSidebar;
  $$unsubscribe_showSidebar = subscribe(showSidebar, (value) => $showSidebar = value);
  let { show = false } = $$props;
  let overlayElement = null;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  {
    if (show && overlayElement) {
      document.body.appendChild(overlayElement);
      document.body.style.overflow = "hidden";
    }
  }
  $$unsubscribe_showSidebar();
  return `${show ? `<div class="${"fixed " + escape(
    $showSidebar ? "left-0 md:left-[260px] md:w-[calc(100%-260px)]" : "left-0",
    true
  ) + " fixed top-0 right-0 bottom-0 w-full h-full flex z-9999 touch-none pointer-events-none"}" id="dropzone" role="region" aria-label="Drag and Drop Container"${add_attribute("this", overlayElement, 0)}><div class="absolute w-full h-full backdrop-blur-sm bg-gray-800/40 flex justify-center"><div class="m-auto pt-64 flex flex-col justify-center"><div class="max-w-md">${validate_component(AddFilesPlaceholder, "AddFilesPlaceholder").$$render($$result, {}, {}, {})}</div></div></div></div>` : ``}`;
});
export {
  FilesOverlay as F
};
//# sourceMappingURL=FilesOverlay.js.map
