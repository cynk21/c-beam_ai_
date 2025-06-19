import { s as setContext, l as getContext, c as create_ssr_component, h as compute_rest_props, b as subscribe, i as spread, k as escape_object, a as add_attribute, g as escape, v as validate_component, e as each, p as createEventDispatcher } from "./ssr.js";
import { a as toast } from "./Toaster.svelte_svelte_type_style_lang.js";
import "./client.js";
import { u as user, c as config, h as WEBUI_BASE_URL } from "./index2.js";
import { p as page } from "./stores.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import { g as getUsers } from "./index6.js";
import "dequal";
import { o as omit, w as withGet, m as makeElement, e as executeCallbacks, a as addMeltEventListener, c as createElHelpers, i as isHTMLElement, k as kbd } from "./create.js";
import { o as overridable, t as toWritableStores, c as createBitAttrs, r as removeUndefined, g as getOptionUpdater, a as createDispatcher } from "./updater.js";
import { i as derived, j as readonly, w as writable } from "./exports.js";
import { C as ChevronRight } from "./ChevronRight.js";
import { T as Tooltip } from "./Tooltip.js";
import "./index3.js";
import { M as Modal } from "./Modal.js";
/* empty css                                    */
import { S as Spinner } from "./Spinner.js";
import { C as ConfirmDialog } from "./ConfirmDialog.js";
import { C as ChevronUp } from "./ChevronUp.js";
import { B as Badge } from "./Badge.js";
import { P as Plus } from "./Plus.js";
import "yaml";
import { B as Banner } from "./Banner.js";
import { M as Markdown } from "./Collapsible.js";
import "dompurify";
import "marked";
/* empty css                                            */
function getPageItems({ page: page2 = 1, totalPages, siblingCount = 1 }) {
  const pageItems = [];
  const pagesToShow = /* @__PURE__ */ new Set([1, totalPages]);
  const firstItemWithSiblings = 3 + siblingCount;
  const lastItemWithSiblings = totalPages - 2 - siblingCount;
  if (firstItemWithSiblings > lastItemWithSiblings) {
    for (let p = 2; p <= totalPages - 1; p++) {
      pagesToShow.add(p);
    }
  } else if (page2 < firstItemWithSiblings) {
    for (let p = 2; p <= Math.min(firstItemWithSiblings, totalPages); p++) {
      pagesToShow.add(p);
    }
  } else if (page2 > lastItemWithSiblings) {
    for (let p = totalPages - 1; p >= Math.max(lastItemWithSiblings, 2); p--) {
      pagesToShow.add(p);
    }
  } else {
    for (let p = Math.max(page2 - siblingCount, 2); p <= Math.min(page2 + siblingCount, totalPages); p++) {
      pagesToShow.add(p);
    }
  }
  const addPage = (value) => {
    pageItems.push({ type: "page", value, key: `page-${value}` });
  };
  const addEllipsis = () => {
    pageItems.push({ type: "ellipsis", key: `ellipsis-${pageItems.length}` });
  };
  let lastNumber = 0;
  for (const page3 of Array.from(pagesToShow).sort((a, b) => a - b)) {
    if (page3 - lastNumber > 1) {
      addEllipsis();
    }
    addPage(page3);
    lastNumber = page3;
  }
  return pageItems;
}
const defaults = {
  perPage: 1,
  siblingCount: 1,
  defaultPage: 1
};
const { name, selector } = createElHelpers("pagination");
function createPagination(props) {
  const withDefaults = { ...defaults, ...props };
  const pageWritable = withDefaults.page ?? writable(withDefaults.defaultPage);
  const page2 = overridable(pageWritable, withDefaults?.onPageChange);
  const options = toWritableStores(omit(withDefaults, "page", "onPageChange", "defaultPage"));
  const { perPage, siblingCount, count } = options;
  const totalPages = withGet.derived([count, perPage], ([$count, $perPage]) => {
    return Math.ceil($count / $perPage);
  });
  const range = derived([page2, perPage, count], ([$page, $perPage, $count]) => {
    const start = ($page - 1) * $perPage;
    const end = Math.min(start + $perPage, $count);
    return { start, end };
  });
  const root = makeElement(name(), {
    returned: () => ({
      "data-scope": "pagination"
    })
  });
  const pages = derived([page2, totalPages, siblingCount], ([$page, $totalPages, $siblingCount]) => {
    return getPageItems({ page: $page, totalPages: $totalPages, siblingCount: $siblingCount });
  });
  const keydown = (e) => {
    const thisEl = e.target;
    if (!isHTMLElement(thisEl))
      return;
    const rootEl = thisEl.closest('[data-scope="pagination"]');
    if (!isHTMLElement(rootEl))
      return;
    const triggers = Array.from(rootEl.querySelectorAll(selector("page"))).filter((el) => isHTMLElement(el));
    const prevButton2 = rootEl.querySelector(selector("prev"));
    const nextButton2 = rootEl.querySelector(selector("next"));
    if (isHTMLElement(prevButton2)) {
      triggers.unshift(prevButton2);
    }
    if (isHTMLElement(nextButton2)) {
      triggers.push(nextButton2);
    }
    const index = triggers.indexOf(thisEl);
    if (e.key === kbd.ARROW_LEFT && index !== 0) {
      e.preventDefault();
      triggers[index - 1].focus();
    } else if (e.key === kbd.ARROW_RIGHT && index !== triggers.length - 1) {
      e.preventDefault();
      triggers[index + 1].focus();
    } else if (e.key === kbd.HOME) {
      e.preventDefault();
      triggers[0].focus();
    } else if (e.key === kbd.END) {
      e.preventDefault();
      triggers[triggers.length - 1].focus();
    }
  };
  const pageTrigger = makeElement(name("page"), {
    stores: page2,
    returned: ($page) => {
      return (pageItem) => {
        return {
          "aria-label": `Page ${pageItem.value}`,
          "data-value": pageItem.value,
          "data-selected": pageItem.value === $page ? "" : void 0
        };
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        const value = node.dataset.value;
        if (!value || Number.isNaN(+value))
          return;
        page2.set(Number(value));
      }), addMeltEventListener(node, "keydown", keydown));
      return {
        destroy: unsub
      };
    }
  });
  const prevButton = makeElement(name("prev"), {
    stores: page2,
    returned: ($page) => {
      return {
        "aria-label": "Previous",
        disabled: $page <= 1
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        page2.update((p) => Math.max(p - 1, 1));
      }), addMeltEventListener(node, "keydown", keydown));
      return {
        destroy: unsub
      };
    }
  });
  const nextButton = makeElement(name("next"), {
    stores: [page2, totalPages],
    returned: ([$page, $totalPages]) => {
      return {
        "aria-label": "Next",
        disabled: $page >= $totalPages
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        const $totalPages = totalPages.get();
        page2.update((p) => Math.min(p + 1, $totalPages));
      }), addMeltEventListener(node, "keydown", keydown));
      return {
        destroy: unsub
      };
    }
  });
  return {
    elements: {
      root,
      pageTrigger,
      prevButton,
      nextButton
    },
    states: {
      range: readonly(range),
      page: page2,
      pages: readonly(pages),
      totalPages: readonly(totalPages)
    },
    options
  };
}
function getPaginationData() {
  const NAME = "pagination";
  const PARTS = ["root", "prev-button", "next-button", "page"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getPaginationData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const pagination = { ...createPagination(removeUndefined(props)), getAttrs };
  setContext(NAME, pagination);
  return {
    ...pagination,
    updateOption: getOptionUpdater(pagination.options)
  };
}
function getCtx() {
  const { NAME } = getPaginationData();
  return getContext(NAME);
}
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["count", "page", "onPageChange", "perPage", "siblingCount", "asChild", "el"]);
  let $root, $$unsubscribe_root;
  let $pages, $$unsubscribe_pages;
  let $range, $$unsubscribe_range;
  let { count } = $$props;
  let { page: page2 = void 0 } = $$props;
  let { onPageChange = void 0 } = $$props;
  let { perPage = void 0 } = $$props;
  let { siblingCount = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root }, states: { pages, range, page: localPage }, getAttrs, updateOption } = setCtx({
    count,
    perPage,
    siblingCount,
    defaultPage: page2,
    onPageChange: ({ next }) => {
      if (page2 !== next) {
        page2 = next;
        onPageChange?.(next);
      }
      return next;
    }
  });
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  $$unsubscribe_pages = subscribe(pages, (value) => $pages = value);
  $$unsubscribe_range = subscribe(range, (value) => $range = value);
  const attrs = getAttrs("root");
  if ($$props.count === void 0 && $$bindings.count && count !== void 0) $$bindings.count(count);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0) $$bindings.page(page2);
  if ($$props.onPageChange === void 0 && $$bindings.onPageChange && onPageChange !== void 0) $$bindings.onPageChange(onPageChange);
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0) $$bindings.perPage(perPage);
  if ($$props.siblingCount === void 0 && $$bindings.siblingCount && siblingCount !== void 0) $$bindings.siblingCount(siblingCount);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  page2 !== void 0 && localPage.set(page2);
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  {
    updateOption("count", count);
  }
  {
    updateOption("perPage", perPage);
  }
  {
    updateOption("siblingCount", siblingCount);
  }
  $$unsubscribe_root();
  $$unsubscribe_pages();
  $$unsubscribe_range();
  return `${asChild ? `${slots.default ? slots.default({ builder, pages: $pages, range: $range }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder, pages: $pages, range: $range }) : ``}</div>`}`;
});
const Pagination_prev_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $prevButton, $$unsubscribe_prevButton;
  let { asChild = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { prevButton }, getAttrs } = getCtx();
  $$unsubscribe_prevButton = subscribe(prevButton, (value) => $prevButton = value);
  const attrs = getAttrs("prev-button");
  createDispatcher();
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $prevButton;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_prevButton();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Pagination_next_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $nextButton, $$unsubscribe_nextButton;
  let { asChild = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { nextButton }, getAttrs } = getCtx();
  $$unsubscribe_nextButton = subscribe(nextButton, (value) => $nextButton = value);
  const attrs = getAttrs("next-button");
  createDispatcher();
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $nextButton;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_nextButton();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Pagination_page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "page", "el"]);
  let $pageTrigger, $$unsubscribe_pageTrigger;
  let { asChild = void 0 } = $$props;
  let { page: page2 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { pageTrigger }, getAttrs } = getCtx();
  $$unsubscribe_pageTrigger = subscribe(pageTrigger, (value) => $pageTrigger = value);
  const attrs = getAttrs("page");
  createDispatcher();
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0) $$bindings.page(page2);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $pageTrigger(page2);
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_pageTrigger();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([{ type: "button" }, escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ` ${escape(page2.value)} `}</button>`}`;
});
const ChevronLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>`;
});
const Pagination_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { page: page2 = 0 } = $$props;
  let { count = 0 } = $$props;
  let { perPage = 20 } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0) $$bindings.page(page2);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0) $$bindings.count(count);
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0) $$bindings.perPage(perPage);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex justify-center">${validate_component(Pagination, "Pagination.Root").$$render(
      $$result,
      { count, perPage, page: page2 },
      {
        page: ($$value) => {
          page2 = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ pages }) => {
          return `<div class="my-2 flex items-center">${validate_component(Pagination_prev_button, "Pagination.PrevButton").$$render(
            $$result,
            {
              class: "mr-[25px] inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent"
            },
            {},
            {
              default: () => {
                return `${validate_component(ChevronLeft, "ChevronLeft").$$render($$result, { className: "size-4", strokeWidth: "2" }, {}, {})}`;
              }
            }
          )} <div class="flex items-center gap-2.5">${each(pages, (page3) => {
            return `${page3.type === "ellipsis" ? `<div class="text-sm font-medium text-foreground-alt" data-svelte-h="svelte-17gfj4t">...</div>` : `${validate_component(Pagination_page, "Pagination.Page").$$render(
              $$result,
              {
                page: page3,
                class: "inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 text-sm font-medium hover:bg-dark-10 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-transparent data-selected:bg-gray-50 data-selected:text-gray-700 data-selected:hover:bg-gray-100 dark:data-selected:bg-gray-850 dark:data-selected:text-gray-50 dark:data-selected:hover:bg-gray-800 transition"
              },
              {},
              {
                default: () => {
                  return `${escape(page3.value)} `;
                }
              }
            )}`}`;
          })}</div> ${validate_component(Pagination_next_button, "Pagination.NextButton").$$render(
            $$result,
            {
              class: "ml-[25px]  inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent"
            },
            {},
            {
              default: () => {
                return `${validate_component(ChevronRight, "ChevronRight").$$render($$result, { className: "size-4", strokeWidth: "2" }, {}, {})}`;
              }
            }
          )}</div>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const ChatBubbles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path></svg>`;
});
const css$1 = {
  code: "input.svelte-1vx7r9s::-webkit-outer-spin-button,input.svelte-1vx7r9s::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}",
  map: `{"version":3,"file":"EditUserModal.svelte","sources":["EditUserModal.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { toast } from \\"svelte-sonner\\";\\nimport dayjs from \\"dayjs\\";\\nimport { createEventDispatcher } from \\"svelte\\";\\nimport { onMount, getContext } from \\"svelte\\";\\nimport { updateUserById } from \\"$lib/apis/users\\";\\nimport Modal from \\"$lib/components/common/Modal.svelte\\";\\nimport localizedFormat from \\"dayjs/plugin/localizedFormat\\";\\nconst i18n = getContext(\\"i18n\\");\\nconst dispatch = createEventDispatcher();\\ndayjs.extend(localizedFormat);\\nexport let show = false;\\nexport let selectedUser;\\nexport let sessionUser;\\nlet _user = {\\n  profile_image_url: \\"\\",\\n  role: \\"pending\\",\\n  name: \\"\\",\\n  email: \\"\\",\\n  password: \\"\\"\\n};\\nconst submitHandler = async () => {\\n  const res = await updateUserById(localStorage.token, selectedUser.id, _user).catch((error) => {\\n    toast.error(\`\${error}\`);\\n  });\\n  if (res) {\\n    dispatch(\\"save\\");\\n    show = false;\\n  }\\n};\\nonMount(() => {\\n  if (selectedUser) {\\n    _user = selectedUser;\\n    _user.password = \\"\\";\\n  }\\n});\\n<\/script>\\n\\n<Modal size=\\"sm\\" bind:show>\\n\\t<div>\\n\\t\\t<div class=\\" flex justify-between dark:text-gray-300 px-5 pt-4 pb-2\\">\\n\\t\\t\\t<div class=\\" text-lg font-medium self-center\\">{$i18n.t('Edit User')}</div>\\n\\t\\t\\t<button\\n\\t\\t\\t\\tclass=\\"self-center\\"\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tshow = false;\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\tviewBox=\\"0 0 20 20\\"\\n\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\tclass=\\"w-5 h-5\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\td=\\"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</svg>\\n\\t\\t\\t</button>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"flex flex-col md:flex-row w-full md:space-x-4 dark:text-gray-200\\">\\n\\t\\t\\t<div class=\\" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6\\">\\n\\t\\t\\t\\t<form\\n\\t\\t\\t\\t\\tclass=\\"flex flex-col w-full\\"\\n\\t\\t\\t\\t\\ton:submit|preventDefault={() => {\\n\\t\\t\\t\\t\\t\\tsubmitHandler();\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<div class=\\" flex items-center rounded-md px-5 py-2 w-full\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\" self-center mr-5\\">\\n\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\tsrc={selectedUser.profile_image_url}\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\" max-w-[55px] object-cover rounded-full\\"\\n\\t\\t\\t\\t\\t\\t\\t\\talt=\\"User profile\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\" self-center capitalize font-semibold\\">{selectedUser.name}</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"text-xs text-gray-500\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Created at')}\\n\\t\\t\\t\\t\\t\\t\\t\\t{dayjs(selectedUser.created_at * 1000).format('LL')}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\" px-5 pt-3 pb-5\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\" flex flex-col space-y-1.5\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-col w-full\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" mb-1 text-xs text-gray-500\\">{$i18n.t('Role')}</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<select\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-full dark:bg-gray-900 rounded-sm text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={_user.role}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdisabled={_user.id == sessionUser.id}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trequired\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\"admin\\">{$i18n.t('Admin')}</option>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\"user\\">{$i18n.t('User')}</option>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\"pending\\">{$i18n.t('Pending')}</option>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</select>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-col w-full\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" mb-1 text-xs text-gray-500\\">{$i18n.t('Email')}</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-full rounded-sm text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"email\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={_user.email}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tplaceholder={$i18n.t('Enter Your Email')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tautocomplete=\\"off\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trequired\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdisabled={_user.id == sessionUser.id}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-col w-full\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" mb-1 text-xs text-gray-500\\">{$i18n.t('Name')}</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-full rounded-sm text-sm bg-transparent outline-hidden\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={_user.name}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tplaceholder={$i18n.t('Enter Your Name')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tautocomplete=\\"off\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trequired\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-col w-full\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" mb-1 text-xs text-gray-500\\">{$i18n.t('New Password')}</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-full rounded-sm text-sm bg-transparent outline-hidden\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"password\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tplaceholder={$i18n.t('Enter New Password')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={_user.password}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tautocomplete=\\"new-password\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"flex justify-end pt-3 text-sm font-medium\\">\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"submit\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Save')}\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</form>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</Modal>\\n\\n<style>\\n\\tinput::-webkit-outer-spin-button,\\n\\tinput::-webkit-inner-spin-button {\\n\\t\\t/* display: none; <- Crashes Chrome on hover */\\n\\t\\t-webkit-appearance: none;\\n\\t\\tmargin: 0; /* <-- Apparently some margin are still there even though it's hidden */\\n\\t}\\n\\n\\t.tabs::-webkit-scrollbar {\\n\\t\\tdisplay: none; /* for Chrome, Safari and Opera */\\n\\t}\\n\\n\\t.tabs {\\n\\t\\t-ms-overflow-style: none; /* IE and Edge */\\n\\t\\tscrollbar-width: none; /* Firefox */\\n\\t}\\n\\n\\tinput[type='number'] {\\n\\t\\t-moz-appearance: textfield; /* Firefox */\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwKC,oBAAK,2BAA2B,CAChC,oBAAK,2BAA4B,CAEhC,kBAAkB,CAAE,IAAI,CACxB,MAAM,CAAE,CACT"}`
};
const EditUserModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  createEventDispatcher();
  dayjs.extend(localizedFormat);
  let { show = false } = $$props;
  let { selectedUser } = $$props;
  let { sessionUser } = $$props;
  let _user = {
    profile_image_url: "",
    role: "pending",
    name: "",
    email: "",
    password: ""
  };
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.selectedUser === void 0 && $$bindings.selectedUser && selectedUser !== void 0) $$bindings.selectedUser(selectedUser);
  if ($$props.sessionUser === void 0 && $$bindings.sessionUser && sessionUser !== void 0) $$bindings.sessionUser(sessionUser);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { size: "sm", show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center">${escape($i18n.t("Edit User"))}</div> <button class="self-center" data-svelte-h="svelte-745w2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex items-center rounded-md px-5 py-2 w-full"><div class="self-center mr-5"><img${add_attribute("src", selectedUser.profile_image_url, 0)} class="max-w-[55px] object-cover rounded-full" alt="User profile"></div> <div><div class="self-center capitalize font-semibold">${escape(selectedUser.name)}</div> <div class="text-xs text-gray-500">${escape($i18n.t("Created at"))} ${escape(dayjs(selectedUser.created_at * 1e3).format("LL"))}</div></div></div> <div class="px-5 pt-3 pb-5"><div class="flex flex-col space-y-1.5"><div class="flex flex-col w-full"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("Role"))}</div> <div class="flex-1"><select class="w-full dark:bg-gray-900 rounded-sm text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden" ${_user.id == sessionUser.id ? "disabled" : ""} required><option value="admin">${escape($i18n.t("Admin"))}</option><option value="user">${escape($i18n.t("User"))}</option><option value="pending">${escape($i18n.t("Pending"))}</option></select></div></div> <div class="flex flex-col w-full"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("Email"))}</div> <div class="flex-1"><input class="w-full rounded-sm text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden svelte-1vx7r9s" type="email"${add_attribute("placeholder", $i18n.t("Enter Your Email"), 0)} autocomplete="off" required ${_user.id == sessionUser.id ? "disabled" : ""}${add_attribute("value", _user.email, 0)}></div></div> <div class="flex flex-col w-full"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("Name"))}</div> <div class="flex-1"><input class="w-full rounded-sm text-sm bg-transparent outline-hidden svelte-1vx7r9s" type="text"${add_attribute("placeholder", $i18n.t("Enter Your Name"), 0)} autocomplete="off" required${add_attribute("value", _user.name, 0)}></div></div> <div class="flex flex-col w-full"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("New Password"))}</div> <div class="flex-1"><input class="w-full rounded-sm text-sm bg-transparent outline-hidden svelte-1vx7r9s" type="password"${add_attribute("placeholder", $i18n.t("Enter New Password"), 0)} autocomplete="new-password"${add_attribute("value", _user.password, 0)}></div></div></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="submit">${escape($i18n.t("Save"))}</button></div></div></form></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const css = {
  code: "input.svelte-1vx7r9s::-webkit-outer-spin-button,input.svelte-1vx7r9s::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}",
  map: `{"version":3,"file":"AddUserModal.svelte","sources":["AddUserModal.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { toast } from \\"svelte-sonner\\";\\nimport { createEventDispatcher } from \\"svelte\\";\\nimport { onMount, getContext } from \\"svelte\\";\\nimport { addUser } from \\"$lib/apis/auths\\";\\nimport { WEBUI_BASE_URL } from \\"$lib/constants\\";\\nimport Modal from \\"$lib/components/common/Modal.svelte\\";\\nimport { generateInitialsImage } from \\"$lib/utils\\";\\nconst i18n = getContext(\\"i18n\\");\\nconst dispatch = createEventDispatcher();\\nexport let show = false;\\nlet loading = false;\\nlet tab = \\"\\";\\nlet inputFiles;\\nlet _user = {\\n  name: \\"\\",\\n  email: \\"\\",\\n  password: \\"\\",\\n  role: \\"user\\"\\n};\\n$: if (show) {\\n  _user = {\\n    name: \\"\\",\\n    email: \\"\\",\\n    password: \\"\\",\\n    role: \\"user\\"\\n  };\\n}\\nconst submitHandler = async () => {\\n  const stopLoading = () => {\\n    dispatch(\\"save\\");\\n    loading = false;\\n  };\\n  if (tab === \\"\\") {\\n    loading = true;\\n    const res = await addUser(\\n      localStorage.token,\\n      _user.name,\\n      _user.email,\\n      _user.password,\\n      _user.role,\\n      generateInitialsImage(_user.name)\\n    ).catch((error) => {\\n      toast.error(\`\${error}\`);\\n    });\\n    if (res) {\\n      stopLoading();\\n      show = false;\\n    }\\n  } else {\\n    if (inputFiles) {\\n      loading = true;\\n      const file = inputFiles[0];\\n      const reader = new FileReader();\\n      reader.onload = async (e) => {\\n        const csv = e.target.result;\\n        const rows = csv.split(\\"\\\\n\\");\\n        let userCount = 0;\\n        for (const [idx, row] of rows.entries()) {\\n          const columns = row.split(\\",\\").map((col) => col.trim());\\n          console.debug(idx, columns);\\n          if (idx > 0) {\\n            if (columns.length === 4 && [\\"admin\\", \\"user\\", \\"pending\\"].includes(columns[3].toLowerCase())) {\\n              const res = await addUser(\\n                localStorage.token,\\n                columns[0],\\n                columns[1],\\n                columns[2],\\n                columns[3].toLowerCase(),\\n                generateInitialsImage(columns[0])\\n              ).catch((error) => {\\n                toast.error(\`Row \${idx + 1}: \${error}\`);\\n                return null;\\n              });\\n              if (res) {\\n                userCount = userCount + 1;\\n              }\\n            } else {\\n              toast.error(\`Row \${idx + 1}: invalid format.\`);\\n            }\\n          }\\n        }\\n        toast.success(\`Successfully imported \${userCount} users.\`);\\n        inputFiles = null;\\n        const uploadInputElement = document.getElementById(\\"upload-user-csv-input\\");\\n        if (uploadInputElement) {\\n          uploadInputElement.value = null;\\n        }\\n        stopLoading();\\n      };\\n      reader.readAsText(file, \\"utf-8\\");\\n    } else {\\n      toast.error($i18n.t(\\"File not found.\\"));\\n    }\\n  }\\n  loading = false;\\n};\\n<\/script>\\n\\n<Modal size=\\"sm\\" bind:show>\\n\\t<div>\\n\\t\\t<div class=\\" flex justify-between dark:text-gray-300 px-5 pt-4 pb-2\\">\\n\\t\\t\\t<div class=\\" text-lg font-medium self-center\\">{$i18n.t('Add User')}</div>\\n\\t\\t\\t<button\\n\\t\\t\\t\\tclass=\\"self-center\\"\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tshow = false;\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\tviewBox=\\"0 0 20 20\\"\\n\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\tclass=\\"w-5 h-5\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\td=\\"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</svg>\\n\\t\\t\\t</button>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"flex flex-col md:flex-row w-full px-4 pb-3 md:space-x-4 dark:text-gray-200\\">\\n\\t\\t\\t<div class=\\" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6\\">\\n\\t\\t\\t\\t<form\\n\\t\\t\\t\\t\\tclass=\\"flex flex-col w-full\\"\\n\\t\\t\\t\\t\\ton:submit|preventDefault={() => {\\n\\t\\t\\t\\t\\t\\tsubmitHandler();\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tclass=\\"flex -mt-2 mb-1.5 gap-1 scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-full bg-transparent dark:text-gray-200\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"min-w-fit rounded-full p-1.5 {tab === ''\\n\\t\\t\\t\\t\\t\\t\\t\\t? ''\\n\\t\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'} transition\\"\\n\\t\\t\\t\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\ttab = '';\\n\\t\\t\\t\\t\\t\\t\\t}}>{$i18n.t('Form')}</button\\n\\t\\t\\t\\t\\t\\t>\\n\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"min-w-fit rounded-full p-1.5 {tab === 'import'\\n\\t\\t\\t\\t\\t\\t\\t\\t? ''\\n\\t\\t\\t\\t\\t\\t\\t\\t: 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'} transition\\"\\n\\t\\t\\t\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\ttab = 'import';\\n\\t\\t\\t\\t\\t\\t\\t}}>{$i18n.t('CSV Import')}</button\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"px-1\\">\\n\\t\\t\\t\\t\\t\\t{#if tab === ''}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-col w-full mb-3\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" mb-1 text-xs text-gray-500\\">{$i18n.t('Role')}</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<select\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-full capitalize rounded-lg text-sm bg-transparent dark:disabled:text-gray-500 outline-hidden\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={_user.role}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tplaceholder={$i18n.t('Enter Your Role')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trequired\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\"pending\\"> {$i18n.t('pending')} </option>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\"user\\"> {$i18n.t('user')} </option>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\"admin\\"> {$i18n.t('admin')} </option>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</select>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-col w-full mt-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" mb-1 text-xs text-gray-500\\">{$i18n.t('Name')}</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={_user.name}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tplaceholder={$i18n.t('Enter Your Full Name')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tautocomplete=\\"off\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trequired\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<hr class=\\" border-gray-100 dark:border-gray-850 my-2.5 w-full\\" />\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-col w-full\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" mb-1 text-xs text-gray-500\\">{$i18n.t('Email')}</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"email\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={_user.email}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tplaceholder={$i18n.t('Enter Your Email')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trequired\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-col w-full mt-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" mb-1 text-xs text-gray-500\\">{$i18n.t('Password')}</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex-1\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"password\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={_user.password}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tplaceholder={$i18n.t('Enter Your Password')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tautocomplete=\\"off\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{:else if tab === 'import'}\\n\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"mb-3 w-full\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid=\\"upload-user-csv-input\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\thidden\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:files={inputFiles}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"file\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taccept=\\".csv\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-full text-sm font-medium py-3 bg-transparent hover:bg-gray-100 border border-dashed dark:border-gray-850 dark:hover:bg-gray-850 text-center rounded-xl\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdocument.getElementById('upload-user-csv-input')?.click();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if inputFiles}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{inputFiles.length > 0 ? \`\${inputFiles.length}\` : ''} document(s) selected.\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Click here to select a csv file.')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\" text-xs text-gray-500\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tⓘ {$i18n.t(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'Ensure your CSV file includes 4 columns in this order: Name, Email, Password, Role.'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"underline dark:text-gray-200\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\thref=\\"{WEBUI_BASE_URL}/static/user-import.csv\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Click here to download user import template file.')}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"flex justify-end pt-3 text-sm font-medium\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center {loading\\n\\t\\t\\t\\t\\t\\t\\t\\t? ' cursor-not-allowed'\\n\\t\\t\\t\\t\\t\\t\\t\\t: ''}\\"\\n\\t\\t\\t\\t\\t\\t\\ttype=\\"submit\\"\\n\\t\\t\\t\\t\\t\\t\\tdisabled={loading}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t{$i18n.t('Save')}\\n\\n\\t\\t\\t\\t\\t\\t\\t{#if loading}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"ml-2 self-center\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\" w-4 h-4\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t><style>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t.spinner_ajPY {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform-origin: center;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tanimation: spinner_AtaB 0.75s infinite linear;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t@keyframes spinner_AtaB {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t100% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(360deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</style><path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\topacity=\\".25\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/><path\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"spinner_ajPY\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/></svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</form>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</Modal>\\n\\n<style>\\n\\tinput::-webkit-outer-spin-button,\\n\\tinput::-webkit-inner-spin-button {\\n\\t\\t/* display: none; <- Crashes Chrome on hover */\\n\\t\\t-webkit-appearance: none;\\n\\t\\tmargin: 0; /* <-- Apparently some margin are still there even though it's hidden */\\n\\t}\\n\\n\\t.tabs::-webkit-scrollbar {\\n\\t\\tdisplay: none; /* for Chrome, Safari and Opera */\\n\\t}\\n\\n\\t.tabs {\\n\\t\\t-ms-overflow-style: none; /* IE and Edge */\\n\\t\\tscrollbar-width: none; /* Firefox */\\n\\t}\\n\\n\\tinput[type='number'] {\\n\\t\\t-moz-appearance: textfield; /* Firefox */\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+SC,oBAAK,2BAA2B,CAChC,oBAAK,2BAA4B,CAEhC,kBAAkB,CAAE,IAAI,CACxB,MAAM,CAAE,CACT"}`
};
const AddUserModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  createEventDispatcher();
  let { show = false } = $$props;
  let _user = {
    name: "",
    email: "",
    password: "",
    role: "user"
  };
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (show) {
        _user = {
          name: "",
          email: "",
          password: "",
          role: "user"
        };
      }
    }
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { size: "sm", show },
      {
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center">${escape($i18n.t("Add User"))}</div> <button class="self-center" data-svelte-h="svelte-745w2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-3 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex -mt-2 mb-1.5 gap-1 scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-full bg-transparent dark:text-gray-200"><button class="${"min-w-fit rounded-full p-1.5 " + escape(
            "",
            true
          ) + " transition"}" type="button">${escape($i18n.t("Form"))}</button> <button class="${"min-w-fit rounded-full p-1.5 " + escape(
            "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
            true
          ) + " transition"}" type="button">${escape($i18n.t("CSV Import"))}</button></div> <div class="px-1">${`<div class="flex flex-col w-full mb-3"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("Role"))}</div> <div class="flex-1"><select class="w-full capitalize rounded-lg text-sm bg-transparent dark:disabled:text-gray-500 outline-hidden"${add_attribute("placeholder", $i18n.t("Enter Your Role"), 0)} required><option value="pending">${escape($i18n.t("pending"))} </option><option value="user">${escape($i18n.t("user"))} </option><option value="admin">${escape($i18n.t("admin"))}</option></select></div></div> <div class="flex flex-col w-full mt-1"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("Name"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden svelte-1vx7r9s" type="text"${add_attribute("placeholder", $i18n.t("Enter Your Full Name"), 0)} autocomplete="off" required${add_attribute("value", _user.name, 0)}></div></div> <hr class="border-gray-100 dark:border-gray-850 my-2.5 w-full"> <div class="flex flex-col w-full"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("Email"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden svelte-1vx7r9s" type="email"${add_attribute("placeholder", $i18n.t("Enter Your Email"), 0)} required${add_attribute("value", _user.email, 0)}></div></div> <div class="flex flex-col w-full mt-1"><div class="mb-1 text-xs text-gray-500">${escape($i18n.t("Password"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden svelte-1vx7r9s" type="password"${add_attribute("placeholder", $i18n.t("Enter Your Password"), 0)} autocomplete="off"${add_attribute("value", _user.password, 0)}></div></div>`}</div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="${"px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center " + escape("", true)}" type="submit" ${""}>${escape($i18n.t("Save"))} ${``}</button></div></form></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const UserList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $config, $$unsubscribe_config;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  dayjs.extend(relativeTime);
  dayjs.extend(localizedFormat);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let page2 = 1;
  let users = null;
  let total = null;
  let query = "";
  let orderBy = "created_at";
  let direction = "asc";
  let selectedUser = null;
  let showDeleteConfirmDialog = false;
  let showAddUserModal = false;
  let showEditUserModal = false;
  const getUserList = async () => {
    try {
      const res = await getUsers(localStorage.token, query, orderBy, direction, page2).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        users = res.users;
        total = res.total;
      }
    } catch (err) {
      console.error(err);
    }
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (page2) {
        getUserList();
      }
    }
    {
      {
        getUserList();
      }
    }
    $$rendered = `${validate_component(ConfirmDialog, "ConfirmDialog").$$render(
      $$result,
      { show: showDeleteConfirmDialog },
      {
        show: ($$value) => {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(EditUserModal, "EditUserModal").$$render(
      $$result,
      {
        selectedUser,
        sessionUser: $user,
        show: showEditUserModal
      },
      {
        show: ($$value) => {
          showEditUserModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(AddUserModal, "AddUserModal").$$render(
      $$result,
      { show: showAddUserModal },
      {
        show: ($$value) => {
          showAddUserModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${``} ${($config?.license_metadata?.seats ?? null) !== null && total && total > $config?.license_metadata?.seats ? `<div class="mt-1 mb-2 text-xs text-red-500">${validate_component(Banner, "Banner").$$render(
      $$result,
      {
        className: "mx-0",
        banner: {
          type: "error",
          title: "License Error",
          content: "Exceeded the number of seats in your license. Please contact support to increase the number of seats.",
          dismissable: true
        }
      },
      {},
      {}
    )}</div>` : ``} ${users === null || total === null ? `<div class="my-10">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>` : `<div class="mt-0.5 mb-2 gap-1 flex flex-col md:flex-row justify-between"><div class="flex md:self-center text-lg font-medium px-0.5"><div class="flex-shrink-0">${escape($i18n.t("Users"))}</div> <div class="flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"></div> ${($config?.license_metadata?.seats ?? null) !== null ? `${total > $config?.license_metadata?.seats ? `<span class="text-lg font-medium text-red-500">${escape(total)} of ${escape($config?.license_metadata?.seats)} <span class="text-sm font-normal" data-svelte-h="svelte-e0jf5p">available users</span></span>` : `<span class="text-lg font-medium text-gray-500 dark:text-gray-300">${escape(total)} of ${escape($config?.license_metadata?.seats)} <span class="text-sm font-normal" data-svelte-h="svelte-e0jf5p">available users</span></span>`}` : `<span class="text-lg font-medium text-gray-500 dark:text-gray-300">${escape(total)}</span>`}</div> <div class="flex gap-1"><div class="flex w-full space-x-2"><div class="flex flex-1"><div class="self-center ml-1 mr-3" data-svelte-h="svelte-kinl2y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class="w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"${add_attribute("placeholder", $i18n.t("Search"), 0)}${add_attribute("value", query, 0)}></div> <div>${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Add User") }, {}, {
      default: () => {
        return `<button class="p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1">${validate_component(Plus, "Plus").$$render($$result, { className: "size-3.5" }, {}, {})}</button>`;
      }
    })}</div></div></div></div> <div class="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded-sm pt-0.5"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded-sm"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 -translate-y-0.5"><tr class=""><th scope="col" class="px-3 py-1.5 cursor-pointer select-none"><div class="flex gap-1.5 items-center">${escape($i18n.t("Role"))} ${`<span class="invisible">${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-2" }, {}, {})}</span>`}</div></th> <th scope="col" class="px-3 py-1.5 cursor-pointer select-none"><div class="flex gap-1.5 items-center">${escape($i18n.t("Name"))} ${`<span class="invisible">${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-2" }, {}, {})}</span>`}</div></th> <th scope="col" class="px-3 py-1.5 cursor-pointer select-none"><div class="flex gap-1.5 items-center">${escape($i18n.t("Email"))} ${`<span class="invisible">${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-2" }, {}, {})}</span>`}</div></th> <th scope="col" class="px-3 py-1.5 cursor-pointer select-none"><div class="flex gap-1.5 items-center">${escape($i18n.t("Last Active"))} ${`<span class="invisible">${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-2" }, {}, {})}</span>`}</div></th> <th scope="col" class="px-3 py-1.5 cursor-pointer select-none"><div class="flex gap-1.5 items-center">${escape($i18n.t("Created at"))} ${`<span class="font-normal">${` ${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-2" }, {}, {})}`}</span>`}</div></th> <th scope="col" class="px-3 py-1.5 cursor-pointer select-none"><div class="flex gap-1.5 items-center">${escape($i18n.t("OAuth ID"))} ${`<span class="invisible">${validate_component(ChevronUp, "ChevronUp").$$render($$result, { className: "size-2" }, {}, {})}</span>`}</div></th> <th scope="col" class="px-3 py-2 text-right"></th></tr></thead> <tbody class="">${each(users, (user2, userIdx) => {
      return `<tr class="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs"><td class="px-3 py-1 min-w-[7rem] w-28"><button class="translate-y-0.5">${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          type: user2.role === "admin" ? "info" : user2.role === "user" ? "success" : "muted",
          content: $i18n.t(user2.role)
        },
        {},
        {}
      )} </button></td> <td class="px-3 py-1 font-medium text-gray-900 dark:text-white w-max"><div class="flex flex-row w-max"><img class="rounded-full w-6 h-6 object-cover mr-2.5"${add_attribute(
        "src",
        user2.profile_image_url.startsWith(WEBUI_BASE_URL) || user2.profile_image_url.startsWith("https://www.gravatar.com/avatar/") || user2.profile_image_url.startsWith("data:") ? user2.profile_image_url : `/user.png`,
        0
      )} alt="user"> <div class="font-medium self-center">${escape(user2.name)}</div> </div></td> <td class="px-3 py-1">${escape(user2.email)}</td> <td class="px-3 py-1">${escape(dayjs(user2.last_active_at * 1e3).fromNow())}</td> <td class="px-3 py-1">${escape(dayjs(user2.created_at * 1e3).format("LL"))}</td> <td class="px-3 py-1">${escape(user2.oauth_sub ?? "")}</td> <td class="px-3 py-1 text-right"><div class="flex justify-end w-full">${$config.features.enable_admin_chat_access && user2.role !== "admin" ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Chats") }, {}, {
        default: () => {
          return `<button class="self-center w-fit text-sm px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl">${validate_component(ChatBubbles, "ChatBubbles").$$render($$result, {}, {}, {})}</button> `;
        }
      })}` : ``} ${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Edit User") }, {}, {
        default: () => {
          return `<button class="self-center w-fit text-sm px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" data-svelte-h="svelte-1ucv0gq"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path></svg></button> `;
        }
      })} ${user2.role !== "admin" ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Delete User") }, {}, {
        default: () => {
          return `<button class="self-center w-fit text-sm px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" data-svelte-h="svelte-3ezw18"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg></button> `;
        }
      })}` : ``} </div></td> </tr>`;
    })}</tbody></table></div> <div class="text-gray-500 text-xs mt-1.5 text-right">ⓘ ${escape($i18n.t("Click on the user role button to change a user's role."))}</div> ${validate_component(Pagination_1, "Pagination").$$render(
      $$result,
      { count: total, perPage: 30, page: page2 },
      {
        page: ($$value) => {
          page2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${!$config?.license_metadata ? `${total > 50 ? `<div class="text-sm">${validate_component(Markdown, "Markdown").$$render(
      $$result,
      {
        content: `
> [!NOTE]
> # **Hey there! 👋**
>
> It looks like you have over 50 users — that usually falls under organizational usage.
> 
> Open WebUI is proudly open source and completely free, with no hidden limits — and we'd love to keep it that way. 🌱  
>
> By supporting the project through sponsorship or an enterprise license, you’re not only helping us stay independent, you’re also helping us ship new features faster, improve stability, and grow the project for the long haul. With an *enterprise license*, you also get additional perks like dedicated support, customization options, and more — all at a fraction of what it would cost to build and maintain internally.  
> 
> Your support helps us stay independent and continue building great tools for everyone. 💛
> 
> - 👉 **[Click here to learn more about enterprise licensing](https://docs.openwebui.com/enterprise)**
> - 👉 *[Click here to sponsor the project on GitHub](https://github.com/sponsors/tjbck)*
`
      },
      {},
      {}
    )}</div>` : ``}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_config();
  $$unsubscribe_i18n();
  return $$rendered;
});
const Groups = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $$unsubscribe_i18n;
  $$unsubscribe_user = subscribe(user, (value) => value);
  dayjs.extend(relativeTime);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``}`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_i18n();
  return $$rendered;
});
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $page, $$unsubscribe_page;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let selectedTab;
  const scrollToTab = (tabId) => {
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
      tabElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    }
  };
  {
    {
      const pathParts = $page.url.pathname.split("/");
      const tabFromPath = pathParts[pathParts.length - 1];
      selectedTab = ["overview", "groups"].includes(tabFromPath) ? tabFromPath : "overview";
    }
  }
  {
    if (selectedTab) {
      scrollToTab(selectedTab);
    }
  }
  $$unsubscribe_user();
  $$unsubscribe_page();
  $$unsubscribe_i18n();
  return `<div class="flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4"><div id="users-tabs-container" class="flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-40 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"><button id="overview" class="${"px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition " + escape(
    selectedTab === "overview" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-vvpxme"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.9 12.006c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0ZM14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29 6.476 6.476 0 0 0-1.167-2.603 3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg></div> <div class="self-center">${escape($i18n.t("Overview"))}</div></button> <button id="groups" class="${"px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition " + escape(
    selectedTab === "groups" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
    true
  )}"><div class="self-center mr-2" data-svelte-h="svelte-161uai9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.156 11.763c.16-.629.44-1.21.813-1.72a2.5 2.5 0 0 0-2.725 1.377c-.136.287.102.58.418.58h1.449c.01-.077.025-.156.045-.237ZM12.847 11.763c.02.08.036.16.046.237h1.446c.316 0 .554-.293.417-.579a2.5 2.5 0 0 0-2.722-1.378c.374.51.653 1.09.813 1.72ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 13c-.552 0-1.013-.455-.876-.99a4.002 4.002 0 0 1 7.753 0c.136.535-.324.99-.877.99H5Z"></path></svg></div> <div class="self-center">${escape($i18n.t("Groups"))}</div></button></div> <div class="flex-1 mt-1 lg:mt-0 overflow-y-scroll">${selectedTab === "overview" ? `${validate_component(UserList, "UserList").$$render($$result, {}, {}, {})}` : `${selectedTab === "groups" ? `${validate_component(Groups, "Groups").$$render($$result, {}, {}, {})}` : ``}`}</div></div>`;
});
export {
  Users as U
};
//# sourceMappingURL=Users.js.map
