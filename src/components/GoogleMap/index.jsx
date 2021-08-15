import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

import Marker from './Marker';

const isClient = typeof window !== 'undefined';

const Container = styled.div`
  height: 30rem;
  margin-top: 3rem;
  border-radius: 10px;
  background: #fff;
  padding: 3rem;
`;

const GoogleMap = () => (
  <Container>
    {isClient && (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCyJb60tkx3iZAXX22P2OxT2C-6YJpkWZc',
          libraries: ['places'],
        }}
        defaultCenter={[50.038780277033446, 14.321047599293445]}
        defaultZoom={16}
      >
        <Marker lat={50.038780277033446} lng={14.321047599293445} />
      </GoogleMapReact>
    )}
  </Container>
);

export default GoogleMap;
