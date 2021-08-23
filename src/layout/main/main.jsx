import React from 'react';
import Slider from '../../components/slider/slider';
import {css} from '@emotion/react';
import {BreakPoint} from '../../const';
import Tabs from '../../components/tabs/tabs';
import Calculator from '../../components/calculator/calculator';
import Map from '../../components/map/map';
import styled from '@emotion/styled';

const StyledMain = styled.main`
  flex-grow: 1;
`;
const sliderWrapper = css`
  margin-bottom: 60px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 0;
  }
`;
const tabsWrapper = css`
  margin-bottom: 96px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 70px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 55px;
  }
`;
const calcWrapper = css`
  margin-bottom: 63px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 36px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 28px;
  }
`;
const mapWrapper = css`
  margin-bottom: 115px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 87px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 65px;
  }
`;

export default function Main() {
  return (
    <StyledMain>
      <h1 className='visually-hidden'>ЛИГА БАНК - лучший банк</h1>
      <Slider styles={sliderWrapper}/>
      <Tabs styles={tabsWrapper}/>
      <Calculator styles={calcWrapper} />
      <Map styles={mapWrapper}  />
    </StyledMain>
  );
}
