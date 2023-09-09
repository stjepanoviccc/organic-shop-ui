import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import SettingsModal from '../../navigation/SettingsModal';
import styles from './SettingsButton.module.scss';

const SettingsButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <button className={styles.settingsButton} onClick={toggleModal}>
                <FontAwesomeIcon icon={faGear} className={styles.settingsIcon} />
            </button>
            {isModalOpen && (
                <SettingsModal toggleModal={toggleModal} />
            )}
        </>
    )
};

export default SettingsButton;