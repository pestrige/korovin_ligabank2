import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  SET_LOGIN_OPEN: 'setLoginOpen',
  SET_TOGGLE_MENU: 'setToggleMenu',
};

export const setLoginPopup = createAction(ActionType.SET_LOGIN_OPEN, (flag) => ({payload: flag}));
export const setToggleMenu = createAction(ActionType.SET_TOGGLE_MENU, (flag) => ({payload: flag}));
