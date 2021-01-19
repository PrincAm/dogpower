import React, { useContext } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import shortid from 'shortid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ThemeContext from '../../store/theme';

import { ArrowLeft, ArrowRight } from './Arrows';
import Title from '../Title';

const pFontSizes = {
  large: '2.4rem',
  medium: '2.2rem',
  small: '1.9rem',
  xsmall: '1.7rem',
};

const pLineHeights = {
  large: '2.5rem',
  medium: '2.4rem',
  small: '2.2rem',
  xsmall: '1.9rem',
};

const ReferencesContainer = styled.div`
  padding: 10rem 14rem;
  // FIXME unify colors, store to theme
  background-color: #f6f6f6; // ${({ theme }) => theme.colorLightSecondary};
  color: ${({ theme }) => theme.colorDarkSec};
`;

const Reference = styled.div`
  display: flex;
  margin: 0 3rem;
  height: 100%;
`;

const Image = styled(Img)`
  flex-shrink: 0;
  max-height: 30rem;
  width: 30rem;
  margin-right: 3rem;
`;

const TitleWrapper = styled.div`
  margin-bottom: 4rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
`;

const NameWrapper = styled.div`
  margin-bottom: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p`
  font-size: ${({ size }) => pFontSizes[size]};
  line-height: ${({ size }) => pLineHeights[size]};
  color: ${({ theme }) => theme.colorDarkSec};
`;

const References = ({ data }) => {
  const theme = useContext(ThemeContext);
  const settings = {
    dots: false,
    slidesToShow: 1,
    infinite: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    swipeToSlide: true,
  };
  return (
    <ReferencesContainer theme={theme}>
      <TitleWrapper theme={theme}>
        <Title size="xxlarge" as="h2">
          Spokojení zákazníci
        </Title>
      </TitleWrapper>
      <Slider {...settings}>
        {data.references.map(({ text, image, name, size }) => (
          <div key={shortid.generate()}>
            <Reference>
              <Image fluid={image.childImageSharp.fluid} />
              <TextContainer>
                <NameWrapper>
                  <Title as="h2" size="large">
                    {name}
                  </Title>
                </NameWrapper>
                <Paragraph size={size} theme={theme}>
                  {text}
                </Paragraph>
              </TextContainer>
            </Reference>
          </div>
        ))}
      </Slider>
    </ReferencesContainer>
  );
};

export default References;
