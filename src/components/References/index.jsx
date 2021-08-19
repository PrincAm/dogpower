import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ThemeContext from '../../store/theme';
import Navigation from './Navigation';
import Content from './Content';
import Text from '../Text';

const Background = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Container = styled.div`
  padding-top: 10rem;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width};
`;

const TitleWrapper = styled.div`
  margin-bottom: 6rem;
  text-align: center;
`;

const SliderWrapper = styled.div`
  .slick-center .content {
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0 80px 100px -25px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transform: scale(1.1);
  }

  .slick-slide .content-wrapper:focus {
    outline: none;
  }

  .slick-slide .button-expand {
    opacity: 0;
    transition: opacity 0.7s;
  }

  .slick-center .button-expand {
    opacity: 1;
  }
`;

const References = ({ data }) => {
  const theme = useContext(ThemeContext);

  const [isExpanded, setIsExpanded] = useState(
    Object.fromEntries(data.references.map(({ name }) => [name, false]))
  );

  const handleExpand = name => {
    const newIsExpanded = { ...isExpanded, [name]: !isExpanded[name] };

    setIsExpanded(newIsExpanded);
  };

  const handleNavigationClick = () => {
    const newIsExpanded = Object.fromEntries(
      Object.keys(isExpanded).map(key => [key, false])
    );

    setIsExpanded(newIsExpanded);
  };

  // FIXME lighthouse accessibility issue https://github.com/akiran/react-slick/issues/1535
  const settings = {
    centerMode: true,
    slidesToShow: 1,
    nextArrow: (
      <Navigation isNext onLinkClick={handleNavigationClick}>
        Další
      </Navigation>
    ),
    prevArrow: (
      <Navigation isPrev onLinkClick={handleNavigationClick}>
        Zpět
      </Navigation>
    ),
    speed: 1000,
    infinite: false,
  };
  return (
    <Background theme={theme}>
      <Container theme={theme}>
        <TitleWrapper>
          <Text size="xl" as="h1">
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
                  onExpand={handleExpand}
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

References.propTypes = {
  data: PropTypes.shape({
    references: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};
