import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {BreakPoint} from '../../const';

const Wrapper = styled.div`
  margin-bottom: 23px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: 19px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 14px;
  }
`;
const Range = styled.input`
  display: block;
  width: 100%;
  margin: 18px 0 9px;
  appearance: none;
  &::-webkit-slider-runnable-track {
    height: 1px;
    background-color: var(--color-outline);
  }
  &::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    margin-top: -6px;
    background-color: var(--color-accent);
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s, transform 0.3s;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      background-color: var(--color-accent-dark);
    }
  }
  &::-moz-range-track {
    height: 1px;
    background-color: var(--color-outline);
  }
  &::-moz-range-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    margin-top: -6px;
    background-color: var(--color-accent);
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s, transform 0.3s;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      background-color: var(--color-accent-dark);
    }
  }
`;
const RangeText = styled.span`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-dark-400);
`;

export default function InputRange({
  min = '10',
  max = '100',
  value = '10',
  step = '5',
  label = '',
  withMaxText = false,
  prefix,
  onChange,
  ...attrs
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <Wrapper>
      <Range
        type='range'
        min={min}
        max={max}
        value={value}
        onInput={handleChange}
        step={step}
        aria-label={label}
        {...attrs}
      />
      <RangeText>
        <span>{value}{prefix}</span>
        <span>{withMaxText && `${max}${prefix}`}</span>
      </RangeText>
    </Wrapper>
  );
}

InputRange.propTypes = {
  min: PropTypes.string,
  max: PropTypes.string,
  value: PropTypes.string,
  step: PropTypes.string,
  label: PropTypes.string,
  withMaxText: PropTypes.bool,
  prefix: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
