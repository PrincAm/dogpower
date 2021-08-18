import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from 'components/Text';
import ThemeContext from '../../store/theme';

const Link = styled(Text)`
  position: absolute;
  top: -3rem;
  display: block;
  z-index: 0;
  transition: color 0.2s ease;
  left: ${({ isPrev }) => isPrev && 0};
  right: ${({ isNext }) => isNext && 0};
  cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};
  color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.color : theme.linkColor};

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
      isDisabled={isDisabled}
      isPrev={isPrev}
      isNext={isNext}
      theme={theme}
      size="md"
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
