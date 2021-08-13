import React from 'react';
import Slider from '../../components/slider/slider';
import {css} from '@emotion/react';
import {BreakPoint} from '../../const';

const sliderWrapper = css`
  margin-bottom: 60px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 0;
  }
`;

export default function Main() {
  return (
    <main>
      <h1 className='visually-hidden'>ЛИГА БАНК - лучший банк</h1>
      <Slider styles={sliderWrapper}/>
    </main>
  );
}
