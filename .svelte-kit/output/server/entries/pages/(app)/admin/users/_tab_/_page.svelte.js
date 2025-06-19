import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { U as Users } from "../../../../../../chunks/Users.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Users, "Users").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
