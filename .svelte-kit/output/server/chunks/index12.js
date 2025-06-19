import { j as WEBUI_API_BASE_URL } from "./index2.js";
import { j as getTimeRange } from "./index3.js";
const createNewNote = async (token, note) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...note
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
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
const getNotes = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
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
  if (!Array.isArray(res)) {
    return {};
  }
  const grouped = {};
  for (const note of res) {
    const timeRange = getTimeRange(note.updated_at / 1e9);
    if (!grouped[timeRange]) {
      grouped[timeRange] = [];
    }
    grouped[timeRange].push({
      ...note,
      timeRange
    });
  }
  return grouped;
};
const getNoteById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
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
const updateNoteById = async (token, id, note) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/${id}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...note
    })
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
export {
  getNoteById as a,
  createNewNote as c,
  getNotes as g,
  updateNoteById as u
};
//# sourceMappingURL=index12.js.map
