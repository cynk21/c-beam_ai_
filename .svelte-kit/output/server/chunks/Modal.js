import { c as create_ssr_component, o as onDestroy, g as escape, a as add_attribute } from "./ssr.js";
import * as FocusTrap from "focus-trap";
/* empty css                                    */
const css = {
  code: ".modal-content.svelte-fq1rhy{animation:svelte-fq1rhy-scaleUp 0.1s ease-out forwards}@keyframes svelte-fq1rhy-scaleUp{from{transform:scale(0.985);opacity:0}to{transform:scale(1);opacity:1}}",
  map: `{"version":3,"file":"Modal.svelte","sources":["Modal.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onDestroy, onMount } from \\"svelte\\";\\nimport { fade } from \\"svelte/transition\\";\\nimport { flyAndScale } from \\"$lib/utils/transitions\\";\\nimport * as FocusTrap from \\"focus-trap\\";\\nexport let show = true;\\nexport let size = \\"md\\";\\nexport let containerClassName = \\"p-3\\";\\nexport let className = \\"bg-white dark:bg-gray-900 rounded-2xl\\";\\nlet modalElement = null;\\nlet mounted = false;\\nlet focusTrap = null;\\nconst sizeToWidth = (size2) => {\\n  if (size2 === \\"full\\") {\\n    return \\"w-full\\";\\n  }\\n  if (size2 === \\"xs\\") {\\n    return \\"w-[16rem]\\";\\n  } else if (size2 === \\"sm\\") {\\n    return \\"w-[30rem]\\";\\n  } else if (size2 === \\"md\\") {\\n    return \\"w-[42rem]\\";\\n  } else {\\n    return \\"w-[56rem]\\";\\n  }\\n};\\nconst handleKeyDown = (event) => {\\n  if (event.key === \\"Escape\\" && isTopModal()) {\\n    console.log(\\"Escape\\");\\n    show = false;\\n  }\\n};\\nconst isTopModal = () => {\\n  const modals = document.getElementsByClassName(\\"modal\\");\\n  return modals.length && modals[modals.length - 1] === modalElement;\\n};\\nonMount(() => {\\n  mounted = true;\\n});\\n$: if (show && modalElement) {\\n  document.body.appendChild(modalElement);\\n  focusTrap = FocusTrap.createFocusTrap(modalElement);\\n  focusTrap.activate();\\n  window.addEventListener(\\"keydown\\", handleKeyDown);\\n  document.body.style.overflow = \\"hidden\\";\\n} else if (modalElement) {\\n  focusTrap.deactivate();\\n  window.removeEventListener(\\"keydown\\", handleKeyDown);\\n  document.body.removeChild(modalElement);\\n  document.body.style.overflow = \\"unset\\";\\n}\\nonDestroy(() => {\\n  show = false;\\n  if (focusTrap) {\\n    focusTrap.deactivate();\\n  }\\n  if (modalElement) {\\n    document.body.removeChild(modalElement);\\n  }\\n});\\n<\/script>\\n\\n{#if show}\\n\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t<div\\n\\t\\tbind:this={modalElement}\\n\\t\\taria-modal=\\"true\\"\\n\\t\\trole=\\"dialog\\"\\n\\t\\tclass=\\"modal fixed top-0 right-0 left-0 bottom-0 bg-black/60 w-full h-screen max-h-[100dvh] {containerClassName} flex justify-center z-9999 overflow-y-auto overscroll-contain\\"\\n\\t\\tin:fade={{ duration: 10 }}\\n\\t\\ton:mousedown={() => {\\n\\t\\t\\tshow = false;\\n\\t\\t}}\\n\\t>\\n\\t\\t<div\\n\\t\\t\\tclass=\\"m-auto max-w-full {sizeToWidth(size)} {size !== 'full'\\n\\t\\t\\t\\t? 'mx-2'\\n\\t\\t\\t\\t: ''} shadow-3xl min-h-fit scrollbar-hidden {className}\\"\\n\\t\\t\\tin:flyAndScale\\n\\t\\t\\ton:mousedown={(e) => {\\n\\t\\t\\t\\te.stopPropagation();\\n\\t\\t\\t}}\\n\\t\\t>\\n\\t\\t\\t<slot />\\n\\t\\t</div>\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.modal-content {\\n\\t\\tanimation: scaleUp 0.1s ease-out forwards;\\n\\t}\\n\\n\\t@keyframes scaleUp {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0.985);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAyFC,4BAAe,CACd,SAAS,CAAE,qBAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,QAClC,CAEA,WAAW,qBAAQ,CAClB,IAAK,CACJ,SAAS,CAAE,MAAM,KAAK,CAAC,CACvB,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACV,CACD"}`
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = true } = $$props;
  let { size = "md" } = $$props;
  let { containerClassName = "p-3" } = $$props;
  let { className = "bg-white dark:bg-gray-900 rounded-2xl" } = $$props;
  let modalElement = null;
  let focusTrap = null;
  const sizeToWidth = (size2) => {
    if (size2 === "full") {
      return "w-full";
    }
    if (size2 === "xs") {
      return "w-[16rem]";
    } else if (size2 === "sm") {
      return "w-[30rem]";
    } else if (size2 === "md") {
      return "w-[42rem]";
    } else {
      return "w-[56rem]";
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Escape" && isTopModal()) {
      console.log("Escape");
      show = false;
    }
  };
  const isTopModal = () => {
    const modals = document.getElementsByClassName("modal");
    return modals.length && modals[modals.length - 1] === modalElement;
  };
  onDestroy(() => {
    show = false;
    if (focusTrap) {
      focusTrap.deactivate();
    }
  });
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.containerClassName === void 0 && $$bindings.containerClassName && containerClassName !== void 0) $$bindings.containerClassName(containerClassName);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  $$result.css.add(css);
  {
    if (show && modalElement) {
      document.body.appendChild(modalElement);
      focusTrap = FocusTrap.createFocusTrap(modalElement);
      focusTrap.activate();
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
  }
  return `${show ? `  <div aria-modal="true" role="dialog" class="${"modal fixed top-0 right-0 left-0 bottom-0 bg-black/60 w-full h-screen max-h-[100dvh] " + escape(containerClassName, true) + " flex justify-center z-9999 overflow-y-auto overscroll-contain svelte-fq1rhy"}"${add_attribute("this", modalElement, 0)}><div class="${"m-auto max-w-full " + escape(sizeToWidth(size), true) + " " + escape(size !== "full" ? "mx-2" : "", true) + " shadow-3xl min-h-fit scrollbar-hidden " + escape(className, true) + " svelte-fq1rhy"}">${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
export {
  Modal as M
};
//# sourceMappingURL=Modal.js.map
