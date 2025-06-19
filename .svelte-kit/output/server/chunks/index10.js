import { L as AUDIO_API_BASE_URL } from "./index2.js";
const transcribeAudio = async (token, file, language) => {
  const data = new FormData();
  data.append("file", file);
  if (language) {
    data.append("language", language);
  }
  let error = null;
  const res = await fetch(`${AUDIO_API_BASE_URL}/transcriptions`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      authorization: `Bearer ${token}`
    },
    body: data
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
const synthesizeOpenAISpeech = async (token = "", speaker = "alloy", text = "", model) => {
  let error = null;
  const res = await fetch(`${AUDIO_API_BASE_URL}/speech`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input: text,
      voice: speaker,
      ...model
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2;
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
  synthesizeOpenAISpeech as s,
  transcribeAudio as t
};
//# sourceMappingURL=index10.js.map
