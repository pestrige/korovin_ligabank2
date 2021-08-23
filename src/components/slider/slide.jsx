import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import styled from '@emotion/styled';
import {BreakPoint} from '../../const';

const Background = {
  1: 'linear-gradient(to bottom, #2B36F2, #2028B3)',
  2: 'linear-gradient(to right, #DDE2ED, #F4F9FF)',
  3: 'linear-gradient(to right, #E6F1FE, #E6F1FE)',
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: start;
  background-image: ${({id}) => `${Background[id]}`};
`;
const InfoBlock = styled.div`
  width: 920px;
  margin-top: 103px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 45px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 1;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    width: 686px;
    margin-top: 65px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    width: 686px;
    margin-top: 40px;
  }
  @media (max-width: 420px) {
    padding: 0 15px;
  }
`;
const ImageBlock = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 420px) {
    align-items: start;
  }
`;
const Image = styled.img`
  display: block;
  width: 1366px;
  height: 400px;
  object-fit: cover;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    width: 768px;
    height: 300px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    width: ${({dataName}) => dataName === 'credits' ? '540px' : '400px'};
    height: 226px;
  }
`;
const Title = styled.h3`
  max-width: 400px;
  margin: 0 0 7px 0;
  font-family: var(--font-bold);
  font-size: 54px;
  line-height: 63px;
  color: ${({isDark}) => isDark ? 'var(--color-dark-800)' : 'var(--color-background)'};
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 5px;
    font-size: 46px;
    line-height: 54px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    max-width: 200px;
    margin-bottom: 6px;
    font-size: 38px;
    line-height: 45px;
  }
`;
const SubTitle = styled.p`
  max-width: 400px;
  margin: 0 0 35px 0;
  font-size: 22px;
  line-height: 26px;
  color: ${({isDark}) => isDark ? 'var(--color-dark-700)' : 'var(--color-light)'};
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 21px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    max-width: 200px;
    margin-bottom: 25px;
    font-size: 16px;
    line-height: 19px;
  }
`;

export default function Slide({data}) {
  const {id, name, title, text, buttonText, isDark, link} = data;

  return (
    <Grid id={id}>
      <InfoBlock>
        <Title isDark={isDark}>{title}</Title>
        <SubTitle isDark={isDark}>{text}</SubTitle>
        {buttonText &&
          <Button
            isInline
            isAdaptive
            isPadding
            variant={isDark ? 'primary' : 'secondary'}
            height='53px'
            href={link}
          >
            {buttonText}
          </Button>}
      </InfoBlock>
      <ImageBlock>
        <picture>
          <source
            type='image/webp'
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${id}_phone.webp 1x, ${process.env.PUBLIC_URL}/images/slides/slide${id}_phone@2x.webp 2x`}
            media={`(max-width: ${BreakPoint.MAX_PHONE}px)`}
          />
          <source
            type='image/webp'
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${id}_tablet.webp 1x, ${process.env.PUBLIC_URL}/images/slides/slide${id}_tablet@2x.webp 2x`}
            media={`(max-width: ${BreakPoint.MAX_TABLET}px)`}
          />
          <source
            type='image/webp'
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${id}.webp 1x, ${process.env.PUBLIC_URL}/images/slides/slide${id}@2x.webp 2x`}
          />
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${id}_phone.jpg 1x, ${process.env.PUBLIC_URL}/images/slides/slide${id}_phone@2x.jpg 2x`}
            media={`(max-width: ${BreakPoint.MAX_PHONE}px)`}
          />
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${id}_tablet.jpg 1x, ${process.env.PUBLIC_URL}/images/slides/slide${id}_tablet@2x.jpg 2x`}
            media={`(max-width: ${BreakPoint.MAX_TABLET}px)`}
          />
          <Image
            dataName={name}
            src={`${process.env.PUBLIC_URL}/images/slides/slide${id}.jpg`}
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${id}@2x.jpg 2x`}
            alt={`slide ${id}`}
          />
        </picture>
      </ImageBlock>
    </Grid>
  );
}

Slide.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    isDark: PropTypes.bool,
    link: PropTypes.string,
  }),
};
