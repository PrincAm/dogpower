import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useTrail, a } from 'react-spring';

import IO from 'components/IO';
import Item from './Item';

const TrainingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
`;

const Part = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 5rem auto;
`;

const Image = styled(Img)`
  flex-shrink: 0;
  height: 300px;
  width: 500px;
`;

const TextContainer = styled.div`
  width: 500px;
  font-size: 3rem;
  line-height: 3.2rem;
`;

const items = [
  {
    id: 'image1',
  },
  {
    id: 'text1',
    text:
      'Moderní etický trénink, bez použití fyzických trestů, zaměřený na motivaci psa.',
  },
];

const Test = ({ isVisible, data }) => {
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 800, friction: 200 },
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0,-60px,0)' : 'translate3d(0,0px,0)',
  });
  return (
    <Part>
      {trail.map((props, index) => (
        <a.div key={index} style={props}>
          {index === 0 ? (
            <Image
              fluid={data.trainingImage1.childImageSharp.fluid}
              loading="lazy"
            />
          ) : (
            <TextContainer>{items[index].text}</TextContainer>
          )}
        </a.div>
      ))}
    </Part>
  );
};

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

        {/* <IO rootMargin="-50px">
          {({ isVisible }) => (
            <>
              <Test isVisible={isVisible} data={data} />
              <Part>
                <TextContainer>
                  Výcvik poslušnosti, zlepšení přivolání, řešení reaktivních i
                  problémových pejsků (tahání na vodítku, agresivita, strach,
                  separační úzkost).
                </TextContainer>
                <Image
                  fluid={data.trainingImage2.childImageSharp.fluid}
                  loading="lazy"
                />
              </Part>
            </>
          )}
        </IO>

        <Part>
          <Image
            fluid={data.trainingImage1.childImageSharp.fluid}
            loading="lazy"
          />
          <TextContainer>
            Moderní etický trénink, bez použití fyzických trestů, zaměřený na
            motivaci psa.
          </TextContainer>
        </Part> */}
      </TrainingContainer>
    </div>
  );
});

export default Training;
