import React, {forwardRef} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Flex from '../flex/flex';
import {BreakPoint} from '../../const';

const StyledLabel = styled.label`
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  color: var(--color-dark-600);
`;

const StyledSpan = styled.span`
  display: inline-block;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: ${({icon}) => icon ? '60px' : '20px'};
  font-size: 16px;
  line-height: 22px;
  color: var(--color-dark-800);
  border: 1px solid var(--color-dark-800);
  border-radius: 4px;
  background-color: var(--color-background);
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

function Input ({name, label, icon = null, onChange, ...attrs}, ref) {
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
    <Flex isColumn isRelative>
      <StyledLabel>
        <StyledSpan>
          {label}
        </StyledSpan>
        <StyledInput
          name={name}
          ref={ref}
          icon={icon}
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
  );
}

export default forwardRef(Input);

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func,
};
