import { useSliderData, useCustomersData } from '../../../context/FetchDataContext';
import CertifiedContainer from './Certified';
import SliderCard from '../../UI/cards/SliderCard';
import styles from './Quality.module.scss';

const QualityContainer = () => {
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
        </section>
    )
};

export default QualityContainer;