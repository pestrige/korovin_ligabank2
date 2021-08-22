import React from 'react';
import PropTypes from 'prop-types';
import {BreakPoint} from '../../const';
import logoDesktop from './logo-desktop.svg';
import logoTablet from './logo-tablet.svg';
import logoPhone from './logo-phone.svg';
import styled from '@emotion/styled';

const Img = styled.img`
  display: block;
  margin-bottom: ${({isFooter}) => isFooter ? '17px' : '0'};
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: ${({isFooter}) => isFooter ? '7px' : '0'};
  }
`;

export default function Logo({isFooter = false, ...attrs}) {
  return (
    <picture>
      <source srcSet={logoPhone} media={`(max-width: ${BreakPoint.MAX_PHONE}px)`} type="image/svg+xml"/>
      <source srcSet={logoTablet} media={`(max-width: ${BreakPoint.MAX_TABLET}px)`} type="image/svg+xml"/>
      <Img isFooter={isFooter} src={logoDesktop} alt="Логотип Лига Банка" {...attrs} />
    </picture>
  );
}

Logo.propTypes = {
  isFooter: PropTypes.bool,
};
