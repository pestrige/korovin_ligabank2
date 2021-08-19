import React from 'react';
import {InputName} from '../../const';
import InputCheckbox from '../input-checkbox/input-checkbox';
import {useDispatch, useSelector} from 'react-redux';
import {getInsuranceFlag} from '../../store/selectors';
import {setInsurance} from '../../store/actions';

export default function Insurance() {
  const dispatch = useDispatch();
  const isInsurance = useSelector(getInsuranceFlag);
  const handleChange = (evt) => {
    dispatch(setInsurance(evt.target.checked));
  };

  return (
    <InputCheckbox
      label='Оформить Страхование жизни в нашем банке'
      name={InputName.INSURANCE}
      onChange={handleChange}
      checked={isInsurance}
    />
  );
}
