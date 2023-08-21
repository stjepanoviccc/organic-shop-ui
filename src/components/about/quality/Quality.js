import CertifiedContainer from './Certified';
import SliderCard from '../../UI/cards/SliderCard';
import styles from './Quality.module.scss';

const QualityContainer = () => {
    return (
        <section className={styles.qualitySection}>
            <div className={styles.mainWrap}>
                <div className={styles.qualityWrap}>
                    <div className={styles.qualitySliderWrap}>
                        <SliderCard />
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