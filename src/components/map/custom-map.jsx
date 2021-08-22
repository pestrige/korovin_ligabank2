/** @jsxImportSource @emotion/react */

import React from 'react';
import { YMaps, Map, Placemark, ZoomControl, GeolocationControl } from 'react-yandex-maps';
import markerIcon from './marker.svg';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {BreakPoint} from '../../const';

const COORDINATES = [57.296894, 60.387084];
const markers = [
  [55.7522200, 37.6155600],
  [51.5405600, 46.0086100],
  [55.7887400, 49.1221400],
  [57.1522200, 65.5272200],
  [54.9924400, 73.3685900],
  [61.2500000, 73.4166700],
  [55.0415000, 82.9346000],
];

const MapWrapper = styled.div`
  width: 100%;
  height: 462px;
  background-image: ${`url(${process.env.PUBLIC_URL}/images/map-bg.jpg)`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 1170px 462px;
  @media only screen and (min-resolution: 2dppx) {
    background-image: ${`url(${process.env.PUBLIC_URL}/images/map-bg@2x.jpg)`};
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    height: 381px;
  }
`;
const styledMap = css`
  width: 100%;
  height: 100%;
`;

const createMap = () => (
  <YMaps>
    <Map
      defaultState={{
        center: COORDINATES,
        zoom: 5,
        controls: [],
      }}
      options={{suppressMapOpenBlock: true}}
      css={styledMap}
    >
      {markers.map((marker) => (
        <Placemark
          key={marker.join('-')}
          geometry={marker}
          options={{
            iconLayout: 'default#image',
            iconImageHref: markerIcon,
            iconImageSize: [35, 40],
            iconImageOffset: [-17, -40],
          }}
        />
      )) }
      <ZoomControl
        options={{
          position: {
            right: 15,
            top: 210,
          },
        }}
      />
      <GeolocationControl
        options={{
          float: 'right',
          position: {
            right: 15,
            top: 290,
          },
        }}
      />
    </Map>
  </YMaps>
);

export default function CustomMap() {
  return (
    <MapWrapper>
      { createMap()}
    </MapWrapper>
  );
}
