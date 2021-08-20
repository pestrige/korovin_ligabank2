import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark-fade);
  z-index: 2;
`;

export default function Overlay({children, onClose, ...attrs}) {
  const handleKeyDown = (evt) => {
    if (evt.code === 'Escape' || evt.code === 'Esc') {
      onClose(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'visible';
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <StyledDiv
      onClick={() => onClose(false)}
      {...attrs}
    >
      {children}
    </StyledDiv>
  );
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
