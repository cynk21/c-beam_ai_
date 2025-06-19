import { c as create_ssr_component, b as subscribe, l as getContext, o as onDestroy, g as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { a as toast } from "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "file-saver";
import "jspdf";
import "html2canvas-pro";
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
import "../../../../chunks/client.js";
import { W as WEBUI_NAME } from "../../../../chunks/index2.js";
import { c as createNewNote, g as getNotes } from "../../../../chunks/index12.js";
import "../../../../chunks/index3.js";
import "dompurify";
import { marked } from "marked";
/* empty css                                                             */
import { S as Spinner } from "../../../../chunks/Spinner.js";
import "dequal";
import "../../../../chunks/create.js";
import { F as FilesOverlay } from "../../../../chunks/FilesOverlay.js";
const Notes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $WEBUI_NAME, $$unsubscribe_WEBUI_NAME;
  $$unsubscribe_WEBUI_NAME = subscribe(WEBUI_NAME, (value) => $WEBUI_NAME = value);
  dayjs.extend(duration);
  dayjs.extend(relativeTime);
  async function loadLocale(locales) {
    for (const locale of locales) {
      try {
        dayjs.locale(locale);
        break;
      } catch (error) {
        console.error(`Could not load locale '${locale}':`, error);
      }
    }
  }
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  const init = async () => {
    await getNotes(localStorage.token);
  };
  const inputFilesHandler = async (inputFiles) => {
    for (const file of inputFiles) {
      if (file.type !== "text/markdown") {
        toast.error($i18n.t("Only markdown files are allowed"));
        return;
      }
      const reader = new FileReader();
      reader.onload = async (event) => {
        const content = event.target.result;
        let name = file.name.replace(/\.md$/, "");
        if (typeof content !== "string") {
          toast.error($i18n.t("Invalid file content"));
          return;
        }
        const res = await createNewNote(localStorage.token, {
          title: name,
          data: {
            content: {
              json: null,
              html: marked.parse(content ?? ""),
              md: content
            }
          },
          meta: null,
          access_control: null
        }).catch((error) => {
          toast.error(`${error}`);
          return null;
        });
        if (res) {
          init();
        }
      };
      reader.readAsText(file);
    }
  };
  let dragged = false;
  const onDragOver = (e) => {
    e.preventDefault();
    if (e.dataTransfer?.types?.includes("Files")) {
      dragged = true;
    } else {
      dragged = false;
    }
  };
  const onDragLeave = () => {
    dragged = false;
  };
  const onDrop = async (e) => {
    e.preventDefault();
    console.log(e);
    if (e.dataTransfer?.files) {
      const inputFiles = Array.from(e.dataTransfer?.files);
      if (inputFiles && inputFiles.length > 0) {
        console.log(inputFiles);
        inputFilesHandler(inputFiles);
      }
    }
    dragged = false;
  };
  onDestroy(() => {
    console.log("destroy");
    const dropzoneElement = document.getElementById("notes-container");
    if (dropzoneElement) {
      dropzoneElement?.removeEventListener("dragover", onDragOver);
      dropzoneElement?.removeEventListener("drop", onDrop);
      dropzoneElement?.removeEventListener("dragleave", onDragLeave);
    }
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      loadLocale($i18n.languages);
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-16ir3op_START -->${$$result.title = `<title> ${escape($i18n.t("Notes"))} • ${escape($WEBUI_NAME)} </title>`, ""}<!-- HEAD_svelte-16ir3op_END -->`, ""} ${validate_component(FilesOverlay, "FilesOverlay").$$render($$result, { show: dragged }, {}, {})} <div id="notes-container" class="w-full min-h-full h-full">${`<div class="w-full h-full flex justify-center items-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}</div>`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  $$unsubscribe_WEBUI_NAME();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Notes, "Notes").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
