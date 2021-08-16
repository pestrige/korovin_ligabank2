/** @jsxImportSource @emotion/react */

import React from 'react';
import Container from '../container/container';
import SectionTitle from '../section-title/section-title';
import CreditForm from '../credit-form/credit-form';
import CreditOffer from '../credit-offer/credit-offer';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const CreditWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
  column-gap: 70px;
`;

export default function Calculator({styles}) {
  return (
    <section css={styles}>
      <Container>
        <SectionTitle>Кредитный калькулятор</SectionTitle>
        <CreditWrapper>
          <CreditForm />
          <CreditOffer />
        </CreditWrapper>
      </Container>
    </section>
  );
}

Calculator.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
