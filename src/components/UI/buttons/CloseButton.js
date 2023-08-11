import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import styles from './CloseButton.module.scss';

const CloseButton = ({close}) => {
    return <button className={styles.closeButton} onClick={close}><FontAwesomeIcon icon={faX} /></button>
};

export default CloseButton;