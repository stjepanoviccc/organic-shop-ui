import GreenButton from '../../UI/buttons/GreenButton';
import styles from './LoginAndRegForm.module.scss';

const RegisterForm = () => {
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
            <div className={styles.formEmailHolder}>
                <p className={styles.formText}>Email *</p>
                <input className={styles.formInput} type="email"></input>
            </div>
            <div className={styles.formSubmitHolder}>
                <GreenButton class={true}>Register</GreenButton>
            </div>
        </form>
    )
};

export default RegisterForm;