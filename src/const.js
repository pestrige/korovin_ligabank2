export const MIN_PRICE = '1 200 000';
export const MAX_PRICE = '25 000 000';
export const PRICE_STEP = 100000;
export const MOM_CAPITAL = 470000;
export const MIN_MORTGAGE = 500000;
export const MIN_AUTO_CREDIT = 200000;
export const MIN_DEPOSIT_RATIO = 10;
export const MAX_DEPOSIT_RATIO = 100;
export const DEPOSIT_RANGE_STEP = '5';
export const YEARS_RANGE_STEP = '1';
export const YEARS_MIN_RANGE = '5';
export const YEARS_MAX_RANGE = '30';
export const ALLOWED_KEYS = '0123456789';
export const MORTGAGE_CHANGING_RATE = 15;
export const INCOME_RATE = 0.45;
export const MortgageRate = {
  MIN: {string: '8,50%', number: 8.5},
  MAX: {string: '9,40%', number: 9.4},
};

export const BreakPoint = {
  PHONE: 320,
  MAX_PHONE: 767,
  TABLET: 768,
  MAX_TABLET: 1023,
  DESKTOP: 1024,
};

export const InputName = {
  PRICE: 'price',
  DEPOSIT: 'deposit',
  YEARS: 'years',
  DEPOSIT_RANGE: 'deposit-range',
  YEARS_RANGE: 'years-range',
  CHECKBOX: 'mom-capital',
};

export const Postfix = {
  RUBLES: 'рублей',
  YEARS: 'лет',
};

export const Steps = {
  FIRST: {id: 1, title: 'Шаг 1. Цель кредита'},
  SECOND: {id: 2, title: 'Шаг 2. Введите параметры кредита'},
};

export const CreditType = {
  default: {value: 'default', label: 'Выберите цель кредита'},
  mortgage: {value: 'mortgage', label: 'Ипотечное кредитование', name: 'ипотечные кредиты'},
  car: {value: 'car', label: 'Автомобильное кредитование', name: 'автокредиты'},
};

export const MinCredit = {
  mortgage: '500 000',
  car: '200 000',
};
