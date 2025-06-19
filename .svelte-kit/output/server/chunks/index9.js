import { j as WEBUI_API_BASE_URL } from "./index2.js";
const getBaseModels = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/base`, {
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
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const createNewModel = async (token, model) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(model)
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
const updateModelById = async (token, id, model) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("id", id);
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/model/update?${searchParams.toString()}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(model)
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
const deleteAllModels = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/delete/all`, {
    method: "DELETE",
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
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
export {
  createNewModel as c,
  deleteAllModels as d,
  getBaseModels as g,
  updateModelById as u
};
//# sourceMappingURL=index9.js.map
