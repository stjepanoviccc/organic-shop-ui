import GreenButton from '../../UI/buttons/GreenButton';
import { useRegisterModalUpdate } from '../../../context/RegisterModalContext';
import styles from './LoginAndRegForm.module.scss';

const LoginForm = ({toggle}) => {
    const toggleRegisterModal = useRegisterModalUpdate();

    const openRegistrationModal = () => {
        toggleRegisterModal();
        toggle()
    }

    const loginSubmitHandler = () => {
        console.log('trying to log in');
    }

    return (
        <form className={styles.form}>
            <div className={styles.formNameHolder}>
                <p className={styles.formText}>Username *</p>
                <input className={styles.formInput} type="text"></input>
            </div>
            <div className={styles.formPasswordHolder}>
                <p className={styles.formText}>Password *</p>
                <input className={styles.formInput} type="password"></input>
            </div>
            <div className={styles.formSubmitHolder}>
                <GreenButton class={true} onClick={loginSubmitHandler}>Log in</GreenButton>
                <p className={styles.noAccText}>You don't have account?<br></br>
                    <button type="button" className={styles.noAccButtonText} onClick={openRegistrationModal}>Click here to register</button>
                </p>
            </div>
        </form>
    )
};

export default LoginForm;