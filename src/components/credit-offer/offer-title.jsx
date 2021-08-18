/** @jsxImportSource @emotion/react */

import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {BreakPoint, CreditType, MinCredit} from '../../const';

const Title = styled.h3`
  margin: 0 0 29px 38px;
  font-family: var(--font-medium);
  font-size: 22px;
  line-height: 140%;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-left: 0px;
    max-width: 420px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    max-width: 240px;
    margin-bottom: 26px;
    font-size: 18px;
  }
`;

export default function OfferTitle({type = '', isSuccess = true, styles}) {

  return (
    <Title css={styles}>
      {
        isSuccess
          ? 'Наше предложение'
          : `Наш банк не выдаёт ${CreditType[type].name} меньше ${MinCredit[type]} рублей.`
      }
    </Title>
  );
}

OfferTitle.propTypes = {
  type: PropTypes.string,
  isSuccess: PropTypes.bool,
  styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
