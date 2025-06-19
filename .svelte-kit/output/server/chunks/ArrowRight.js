import { c as create_ssr_component, g as escape, a as add_attribute } from "./ssr.js";
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  let { side = "right" } = $$props;
  let { width = "200px" } = $$props;
  let { className = "" } = $$props;
  let { duration = 100 } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.side === void 0 && $$bindings.side && side !== void 0) $$bindings.side(side);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  return `${show ? ` <div class="absolute z-20 top-0 right-0 left-0 bottom-0 bg-white/20 dark:bg-black/5 w-full min-h-full h-full flex justify-center overflow-hidden overscroll-contain"></div> <div class="${"absolute z-30 shadow-xl " + escape(side === "right" ? "right-0" : "left-0", true) + " top-0 bottom-0"}"><div class="${escape(className, true) + " h-full"}" style="${"width: " + escape(show ? width : "0px", true)}">${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const ArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>`;
});
export {
  ArrowRight as A,
  Sidebar as S
};
//# sourceMappingURL=ArrowRight.js.map
