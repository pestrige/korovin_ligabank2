import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  position: ${({isRelative}) => isRelative ? 'relative' : 'static'};
  display: flex;
  align-items: start;
  flex-direction: ${(props) => props.isColumn ? 'column' : 'row'};
`;

export default function Flex({children, isColumn = false, isRelative = false, ...attrs}) {
  return (
    <StyledDiv isColumn={isColumn} isRelative={isRelative} {...attrs}>
      {children}
    </StyledDiv>
  );
}

Flex.propTypes = {
  children: PropTypes.node,
  isColumn: PropTypes.bool,
  isRelative: PropTypes.bool,
};
