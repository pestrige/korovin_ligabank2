import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {BreakPoint} from '../../const';

const StyledButton = styled.button`
  font-family: var(--font-medium);
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 21px;
  color: ${({variant}) => variant === 'primary' ? '#FFFFFF' : 'var(--color-dark)'};
  background-color: ${({variant}) => variant === 'primary' ? 'var(--color-accent)' : '#FFFFFF'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    min-height: 51px;
  }
`;

export default function Button({variant = 'primary', children, ...attrs}) {
  return (
    <StyledButton
      variant={variant}
      {...attrs}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};
