import Slider from '../Slider';
import styles from './SliderCard.module.scss';

const SliderCard = () => {
    return (
        <div className={styles.sliderCard}>
            <div className={styles.sliderHolder}>
                <Slider />
            </div>
            <div className={styles.cardContentHolder}>
                <p>Stars</p>
                <p>Txt</p>
                <p>Icon</p>
            </div>
        </div>
    )
};

export default SliderCard;