import React, { useContext } from 'react';
import styled from 'styled-components';

import ThemeContext from '../../store/theme';

const Container = styled.div`
  height: 30rem;
  margin-top: 3rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
  padding: 3rem;
`;

const GoogleMap = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <iframe
        title="googlemaps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.5321167055936!2d14.318870451446365!3d50.03886247931969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9600f92ee379%3A0xd34bdd1c32a5ab95!2sDOGPOWER!5e0!3m2!1scs!2scz!4v1629104654877!5m2!1scs!2scz"
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
      />
    </Container>
  );
};

export default GoogleMap;
