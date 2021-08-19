import React from 'react';
import {InputName} from '../../const';
import InputCheckbox from '../input-checkbox/input-checkbox';
import {useDispatch, useSelector} from 'react-redux';
import {getCASCOFlag} from '../../store/selectors';
import {setCASCO} from '../../store/actions';

export default function Casco() {
  const dispatch = useDispatch();
  const isCASCO = useSelector(getCASCOFlag);
  const handleChange = (evt) => {
    dispatch(setCASCO(evt.target.checked));
  };

  return (
    <InputCheckbox
      label='Оформить КАСКО в нашем банке'
      name={InputName.CASCO}
      onChange={handleChange}
      checked={isCASCO}
    />
  );
}
