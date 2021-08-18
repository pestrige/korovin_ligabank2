import React, {useState} from 'react';
import * as Proptypes from 'prop-types';
import Input from '../input/input';
import InputRange from '../input-range/input-range';
import {useDispatch, useSelector} from 'react-redux';
import {getYears, getYearsRate} from '../../store/selectors';
import {isAllowedKeyPress} from '../../utils/utils';
import {setYears, setYearsRate} from '../../store/actions';
import {InputName, Postfix, YEARS_MAX_RANGE, YEARS_MIN_RANGE, YEARS_RANGE_STEP} from '../../const';

export default function Years({styles}) {
  const dispatch = useDispatch();
  const years = useSelector(getYears);
  const yearsRate = useSelector(getYearsRate);
  const [key, setKey] = useState();

  const handleKeyDown = (evt) => {
    setKey(evt.key);
  };
  const handleYearsChange = (evt) => {
    if (!isAllowedKeyPress(key)) {
      return;
    }
    let value = evt.target.value;
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
    const newValue = evt.target.value.replace(` ${Postfix.YEARS}`, '');
    dispatch(setYears(newValue));
  };
  const handleBlur = (evt) => {
    const value = evt.target.value;
    const newValue = value === '' ? `0 ${Postfix.YEARS}` : `${value} ${Postfix.YEARS}`;
    dispatch(setYears(newValue));
  };
  const handleRangeChange = (value) => {
    dispatch(setYearsRate(value));
    dispatch(setYears(`${value} лет`));
  };

  return (
    <>
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
        css={styles}
      />
      <InputRange
        name={InputName.YEARS_RANGE}
        label='Укажите срок кредитования'
        value={yearsRate}
        step={YEARS_RANGE_STEP}
        min={YEARS_MIN_RANGE}
        max={YEARS_MAX_RANGE}
        prefix={` ${Postfix.YEARS}`}
        withMaxText
        onChange={handleRangeChange}
      />
    </>
  );
}

Years.propTypes = {
  styles: Proptypes.oneOfType([Proptypes.string, Proptypes.object]),
};
