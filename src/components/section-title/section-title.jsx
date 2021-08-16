import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {BreakPoint} from '../../const';

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: ${({margin}) => margin ? margin : '50px'};
  font-family: var(--font-bold);
  font-size: 41px;
  line-height: 57px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 25px;
    font-size: 32px;
    line-height: 45px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 22px;
    font-size: 22px;
    line-height: 31px;
  }
`;

export default function SectionTitle({children, margin = ''}) {
  return (
    <Title margin={margin}>
      {children}
    </Title>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.string,
};
