import React from 'react';
import Slider from '../../components/slider/slider';
import {css} from '@emotion/react';
import {BreakPoint} from '../../const';
import Tabs from '../../components/tabs/tabs';
import Calculator from '../../components/calculator/calculator';

const sliderWrapper = css`
  margin-bottom: 60px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 0;
  }
`;
const tabsWrapper = css`
  margin-bottom: 96px;
`;
const calcWrapper = css`
  margin-bottom: 110px;
`;

export default function Main() {
  return (
    <main>
      <h1 className='visually-hidden'>ЛИГА БАНК - лучший банк</h1>
      <Slider styles={sliderWrapper}/>
      <Tabs styles={tabsWrapper}/>
      <Calculator styles={calcWrapper} />
    </main>
  );
}
