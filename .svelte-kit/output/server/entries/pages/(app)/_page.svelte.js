import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Chat } from "../../../chunks/Chat.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Chat, "Chat").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
