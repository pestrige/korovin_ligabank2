import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {BreakPoint} from '../../const';

const Input = styled.input`
  &:checked ~ span {
    background-color: var(--color-accent);
    background-image: ${`url(${process.env.PUBLIC_URL}/images/checkbox.svg)`};
  }
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
const CustomCheckBox = styled.span`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 1px solid var(--color-accent);
  border-radius: 2px;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-color 0.3s, background-image 0.3s;
`;
export default function InputCheckbox({name, label, checked, ...attrs}) {
  return (
    <Label>
      <Input
        name={name}
        type='checkbox'
        className='visually-hidden'
        checked={checked}
        {...attrs}
      />
      <CustomCheckBox />
      {label}
    </Label>
  );
}

InputCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};
