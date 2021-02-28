import React, { useContext } from 'react';
import styled from 'styled-components';

import ThemeContext from '../../../store/theme';

const Link = styled.a`
  text-decoration: none;
  font-size: 4rem;
  line-height: 4.4rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.linkColor};
    text-decoration: underline;
  }

  &:first-of-type {
    margin-top: 1.5rem;
  }
`;

const PhoneNumber = () => {
  const theme = useContext(ThemeContext);
  return (
    <Link href="tel:+420775553021" theme={theme}>
      775 553 021
    </Link>
  );
};

export default PhoneNumber;
