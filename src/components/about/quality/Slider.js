import { Swiper, SwiperSlide } from "swiper/react";
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
    <>
      <Swiper loop={true} className="slider">
        {sliderImages}
      </Swiper>
    </>
  );
};

// custom hook couldn't be called inside callback and thats reason why i copied exactly same code
const copiedImagePathHandler = (baseUrl) => {
  const fileId = baseUrl.match(/\/file\/d\/([^/]+)/)[1];
  const newUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
  return newUrl;
};

export default Slider;