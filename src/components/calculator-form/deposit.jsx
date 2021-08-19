/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import * as Proptypes from 'prop-types';
import Input from '../input/input';
import InputRange from '../input-range/input-range';
import {useDispatch, useSelector} from 'react-redux';
import {getDeposit, getDepositRate, getPrice} from '../../store/selectors';
import {addSpaces, calcDepositRate, calcMinDeposit, isAllowedKeyPress} from '../../utils/utils';
import {setDeposit, setDepositRate} from '../../store/actions';
import {
  DepositRangeStep,
  InputName,
  MAX_DEPOSIT_RATIO,
  MinDepositRatio,
  Postfix
} from '../../const';


export default function Deposit({type, styles}) {
  const dispatch = useDispatch();
  const price = useSelector(getPrice);
  const deposit = useSelector(getDeposit);
  const depositRate = useSelector(getDepositRate);
  const [key, setKey] = useState();

  const handleKeyDown = (evt) => {
    setKey(evt.key);
  };
  const handleDepositChange = (evt) => {
    if (!isAllowedKeyPress(key)) {
      return;
    }
    const value = evt.target.value.replace(/^0+/, '');
    const rate = calcDepositRate(price, value);
    const spacedValue = addSpaces(value);
    if (rate < MinDepositRatio[type]) {
      dispatch(setDeposit(calcMinDeposit(price, MinDepositRatio[type], false)));
      dispatch(setDepositRate(MinDepositRatio[type].toString()));
      return;
    }
    if (rate > MAX_DEPOSIT_RATIO) {
      dispatch(setDeposit(calcMinDeposit(price, MAX_DEPOSIT_RATIO, false)));
      dispatch(setDepositRate(MAX_DEPOSIT_RATIO.toString()));
      return;
    }
    dispatch(setDeposit(spacedValue));
    dispatch(setDepositRate(Math.round(rate).toString()));
  };
  const handleFocus = (evt) => {
    const newValue = evt.target.value.replace(` ${Postfix.RUBLES}`, '');
    dispatch(setDeposit(newValue));
  };
  const handleBlur = (evt) => {
    const value = evt.target.value;
    const newValue = value === '' ? `0 ${Postfix.RUBLES}` : `${value} ${Postfix.RUBLES}`;
    dispatch(setDeposit(newValue));
  };
  const handleRangeChange = (value) => {
    dispatch(setDepositRate(value));
    dispatch(setDeposit(calcMinDeposit(price, value)));
  };

  return (
    <>
      <Input
        name={InputName.DEPOSIT}
        value={deposit}
        onChange={handleDepositChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type='text'
        inputmode='numeric'
        label='Первоначальный взнос'
        autocomplete='off'
        css={styles}
      />
      <InputRange
        name={InputName.DEPOSIT_RANGE}
        label='Укажите размер взноса'
        value={depositRate}
        min={`${MinDepositRatio[type]}`}
        step={DepositRangeStep[type]}
        prefix='%'
        onChange={handleRangeChange}
      />
    </>
  );
}

Deposit.propTypes = {
  type: Proptypes.string.isRequired,
  styles: Proptypes.oneOfType([Proptypes.string, Proptypes.object]),
};
