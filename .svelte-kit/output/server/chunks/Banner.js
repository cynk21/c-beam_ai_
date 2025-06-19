import { c as create_ssr_component, p as createEventDispatcher } from "./ssr.js";
import "dompurify";
import "marked";
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { banner = {
    id: "",
    type: "info",
    title: "",
    content: "",
    url: "",
    dismissable: true,
    timestamp: Math.floor(Date.now() / 1e3)
  } } = $$props;
  let { className = "mx-4" } = $$props;
  let { dismissed = false } = $$props;
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0) $$bindings.banner(banner);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.dismissed === void 0 && $$bindings.dismissed && dismissed !== void 0) $$bindings.dismissed(dismissed);
  return `${!dismissed ? `${``}` : ``}`;
});
export {
  Banner as B
};
//# sourceMappingURL=Banner.js.map
