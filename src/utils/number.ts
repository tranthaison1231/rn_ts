/* eslint-disable no-bitwise */
export const formatNumber = (
  number: number,
  n = 0,
  x = 3,
  suffix = '',
): number | string => {
  const re = `\\d(?=(\\d{${x}})+${n > 0 ? '\\.' : '$'})`;
  return number
    ? `${Number(number)
        .toFixed(Math.max(0, ~~n))
        .replace(new RegExp(re, 'g'), '$&,')}${suffix}`
    : `0${suffix}`;
};
