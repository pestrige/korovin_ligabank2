import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import TabSlide from './tab-slide';
import {slides} from './data';
import 'swiper/swiper-bundle.min.css';
import './tab-slider.scss';
import styled from '@emotion/styled';

SwiperCore.use([Pagination]);
const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

export default function TabSlider({onSwiper, onSlideChange}) {
  return (
    <Wrapper>
      <Swiper
        containerModifierClass='swiper-tabs-container-'
        onSwiper={onSwiper}
        centeredSlides
        pagination={{clickable: true}}
        onSlideChange={onSlideChange}
        breakpoints={{
          320: {
            allowTouchMove: true,
          },
          1023: {
            allowTouchMove: false,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={`${slide.id}-${slide.name}`}>
            <TabSlide
              data={slide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}

TabSlider.propTypes = {
  onSwiper: PropTypes.func,
  onSlideChange: PropTypes.func,
};
