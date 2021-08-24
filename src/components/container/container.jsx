/** @jsxImportSource @emotion/react */

import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {BreakPoint} from '../../const';

const StyledDiv = styled.div`
  min-width: ${BreakPoint.PHONE}px;
  max-width: 1260px;
  padding: 0 45px;
  margin: 0 auto;
  @media (max-width: 1259px) {
    max-width: 100vw;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    padding: 0 15px;
  }
`;

export default function Container({children, styles}) {
  return (
    <StyledDiv css={styles}>
      {children}
    </StyledDiv>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
