import { Link } from 'react-router-dom';
import Sale from '../Sale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import styles from './ProductCard.module.scss';

const ProductCard = (props) => {
    const priceFixed = (props.data.discount > 0) ? (props.data.price - props.data.discount).toFixed(2) : props.data.price.toFixed(2);
    const starIcons = Array.from({ length: 5 }).map((_, index) => (
        <FontAwesomeIcon key={index} className={styles.cardStar} icon={faStar} />
    ));

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={styles.card} id={props.data.id}>
            <Link onClick={scrollToTop} to={`/product/${props.data.query}`}><img className={styles.cardImg} src={props.data.image} alt="product-card-img" /></Link>
            <div className={styles.cardContentHolder}>
                <h5 className={styles.cardCategory}>{props.data.category}</h5>
                <Link onClick={scrollToTop} to={`/product/${props.data.query}`}><h4 className={styles.cardTitle}>{props.data.title}</h4></Link>
                <div className={styles.cardStarsWrap}>
                    {starIcons}
                </div>
                <p className={styles.cardPrice}>
                    {props.data.discount > 0 && <small className={styles.cardOldPrice}>{props.data.price.toFixed(2)}$</small>}
                    {priceFixed}$
                </p>
            </div>
            {props.data.discount > 0 && <Sale />}
        </div>
    )
};

export default ProductCard;