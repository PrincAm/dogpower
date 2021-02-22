import React, { useContext } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import shortid from 'shortid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ThemeContext from '../../store/theme';

import Navigation from './Navigation';
import Title from '../Title';
import Text from '../Text';

const ReferencesContainer = styled.div`
  padding: 10rem 14rem 0 14rem;
  background-color: #3f8ef1;
  color: ${({ theme }) => theme.colorDarkSec};
`;

const Reference = styled.div`
  display: flex;
  margin: 2rem 5rem 15rem 5rem;
  padding: 3rem;
  height: 100%;
  transition-property: box-shadow, transform;
  transition-duration: 1s, 1s;
`;

const TitleWrapper = styled.div`
  margin-bottom: 6rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled(Text)`
  font-weight: 600;
  margin-top: 1rem;
`;

const SliderWrapper = styled.div`
  width: 900px;
  margin: 0 auto;

  .slick-center ${Reference} {
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transform: scale(1.1);
  }
`;

const References = ({ data }) => {
  const theme = useContext(ThemeContext);

  const settings = {
    centerMode: true,
    slidesToShow: 1,
    nextArrow: <Navigation isNext>Další</Navigation>,
    prevArrow: <Navigation isPrev>Zpět</Navigation>,
    speed: 1000,
    infinite: false,
  };
  return (
    <ReferencesContainer theme={theme}>
      <TitleWrapper theme={theme}>
        <Title size="xxlarge" as="h2">
          Milá slova
        </Title>
      </TitleWrapper>
      <SliderWrapper>
        <Slider {...settings}>
          {data.references.map(({ text, name }) => (
            <div key={shortid.generate()}>
              <Reference>
                <TextContainer>
                  <Text size="xsmall" theme={theme}>
                    &quot;{text}&quot;
                  </Text>
                  <Name size="small">- {name}</Name>
                </TextContainer>
              </Reference>
            </div>
          ))}
        </Slider>
      </SliderWrapper>
    </ReferencesContainer>
  );
};

export default References;
