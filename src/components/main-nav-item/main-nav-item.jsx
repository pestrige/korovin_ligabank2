/** @jsxImportSource @emotion/react */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {BreakPoint} from '../../const';

const StyledLi = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
  &:not(:last-child) {
    margin-right: 25px;
    @media (max-width: ${BreakPoint.MAX_TABLET}px) {
      margin-right: 21px;
    }
  }
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-top: 3px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    position: relative;
    width: 100%;
    margin-top: 21px;
    margin-bottom: 0;
    padding-left: 15px;
    padding-bottom: 17px;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: var(--color-outline);
    }
  }
`;
const linkStyles = css`
  font-family: var(--font-regular);
  font-size: 16px;
  line-height: 19px;
  color: var(--color-dark-800);
  transition: color 0.3s;
  &:hover {
    color: var(--color-dark-400);
  }
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    font-size: 14px;
    line-height: 16px;
  }  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export default function MainNavItem({children, path}) {
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

MainNavItem.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string.isRequired,
};
