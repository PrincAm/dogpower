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
import Text from '../Text';

const ReferencesContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => `${theme.marginHeader} 8rem 4rem 8rem`};
  /* width: 1000px; */
  margin: 0 auto 3rem auto;
  background-color: ${({ theme }) => theme.colorLightSecondary};
  color: ${({ theme }) => theme.colorDark};
`;

const Reference = styled.div`
  display: flex;
  margin: 0 3rem;
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
`;

const NameWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
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
      <TitleWrapper>
        <Title size="xxlarge" as="h2">
          Spokojení zákazníci
        </Title>
      </TitleWrapper>
      <Slider {...settings}>
        {data.references.map(({ text, image, name }) => (
          <div key={shortid.generate()}>
            <Reference>
              <Image fluid={image.childImageSharp.fluid} />
              <TextContainer>
                <NameWrapper>
                  <Title as="h2" size="large">
                    {name}
                  </Title>
                </NameWrapper>
                <Text as="p" size="medium">
                  {text}
                </Text>
              </TextContainer>
            </Reference>
          </div>
        ))}
      </Slider>
    </ReferencesContainer>
  );
};

export default References;
