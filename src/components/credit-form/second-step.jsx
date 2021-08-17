/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {css} from '@emotion/react';
import StepTitle from './step-title';
import Input from '../input/input';
import {
  Steps,
  MAX_PRICE,
  MIN_PRICE,
  DEPOSIT_RANGE_STEP,
  MIN_DEPOSIT_RATIO,
  MAX_DEPOSIT_RATIO,
  YEARS_RANGE_STEP, YEARS_MIN_RANGE, YEARS_MAX_RANGE, BreakPoint
} from '../../const';
import styled from '@emotion/styled';
import InputRange from '../input-range/input-range';
import {useDispatch, useSelector} from 'react-redux';
import {getDeposit, getDepositRate, getMomCapitalFlag, getPrice, getYears, getYearsRate} from '../../store/selectors';
import {setDeposit, setDepositRate, setMomCapital, setPrice, setYears, setYearsRate} from '../../store/actions';
import {
  addSpaces,
  checkPriceRange,
  changePrice,
  calcMinDeposit,
  calcDepositRate,
  isAllowedKeyPress
} from '../../utils/utils';
import InputCheckbox from '../input-checkbox/input-checkbox';

const InputName = {
  PRICE: 'price',
  DEPOSIT: 'deposit',
  YEARS: 'years',
  DEPOSIT_RANGE: 'deposit-range',
  YEARS_RANGE: 'years-range',
  CHECKBOX: 'mom-capital',
};

const styledInput = css`
  margin-bottom: 3px;
  font-family: var(--font-medium);
  font-size: 18px;
  line-height: 25px;
  text-align: center;
`;
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

export default function SecondStep() {
  const dispatch = useDispatch();
  const price = useSelector(getPrice);
  const deposit = useSelector(getDeposit);
  const depositRate = useSelector(getDepositRate);
  const years = useSelector(getYears);
  const yearsRate = useSelector(getYearsRate);
  const isMomCapital = useSelector(getMomCapitalFlag);
  const [key, setKey] = useState();
  const [priceError, setPriceError] = useState(false);

  const handleKeyDown = (evt) => {
    setKey(evt.key);
    if (priceError && evt.target.name === InputName.PRICE) {
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
    const spacedValue = addSpaces(value);
    dispatch(setPrice(spacedValue));
    dispatch(setDeposit(calcMinDeposit(value, depositRate)));
  };
  const handleDepositChange = (evt) => {
    if (!isAllowedKeyPress(key)) {
      return;
    }
    const value = evt.target.value;
    const rate = calcDepositRate(price, value);
    const spacedValue = addSpaces(value);
    if (rate < MIN_DEPOSIT_RATIO) {
      dispatch(setDeposit(calcMinDeposit(price, MIN_DEPOSIT_RATIO, false)));
      dispatch(setDepositRate(MIN_DEPOSIT_RATIO.toString()));
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
  const handleYearsChange = (evt) => {
    if (!isAllowedKeyPress(key)) {
      return;
    }
    let value = evt.target.value;
    // eslint-disable-next-line no-console
    console.log(value, typeof value);
    if (+value < YEARS_MIN_RANGE) {
      value = YEARS_MIN_RANGE;
    }
    if (+value > YEARS_MAX_RANGE) {
      value = YEARS_MAX_RANGE;
    }
    dispatch(setYears(value));
    dispatch(setYearsRate(value));
  };
  const handleFocus = (evt) => {
    const value = evt.target.value;
    const type = evt.target.name;
    const newValue = type === InputName.YEARS
      ? value.replace(' лет', '')
      : value.replace(' рублей', '');
    switch (evt.target.name) {
      case InputName.PRICE:
        dispatch(setPrice(newValue));
        break;
      case InputName.DEPOSIT:
        dispatch(setDeposit(newValue));
        break;
      case InputName.YEARS:
        dispatch(setYears(newValue));
        break;
      default:
        break;
    }
  };
  const handleBlur = (evt) => {
    const value = evt.target.value;
    const type = evt.target.name;
    const postfix = type === InputName.YEARS ? 'лет' : 'рублей';
    const newValue = value === '' ? `0 ${postfix}` : `${value} ${postfix}`;
    switch (type) {
      case InputName.PRICE:
        dispatch(setPrice(newValue));
        break;
      case InputName.DEPOSIT:
        dispatch(setDeposit(newValue));
        break;
      case InputName.YEARS:
        dispatch(setYears(newValue));
        break;
      default:
        break;
    }
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
    const result = `${addSpaces(newValue)} рублей`;
    dispatch(setPrice(result));
    dispatch(setDeposit(calcMinDeposit(newValue, depositRate)));
  };
  const handleRangeChange = (value, type) => {
    switch (type) {
      case InputName.DEPOSIT_RANGE:
        dispatch(setDepositRate(value));
        dispatch(setDeposit(calcMinDeposit(price, value)));
        break;
      case InputName.YEARS_RANGE:
        dispatch(setYearsRate(value));
        dispatch(setYears(`${value} лет`));
        break;
      default:
        break;
    }
  };
  const handleCheckboxChange = (evt) => {
    dispatch(setMomCapital(evt.target.checked));
  };

  return (
    <StepTitle title={Steps.SECOND.title}>
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
        css={styledInput}
      />
      <InputDescription>От {MIN_PRICE} до {MAX_PRICE} рублей</InputDescription>
      <Input
        variant='secondary'
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
        css={styledInput}
      />
      <InputRange
        name={InputName.DEPOSIT_RANGE}
        label='Укажите размер взноса'
        value={depositRate}
        step={DEPOSIT_RANGE_STEP}
        prefix='%'
        onChange={handleRangeChange}
      />
      <Input
        variant='secondary'
        name={InputName.YEARS}
        value={years}
        onChange={handleYearsChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type='text'
        inputmode='numeric'
        label='Срок кредитования'
        autocomplete='off'
        css={styledInput}
      />
      <InputRange
        name={InputName.YEARS_RANGE}
        label='Укажите срок кредитования'
        value={yearsRate}
        step={YEARS_RANGE_STEP}
        min={YEARS_MIN_RANGE}
        max={YEARS_MAX_RANGE}
        prefix=' лет'
        withMaxText
        onChange={handleRangeChange}
      />
      <InputCheckbox
        label='Использовать материнский капитал'
        name={InputName.CHECKBOX}
        onChange={handleCheckboxChange}
        checked={isMomCapital}
      />
    </StepTitle>
  );
}
