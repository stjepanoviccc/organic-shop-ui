import Slider from '../../about/quality/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './SliderCard.module.scss';

const SliderCard = ({sliderData, customersData}) => {
    const personImg = customersData.image;
    const starIcons = Array.from({ length: customersData.stars }).map((_, index) => (
        <FontAwesomeIcon key={index} className={styles.cardStar} icon={faStar} />
    ));

    return (
        <div className={styles.sliderCardContainer}>
            <div className={styles.sliderCard}>
                <div className={styles.sliderHolder}>
                    <Slider sliderData={sliderData} />
                </div>
                <div className={`${styles.cardContentHolder} ${styles.cardContentHolderExt}`}>
                    <div className={styles.cardStarHolder}>
                        {starIcons}
                    </div>
                    <p>{customersData.info}</p>
                    <div className={styles.cardPersonInfo}>
                        <img src={personImg} alt="person-img" />
                        <p>{customersData.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SliderCard;