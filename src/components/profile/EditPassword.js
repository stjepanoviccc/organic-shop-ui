import { useState, useEffect } from 'react';
import useInput from '../../custom_hooks/input';
import { useUsersMap } from '../../context/FetchDataContext';
import Modal from '../UI/Modal';
import CloseButton from '../UI/buttons/CloseButton';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './PassAndPayment.module.scss';

const EditPasswordModal = ({ username, toggle }) => {
    const usersMap = useUsersMap();
    const [userId, setUserId] = useState(null);
    const [passwordError, setPasswordError] = useState(false);

    const {
        value: newPassword, error: newPasswordInputIsInvalid,
        valueChangeHandler: newPasswordChangeHandler, valueBlurHandler: newPasswordBlurHandler, reset: resetNewPasswordInput
    } = useInput(value => value.length >= 8 && value.length <= 30);

    const {
        value: newPassword_2, error: newPasswordInputIsInvalid_2,
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
                const response = await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/key${userId}/password.json`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify(newPassword_2),
                });
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                resetNewPasswordInput();
                resetNewPasswordInput_2();
                toggle();
            } catch (error) {
                console.error('Fetch Error:', error);
            }
        }
    }

    return (
        <Modal>
            <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>Edit Password</h2>
                <CloseButton close={toggle} style={{ paddingTop: '15px' }} />
            </div>
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
                    <GreenButton class={true} style={{ marginTop: '10px' }} type="submit">Confirm</GreenButton>
                </form>
            </div>
        </Modal>
    )
}

export default EditPasswordModal;