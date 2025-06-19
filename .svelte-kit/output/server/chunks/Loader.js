import { c as create_ssr_component, p as createEventDispatcher, o as onDestroy, a as add_attribute } from "./ssr.js";
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let loaderElement;
  onDestroy(() => {
  });
  return `<div${add_attribute("this", loaderElement, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Loader as L
};
//# sourceMappingURL=Loader.js.map
