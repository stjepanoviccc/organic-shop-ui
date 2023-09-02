import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './ReviewForm.module.scss';

const ReviewForm = ({ data }) => {
    const [hoveredStar, setHoveredStar] = useState(null);

    const handleStarHover = (index) => {
        setHoveredStar(index);
    };

    const handleStarLeave = () => {
        setHoveredStar(null);
    };

    const starIcons = Array.from({ length: 5 }).map((_, index) => (
        <button key={index} className={styles.starIconButton} onMouseEnter={() => handleStarHover(index)} onMouseLeave={handleStarLeave} onClick={() => console.log(index + 1)}>
            <FontAwesomeIcon
                className={styles.starIcon}
                icon={hoveredStar === null ? faRegularStar : index <= hoveredStar ? faSolidStar : faRegularStar} />
        </button>
    ));

    return (
        <div className={styles.reviewForm}>
            <div className={styles.formContentWrap}>
                <h3 className={styles.formTitle}>
                    {data.reviews === undefined && `Be the first to review "${data.title}"`}
                    {data.reviews !== undefined && `Leave your review about "${data.title}"`}
                </h3>
                <p className={styles.formMessage}>Your email address will not be published. Required fields are marked *</p>
            </div>
            <div className={styles.formRatingWrap}>
                <p className={styles.formText}>Your Rating *</p>
                <div className={styles.starWrap}>
                    {starIcons}
                </div>
            </div>
            <div className={styles.formContentWrap}>
                <p className={styles.formText}>Your Review *</p>
                <textarea className={styles.formTextArea}></textarea>
            </div>
            <div className={styles.formNameAndEmailWrap}>
                <div className={styles.formContentWrap}>
                    <p className={styles.formText}>Name *</p>
                    <input className={styles.formInput} type="text"></input>
                </div>
                <div className={styles.formContentWrap}>
                    <p className={styles.formText}>Email *</p>
                    <input className={styles.formInput} type="text"></input>
                </div>
            </div>
            <div className={styles.formCheckboxWrap}>
                <input type="checkbox"></input>
                <p>Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <GreenButton class={true}>SUBMIT</GreenButton>
        </div>
    )
};

export default ReviewForm;