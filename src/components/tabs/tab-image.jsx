import React from 'react';
import {BreakPoint} from '../../const';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ImageBlock = styled.div`
  order: 4;
  margin-top: 7px;
  display: block;
  grid-column: 2 / 3;
  grid-row: 1 / 5;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-top: -20px;
    margin-right: -15px;
    float: right;
  }
`;
const Img = styled.img`
  width: 440px;
  height: 290px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    width: 289px;
    height: 260px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    width: 87px;
    height: 113px;
  }
`;

export default function TabImage({id}) {
  return (
    <ImageBlock>
      <picture>
        <source
          type='image/webp'
          srcSet={`${process.env.PUBLIC_URL}/images/tabs/tab${id}_phone.webp 1x, ${process.env.PUBLIC_URL}/images/tabs/tab${id}_phone@2x.webp 2x`}
          media={`(max-width: ${BreakPoint.MAX_PHONE}px)`}
        />
        <source
          type='image/webp'
          srcSet={`${process.env.PUBLIC_URL}/images/tabs/tab${id}_tablet.webp 1x, ${process.env.PUBLIC_URL}/images/tabs/tab${id}_tablet@2x.webp 2x`}
          media={`(max-width: ${BreakPoint.MAX_TABLET}px)`}
        />
        <source
          type='image/webp'
          srcSet={`${process.env.PUBLIC_URL}/images/tabs/tab${id}.webp 1x, ${process.env.PUBLIC_URL}/images/tabs/tab${id}@2x.webp 2x`}
        />
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/tabs/tab${id}_phone.jpg 1x, ${process.env.PUBLIC_URL}/images/tabs/tab${id}_phone@2x.jpg 2x`}
          media={`(max-width: ${BreakPoint.MAX_PHONE}px)`}
        />
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/tabs/tab${id}_tablet.jpg 1x, ${process.env.PUBLIC_URL}/images/tabs/tab${id}_tablet@2x.jpg 2x`}
          media={`(max-width: ${BreakPoint.MAX_TABLET}px)`}
        />
        <Img
          srcSet={`${process.env.PUBLIC_URL}/images/tabs/tab${id}@2x.jpg 2x`}
          src={`${process.env.PUBLIC_URL}/images/tabs/tab${id}.jpg`}
          alt={`tab ${id}`}
        />
      </picture>
    </ImageBlock>
  );
}

TabImage.propTypes = {
  id: PropTypes.number.isRequired,
};
