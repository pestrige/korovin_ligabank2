/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import Input from '../input/input';
import {BreakPoint, InputName, MaxPrice, MinPrice, Postfix, PriceTitle} from '../../const';
import styled from '@emotion/styled';
import {useDispatch, useSelector} from 'react-redux';
import {getDepositRate, getPrice, getPriceError} from '../../store/selectors';
import {
  addSpaces,
  calcMinDeposit,
  changePrice,
  checkPriceRange,
  isAllowedKeyPress
} from '../../utils/utils';
import {calcPostfix, clearPostfix, setPostfix} from '../../utils/postfix';
import {setDeposit, setPrice, setPriceError} from '../../store/actions';
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

export default function Price({type, styles}) {
  const dispatch = useDispatch();
  const price = useSelector(getPrice);
  const depositRate = useSelector(getDepositRate);
  const priceError = useSelector(getPriceError);

  const [key, setKey] = useState();

  const handleKeyDown = (evt) => {
    setKey(evt.key);
    if (priceError) {
      dispatch(setPriceError(false));
    }
  };
  const handlePriceChange = (evt) => {
    if (!isAllowedKeyPress(key)) {
      return;
    }
    const value = evt.target.value.replace(/^0+/, '');
    if (!checkPriceRange(value, type)) {
      dispatch(setPriceError(true));
    }
    if (value.length > 11) {
      return;
    }
    const spacedValue = addSpaces(value);
    dispatch(setPrice(spacedValue));
    dispatch(setDeposit(calcMinDeposit(value, depositRate)));
  };
  const handleFocus = (evt) => {
    const newValue = clearPostfix(evt.target.value, 'RUBLES');
    dispatch(setPrice(newValue));
  };
  const handleBlur = (evt) => {
    const value = setPostfix(evt.target.value, 'RUBLES');
    dispatch(setPrice(value));
  };
  const handleControlClick = (evt) => {
    const newValue = evt.target.name === 'increment'
      ? changePrice(price, type)
      : changePrice(price, type, false);

    if (!checkPriceRange(newValue, type)) {
      dispatch(setPriceError(true));
    } else {
      dispatch(setPriceError(false));
    }
    const result = `${addSpaces(newValue)} ${calcPostfix(newValue, 'RUBLES')}`;
    dispatch(setPrice(result));
    dispatch(setDeposit(calcMinDeposit(newValue, depositRate)));
  };

  return (
    <>
      <Input
        withControls
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
        label={PriceTitle[type]}
        autocomplete='off'
        css={styles}
      />
      <InputDescription>
        От {MinPrice[type].string} до {MaxPrice[type].string} {Postfix.RUBLES}
      </InputDescription>
    </>
  );
}

Price.propTypes = {
  type: Proptypes.string.isRequired,
  styles: Proptypes.oneOfType([Proptypes.string, Proptypes.object]),
};
