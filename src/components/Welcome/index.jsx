import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { useTrail, a } from 'react-spring';

import ThemeContext from '../../store/theme';
import ArrowIcon from '../../images/arrow-down-regular.svg';

const BackgroundImageStyled = styled(BackgroundImage)`
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const WelcomeContainer = styled.div`
  color: ${({ theme }) => theme.colorSecondary};
  padding-top: 10%;
  margin-left: 12rem;
`;

const Trails = styled.div`
  position: relative;
  overflow: hidden;
`;

const TrailText = styled(a.div)`
  position: relative;
  height: 12rem;
  line-height: 12rem;
  font-size: 7em;
  font-weight: 500;
  letter-spacing: -1rem;
  text-indent: -0.3rem;
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

const ArrowContainer = styled.div`
  color: ${({ theme }) => theme.colorSecondary};
  font-size: 4rem;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0;
  transition: color 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.linkColor};
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Arrow = styled(ArrowIcon)`
  height: 4rem;
  width: 4rem;
  animation: ${bounce} 2.5s 4;
`;

const More = styled.span`
  margin-left: 0.8rem;
  font-weight: 400;
`;

const items = ['SUPER', 'GREAT', 'AWESOME', 'SUPREME', 'chci vědět více'];

const scrollToRef = ref =>
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

const Welcome = ({ data, trainingRef }) => {
  const [animationReady, setAnimationReady] = useState(false);
  const theme = useContext(ThemeContext);

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
        fluid={data.landingImg.childImageSharp.fluid}
        backgroundColor={theme.background}
      >
        <WelcomeContainer theme={theme}>
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
                  <a.div key={items[index]} style={{ height }}>
                    {index < items.length - 1 ? (
                      items[index]
                    ) : (
                      <ArrowContainer onClick={handleScroll} theme={theme}>
                        <Arrow />
                        <More>{items[index]}</More>
                      </ArrowContainer>
                    )}
                  </a.div>
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
