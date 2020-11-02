import React from 'react';
import styled from 'styled-components';

const reviewsData = {
  Honza:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  Petr:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  Jakub:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  Adam:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

const ReviewsContainer = styled.div`
  display: flex;
  /* height: 30rem; */
  width: 100%;
  background-color: goldenrod;
  padding: 5rem 0;
  color: #fff;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-style: italic;
`;

const Review = styled.div`
  &:first-child {
    margin-left: 5rem;
  }
  &:last-child {
    margin-right: 5rem;
  }
`;

const Reviews = () => (
  <ReviewsContainer>
    {Object.keys(reviewsData).map(name => (
      <Review key={name}>
        <Title>{name}</Title>
        <Paragraph>
          <q>{reviewsData[name]}</q>
        </Paragraph>
      </Review>
    ))}
  </ReviewsContainer>
);

export default Reviews;
