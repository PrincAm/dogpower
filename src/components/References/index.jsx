import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ThemeContext from '../../store/theme';

import Navigation from './Navigation';
import Content from './Content';
import Text from '../Text';

const Background = styled.div`
  background-color: #f2f2f2;
  color: ${({ theme }) => theme.colorDarkSec};
`;

const Container = styled.div`
  padding-top: 10rem;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width};
`;

const TitleWrapper = styled.div`
  margin-bottom: 6rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
`;

const SliderWrapper = styled.div`
  .slick-center .content {
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 80px 100px -25px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transform: scale(1.1);
  }

  .slick-slide .content-wrapper:focus {
    outline: none;
  }

  .slick-slide .test {
    opacity: 0;
    transition: opacity 0.7s;
  }

  .slick-center .test {
    opacity: 1;
  }
`;

const References = ({ data }) => {
  const theme = useContext(ThemeContext);

  const [isExpanded, setIsExpanded] = useState(
    Object.fromEntries(data.references.map(({ name }) => [name, false]))
  );

  const handleOnNextClick = name => {
    const newIsExpanded = { ...isExpanded, [name]: !isExpanded[name] };

    setIsExpanded(newIsExpanded);
  };

  const handleTestClick = () => {
    const newIsExpanded = Object.fromEntries(
      Object.keys(isExpanded).map(key => [key, false])
    );

    setIsExpanded(newIsExpanded);
  };

  const settings = {
    centerMode: true,
    slidesToShow: 1,
    nextArrow: (
      <Navigation isNext onLinkClick={handleTestClick}>
        Další
      </Navigation>
    ),
    prevArrow: (
      <Navigation isPrev onLinkClick={handleTestClick}>
        Zpět
      </Navigation>
    ),
    speed: 1000,
    infinite: false,
  };
  return (
    <Background theme={theme}>
      <Container theme={theme}>
        <TitleWrapper theme={theme}>
          <Text size="xxlarge" as="h1">
            Milá slova
          </Text>
        </TitleWrapper>
        <SliderWrapper>
          <Slider {...settings}>
            {data.references.map(({ name, ...props }) => (
              <div key={name} className="content-wrapper">
                <Content
                  name={name}
                  isExpanded={isExpanded[name]}
                  onExpand={handleOnNextClick}
                  {...props}
                />
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </Background>
  );
};

export default References;
