import { createSelector } from 'reselect';
import {
  calcIncome,
  calcCreditRate,
  calcCreditSum,
  calcOptionsSum,
  calcPayment,
  formatOrderNumber
} from '../utils/utils';
import {MinCredit} from '../const';

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
export const getCASCOFlag = (store) => store.isCASCO;
export const getInsuranceFlag = (store) => store.isInsurance;
export const getOrderId = (store) => store.orderId;
export const getPriceError = (store) => store.priceError;

const getOptionsSum = createSelector(
  [getCreditType, getMomCapitalFlag],
  (type, isMom) => calcOptionsSum(type, isMom),
);
export const getFinalSum = createSelector(
  [getPrice, getDeposit, getOptionsSum],
  (price, deposit, options) => calcCreditSum(price, deposit, options),
);
export const getCreditRate = createSelector(
  [getPrice, getDepositRate, getCreditType, getCASCOFlag, getInsuranceFlag],
  (price, depositRate, type, isCasco, isInsurance) => calcCreditRate(price, depositRate, type, isCasco, isInsurance),
);
export const getPayment = createSelector(
  [getFinalSum, getCreditRate, getYears],
  (sum, rate, years) => calcPayment(sum.number, rate.number, years),
);
export const getIncome = createSelector(
  getPayment,
  (payment) => calcIncome(payment.number),
);
export const getSuccessCreditFlag = createSelector(
  [getFinalSum, getCreditType],
  (sum, type) => sum.number > MinCredit[type].number,
);

export const getOrderNumber = createSelector(
  getOrderId,
  (id) => formatOrderNumber(id),
);
