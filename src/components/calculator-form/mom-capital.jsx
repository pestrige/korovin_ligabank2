import React from 'react';
import InputCheckbox from '../input-checkbox/input-checkbox';
import {InputName} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {getMomCapitalFlag} from '../../store/selectors';
import {setMomCapital} from '../../store/actions';

export default function MomCapital() {
  const dispatch = useDispatch();
  const isMomCapital = useSelector(getMomCapitalFlag);

  const handleChange = (evt) => {
    dispatch(setMomCapital(evt.target.checked));
  };

  return (
    <InputCheckbox
      label='Использовать материнский капитал'
      name={InputName.MOM_CAPITAL}
      onChange={handleChange}
      checked={isMomCapital}
    />
  );
}
