/** @jsxImportSource @emotion/react */

import React from 'react';
import PropTypes from 'prop-types';
import {BreakPoint} from '../../const';
import {Link} from 'react-router-dom';

const mediaQueryTablet = `@media (max-width: ${BreakPoint.MAX_TABLET}px)`;
const mediaQueryPhone = `@media (max-width: ${BreakPoint.MAX_PHONE}px)`;
const stylingButton = (variant, isInline, isAdaptive, isPadding, isSmall, height) => ({
  minHeight: isSmall ? '51px' : height,
  paddingLeft: isPadding ? '36px' : '0',
  paddingRight: isPadding ? '36px' : '0',
  display: isInline ? 'inline-flex' : 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'var(--font-medium)',
  fontSize: isSmall ? '16px' : '18px',
  lineHeight: isSmall ? '19px' : '21px',
  color: variant === 'primary' ? '#FFFFFF' : 'var(--color-dark)',
  backgroundColor: variant === 'primary' ? 'var(--color-accent)' : '#FFFFFF',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'opacity 0.3s',
  '&:hover': {
    opacity: 0.8,
  },
  '&:disabled': {
    backgroundColor: 'var(--color-outline)',
    cursor: 'not-allowed',
    opacity: 1,
  },
  [mediaQueryTablet]: {
    minHeight: '48px',
    paddingLeft: isPadding ? '30px' : '0',
    paddingRight: isPadding ? '30px' : '0',
    fontSize: isAdaptive ? '16px' : '18px',
    lineHeight: isAdaptive ? '19px' : '21px',
  },
  [mediaQueryPhone]: {
    minHeight: isAdaptive ? '43px' : '51px',
    fontSize: isAdaptive ? '14px' : '18px',
    lineHeight: isAdaptive ? '16px' : '21px',

  },
});

export default function Button({
  variant = 'primary',
  isInline = false,
  isAdaptive = false,
  isPadding = false,
  isSmall = false,
  height = '60px',
  children,
  ...attrs
}) {
  const Tag = attrs.href ? 'a' : 'button';
  const styles = stylingButton(variant, isInline, isAdaptive, isPadding, isSmall, height);

  return attrs.to
    ? <Link css={styles} {...attrs}>{children}</Link>
    : <Tag css={styles} {...attrs}>{children}</Tag>;
}

Button.propTypes = {
  variant: PropTypes.string,
  isInline: PropTypes.bool,
  isAdaptive: PropTypes.bool,
  isPadding: PropTypes.bool,
  isSmall: PropTypes.bool,
  height: PropTypes.string,
  children: PropTypes.node,
};
