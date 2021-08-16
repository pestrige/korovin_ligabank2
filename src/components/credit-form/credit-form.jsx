import React from 'react';
import FirstStep from './first-step';
import {useSelector} from 'react-redux';
import {getStep} from '../../store/selectors';
import SecondStep from './second-step';

export default function CreditForm() {
  const step = useSelector(getStep);
  return (
    <form name='credit-calculator'>
      <FirstStep />
      {step === 2 && <SecondStep />}
    </form>
  );
}
