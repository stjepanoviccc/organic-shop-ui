import { useState } from 'react';
import useInput from '../../custom_hooks/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './ReviewForm.module.scss';

const ReviewForm = ({ data }) => {
    const {
        value: enteredName, error: nameInputIsInvalid, valid: nameIsValid,
        valueChangeHandler: nameChangeHandler, valueBlurHandler: nameBlurHandler, reset: resetNameInput
    } = useInput(value => (value.length > 3 && value.length < 30) && (value[0] === value[0].toUpperCase()));

    const {
        value: enteredEmail, error: emailInputIsInvalid, valid: emailIsValid,
        valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler, reset: resetEmailInput
    } = useInput(value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

    const {
        value: enteredReview, error: reviewInputIsInvalid, valid: reviewIsValid,
        valueChangeHandler: reviewChangeHandler, valueBlurHandler: reviewBlurHandler, reset: resetReviewInput
    } = useInput(value => value.length > 10 && value.length < 100);

    let formIsValid = false;
    if (nameIsValid && emailIsValid && reviewIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(enteredName);
        console.log(enteredEmail)
        console.log(enteredReview);
        resetNameInput();
        resetEmailInput();
        resetReviewInput();
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
                <div className={styles.starWrap}>{starIcons}</div>
            </div>
            <div className={styles.formContentWrap}>
                <p className={styles.formText}>Your Review *</p>
                <textarea value={enteredReview} className={styles.formTextArea} onChange={reviewChangeHandler} onBlur={reviewBlurHandler}></textarea>
                {reviewInputIsInvalid && <p className={styles.formErrorMsg}>Review must be between 3 and 100 characters length!</p>}
            </div>
            <div className={styles.formNameAndEmailWrap}>
                <div className={styles.formContentWrap}>
                    <p className={styles.formText}>Name *</p>
                    <input value={enteredName} className={styles.formInput} type="text" onChange={nameChangeHandler} onBlur={nameBlurHandler}></input>
                    {nameInputIsInvalid && <p className={styles.formErrorMsg}>Name must be between 3 and 30 characters length and first letter must be uppercase!</p>}
                </div>
                <div className={styles.formContentWrap}>
                    <p className={styles.formText}>Email *</p>
                    <input value={enteredEmail} className={styles.formInput} type="text" onChange={emailChangeHandler} onBlur={emailBlurHandler}></input>
                    {emailInputIsInvalid && <p className={styles.formErrorMsg}>Email must be in format simple@email.com</p>}
                </div>
            </div>
            <div className={styles.formCheckboxWrap}>
                <input type="checkbox"></input>
                <p className={styles.checkboxText}>Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <GreenButton disabled={!formIsValid} class={true}>SUBMIT</GreenButton>
        </form>
    )
};

export default ReviewForm;