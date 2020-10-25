import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

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
  margin: 2rem auto;
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

// eslint-disable-next-line react/display-name
const Training = React.forwardRef(({ data }, ref) => {
  console.log(data);
  return (
    <div>
      <TrainingContainer ref={ref}>
        <Part>
          <Image fluid={data.trainingImage1.childImageSharp.fluid} />
          <TextContainer>
            Moderní etický trénink, bez použití fyzických trestů, zaměřený na
            motivaci psa.
          </TextContainer>
        </Part>
        <Part>
          <TextContainer>
            Výcvik poslušnosti, zlepšení přivolání, řešení reaktivních i
            problémových pejsků (tahání na vodítku, agresivita, strach,
            separační úzkost).
          </TextContainer>
          <Image fluid={data.trainingImage2.childImageSharp.fluid} />
        </Part>
      </TrainingContainer>
    </div>
  );
});

export default Training;
