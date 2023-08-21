import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileButton.module.scss';

const ProfileButton = () => {
    return (
        <>
            <button className={styles.profileButton}>
                <FontAwesomeIcon icon={faUser} className={styles.profileIcon} />
            </button>
        </>
    )
};

export default ProfileButton;