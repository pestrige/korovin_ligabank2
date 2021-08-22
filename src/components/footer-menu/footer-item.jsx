/** @jsxImportSource @emotion/react */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {BreakPoint} from '../../const';

const StyledLi = styled.li`
  margin-top: 0;
  &:not(:last-child) {
    margin-bottom: 9px;
    @media (max-width: ${BreakPoint.MAX_PHONE}px) {
      margin-bottom: 7px;
    }
  }
`;
const linkStyles = css`
  font-family: var(--font-regular);
  font-size: 16px;
  line-height: 140%;
  color: var(--color-dark-800);
  transition: color 0.3s;
  &:hover {
    color: var(--color-dark-400);
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    font-size: 14px;
  }
`;

export default function FooterItem({children, path}) {

  return (
    <StyledLi>
      <Link
        css={linkStyles}
        to={path}
      >
        {children}
      </Link>
    </StyledLi>
  );
}

FooterItem.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string.isRequired,
};
