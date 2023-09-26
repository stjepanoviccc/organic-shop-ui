import { useSliderData, useCustomersData } from '../../../context/FetchDataContext';
import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import CertifiedContainer from './Certified';
import SliderCard from '../../UI/cards/SliderCard';
import styles from './Quality.module.scss';

const QualityContainer = () => {
    const bgImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/leaves-free-img-min.png`, './static/images/leaves-free-img-min.png');
    const sliderData = useSliderData();
    const customersData = useCustomersData();

    return (
        <section className={styles.qualitySection}>
            <div className={styles.mainWrap}>
                <div className={styles.qualityWrap}>
                    <div className={styles.qualitySliderWrap}>
                        {sliderData.length > 0 && <SliderCard sliderData={sliderData} customersData={customersData[0]} /> }
                    </div>
                    <div className={styles.certifiedWrap}>
                        <CertifiedContainer />
                    </div>
                </div>
            </div>
            <img src={bgImage} alt="leaf-bg-img" className={`${styles.mainBgImage} ${styles.mainBgImageExt}`}></img>
        </section>
    )
};

export default QualityContainer;