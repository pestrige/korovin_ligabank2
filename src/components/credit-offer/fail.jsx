import React from 'react';
import OfferTitle from './offer-title';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {BreakPoint} from '../../const';
import {getCreditType} from '../../store/selectors';
import {useSelector} from 'react-redux';

const Text = styled.p`
  max-width: 300px;
  margin: 0;
  padding-left: 38px;
  font-size: 16px;
  color: var(--color-dark-600);
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    padding-left: 0;
  }
`;
const styledTitle = css`
  margin-bottom: 12px;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 14px;
  }
`;

export default function Fail() {
  const creditType = useSelector(getCreditType);

  return (
    <>
      <OfferTitle
        type={creditType}
        isSuccess={false}
        styles={styledTitle}
      />
      <Text>
        Попробуйте использовать другие параметры для расчёта.
      </Text>
    </>
  );
}

