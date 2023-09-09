import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import { useNavMenuUpdate } from '../../context/NavMenuContext';
import useCheckDevice from '../../custom_hooks/CheckDevice';
import Modal from '../UI/Modal';
import CloseButton from '../UI/buttons/CloseButton';
import styles from './SettingsModal.module.scss';

const SettingsModal = ({toggleModal}) => {
    const dispatch = useDispatch();
    const windowWidth = useCheckDevice();
    const closeNavMenu = useNavMenuUpdate();

    const goToProfile = () => {
        toggleModal();
        windowWidth < 920 && closeNavMenu();
    };

    const logout = () => {
        dispatch(authActions.logout());
        windowWidth < 920 && closeNavMenu();
    };

    return (
        <Modal>
            <div className={styles.settingsHeader}>
                <h3 className={styles.settingsTitle}>Settings</h3>
                <CloseButton close={toggleModal} style={{paddingTop: '13px'}} />
            </div>
            <div className={styles.settingsDropdown}>
                <Link to="profile" className={styles.settingsLink} onClick={goToProfile}>Edit Profile</Link>
                <Link className={styles.settingsLink} onClick={logout}>Logout</Link>
            </div>
        </Modal>
    )
};

export default SettingsModal;