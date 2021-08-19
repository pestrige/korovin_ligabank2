import React, {useState} from 'react';
import * as Proptypes from 'prop-types';
import Input from '../input/input';
import InputRange from '../input-range/input-range';
import {useDispatch, useSelector} from 'react-redux';
import {getYears, getYearsRate} from '../../store/selectors';
import {calcPostfix, clearPostfix, isAllowedKeyPress, setPostfix} from '../../utils/utils';
import {setYears, setYearsRate} from '../../store/actions';
import {
  InputName,
  Postfix,
  YEARS_RANGE_STEP,
  YearsMaxRange,
  YearsMinRange
} from '../../const';

export default function Years({type, styles}) {
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
    let value = evt.target.value.replace(/^0+/, '');
    if (+value < +YearsMinRange[type]) {
      value = YearsMinRange[type];
    }
    if (+value > +YearsMaxRange[type]) {
      value = YearsMaxRange[type];
    }
    dispatch(setYears(value));
    dispatch(setYearsRate(value));
  };
  const handleFocus = (evt) => {
    const newValue = clearPostfix(evt.target.value);
    dispatch(setYears(newValue));
  };
  const handleBlur = (evt) => {
    const newValue = setPostfix(evt.target.value);
    dispatch(setYears(newValue));
  };
  const handleRangeChange = (value) => {
    dispatch(setYearsRate(value));
    dispatch(setYears(`${value} ${calcPostfix(value)}`));
  };

  return (
    <>
      <Input
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
        min={YearsMinRange[type]}
        max={YearsMaxRange[type]}
        prefix={` ${Postfix.YEARS}`}
        isCalculatePrefix
        withMaxText
        onChange={handleRangeChange}
      />
    </>
  );
}

Years.propTypes = {
  type: Proptypes.string.isRequired,
  styles: Proptypes.oneOfType([Proptypes.string, Proptypes.object]),
};
