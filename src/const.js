export const MIN_PRICE = '1 200 000';
export const MAX_PRICE = '25 000 000';
export const PRICE_STEP = 100000;
export const MIN_CREDIT = 500000;
export const MIN_DEPOSIT_RATIO = 10;
export const MAX_DEPOSIT_RATIO = 100;
export const DEPOSIT_RANGE_STEP = '5';
export const YEARS_RANGE_STEP = '1';
export const YEARS_MIN_RANGE = '5';
export const YEARS_MAX_RANGE = '30';
export const ALLOWED_KEYS = '0123456789';

export const BreakPoint = {
  PHONE: 320,
  MAX_PHONE: 767,
  TABLET: 768,
  MAX_TABLET: 1023,
  DESKTOP: 1024,
};

export const Steps = {
  FIRST: {id: 1, title: 'Шаг 1. Цель кредита'},
  SECOND: {id: 2, title: 'Шаг 2. Введите параметры кредита'},
};

export const CreditType = {
  default: {value: 'default', label: 'Выберите цель кредита'},
  mortgage: {value: 'mortgage', label: 'Ипотечное кредитование'},
  car: {value: 'car', label: 'Автомобильное кредитование'},
};
