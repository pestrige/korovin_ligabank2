import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const FieldSet = styled.fieldset`
  margin: 0 0 18px;
  padding: 0;
  border: none;
`;
const Legend = styled.legend`
  margin-bottom: 20px;
  font-family: var(--font-medium);
  font-size: 22px;
  line-height: 31px;
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
