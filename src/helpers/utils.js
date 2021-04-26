import axios from "axios";

export const getCall = (url) =>
  axios
    .get(url)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const fmtMSS = (seconds) =>
  (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + seconds;
