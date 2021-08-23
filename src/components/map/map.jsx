/** @jsxImportSource @emotion/react */

import React, {lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../section-title/section-title';
import Container from '../container/container';
import {Anchor} from '../../const';

const CustomMap = lazy(() => import('./custom-map'));

export default function Map({styles}) {
  return (
    <section css={styles}>
      <Container>
        <SectionTitle id={Anchor.MAP}>Отделения Лига Банка</SectionTitle>
        <Suspense fallback={<div>Загрузка карты...</div>}>
          <CustomMap />
        </Suspense>
      </Container>
    </section>
  );
}

Map.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
