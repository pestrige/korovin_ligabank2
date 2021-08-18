import {
  ALLOWED_KEYS, INCOME_RATE,
  MAX_PRICE,
  MIN_PRICE,
  MOM_CAPITAL,
  MORTGAGE_CHANGING_RATE,
  MortgageRate,
  Postfix,
  PRICE_STEP
} from '../const';
const MONTHS = 12;
const MAX_PERCENTAGE = 100;
const STEP = 1;

export const isAllowedKeyPress = (key) => ALLOWED_KEYS.includes(key) || key === 'Backspace' || key === 'Delete';

export const addSpaces = (value) => {
  const chars = value.toString().split('').filter((char) => (/\d/).test(char));
  const stringWithSpaces = chars.reduce((acc, char, i, array) => (
    acc + char + ((array.length - i) % 3 === 1 ? ' ' : '') || acc
  ), '');

  return stringWithSpaces.trim();
};

export const toNumber = (string) => Math.round(string.replace(` ${Postfix.RUBLES}`, '').replace(/\s/g, ''));

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
  return withPostfix ? `${addSpaces(deposit)} ${Postfix.RUBLES}` : addSpaces(deposit);
};

export const calcDepositRate = (price, deposit) => {
  const adaptedPrice = toNumber(price);
  const adaptedDeposit = toNumber(deposit);
  return adaptedDeposit * 100 / adaptedPrice;
};

export const calcMortgageSum = (price, deposit, isMomCapital) => {
  const adaptedPrice = typeof price === 'string' ? toNumber(price) : price;
  const adaptedDeposit = typeof deposit === 'string' ? toNumber(deposit) : deposit;
  const momCapital = isMomCapital ? MOM_CAPITAL : 0;
  const sum = adaptedPrice - adaptedDeposit - momCapital;
  const sumAsString = `${addSpaces(sum)} ${Postfix.RUBLES}`;
  return {number: sum, string: sumAsString};
};

export const calcMortgageRate = (depositRate) => {
  const rateType = +depositRate > MORTGAGE_CHANGING_RATE ? 'MIN' : 'MAX';
  return MortgageRate[rateType];
};

export const calcPayment = (sum, rate, years) => {
  const periods = +years.replace(' лет', '') * MONTHS;
  const monthRate = rate / MAX_PERCENTAGE / MONTHS;
  const denominator = Math.pow((STEP + monthRate), periods) - STEP;
  const payment = Math.round(sum * (monthRate + monthRate / denominator));

  return {
    number: payment,
    string: `${addSpaces(payment)} рублей`,
  };
};

export const calcIncome = (payment) => {
  const income = Math.round(payment / INCOME_RATE);
  return {
    number: income,
    string: `${addSpaces(income)} рублей`,
  };
};
