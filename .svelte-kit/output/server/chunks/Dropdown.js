import { c as create_ssr_component, p as createEventDispatcher, v as validate_component } from "./ssr.js";
import "dequal";
import "./create.js";
import { M as Menu_item } from "./menu-item.js";
import { a as Menu, b as Menu_trigger, M as Menu_content, f as flyAndScale } from "./menu-trigger.js";
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  let { side = "bottom" } = $$props;
  let { align = "start" } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.side === void 0 && $$bindings.side && side !== void 0) $$bindings.side(side);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Menu, "DropdownMenu.Root").$$render(
      $$result,
      {
        closeFocus: false,
        onOpenChange: (state) => {
          dispatch("change", state);
        },
        typeahead: false,
        open: show
      },
      {
        open: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Menu_trigger, "DropdownMenu.Trigger").$$render($$result, {}, {}, {
            default: () => {
              return `${slots.default ? slots.default({}) : ``}`;
            }
          })} ${slots.content ? slots.content({}) : ` ${validate_component(Menu_content, "DropdownMenu.Content").$$render(
            $$result,
            {
              class: "w-full max-w-[130px] rounded-lg px-1 py-1.5 border border-gray-900 z-50 bg-gray-850 text-white",
              sideOffset: 8,
              side,
              align,
              transition: flyAndScale
            },
            {},
            {
              default: () => {
                return `${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex items-center px-3 py-2 text-sm  font-medium"
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex items-center" data-svelte-h="svelte-1jfjm7">Profile</div>`;
                    }
                  }
                )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex items-center px-3 py-2 text-sm  font-medium"
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex items-center" data-svelte-h="svelte-1jfjm7">Profile</div>`;
                    }
                  }
                )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex items-center px-3 py-2 text-sm  font-medium"
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex items-center" data-svelte-h="svelte-1jfjm7">Profile</div>`;
                    }
                  }
                )}`;
              }
            }
          )} `}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Dropdown as D
};
//# sourceMappingURL=Dropdown.js.map
