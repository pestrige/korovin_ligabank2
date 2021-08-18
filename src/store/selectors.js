import { createSelector } from 'reselect';
import {calcIncome, calcMortgageRate, calcMortgageSum, calcPayment} from '../utils/utils';
import {MIN_MORTGAGE} from '../const';

export const getLoginPopupData = (store) => store.isLoginOpen;
export const getMenuFlag = (store) => store.isMenuOpen;
export const getCreditType = (store) => store.creditType;
export const getStep = (store) => store.step;
export const getPrice = (store) => store.price;
export const getDeposit = (store) => store.deposit;
export const getDepositRate = (store) => store.depositRate;
export const getYears = (store) => store.years;
export const getYearsRate = (store) => store.yearsRate;
export const getMomCapitalFlag = (store) => store.isMomCapital;

export const getFinalSum = createSelector(
  [getPrice, getDeposit, getMomCapitalFlag],
  (price, deposit, isMomCapital) => calcMortgageSum(price, deposit, isMomCapital),
);
export const getMortgageRate = createSelector(
  getDepositRate,
  (depositRate) => calcMortgageRate(depositRate),
);
export const getPayment = createSelector(
  [getFinalSum, getMortgageRate, getYears],
  (sum, rate, years) => calcPayment(sum.number, rate.number, years),
);
export const getIncome = createSelector(
  getPayment,
  (payment) => calcIncome(payment.number),
);
export const getSuccessCreditFlag = createSelector(
  getFinalSum,
  (sum) => sum.number > MIN_MORTGAGE,
);
