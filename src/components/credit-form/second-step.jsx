import React from 'react';
import StepTitle from './step-title';
import {Steps} from '../../const';

import Price from './price';
import Deposit from './deposit';
import Years from './years';
import MomCapital from './mom-capital';
import {css} from '@emotion/react';

const styledInput = css`
  margin-bottom: 3px;
  font-family: var(--font-medium);
  font-size: 18px;
  line-height: 25px;
  text-align: center;
`;

export default function SecondStep() {

  return (
    <StepTitle title={Steps.SECOND.title}>
      <Price styles={styledInput} />
      <Deposit styles={styledInput} />
      <Years styles={styledInput} />
      <MomCapital />
    </StepTitle>
  );
}
