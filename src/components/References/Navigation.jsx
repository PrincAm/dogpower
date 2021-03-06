import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ThemeContext from '../../store/theme';

const Link = styled.span`
  position: absolute;
  top: -2rem;
  display: block;
  z-index: 0;
  transition: color 0.2s ease;
  color: ${({ isDisabled }) => isDisabled && '#CECECE'};
  left: ${({ isPrev }) => isPrev && 0};
  right: ${({ isNext }) => isNext && 0};
  cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};

  &:hover {
    color: ${({ isDisabled, theme }) =>
      isDisabled ? '#CECECE' : theme.linkColor};
    text-decoration: ${({ isDisabled }) => !isDisabled && 'underline'};
  }
`;

const Navigation = ({ className, onClick, children, isPrev, isNext }) => {
  const isDisabled = className.includes('slick-disabled');
  const theme = useContext(ThemeContext);
  return (
    <Link
      onClick={onClick}
      aria-hidden="true"
      isDisabled={isDisabled}
      isPrev={isPrev}
      isNext={isNext}
      theme={theme}
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
