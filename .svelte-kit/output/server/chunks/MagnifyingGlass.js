import { j as WEBUI_API_BASE_URL } from "./index2.js";
import { j as getTimeRange } from "./index3.js";
import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
const createNewChat = async (token, chat) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/new`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      chat
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const importChat = async (token, chat, meta, pinned, folderId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/import`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      chat,
      meta: meta ?? {},
      pinned,
      folder_id: folderId
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChatList = async (token = "", page = null) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (page !== null) {
    searchParams.append("page", `${page}`);
  }
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res.map((chat) => ({
    ...chat,
    time_range: getTimeRange(chat.updated_at)
  }));
};
const getArchivedChatList = async (token = "", page = 1, filter) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("page", `${page}`);
  if (filter) {
    Object.entries(filter).forEach(([key, value]) => {
      if (value !== void 0 && value !== null) {
        searchParams.append(key, value.toString());
      }
    });
  }
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/archived?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res.map((chat) => ({
    ...chat,
    time_range: getTimeRange(chat.updated_at)
  }));
};
const getAllTags = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/all/tags`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getPinnedChatList = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/pinned`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res.map((chat) => ({
    ...chat,
    time_range: getTimeRange(chat.updated_at)
  }));
};
const getChatById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChatByShareId = async (token, share_id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/share/${share_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChatPinnedStatusById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/pinned`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const cloneChatById = async (token, id, title) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/clone`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      ...title && { title }
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const archiveChatById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/archive`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateChatById = async (token, id, chat) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      chat
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getTagsById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/tags`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const Sparkles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-4 h-4" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path></svg>`;
});
const MagnifyingGlass = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "size-4" } = $$props;
  let { strokeWidth = "2" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${add_attribute("stroke-width", strokeWidth, 0)} stroke="currentColor"${add_attribute("class", className, 0)}><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>`;
});
export {
  MagnifyingGlass as M,
  Sparkles as S,
  archiveChatById as a,
  getChatPinnedStatusById as b,
  cloneChatById as c,
  getChatList as d,
  getPinnedChatList as e,
  getAllTags as f,
  getArchivedChatList as g,
  getChatById as h,
  importChat as i,
  getTagsById as j,
  createNewChat as k,
  getChatByShareId as l,
  updateChatById as u
};
//# sourceMappingURL=MagnifyingGlass.js.map
