import { c as create_ssr_component, a as add_attribute, g as escape } from "./ssr.js";
import { h as WEBUI_BASE_URL } from "./index2.js";
const Name = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="self-center font-semibold line-clamp-1 flex gap-1 items-center">${slots.default ? slots.default({}) : ``}</div>`;
});
const ProfileImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-8" } = $$props;
  let { src = `${WEBUI_BASE_URL}/static/favicon.png` } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  return `<img crossorigin="anonymous"${add_attribute(
    "src",
    src === "" ? `${WEBUI_BASE_URL}/static/favicon.png` : src.startsWith(WEBUI_BASE_URL) || src.startsWith("https://www.gravatar.com/avatar/") || src.startsWith("data:") || src.startsWith("/") ? src : `/user.png`,
    0
  )} class="${"" + escape(className, true) + " object-cover rounded-full"}" alt="profile" draggable="false">`;
});
export {
  Name as N,
  ProfileImage as P
};
//# sourceMappingURL=ProfileImage.js.map
