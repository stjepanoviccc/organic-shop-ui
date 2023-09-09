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

    useEffect(() => {
        if (usersMap.get(username)) {
            setUserId(prev => usersMap.get(username)[3]);
        }
    }, [username, usersMap]);

    const {
        value: newPassword, error: newPasswordInputIsInvalid,
        valueChangeHandler: newPasswordChangeHandler, valueBlurHandler: newPasswordBlurHandler, reset: resetNewPasswordInput
    } = useInput(value => value.length >= 8 && value.length <= 30);

    const {
        value: newPassword_2, error: newPasswordInputIsInvalid_2,
        valueChangeHandler: newPasswordChangeHandler_2, valueBlurHandler: newPasswordBlurHandler_2, reset: resetNewPasswordInput_2
    } = useInput(value => value.length >= 8 && value.length <= 30);

    const changePasswordHandler = async (event) => {
        event.preventDefault();
        if (newPassword !== newPassword_2) {
            console.log('nije izbacicu tu neki error message');
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
            <div className={styles.editPasswordHeader}>
                <h2 className={styles.editPasswordTitle}>Edit Password</h2>
                <CloseButton close={toggle} style={{ paddingTop: '20px' }} />
            </div>
            <div className={styles.editPasswordBody}>
                <form className={styles.editPasswordForm} onSubmit={changePasswordHandler}>
                    <div className={styles.editPasswordHolder}>
                        <p className={styles.formText}>New password *</p>
                        <input value={newPassword} className={styles.formInput} type="password" onChange={newPasswordChangeHandler} onBlur={newPasswordBlurHandler}></input>
                        {newPasswordInputIsInvalid && <p className={styles.formErrorMsg}>Password must be between 8 and 30 characters length!</p>}
                    </div>
                    <div className={styles.editPasswordHolder}>
                        <p className={styles.formText}>Confirm new password *</p>
                        <input value={newPassword_2} className={styles.formInput} type="password" onChange={newPasswordChangeHandler_2} onBlur={newPasswordBlurHandler_2}></input>
                        {newPasswordInputIsInvalid_2 && <p className={styles.formErrorMsg}>Password must be between 8 and 30 characters length!</p>}
                    </div>
                    <GreenButton class={true} style={{ marginTop: '10px' }} type="submit">Confirm</GreenButton>
                </form>
            </div>
        </Modal>
    )
}

export default EditPasswordModal;