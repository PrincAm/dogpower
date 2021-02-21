import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Link = styled.span`
  position: absolute;
  top: -2rem;
  display: block;
  z-index: 0;
  transition: color 0.5s ease;
  color: ${({ isDisabled }) => isDisabled && '#CECECE'};
  left: ${({ isPrev }) => isPrev && 0};
  right: ${({ isNext }) => isNext && 0};
  cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};

  &:hover {
    color: #4f868e;
    color: ${({ isDisabled }) => (isDisabled ? '#CECECE' : '#4f868e')};
  }
`;

const Navigation = ({ className, onClick, children, isPrev, isNext }) => {
  const isDisabled = className.includes('slick-disabled');
  return (
    <Link
      onClick={onClick}
      aria-hidden="true"
      isDisabled={isDisabled}
      isPrev={isPrev}
      isNext={isNext}
    >
      {children}
    </Link>
  );
};

export default Navigation;

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isPrev: PropTypes.bool.isRequired,
  isNext: PropTypes.bool.isRequired,
};
