import { Swiper, SwiperSlide } from "swiper/react";
import { copiedImagePathHandler } from '../../../context/FetchDataContext';
import styles from './Slider.module.scss';
import "swiper/css";

const Slider = ({ sliderData }) => {
  const modifiedSliderData = sliderData.map(item => {
    return {
      image: copiedImagePathHandler(item.image),
    };
  });

  const sliderImages = modifiedSliderData.map((slide, index) => (
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