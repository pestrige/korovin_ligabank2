import { createReducer } from '@reduxjs/toolkit';
import {
  setCreditType,
  setDeposit,
  setDepositRate,
  setLoginPopup,
  setMomCapital,
  setPrice,
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
    });
});
