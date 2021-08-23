import {Postfixs} from '../const';
import {toNumber} from './utils';

export const calcPostfix = (value, type = 'YEARS') => {
  const numbers = toNumber(value.toString().slice(-2));
  const lastChar = numbers % 10;
  if (numbers > 10 && numbers < 20) {
    return Postfixs[type][2];
  }
  if (lastChar > 1 && lastChar < 5) {
    return Postfixs[type][1];
  }
  if (lastChar === 1) {
    return Postfixs[type][0];
  }
  return Postfixs[type][2];
};

export const clearPostfix = (value) => value.replace(/\s[а-яё]+$/i, '');

export const setPostfix = (value, type = 'YEARS') => {
  if ((/\s[а-яё]+$/i).test(value)) {
    return value;
  }
  const normalizedValue = value === '' ? '0' : value;
  return `${normalizedValue} ${calcPostfix(normalizedValue, type)}`;
};
