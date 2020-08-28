/* eslint-disable no-bitwise */
export const formatNumber = (
  number: number,
  n: number = 0,
  x: number = 3,
  suffix: string = '',
) => {
  const re = `\\d(?=(\\d{${x}})+${n > 0 ? '\\.' : '$'})`;
  return number
    ? `${Number(number)
        .toFixed(Math.max(0, ~~n))
        .replace(new RegExp(re, 'g'), '$&,')}${suffix}`
    : `0${suffix}`;
};
