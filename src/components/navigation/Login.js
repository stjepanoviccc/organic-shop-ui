import { useLoginModalUpdate } from '../../context/LoginModalContext';
import CloseButton from '../UI/buttons/CloseButton';
import styles from './Login.module.scss';

const LoginModal = () => {
    const toggleLoginModal = useLoginModalUpdate(); 

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <CloseButton close={toggleLoginModal}/>
                <h2 className={styles.loginTitle}>Login</h2>
                {/* Add your login form or content here */}
            </div>
        </div>
    )
};

export default LoginModal;