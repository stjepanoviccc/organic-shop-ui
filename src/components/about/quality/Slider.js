import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Slider.module.scss';
import "swiper/css";

const Slider = ({ sliderData }) => {

  const sliderImages = sliderData.map((slide, index) => (
    <SwiperSlide key={index}>
      <img className={styles.slideImg} src={slide.image} alt={`slider-img-${index + 1}`} />
    </SwiperSlide>
  ));

  return (
    <Swiper loop={true} >
      {sliderImages}
    </Swiper>
  );
};

export default Slider;