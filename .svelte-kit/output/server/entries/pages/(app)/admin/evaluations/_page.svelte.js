import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
import { E as Evaluations } from "../../../../../chunks/Evaluations.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Evaluations, "Evaluations").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
