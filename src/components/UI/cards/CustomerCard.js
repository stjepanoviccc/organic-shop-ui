import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './CustomerCard.module.scss';

const CustomerCard = () => {
    const personImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/client02-free-img.png`, './static/media/client02-free-img.png');

    return (
        <div className={styles.customerCard}>
            <div className={styles.cardStarHolder}>
                <FontAwesomeIcon className={styles.star} icon={faStar} />
                <FontAwesomeIcon className={styles.star} icon={faStar} />
                <FontAwesomeIcon className={styles.star} icon={faStar} />
                <FontAwesomeIcon className={styles.star} icon={faStar} />
                <FontAwesomeIcon className={styles.star} icon={faStar} />
            </div>
            <p className={styles.cardContentHolder}>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className={styles.personInfo}>
                <img src={personImg} alt="person-img" />
                <p>Mila Kunis</p>
            </div>
        </div>
    )
};

export default CustomerCard;