import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './ReviewForm.module.scss';

const ReviewForm = ({ data }) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredReview, setEnteredReview] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [reviewIsValid, setReviewIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const nameChangeHandler = (event) => {
        const newName = event.target.value
        setEnteredName(newName);
        const isValid = (newName.length > 3 && newName.length < 30) && (newName[0] === newName[0].toUpperCase());
        setNameIsValid(isValid);
    };

    const emailChangeHandler = (event) => {
        const newEmail = event.target.value;
        setEnteredEmail(newEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(newEmail);
        setEmailIsValid(isValid);
    };

    const reviewChangeHandler = (event) => {
        const reviewMessage = event.target.value;
        setEnteredReview(reviewMessage);
        const isValid = reviewMessage.length > 10 && reviewMessage.length < 100;
        setReviewIsValid(isValid);
    };

    useEffect(() => {
        if (nameIsValid && emailIsValid && reviewIsValid) {
          setFormIsValid(true);
        } else {
          setFormIsValid(false);
        }
      }, [nameIsValid, emailIsValid, reviewIsValid]);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(`${enteredName} + ${nameIsValid}`)
        console.log(`${enteredEmail} + ${emailIsValid}`)
        console.log(`${enteredReview} + ${reviewIsValid}`)
        console.log(formIsValid);
    }

    // rating star logic
    const [hoveredStar, setHoveredStar] = useState(null);
    const handleStarHover = (index) => {
        setHoveredStar(index);
    };
    const handleStarLeave = () => {
        setHoveredStar(null);
    };
    const starIcons = Array.from({ length: 5 }).map((_, index) => (
        <button key={index} className={styles.starIconButton} onMouseEnter={() => handleStarHover(index)} onMouseLeave={handleStarLeave} onClick={() => console.log(index + 1)}>
            <FontAwesomeIcon className={styles.starIcon} icon={hoveredStar === null ? faRegularStar : index <= hoveredStar ? faSolidStar : faRegularStar} />
        </button>
    ));

    return (
        <form onSubmit={formSubmitHandler} className={styles.reviewForm}>
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
                <textarea className={styles.formTextArea} onBlur={reviewChangeHandler}></textarea>
            </div>
            <div className={styles.formNameAndEmailWrap}>
                <div className={styles.formContentWrap}>
                    <p className={styles.formText}>Name *</p>
                    <input className={styles.formInput} type="text" onBlur={nameChangeHandler}></input>
                </div>
                <div className={styles.formContentWrap}>
                    <p className={styles.formText}>Email *</p>
                    <input className={styles.formInput} type="text" onBlur={emailChangeHandler}></input>
                </div>
            </div>
            <div className={styles.formCheckboxWrap}>
                <input type="checkbox"></input>
                <p>Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <GreenButton disabled={!formIsValid} class={true}>SUBMIT</GreenButton>
        </form>
    )
};

export default ReviewForm;