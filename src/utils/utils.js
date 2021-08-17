import {ALLOWED_KEYS, MAX_PRICE, MIN_PRICE, PRICE_STEP} from '../const';

export const isAllowedKeyPress = (key) => ALLOWED_KEYS.includes(key) || key === 'Backspace' || key === 'Delete';

export const addSpaces = (value) => {
  const chars = value.toString().split('').filter((char) => (/\d/).test(char));
  const stringWithSpaces = chars.reduce((acc, char, i, array) => (
    acc + char + ((array.length - i) % 3 === 1 ? ' ' : '') || acc
  ), '');

  return stringWithSpaces.trim();
};

export const toNumber = (string) => Math.round(string.replace(' рублей', '').replace(/\s/g, ''));

export const checkPriceRange = (price) => {
  const value = typeof price === 'string' ? toNumber(price) : price;
  return value >= toNumber(MIN_PRICE) && value <= toNumber(MAX_PRICE);
};

export const changePrice = (price, isIncrement = true) => isIncrement
  ? toNumber(price) + PRICE_STEP
  : toNumber(price) - PRICE_STEP;

export const calcMinDeposit = (price, rate = '10', withPostfix = true) => {
  const adaptedPrice = typeof price === 'string' ? toNumber(price) : price;
  const adaptedRate = Number(rate) / 100;
  const deposit = Math.round(adaptedPrice * adaptedRate);
  // eslint-disable-next-line no-console
  console.log('deposit', deposit);
  return withPostfix ? `${addSpaces(deposit)} рублей` : addSpaces(deposit);
};

export const calcDepositRate = (price, deposit) => {
  const adaptedPrice = toNumber(price);
  const adaptedDeposit = toNumber(deposit);
  // eslint-disable-next-line no-console
  console.log('price', adaptedPrice, 'deposit', adaptedDeposit);
  const rate = adaptedDeposit * 100 / adaptedPrice;
  // eslint-disable-next-line no-console
  console.log('rate', rate);
  return rate;
};

