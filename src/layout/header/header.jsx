/** @jsxImportSource @emotion/react */

import React from 'react';
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

const StyledHeader = styled.header`
  padding-top: 25px;
  padding-bottom: 23px;
  background-color: var(--color-background);
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    padding-top: 22px;
    padding-bottom: 12px;
  }  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    padding-top: 15px;
    padding-bottom: 5px;
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

  return (
    <StyledHeader>
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
