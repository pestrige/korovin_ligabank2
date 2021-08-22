import React from 'react';
import styled from '@emotion/styled';
import {BreakPoint} from '../../const';
import FooterItem from './footer-item';

const footerItems = [
  {id: Math.random().toString(36), name: 'Услуги', path: '/'},
  {id: Math.random().toString(36), name: 'Рассчитать кредит', path: '/credit'},
  {id: Math.random().toString(36), name: 'Контакты', path: '/contacts'},
  {id: Math.random().toString(36), name: 'Задать вопрос', path: '/ask'},
];

const StyledUl = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: start;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
`;

export default function FooterMenu() {
  return (
    <StyledUl>
      {footerItems.map(({id, name, path}) => (
        <FooterItem key={id} path={path} >
          {name}
        </FooterItem>))}
    </StyledUl>
  );
}

