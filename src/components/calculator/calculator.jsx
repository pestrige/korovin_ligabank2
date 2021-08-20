/** @jsxImportSource @emotion/react */

import React from 'react';
import Container from '../container/container';
import SectionTitle from '../section-title/section-title';
import CalculatorForm from '../calculator-form/calculator-form';
import CreditOffer from '../credit-offer/credit-offer';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {BreakPoint, Steps} from '../../const';
import {useSelector} from 'react-redux';
import {getStep} from '../../store/selectors';
import CreditForm from '../credit-form/credit-form';
import SuccessPopup from '../../success-popup/success-popup';

const CreditWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
  column-gap: 70px;
  row-gap: 47px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 19px;
  }
`;

export default function Calculator({styles}) {
  const step = useSelector(getStep);

  return (
    <section css={styles}>
      <Container>
        <SectionTitle>Кредитный калькулятор</SectionTitle>
        <CreditWrapper>
          <CalculatorForm />
          {step >= Steps.SECOND.id && <CreditOffer/>}
          {step >= Steps.THIRD.id && <CreditForm />}
          {step === Steps.FOURTH.id && <SuccessPopup />}
        </CreditWrapper>
      </Container>
    </section>
  );
}

Calculator.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
