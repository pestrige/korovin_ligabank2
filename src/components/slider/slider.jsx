import React from 'react';
import SwiperCore, {Autoplay, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Slide from './slide';

SwiperCore.use([Autoplay, Pagination]);

const slides = [
  {id: 1, name: 'credits', title: 'Лига Банк', text: 'Кредиты на любой случай', buttonText: 'Рассчитать кредит', isDark: false,  link: '/#'},
  {id: 2, name: 'confidence', title: 'Лига Банк', text: 'Ваша уверенность в\u00A0завтрашнем дне', isDark: true},
  {id: 3, name: 'branches', title: 'Лига Банк', text: 'Всегда рядом', buttonText: 'Найти отделение', isDark: true, link: '/#'},
];

export default function Slider() {
  return (
    <Swiper
      centeredSlides
      // autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{clickable: true}}
    >
      {slides.map((slide) => (
        <SwiperSlide key={`${slide.id}-${slide.name}`}>
          <Slide
            data={slide}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


