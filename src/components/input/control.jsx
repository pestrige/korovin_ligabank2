import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {BreakPoint} from '../../const';

const Button = styled.button`
  position: relative;
  padding: 0;
  margin-bottom: 3px;
  z-index: 1;
  grid-column: ${({isIncrement}) => isIncrement ? '3 / 4' : '1 / 2'};
  grid-row: 1 / 2;
  align-self: end;
  width: 58px;
  height: 58px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  outline-color: var(--color-accent);
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    width: 45px;
  }
  &::before, &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 2px;
    top: 45%;
    left: 50%;
    background-color: var(--color-dark-800);
    transform: translateX(-50%);
  }
  &::after {
    content: ${({isIncrement}) => isIncrement ? '' : 'none'};
    transform: translateX(-50%) rotate(90deg);
  }
`;

export default function Control({onControlClick, isIncrement}) {
  return (
    <Button
      type='button'
      name={isIncrement ? 'increment' : 'decrement'}
      isIncrement={isIncrement}
      onClick={onControlClick}
      aria-label={isIncrement ? 'Увеличить сумму' : 'Уменьшить сумму'}
    />
  );
}

Control.propTypes = {
  onControlClick: PropTypes.func.isRequired,
  isIncrement: PropTypes.bool,
};
