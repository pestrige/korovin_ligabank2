import React from 'react';
import FirstStep from './first-step';
import {useSelector} from 'react-redux';
import {getStep} from '../../store/selectors';
import SecondStep from './second-step';
import {Steps} from '../../const';

export default function CalculatorForm() {
  const step = useSelector(getStep);
  return (
    <form name='credit-calculator'>
      <FirstStep />
      {step >= Steps.SECOND.id && <SecondStep />}
    </form>
  );
}
