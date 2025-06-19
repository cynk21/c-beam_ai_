import { c as create_ssr_component, o as onDestroy, a as add_attribute, v as validate_component } from "./ssr.js";
import { h as WEBUI_BASE_URL } from "./index2.js";
import "panzoom";
import "file-saver";
const ImagePreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let previewElement = null;
  let sceneElement;
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      console.log("Escape");
      show = false;
    }
  };
  onDestroy(() => {
    show = false;
  });
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  {
    if (show && previewElement) {
      document.body.appendChild(previewElement);
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
  }
  return `${show ? `  <div class="modal fixed top-0 right-0 left-0 bottom-0 bg-black text-white w-full min-h-screen h-screen flex justify-center z-9999 overflow-hidden overscroll-contain"${add_attribute("this", previewElement, 0)}><div class="absolute left-0 w-full flex justify-between select-none z-20"><div><button class="p-5" data-svelte-h="svelte-1qpccnk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></button></div> <div><button class="p-5 z-999" data-svelte-h="svelte-agfu97"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6"><path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"></path><path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"></path></svg></button></div></div> <div class="flex h-full max-h-full justify-center items-center z-0"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="mx-auto h-full object-scale-down select-none" draggable="false"${add_attribute("this", sceneElement, 0)}></div></div>` : ``}`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { className = " w-full outline-hidden focus:outline-hidden" } = $$props;
  let { imageClassName = "rounded-lg" } = $$props;
  let { dismissible = false } = $$props;
  let { onDismiss = () => {
  } } = $$props;
  let _src = "";
  let showImagePreview = false;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.imageClassName === void 0 && $$bindings.imageClassName && imageClassName !== void 0) $$bindings.imageClassName(imageClassName);
  if ($$props.dismissible === void 0 && $$bindings.dismissible && dismissible !== void 0) $$bindings.dismissible(dismissible);
  if ($$props.onDismiss === void 0 && $$bindings.onDismiss && onDismiss !== void 0) $$bindings.onDismiss(onDismiss);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    _src = src.startsWith("/") ? `${WEBUI_BASE_URL}${src}` : src;
    $$rendered = `${validate_component(ImagePreview, "ImagePreview").$$render(
      $$result,
      { src: _src, alt, show: showImagePreview },
      {
        show: ($$value) => {
          showImagePreview = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="relative group w-fit"><button${add_attribute("class", className, 0)} type="button"><img${add_attribute("src", _src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("class", imageClassName, 0)} draggable="false" data-cy="image"></button> ${dismissible ? `<div class="absolute -top-1 -right-1"><button class="bg-white text-black border border-white rounded-full group-hover:visible invisible transition" type="button" data-svelte-h="svelte-1vi8bk2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div>` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path></svg>`;
});
export {
  Image as I,
  Info as a
};
//# sourceMappingURL=Info.js.map
