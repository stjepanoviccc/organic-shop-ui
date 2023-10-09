import { useState, useEffect } from 'react';
import useInput from '../../custom_hooks/input';
import { useUsersMap } from '../../context/FetchDataContext';
import Modal from '../UI/Modal';
import CloseButton from '../UI/buttons/CloseButton';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './EditPassword.module.scss';

const EditPasswordModal = ({ username, toggle }) => {
    const usersMap = useUsersMap();
    const [userId, setUserId] = useState(null);
    const [title, setTitle] = useState("Edit Password");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordChangeSuccess, togglePasswordChangeSuccess] = useState(false);

    const {
        value: newPassword, error: newPasswordInputIsInvalid, valid: newPasswordIsValid,
        valueChangeHandler: newPasswordChangeHandler, valueBlurHandler: newPasswordBlurHandler, reset: resetNewPasswordInput
    } = useInput(value => value.length >= 8 && value.length <= 30);

    const {
        value: newPassword_2, error: newPasswordInputIsInvalid_2, valid: newPassword_2IsValid,
        valueChangeHandler: newPasswordChangeHandler_2, valueBlurHandler: newPasswordBlurHandler_2, reset: resetNewPasswordInput_2
    } = useInput(value => value.length >= 8 && value.length <= 30);

    useEffect(() => {
        setPasswordError(false);
    }, [newPassword, newPassword_2])

    useEffect(() => {
        if (usersMap.get(username)) {
            setUserId(prev => usersMap.get(username)[3]);
        }
    }, [username, usersMap]);

    const changePasswordHandler = async (event) => {
        event.preventDefault();
        if (newPassword !== newPassword_2) {
            setPasswordError(true);
        } else {
            try {
                const response = await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/${userId}/password.json`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify(newPassword_2),
                });
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                resetNewPasswordInput();
                resetNewPasswordInput_2();
                togglePasswordChangeSuccess(prev => !prev);
                setTitle(prev => "Password Change Completed!");
            } catch (error) {
                console.error('Fetch Error:', error);
            }
        }
    }

    let formIsValid = false;
    if (newPasswordIsValid && newPassword_2IsValid) {
        formIsValid = true;
    }

    return (
        <Modal>
            <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{title}</h2>
                <CloseButton close={toggle} style={{ paddingTop: '15px' }} />
            </div>
            {!passwordChangeSuccess && (
                <>
                    <div className={styles.modalBody}>
                        <form className={styles.form} onSubmit={changePasswordHandler}>
                            <div className={styles.formInputHolder}>
                                <p className={styles.formText}>New password *</p>
                                <input value={newPassword} className={styles.formInput} type="password" onChange={newPasswordChangeHandler} onBlur={newPasswordBlurHandler}></input>
                                {newPasswordInputIsInvalid && <p className={styles.formErrorMsg}>Password must be between 8 and 30 characters length!</p>}
                            </div>
                            <div className={styles.formInputHolder}>
                                <p className={styles.formText}>Confirm new password *</p>
                                <input value={newPassword_2} className={styles.formInput} type="password" onChange={newPasswordChangeHandler_2} onBlur={newPasswordBlurHandler_2}></input>
                                {newPasswordInputIsInvalid_2 && <p className={styles.formErrorMsg}>Password must be between 8 and 30 characters length!</p>}
                                {passwordError && <p className={styles.formErrorMsg}>Passwords do not match.</p>}
                            </div>
                            <GreenButton disabled={!formIsValid} class={true} style={{ marginTop: '10px' }} type="submit">Confirm</GreenButton>
                        </form>
                    </div>
                </>
            )}
            {passwordChangeSuccess && (
                <>
                    <div className={styles.formSuccessMsgHolder}>
                        <p className={styles.formText}>Password change was completed successfully!</p>
                        <p className={styles.formText}>You can close this window now.</p>
                    </div>
                </>
            )}
        </Modal>
    )
}

export default EditPasswordModal;