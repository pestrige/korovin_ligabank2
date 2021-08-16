import { createReducer } from '@reduxjs/toolkit';
import {setCreditType, setLoginPopup, setStep, setToggleMenu} from './actions';
import {CreditType} from '../const';

const initialState = {
  isLoginOpen: false,
  isMenuOpen: false,
  creditType: CreditType.default.value,
  step: 1,
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
    });
});
