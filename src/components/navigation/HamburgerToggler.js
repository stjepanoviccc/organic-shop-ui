import { useNavMenu, useNavMenuUpdate } from '../../context/NavMenuContext';
import Backdrop from '../UI/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './HamburgerToggler.module.scss';
import HamburgerMenu from './HamburgerMenu';

const HamburgerToggler = () => {
    const isActive = useNavMenu();
    const toggle = useNavMenuUpdate();

    return (
        <>
            <Backdrop toggle={toggle} inProp={isActive} />
            <HamburgerMenu toggle={toggle} inProp={isActive} />
            <button className={styles.togglerHolder} onClick={toggle}>
                <FontAwesomeIcon icon={faBars} size="xl" className={styles.togglerIcon} />
            </button>
        </>
    )
};

export default HamburgerToggler;