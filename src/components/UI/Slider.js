import { Swiper, SwiperSlide } from "swiper/react";
import useCheckImagePath from "../../custom_hooks/CheckImagePath";
import styles from './Slider.module.scss';
import "swiper/css";

const Slider = () => {
  const slideImg1 = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/slider/slide1.jpg`, './static/media/slider/slide1.jpg')
  const slideImg2 = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/slider/slide2.jpg`, './static/media/slider/slide2.jpg')
  const slideImg3 = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/slider/slide3.jpg`, './static/media/slider/slide3.jpg')
  const slideImg4 = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/slider/slide4.jpg`, './static/media/slider/slide4.jpg')

  return (
    <>
      <Swiper className="slider">
        <SwiperSlide><img className={styles.slideImg} src={slideImg1} alt="slider-img-1"></img></SwiperSlide>
        <SwiperSlide><img className={styles.slideImg} src={slideImg2} alt="slider-img-2"></img></SwiperSlide>
        <SwiperSlide><img className={styles.slideImg} src={slideImg3} alt="slider-img-3"></img></SwiperSlide>
        <SwiperSlide><img className={styles.slideImg} src={slideImg4} alt="slider-img-4"></img></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
