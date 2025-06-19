import { c as create_ssr_component, b as subscribe, p as createEventDispatcher, l as getContext, o as onDestroy, g as escape, a as add_attribute, v as validate_component, e as each, m as missing_component } from "./ssr.js";
import { decode } from "html-entities";
import { v4 } from "uuid";
import dayjs from "dayjs";
import "dayjs/locale/af.js";
import "dayjs/locale/am.js";
import "dayjs/locale/ar.js";
import "dayjs/locale/az.js";
import "dayjs/locale/be.js";
import "dayjs/locale/bg.js";
import "dayjs/locale/bi.js";
import "dayjs/locale/bm.js";
import "dayjs/locale/bn.js";
import "dayjs/locale/bo.js";
import "dayjs/locale/br.js";
import "dayjs/locale/bs.js";
import "dayjs/locale/ca.js";
import "dayjs/locale/cs.js";
import "dayjs/locale/cv.js";
import "dayjs/locale/cy.js";
import "dayjs/locale/da.js";
import "dayjs/locale/de.js";
import "dayjs/locale/dv.js";
import "dayjs/locale/el.js";
import "dayjs/locale/en.js";
import "dayjs/locale/eo.js";
import "dayjs/locale/es.js";
import "dayjs/locale/eu.js";
import "dayjs/locale/fa.js";
import "dayjs/locale/fi.js";
import "dayjs/locale/fo.js";
import "dayjs/locale/fr.js";
import "dayjs/locale/fy.js";
import "dayjs/locale/ga.js";
import "dayjs/locale/gd.js";
import "dayjs/locale/gl.js";
import "dayjs/locale/gu.js";
import "dayjs/locale/he.js";
import "dayjs/locale/hi.js";
import "dayjs/locale/hr.js";
import "dayjs/locale/ht.js";
import "dayjs/locale/hu.js";
import "dayjs/locale/id.js";
import "dayjs/locale/is.js";
import "dayjs/locale/it.js";
import "dayjs/locale/ja.js";
import "dayjs/locale/jv.js";
import "dayjs/locale/ka.js";
import "dayjs/locale/kk.js";
import "dayjs/locale/km.js";
import "dayjs/locale/kn.js";
import "dayjs/locale/ko.js";
import "dayjs/locale/ku.js";
import "dayjs/locale/ky.js";
import "dayjs/locale/lb.js";
import "dayjs/locale/lo.js";
import "dayjs/locale/lt.js";
import "dayjs/locale/lv.js";
import "dayjs/locale/me.js";
import "dayjs/locale/mi.js";
import "dayjs/locale/mk.js";
import "dayjs/locale/ml.js";
import "dayjs/locale/mn.js";
import "dayjs/locale/mr.js";
import "dayjs/locale/ms.js";
import "dayjs/locale/mt.js";
import "dayjs/locale/my.js";
import "dayjs/locale/nb.js";
import "dayjs/locale/ne.js";
import "dayjs/locale/nl.js";
import "dayjs/locale/nn.js";
import "dayjs/locale/pl.js";
import "dayjs/locale/pt.js";
import "dayjs/locale/ro.js";
import "dayjs/locale/ru.js";
import "dayjs/locale/rw.js";
import "dayjs/locale/sd.js";
import "dayjs/locale/se.js";
import "dayjs/locale/si.js";
import "dayjs/locale/sk.js";
import "dayjs/locale/sl.js";
import "dayjs/locale/sq.js";
import "dayjs/locale/sr.js";
import "dayjs/locale/ss.js";
import "dayjs/locale/sv.js";
import "dayjs/locale/sw.js";
import "dayjs/locale/ta.js";
import "dayjs/locale/te.js";
import "dayjs/locale/tet.js";
import "dayjs/locale/tg.js";
import "dayjs/locale/th.js";
import "dayjs/locale/tk.js";
import "dayjs/locale/tlh.js";
import "dayjs/locale/tr.js";
import "dayjs/locale/tzl.js";
import "dayjs/locale/tzm.js";
import "dayjs/locale/uk.js";
import "dayjs/locale/ur.js";
import "dayjs/locale/uz.js";
import "dayjs/locale/vi.js";
import "dayjs/locale/yo.js";
import "dayjs/locale/zh.js";
import "dayjs/locale/et.js";
import duration from "dayjs/plugin/duration.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { C as ChevronUp } from "./ChevronUp.js";
import { C as ChevronDown } from "./ChevronDown.js";
import { S as Spinner } from "./Spinner.js";
import mermaid from "mermaid";
import { u as unescapeHtml, m as markedKatexExtension, l as markedExtension, n as replaceTokens, o as processResponseContent } from "./index3.js";
import "./Toaster.svelte_svelte_type_style_lang.js";
import { u as user, c as config, a as settings, h as WEBUI_BASE_URL } from "./index2.js";
import "file-saver";
import "panzoom";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { i as is_void } from "./names.js";
import { basicSetup, EditorView } from "codemirror";
import { keymap, placeholder } from "@codemirror/view";
import { Compartment } from "@codemirror/state";
import { acceptCompletion } from "@codemirror/autocomplete";
import { indentWithTab } from "@codemirror/commands";
import { LanguageDescription, indentUnit } from "@codemirror/language";
import { languages } from "@codemirror/language-data";
import { T as Tooltip } from "./Tooltip.js";
import { A as ArrowDownTray } from "./ArrowDownTray.js";
import { I as Image, a as Info } from "./Info.js";
import katex from "katex";
import "katex/contrib/mhchem";
import { A as ArrowRightCircle } from "./ArrowRightCircle.js";
function findChanges(oldStr, newStr) {
  let changes = [];
  let oldIndex = 0, newIndex = 0;
  while (oldIndex < oldStr.length || newIndex < newStr.length) {
    if (oldStr[oldIndex] !== newStr[newIndex]) {
      let start = oldIndex;
      while (oldIndex < oldStr.length && oldStr[oldIndex] !== newStr[newIndex]) {
        oldIndex++;
      }
      while (newIndex < newStr.length && newStr[newIndex] !== oldStr[start]) {
        newIndex++;
      }
      changes.push({
        from: start,
        to: oldIndex,
        // Replace the differing part
        insert: newStr.substring(start, newIndex)
      });
    } else {
      oldIndex++;
      newIndex++;
    }
  }
  return changes;
}
const CodeEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_i18n;
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value2) => value2);
  createEventDispatcher();
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value2) => value2);
  let { boilerplate = "" } = $$props;
  let { value = "" } = $$props;
  let { onSave = () => {
  } } = $$props;
  let { onChange = () => {
  } } = $$props;
  let _value = "";
  const updateValue = () => {
    if (_value !== value) {
      findChanges(_value, value);
      _value = value;
    }
  };
  let { id = "" } = $$props;
  let { lang = "" } = $$props;
  let codeEditor;
  const focus = () => {
    codeEditor.focus();
  };
  let editorTheme = new Compartment();
  let editorLanguage = new Compartment();
  languages.push(LanguageDescription.of({
    name: "HCL",
    extensions: ["hcl", "tf"],
    load() {
      return import("codemirror-lang-hcl").then((m) => m.hcl());
    }
  }));
  languages.push(LanguageDescription.of({
    name: "Elixir",
    extensions: ["ex", "exs"],
    load() {
      return import("codemirror-lang-elixir").then((m) => m.elixir());
    }
  }));
  const getLang = async () => {
    const language = languages.find((l) => l.alias.includes(lang));
    return await language?.load();
  };
  const formatPythonCodeHandler = async () => {
    return false;
  };
  [
    basicSetup,
    keymap.of([{ key: "Tab", run: acceptCompletion }, indentWithTab]),
    indentUnit.of("    "),
    placeholder("Enter your code here..."),
    EditorView.updateListener.of((e) => {
      if (e.docChanged) {
        _value = e.state.doc.toString();
        onChange(_value);
      }
    }),
    editorTheme.of([]),
    editorLanguage.of([])
  ];
  const setLanguage = async () => {
    const language = await getLang();
    if (language && codeEditor) {
      codeEditor.dispatch({
        effects: editorLanguage.reconfigure(language)
      });
    }
  };
  onDestroy(() => {
  });
  if ($$props.boilerplate === void 0 && $$bindings.boilerplate && boilerplate !== void 0) $$bindings.boilerplate(boilerplate);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.onSave === void 0 && $$bindings.onSave && onSave !== void 0) $$bindings.onSave(onSave);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0) $$bindings.onChange(onChange);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  if ($$props.formatPythonCodeHandler === void 0 && $$bindings.formatPythonCodeHandler && formatPythonCodeHandler !== void 0) $$bindings.formatPythonCodeHandler(formatPythonCodeHandler);
  {
    if (value) {
      updateValue();
    }
  }
  {
    if (lang) {
      setLanguage();
    }
  }
  $$unsubscribe_i18n();
  $$unsubscribe_user();
  return `<div id="${"code-textarea-" + escape(id, true)}" class="h-full w-full text-sm"></div>`;
});
const Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "2" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"></path></svg>`;
});
const Reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "2" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg>`;
});
const SVGPanZoom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { className = "" } = $$props;
  let { svg = "" } = $$props;
  let { content = "" } = $$props;
  let sceneParentElement;
  let sceneElement;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.svg === void 0 && $$bindings.svg && svg !== void 0) $$bindings.svg(svg);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  $$unsubscribe_i18n();
  return `<div class="${"relative " + escape(className, true)}"${add_attribute("this", sceneParentElement, 0)}><div class="flex h-full max-h-full justify-center items-center"${add_attribute("this", sceneElement, 0)}><!-- HTML_TAG_START -->${svg}<!-- HTML_TAG_END --></div> ${content ? `<div class="absolute top-1 right-1"><div class="flex gap-1">${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Download as SVG") }, {}, {
    default: () => {
      return `<button class="p-1.5 rounded-lg border border-gray-100 dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition">${validate_component(ArrowDownTray, "ArrowDownTray").$$render($$result, { className: " size-4" }, {}, {})}</button>`;
    }
  })} ${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Reset view") }, {}, {
    default: () => {
      return `<button class="p-1.5 rounded-lg border border-gray-100 dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition">${validate_component(Reset, "Reset").$$render($$result, { className: " size-4" }, {}, {})}</button>`;
    }
  })} ${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Copy to clipboard") }, {}, {
    default: () => {
      return `<button class="p-1.5 rounded-lg border border-gray-100 dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition">${validate_component(Clipboard, "Clipboard").$$render($$result, { className: " size-4", strokeWidth: "1.5" }, {}, {})}</button>`;
    }
  })}</div></div>` : ``}</div>`;
});
const ChevronUpDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path></svg>`;
});
const CommandLine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>`;
});
const Cube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "2" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path></svg>`;
});
const CodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $config, $$unsubscribe_config;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { id = "" } = $$props;
  let { onSave = (e) => {
  } } = $$props;
  let { onUpdate = (e) => {
  } } = $$props;
  let { onPreview = (e) => {
  } } = $$props;
  let { save = false } = $$props;
  let { run = true } = $$props;
  let { preview = false } = $$props;
  let { collapsed = false } = $$props;
  let { token } = $$props;
  let { lang = "" } = $$props;
  let { code = "" } = $$props;
  let { attributes = {} } = $$props;
  let { className = "my-2" } = $$props;
  let { editorClassName = "" } = $$props;
  let { stickyButtonsClassName = "top-8" } = $$props;
  let _code = "";
  const updateCode = () => {
    _code = code;
  };
  let _token = null;
  let mermaidHtml = null;
  let stdout = null;
  let stderr = null;
  let result = null;
  let files = null;
  let saved = false;
  const saveCode = () => {
    saved = true;
    code = _code;
    onSave(code);
    setTimeout(
      () => {
        saved = false;
      },
      1e3
    );
  };
  const checkPythonCode = (str) => {
    const pythonSyntax = [
      "def ",
      "else:",
      "elif ",
      "try:",
      "except:",
      "finally:",
      "yield ",
      "lambda ",
      "assert ",
      "nonlocal ",
      "del ",
      "True",
      "False",
      "None",
      " and ",
      " or ",
      " not ",
      " in ",
      " is ",
      " with "
    ];
    for (let syntax of pythonSyntax) {
      if (str.includes(syntax)) {
        return true;
      }
    }
    return false;
  };
  const drawMermaidDiagram = async () => {
    try {
      if (await mermaid.parse(code)) {
        const { svg } = await mermaid.render(`mermaid-${v4()}`, code);
        mermaidHtml = svg;
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const render = async () => {
    if (lang === "mermaid" && (token?.raw ?? "").slice(-4).includes("```")) {
      (async () => {
        await drawMermaidDiagram();
      })();
    }
    onUpdate(token);
  };
  const onAttributesUpdate = () => {
    if (attributes?.output) {
      const unescapeHtml2 = (html) => {
        const textArea = document.createElement("textarea");
        textArea.innerHTML = html;
        return textArea.value;
      };
      try {
        const unescapedOutput = unescapeHtml2(attributes.output);
        const output = JSON.parse(unescapedOutput);
        stdout = output.stdout;
        stderr = output.stderr;
        result = output.result;
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  onDestroy(() => {
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.onSave === void 0 && $$bindings.onSave && onSave !== void 0) $$bindings.onSave(onSave);
  if ($$props.onUpdate === void 0 && $$bindings.onUpdate && onUpdate !== void 0) $$bindings.onUpdate(onUpdate);
  if ($$props.onPreview === void 0 && $$bindings.onPreview && onPreview !== void 0) $$bindings.onPreview(onPreview);
  if ($$props.save === void 0 && $$bindings.save && save !== void 0) $$bindings.save(save);
  if ($$props.run === void 0 && $$bindings.run && run !== void 0) $$bindings.run(run);
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0) $$bindings.preview(preview);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0) $$bindings.collapsed(collapsed);
  if ($$props.token === void 0 && $$bindings.token && token !== void 0) $$bindings.token(token);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.attributes === void 0 && $$bindings.attributes && attributes !== void 0) $$bindings.attributes(attributes);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.editorClassName === void 0 && $$bindings.editorClassName && editorClassName !== void 0) $$bindings.editorClassName(editorClassName);
  if ($$props.stickyButtonsClassName === void 0 && $$bindings.stickyButtonsClassName && stickyButtonsClassName !== void 0) $$bindings.stickyButtonsClassName(stickyButtonsClassName);
  {
    if (code) {
      updateCode();
    }
  }
  {
    if (token) {
      if (JSON.stringify(token) !== JSON.stringify(_token)) {
        _token = token;
      }
    }
  }
  {
    if (_token) {
      render();
    }
  }
  {
    if (attributes) {
      onAttributesUpdate();
    }
  }
  $$unsubscribe_config();
  $$unsubscribe_i18n();
  return `<div><div class="${"relative " + escape(className, true) + " flex flex-col rounded-lg"}" dir="ltr">${lang === "mermaid" ? `${mermaidHtml ? `${validate_component(SVGPanZoom, "SvgPanZoom").$$render(
    $$result,
    {
      className: " border border-gray-100 dark:border-gray-850 rounded-lg max-h-fit overflow-hidden",
      svg: mermaidHtml,
      content: _token.text
    },
    {},
    {}
  )}` : `<pre class="mermaid">${escape(code)}</pre>`}` : `<div class="text-text-300 absolute pl-4 py-1.5 text-xs font-medium dark:text-white">${escape(lang)}</div> <div class="${"sticky " + escape(stickyButtonsClassName, true) + " mb-1 py-1 pr-2.5 flex items-center justify-end z-10 text-xs text-black dark:text-white"}"><div class="flex items-center gap-0.5 translate-y-[1px]"><button class="flex gap-1 items-center bg-none border-none bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition rounded-md px-1.5 py-0.5"><div class="-translate-y-[0.5px]">${validate_component(ChevronUpDown, "ChevronUpDown").$$render($$result, { className: "size-3" }, {}, {})}</div> <div>${escape(collapsed ? $i18n.t("Expand") : $i18n.t("Collapse"))}</div></button> ${preview && ["html", "svg"].includes(lang) ? `<button class="flex gap-1 items-center run-code-button bg-none border-none bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition rounded-md px-1.5 py-0.5"><div class="-translate-y-[0.5px]">${validate_component(Cube, "Cube").$$render($$result, { className: "size-3" }, {}, {})}</div> <div>${escape($i18n.t("Preview"))}</div></button>` : ``} ${($config?.features?.enable_code_execution ?? true) && (lang.toLowerCase() === "python" || lang.toLowerCase() === "py" || lang === "" && checkPythonCode(code)) ? `${`${run ? `<button class="flex gap-1 items-center run-code-button bg-none border-none bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition rounded-md px-1.5 py-0.5"><div class="-translate-y-[0.5px]">${validate_component(CommandLine, "CommandLine").$$render($$result, { className: "size-3" }, {}, {})}</div> <div>${escape($i18n.t("Run"))}</div></button>` : ``}`}` : ``} ${save ? `<button class="save-code-button bg-none border-none bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition rounded-md px-1.5 py-0.5">${escape(saved ? $i18n.t("Saved") : $i18n.t("Save"))}</button>` : ``} <button class="copy-code-button bg-none border-none bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition rounded-md px-1.5 py-0.5">${escape($i18n.t("Copy"))}</button></div></div> <div class="${"language-" + escape(lang, true) + " rounded-t-lg -mt-8 " + escape(
    editorClassName ? editorClassName : stdout || stderr || result ? "" : "rounded-b-lg",
    true
  ) + " overflow-hidden"}"><div class="pt-7 bg-gray-50 dark:bg-gray-850"></div> ${!collapsed ? `${validate_component(CodeEditor, "CodeEditor").$$render(
    $$result,
    {
      value: code,
      id,
      lang,
      onSave: () => {
        saveCode();
      },
      onChange: (value) => {
        _code = value;
      }
    },
    {},
    {}
  )}` : `<div class="bg-gray-50 dark:bg-black dark:text-white rounded-b-lg! pt-2 pb-2 px-4 flex flex-col gap-2 text-xs"><span class="text-gray-500 italic">${escape($i18n.t("{{COUNT}} hidden lines", { COUNT: code.split("\n").length }))}</span></div>`}</div> ${!collapsed ? `<div id="${"plt-canvas-" + escape(id, true)}" class="bg-gray-50 dark:bg-[#202123] dark:text-white max-w-full overflow-x-auto scrollbar-hidden"></div> ${stdout || stderr || result || files ? `<div class="bg-gray-50 dark:bg-[#202123] dark:text-white rounded-b-lg! py-4 px-4 flex flex-col gap-2">${`${stdout || stderr ? `<div class=""><div class="text-gray-500 text-xs mb-1" data-svelte-h="svelte-z7zagk">STDOUT/STDERR</div> <div class="${"text-sm " + escape(stdout?.split("\n")?.length > 100 ? `max-h-96` : "", true) + " overflow-y-auto"}">${escape(stdout || stderr)}</div></div>` : ``} ${result || files ? `<div class=""><div class="text-gray-500 text-xs mb-1" data-svelte-h="svelte-1fv78cd">RESULT</div> ${result ? `<div class="text-sm">${escape(`${JSON.stringify(result)}`)}</div>` : ``} ${``}</div>` : ``}`}</div>` : ``}` : ``}`}</div></div>`;
});
const KatexRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { displayMode = false } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.displayMode === void 0 && $$bindings.displayMode && displayMode !== void 0) $$bindings.displayMode(displayMode);
  return `<!-- HTML_TAG_START -->${katex.renderToString(content, { displayMode, throwOnError: false })}<!-- HTML_TAG_END -->`;
});
function extractAttributes(input) {
  const regex = /(\w+)="([^"]*)"/g;
  let match;
  let attrs = {};
  while ((match = regex.exec(input)) !== null) {
    attrs[match[1]] = match[2];
  }
  return attrs;
}
function getDomain(url) {
  const domain = url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];
  return domain;
}
function formattedTitle(title) {
  if (title.startsWith("http")) {
    return getDomain(title);
  }
  return title;
}
const Source = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { token } = $$props;
  let { onClick = () => {
  } } = $$props;
  let attributes = {};
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.token === void 0 && $$bindings.token && token !== void 0) $$bindings.token(token);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  attributes = extractAttributes(token.text);
  return `${attributes.title !== "N/A" ? `<button class="text-xs font-medium w-fit translate-y-[2px] px-2 py-0.5 dark:bg-white/5 dark:text-white/60 dark:hover:text-white bg-gray-50 text-black/60 hover:text-black transition rounded-lg"><span class="line-clamp-1">${escape(attributes.title ? formattedTitle(attributes.title) : "")}</span></button>` : ``}`;
});
const HTMLToken = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  let { id } = $$props;
  let { token } = $$props;
  let { onSourceClick = () => {
  } } = $$props;
  let html = null;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.token === void 0 && $$bindings.token && token !== void 0) $$bindings.token(token);
  if ($$props.onSourceClick === void 0 && $$bindings.onSourceClick && onSourceClick !== void 0) $$bindings.onSourceClick(onSourceClick);
  {
    if (token.type === "html" && token?.text) {
      html = DOMPurify.sanitize(token.text);
    } else {
      html = null;
    }
  }
  $$unsubscribe_settings();
  return `${token.type === "html" ? `${html && html.includes("<video") ? (() => {
    let video = html.match(/<video[^>]*>([\s\S]*?)<\/video>/), videoSrc = video && video[1];
    return `  ${videoSrc ? ` <video class="w-full my-2"${add_attribute("src", videoSrc.replaceAll("&amp;", "&"), 0)} title="Video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" controls allowfullscreen></video>` : `${escape(token.text)}`}`;
  })() : `${html && html.includes("<audio") ? (() => {
    let audio = html.match(/<audio[^>]*>([\s\S]*?)<\/audio>/), audioSrc = audio && audio[1];
    return `  ${audioSrc ? ` <audio class="w-full my-2"${add_attribute("src", audioSrc.replaceAll("&amp;", "&"), 0)} title="Audio player" controls></audio>` : `${escape(token.text)}`}`;
  })() : `${token.text && token.text.match(/<iframe\s+[^>]*src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})(?:\?[^"]*)?"[^>]*><\/iframe>/) ? (() => {
    let match = token.text.match(/<iframe\s+[^>]*src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})(?:\?[^"]*)?"[^>]*><\/iframe>/), ytId = match && match[1];
    return `  ${ytId ? `<iframe class="w-full aspect-video my-2"${add_attribute("src", `https://www.youtube.com/embed/${ytId}`, 0)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` : ``}`;
  })() : `${token.text.includes(`<file type="html"`) ? (() => {
    let match = token.text.match(/<file type="html" id="([^"]+)"/), fileId = match && match[1];
    return `  ${fileId ? `<iframe class="w-full my-2"${add_attribute("src", `${WEBUI_BASE_URL}/api/v1/files/${fileId}/content/html`, 0)} title="Content" frameborder="0" sandbox="${"allow-scripts" + escape(
      $settings?.iframeSandboxAllowForms ?? false ? " allow-forms" : "",
      true
    ) + escape(
      $settings?.iframeSandboxAllowSameOrigin ?? false ? " allow-same-origin" : "",
      true
    )}" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen width="100%" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"></iframe>` : ``}`;
  })() : `${token.text.includes(`<source_id`) ? `${validate_component(Source, "Source").$$render($$result, { id, token, onClick: onSourceClick }, {}, {})}` : `${escape(token.text)}`}`}`}`}`}` : ``}`;
});
const MarkdownInlineTokens = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => value);
  let { id } = $$props;
  let { tokens } = $$props;
  let { onSourceClick = () => {
  } } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0) $$bindings.tokens(tokens);
  if ($$props.onSourceClick === void 0 && $$bindings.onSourceClick && onSourceClick !== void 0) $$bindings.onSourceClick(onSourceClick);
  $$unsubscribe_i18n();
  return `${each(tokens, (token) => {
    return `${token.type === "escape" ? `${escape(unescapeHtml(token.text))}` : `${token.type === "html" ? `${validate_component(HTMLToken, "HtmlToken").$$render($$result, { id, token, onSourceClick }, {}, {})}` : `${token.type === "link" ? `${token.tokens ? `<a${add_attribute("href", token.href, 0)} target="_blank" rel="nofollow"${add_attribute("title", token.title, 0)}>${validate_component(MarkdownInlineTokens, "svelte:self").$$render(
      $$result,
      {
        id: `${id}-a`,
        tokens: token.tokens,
        onSourceClick
      },
      {},
      {}
    )} </a>` : `<a${add_attribute("href", token.href, 0)} target="_blank" rel="nofollow"${add_attribute("title", token.title, 0)}>${escape(token.text)}</a>`}` : `${token.type === "image" ? `${validate_component(Image, "Image").$$render($$result, { src: token.href, alt: token.text }, {}, {})}` : `${token.type === "strong" ? `<strong>${validate_component(MarkdownInlineTokens, "svelte:self").$$render(
      $$result,
      {
        id: `${id}-strong`,
        tokens: token.tokens,
        onSourceClick
      },
      {},
      {}
    )}</strong>` : `${token.type === "em" ? `<em>${validate_component(MarkdownInlineTokens, "svelte:self").$$render(
      $$result,
      {
        id: `${id}-em`,
        tokens: token.tokens,
        onSourceClick
      },
      {},
      {}
    )}</em>` : `${token.type === "codespan" ? `  <code class="codespan cursor-pointer">${escape(unescapeHtml(token.text))}</code>` : `${token.type === "br" ? `<br>` : `${token.type === "del" ? `<del>${validate_component(MarkdownInlineTokens, "svelte:self").$$render(
      $$result,
      {
        id: `${id}-del`,
        tokens: token.tokens,
        onSourceClick
      },
      {},
      {}
    )}</del>` : `${token.type === "inlineKatex" ? `${token.text ? `${validate_component(KatexRenderer, "KatexRenderer").$$render($$result, { content: token.text, displayMode: false }, {}, {})}` : ``}` : `${token.type === "iframe" ? `<iframe src="${escape(WEBUI_BASE_URL, true) + "/api/v1/files/" + escape(token.fileId, true) + "/content"}"${add_attribute("title", token.fileId, 0)} width="100%" frameborder="0" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"></iframe>` : `${token.type === "text" ? `${escape(token.raw)}` : ``}`}`}`}`}`}`}`}`}`}`}`}`;
  })}`;
});
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg>`;
});
const LightBulb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path></svg>`;
});
const Bolt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-3" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path></svg>`;
});
const alertStyles = {
  NOTE: {
    border: "border-sky-500",
    text: "text-sky-500",
    icon: Info
  },
  TIP: {
    border: "border-emerald-500",
    text: "text-emerald-500",
    icon: LightBulb
  },
  IMPORTANT: {
    border: "border-purple-500",
    text: "text-purple-500",
    icon: Star
  },
  WARNING: {
    border: "border-yellow-500",
    text: "text-yellow-500",
    icon: ArrowRightCircle
  },
  CAUTION: {
    border: "border-rose-500",
    text: "text-rose-500",
    icon: Bolt
  }
};
function alertComponent(token) {
  const regExpStr = `^(?:\\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\\])\\s*?
*`;
  const regExp = new RegExp(regExpStr);
  const matches = token.text?.match(regExp);
  if (matches && matches.length) {
    const alertType = matches[1];
    const newText = token.text.replace(regExp, "");
    const newTokens = marked.lexer(newText);
    return {
      type: alertType,
      text: newText,
      tokens: newTokens
    };
  }
  return false;
}
const AlertRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { token } = $$props;
  let { alert } = $$props;
  let { id = "" } = $$props;
  let { tokenIdx = 0 } = $$props;
  let { onTaskClick = void 0 } = $$props;
  let { onSourceClick = void 0 } = $$props;
  if ($$props.token === void 0 && $$bindings.token && token !== void 0) $$bindings.token(token);
  if ($$props.alert === void 0 && $$bindings.alert && alert !== void 0) $$bindings.alert(alert);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.tokenIdx === void 0 && $$bindings.tokenIdx && tokenIdx !== void 0) $$bindings.tokenIdx(tokenIdx);
  if ($$props.onTaskClick === void 0 && $$bindings.onTaskClick && onTaskClick !== void 0) $$bindings.onTaskClick(onTaskClick);
  if ($$props.onSourceClick === void 0 && $$bindings.onSourceClick && onSourceClick !== void 0) $$bindings.onSourceClick(onSourceClick);
  return ` <div${add_attribute("class", `border-l-4 pl-2.5 ${alertStyles[alert.type].border} my-0.5`, 0)}><div class="${escape(alertStyles[alert.type].text, true) + " items-center flex gap-1 py-1.5"}">${validate_component(alertStyles[alert.type].icon || missing_component, "svelte:component").$$render($$result, { className: "inline-block size-4" }, {}, {})} <span class="font-medium">${escape(alert.type)}</span></div> <div class="pb-2">${validate_component(MarkdownTokens, "MarkdownTokens").$$render(
    $$result,
    {
      id: `${id}-${tokenIdx}`,
      tokens: alert.tokens,
      onTaskClick,
      onSourceClick
    },
    {},
    {}
  )}</div></div>`;
});
const MarkdownTokens = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { id } = $$props;
  let { tokens } = $$props;
  let { top = true } = $$props;
  let { attributes = {} } = $$props;
  let { save = false } = $$props;
  let { preview = false } = $$props;
  let { onSave = () => {
  } } = $$props;
  let { onUpdate = () => {
  } } = $$props;
  let { onPreview = () => {
  } } = $$props;
  let { onTaskClick = () => {
  } } = $$props;
  let { onSourceClick = () => {
  } } = $$props;
  const headerComponent = (depth) => {
    return "h" + depth;
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0) $$bindings.tokens(tokens);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0) $$bindings.top(top);
  if ($$props.attributes === void 0 && $$bindings.attributes && attributes !== void 0) $$bindings.attributes(attributes);
  if ($$props.save === void 0 && $$bindings.save && save !== void 0) $$bindings.save(save);
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0) $$bindings.preview(preview);
  if ($$props.onSave === void 0 && $$bindings.onSave && onSave !== void 0) $$bindings.onSave(onSave);
  if ($$props.onUpdate === void 0 && $$bindings.onUpdate && onUpdate !== void 0) $$bindings.onUpdate(onUpdate);
  if ($$props.onPreview === void 0 && $$bindings.onPreview && onPreview !== void 0) $$bindings.onPreview(onPreview);
  if ($$props.onTaskClick === void 0 && $$bindings.onTaskClick && onTaskClick !== void 0) $$bindings.onTaskClick(onTaskClick);
  if ($$props.onSourceClick === void 0 && $$bindings.onSourceClick && onSourceClick !== void 0) $$bindings.onSourceClick(onSourceClick);
  $$unsubscribe_settings();
  $$unsubscribe_i18n();
  return ` ${each(tokens, (token, tokenIdx) => {
    return `${token.type === "hr" ? `<hr class="border-gray-100 dark:border-gray-850">` : `${token.type === "heading" ? `${((tag) => {
      return tag ? `<${headerComponent(token.depth)} dir="auto">${is_void(tag) ? "" : `${validate_component(MarkdownInlineTokens, "MarkdownInlineTokens").$$render(
        $$result,
        {
          id: `${id}-${tokenIdx}-h`,
          tokens: token.tokens,
          onSourceClick
        },
        {},
        {}
      )} `}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(headerComponent(token.depth))}` : `${token.type === "code" ? `${token.raw.includes("```") ? `${validate_component(CodeBlock, "CodeBlock").$$render(
      $$result,
      {
        id: `${id}-${tokenIdx}`,
        collapsed: $settings?.collapseCodeBlocks ?? false,
        token,
        lang: token?.lang ?? "",
        code: token?.text ?? "",
        attributes,
        save,
        preview,
        onSave: (value) => {
          onSave({
            raw: token.raw,
            oldContent: token.text,
            newContent: value
          });
        },
        onUpdate,
        onPreview
      },
      {},
      {}
    )}` : `${escape(token.text)}`}` : `${token.type === "table" ? `<div class="relative w-full group"><div class="scrollbar-hidden relative overflow-x-auto max-w-full rounded-lg"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-full rounded-xl"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 border-none"><tr class="">${each(token.header, (header, headerIdx) => {
      return `<th scope="col" class="px-3! py-1.5! cursor-pointer border border-gray-100 dark:border-gray-850"${add_attribute(
        "style",
        token.align[headerIdx] ? "" : `text-align: ${token.align[headerIdx]}`,
        0
      )}><div class="gap-1.5 text-left"><div class="shrink-0 break-normal">${validate_component(MarkdownInlineTokens, "MarkdownInlineTokens").$$render(
        $$result,
        {
          id: `${id}-${tokenIdx}-header-${headerIdx}`,
          tokens: header.tokens,
          onSourceClick
        },
        {},
        {}
      )} </div></div> </th>`;
    })} </tr></thead> <tbody>${each(token.rows, (row, rowIdx) => {
      return `<tr class="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs">${each(row ?? [], (cell, cellIdx) => {
        return `<td class="px-3! py-1.5! text-gray-900 dark:text-white w-max border border-gray-100 dark:border-gray-850"${add_attribute(
          "style",
          token.align[cellIdx] ? "" : `text-align: ${token.align[cellIdx]}`,
          0
        )}><div class="break-normal">${validate_component(MarkdownInlineTokens, "MarkdownInlineTokens").$$render(
          $$result,
          {
            id: `${id}-${tokenIdx}-row-${rowIdx}-${cellIdx}`,
            tokens: cell.tokens,
            onSourceClick
          },
          {},
          {}
        )}</div> </td>`;
      })} </tr>`;
    })}</tbody> </table></div> <div class="absolute top-1 right-1.5 z-20 invisible group-hover:visible">${validate_component(Tooltip, "Tooltip").$$render($$result, { content: $i18n.t("Export to CSV") }, {}, {
      default: () => {
        return `<button class="p-1 rounded-lg bg-transparent transition">${validate_component(ArrowDownTray, "ArrowDownTray").$$render(
          $$result,
          {
            className: " size-3.5",
            strokeWidth: "1.5"
          },
          {},
          {}
        )}</button> `;
      }
    })}</div> </div>` : `${token.type === "blockquote" ? (() => {
      let alert = alertComponent(token);
      return ` ${alert ? `${validate_component(AlertRenderer, "AlertRenderer").$$render($$result, { token, alert }, {}, {})}` : `<blockquote dir="auto">${validate_component(MarkdownTokens, "svelte:self").$$render(
        $$result,
        {
          id: `${id}-${tokenIdx}`,
          tokens: token.tokens,
          onTaskClick,
          onSourceClick
        },
        {},
        {}
      )} </blockquote>`}`;
    })() : `${token.type === "list" ? `${token.ordered ? `<ol${add_attribute("start", token.start || 1, 0)} dir="auto">${each(token.items, (item, itemIdx) => {
      return `<li class="text-start">${item?.task ? `<input class="translate-y-[1px] -translate-x-1" type="checkbox" ${item.checked ? "checked" : ""}>` : ``} ${validate_component(MarkdownTokens, "svelte:self").$$render(
        $$result,
        {
          id: `${id}-${tokenIdx}-${itemIdx}`,
          tokens: item.tokens,
          top: token.loose,
          onTaskClick,
          onSourceClick
        },
        {},
        {}
      )} </li>`;
    })} </ol>` : `<ul dir="auto">${each(token.items, (item, itemIdx) => {
      return `<li class="text-start">${item?.task ? `<input class="translate-y-[1px] -translate-x-1" type="checkbox" ${item.checked ? "checked" : ""}>` : ``} ${validate_component(MarkdownTokens, "svelte:self").$$render(
        $$result,
        {
          id: `${id}-${tokenIdx}-${itemIdx}`,
          tokens: item.tokens,
          top: token.loose,
          onTaskClick,
          onSourceClick
        },
        {},
        {}
      )} </li>`;
    })} </ul>`}` : `${token.type === "details" ? `${validate_component(Collapsible, "Collapsible").$$render(
      $$result,
      {
        title: token.summary,
        open: $settings?.expandDetails ?? false,
        attributes: token?.attributes,
        className: "w-full space-y-1",
        dir: "auto"
      },
      {},
      {
        content: () => {
          return `<div class="mb-1.5" slot="content">${validate_component(MarkdownTokens, "svelte:self").$$render(
            $$result,
            {
              id: `${id}-${tokenIdx}-d`,
              tokens: marked.lexer(token.text),
              attributes: token?.attributes,
              onTaskClick,
              onSourceClick
            },
            {},
            {}
          )} </div>`;
        }
      }
    )}` : `${token.type === "html" ? `${validate_component(HTMLToken, "HtmlToken").$$render($$result, { id, token, onSourceClick }, {}, {})}` : `${token.type === "iframe" ? `<iframe src="${escape(WEBUI_BASE_URL, true) + "/api/v1/files/" + escape(token.fileId, true) + "/content"}"${add_attribute("title", token.fileId, 0)} width="100%" frameborder="0" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"></iframe>` : `${token.type === "paragraph" ? `<p dir="auto">${validate_component(MarkdownInlineTokens, "MarkdownInlineTokens").$$render(
      $$result,
      {
        id: `${id}-${tokenIdx}-p`,
        tokens: token.tokens ?? [],
        onSourceClick
      },
      {},
      {}
    )} </p>` : `${token.type === "text" ? `${top ? `<p>${token.tokens ? `${validate_component(MarkdownInlineTokens, "MarkdownInlineTokens").$$render(
      $$result,
      {
        id: `${id}-${tokenIdx}-t`,
        tokens: token.tokens,
        onSourceClick
      },
      {},
      {}
    )}` : `${escape(unescapeHtml(token.text))}`} </p>` : `${token.tokens ? `${validate_component(MarkdownInlineTokens, "MarkdownInlineTokens").$$render(
      $$result,
      {
        id: `${id}-${tokenIdx}-p`,
        tokens: token.tokens ?? [],
        onSourceClick
      },
      {},
      {}
    )}` : `${escape(unescapeHtml(token.text))}`}`}` : `${token.type === "inlineKatex" ? `${token.text ? `${validate_component(KatexRenderer, "KatexRenderer").$$render(
      $$result,
      {
        content: token.text,
        displayMode: token?.displayMode ?? false
      },
      {},
      {}
    )}` : ``}` : `${token.type === "blockKatex" ? `${token.text ? `${validate_component(KatexRenderer, "KatexRenderer").$$render(
      $$result,
      {
        content: token.text,
        displayMode: token?.displayMode ?? false
      },
      {},
      {}
    )}` : ``}` : `${token.type === "space" ? `<div class="my-2"></div>` : `${escape(console.log("Unknown token", token))}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`;
  })}`;
});
const Markdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { id = "" } = $$props;
  let { content } = $$props;
  let { model = null } = $$props;
  let { save = false } = $$props;
  let { preview = false } = $$props;
  let { sourceIds = [] } = $$props;
  let { onSave = () => {
  } } = $$props;
  let { onUpdate = () => {
  } } = $$props;
  let { onPreview = () => {
  } } = $$props;
  let { onSourceClick = () => {
  } } = $$props;
  let { onTaskClick = () => {
  } } = $$props;
  let tokens = [];
  const options = { throwOnError: false };
  marked.use(markedKatexExtension(options));
  marked.use(markedExtension(options));
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.model === void 0 && $$bindings.model && model !== void 0) $$bindings.model(model);
  if ($$props.save === void 0 && $$bindings.save && save !== void 0) $$bindings.save(save);
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0) $$bindings.preview(preview);
  if ($$props.sourceIds === void 0 && $$bindings.sourceIds && sourceIds !== void 0) $$bindings.sourceIds(sourceIds);
  if ($$props.onSave === void 0 && $$bindings.onSave && onSave !== void 0) $$bindings.onSave(onSave);
  if ($$props.onUpdate === void 0 && $$bindings.onUpdate && onUpdate !== void 0) $$bindings.onUpdate(onUpdate);
  if ($$props.onPreview === void 0 && $$bindings.onPreview && onPreview !== void 0) $$bindings.onPreview(onPreview);
  if ($$props.onSourceClick === void 0 && $$bindings.onSourceClick && onSourceClick !== void 0) $$bindings.onSourceClick(onSourceClick);
  if ($$props.onTaskClick === void 0 && $$bindings.onTaskClick && onTaskClick !== void 0) $$bindings.onTaskClick(onTaskClick);
  {
    (async () => {
      if (content) {
        tokens = marked.lexer(replaceTokens(processResponseContent(content), sourceIds, model?.name, $user?.name));
      }
    })();
  }
  $$unsubscribe_user();
  return `${validate_component(MarkdownTokens, "MarkdownTokens").$$render(
    $$result,
    {
      tokens,
      id,
      save,
      preview,
      onTaskClick,
      onSourceClick,
      onSave,
      onUpdate,
      onPreview
    },
    {},
    {}
  )}`;
});
function parseJSONString(str) {
  try {
    return parseJSONString(JSON.parse(str));
  } catch (e) {
    return str;
  }
}
function formatJSONString(str) {
  try {
    const parsed = parseJSONString(str);
    if (typeof parsed === "object") {
      return JSON.stringify(parsed, null, 2);
    } else {
      return `${JSON.stringify(String(parsed))}`;
    }
  } catch (e) {
    return str;
  }
}
const Collapsible = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  dayjs.extend(duration);
  dayjs.extend(relativeTime);
  async function loadLocale(locales) {
    if (!locales || !Array.isArray(locales)) {
      return;
    }
    for (const locale of locales) {
      try {
        dayjs.locale(locale);
        break;
      } catch (error) {
        console.error(`Could not load locale '${locale}':`, error);
      }
    }
  }
  let { open = false } = $$props;
  let { className = "" } = $$props;
  let { buttonClassName = "w-fit text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition" } = $$props;
  let { id = "" } = $$props;
  let { title = null } = $$props;
  let { attributes = null } = $$props;
  let { chevron = false } = $$props;
  let { grow = false } = $$props;
  let { disabled = false } = $$props;
  let { hide = false } = $$props;
  let { onChange = () => {
  } } = $$props;
  const collapsibleId = v4();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.buttonClassName === void 0 && $$bindings.buttonClassName && buttonClassName !== void 0) $$bindings.buttonClassName(buttonClassName);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.attributes === void 0 && $$bindings.attributes && attributes !== void 0) $$bindings.attributes(attributes);
  if ($$props.chevron === void 0 && $$bindings.chevron && chevron !== void 0) $$bindings.chevron(chevron);
  if ($$props.grow === void 0 && $$bindings.grow && grow !== void 0) $$bindings.grow(grow);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0) $$bindings.hide(hide);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0) $$bindings.onChange(onChange);
  {
    loadLocale($i18n.languages);
  }
  {
    onChange(open);
  }
  $$unsubscribe_i18n();
  return `<div${add_attribute("id", id, 0)}${add_attribute("class", className, 0)}>${title !== null ? `  <div class="${escape(buttonClassName, true) + " cursor-pointer"}"><div class="${"w-full font-medium flex items-center justify-between gap-2 " + escape(
    attributes?.done && attributes?.done !== "true" ? "shimmer" : "",
    true
  )}">${attributes?.done && attributes?.done !== "true" ? `<div>${validate_component(Spinner, "Spinner").$$render($$result, { className: "size-4" }, {}, {})}</div>` : ``} <div class="">${attributes?.type === "reasoning" ? `${attributes?.done === "true" && attributes?.duration ? `${attributes.duration < 60 ? `${escape($i18n.t("Thought for {{DURATION}} seconds", { DURATION: attributes.duration }))}` : `${escape($i18n.t("Thought for {{DURATION}}", {
    DURATION: dayjs.duration(attributes.duration, "seconds").humanize()
  }))}`}` : `${escape($i18n.t("Thinking..."))}`}` : `${attributes?.type === "code_interpreter" ? `${attributes?.done === "true" ? `${escape($i18n.t("Analyzed"))}` : `${escape($i18n.t("Analyzing..."))}`}` : `${attributes?.type === "tool_calls" ? `${attributes?.done === "true" ? `${validate_component(Markdown, "Markdown").$$render(
    $$result,
    {
      id: `${collapsibleId}-tool-calls-${attributes?.id}`,
      content: $i18n.t("View Result from **{{NAME}}**", { NAME: attributes.name })
    },
    {},
    {}
  )}` : `${validate_component(Markdown, "Markdown").$$render(
    $$result,
    {
      id: `${collapsibleId}-tool-calls-${attributes?.id}-executing`,
      content: $i18n.t("Executing **{{NAME}}**...", { NAME: attributes.name })
    },
    {},
    {}
  )}`}` : `${escape(title)}`}`}`}</div> <div class="flex self-center translate-y-[1px]">${open ? `${validate_component(ChevronUp, "ChevronUp").$$render(
    $$result,
    {
      strokeWidth: "3.5",
      className: "size-3.5"
    },
    {},
    {}
  )}` : `${validate_component(ChevronDown, "ChevronDown").$$render(
    $$result,
    {
      strokeWidth: "3.5",
      className: "size-3.5"
    },
    {},
    {}
  )}`}</div></div></div>` : `  <div class="${escape(buttonClassName, true) + " cursor-pointer"}"><div><div class="flex items-start justify-between">${slots.default ? slots.default({}) : ``} ${chevron ? `<div class="flex self-start translate-y-1">${open ? `${validate_component(ChevronUp, "ChevronUp").$$render(
    $$result,
    {
      strokeWidth: "3.5",
      className: "size-3.5"
    },
    {},
    {}
  )}` : `${validate_component(ChevronDown, "ChevronDown").$$render(
    $$result,
    {
      strokeWidth: "3.5",
      className: "size-3.5"
    },
    {},
    {}
  )}`}</div>` : ``}</div> ${grow ? `${open && !hide ? `<div>${slots.content ? slots.content({}) : ``}</div>` : ``}` : ``}</div></div>`} ${attributes?.type === "tool_calls" ? (() => {
    let args = decode(attributes?.arguments), result = decode(attributes?.result ?? ""), files = parseJSONString(decode(attributes?.files ?? ""));
    return `   ${!grow ? `${open && !hide ? `<div>${attributes?.type === "tool_calls" ? `${attributes?.done === "true" ? `${validate_component(Markdown, "Markdown").$$render(
      $$result,
      {
        id: `${collapsibleId}-tool-calls-${attributes?.id}-result`,
        content: `> \`\`\`json
> ${formatJSONString(args)}
> ${formatJSONString(result)}
> \`\`\``
      },
      {},
      {}
    )}` : `${validate_component(Markdown, "Markdown").$$render(
      $$result,
      {
        id: `${collapsibleId}-tool-calls-${attributes?.id}-result`,
        content: `> \`\`\`json
> ${formatJSONString(args)}
> \`\`\``
      },
      {},
      {}
    )}`}` : `${slots.content ? slots.content({}) : ``}`}</div>` : ``} ${attributes?.done === "true" ? `${typeof files === "object" ? `${each(files ?? [], (file, idx) => {
      return `${file.startsWith("data:image/") ? `${validate_component(Image, "Image").$$render(
        $$result,
        {
          id: `${collapsibleId}-tool-calls-${attributes?.id}-result-${idx}`,
          src: file,
          alt: "Image"
        },
        {},
        {}
      )}` : ``}`;
    })}` : ``}` : ``}` : ``}`;
  })() : `${!grow ? `${open && !hide ? `<div>${slots.content ? slots.content({}) : ``}</div>` : ``}` : ``}`}</div>`;
});
export {
  Bolt as B,
  Collapsible as C,
  LightBulb as L,
  Markdown as M,
  SVGPanZoom as S,
  Cube as a,
  Clipboard as b,
  CodeBlock as c
};
//# sourceMappingURL=Collapsible.js.map
