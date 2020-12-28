import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import ArrowLeftIcon from '../../images/angle-left-regular.svg';
import ArrowRightIcon from '../../images/angle-right-regular.svg';
import ThemeContext from '../../store/theme';

const ArrowStyle = css`
  height: 3rem;
`;

const ArrowLeftStyled = styled(ArrowLeftIcon)`
  ${ArrowStyle}
  color: ${({ theme }) => theme.colorDark};
  transition: color 0.5s ease;
  
  &:hover {
    // TODO fix color
    color: ${({ theme }) => theme.color};
  }
`;
const ArrowRightStyled = styled(ArrowRightIcon)`
  ${ArrowStyle}
  color: ${({ theme }) => theme.colorDark};
  &:hover {
    // TODO fix color
    color: ${({ theme }) => theme.color};
  }
`;

export const ArrowLeft = ({ className, style, onClick }) => {
  const theme = useContext(ThemeContext);
  return (
    <ArrowLeftStyled
      className={className}
      style={style}
      onClick={onClick}
      theme={theme}
    />
  );
};

export const ArrowRight = ({ className, style, onClick }) => {
  const theme = useContext(ThemeContext);
  return (
    <ArrowRightStyled
      className={className}
      style={style}
      onClick={onClick}
      theme={theme}
    />
  );
};
