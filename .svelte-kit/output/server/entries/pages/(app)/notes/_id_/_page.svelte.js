import { c as create_ssr_component, b as subscribe, l as getContext, o as onDestroy, g as escape, e as each, a as add_attribute, v as validate_component, p as createEventDispatcher } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { v4 } from "uuid";
import fileSaver from "file-saver";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import "marked";
import { a as toast } from "../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { a as settings, c as config, r as models, n as showSidebar, j as WEBUI_API_BASE_URL } from "../../../../../chunks/index2.js";
import { g as goto } from "../../../../../chunks/client.js";
import { b as blobToFile, c as copyToClipboard, a as compressImage } from "../../../../../chunks/index3.js";
import { u as uploadFile } from "../../../../../chunks/AutoCompletion.js";
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
import calendar from "dayjs/plugin/calendar.js";
import duration from "dayjs/plugin/duration.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { a as getNoteById, u as updateNoteById } from "../../../../../chunks/index12.js";
import { R as RichTextInput } from "../../../../../chunks/RichTextInput.js";
import { S as Spinner } from "../../../../../chunks/Spinner.js";
import { M as MicSolid } from "../../../../../chunks/MicSolid.js";
import { t as tick } from "../../../../../chunks/scheduler.js";
import { t as transcribeAudio } from "../../../../../chunks/index10.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import { C as ConfirmDialog } from "../../../../../chunks/ConfirmDialog.js";
import { I as Image } from "../../../../../chunks/Info.js";
import { F as FileItem } from "../../../../../chunks/FileItem.js";
import { F as FilesOverlay } from "../../../../../chunks/FilesOverlay.js";
import "dequal";
import "../../../../../chunks/create.js";
import { a as Menu, b as Menu_trigger, M as Menu_content, f as flyAndScale } from "../../../../../chunks/menu-trigger.js";
import { f as fade } from "../../../../../chunks/index11.js";
import { M as Menu_sub, a as Menu_sub_trigger, b as Menu_sub_content } from "../../../../../chunks/menu-sub-trigger.js";
import { M as Menu_item } from "../../../../../chunks/menu-item.js";
import "dompurify";
import { D as Download } from "../../../../../chunks/Download.js";
import { G as GarbageBin } from "../../../../../chunks/GarbageBin.js";
import { S as Share, D as DocumentDuplicate } from "../../../../../chunks/DocumentDuplicate.js";
import { E as EllipsisHorizontal } from "../../../../../chunks/EllipsisHorizontal.js";
import { T as Tooltip } from "../../../../../chunks/Tooltip.js";
import { S as Sidebar, A as ArrowRight } from "../../../../../chunks/ArrowRight.js";
import { C as Cog6 } from "../../../../../chunks/Cog6.js";
const css = {
  code: ".visualizer.svelte-156uiqn{display:flex;height:100%}.visualizer-bar.svelte-156uiqn{width:2px;background-color:#4a5aba}",
  map: '{"version":3,"file":"VoiceRecording.svelte","sources":["VoiceRecording.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { toast } from \\"svelte-sonner\\";\\nimport { tick, getContext, onMount, onDestroy } from \\"svelte\\";\\nimport { config, settings } from \\"$lib/stores\\";\\nimport { blobToFile, calculateSHA256, extractCurlyBraceWords } from \\"$lib/utils\\";\\nimport { transcribeAudio } from \\"$lib/apis/audio\\";\\nimport dayjs from \\"dayjs\\";\\nimport LocalizedFormat from \\"dayjs/plugin/localizedFormat\\";\\ndayjs.extend(LocalizedFormat);\\nconst i18n = getContext(\\"i18n\\");\\nexport let recording = false;\\nexport let transcribe = true;\\nexport let displayMedia = false;\\nexport let className = \\" p-2.5 w-full max-w-full\\";\\nexport let onCancel = () => {\\n};\\nexport let onConfirm = (data) => {\\n};\\nlet loading = false;\\nlet confirmed = false;\\nlet durationSeconds = 0;\\nlet durationCounter = null;\\nlet transcription = \\"\\";\\nconst startDurationCounter = () => {\\n  durationCounter = setInterval(() => {\\n    durationSeconds++;\\n  }, 1e3);\\n};\\nconst stopDurationCounter = () => {\\n  clearInterval(durationCounter);\\n  durationSeconds = 0;\\n};\\n$: if (recording) {\\n  startRecording();\\n} else {\\n  stopRecording();\\n}\\nconst formatSeconds = (seconds) => {\\n  const minutes = Math.floor(seconds / 60);\\n  const remainingSeconds = seconds % 60;\\n  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;\\n  return `${minutes}:${formattedSeconds}`;\\n};\\nlet stream;\\nlet speechRecognition;\\nlet mediaRecorder;\\nlet audioChunks = [];\\nconst MIN_DECIBELS = -45;\\nlet VISUALIZER_BUFFER_LENGTH = 300;\\nlet visualizerData = Array(VISUALIZER_BUFFER_LENGTH).fill(0);\\nconst calculateRMS = (data) => {\\n  let sumSquares = 0;\\n  for (let i = 0; i < data.length; i++) {\\n    const normalizedValue = (data[i] - 128) / 128;\\n    sumSquares += normalizedValue * normalizedValue;\\n  }\\n  return Math.sqrt(sumSquares / data.length);\\n};\\nconst normalizeRMS = (rms) => {\\n  rms = rms * 10;\\n  const exp = 1.5;\\n  const scaledRMS = Math.pow(rms, exp);\\n  return Math.min(1, Math.max(0.01, scaledRMS));\\n};\\nconst analyseAudio = (stream2) => {\\n  const audioContext = new AudioContext();\\n  const audioStreamSource = audioContext.createMediaStreamSource(stream2);\\n  const analyser = audioContext.createAnalyser();\\n  analyser.minDecibels = MIN_DECIBELS;\\n  audioStreamSource.connect(analyser);\\n  const bufferLength = analyser.frequencyBinCount;\\n  const domainData = new Uint8Array(bufferLength);\\n  const timeDomainData = new Uint8Array(analyser.fftSize);\\n  let lastSoundTime = Date.now();\\n  const detectSound = () => {\\n    const processFrame = () => {\\n      if (!recording || loading) return;\\n      if (recording && !loading) {\\n        analyser.getByteTimeDomainData(timeDomainData);\\n        analyser.getByteFrequencyData(domainData);\\n        const rmsLevel = calculateRMS(timeDomainData);\\n        visualizerData.push(normalizeRMS(rmsLevel));\\n        if (visualizerData.length >= VISUALIZER_BUFFER_LENGTH) {\\n          visualizerData.shift();\\n        }\\n        visualizerData = visualizerData;\\n      }\\n      window.requestAnimationFrame(processFrame);\\n    };\\n    window.requestAnimationFrame(processFrame);\\n  };\\n  detectSound();\\n};\\nconst onStopHandler = async (audioBlob, ext = \\"wav\\") => {\\n  await tick();\\n  const file = blobToFile(audioBlob, `Recording-${dayjs().format(\\"L LT\\")}.${ext}`);\\n  if (transcribe) {\\n    if ($config.audio.stt.engine === \\"web\\" || ($settings?.audio?.stt?.engine ?? \\"\\") === \\"web\\") {\\n      return;\\n    }\\n    const res = await transcribeAudio(\\n      localStorage.token,\\n      file,\\n      $settings?.audio?.stt?.language\\n    ).catch((error) => {\\n      toast.error(`${error}`);\\n      return null;\\n    });\\n    if (res) {\\n      console.log(res);\\n      onConfirm(res);\\n    }\\n  } else {\\n    onConfirm({\\n      file,\\n      blob: audioBlob\\n    });\\n  }\\n};\\nconst startRecording = async () => {\\n  loading = true;\\n  try {\\n    if (displayMedia) {\\n      const mediaStream = await navigator.mediaDevices.getDisplayMedia({\\n        audio: true\\n      });\\n      stream = new MediaStream();\\n      for (const track of mediaStream.getAudioTracks()) {\\n        stream.addTrack(track);\\n      }\\n      for (const track of mediaStream.getVideoTracks()) {\\n        track.stop();\\n      }\\n    } else {\\n      stream = await navigator.mediaDevices.getUserMedia({\\n        audio: {\\n          echoCancellation: true,\\n          noiseSuppression: true,\\n          autoGainControl: true\\n        }\\n      });\\n    }\\n  } catch (err) {\\n    console.error(\\"Error accessing media devices.\\", err);\\n    toast.error($i18n.t(\\"Error accessing media devices.\\"));\\n    loading = false;\\n    recording = false;\\n    return;\\n  }\\n  const mineTypes = [\\"audio/webm; codecs=opus\\", \\"audio/mp4\\"];\\n  mediaRecorder = new MediaRecorder(stream, {\\n    mimeType: mineTypes.find((type) => MediaRecorder.isTypeSupported(type))\\n  });\\n  mediaRecorder.onstart = () => {\\n    console.log(\\"Recording started\\");\\n    loading = false;\\n    startDurationCounter();\\n    audioChunks = [];\\n    analyseAudio(stream);\\n  };\\n  mediaRecorder.ondataavailable = (event) => audioChunks.push(event.data);\\n  mediaRecorder.onstop = async () => {\\n    console.log(\\"Recording stopped\\");\\n    if (confirmed) {\\n      let type = audioChunks[0]?.type || mediaRecorder.mimeType || \\"audio/webm\\";\\n      let ext = type.split(\\"/\\")[1].split(\\";\\")[0] || \\"webm\\";\\n      if (!type.startsWith(\\"audio/\\")) {\\n        ext = \\"webm\\";\\n      }\\n      const audioBlob = new Blob(audioChunks, { type });\\n      await onStopHandler(audioBlob, ext);\\n      confirmed = false;\\n      loading = false;\\n    }\\n    audioChunks = [];\\n    recording = false;\\n  };\\n  try {\\n    mediaRecorder.start();\\n  } catch (error) {\\n    console.error(\\"Error starting recording:\\", error);\\n    toast.error($i18n.t(\\"Error starting recording.\\"));\\n    loading = false;\\n    recording = false;\\n    return;\\n  }\\n  if (transcribe) {\\n    if ($config.audio.stt.engine === \\"web\\" || ($settings?.audio?.stt?.engine ?? \\"\\") === \\"web\\") {\\n      if (\\"SpeechRecognition\\" in window || \\"webkitSpeechRecognition\\" in window) {\\n        speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();\\n        speechRecognition.continuous = true;\\n        const inactivityTimeout = 2e3;\\n        let timeoutId;\\n        speechRecognition.start();\\n        speechRecognition.onresult = async (event) => {\\n          clearTimeout(timeoutId);\\n          console.log(event);\\n          const transcript = event.results[Object.keys(event.results).length - 1][0].transcript;\\n          transcription = `${transcription}${transcript}`;\\n          await tick();\\n          document.getElementById(\\"chat-input\\")?.focus();\\n          timeoutId = setTimeout(() => {\\n            console.log(\\"Speech recognition turned off due to inactivity.\\");\\n            speechRecognition.stop();\\n          }, inactivityTimeout);\\n        };\\n        speechRecognition.onend = function() {\\n          console.log(\\"recognition ended\\");\\n          confirmRecording();\\n          onConfirm({\\n            text: transcription\\n          });\\n          confirmed = false;\\n          loading = false;\\n        };\\n        speechRecognition.onerror = function(event) {\\n          console.log(event);\\n          toast.error($i18n.t(`Speech recognition error: {{error}}`, { error: event.error }));\\n          onCancel();\\n          stopRecording();\\n        };\\n      }\\n    }\\n  }\\n};\\nconst stopRecording = async () => {\\n  if (recording && mediaRecorder) {\\n    await mediaRecorder.stop();\\n  }\\n  if (speechRecognition) {\\n    speechRecognition.stop();\\n  }\\n  stopDurationCounter();\\n  audioChunks = [];\\n  if (stream) {\\n    const tracks = stream.getTracks();\\n    tracks.forEach((track) => track.stop());\\n  }\\n  stream = null;\\n};\\nconst confirmRecording = async () => {\\n  loading = true;\\n  confirmed = true;\\n  if (recording && mediaRecorder) {\\n    await mediaRecorder.stop();\\n  }\\n  clearInterval(durationCounter);\\n  if (stream) {\\n    const tracks = stream.getTracks();\\n    tracks.forEach((track) => track.stop());\\n  }\\n  stream = null;\\n};\\nlet resizeObserver;\\nlet containerWidth;\\nlet maxVisibleItems = 300;\\n$: maxVisibleItems = Math.floor(containerWidth / 5);\\nonMount(() => {\\n  resizeObserver = new ResizeObserver(() => {\\n    VISUALIZER_BUFFER_LENGTH = Math.floor(window.innerWidth / 4);\\n    if (visualizerData.length > VISUALIZER_BUFFER_LENGTH) {\\n      visualizerData = visualizerData.slice(visualizerData.length - VISUALIZER_BUFFER_LENGTH);\\n    } else {\\n      visualizerData = Array(VISUALIZER_BUFFER_LENGTH - visualizerData.length).fill(0).concat(visualizerData);\\n    }\\n  });\\n  resizeObserver.observe(document.body);\\n});\\nonDestroy(() => {\\n  resizeObserver.disconnect();\\n});\\n<\/script>\\n\\n<div\\n\\tbind:clientWidth={containerWidth}\\n\\tclass=\\"{loading\\n\\t\\t? \' bg-gray-100/50 dark:bg-gray-850/50\'\\n\\t\\t: \'bg-indigo-300/10 dark:bg-indigo-500/10 \'} rounded-full flex justify-between {className}\\"\\n>\\n\\t<div class=\\"flex items-center mr-1\\">\\n\\t\\t<button\\n\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\tclass=\\"p-1.5\\n\\n            {loading\\n\\t\\t\\t\\t? \' bg-gray-200 dark:bg-gray-700/50\'\\n\\t\\t\\t\\t: \'bg-indigo-400/20 text-indigo-600 dark:text-indigo-300 \'} \\n\\n\\n             rounded-full\\"\\n\\t\\t\\ton:click={async () => {\\n\\t\\t\\t\\tstopRecording();\\n\\t\\t\\t\\tonCancel();\\n\\t\\t\\t}}\\n\\t\\t>\\n\\t\\t\\t<svg\\n\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\tstroke-width=\\"3\\"\\n\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\tclass=\\"size-4\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M6 18 18 6M6 6l12 12\\" />\\n\\t\\t\\t</svg>\\n\\t\\t</button>\\n\\t</div>\\n\\n\\t<div\\n\\t\\tclass=\\"flex flex-1 self-center items-center justify-between ml-2 mx-1 overflow-hidden h-6\\"\\n\\t\\tdir=\\"rtl\\"\\n\\t>\\n\\t\\t<div\\n\\t\\t\\tclass=\\"flex items-center gap-0.5 h-6 w-full max-w-full overflow-hidden overflow-x-hidden flex-wrap\\"\\n\\t\\t>\\n\\t\\t\\t{#each visualizerData.slice().reverse() as rms}\\n\\t\\t\\t\\t<div class=\\"flex items-center h-full\\">\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tclass=\\"w-[2px] shrink-0\\n                    \\n                    {loading\\n\\t\\t\\t\\t\\t\\t\\t? \' bg-gray-500 dark:bg-gray-400   \'\\n\\t\\t\\t\\t\\t\\t\\t: \'bg-indigo-500 dark:bg-indigo-400  \'} \\n                    \\n                    inline-block h-full\\"\\n\\t\\t\\t\\t\\t\\tstyle=\\"height: {Math.min(100, Math.max(14, rms * 100))}%;\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<div class=\\"flex\\">\\n\\t\\t<div class=\\"  mx-1.5 pr-1 flex justify-center items-center\\">\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"text-sm\\n        \\n        \\n        {loading ? \' text-gray-500  dark:text-gray-400  \' : \' text-indigo-400 \'} \\n       font-medium flex-1 mx-auto text-center\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t{formatSeconds(durationSeconds)}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"flex items-center\\">\\n\\t\\t\\t{#if loading}\\n\\t\\t\\t\\t<div class=\\" text-gray-500 rounded-full cursor-not-allowed\\">\\n\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\twidth=\\"24\\"\\n\\t\\t\\t\\t\\t\\theight=\\"24\\"\\n\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t><style>\\n\\t\\t\\t\\t\\t\\t\\t.spinner_OSmW {\\n\\t\\t\\t\\t\\t\\t\\t\\ttransform-origin: center;\\n\\t\\t\\t\\t\\t\\t\\t\\tanimation: spinner_T6mA 0.75s step-end infinite;\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t@keyframes spinner_T6mA {\\n\\t\\t\\t\\t\\t\\t\\t\\t8.3% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(30deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t16.6% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(60deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t25% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(90deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t33.3% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(120deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t41.6% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(150deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t50% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(180deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t58.3% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(210deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t66.6% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(240deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t75% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(270deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t83.3% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(300deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t91.6% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(330deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t100% {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttransform: rotate(360deg);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t</style><g class=\\"spinner_OSmW\\"\\n\\t\\t\\t\\t\\t\\t\\t><rect x=\\"11\\" y=\\"1\\" width=\\"2\\" height=\\"5\\" opacity=\\".14\\" /><rect\\n\\t\\t\\t\\t\\t\\t\\t\\tx=\\"11\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ty=\\"1\\"\\n\\t\\t\\t\\t\\t\\t\\t\\twidth=\\"2\\"\\n\\t\\t\\t\\t\\t\\t\\t\\theight=\\"5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ttransform=\\"rotate(30 12 12)\\"\\n\\t\\t\\t\\t\\t\\t\\t\\topacity=\\".29\\"\\n\\t\\t\\t\\t\\t\\t\\t/><rect\\n\\t\\t\\t\\t\\t\\t\\t\\tx=\\"11\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ty=\\"1\\"\\n\\t\\t\\t\\t\\t\\t\\t\\twidth=\\"2\\"\\n\\t\\t\\t\\t\\t\\t\\t\\theight=\\"5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ttransform=\\"rotate(60 12 12)\\"\\n\\t\\t\\t\\t\\t\\t\\t\\topacity=\\".43\\"\\n\\t\\t\\t\\t\\t\\t\\t/><rect\\n\\t\\t\\t\\t\\t\\t\\t\\tx=\\"11\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ty=\\"1\\"\\n\\t\\t\\t\\t\\t\\t\\t\\twidth=\\"2\\"\\n\\t\\t\\t\\t\\t\\t\\t\\theight=\\"5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ttransform=\\"rotate(90 12 12)\\"\\n\\t\\t\\t\\t\\t\\t\\t\\topacity=\\".57\\"\\n\\t\\t\\t\\t\\t\\t\\t/><rect\\n\\t\\t\\t\\t\\t\\t\\t\\tx=\\"11\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ty=\\"1\\"\\n\\t\\t\\t\\t\\t\\t\\t\\twidth=\\"2\\"\\n\\t\\t\\t\\t\\t\\t\\t\\theight=\\"5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ttransform=\\"rotate(120 12 12)\\"\\n\\t\\t\\t\\t\\t\\t\\t\\topacity=\\".71\\"\\n\\t\\t\\t\\t\\t\\t\\t/><rect\\n\\t\\t\\t\\t\\t\\t\\t\\tx=\\"11\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ty=\\"1\\"\\n\\t\\t\\t\\t\\t\\t\\t\\twidth=\\"2\\"\\n\\t\\t\\t\\t\\t\\t\\t\\theight=\\"5\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ttransform=\\"rotate(150 12 12)\\"\\n\\t\\t\\t\\t\\t\\t\\t\\topacity=\\".86\\"\\n\\t\\t\\t\\t\\t\\t\\t/><rect x=\\"11\\" y=\\"1\\" width=\\"2\\" height=\\"5\\" transform=\\"rotate(180 12 12)\\" /></g\\n\\t\\t\\t\\t\\t\\t></svg\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\t\\tclass=\\"p-1.5 bg-indigo-500 text-white dark:bg-indigo-500 dark:text-blue-950 rounded-full\\"\\n\\t\\t\\t\\t\\ton:click={async () => {\\n\\t\\t\\t\\t\\t\\tawait confirmRecording();\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\t\\tstroke-width=\\"2.5\\"\\n\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"size-4\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"m4.5 12.75 6 6 9-13.5\\" />\\n\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.visualizer {\\n\\t\\tdisplay: flex;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\t.visualizer-bar {\\n\\t\\twidth: 2px;\\n\\t\\tbackground-color: #4a5aba; /* or whatever color you need */\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA6cC,0BAAY,CACX,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IACT,CAEA,8BAAgB,CACf,KAAK,CAAE,GAAG,CACV,gBAAgB,CAAE,OACnB"}'
};
const VoiceRecording = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  let $settings, $$unsubscribe_settings;
  let $config, $$unsubscribe_config;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  dayjs.extend(localizedFormat);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { recording = false } = $$props;
  let { transcribe = true } = $$props;
  let { displayMedia = false } = $$props;
  let { className = " p-2.5 w-full max-w-full" } = $$props;
  let { onCancel = () => {
  } } = $$props;
  let { onConfirm = (data) => {
  } } = $$props;
  let loading = false;
  let confirmed = false;
  let durationSeconds = 0;
  let durationCounter = null;
  let transcription = "";
  const startDurationCounter = () => {
    durationCounter = setInterval(
      () => {
        durationSeconds++;
      },
      1e3
    );
  };
  const stopDurationCounter = () => {
    clearInterval(durationCounter);
    durationSeconds = 0;
  };
  const formatSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
  };
  let stream;
  let speechRecognition;
  let mediaRecorder;
  let audioChunks = [];
  const MIN_DECIBELS = -45;
  let VISUALIZER_BUFFER_LENGTH = 300;
  let visualizerData = Array(VISUALIZER_BUFFER_LENGTH).fill(0);
  const calculateRMS = (data) => {
    let sumSquares = 0;
    for (let i = 0; i < data.length; i++) {
      const normalizedValue = (data[i] - 128) / 128;
      sumSquares += normalizedValue * normalizedValue;
    }
    return Math.sqrt(sumSquares / data.length);
  };
  const normalizeRMS = (rms) => {
    rms = rms * 10;
    const exp = 1.5;
    const scaledRMS = Math.pow(rms, exp);
    return Math.min(1, Math.max(0.01, scaledRMS));
  };
  const analyseAudio = (stream2) => {
    const audioContext = new AudioContext();
    const audioStreamSource = audioContext.createMediaStreamSource(stream2);
    const analyser = audioContext.createAnalyser();
    analyser.minDecibels = MIN_DECIBELS;
    audioStreamSource.connect(analyser);
    const bufferLength = analyser.frequencyBinCount;
    const domainData = new Uint8Array(bufferLength);
    const timeDomainData = new Uint8Array(analyser.fftSize);
    const detectSound = () => {
      const processFrame = () => {
        if (!recording || loading) return;
        if (recording && !loading) {
          analyser.getByteTimeDomainData(timeDomainData);
          analyser.getByteFrequencyData(domainData);
          const rmsLevel = calculateRMS(timeDomainData);
          visualizerData.push(normalizeRMS(rmsLevel));
          if (visualizerData.length >= VISUALIZER_BUFFER_LENGTH) {
            visualizerData.shift();
          }
          visualizerData = visualizerData;
        }
        window.requestAnimationFrame(processFrame);
      };
      window.requestAnimationFrame(processFrame);
    };
    detectSound();
  };
  const onStopHandler = async (audioBlob, ext = "wav") => {
    await tick();
    const file = blobToFile(audioBlob, `Recording-${dayjs().format("L LT")}.${ext}`);
    if (transcribe) {
      if ($config.audio.stt.engine === "web" || ($settings?.audio?.stt?.engine ?? "") === "web") {
        return;
      }
      const res = await transcribeAudio(localStorage.token, file, $settings?.audio?.stt?.language).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        console.log(res);
        onConfirm(res);
      }
    } else {
      onConfirm({ file, blob: audioBlob });
    }
  };
  const startRecording = async () => {
    loading = true;
    try {
      if (displayMedia) {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia({ audio: true });
        stream = new MediaStream();
        for (const track of mediaStream.getAudioTracks()) {
          stream.addTrack(track);
        }
        for (const track of mediaStream.getVideoTracks()) {
          track.stop();
        }
      } else {
        stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          }
        });
      }
    } catch (err) {
      console.error("Error accessing media devices.", err);
      toast.error($i18n.t("Error accessing media devices."));
      loading = false;
      recording = false;
      return;
    }
    const mineTypes = ["audio/webm; codecs=opus", "audio/mp4"];
    mediaRecorder = new MediaRecorder(
      stream,
      {
        mimeType: mineTypes.find((type) => MediaRecorder.isTypeSupported(type))
      }
    );
    mediaRecorder.onstart = () => {
      console.log("Recording started");
      loading = false;
      startDurationCounter();
      audioChunks = [];
      analyseAudio(stream);
    };
    mediaRecorder.ondataavailable = (event) => audioChunks.push(event.data);
    mediaRecorder.onstop = async () => {
      console.log("Recording stopped");
      if (confirmed) {
        let type = audioChunks[0]?.type || mediaRecorder.mimeType || "audio/webm";
        let ext = type.split("/")[1].split(";")[0] || "webm";
        if (!type.startsWith("audio/")) {
          ext = "webm";
        }
        const audioBlob = new Blob(audioChunks, { type });
        await onStopHandler(audioBlob, ext);
        confirmed = false;
        loading = false;
      }
      audioChunks = [];
      recording = false;
    };
    try {
      mediaRecorder.start();
    } catch (error) {
      console.error("Error starting recording:", error);
      toast.error($i18n.t("Error starting recording."));
      loading = false;
      recording = false;
      return;
    }
    if (transcribe) {
      if ($config.audio.stt.engine === "web" || ($settings?.audio?.stt?.engine ?? "") === "web") {
        if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
          speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
          speechRecognition.continuous = true;
          const inactivityTimeout = 2e3;
          let timeoutId;
          speechRecognition.start();
          speechRecognition.onresult = async (event) => {
            clearTimeout(timeoutId);
            console.log(event);
            const transcript = event.results[Object.keys(event.results).length - 1][0].transcript;
            transcription = `${transcription}${transcript}`;
            await tick();
            document.getElementById("chat-input")?.focus();
            timeoutId = setTimeout(
              () => {
                console.log("Speech recognition turned off due to inactivity.");
                speechRecognition.stop();
              },
              inactivityTimeout
            );
          };
          speechRecognition.onend = function() {
            console.log("recognition ended");
            confirmRecording();
            onConfirm({ text: transcription });
            confirmed = false;
            loading = false;
          };
          speechRecognition.onerror = function(event) {
            console.log(event);
            toast.error($i18n.t(`Speech recognition error: {{error}}`, { error: event.error }));
            onCancel();
            stopRecording();
          };
        }
      }
    }
  };
  const stopRecording = async () => {
    if (recording && mediaRecorder) {
      await mediaRecorder.stop();
    }
    if (speechRecognition) {
      speechRecognition.stop();
    }
    stopDurationCounter();
    audioChunks = [];
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    stream = null;
  };
  const confirmRecording = async () => {
    loading = true;
    confirmed = true;
    if (recording && mediaRecorder) {
      await mediaRecorder.stop();
    }
    clearInterval(durationCounter);
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    stream = null;
  };
  let resizeObserver;
  onDestroy(() => {
    resizeObserver.disconnect();
  });
  if ($$props.recording === void 0 && $$bindings.recording && recording !== void 0) $$bindings.recording(recording);
  if ($$props.transcribe === void 0 && $$bindings.transcribe && transcribe !== void 0) $$bindings.transcribe(transcribe);
  if ($$props.displayMedia === void 0 && $$bindings.displayMedia && displayMedia !== void 0) $$bindings.displayMedia(displayMedia);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.onCancel === void 0 && $$bindings.onCancel && onCancel !== void 0) $$bindings.onCancel(onCancel);
  if ($$props.onConfirm === void 0 && $$bindings.onConfirm && onConfirm !== void 0) $$bindings.onConfirm(onConfirm);
  $$result.css.add(css);
  {
    if (recording) {
      startRecording();
    } else {
      stopRecording();
    }
  }
  $$unsubscribe_i18n();
  $$unsubscribe_settings();
  $$unsubscribe_config();
  return `<div class="${escape(
    loading ? " bg-gray-100/50 dark:bg-gray-850/50" : "bg-indigo-300/10 dark:bg-indigo-500/10 ",
    true
  ) + " rounded-full flex justify-between " + escape(className, true) + " svelte-156uiqn"}"><div class="flex items-center mr-1"><button type="button" class="${"p-1.5 " + escape(
    loading ? " bg-gray-200 dark:bg-gray-700/50" : "bg-indigo-400/20 text-indigo-600 dark:text-indigo-300 ",
    true
  ) + " rounded-full"}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></button></div> <div class="flex flex-1 self-center items-center justify-between ml-2 mx-1 overflow-hidden h-6" dir="rtl"><div class="flex items-center gap-0.5 h-6 w-full max-w-full overflow-hidden overflow-x-hidden flex-wrap">${each(visualizerData.slice().reverse(), (rms) => {
    return `<div class="flex items-center h-full"><div class="${"w-[2px] shrink-0 " + escape(
      loading ? " bg-gray-500 dark:bg-gray-400   " : "bg-indigo-500 dark:bg-indigo-400  ",
      true
    ) + " inline-block h-full"}" style="${"height: " + escape(Math.min(100, Math.max(14, rms * 100)), true) + "%;"}"></div> </div>`;
  })}</div></div> <div class="flex"><div class="mx-1.5 pr-1 flex justify-center items-center"><div class="${"text-sm " + escape(
    loading ? " text-gray-500  dark:text-gray-400  " : " text-indigo-400 ",
    true
  ) + " font-medium flex-1 mx-auto text-center"}">${escape(formatSeconds(durationSeconds))}</div></div> <div class="flex items-center">${loading ? `<div class="text-gray-500 rounded-full cursor-not-allowed" data-svelte-h="svelte-cqc0xj"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><style>.spinner_OSmW {
								transform-origin: center;
								animation: spinner_T6mA 0.75s step-end infinite;
							}
							@keyframes spinner_T6mA {
								8.3% {
									transform: rotate(30deg);
								}
								16.6% {
									transform: rotate(60deg);
								}
								25% {
									transform: rotate(90deg);
								}
								33.3% {
									transform: rotate(120deg);
								}
								41.6% {
									transform: rotate(150deg);
								}
								50% {
									transform: rotate(180deg);
								}
								58.3% {
									transform: rotate(210deg);
								}
								66.6% {
									transform: rotate(240deg);
								}
								75% {
									transform: rotate(270deg);
								}
								83.3% {
									transform: rotate(300deg);
								}
								91.6% {
									transform: rotate(330deg);
								}
								100% {
									transform: rotate(360deg);
								}
							}
						</style><g class="spinner_OSmW"><rect x="11" y="1" width="2" height="5" opacity=".14"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(30 12 12)" opacity=".29"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(60 12 12)" opacity=".43"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(90 12 12)" opacity=".57"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(120 12 12)" opacity=".71"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(150 12 12)" opacity=".86"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)"></rect></g></svg></div>` : `<button type="button" class="p-1.5 bg-indigo-500 text-white dark:bg-indigo-500 dark:text-blue-950 rounded-full" data-svelte-h="svelte-dblpqo"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path></svg></button>`}</div></div> </div>`;
});
const CloudArrowUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"></path></svg>`;
});
const NoteMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  let { className = "max-w-[180px]" } = $$props;
  let { onDownload = (type) => {
  } } = $$props;
  let { onDelete = () => {
  } } = $$props;
  let { onCopyToClipboard = () => {
  } } = $$props;
  let { onChange = () => {
  } } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.onDownload === void 0 && $$bindings.onDownload && onDownload !== void 0) $$bindings.onDownload(onDownload);
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0) $$bindings.onDelete(onDelete);
  if ($$props.onCopyToClipboard === void 0 && $$bindings.onCopyToClipboard && onCopyToClipboard !== void 0) $$bindings.onCopyToClipboard(onCopyToClipboard);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0) $$bindings.onChange(onChange);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Menu, "DropdownMenu.Root").$$render(
      $$result,
      {
        onOpenChange: (state) => {
          onChange(state);
        },
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
              class: "w-full " + className + " text-sm rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg font-primary",
              sideOffset: 6,
              side: "bottom",
              align: "start",
              transition: (e) => fade(e, { duration: 100 })
            },
            {},
            {
              default: () => {
                return `${validate_component(Menu_sub, "DropdownMenu.Sub").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Menu_sub_trigger, "DropdownMenu.SubTrigger").$$render(
                      $$result,
                      {
                        class: "flex gap-2 items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Download, "Download").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Download"))}</div>`;
                        }
                      }
                    )} ${validate_component(Menu_sub_content, "DropdownMenu.SubContent").$$render(
                      $$result,
                      {
                        class: "w-full rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
                        transition: flyAndScale,
                        sideOffset: 8
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                            $$result,
                            {
                              class: "flex gap-2 items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="flex items-center line-clamp-1">${escape($i18n.t("Plain text (.md)"))}</div>`;
                              }
                            }
                          )} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                            $$result,
                            {
                              class: "flex gap-2 items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="flex items-center line-clamp-1">${escape($i18n.t("PDF document (.pdf)"))}</div>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })} ${validate_component(Menu_sub, "DropdownMenu.Sub").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Menu_sub_trigger, "DropdownMenu.SubTrigger").$$render(
                      $$result,
                      {
                        class: "flex gap-2 items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Share, "Share").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Share"))}</div>`;
                        }
                      }
                    )} ${validate_component(Menu_sub_content, "DropdownMenu.SubContent").$$render(
                      $$result,
                      {
                        class: "w-full rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
                        transition: flyAndScale,
                        sideOffset: 8
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                            $$result,
                            {
                              class: "flex gap-2 items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                            },
                            {},
                            {
                              default: () => {
                                return `${validate_component(DocumentDuplicate, "DocumentDuplicate").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Copy to clipboard"))}</div>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })} ${validate_component(Menu_item, "DropdownMenu.Item").$$render(
                  $$result,
                  {
                    class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(GarbageBin, "GarbageBin").$$render($$result, { strokeWidth: "2" }, {}, {})} <div class="flex items-center">${escape($i18n.t("Delete"))}</div>`;
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
  $$unsubscribe_i18n();
  return $$rendered;
});
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-3" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"></path></svg>`;
});
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-3" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path></svg>`;
});
const Mic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"></path></svg>`;
});
const CursorArrowRays = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"></path></svg>`;
});
const RecordMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i18n, $$unsubscribe_i18n;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { show = false } = $$props;
  let { className = "max-w-[170px]" } = $$props;
  let { onRecord = () => {
  } } = $$props;
  let { onCaptureAudio = () => {
  } } = $$props;
  let { onUpload = () => {
  } } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.onRecord === void 0 && $$bindings.onRecord && onRecord !== void 0) $$bindings.onRecord(onRecord);
  if ($$props.onCaptureAudio === void 0 && $$bindings.onCaptureAudio && onCaptureAudio !== void 0) $$bindings.onCaptureAudio(onCaptureAudio);
  if ($$props.onUpload === void 0 && $$bindings.onUpload && onUpload !== void 0) $$bindings.onUpload(onUpload);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Menu, "DropdownMenu.Root").$$render(
      $$result,
      {
        onOpenChange: (state) => {
          dispatch("change", state);
        },
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
              class: "w-full " + className + " text-sm rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg font-primary",
              sideOffset: 8,
              side: "bottom",
              align: "start",
              transition: (e) => fade(e, { duration: 100 })
            },
            {},
            {
              default: () => {
                return `<button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"><div class="self-center mr-2">${validate_component(Mic, "Mic").$$render($$result, { className: "size-5", strokeWidth: "1.5" }, {}, {})}</div> <div class="self-center truncate">${escape($i18n.t("Record"))}</div></button> <button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"><div class="self-center mr-2">${validate_component(CursorArrowRays, "CursorArrowRays").$$render($$result, { className: "size-5", strokeWidth: "1.5" }, {}, {})}</div> <div class="self-center truncate">${escape($i18n.t("Capture Audio"))}</div></button> <button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"><div class="self-center mr-2">${validate_component(CloudArrowUp, "CloudArrowUp").$$render($$result, { className: "size-5", strokeWidth: "1.5" }, {}, {})}</div> <div class="self-center truncate">${escape($i18n.t("Upload Audio"))}</div></button>`;
              }
            }
          )} `}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_i18n();
  return $$rendered;
});
const SparklesSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${add_attribute("class", className, 0)}><path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd"></path></svg>`;
});
const ArrowUturnLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"></path></svg>`;
});
const ArrowUturnRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"></path></svg>`;
});
const NoteEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $models, $$unsubscribe_models;
  let $config, $$unsubscribe_config;
  let $settings, $$unsubscribe_settings;
  let $i18n, $$unsubscribe_i18n;
  let $showSidebar, $$unsubscribe_showSidebar;
  $$unsubscribe_models = subscribe(models, (value) => $models = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_showSidebar = subscribe(showSidebar, (value) => $showSidebar = value);
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  dayjs.extend(calendar);
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
  let { id = null } = $$props;
  let note = null;
  let files = [];
  let versionIdx = null;
  let recording = false;
  let displayMediaRecord = false;
  let showSettings = false;
  let showDeleteConfirm = false;
  let dragged = false;
  let loading = false;
  let enhancing = false;
  const init = async () => {
    loading = true;
    const res = await getNoteById(localStorage.token, id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      note = res;
      files = res.data.files || [];
    } else {
      goto();
      return;
    }
    loading = false;
  };
  let debounceTimeout = null;
  const changeDebounceHandler = () => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(
      async () => {
        if (!note || enhancing || versionIdx !== null) {
          return;
        }
        console.log("Saving note:", note);
        await updateNoteById(localStorage.token, id, {
          ...note,
          title: note.title === "" ? $i18n.t("Untitled") : note.title
        }).catch((e) => {
          toast.error(`${e}`);
        });
      },
      200
    );
  };
  const uploadFileHandler = async (file) => {
    const tempItemId = v4();
    const fileItem = {
      type: "file",
      file: "",
      id: null,
      url: "",
      name: file.name,
      collection_name: "",
      status: "uploading",
      size: file.size,
      error: "",
      itemId: tempItemId
    };
    if (fileItem.size == 0) {
      toast.error($i18n.t("You cannot upload an empty file."));
      return null;
    }
    files = [...files, fileItem];
    try {
      let metadata = null;
      if ((file.type.startsWith("audio/") || file.type.startsWith("video/")) && $settings?.audio?.stt?.language) {
        metadata = {
          language: $settings?.audio?.stt?.language
        };
      }
      const uploadedFile = await uploadFile(localStorage.token, file, metadata);
      if (uploadedFile) {
        console.log("File upload completed:", {
          id: uploadedFile.id,
          name: fileItem.name,
          collection: uploadedFile?.meta?.collection_name
        });
        if (uploadedFile.error) {
          console.warn("File upload warning:", uploadedFile.error);
          toast.warning(uploadedFile.error);
        }
        fileItem.status = "uploaded";
        fileItem.file = uploadedFile;
        fileItem.id = uploadedFile.id;
        fileItem.collection_name = uploadedFile?.meta?.collection_name || uploadedFile?.collection_name;
        fileItem.url = `${WEBUI_API_BASE_URL}/files/${uploadedFile.id}`;
        files = files;
      } else {
        files = files.filter((item) => item?.itemId !== tempItemId);
      }
    } catch (e) {
      toast.error(`${e}`);
      files = files.filter((item) => item?.itemId !== tempItemId);
    }
    if (files.length > 0) {
      note.data.files = files;
    } else {
      note.data.files = null;
    }
  };
  const inputFilesHandler = async (inputFiles) => {
    console.log("Input files handler called with:", inputFiles);
    inputFiles.forEach((file) => {
      console.log("Processing file:", {
        name: file.name,
        type: file.type,
        size: file.size,
        extension: file.name.split(".").at(-1)
      });
      if (($config?.file?.max_size ?? null) !== null && file.size > ($config?.file?.max_size ?? 0) * 1024 * 1024) {
        console.log("File exceeds max size limit:", {
          fileSize: file.size,
          maxSize: ($config?.file?.max_size ?? 0) * 1024 * 1024
        });
        toast.error($i18n.t(`File size should not exceed {{maxSize}} MB.`, { maxSize: $config?.file?.max_size }));
        return;
      }
      if (["image/gif", "image/webp", "image/jpeg", "image/png", "image/avif"].includes(file["type"])) {
        let reader = new FileReader();
        reader.onload = async (event) => {
          let imageUrl = event.target.result;
          if ($settings?.imageCompression ?? false) {
            const width = $settings?.imageCompressionSize?.width ?? null;
            const height = $settings?.imageCompressionSize?.height ?? null;
            if (width || height) {
              imageUrl = await compressImage(imageUrl, width, height);
            }
          }
          files = [...files, { type: "image", url: `${imageUrl}` }];
          note.data.files = files;
        };
        reader.readAsDataURL(file);
      } else {
        uploadFileHandler(file);
      }
    });
  };
  const downloadHandler = async (type) => {
    console.log("downloadHandler", type);
    if (type === "md") {
      const blob = new Blob([note.data.content.md], { type: "text/markdown" });
      saveAs(blob, `${note.title}.md`);
    } else if (type === "pdf") {
      await downloadPdf(note);
    }
  };
  const downloadPdf = async (note2) => {
    try {
      const virtualWidth = 1024;
      const virtualHeight = 1400;
      const html = note2.data?.content?.html ?? "";
      let node;
      if (html instanceof HTMLElement) {
        node = html;
      } else {
        node = document.createElement("div");
        node.innerHTML = html;
        document.body.appendChild(node);
      }
      const canvas = await html2canvas(node, {
        useCORS: true,
        scale: 2,
        // Keep at 1x to avoid unexpected enlargements
        width: virtualWidth,
        // Set fixed virtual screen width
        windowWidth: virtualWidth,
        // Ensure consistent rendering
        windowHeight: virtualHeight
      });
      if (!(html instanceof HTMLElement)) {
        document.body.removeChild(node);
      }
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`${note2.title}.pdf`);
    } catch (error) {
      console.error("Error generating PDF", error);
      toast.error(`${error}`);
    }
  };
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
    const dropzoneElement = document.getElementById("note-editor");
    if (dropzoneElement) {
      dropzoneElement?.removeEventListener("dragover", onDragOver);
      dropzoneElement?.removeEventListener("drop", onDrop);
      dropzoneElement?.removeEventListener("dragleave", onDragLeave);
    }
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      loadLocale($i18n.languages);
    }
    {
      if (note) {
        changeDebounceHandler();
      }
    }
    {
      if (id) {
        init();
      }
    }
    $$rendered = `${validate_component(FilesOverlay, "FilesOverlay").$$render($$result, { show: dragged }, {}, {})} ${validate_component(ConfirmDialog, "DeleteConfirmDialog").$$render(
      $$result,
      {
        title: $i18n.t("Delete note?"),
        show: showDeleteConfirm
      },
      {
        show: ($$value) => {
          showDeleteConfirm = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="text-sm text-gray-500">${escape($i18n.t("This will delete"))} <span class="font-semibold">${escape(note.title)}</span>.</div>`;
        }
      }
    )} <div class="relative flex-1 w-full h-full flex justify-center" id="note-editor">${validate_component(Sidebar, "Sidebar").$$render(
      $$result,
      {
        className: " bg-white dark:bg-gray-900",
        width: "300px",
        show: showSettings
      },
      {
        show: ($$value) => {
          showSettings = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-col px-5 py-3 text-sm"><div class="flex justify-between items-center mb-2"><div class="font-medium text-base" data-svelte-h="svelte-1dw76ku">Settings</div> <div class="translate-x-1.5"><button class="p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg">${validate_component(ArrowRight, "ArrowRight").$$render($$result, { className: "size-3", strokeWidth: "2.5" }, {}, {})}</button></div></div> <div class="mt-1"><div><div class="text-xs font-medium mb-1" data-svelte-h="svelte-vz1bvh">Model</div> <div class="w-full"><select class="w-full bg-transparent text-sm outline-hidden"><option value="" class="bg-gray-50 dark:bg-gray-700" disabled>${escape($i18n.t("Select a model"))} </option>${each($models.filter((model) => !(model?.info?.meta?.hidden ?? false)), (model) => {
            return `<option${add_attribute("value", model.id, 0)} class="bg-gray-50 dark:bg-gray-700">${escape(model.name)}</option>`;
          })}</select></div></div></div></div>`;
        }
      }
    )} ${loading ? `<div class="absolute top-0 bottom-0 left-0 right-0 flex"><div class="m-auto">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div></div>` : `<div class="${"w-full flex flex-col " + escape(loading ? "opacity-20" : "", true)}"><div class="shrink-0 w-full flex justify-between items-center px-4.5 mb-1.5"><div class="w-full flex items-center"><input class="w-full text-2xl font-medium bg-transparent outline-hidden" type="text"${add_attribute("placeholder", $i18n.t("Title"), 0)} required${add_attribute("value", note.title, 0)}> <div class="flex items-center gap-2 translate-x-1">${note.data?.versions?.length > 0 ? `<div><div class="flex items-center gap-0.5 self-center min-w-fit" dir="ltr"><button class="self-center p-1 hover:enabled:bg-black/5 dark:hover:enabled:bg-white/5 dark:hover:enabled:text-white hover:enabled:text-black rounded-md transition disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:text-gray-500" ${note.data.versions.length === 0 || versionIdx === 0 ? "disabled" : ""}>${validate_component(ArrowUturnLeft, "ArrowUturnLeft").$$render($$result, { className: "size-4" }, {}, {})}</button> <button class="self-center p-1 hover:enabled:bg-black/5 dark:hover:enabled:bg-white/5 dark:hover:enabled:text-white hover:enabled:text-black rounded-md transition disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:text-gray-500" ${versionIdx >= note.data.versions.length || versionIdx === null ? "disabled" : ""}>${validate_component(ArrowUturnRight, "ArrowUturnRight").$$render($$result, { className: "size-4" }, {}, {})}</button></div></div>` : ``} ${validate_component(NoteMenu, "NoteMenu").$$render(
      $$result,
      {
        onDownload: (type) => {
          downloadHandler(type);
        },
        onCopyToClipboard: async () => {
          const res = await copyToClipboard(note.data.content.md).catch((error) => {
            toast.error(`${error}`);
            return null;
          });
          if (res) {
            toast.success($i18n.t("Copied to clipboard"));
          }
        },
        onDelete: () => {
          showDeleteConfirm = true;
        }
      },
      {},
      {
        default: () => {
          return `${validate_component(EllipsisHorizontal, "EllipsisHorizontal").$$render($$result, { className: "size-5" }, {}, {})}`;
        }
      }
    )} <button class="p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg">${validate_component(Cog6, "Cog6").$$render($$result, {}, {}, {})}</button></div></div></div> <div class="mb-2.5 px-3.5"><div class="flex gap-1 items-center text-xs font-medium text-gray-500 dark:text-gray-500"><button class="flex items-center gap-1 w-fit py-1 px-1.5 rounded-lg">${validate_component(Calendar, "Calendar").$$render($$result, { className: "size-3.5", strokeWidth: "2" }, {}, {})} <span>${escape(dayjs(note.created_at / 1e6).calendar())}</span></button> <button class="flex items-center gap-1 w-fit py-1 px-1.5 rounded-lg">${validate_component(Users, "Users").$$render($$result, { className: "size-3.5", strokeWidth: "2" }, {}, {})} <span data-svelte-h="svelte-1lsvfg9">You</span></button></div></div> <div class="flex-1 w-full h-full overflow-auto px-4 pb-20 relative" id="note-content-container">${``} ${files && files.length > 0 ? `<div class="mb-3.5 mt-1.5 w-full flex gap-1 flex-wrap z-40">${each(files, (file, fileIdx) => {
      return `<div class="w-fit">${file.type === "image" ? `${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: file.url,
          imageClassName: " max-h-96 rounded-lg",
          dismissible: true,
          onDismiss: () => {
            files = files.filter((item, idx) => idx !== fileIdx);
            note.data.files = files.length > 0 ? files : null;
          }
        },
        {},
        {}
      )}` : `${validate_component(FileItem, "FileItem").$$render(
        $$result,
        {
          item: file,
          dismissible: true,
          url: file.url,
          name: file.name,
          type: file.type,
          size: file?.size,
          loading: file.status === "uploading"
        },
        {},
        {}
      )}`} </div>`;
    })}</div>` : ``} ${validate_component(RichTextInput, "RichTextInput").$$render(
      $$result,
      {
        className: "input-prose-sm px-0.5",
        placeholder: $i18n.t("Write something..."),
        html: note.data?.content?.html,
        json: true,
        editable: !enhancing,
        onChange: (content) => {
          note.data.content.html = content.html;
          note.data.content.md = content.md;
        },
        value: note.data.content.json
      },
      {
        value: ($$value) => {
          note.data.content.json = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>`}</div> <div class="${"absolute z-20 bottom-0 right-0 p-5 max-w-full " + escape($showSidebar ? "md:max-w-[calc(100%-260px)]" : "", true) + " w-full flex justify-end"}"><div class="flex gap-1 justify-between w-full max-w-full">${recording ? `<div class="flex-1 w-full">${validate_component(VoiceRecording, "VoiceRecording").$$render(
      $$result,
      {
        className: "p-1 w-full max-w-full",
        transcribe: false,
        displayMedia: displayMediaRecord,
        onCancel: () => {
          recording = false;
          displayMediaRecord = false;
        },
        onConfirm: (data) => {
          if (data?.file) {
            uploadFileHandler(data?.file);
          }
          recording = false;
          displayMediaRecord = false;
        },
        recording
      },
      {
        recording: ($$value) => {
          recording = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${validate_component(RecordMenu, "RecordMenu").$$render(
      $$result,
      {
        onRecord: async () => {
          displayMediaRecord = false;
          try {
            let stream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(function(err) {
              toast.error($i18n.t(`Permission denied when accessing microphone: {{error}}`, { error: err }));
              return null;
            });
            if (stream) {
              recording = true;
              const tracks = stream.getTracks();
              tracks.forEach((track) => track.stop());
            }
            stream = null;
          } catch {
            toast.error($i18n.t("Permission denied when accessing microphone"));
          }
        },
        onCaptureAudio: async () => {
          displayMediaRecord = true;
          recording = true;
        },
        onUpload: async () => {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = "audio/*";
          input.multiple = false;
          input.click();
          input.onchange = async (e) => {
            const files2 = e.target.files;
            if (files2 && files2.length > 0) {
              await uploadFileHandler(files2[0]);
            }
          };
        }
      },
      {},
      {
        default: () => {
          return `${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              content: $i18n.t("Record"),
              placement: "top"
            },
            {},
            {
              default: () => {
                return `<button class="cursor-pointer p-2.5 flex rounded-full border border-gray-50 bg-white dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-xl" type="button">${validate_component(MicSolid, "MicSolid").$$render($$result, { className: "size-4.5" }, {}, {})}</button>`;
              }
            }
          )}`;
        }
      }
    )} <div class="cursor-pointer flex gap-0.5 rounded-full border border-gray-50 dark:border-gray-850 dark:bg-gray-850 transition shadow-xl"> ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: $i18n.t("Enhance"),
        placement: "top"
      },
      {},
      {
        default: () => {
          return `<button class="${escape("p-2.5", true) + " flex justify-center items-center hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition shrink-0"}" ${""} type="button">${`${validate_component(SparklesSolid, "SparklesSolid").$$render($$result, {}, {}, {})}`}</button>`;
        }
      }
    )}</div>`}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_models();
  $$unsubscribe_config();
  $$unsubscribe_settings();
  $$unsubscribe_i18n();
  $$unsubscribe_showSidebar();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${validate_component(NoteEditor, "NoteEditor").$$render($$result, { id: $page.params.id }, {}, {})}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
