import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import ThemeContext from '../../../store/theme';
import InstagramMeediaIcon from '../../../images/icons/instagram-brands.svg';
import YoutubeMediaIcon from '../../../images/icons/youtube-brands.svg';
import MEDIA from '../../../helpers/mediaTemplates';

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const iconStyles = css`
  height: 6rem;
  width: 6rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.linkColor};
  }

  ${MEDIA.TABLET`
    height: 8rem;
    width: 8rem;
 `};
  ${MEDIA.MOBILE`
    height: 6rem;
    width: 6rem;
 `};
`;

const YoutubeIcon = styled(YoutubeMediaIcon)`
  ${iconStyles}
`;

const InstagramIcon = styled(InstagramMeediaIcon)`
  ${iconStyles}
`;

const SocialMedias = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <a
        href="https://www.instagram.com/littlecaptain_and_burrrka/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon theme={theme} />
      </a>
      <a
        href="https://www.facebook.com/malyKapitan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeIcon theme={theme} />
      </a>
    </Container>
  );
};

export default SocialMedias;
