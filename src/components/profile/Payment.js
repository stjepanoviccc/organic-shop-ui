import { useState } from "react";
import Modal from "../UI/Modal";
import PaymentForm from "./PaymentForm";
import CloseButton from "../UI/buttons/CloseButton";
import styles from './PassAndPayment.module.scss';

const PaymentModal = ({ toggle, username }) => {
    const [title, setTitle] = useState("Set Up Payment");
    const changeTitle = (newValue) => {
        setTitle(prev => newValue)
    }


    return (
        <Modal style={{maxWidth: '1000px'}}>
            <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{title}</h2>
                <CloseButton close={toggle} style={{ paddingTop: '15px' }} />
            </div>
            <div className={styles.modalBody}>
                <PaymentForm username={username} toggleModal={toggle} changeTitle={changeTitle} />
            </div>
        </Modal>
    )
};

export default PaymentModal;