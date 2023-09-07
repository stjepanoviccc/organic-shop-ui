import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import styles from './CloseButton.module.scss';

const CloseButton = (props) => {
    return <button className={styles.closeButton} onClick={props.close}><FontAwesomeIcon icon={faX} style={props.style && props.style} /></button>
};

export default CloseButton;