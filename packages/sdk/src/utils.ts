export const omit = <TR>(ks: string[], original: object) =>
  Object.keys(original)
    .filter((k) => !ks.includes(k))
    .reduce((filtered, k) => Object.assign(original, { [k]: original[k] }), {});

type RetryCallback = () => Promise<any>;

export const retryTimes = (n: number, fn: RetryCallback) =>
  new Promise((resolve, reject) =>
    retry(n, fn)
      .then((result) => resolve(result))
      .catch((err) => reject(err))
  );

const retry = (i: number, fn: RetryCallback) =>
  fn().catch((err) => {
    if (!err) throw err;
    if (i <= 0) throw err;
    return retry(i - 1, fn);
  });

export const generateRID = (() => {
  let rid = 1;
  return () => rid++ && String(rid);
})();
