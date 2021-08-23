import React from 'react';
import styled from '@emotion/styled';
import Container from '../../components/container/container';
import Socials from '../../components/socials/socials';
import Logo from '../../components/logo/logo';
import FooterMenu from '../../components/footer-menu/footer-menu';
import {BreakPoint} from '../../const';

const StyledFooter = styled.footer`
  padding-top: 48px;
  padding-bottom: 55px;
  background-color: var(--color-background);
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    padding-top: 32px;
    padding-bottom: 45px;
  }
`;
const List = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 260px 150px 205px 155px 110px;
  grid-template-rows: 44px auto auto;
  justify-content: space-between;
  align-items: start;
  grid-template-areas:
    'logo menu mobile phone socials'
    'addr menu mobile phone socials'
    '. menu mobile phone socials';
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 41px min-content min-content 1fr auto;
    column-gap: 25px;
    grid-template-areas:
    'logo mobile'
    'menu mobile'
    'menu phone'
    'menu socials'
    'addr .';
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    display: block;
  }
`;
const ListItem = styled.li`
  &:first-of-type {
    grid-area: logo;
  }
  &:nth-of-type(2) {
    grid-area: addr;
    @media (max-width: ${BreakPoint.MAX_TABLET}px) {
      margin-top: 5px;
      max-width: 260px;
    }
    @media (max-width: ${BreakPoint.MAX_PHONE}px) {
      display: none;
    }
  }
  &:nth-of-type(3) {
    grid-area: menu;
    padding-top: 7px;
    @media (max-width: ${BreakPoint.MAX_TABLET}px) {
      padding-top: 14px;
    }
    @media (max-width: ${BreakPoint.MAX_PHONE}px) {
      margin-bottom: 20px;
    }
  }
  &:nth-of-type(4) {
    grid-area: mobile;
    @media (max-width: ${BreakPoint.MAX_TABLET}px) {
      max-width: 200px;
      margin-bottom: 13px;
    }
    @media (max-width: ${BreakPoint.MAX_PHONE}px) {
      margin-bottom: 17px;
    }
  }
  &:nth-of-type(5) {
    grid-area: phone;
    @media (max-width: ${BreakPoint.MAX_TABLET}px) {
      max-width: 200px;
      margin-bottom: 13px;
    }
    @media (max-width: ${BreakPoint.MAX_PHONE}px) {
      margin-bottom: 9px;
    }
  }
  &:nth-of-type(6) {
    grid-area: socials;
    padding-top: 12px;
  }
`;
const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: ${({withPadding}) => withPadding ? '32px' : '0'};
  font-size: 12px;
  line-height: 140%;
  color: var(--color-dark-400);
`;
const Number = styled.a`
  display: block;
  position: relative;
  margin-top: 10px;
  margin-bottom: 2px;
  padding-left: 32px;
  font-family: var(--font-medium);
  font-size: 16px;
  line-height: 140%;
  color: var(--color-dark-800);
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 0;
  }
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    width: 16px;
    height: 16px;
    background-image: ${({icon}) => `url(${process.env.PUBLIC_URL}/images/${icon}.svg)`};
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <List>
          <ListItem>
            <Logo isFooter/>
          </ListItem>
          <ListItem>
            <Text >
              150015, г. Москва, ул. Московская, д. 32
              Генеральная лицензия Банка России №1050
              Ⓒ Лига Банк, 2019
            </Text>
          </ListItem>
          <ListItem>
            <FooterMenu />
          </ListItem>
          <ListItem>
            <Number icon='mobile' href='tel:*0904'>*0904</Number>
            <Text withPadding>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</Text>
          </ListItem>
          <ListItem>
            <Number icon='phone' href='tel:88001112233'>8 800 111 22 33</Number>
            <Text withPadding>Бесплатный для всех городов России</Text>
          </ListItem>
          <ListItem>
            <Socials />
          </ListItem>
        </List>
      </Container>
    </StyledFooter>
  );
}
