/** @jsxImportSource @emotion/react */

import React from 'react';
import {css} from '@emotion/react';
import StepTitle from './step-title';
import Input from '../input/input';
import {Steps} from '../../const';

const InputName = {
  PRICE: 'price',
};

const styledInput = css`
  font-family: var(--font medium);
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  background-color: white;
`;

export default function SecondStep() {
  const handleChange = () => {

  };

  return (
    <StepTitle title={Steps.SECOND}>
      <Input
        name={InputName.PRICE}
        value={'2 000 000 рублей'}
        onChange={handleChange}
        type='text'
        label='Стоимость недвижимости'
        autocomplete='off'
        css={styledInput}
      />
    </StepTitle>
  );
}
