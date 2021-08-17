/** @jsxImportSource @emotion/react */

import React, {forwardRef} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Flex from '../flex/flex';
import {BreakPoint} from '../../const';
import {css} from '@emotion/react';
import Control from './control';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    grid-template-columns: 45px 1fr 45px;
  }
`;
const styledFlex = css`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
`;
const StyledLabel = styled.label`
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  color: var(--color-dark-600);
`;

const StyledSpan = styled.span`
  display: inline-block;
  margin-bottom: 5px;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    display: ${({isError}) => isError ? 'none' : 'inline-block'};
  }
`;
const Error = styled.span`
  display: inline-block;
  float: right;
  color: var(--color-error);
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    float: left;
    margin-bottom: 5px;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: ${({icon}) => icon ? '60px' : '20px'};
  font-size: 16px;
  line-height: 22px;
  color: var(--color-dark-800);
  border-width: 1px;
  border-style: solid;
  border-color: ${({isError}) => isError ? 'var(--color-error)' : 'var(--color-dark-800)'};
  outline-color: ${({isError}) => isError ? 'var(--color-error)' : 'var(--color-accent)'};
  border-radius: 4px;
  background-color: ${({variant}) => variant === 'secondary' ? 'white' : 'var(--color-background)'};
`;

const StyledIcon = styled.button`
  position: absolute;
  right: 20px;
  top: 45px;
  width: 27px;
  height: 22px;
  background-color: transparent;
  background-image: url(${({icon}) => icon});
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.3;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    right: 13px;
  }
`;

function Input ({
  variant = 'primary',
  name,
  label,
  icon = null,
  withControls,
  onChange,
  onControlClick,
  isError = false,
  ...attrs
}, ref) {

  const handleMouseDown = () => {
    if (icon !== null) {
      ref.current.type = 'text';
    }
  };
  const handleMouseUp = () => {
    if (icon !== null) {
      ref.current.type = 'password';
    }
  };

  return (
    <Grid>
      {withControls && <Control onControlClick={onControlClick}/>}
      <Flex
        isColumn
        isRelative
        css={styledFlex}
      >
        <StyledLabel>
          <StyledSpan isError={isError}>
            {label}
          </StyledSpan>
          {isError && <Error>Некорректное значение</Error>}
          <StyledInput
            variant={variant}
            name={name}
            ref={ref}
            icon={icon}
            isError={isError}
            onChange={onChange}
            {...attrs}
          />
        </StyledLabel>
        {icon &&
        <StyledIcon
          type='button'
          icon={icon}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />}
      </Flex>
      {withControls && <Control isIncrement onControlClick={onControlClick}/>}
    </Grid>
  );
}

export default forwardRef(Input);

Input.propTypes = {
  variant: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func,
  onControlClick: PropTypes.func,
  withControls: PropTypes.bool,
  isError: PropTypes.bool,
};
