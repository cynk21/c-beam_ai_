import { v4 } from "uuid";
import "js-sha256";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import isToday from "dayjs/plugin/isToday.js";
import isYesterday from "dayjs/plugin/isYesterday.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import { h as WEBUI_BASE_URL } from "./index2.js";
import { marked } from "marked";
import "katex";
import hljs from "highlight.js";
var TTS_RESPONSE_SPLIT = /* @__PURE__ */ ((TTS_RESPONSE_SPLIT2) => {
  TTS_RESPONSE_SPLIT2["PUNCTUATION"] = "punctuation";
  TTS_RESPONSE_SPLIT2["PARAGRAPHS"] = "paragraphs";
  TTS_RESPONSE_SPLIT2["NONE"] = "none";
  return TTS_RESPONSE_SPLIT2;
})(TTS_RESPONSE_SPLIT || {});
function findMatchingClosingTag(src, openTag, closeTag) {
  let depth = 1;
  let index = openTag.length;
  while (depth > 0 && index < src.length) {
    if (src.startsWith(openTag, index)) {
      depth++;
    } else if (src.startsWith(closeTag, index)) {
      depth--;
    }
    if (depth > 0) {
      index++;
    }
  }
  return depth === 0 ? index + closeTag.length : -1;
}
function parseAttributes(tag) {
  const attributes = {};
  const attrRegex = /(\w+)="(.*?)"/g;
  let match;
  while ((match = attrRegex.exec(tag)) !== null) {
    attributes[match[1]] = match[2];
  }
  return attributes;
}
function detailsTokenizer(src) {
  const detailsRegex = /^<details(\s+[^>]*)?>\n/;
  const summaryRegex = /^<summary>(.*?)<\/summary>\n/;
  const detailsMatch = detailsRegex.exec(src);
  if (detailsMatch) {
    const endIndex = findMatchingClosingTag(src, "<details", "</details>");
    if (endIndex === -1) return;
    const fullMatch = src.slice(0, endIndex);
    const detailsTag = detailsMatch[0];
    const attributes = parseAttributes(detailsTag);
    let content = fullMatch.slice(detailsTag.length, -10).trim();
    let summary = "";
    const summaryMatch = summaryRegex.exec(content);
    if (summaryMatch) {
      summary = summaryMatch[1].trim();
      content = content.slice(summaryMatch[0].length).trim();
    }
    return {
      type: "details",
      raw: fullMatch,
      summary,
      text: content,
      attributes
      // Include extracted attributes from <details>
    };
  }
}
function detailsStart(src) {
  return src.match(/^<details>/) ? 0 : -1;
}
function detailsRenderer(token) {
  const attributesString = token.attributes ? Object.entries(token.attributes).map(([key, value]) => `${key}="${value}"`).join(" ") : "";
  return `<details ${attributesString}>
  ${token.summary ? `<summary>${token.summary}</summary>` : ""}
  ${token.text}
  </details>`;
}
function detailsExtension() {
  return {
    name: "details",
    level: "block",
    start: detailsStart,
    tokenizer: detailsTokenizer,
    renderer: detailsRenderer
  };
}
function markedExtension(options = {}) {
  return {
    extensions: [detailsExtension()]
  };
}
const DELIMITER_LIST = [
  { left: "$$", right: "$$", display: true },
  { left: "$", right: "$", display: false },
  { left: "\\pu{", right: "}", display: false },
  { left: "\\ce{", right: "}", display: false },
  { left: "\\(", right: "\\)", display: false },
  { left: "\\[", right: "\\]", display: true },
  { left: "\\begin{equation}", right: "\\end{equation}", display: true }
];
const ALLOWED_SURROUNDING_CHARS = "\\s。，、､;；„“‘’“”（）「」『』［］《》【】‹›«»…⋯:：？！～⇒?!-\\/:-@\\[-`{-~\\p{Script=Han}\\p{Script=Hiragana}\\p{Script=Katakana}\\p{Script=Hangul}";
let inlinePatterns = [];
let blockPatterns = [];
function escapeRegex(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function generateRegexRules(delimiters) {
  delimiters.forEach((delimiter) => {
    const { left, right, display } = delimiter;
    const escapedLeft = escapeRegex(left);
    const escapedRight = escapeRegex(right);
    if (!display) {
      inlinePatterns.push(`${escapedLeft}((?:\\\\[^]|[^\\\\])+?)${escapedRight}`);
    } else {
      inlinePatterns.push(`${escapedLeft}(?!\\n)((?:\\\\[^]|[^\\\\])+?)(?!\\n)${escapedRight}`);
      blockPatterns.push(`${escapedLeft}\\n((?:\\\\[^]|[^\\\\])+?)\\n${escapedRight}`);
    }
  });
  const inlineRule2 = new RegExp(
    `^(${inlinePatterns.join("|")})(?=[${ALLOWED_SURROUNDING_CHARS}]|$)`,
    "u"
  );
  const blockRule2 = new RegExp(
    `^(${blockPatterns.join("|")})(?=[${ALLOWED_SURROUNDING_CHARS}]|$)`,
    "u"
  );
  return { inlineRule: inlineRule2, blockRule: blockRule2 };
}
const { inlineRule, blockRule } = generateRegexRules(DELIMITER_LIST);
function markedKatexExtension(options = {}) {
  return {
    extensions: [inlineKatex(), blockKatex()]
  };
}
function katexStart(src, displayMode) {
  let ruleReg = displayMode ? blockRule : inlineRule;
  let indexSrc = src;
  while (indexSrc) {
    let index = -1;
    let startIndex = -1;
    let startDelimiter = "";
    let endDelimiter = "";
    for (let delimiter of DELIMITER_LIST) {
      if (delimiter.display !== displayMode) {
        continue;
      }
      startIndex = indexSrc.indexOf(delimiter.left);
      if (startIndex === -1) {
        continue;
      }
      index = startIndex;
      startDelimiter = delimiter.left;
      endDelimiter = delimiter.right;
    }
    if (index === -1) {
      return;
    }
    const f = index === 0 || indexSrc.charAt(index - 1).match(new RegExp(`[${ALLOWED_SURROUNDING_CHARS}]`, "u"));
    if (f) {
      const possibleKatex = indexSrc.substring(index);
      if (possibleKatex.match(ruleReg)) {
        return index;
      }
    }
    indexSrc = indexSrc.substring(index + startDelimiter.length).replace(endDelimiter, "");
  }
}
function katexTokenizer(src, tokens, displayMode) {
  let ruleReg = displayMode ? blockRule : inlineRule;
  let type = displayMode ? "blockKatex" : "inlineKatex";
  const match = src.match(ruleReg);
  if (match) {
    const text = match.slice(2).filter((item) => item).find((item) => item.trim());
    return {
      type,
      raw: match[0],
      text,
      displayMode
    };
  }
}
function inlineKatex(options) {
  return {
    name: "inlineKatex",
    level: "inline",
    start(src) {
      return katexStart(src, false);
    },
    tokenizer(src, tokens) {
      return katexTokenizer(src, tokens, false);
    },
    renderer(token) {
      return `${token?.text ?? ""}`;
    }
  };
}
function blockKatex(options) {
  return {
    name: "blockKatex",
    level: "block",
    start(src) {
      return katexStart(src, true);
    },
    tokenizer(src, tokens) {
      return katexTokenizer(src, tokens, true);
    },
    renderer(token) {
      return `${token?.text ?? ""}`;
    }
  };
}
dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(localizedFormat);
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const replaceTokens = (content, sourceIds, char, user) => {
  const tokens = [
    { regex: /{{char}}/gi, replacement: char },
    { regex: /{{user}}/gi, replacement: user },
    {
      regex: /{{VIDEO_FILE_ID_([a-f0-9-]+)}}/gi,
      replacement: (_, fileId) => `<video src="${WEBUI_BASE_URL}/api/v1/files/${fileId}/content" controls></video>`
    },
    {
      regex: /{{HTML_FILE_ID_([a-f0-9-]+)}}/gi,
      replacement: (_, fileId) => `<file type="html" id="${fileId}" />`
    }
  ];
  const processOutsideCodeBlocks = (text, replacementFn) => {
    return text.split(/(```[\s\S]*?```|`[\s\S]*?`)/).map((segment) => {
      return segment.startsWith("```") || segment.startsWith("`") ? segment : replacementFn(segment);
    }).join("");
  };
  content = processOutsideCodeBlocks(content, (segment) => {
    tokens.forEach(({ regex, replacement }) => {
      if (replacement !== void 0 && replacement !== null) {
        segment = segment.replace(regex, replacement);
      }
    });
    if (Array.isArray(sourceIds)) {
      sourceIds.forEach((sourceId, idx) => {
        const regex = new RegExp(`\\[${idx + 1}\\]`, "g");
        segment = segment.replace(regex, `<source_id data="${idx + 1}" title="${sourceId}" />`);
      });
    }
    return segment;
  });
  return content;
};
const sanitizeResponseContent = (content) => {
  return content.replace(/<\|[a-z]*$/, "").replace(/<\|[a-z]+\|$/, "").replace(/<$/, "").replaceAll(/<\|[a-z]+\|>/g, " ").replaceAll("<", "&lt;").replaceAll(">", "&gt;").trim();
};
const processResponseContent = (content) => {
  content = processChineseContent(content);
  return content.trim();
};
function isChineseChar(char) {
  return new RegExp("\\p{Script=Han}", "u").test(char);
}
function processChineseContent(content) {
  const lines = content.split("\n");
  const processedLines = lines.map((line) => {
    if (/[\u4e00-\u9fa5]/.test(line)) {
      if (line.includes("*")) {
        if (/（|）/.test(line)) {
          line = processChineseDelimiters(line, "**", "（", "）");
          line = processChineseDelimiters(line, "*", "（", "）");
        }
        if (/“|”/.test(line)) {
          line = processChineseDelimiters(line, "**", "“", "”");
          line = processChineseDelimiters(line, "*", "“", "”");
        }
      }
    }
    return line;
  });
  content = processedLines.join("\n");
  return content;
}
function processChineseDelimiters(line, symbol, leftSymbol, rightSymbol) {
  const escapedSymbol = escapeRegExp(symbol);
  const regex = new RegExp(
    `(.?)(?<!${escapedSymbol})(${escapedSymbol})([^${escapedSymbol}]+)(${escapedSymbol})(?!${escapedSymbol})(.)`,
    "g"
  );
  return line.replace(regex, (match, l, left, content, right, r) => {
    const result = content.startsWith(leftSymbol) && l && l.length > 0 && isChineseChar(l[l.length - 1]) || content.endsWith(rightSymbol) && r && r.length > 0 && isChineseChar(r[0]);
    if (result) {
      return `${l} ${left}${content}${right} ${r}`;
    } else {
      return match;
    }
  });
}
function unescapeHtml(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.documentElement.textContent;
}
const convertMessagesToHistory = (messages) => {
  const history = {
    messages: {},
    currentId: null
  };
  let parentMessageId = null;
  let messageId = null;
  for (const message of messages) {
    messageId = v4();
    if (parentMessageId !== null) {
      history.messages[parentMessageId].childrenIds = [
        ...history.messages[parentMessageId].childrenIds,
        messageId
      ];
    }
    history.messages[messageId] = {
      ...message,
      id: messageId,
      parentId: parentMessageId,
      childrenIds: []
    };
    parentMessageId = messageId;
  }
  history.currentId = messageId;
  return history;
};
const compressImage = async (imageUrl, maxWidth, maxHeight) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;
      if (maxWidth && maxHeight) {
        if (width <= maxWidth && height <= maxHeight) {
          resolve(imageUrl);
          return;
        }
        if (width / height > maxWidth / maxHeight) {
          height = Math.round(maxWidth * height / width);
          width = maxWidth;
        } else {
          width = Math.round(maxHeight * width / height);
          height = maxHeight;
        }
      } else if (maxWidth) {
        if (width <= maxWidth) {
          resolve(imageUrl);
          return;
        }
        height = Math.round(maxWidth * height / width);
        width = maxWidth;
      } else if (maxHeight) {
        if (height <= maxHeight) {
          resolve(imageUrl);
          return;
        }
        width = Math.round(maxHeight * width / height);
        height = maxHeight;
      }
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0, width, height);
      const compressedUrl = canvas.toDataURL();
      resolve(compressedUrl);
    };
    img.onerror = (error) => reject(error);
    img.src = imageUrl;
  });
};
const formatDate = (inputDate) => {
  const date = dayjs(inputDate);
  dayjs();
  if (date.isToday()) {
    return `Today at ${date.format("LT")}`;
  } else if (date.isYesterday()) {
    return `Yesterday at ${date.format("LT")}`;
  } else {
    return `${date.format("L")} at ${date.format("LT")}`;
  }
};
const copyToClipboard = async (text, formatted = false) => {
  if (formatted) {
    const options = {
      throwOnError: false,
      highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      }
    };
    marked.use(markedKatexExtension(options));
    marked.use(markedExtension(options));
    const htmlContent = marked.parse(text);
    const styledHtml = `
			<div>
				<style>
					pre {
						background-color: #f6f8fa;
						border-radius: 6px;
						padding: 16px;
						overflow: auto;
					}
					code {
						font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
						font-size: 14px;
					}
					.hljs-keyword { color: #d73a49; }
					.hljs-string { color: #032f62; }
					.hljs-comment { color: #6a737d; }
					.hljs-function { color: #6f42c1; }
					.hljs-number { color: #005cc5; }
					.hljs-operator { color: #d73a49; }
					.hljs-class { color: #6f42c1; }
					.hljs-title { color: #6f42c1; }
					.hljs-params { color: #24292e; }
					.hljs-built_in { color: #005cc5; }
					blockquote {
						border-left: 4px solid #dfe2e5;
						padding-left: 16px;
						color: #6a737d;
						margin-left: 0;
						margin-right: 0;
					}
					table {
						border-collapse: collapse;
						width: 100%;
						margin-bottom: 16px;
					}
					table, th, td {
						border: 1px solid #dfe2e5;
					}
					th, td {
						padding: 8px 12px;
					}
					th {
						background-color: #f6f8fa;
					}
				</style>
				${htmlContent}
			</div>
		`;
    const blob = new Blob([styledHtml], { type: "text/html" });
    try {
      const data = new ClipboardItem({
        "text/html": blob,
        "text/plain": new Blob([text], { type: "text/plain" })
      });
      await navigator.clipboard.write([data]);
      return true;
    } catch (err) {
      console.error("Error copying formatted content:", err);
      return await copyToClipboard(text);
    }
  } else {
    let result = false;
    if (!navigator.clipboard) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand("copy");
        const msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
        result = true;
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      document.body.removeChild(textArea);
      return result;
    }
    result = await navigator.clipboard.writeText(text).then(() => {
      console.log("Async: Copying to clipboard was successful!");
      return true;
    }).catch((error) => {
      console.error("Async: Could not copy text: ", error);
      return false;
    });
    return result;
  }
};
const getUserPosition = async (raw = false) => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).catch((error) => {
    console.error("Error getting user location:", error);
    throw error;
  });
  if (!position) {
    return "Location not available";
  }
  const { latitude, longitude } = position.coords;
  if (raw) {
    return { latitude, longitude };
  } else {
    return `${latitude.toFixed(3)}, ${longitude.toFixed(3)} (lat, long)`;
  }
};
const removeEmojis = (str) => {
  const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
  return str.replace(emojiRegex, "");
};
const removeFormattings = (str) => {
  return str.replace(/(```[\s\S]*?```)/g, "").replace(/^\|.*\|$/gm, "").replace(/(?:\*\*|__)(.*?)(?:\*\*|__)/g, "$1").replace(/(?:[*_])(.*?)(?:[*_])/g, "$1").replace(/~~(.*?)~~/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/!?\[([^\]]*)\](?:\([^)]+\)|\[[^\]]*\])/g, "$1").replace(/^\[[^\]]+\]:\s*.*$/gm, "").replace(/^#{1,6}\s+/gm, "").replace(/^\s*[-*+]\s+/gm, "").replace(/^\s*(?:\d+\.)\s+/gm, "").replace(/^\s*>[> ]*/gm, "").replace(/^\s*:\s+/gm, "").replace(/\[\^[^\]]*\]/g, "").replace(/\n{2,}/g, "\n");
};
const cleanText = (content) => {
  return removeFormattings(removeEmojis(content.trim()));
};
const removeDetails = (content, types) => {
  for (const type of types) {
    content = content.replace(
      new RegExp(`<details\\s+type="${type}"[^>]*>.*?<\\/details>`, "gis"),
      ""
    );
  }
  return content;
};
const removeAllDetails = (content) => {
  content = content.replace(/<details[^>]*>.*?<\/details>/gis, "");
  return content;
};
const processDetails = (content) => {
  content = removeDetails(content, ["reasoning", "code_interpreter"]);
  const detailsRegex = /<details\s+type="tool_calls"([^>]*)>([\s\S]*?)<\/details>/gis;
  const matches = content.match(detailsRegex);
  if (matches) {
    for (const match of matches) {
      const attributesRegex = /(\w+)="([^"]*)"/g;
      const attributes = {};
      let attributeMatch;
      while ((attributeMatch = attributesRegex.exec(match)) !== null) {
        attributes[attributeMatch[1]] = attributeMatch[2];
      }
      content = content.replace(match, `"${attributes.result}"`);
    }
  }
  return content;
};
const codeBlockRegex = /```[\s\S]*?```/g;
const extractSentences = (text) => {
  const codeBlocks = [];
  let index = 0;
  text = text.replace(codeBlockRegex, (match) => {
    const placeholder = `\0${index}\0`;
    codeBlocks[index++] = match;
    return placeholder;
  });
  let sentences = text.split(/(?<=[.!?])\s+/);
  sentences = sentences.map((sentence) => {
    return sentence.replace(/\u0000(\d+)\u0000/g, (_, idx) => codeBlocks[idx]);
  });
  return sentences.map(cleanText).filter(Boolean);
};
const extractParagraphsForAudio = (text) => {
  const codeBlocks = [];
  let index = 0;
  text = text.replace(codeBlockRegex, (match) => {
    const placeholder = `\0${index}\0`;
    codeBlocks[index++] = match;
    return placeholder;
  });
  let paragraphs = text.split(/\n+/);
  paragraphs = paragraphs.map((paragraph) => {
    return paragraph.replace(/\u0000(\d+)\u0000/g, (_, idx) => codeBlocks[idx]);
  });
  return paragraphs.map(cleanText).filter(Boolean);
};
const extractSentencesForAudio = (text) => {
  return extractSentences(text).reduce((mergedTexts, currentText) => {
    const lastIndex = mergedTexts.length - 1;
    if (lastIndex >= 0) {
      const previousText = mergedTexts[lastIndex];
      const wordCount = previousText.split(/\s+/).length;
      const charCount = previousText.length;
      if (wordCount < 4 || charCount < 50) {
        mergedTexts[lastIndex] = previousText + " " + currentText;
      } else {
        mergedTexts.push(currentText);
      }
    } else {
      mergedTexts.push(currentText);
    }
    return mergedTexts;
  }, []);
};
const getMessageContentParts = (content, splitOn = "punctuation") => {
  const messageContentParts = [];
  switch (splitOn) {
    default:
    case TTS_RESPONSE_SPLIT.PUNCTUATION:
      messageContentParts.push(...extractSentencesForAudio(content));
      break;
    case TTS_RESPONSE_SPLIT.PARAGRAPHS:
      messageContentParts.push(...extractParagraphsForAudio(content));
      break;
    case TTS_RESPONSE_SPLIT.NONE:
      messageContentParts.push(cleanText(content));
      break;
  }
  return messageContentParts;
};
const blobToFile = (blob, fileName) => {
  const file = new File([blob], fileName, { type: blob.type });
  return file;
};
const getPromptVariables = (user_name, user_location) => {
  return {
    "{{USER_NAME}}": user_name,
    "{{USER_LOCATION}}": user_location || "Unknown",
    "{{CURRENT_DATETIME}}": getCurrentDateTime(),
    "{{CURRENT_DATE}}": getFormattedDate(),
    "{{CURRENT_TIME}}": getFormattedTime(),
    "{{CURRENT_WEEKDAY}}": getWeekday(),
    "{{CURRENT_TIMEZONE}}": getUserTimezone(),
    "{{USER_LANGUAGE}}": localStorage.getItem("locale") || "en-US"
  };
};
const promptTemplate = (template, user_name, user_location) => {
  const currentDate = /* @__PURE__ */ new Date();
  const formattedDate = currentDate.getFullYear() + "-" + String(currentDate.getMonth() + 1).padStart(2, "0") + "-" + String(currentDate.getDate()).padStart(2, "0");
  const currentTime = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true
  });
  const currentWeekday = getWeekday();
  const currentTimezone = getUserTimezone();
  const userLanguage = localStorage.getItem("locale") || "en-US";
  template = template.replace("{{CURRENT_DATETIME}}", `${formattedDate} ${currentTime}`);
  template = template.replace("{{CURRENT_DATE}}", formattedDate);
  template = template.replace("{{CURRENT_TIME}}", currentTime);
  template = template.replace("{{CURRENT_WEEKDAY}}", currentWeekday);
  template = template.replace("{{CURRENT_TIMEZONE}}", currentTimezone);
  template = template.replace("{{USER_LANGUAGE}}", userLanguage);
  if (user_name) {
    template = template.replace("{{USER_NAME}}", user_name);
  }
  if (user_location) {
    template = template.replace("{{USER_LOCATION}}", user_location);
  } else {
    template = template.replace("{{USER_LOCATION}}", "LOCATION_UNKNOWN");
  }
  return template;
};
const getTimeRange = (timestamp) => {
  const now = /* @__PURE__ */ new Date();
  const date = new Date(timestamp * 1e3);
  const diffTime = now.getTime() - date.getTime();
  const diffDays = diffTime / (1e3 * 3600 * 24);
  const nowDate = now.getDate();
  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();
  const dateDate = date.getDate();
  const dateMonth = date.getMonth();
  const dateYear = date.getFullYear();
  if (nowYear === dateYear && nowMonth === dateMonth && nowDate === dateDate) {
    return "Today";
  } else if (nowYear === dateYear && nowMonth === dateMonth && nowDate - dateDate === 1) {
    return "Yesterday";
  } else if (diffDays <= 7) {
    return "Previous 7 days";
  } else if (diffDays <= 30) {
    return "Previous 30 days";
  } else if (nowYear === dateYear) {
    return date.toLocaleString("default", { month: "long" });
  } else {
    return date.getFullYear().toString();
  }
};
const getFormattedDate = () => {
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const getFormattedTime = () => {
  const date = /* @__PURE__ */ new Date();
  return date.toTimeString().split(" ")[0];
};
const getCurrentDateTime = () => {
  return `${getFormattedDate()} ${getFormattedTime()}`;
};
const getUserTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
const getWeekday = () => {
  const date = /* @__PURE__ */ new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdays[date.getDay()];
};
const createMessagesList = (history, messageId) => {
  if (messageId === null) {
    return [];
  }
  const message = history.messages[messageId];
  if (message === void 0) {
    return [];
  }
  if (message?.parentId) {
    return [...createMessagesList(history, message.parentId), message];
  } else {
    return [message];
  }
};
const formatFileSize = (size) => {
  if (size == null) return "Unknown size";
  if (typeof size !== "number" || size < 0) return "Invalid size";
  if (size === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(1)} ${units[unitIndex]}`;
};
const getLineCount = (text) => {
  console.log(typeof text);
  return text ? text.split("\n").length : 0;
};
export {
  TTS_RESPONSE_SPLIT as T,
  compressImage as a,
  blobToFile as b,
  copyToClipboard as c,
  createMessagesList as d,
  convertMessagesToHistory as e,
  processDetails as f,
  getPromptVariables as g,
  getMessageContentParts as h,
  formatDate as i,
  getTimeRange as j,
  getUserPosition as k,
  markedExtension as l,
  markedKatexExtension as m,
  replaceTokens as n,
  processResponseContent as o,
  promptTemplate as p,
  formatFileSize as q,
  removeAllDetails as r,
  sanitizeResponseContent as s,
  getLineCount as t,
  unescapeHtml as u
};
//# sourceMappingURL=index3.js.map
