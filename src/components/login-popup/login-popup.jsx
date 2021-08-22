/** @jsxImportSource @emotion/react */

import React, {useEffect, useRef, useState} from 'react';
import Overlay from '../overlay/overlay';
import CloseButton from '../close-button/close-button';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../input/input';
import {setLoginPopup, setToggleMenu} from '../../store/actions';
import {getLoginPopupData} from '../../store/selectors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import logoBig from './logo-big.svg';
import passwordIcon from './password-icon.svg';
import {Link} from 'react-router-dom';
import Button from '../button/button';
import {BreakPoint} from '../../const';

const ANIMATION_DELAY = 200;
const InputName = {
  LOGIN: 'login',
  PASSWORD: 'password',
};
const StyledForm = styled.form`
  position: relative;
  width: 544px;
  min-width: 290px;
  padding: 55px;
  background-color: var(--color-background);
  border: 4px solid var(--color-accent);
  transition: transform 0.2s;
  transform: ${({isScaled}) => isScaled ? 'scale(1)' : 'scale(0)'};

  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    width: 678px;
    padding-left: 84px;
    padding-right: 84px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    width: 290px;
    padding: 45px 16px 40px;
  }
`;
const StyledImg = styled.img`
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-left: -6px;
  }
`;
const StyledFieldset = styled.fieldset`
  padding: 31px 0 0 0;
  display: flex;
  flex-direction: column;
  border: none;
  margin: 0;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    padding-top: 20px;
  }
`;

const styledLogin = css`
  margin-bottom: 23px;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 20px;
  }
`;
const styledLink = css`
  margin-top: 7px;
  margin-bottom: 25px;
  align-self: flex-end;
  color: var(--color-dark-400);
  font-size: 12px;
  line-height: 17px;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    order: 4;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
  }
`;
const styledCloseButton = css`
  top: 50px;
  right: 50px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    top: 48px;
    right: 77px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    top: 36px;
    right: 7px;
  }
`;
const styledButton = css`
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-top: 29px;
  }
`;

export default function LoginPopup() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const isLoginOpen = useSelector(getLoginPopupData);
  const storage = localStorage.getItem('auth');
  const initState = storage ? JSON.parse(storage) : {
    [InputName.LOGIN]: '',
    [InputName.PASSWORD]: '',
  };
  const [auth, setAuth] = useState(initState);
  const [isScaled, setIsScaled] = useState(false);
  const handleClose = () => {
    setIsScaled(false);
    setTimeout(() => dispatch(setLoginPopup(false)), ANIMATION_DELAY);
  };
  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setAuth({
      ...auth,
      [name]: value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setLoginPopup(false));
    dispatch(setToggleMenu(false));
    localStorage.setItem('auth', '');
  };

  useEffect(() => {
    setIsScaled(true);
  }, []);
  useEffect(() => localStorage.setItem('auth', JSON.stringify(auth)), [auth]);
  useEffect(() => {
    nameRef.current?.focus();
  }, []);


  return isLoginOpen && (
    <Overlay onClose={handleClose}>
      <StyledForm
        isScaled={isScaled}
        action='#'
        name='loginForm'
        onClick={(evt) => evt.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <StyledImg
          src={logoBig}
          width={150}
          height={27}
          alt='Логотип Лига Банка'
        />
        <StyledFieldset>
          <Input
            name={InputName.LOGIN}
            value={auth[InputName.LOGIN]}
            onChange={handleChange}
            type='text'
            ref={nameRef}
            label='Логин'
            autocomplete='off'
            css={styledLogin}
          />
          <Input
            name={InputName.PASSWORD}
            value={auth[InputName.PASSWORD]}
            onChange={handleChange}
            type='password'
            label='Пароль'
            ref={passwordRef}
            icon={passwordIcon}
            autocomplete='off'
          />
          <Link
            to='/#'
            css={styledLink}
          >
            Забыли пароль?
          </Link>
          <Button type='submit' css={styledButton}>
            Войти
          </Button>
        </StyledFieldset>
        <CloseButton onClose={handleClose} css={styledCloseButton}/>
      </StyledForm>
    </Overlay>
  );
}
