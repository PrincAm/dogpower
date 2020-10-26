import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { useTrail, a } from 'react-spring';

import ArrowIcon from '../../images/arrow-down-regular.svg';

const BackgroundImageStyled = styled(BackgroundImage)`
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const WelcomeContainer = styled.div`
  padding-top: 10%;
  color: #fff;
  margin-left: 10%;
`;

const Trails = styled.div`
  position: relative;
  overflow: hidden;
`;

const TrailText = styled(a.div)`
  position: relative;
  width: 100%;
  height: 120px;
  line-height: 120px;
  color: #fff;
  font-size: 7em;
  font-weight: 500;
  letter-spacing: -9px;
  will-change: transform, opacity;
  overflow: hidden;

  div {
    overflow: hidden;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0px);
  }

  40% {
    transform: translateY(-15px);
  }

  60% {
    transform: translateY(-5px);
}
`;

const Arrow = styled(ArrowIcon)`
  height: 4rem;
  width: 4rem;
  animation: ${bounce} 2.5s 4;
`;

const ArrowContainer = styled(a.div)`
  font-size: 4rem;
  display: flex;
  align-items: center;
  color: #fff;
  transition: color 0.5s ease;
  letter-spacing: 0;
  &:hover {
    cursor: pointer;
    /* color: inherit; FIXME */
  }
`;

const More = styled.div`
  margin-left: 0.8rem;
  font-weight: 400;
`;

const items = ['SUPER', 'GREAT', 'AWESOME', 'SUPREME', 'chci vědět více'];

const scrollToRef = ref =>
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

const Welcome = ({ data, trainingRef }) => {
  const [animationReady, setAnimationReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationReady(true);
    }, 300);
  }, []);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 800, friction: 200 },
    opacity: animationReady ? 1 : 0,
    x: animationReady ? 0 : 20,
    height: animationReady ? 120 : 0,
  });

  const handleScroll = () => scrollToRef(trainingRef);

  return (
    <div>
      <BackgroundImageStyled
        fluid={data.backgroundImage.childImageSharp.fluid}
        backgroundColor="#eeeeee"
      >
        <WelcomeContainer>
          <Trails>
            <div>
              {trail.map(({ x, height, ...rest }, index) => (
                <TrailText
                  key={items[index]}
                  style={{
                    ...rest,
                    transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
                  }}
                >
                  {index < items.length - 1 ? (
                    <a.div key={items[index]} style={{ height }}>
                      {items[index]}
                    </a.div>
                  ) : (
                    <ArrowContainer
                      key={items[index]}
                      style={height}
                      onClick={handleScroll}
                    >
                      <Arrow />
                      <More>{items[index]}</More>
                    </ArrowContainer>
                  )}
                </TrailText>
              ))}
            </div>
          </Trails>
        </WelcomeContainer>
      </BackgroundImageStyled>
    </div>
  );
};

export default Welcome;
