/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import Input from '../input/input';
import {BreakPoint, InputName, MAX_PRICE, MIN_PRICE, Postfix} from '../../const';
import styled from '@emotion/styled';
import {useDispatch, useSelector} from 'react-redux';
import {getDepositRate, getPrice} from '../../store/selectors';
import {addSpaces, calcMinDeposit, changePrice, checkPriceRange, isAllowedKeyPress} from '../../utils/utils';
import {setDeposit, setPrice} from '../../store/actions';
import * as Proptypes from 'prop-types';

const InputDescription = styled.span`
  display: block;
  margin-bottom: 26px;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-dark-400);
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 18px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 16px;
  }
`;

export default function Price({styles}) {
  const dispatch = useDispatch();
  const price = useSelector(getPrice);
  const depositRate = useSelector(getDepositRate);

  const [priceError, setPriceError] = useState(false);
  const [key, setKey] = useState();

  const handleKeyDown = (evt) => {
    setKey(evt.key);
    if (priceError) {
      setPriceError(false);
    }
  };
  const handlePriceChange = (evt) => {
    if (!isAllowedKeyPress(key)) {
      return;
    }
    const value = evt.target.value;
    if (!checkPriceRange(value)) {
      setPriceError(true);
    }
    if (value.length > 11) {
      return;
    }
    const spacedValue = addSpaces(value);
    dispatch(setPrice(spacedValue));
    dispatch(setDeposit(calcMinDeposit(value, depositRate)));
  };
  const handleFocus = (evt) => {
    const newValue = evt.target.value.replace(` ${Postfix.RUBLES}`, '');
    dispatch(setPrice(newValue));
  };
  const handleBlur = (evt) => {
    const value = evt.target.value;
    const newValue = value === '' ? `0 ${Postfix.RUBLES}` : `${value} ${Postfix.RUBLES}`;
    dispatch(setPrice(newValue));
  };
  const handleControlClick = (evt) => {
    const newValue = evt.target.name === 'increment'
      ? changePrice(price)
      : changePrice(price, false);

    if (!checkPriceRange(newValue)) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
    const result = `${addSpaces(newValue)} ${Postfix.RUBLES}`;
    dispatch(setPrice(result));
    dispatch(setDeposit(calcMinDeposit(newValue, depositRate)));
  };

  return (
    <>
      <Input
        withControls
        variant='secondary'
        name={InputName.PRICE}
        value={price}
        onChange={handlePriceChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isError={priceError}
        onControlClick={handleControlClick}
        type='text'
        inputmode='numeric'
        label='Стоимость недвижимости'
        autocomplete='off'
        css={styles}
      />
      <InputDescription>От {MIN_PRICE} до {MAX_PRICE} {Postfix.RUBLES}</InputDescription>
    </>
  );
}

Price.propTypes = {
  styles: Proptypes.oneOfType([Proptypes.string, Proptypes.object]),
};
