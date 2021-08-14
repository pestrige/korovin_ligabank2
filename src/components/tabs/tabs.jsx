/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TabSlider from './tab-slider';
import TabsList from './tabs-list';

export default function Tabs({styles = ''}) {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (sw) => {
    setActiveSlide(sw.activeIndex);
  };
  const slideTo = (index) => {
    if (swiper) {
      setActiveSlide(index);
      swiper.slideTo(index);
    }
  };
  const handleTabClick = (index) => slideTo(index);

  return (
    <section css={styles}>
      <h2 className='visually-hidden'>Услуги Лига Банка</h2>
      <TabsList
        onTabClick={handleTabClick}
        activeSlide={activeSlide}
      />
      <TabSlider
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
      />
    </section>
  );
}

Tabs.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
