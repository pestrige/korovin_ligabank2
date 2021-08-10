import { createReducer } from '@reduxjs/toolkit';
import {setLoginPopup, setToggleMenu} from './actions';

const initialState = {
  isLoginOpen: false,
  isMenuOpen: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoginPopup, (state, action) => {
      state.isLoginOpen = action.payload;
    })
    .addCase(setToggleMenu, (state, action) => {
      state.isMenuOpen = action.payload;
    });
});
