import {
  ALLOWED_KEYS, CAR_CHANGING_PRICE, CarCreditRate, CreditType,
  INCOME_RATE,
  MaxPrice, MinDepositRatio,
  MinPrice,
  MOM_CAPITAL,
  MORTGAGE_CHANGING_RATE,
  MortgageRate,
  Postfix,
  PriceStep, YearsMinRange
} from '../const';
import {calcPostfix, clearPostfix} from './postfix';

const MONTHS = 12;
const MAX_PERCENTAGE = 100;
const STEP = 1;
const ORDER_DIGITS_COUNT = 4;
const MAX_ORDER_DIGITS_COUNT = 1000;

export const isAllowedKeyPress = (key) => ALLOWED_KEYS.includes(key) || key === 'Backspace' || key === 'Delete';

export const addSpaces = (value) => {
  const chars = value.toString().split('').filter((char) => (/\d/).test(char));
  const stringWithSpaces = chars.reduce((acc, char, i, array) => (
    acc + char + ((array.length - i) % 3 === 1 ? ' ' : '') || acc
  ), '');

  return stringWithSpaces.trim();
};

export const toNumber = (string) => Math.round(clearPostfix(string).replace(/\s/g, ''));

export const checkPriceRange = (price, type) => {
  const value = typeof price === 'string' ? toNumber(price) : price;
  return value >= toNumber(MinPrice[type]) && value <= toNumber(MaxPrice[type]);
};

export const changePrice = (price, type, isIncrement = true) => isIncrement
  ? toNumber(price) + PriceStep[type]
  : toNumber(price) - PriceStep[type];

export const calcMinDeposit = (price, rate = '10', withPostfix = true) => {
  // eslint-disable-next-line no-console
  console.log('price in calcMinDeposit', price);
  const adaptedPrice = typeof price === 'string' ? toNumber(price) : price;
  const adaptedRate = Number(rate) / 100;
  const deposit = Math.round(adaptedPrice * adaptedRate);
  return withPostfix ? `${addSpaces(deposit)} ${Postfix.RUBLES}` : addSpaces(deposit);
};

export const calcDepositRate = (price, deposit, type) => {
  if (deposit === '') {
    return type === CreditType.mortgage.value ? 10 : 20;
  }
  const adaptedPrice = toNumber(price);
  const adaptedDeposit = toNumber(deposit);
  return adaptedDeposit * 100 / adaptedPrice;
};

export const calcOptionsSum = (type, isMom) => {
  switch (type) {
    case CreditType.mortgage.value:
      return isMom ? MOM_CAPITAL : 0;
    case CreditType.car.value:
    default:
      return 0;
  }
};

export const calcCreditSum = (price, deposit, options) => {
  const adaptedPrice = typeof price === 'string' ? toNumber(price) : price;
  const adaptedDeposit = typeof deposit === 'string' ? toNumber(deposit) : deposit;
  const sum = adaptedPrice - adaptedDeposit - options;
  const sumAsString = `${addSpaces(sum)} ${calcPostfix(sum, 'RUBLES')}`;
  return {number: sum, string: sumAsString};
};

const calcCarCreditRate = (price, isCasco, isInsurance) => {
  let rateType = toNumber(price) < CAR_CHANGING_PRICE ? 'MAX' : 'MIN';
  if (isCasco || isInsurance) {
    rateType = 'ONE_OPTION';
  }
  if (isCasco && isInsurance) {
    rateType = 'TWO_OPTION';
  }
  return CarCreditRate[rateType];
};
export const calcCreditRate = (price, depositRate, type, isCasco, isInsurance) => {
  let rateType;
  switch (type) {
    case CreditType.mortgage.value:
    default:
      rateType = +depositRate > MORTGAGE_CHANGING_RATE ? 'MIN' : 'MAX';
      return MortgageRate[rateType];
    case CreditType.car.value:
      return calcCarCreditRate(price, isCasco, isInsurance);
  }
};

export const calcPayment = (sum, rate, years) => {
  const periods = +clearPostfix(years) * MONTHS;
  const monthRate = rate / MAX_PERCENTAGE / MONTHS;
  const denominator = Math.pow((STEP + monthRate), periods) - STEP;
  const payment = Math.round(sum * (monthRate + monthRate / denominator));

  return {
    number: payment,
    string: `${addSpaces(payment)} ${calcPostfix(payment, 'RUBLES')}`,
  };
};

export const calcIncome = (payment) => {
  const income = Math.round(payment / INCOME_RATE);
  return {
    number: income,
    string: `${addSpaces(income)} ${calcPostfix(income, 'RUBLES')}`,
  };
};

export const getDefaults = (type) => {
  const defaults = {
    mortgage: {
      price: '2 000 000 рублей',
      deposit: '200 000 рублей',
      depositRate: `${MinDepositRatio.mortgage}`,
      years: '5 лет',
      yearsRate: YearsMinRange.mortgage,
      isMomCapital: true,
    },
    car: {
      price: '1 000 000 рублей',
      deposit: '200 000 рублей',
      depositRate: `${MinDepositRatio.car}`,
      years: '1 год',
      yearsRate: YearsMinRange.car,
      isCASCO: true,
      isInsurance: true,
    },
  };

  return defaults[type];
};

export const formatOrderNumber = (id) => {
  const formattedID = id > MAX_ORDER_DIGITS_COUNT ? id : `000${id}`.slice(-ORDER_DIGITS_COUNT);
  return `№ ${formattedID}`;
};
