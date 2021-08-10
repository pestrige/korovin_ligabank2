import React from 'react';
import {BreakPoint} from '../../const';
import logoDesktop from './logo-desktop.svg';
import logoTablet from './logo-tablet.svg';
import logoPhone from './logo-phone.svg';

export default function Logo({...attrs}) {
  return (
    <picture>
      <source srcSet={logoPhone} media={`(max-width: ${BreakPoint.MAX_PHONE}px)`} type="image/svg+xml"/>
      <source srcSet={logoTablet} media={`(max-width: ${BreakPoint.MAX_TABLET}px)`} type="image/svg+xml"/>
      <img src={logoDesktop} alt="Логотип Лига Банка" {...attrs} />
    </picture>
  );
}
