import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { motion } from 'framer-motion';

const BackgroundImageStyled = styled(BackgroundImage)`
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const WelcomeContainer = styled.div`
  padding-top: 20%;
  color: #fff;
  margin-left: 15%;
`;

const Title2 = styled.h1`
  color: rebeccapurple;
  font-size: 5rem;
  line-height: 5.5.rem;
`;

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const items = ['SUPER', 'GREAT', 'AWESOME', 'SUPREME'];

const variants = {
  visible: i => ({
    opacity: 1,
    transition: {
      delay: i * 0.4,
    },
    y: -50,
  }),
  hidden: { opacity: 0 },
};

const Welcome = ({ dataHome }) => (
  <div>
    <BackgroundImageStyled
      fluid={dataHome.backgroundImage.childImageSharp.fluid}
      backgroundColor="#eeeeee"
    >
      <WelcomeContainer>
        <motion.ul initial="hidden" animate="visible" variants={list}>
          {items.map((item, i) => (
            <motion.li
              key={item}
              custom={i}
              animate="visible"
              variants={variants}
              style={{ lineHeight: '6rem' }}
            >
              <Title2>{item}</Title2>
            </motion.li>
          ))}
        </motion.ul>
      </WelcomeContainer>
    </BackgroundImageStyled>
  </div>
);

export default Welcome;
