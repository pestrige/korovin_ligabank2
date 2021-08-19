/** @jsxImportSource @emotion/react */

import React from 'react';
import Flex from '../flex/flex';
import Button from '../button/button';
import {useSelector} from 'react-redux';
import {getCreditType, getFinalSum, getIncome, getCreditRate, getPayment} from '../../store/selectors';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import OfferTitle from './offer-title';
import {BreakPoint, CreditType} from '../../const';

const Result = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  column-gap: 50px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-top: 0;
    grid-template-columns: auto 1fr;
    justify-content: start;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    grid-template-columns: 1fr;
  }
`;
const ResultTitle = styled.h4`
  margin: 0 0 31px;
  font-family: var(--font-regular);
  font-weight: normal;
  font-size: 16px;
  color: var(--color-dark-600);
  order: 2;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 16px;
  }
`;
const ResultValue = styled.p`
  margin: 0 0 6px;
  font-family: var(--font-medium);
  font-size: 22px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    font-size: 18px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 1px;
  }
`;
const styledButton = css`
  grid-column: 1 / 3;
  margin-top: 3px;
  min-height: 51px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    min-height: 51px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-top: 13px;
    grid-column: 1 / 2;
  }
`;

export default function Success() {
  const type = useSelector(getCreditType);
  const finalSum = useSelector(getFinalSum);
  const finalRate = useSelector(getCreditRate);
  const payment = useSelector(getPayment);
  const income = useSelector(getIncome);

  return (
    <>
      <OfferTitle />
      <Result>
        <Flex isColumn>
          <ResultTitle>Сумма {CreditType[type].sumName}</ResultTitle>
          <ResultValue>{finalSum.string}</ResultValue>
        </Flex>
        <Flex isColumn>
          <ResultTitle>Процентная ставка</ResultTitle>
          <ResultValue>{finalRate.string}</ResultValue>
        </Flex>
        <Flex isColumn>
          <ResultTitle>Ежемесячный платеж</ResultTitle>
          <ResultValue>{payment.string}</ResultValue>
        </Flex>
        <Flex isColumn>
          <ResultTitle>Необходимый доход</ResultTitle>
          <ResultValue>{income.string}</ResultValue>
        </Flex>
        <Button
          isAdaptive
          css={styledButton}
        >
          Оформить заявку
        </Button>
      </Result>
    </>
  );
}
