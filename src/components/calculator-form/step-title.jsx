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
  margin-bottom: 20px;
  font-family: var(--font-medium);
  font-size: 22px;
  line-height: 31px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    font-size: 18px;
    line-height: 25px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-bottom: 14px;
    font-size: 16px;
    line-height: 22px;
  }
`;

export default function StepTitle({title, children}) {
  return (
    <FieldSet>
      <Legend>{title}</Legend>
      {children}
    </FieldSet>
  );
}

StepTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
