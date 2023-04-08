export default function mzkAPIFetchService(
  bodyData: FormData,
  abortControl: AbortController
): Promise<string> {
  return fetch("https://mzk-cors-proxy.onrender.com/mzk", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      authorization: "no-scam",
      "Access-Control-Allow-Origin": "*",
    },
    body: bodyData,
    signal: abortControl.signal,
  }).then((res) => res.text());
}
