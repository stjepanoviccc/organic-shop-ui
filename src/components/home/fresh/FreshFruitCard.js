import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import GreenButton from '../../UI/buttons/GreenButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './FreshFruitCard.module.scss';

const FreshFruitCard = () => {
    const fruitImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/products/product11-free-img.jpg`, './static/media/products/product11-free-img.jpg');

    return (
        <div className={styles.freshCard}>
            <div className={styles.freshCardBody}>
                <h3 className={styles.freshCardTitle}>Farm Fresh Fruits</h3>
                <p className={styles.freshCardContent}>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
                <GreenButton class={true}>
                    Shop Now
                    <FontAwesomeIcon className={styles.arrowIcon} icon={faArrowRight} />
                </GreenButton>
            </div>
            <img src={fruitImg} className={styles.fruitImg} alt="fresh-fruit-img" />
        </div>
    )
};

export default FreshFruitCard;