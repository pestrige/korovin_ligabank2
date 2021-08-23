/** @jsxImportSource @emotion/react */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import TabImage from './tab-image';
import Button from '../button/button';
import {css} from '@emotion/react';
import {BreakPoint} from '../../const';

const Slide = styled.article`
  max-width: 1170px;
  margin: 0 auto;
  padding: 53px 135px 45px 70px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 130px;
  font-size: 18px;
  line-height: 23px;
  background-color: var(--color-background);
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    padding: 53px 45px 55px 45px;
    grid-template-columns: 1fr auto;
    column-gap: 35px;
    font-size: 16px;
    line-height: 21px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    max-width: 450px;
    display: block;
    padding: 53px 15px 50px 15px;
    column-gap: 0;
    font-size: 14px;
    line-height: 18px;
  }
`;

const Title = styled.h3`
  grid-column: 1 / 2;
  margin: 0 0 28px;
  font-family: var(--font-medium);
  font-size: 22px;
  line-height: 31px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 25px;
    font-size: 18px;
    line-height: 25px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    max-width: 290px;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 22px;
  }
`;
const Benefits = styled.ul`
  grid-column: 1 / 2;
  margin: 0 0 34px;
  padding-left: 0;
  list-style: none;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 30px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 25px;
  }
`;
const Benefit = styled.li`
  position: relative;
  padding-left: 23px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    padding-left: 15px;
    &:not(:last-child) {
      margin-bottom: 13px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 0;
    width: 15px;
    height: 15px;
    background-image: ${`url(${process.env.PUBLIC_URL}/images/tabs/check-icon.svg)`};
    background-repeat: no-repeat;
    background-size: contain;
    @media (max-width: ${BreakPoint.MAX_PHONE}px) {
      width: 10px;
      height: 10px;
    }
  }
`;
const Text = styled.p`
  margin: 0;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    width: 265px;
  }
`;
const TextLink = styled.a`
  color: var(--color-dark-800);
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;
const styledButton = css`
  grid-column: 1 / 2;
  justify-self: start;
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    width: 100%;
  }
`;

export default function TabSlide({data}) {
  const {id, name, title, benefits, isButton, text, linkText, link} = data;
  return (
    <Slide>
      <Title>
        {title}
      </Title>
      <TabImage id={id} />
      <Benefits>
        {benefits.map(({id: index, text: benefit}) => (
          <Benefit key={index}>
            {benefit}
          </Benefit>
        ))}
      </Benefits>
      {text &&
        <Text>
          {text}
          <TextLink href={`#${link}`}>{linkText}</TextLink>
        </Text>}
      {isButton &&
        <Button
          to={`/${name}`}
          isPadding
          isAdaptive
          isSmall
          css={styledButton}
        >
          Узнать подробнее
        </Button>}
    </Slide>
  );
}

TabSlide.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tabName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })),
    isButton: PropTypes.bool,
    text: PropTypes.string,
    linkText: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};
