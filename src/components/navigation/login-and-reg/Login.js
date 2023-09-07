import Modal from '../../UI/Modal';
import LoginForm from './LoginForm';
import { useLoginModalUpdate } from '../../../context/LoginModalContext';
import CloseButton from '../../UI/buttons/CloseButton';
import styles from './LoginAndRegModals.module.scss';

const LoginModal = () => {
    const toggleLoginModal = useLoginModalUpdate();

    return (
        <Modal>
            <div className={styles.loginAndRegHeader}>
                <h2 className={styles.loginAndRegTitle}>Login</h2>
                <CloseButton close={toggleLoginModal} style={{paddingTop: '20px'}}/>
            </div>
            <LoginForm toggle={toggleLoginModal} />
        </Modal>
    )
};

export default LoginModal;