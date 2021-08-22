/** @jsxImportSource @emotion/react */

import React, {useCallback, useEffect, useMemo} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Flex from '../../components/flex/flex';
import Logo from '../../components/logo/logo';
import Container from '../../components/container/container';
import MainNav from '../../components/main-nav/main-nav';
import UserBlock from '../../components/user-block/user-block';
import {BreakPoint} from '../../const';
import Burger from '../../components/burger/burger';
import LoginPopup from '../../components/login-popup/login-popup';
import {useDispatch, useSelector} from 'react-redux';
import {getLoginPopupData, getMenuFlag} from '../../store/selectors';
import {setToggleMenu} from '../../store/actions';
import throttle from 'lodash.throttle';

const THROTTLE_DELAY = 1000;
const StyledHeader = styled.header`
  padding-top: 25px;
  padding-bottom: 23px;
  background-color: var(--color-background);
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    padding-top: 22px;
    padding-bottom: 12px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    position: ${({isMenuOpen}) => isMenuOpen ? 'fixed' : 'static'};
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    padding-top: 15px;
    padding-bottom: ${({isMenuOpen}) => isMenuOpen ? '15px' : '5px'};
  }
`;
const logoStyle = css`
  margin-right: 109px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-right: 65px;
  }
`;

export default function Header() {
  const dispatch = useDispatch();
  const isLoginOpen = useSelector(getLoginPopupData);
  const isMenuOpen = useSelector(getMenuFlag);
  const handleToggleMenu = () => {
    dispatch(setToggleMenu(!isMenuOpen));
  };
  // close menu when window resized
  const handleResize = useCallback((evt) => {
    const isNeedToClose = isMenuOpen && evt.target.innerWidth > BreakPoint.MAX_PHONE;
    if (isNeedToClose) {
      dispatch(setToggleMenu(false));
    }
  }, [isMenuOpen, dispatch]);
  const throttledHandleResize = useMemo(() => throttle(handleResize, THROTTLE_DELAY), [handleResize]);

  useEffect(() => {
    window.addEventListener('resize', throttledHandleResize);
    return () => window.removeEventListener('resize', throttledHandleResize);
  }, [throttledHandleResize]);

  return (
    <StyledHeader isMenuOpen={isMenuOpen}>
      <Container>
        <Flex>
          <Burger onToggle={handleToggleMenu} />
          <Logo css={logoStyle} />
          <MainNav
            css={css`flex-grow: 1; margin-right: 20px`}
            isOpen={isMenuOpen}
            onToggle={handleToggleMenu}
          />
          <UserBlock css={css`margin-left: auto`} isMenuOpen={isMenuOpen}/>
        </Flex>
        {isLoginOpen && <LoginPopup /> }
      </Container>
    </StyledHeader>
  );
}
