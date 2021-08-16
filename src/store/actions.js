import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  SET_LOGIN_OPEN: 'setLoginOpen',
  SET_TOGGLE_MENU: 'setToggleMenu',
  SET_CREDIT_TYPE: 'setCreditType',
  SET_STEP: 'setStep',
};

export const setLoginPopup = createAction(ActionType.SET_LOGIN_OPEN, (flag) => ({payload: flag}));
export const setToggleMenu = createAction(ActionType.SET_TOGGLE_MENU, (flag) => ({payload: flag}));
export const setCreditType = createAction(ActionType.SET_CREDIT_TYPE, (type) => ({payload: type}));
export const setStep = createAction(ActionType.SET_STEP, (step) => ({payload: step}));
