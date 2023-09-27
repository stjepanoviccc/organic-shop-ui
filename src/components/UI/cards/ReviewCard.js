import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './ReviewCard.module.scss';

const ReviewCard = ({ data, index }) => {
    const starIcons = Array.from({ length: data.rating }).map((_, index) => (
        <FontAwesomeIcon key={index} className={styles.cardStar} icon={faStar} />
    ));

    return (
        <div className={styles.reviewCard}>
            <div className={styles.reviewCardImageHolder}>
                <img className={styles.reviewCardImage} src={handleImage(data.image)} alt={`review${index}`}></img>
            </div>
            <div className={styles.reviewCardContentHolder}>
                <p className={styles.reviewCardName}>{data.name}</p>
                <div className={styles.reviewCardRatingHolder}>
                    {starIcons}
                </div>
                <p className={styles.reviewCardReview}>{data.review}</p>
            </div>
        </div>
    )
};

export default ReviewCard;

// handle image from firebase
const handleImage = (url) => {
    const isLocalhost = window.location.href.includes('localhost');
    const modifiedUrl = isLocalhost ? `${process.env.PUBLIC_URL}/static/images/${url}` : `./static/images/${url}`
    return modifiedUrl;
};