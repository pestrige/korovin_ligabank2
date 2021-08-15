import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import MainNavItem from '../main-nav-item/main-nav-item';
import styled from '@emotion/styled';
import {BreakPoint} from '../../const';
import UserBlock from '../user-block/user-block';
import CloseButton from '../close-button/close-button';

const headerItems = [
  {id: Math.random().toString(36), name: 'Услуги', path: '/'},
  {id: Math.random().toString(36), name: 'Рассчитать кредит', path: '/credit'},
  {id: Math.random().toString(36), name: 'Конвертер валют', path: '/currency'},
  {id: Math.random().toString(36), name: 'Контакты', path: '/contacts'},
];
const footerItems = [
  {id: Math.random().toString(36), name: 'Услуги', path: '/'},
  {id: Math.random().toString(36), name: 'Рассчитать кредит', path: '/credit'},
  {id: Math.random().toString(36), name: 'Контакты', path: '/contacts'},
  {id: Math.random().toString(36), name: 'Задать вопрос', path: '/ask'},
];

const StyledNav = styled.nav`
  min-width: ${BreakPoint.PHONE}px;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s;
  z-index: 2;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    opacity: ${({isOpen}) => isOpen ? '1' : '0'};
    visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
    bottom: 0;
    margin-right: 0;
    padding: 35px 15px;
    background-color: var(--color-background);
    overflow-y: auto;
  }
`;

const StyledUl = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: start;

  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    position: relative;
    flex-direction: column;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      top: 0;
      background-color:  var(--color-outline);
    }
  }
`;

export default function MainNav({
  isFooter = false,
  isOpen = false,
  onToggle,
  ...attrs}) {
  const menuItems = isFooter ? footerItems : headerItems;
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => (document.body.style.overflow = 'visible');
  }, [isOpen]);

  return (
    <StyledNav isOpen={isOpen} {...attrs}>
      <StyledUl>
        {menuItems.map(({id, name, path}) => (
          <MainNavItem key={id} path={path}>
            {name}
          </MainNavItem>))}
      </StyledUl>
      {isOpen && <UserBlock isMobileMenu/>}
      {isOpen && <CloseButton onClose={onToggle} isTop/>}
    </StyledNav>
  );
}

MainNav.propTypes = {
  isFooter: PropTypes.bool,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};
