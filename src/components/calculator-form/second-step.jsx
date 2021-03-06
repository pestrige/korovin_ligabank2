import React from 'react';
import StepTitle from '../step-title/step-title';
import {BreakPoint, Steps} from '../../const';

import Price from './price';
import Deposit from './deposit';
import Years from './years';
import MomCapital from './mom-capital';
import {css} from '@emotion/react';
import {useSelector} from 'react-redux';
import {getCreditType} from '../../store/selectors';
import Casco from './casco';
import Insurance from './insurance';

const styledInput = css`
  margin-bottom: 3px;
  font-family: var(--font-medium);
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    font-size: 16px;
  }
`;

export default function SecondStep() {
  const creditType = useSelector(getCreditType);

  return (
    <StepTitle title={Steps.SECOND.title}>
      <Price styles={styledInput} type={creditType} />
      <Deposit styles={styledInput} type={creditType} />
      <Years styles={styledInput} type={creditType} />
      {creditType === 'mortgage' && <MomCapital/>}
      {
        creditType === 'car' &&
          <>
            <Casco />
            <Insurance />
          </>
      }
    </StepTitle>
  );
}
