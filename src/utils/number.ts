export const formatNumber = (number, n = 0, x = 3, suffix = '') => {
  const re = `\\d(?=(\\d{${x}})+${n > 0 ? '\\.' : '$'})`;
  return number
    ? `${Number(number)
        .toFixed(Math.max(0, ~~n))
        .replace(new RegExp(re, 'g'), '$&,')}${suffix}`
    : `0${suffix}`;
};
