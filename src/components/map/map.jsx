/** @jsxImportSource @emotion/react */

import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../section-title/section-title';
import Container from '../container/container';
import CustomMap from './custom-map';

export default function Map({styles}) {
  return (
    <section css={styles}>
      <Container>
        <SectionTitle>Отделения Лига Банка</SectionTitle>
        <CustomMap />
      </Container>
    </section>
  );
}

Map.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
