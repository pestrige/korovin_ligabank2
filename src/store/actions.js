import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  SET_LOGIN_OPEN: 'setLoginOpen',
  SET_TOGGLE_MENU: 'setToggleMenu',
  SET_CREDIT_TYPE: 'setCreditType',
  SET_STEP: 'setStep',
  SET_PRICE: 'setPrice',
  SET_DEPOSIT: 'setDeposit',
  SET_DEPOSIT_RATE: 'setDepositRate',
  SET_YEARS: 'setYears',
  SET_YEARS_RATE: 'setYearsRate',
  SET_MOM_CAPITAL: 'setMomCapital',
  SET_CASCO: 'setCASCO',
  SET_INSURANCE: 'setInsurance',
  SET_DEFAULTS: 'setDefaults',
  SET_ORDER_NUMBER: 'setOrderNumber',
  SET_PRICE_ERROR: 'setPriceError',
};

export const setLoginPopup = createAction(ActionType.SET_LOGIN_OPEN, (flag) => ({payload: flag}));
export const setToggleMenu = createAction(ActionType.SET_TOGGLE_MENU, (flag) => ({payload: flag}));
export const setCreditType = createAction(ActionType.SET_CREDIT_TYPE, (type) => ({payload: type}));
export const setStep = createAction(ActionType.SET_STEP, (step) => ({payload: step}));
export const setPrice = createAction(ActionType.SET_PRICE, (price) => ({payload: price}));
export const setDeposit = createAction(ActionType.SET_DEPOSIT, (deposit) => ({payload: deposit}));
export const setDepositRate = createAction(ActionType.SET_DEPOSIT_RATE, (rate) => ({payload: rate}));
export const setYears = createAction(ActionType.SET_YEARS, (years) => ({payload: years}));
export const setYearsRate = createAction(ActionType.SET_YEARS_RATE, (rate) => ({payload: rate}));
export const setMomCapital = createAction(ActionType.SET_MOM_CAPITAL, (flag) => ({payload: flag}));
export const setCASCO = createAction(ActionType.SET_CASCO, (flag) => ({payload: flag}));
export const setInsurance = createAction(ActionType.SET_INSURANCE, (flag) => ({payload: flag}));
export const setDefaults = createAction(ActionType.SET_DEFAULTS, (defaults) => ({payload: defaults}));
export const setOrderId = createAction(ActionType.SET_ORDER_NUMBER, (value) => ({payload: value}));
export const setPriceError = createAction(ActionType.SET_PRICE_ERROR, (flag) => ({payload: flag}));
