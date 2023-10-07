import { Link } from 'react-router-dom';
import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import GreenButton from '../buttons/GreenButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './AdsCard.module.scss';

const AdsCard = () => {
    const bgImageUrl = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/organic-food-card-img-min.jpg`, './static/images/organic-food-card-img-min.jpg');
    const bgImageStyle = {
        backgroundImage: `url(${bgImageUrl})`,
    };

    return (
        <div className={styles.adsCard} style={bgImageStyle}>
            <div className={styles.adsOverlay}></div>
            <div className={styles.adsContent}>
                <div className={styles.contentHolder}>
                    <p className={styles.importantText}>
                        Deal Of The Day 15% Off On All Vegetables!</p>
                    <p className={styles.text}>I am text block. Click edit button to change this tex em ips.</p>
                </div>
                <Link to="/shop" style={{ width: '170px' }}>
                    <GreenButton>
                        <FontAwesomeIcon icon={faArrowRight} />Shop now
                    </GreenButton>
                </Link>
            </div>
        </div>

    )
};

export default AdsCard;