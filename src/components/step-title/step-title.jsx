import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {BreakPoint} from '../../const';

const FieldSet = styled.fieldset`
  margin: 0 0 18px;
  padding: 0;
  border: none;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 8px;
  }
`;
const Legend = styled.legend`
  margin-bottom: ${({isCentered}) => isCentered ? '29px' : '20px'};
  font-family: var(--font-medium);
  font-size: 22px;
  line-height: 31px;
  text-align: ${({isCentered}) => isCentered ? 'center' : 'left'};
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-bottom: ${({isCentered}) => isCentered ? '44px' : '20px'};
    font-size: 18px;
    line-height: 25px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: ${({isCentered}) => isCentered ? '37px' : '14px'};
    font-size: 16px;
    line-height: 22px;
  }
`;

export default function StepTitle({title, isCentered = false, children}) {
  return (
    <FieldSet>
      <Legend isCentered={isCentered}>{title}</Legend>
      {children}
    </FieldSet>
  );
}

StepTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isCentered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
