import { createReducer } from '@reduxjs/toolkit';
import {
  setCASCO,
  setCreditType, setDefaults,
  setDeposit,
  setDepositRate, setInsurance,
  setLoginPopup,
  setMomCapital, setOrderId,
  setPrice, setPriceError,
  setStep,
  setToggleMenu, setYears, setYearsRate
} from './actions';
import {CreditType} from '../const';

const initialState = {
  isLoginOpen: false,
  isMenuOpen: false,
  creditType: CreditType.default.value,
  step: 1,
  price: '2 000 000 рублей',
  deposit: '200 000 рублей',
  depositRate: '10',
  years: '5 лет',
  yearsRate: '5',
  isMomCapital: true,
  isCASCO: false,
  isInsurance: false,
  orderId: 10,
  priceError: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoginPopup, (state, action) => {
      state.isLoginOpen = action.payload;
    })
    .addCase(setToggleMenu, (state, action) => {
      state.isMenuOpen = action.payload;
    })
    .addCase(setCreditType, (state, action) => {
      state.creditType = action.payload;
    })
    .addCase(setStep, (state, action) => {
      state.step = action.payload;
    })
    .addCase(setPrice, (state, action) => {
      state.price = action.payload;
    })
    .addCase(setDeposit, (state, action) => {
      state.deposit = action.payload;
    })
    .addCase(setDepositRate, (state, action) => {
      state.depositRate = action.payload;
    })
    .addCase(setYears, (state, action) => {
      state.years = action.payload;
    })
    .addCase(setYearsRate, (state, action) => {
      state.yearsRate = action.payload;
    })
    .addCase(setMomCapital, (state, action) => {
      state.isMomCapital = action.payload;
    })
    .addCase(setCASCO, (state, action) => {
      state.isCASCO = action.payload;
    })
    .addCase(setInsurance, (state, action) => {
      state.isInsurance = action.payload;
    })
    .addCase(setDefaults, (state, action) => {
      state.price = action.payload.price;
      state.deposit = action.payload.deposit;
      state.depositRate = action.payload.depositRate;
      state.years = action.payload.years;
      state.yearsRate = action.payload.yearsRate;
      state.isMomCapital = action.payload?.isMomCapital || true;
      state.isCASCO = action.payload?.isCASCO || false;
      state.isInsurance = action.payload?.isInsurance || false;
    })
    .addCase(setOrderId, (state, action) => {
      state.orderId = action.payload;
    })
    .addCase(setPriceError, (state, action) => {
      state.priceError = action.payload;
    });
});
