import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import Slider from '../../about/quality/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './SliderCard.module.scss';

const SliderCard = () => {
    const personImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/client02-free-img.png`, './static/media/client02-free-img.png');

    return (
        <div className={styles.sliderCardContainer}>
            <div className={styles.sliderCard}>
                <div className={styles.sliderHolder}>
                    <Slider />
                </div>
                <div className={`${styles.cardContentHolder} ${styles.cardContentHolderExt}`}>
                    <div className={styles.cardStarHolder}>
                        <FontAwesomeIcon className={styles.cardStar} icon={faStar} />
                        <FontAwesomeIcon className={styles.cardStar} icon={faStar} />
                        <FontAwesomeIcon className={styles.cardStar} icon={faStar} />
                        <FontAwesomeIcon className={styles.cardStar} icon={faStar} />
                        <FontAwesomeIcon className={styles.cardStar} icon={faStar} />
                    </div>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className={styles.cardPersonInfo}>
                        <img src={personImg} alt="person-img" />
                        <p>Mila Kunis</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SliderCard;