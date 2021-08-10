import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {BreakPoint} from '../../const';

const StyledButton = styled.button`
  display: none;
  position: absolute;
  width: 16px;
  height: 10px;
  margin-right: 14px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 1px;
    top: 50%;
    left: 0;
    background-color: var(--color-dark-800);
    box-shadow: 0 5px 0 var(--color-dark-800), 0 -5px 0 var(--color-dark-800);
    transition: background-color 0.3s, box-shadow 0.3s;
  }
  &:hover::before {
    background-color: var(--color-dark-400);
    box-shadow: 0 5px 0 var(--color-dark-400), 0 -5px 0 var(--color-dark-400);
  }

  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    display: block;
    position: relative;
    margin-top: 3px;
  }
`;

export default function Burger({onToggle}) {
  return (
    <StyledButton onClick={onToggle}/>
  );
}

Burger.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
