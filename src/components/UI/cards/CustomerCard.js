import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './CustomerCard.module.scss';

const CustomerCard = (props) => {
    const starIcons = Array.from({ length: props.data.stars }).map((_, index) => (
        <FontAwesomeIcon key={index} className={styles.cardStar} icon={faStar} />
    ));

    return (
        <div className={styles.customerCard}>
            <div className={styles.cardStarHolder}>
                {starIcons}
            </div>
            <p className={styles.cardContentHolder}>{props.data.info}</p>
            <div className={styles.cardPersonInfo}>
                <img src={props.data.image} alt="person-img" />
                <p>{props.data.name}</p>
            </div>
        </div>
    )
};

export default CustomerCard;