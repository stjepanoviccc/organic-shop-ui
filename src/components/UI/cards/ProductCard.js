import useImagePathHandler from '../../../custom_hooks/ImagePathHandler';
import Sale from '../Sale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import styles from './ProductCard.module.scss';

const ProductCard = (props) => {
    const img = useImagePathHandler(props.data.image);
    const priceFixed = (props.data.discount > 0) ? (props.data.price - props.data.discount).toFixed(2) : props.data.price.toFixed(2);
    const starIcons = Array.from({ length: 5 }).map((_, index) => (
        <FontAwesomeIcon key={index} className={styles.cardStar} icon={faStar} />
    ));

    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={img} alt="product-card-img" />
            <div className={styles.cardContentHolder}>
                <h5 className={styles.cardCategory}>{props.data.category}</h5>
                <h4 className={styles.cardTitle}>{props.data.title}</h4>
                <div className={styles.cardStarsWrap}>
                    {starIcons}
                </div>
                <p className={styles.cardPrice}>
                {props.data.discount > 0 &&<small className={styles.cardOldPrice}>{props.data.price.toFixed(2)}$</small> }
                    {priceFixed}$
                </p>
            </div>
            {props.data.discount > 0 && <Sale />}
        </div>
    )
};

export default ProductCard;