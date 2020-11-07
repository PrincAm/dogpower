import React, { forwardRef } from 'react';
import styled from 'styled-components';

import IO from 'components/IO';
import Item from './Item';

const TrainingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line react/display-name
const Training = forwardRef(({ data }, ref) => {
  const texts = [
    {
      id: 'text1',
      text:
        'Moderní etický trénink, bez použití fyzických trestů, zaměřený na motivaci psa.',
    },
    {
      id: 'text2',
      text: 'Lorem ipsum',
    },
    {
      id: 'text3',
      text: 'Lorem ipsum',
    },
  ];
  return (
    <div>
      <TrainingContainer ref={ref}>
        <IO rootMargin="-100px">
          {({ isVisible }) => (
            <Item
              isVisible={isVisible}
              texts={texts}
              imageFluid={data.trainingImage1.childImageSharp.fluid}
            />
          )}
        </IO>

        <IO rootMargin="-150px">
          {({ isVisible }) => (
            <Item
              isVisible={isVisible}
              texts={texts}
              imageFluid={data.trainingImage2.childImageSharp.fluid}
              imageOnLeft={false}
            />
          )}
        </IO>

        <IO rootMargin="-150px">
          {({ isVisible }) => (
            <Item
              isVisible={isVisible}
              texts={texts}
              imageFluid={data.trainingImage2.childImageSharp.fluid}
            />
          )}
        </IO>
      </TrainingContainer>
    </div>
  );
});

export default Training;
