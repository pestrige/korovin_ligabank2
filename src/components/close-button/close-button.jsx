import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {BreakPoint} from '../../const';

const StyledButton = styled.button`
  display:  ${({isTop}) => isTop ? 'none' : 'block'};
  position: ${({isTop}) => isTop ? 'fixed' : 'absolute'};
  top: 6px;
  right: 6px;
  width: 30px;
  height: 30px;
  background-color: var(--color-background);
  border: none;
  cursor: pointer;
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 2px;
    background-color: var(--color-dark-800);
    transition: background-color 0.3s;
  }
  &::before {
    transform: translateX(-50%) rotate(45deg);
  }
  &::after {
    transform: translateX(-50%) rotate(-45deg);
  }
  &:hover::before, &:hover::after {
    background-color: var(--color-dark-400);
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    display: block;
  }
`;

export default function CloseButton({onClose, isTop = false, ...attrs}) {
  return (
    <StyledButton
      type='button'
      onClick={onClose}
      isTop={isTop}
      {...attrs}
    />
  );
}

CloseButton.propTypes = {
  onClose: PropTypes.func,
  isTop: PropTypes.bool,
};

