import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import Sale from '../Sale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import styles from './ProductCard.module.scss';

const ProductCard = ({ sale }) => {
    const img = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/products/coffee-asorted.jpg`, './static/media/products/coffee-asorted.jpg');

    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={img} alt="product-card-img" />
            <div className={styles.cardContent}>
                <h5 className={styles.cardCategory}>Groceries</h5>
                <h4 className={styles.cardTitle}>Assorted Coffee</h4>
                <div className={styles.cardStarsWrap}>
                    <FontAwesomeIcon icon={faStar} className={styles.cardStars} size="sm" />
                    <FontAwesomeIcon icon={faStar} className={styles.cardStars} size="sm" />
                    <FontAwesomeIcon icon={faStar} className={styles.cardStars} size="sm" />
                    <FontAwesomeIcon icon={faStar} className={styles.cardStars} size="sm" />
                    <FontAwesomeIcon icon={faStar} className={styles.cardStars} size="sm" />
                </div>
                <p className={styles.cardPrice}>35.00$</p>
            </div>
            {sale && <Sale />}
        </div>
    )
};

export default ProductCard;