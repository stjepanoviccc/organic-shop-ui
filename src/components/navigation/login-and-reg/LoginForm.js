import { useState, useRef } from 'react';
import { useUsersMap } from '../../../context/FetchDataContext';
import { useRegisterModalUpdate } from '../../../context/RegisterModalContext';
import { authActions } from '../../../store';
import { useDispatch } from 'react-redux';
import GreenButton from '../../UI/buttons/GreenButton';
import styles from './LoginAndRegForm.module.scss';

const LoginForm = ({ toggle }) => {
    const toggleRegisterModal = useRegisterModalUpdate();
    const openRegistrationModal = () => {
        toggleRegisterModal();
        toggle();
    }

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const usersMap = useUsersMap();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();

    const localStorageRemoveHandler = (check) => {
        if (localStorage.getItem(check)) {
            localStorage.removeItem(check);
        };
    };

    const saveUserData = () => {
        localStorage.setItem('authToken', true);
        localStorage.setItem('loggedName', usernameRef.current.value);
        localStorage.setItem('loggedEmail', usersMap.get(usernameRef.current.value)[1]);
        localStorageRemoveHandler('reviewFormName');
        localStorageRemoveHandler('reviewFormEmail');
    }

    const loginSubmitHandler = (event) => {
        event.preventDefault();
        if (usersMap.has(usernameRef.current.value)) {
            setUsernameError(false);
            if (passwordRef.current.value === usersMap.get(usernameRef.current.value)[0]) {
                setPasswordError(false);
                localStorageRemoveHandler('authToken');
                saveUserData();
                dispatch(authActions.login());
                toggle();
            } else {
                setPasswordError(true);
            }
        } else {
            setUsernameError(true);
            setPasswordError(false);
        }
    }

    return (
        <form onSubmit={loginSubmitHandler} className={styles.form}>
            <div className={styles.formNameHolder}>
                <p className={styles.formText}>Username *</p>
                <input ref={usernameRef} className={styles.formInput} type="text"></input>
                {usernameError && <p className={styles.formErrorMsg}>Username doesn't exist.</p>}
            </div>
            <div className={styles.formPasswordHolder}>
                <p className={styles.formText}>Password *</p>
                <input ref={passwordRef} className={styles.formInput} type="password"></input>
                {passwordError && <p className={styles.formErrorMsg}>Invalid password.</p>}
            </div>
            <div className={styles.formSubmitHolder}>
                <GreenButton class={true} type="submit">Log in</GreenButton>
                <p className={styles.noAccText}>You don't have account?<br></br>
                    <button type="button" className={styles.noAccButtonText} onClick={openRegistrationModal}>Click here to register</button>
                </p>
            </div>
        </form>
    )
};

export default LoginForm;