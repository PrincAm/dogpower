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
  color: ${({ isDisabled, theme }) =>
    isDisabled ? '#CECECE' : theme.linkColor};

  &:hover {
    text-decoration: ${({ isDisabled }) => !isDisabled && 'underline'};
  }
`;

const Navigation = ({
  className,
  onClick,
  onLinkClick,
  children,
  isPrev,
  isNext,
}) => {
  const theme = useContext(ThemeContext);
  const isDisabled = className.includes('slick-disabled');

  const handleClick = () => {
    onClick();
    onLinkClick();
  };
  return (
    <Link
      onClick={isDisabled ? undefined : handleClick}
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
  onLinkClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  isPrev: PropTypes.bool,
  isNext: PropTypes.bool,
};
