import { TIMEOUT_SEC } from './config.js';

const timeout = function (s:number) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s.toString()} second`));
    }, s * 1000);
  });
};

const resType  = PromiseFulfilledResult | PromiseRejectedResult

export const AJAX = async function (url:string, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res:  = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
};

// export const getJSON = async function (url) {
//   try {
//     const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     const data = await res.json();

//     return data;
//   } catch (err) {
//     throw err;
//   }
// };

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }