import Modal from '../../UI/Modal';
import RegisterForm from './RegisterForm';
import { useRegisterModalUpdate } from '../../../context/RegisterModalContext';
import CloseButton from '../../UI/buttons/CloseButton';
import styles from './LoginAndRegModals.module.scss';

const RegisterModal = () => {
    const toggleRegisterModal = useRegisterModalUpdate();

    return (
        <Modal>
            <div className={styles.loginAndRegHeader}>
                <h2 className={styles.loginAndRegTitle}>Register</h2>
                <CloseButton close={toggleRegisterModal} style={{paddingTop: '20px'}}/>
            </div>
            <RegisterForm />
        </Modal>
    )
};

export default RegisterModal;