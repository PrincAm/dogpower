import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import InstagramIcon from '../../images/icons/instagram-brands.svg';
import YoutubeIcon from '../../images/icons/youtube-brands.svg';
import ThemeContext from '../../store/theme';

const FooterContainer = styled.div`
  color: ${({ theme }) => theme.colorSecondary};
  background-color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 20rem;
  margin-top: 4rem;
`;

const Motto = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colorSecondary};
  text-decoration: none;
  font-size: 1.8rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.linkColor};
    text-decoration: underline;
  }

  &:last-of-type {
    margin-bottom: 1rem;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

const iconStyles = css`
  width: 3rem;
  height: 3rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.linkColor};
  }
  &:last-of-type {
    padding-left: 0.5rem;
  }
`;

const Instagram = styled(InstagramIcon)`
  ${iconStyles};
  color: ${({ theme }) => theme.colorSecondary};
`;

const Youtube = styled(YoutubeIcon)`
  ${iconStyles};
  color: ${({ theme }) => theme.colorSecondary};
`;

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <FooterContainer theme={theme}>
      <LogoWrapper>
        <StaticImage
          src="../../../content/images/logo.png"
          alt="jumping dog"
          placeholder="blurred"
        />
      </LogoWrapper>
      <Motto>Trénink po dobrém</Motto>
      <Link theme={theme} href="mailto:info@dogpower.cz">
        info@dogpower.cz
      </Link>
      <Link theme={theme} href="tel:+420775553021">
        775 553 021
      </Link>
      <IconsContainer>
        <a
          href="https://www.instagram.com/dogpower.cz/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram theme={theme} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCvUMW1zxD2ZX1ORkNfUklSw"
          target="_blank"
          rel="noreferrer"
        >
          <Youtube theme={theme} />
        </a>
      </IconsContainer>
    </FooterContainer>
  );
};

export default Footer;
