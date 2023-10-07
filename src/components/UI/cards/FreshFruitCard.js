import { Link } from 'react-router-dom';
import GreenButton from '../buttons/GreenButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './FreshFruitCard.module.scss';

const FreshFruitCard = (props) => {

    return (
        <div className={styles.freshCard}>
            <div className={styles.cardContentHolder}>
                <h3 className={styles.cardTitle}>{props.data.title}</h3>
                <p className={styles.cardText}>{props.data.text}</p>
                <Link to="/shop" style={{ width: '170px' }}>
                    <GreenButton>
                        <FontAwesomeIcon icon={faArrowRight} />Shop now
                    </GreenButton>
                </Link>
            </div>
            <img src={props.data.image} className={styles.fruitImg} alt="fresh-fruit-img" />
        </div>
    )
};

export default FreshFruitCard;