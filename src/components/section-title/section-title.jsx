import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: ${({margin}) => margin ? margin : '50px'};
  font-family: var(--font-bold);
  font-size: 41px;
  line-height: 57px;
`;

export default function SectionTitle({children, margin = ''}) {
  return (
    <Title margin={margin}>
      {children}
    </Title>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.string,
};
