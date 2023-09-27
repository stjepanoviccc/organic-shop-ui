import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useAddNewReview, useProductsData } from '../../context/FetchDataContext';
import useInput from '../../custom_hooks/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './ReviewForm.module.scss';

const ReviewForm = ({ data }) => {
    const allProducts = useProductsData();
    const addNewReview = useAddNewReview();
    const isAuth = useSelector(state => state.auth.isAuth);

    const {
        value: enteredName, error: nameInputIsInvalid, valid: nameIsValid,
        valueChangeHandler: nameChangeHandler, valueBlurHandler: nameBlurHandler, reset: resetNameInput, valueChangeFromLocalStorage: nameChangeFromLocalStorage
    } = useInput(value => {
        const trimmedValue = value.trim();
        return (trimmedValue.length >= 3 && trimmedValue.length <= 30) && (value[0] === value[0].toUpperCase());
    });

    const {
        value: enteredEmail, error: emailInputIsInvalid, valid: emailIsValid,
        valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler, reset: resetEmailInput, valueChangeFromLocalStorage: emailChangeFromLocalStorage
    } = useInput(value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

    const {
        value: enteredReview, error: reviewInputIsInvalid, valid: reviewIsValid,
        valueChangeHandler: reviewChangeHandler, valueBlurHandler: reviewBlurHandler, reset: resetReviewInput
    } = useInput(value => value.trim().length >= 10 && value.trim().length <= 100);

    // rating star logic
    const [hoveredStar, setHoveredStar] = useState(null);
    const [clickedStar, setClickedStar] = useState(null);
    const handleStarClick = (index) => {
        setClickedStar(index);
    };
    const handleStarHover = (index) => {
        setHoveredStar(index);
    };
    const handleStarLeave = () => {
        setHoveredStar(null);
    };
    const starIcons = Array.from({ length: 5 }).map((_, index) => (
        <button type="button" key={index} className={styles.starIconButton} onMouseEnter={() => handleStarHover(index)} onMouseLeave={handleStarLeave} onClick={() => handleStarClick(index)}>
            <FontAwesomeIcon className={styles.starIcon}
                icon={hoveredStar === null && clickedStar === null ? faRegularStar
                    : hoveredStar === null && clickedStar !== null && index <= clickedStar ? faSolidStar
                        : index <= hoveredStar ? faSolidStar : faRegularStar} />
        </button>
    ));

    // checkbox -> remember name and mail
    const checkboxRef = useRef();
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const name = isAuth ? localStorage.getItem('loggedName') : localStorage.getItem('reviewFormName');
        const email = isAuth ? localStorage.getItem('loggedEmail') : localStorage.getItem('reviewFormEmail');
        if (name && email) {
            nameChangeFromLocalStorage(name);
            emailChangeFromLocalStorage(email);
        }
        // these will never change - lint warning
    }, [nameChangeFromLocalStorage, emailChangeFromLocalStorage, isAuth]);

    const handleRememberMeChange = () => {
        setRememberMe(prev => !prev);
    }

    // form submit
    let formIsValid = false;
    if (nameIsValid && emailIsValid && reviewIsValid && clickedStar !== null) {
        formIsValid = true;
    }

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const reviewData = {
            email: enteredEmail,
            name: enteredName.trim(),
            review: enteredReview.trim(),
            rating: clickedStar + 1,
            image: 'profile-img-min.jpg'
        };
        for (let product in allProducts) {
            if (allProducts[product].query === data.query) {
                try {
                    console.log(enteredName);
                    console.log(reviewData)
                    const response = await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/products/${allProducts[product].id}/reviews.json`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', },
                        body: JSON.stringify(reviewData),
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP Error! Status: ${response.status}`);
                    }
                    addNewReview(allProducts[product].id, reviewData);
                } catch (error) {
                    console.error('Fetch Error:', error);
                }
            }
        }

        if (rememberMe === true) {
            localStorage.setItem('reviewFormName', enteredName);
            localStorage.setItem('reviewFormEmail', enteredEmail);
        }

        resetNameInput();
        resetEmailInput();
        resetReviewInput();
        checkboxRef.checked = false;
    }

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
                <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange}></input>
                <p className={styles.checkboxText}>Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <GreenButton disabled={!formIsValid} class={true} type="submit">SUBMIT</GreenButton>
        </form>
    )
};

export default ReviewForm;