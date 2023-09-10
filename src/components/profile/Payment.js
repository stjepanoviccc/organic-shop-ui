import Modal from "../UI/Modal";
import PaymentForm from "./PaymentForm";
import CloseButton from "../UI/buttons/CloseButton";
import styles from './PassAndPayment.module.scss';

const PaymentModal = ({ toggle, username }) => {

    return (
        <Modal style={{maxWidth: '1000px'}}>
            <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>Set Up Payment</h2>
                <CloseButton close={toggle} style={{ paddingTop: '15px' }} />
            </div>
            <div className={styles.modalBody}>
                <PaymentForm user={username} />
            </div>
        </Modal>
    )
};

export default PaymentModal;