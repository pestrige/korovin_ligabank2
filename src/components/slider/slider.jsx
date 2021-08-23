/** @jsxImportSource @emotion/react */

import React from 'react';
import SwiperCore, {Autoplay, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Slide from './slide';
import PropTypes from 'prop-types';
import 'swiper/swiper-bundle.min.css';
import './slider.scss';
import {Anchor} from '../../const';

SwiperCore.use([Autoplay, Pagination]);

const slides = [
  {id: 1, name: 'credits', title: 'Лига Банк', text: 'Кредиты на любой случай', buttonText: 'Рассчитать кредит', isDark: false,  link: `#${Anchor.CALCULATOR}`},
  {id: 2, name: 'confidence', title: 'Лига Банк', text: 'Ваша уверенность в\u00A0завтрашнем дне', isDark: true},
  {id: 3, name: 'branches', title: 'Лига Банк', text: 'Всегда рядом', buttonText: 'Найти отделение', isDark: true, link: `#${Anchor.MAP}`},
];

export default function Slider({styles = ''}) {
  return (
    <section css={styles}>
      <h2 className='visually-hidden'>Уникальные предложения от Лига Банка</h2>
      <Swiper
        centeredSlides
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{clickable: true}}
        preloadImages={false}
      >
        {slides.map((slide) => (
          <SwiperSlide key={`${slide.id}-${slide.name}`}>
            <Slide
              data={slide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

Slider.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};


