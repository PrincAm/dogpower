import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ArrowLeft, ArrowRight } from './Arrows';
import { reviews } from './data';

const ReviewsContainer = styled.div`
  padding: 40px;
  width: 1000px;
  margin: 0 auto 3rem auto;
`;

const Review = styled.div`
  display: flex;
  margin: 0 3rem;
`;

const Paragraph = styled.p`
  font-style: italic;
`;

const Image = styled(Img)`
  flex-shrink: 0;
  height: 300px;
  width: 500px;
  margin-right: 1rem;
`;

const Reviews = ({ data }) => {
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
    <ReviewsContainer>
      <Slider {...settings}>
        {Object.keys(reviews).map(name => (
          <div key={name}>
            <Review>
              <Image fluid={data.trainingImage1.childImageSharp.fluid} />
              <Paragraph>
                <q>{reviews[name]}</q>
              </Paragraph>
            </Review>
          </div>
        ))}
      </Slider>
    </ReviewsContainer>
  );
};

export default Reviews;
