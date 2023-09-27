import { useState } from 'react';
import useInput from '../../../custom_hooks/input';
import { useUsersMap, useUsersEmailMap, useAddNewUser } from '../../../context/FetchDataContext';
import GreenButton from '../../UI/buttons/GreenButton';
import styles from './LoginAndRegForm.module.scss';
import { useRegisterModalUpdate } from '../../../context/RegisterModalContext';

const RegisterForm = ({changeTitle}) => {
    const usersMap = useUsersMap()
    const usersEmailMap = useUsersEmailMap();
    const addNewUser = useAddNewUser();
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const toggleRegisterModal = useRegisterModalUpdate();

    const {
        value: enteredName, error: nameInputIsInvalid, valid: nameIsValid,
        valueChangeHandler: nameChangeHandler, valueBlurHandler: nameBlurHandler, reset: resetNameInput,
        valueExistHandler: nameExistHandler, existError: nameExistError
    } = useInput(value => (value.trim().length >= 3 && value.trim().length <= 30) && (value[0] === value[0].toUpperCase()));

    const {
        value: enteredPassword, error: passwordInputIsInvalid, valid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler, valueBlurHandler: passwordBlurHandler, reset: resetPasswordInput
    } = useInput(value => value.length >= 8 && value.length <= 30);

    const {
        value: enteredEmail, error: emailInputIsInvalid, valid: emailIsValid,
        valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler, reset: resetEmailInput,
        valueExistHandler: emailExistHandler, existError: emailExistError
    } = useInput(value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

    const registerSubmitHandler = async (event) => {
        event.preventDefault();
        if (usersMap.has(enteredName)) {
            nameExistHandler(true);
            return;
        }
        else if (usersEmailMap.has(enteredEmail)) {
            emailExistHandler(true);
            return;
        }
        else {
            const user = {
                username: enteredName.trim(),
                email: enteredEmail,
                password: enteredPassword,
                image: 'profile-img-min.jpg',
                id: enteredName.trim()
            }
            // send user to firebase
            try {
                const response = await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/${enteredName.trim()}.json`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify(user),
                });
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                addNewUser(user);
            } catch (error) {
                console.error('Fetch Error:', error);
            }

            resetNameInput();
            resetEmailInput();
            resetPasswordInput();
            changeTitle('Registration completed!')
            toggleRegisterSuccess(true);
        }
    }

    const successMsgHandler = (event) => {
        event.preventDefault();
        toggleRegisterModal();
    }

    let formIsValid = false;
    if (nameIsValid && passwordIsValid && emailIsValid) {
        formIsValid = true;
    }

    return (
        <form className={styles.form} onSubmit={registerSuccess ? successMsgHandler : registerSubmitHandler}>
            {!registerSuccess && (
                <>
                    <div className={styles.formNameHolder}>
                        <p className={styles.formText}>Username *</p>
                        <input value={enteredName} className={styles.formInput} type="text" onChange={nameChangeHandler} onBlur={nameBlurHandler}></input>
                        {nameInputIsInvalid && <p className={styles.formErrorMsg}>Username must be between 3 and 30 characters length and first letter must be uppercase!</p>}
                        {nameExistError && <p className={styles.formErrorMsg}>Username already taken!</p>}
                    </div>
                    <div className={styles.formPasswordHolder}>
                        <p className={styles.formText}>Password *</p>
                        <input value={enteredPassword} className={styles.formInput} type="password" onChange={passwordChangeHandler} onBlur={passwordBlurHandler}></input>
                        {passwordInputIsInvalid && <p className={styles.formErrorMsg}>Password must be between 8 and 30 characters length!</p>}
                    </div>
                    <div className={styles.formEmailHolder}>
                        <p className={styles.formText}>Email *</p>
                        <input value={enteredEmail} className={styles.formInput} type="text" onChange={emailChangeHandler} onBlur={emailBlurHandler}></input>
                        {emailInputIsInvalid && <p className={styles.formErrorMsg}>Email must be in format simple@email.com</p>}
                        {emailExistError && <p className={styles.formErrorMsg}>Email already taken!</p>}
                    </div>
                    <div className={styles.formSubmitHolder}>
                        <GreenButton disabled={!formIsValid} class={true} type="submit">Register</GreenButton>
                    </div>
                </>
            )}
            {registerSuccess && (
                <div className={styles.formSuccessMsgHolder}>
                    <p className={styles.formText}>Registration was completed successfully!</p>
                    <p className={styles.formText}>You can close this window now.</p>
                </div>
            )}
        </form>
    )
};

export default RegisterForm;