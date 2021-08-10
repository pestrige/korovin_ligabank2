import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import userLogin from './user-login.svg';
import {BreakPoint} from '../../const';
import {useDispatch} from 'react-redux';
import {setLoginPopup} from '../../store/actions';

const StyledUl = styled.ul`
  display: ${({isMobileMenu}) => isMobileMenu ? 'none' : 'flex'};
  align-items: start;
  align-self: start;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    display: ${({isOpen}) => isOpen ? 'none' : 'flex'};
    border-bottom: ${({isMobileMenu}) => isMobileMenu ? '1px solid var(--color-outline)' : 'none'};
    margin-top: ${({isMobileMenu}) => isMobileMenu ? '25px' : '0'};
    padding-left: ${({isMobileMenu}) => isMobileMenu ? '15px' : '0'};
    padding-bottom: ${({isMobileMenu}) => isMobileMenu ? '8px' : '0'};
  }
`;
const StyledLi = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-top: -4px;
  }  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-top: -6px;
  }
`;
const StyledButton = styled.button`
  min-height: 22px;
  position: relative;
  padding: 0 0 0 30px;
  text-align: left;
  border: none;
  background-color: transparent;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 22px;
    background-image: url(${(prop) => prop.icon});
    background-repeat: no-repeat;
    @media (max-width: ${BreakPoint.MAX_PHONE}px) {
      width: ${({isMobileMenu}) => isMobileMenu ? '20px' : '14px'};
      height: ${({isMobileMenu}) => isMobileMenu ? '22px' : '16px'};
      background-size: contain;
    }
  }
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    padding-left: 20px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    min-height: ${({isMobileMenu}) => isMobileMenu ? '22px' : '16px'};
    padding-left: ${({isMobileMenu}) => isMobileMenu ? '30px' : '15px'};
  }
`;
const StyledSpan = styled.span`
  font-family: var(--font-regular);
  font-size: 16px;
  line-height: 19px;
  color: var(--color-dark-800);
  @media (max-width: 1050px) {
    display: ${({isMobileMenu}) => isMobileMenu ? 'block' : 'none'};
  }
`;

export default function UserBlock({isMenuOpen = false, isMobileMenu = false, ...attrs}) {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setLoginPopup({isOpen: true}));

  return (
    <StyledUl isMobileMenu={isMobileMenu} isOpen={isMenuOpen} {...attrs}>
      <StyledLi>
        <StyledButton
          isMobileMenu={isMobileMenu}
          onClick={handleClick}
          icon={userLogin}
          aria-label='Войти в Интернет-банк'
        >
          <StyledSpan isMobileMenu={isMobileMenu}>Войти в Интернет&#8209;банк</StyledSpan>
        </StyledButton>
      </StyledLi>
    </StyledUl>
  );
}

UserBlock.propTypes = {
  isMobileMenu: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
};

