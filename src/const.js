export const MinPrice = {
  mortgage: '1 200 000',
  car: '500 000',
};
export const MaxPrice = {
  mortgage: '25 000 000',
  car: '5 000 000',
};
export const PriceStep = {
  mortgage: 100000,
  car: 50000,
};
export const MinDepositRatio = {
  mortgage: 10,
  car: 20,
};
export const YearsMinRange = {
  mortgage: '5',
  car: '1',
};
export const YearsMaxRange = {
  mortgage: '30',
  car: '5',
};
export const DepositRangeStep = {
  mortgage: '5',
  car: '5',
};
export const MinCredit = {
  mortgage: {number: 500000, string: '500 000'},
  car: {number: 200000, string: '200 000'},
};

export const MAX_DEPOSIT_RATIO = 100;
export const MOM_CAPITAL = 470000;
export const YEARS_RANGE_STEP = '1';
export const ALLOWED_KEYS = '0123456789';
export const MORTGAGE_CHANGING_RATE = 15;
export const CAR_CHANGING_PRICE = 2000000;
export const INCOME_RATE = 0.45;
export const MortgageRate = {
  MIN: {string: '8,50%', number: 8.5},
  MAX: {string: '9,40%', number: 9.4},
};
export const CarCreditRate = {
  MAX: {string: '16%', number: 16},
  MIN: {string: '15%', number: 15},
  ONE_OPTION: {string: '8,50%', number: 8.5},
  TWO_OPTION: {string: '3,50%', number: 3.5},
};

export const InputName = {
  PRICE: 'price',
  DEPOSIT: 'deposit',
  YEARS: 'years',
  DEPOSIT_RANGE: 'deposit-range',
  YEARS_RANGE: 'years-range',
  MOM_CAPITAL: 'mom-capital',
  CASCO: 'casco-insurance',
  INSURANCE: 'life-insurance',
};

export const Postfix = {
  RUBLES: 'рублей',
  YEARS: 'лет',
};

export const Steps = {
  FIRST: {id: 1, title: 'Шаг 1. Цель кредита'},
  SECOND: {id: 2, title: 'Шаг 2. Введите параметры кредита'},
  THIRD: {id: 3, title: 'Шаг 3. Оформление заявки'},
  FOURTH: {id: 4, title: 'Спасибо за обращение в\u00A0наш банк.'},
};

export const CreditType = {
  default: {value: 'default', label: 'Выберите цель кредита'},
  mortgage: {value: 'mortgage', label: 'Ипотечное кредитование', name: 'ипотечные кредиты', sumName: 'ипотеки', formName: 'Ипотека'},
  car: {value: 'car', label: 'Автомобильное кредитование', name: 'автокредиты', sumName: 'автокредита', formName: 'Автокредит'},
};

export const PriceTitle = {
  mortgage: 'Стоимость недвижимости',
  car: 'Стоимость автомобиля',
};

export const BreakPoint = {
  PHONE: 320,
  MAX_PHONE: 767,
  TABLET: 768,
  MAX_TABLET: 1023,
  DESKTOP: 1024,
};

export const Anchor = {
  CALCULATOR: 'calculator',
  MAP: 'map',
};
