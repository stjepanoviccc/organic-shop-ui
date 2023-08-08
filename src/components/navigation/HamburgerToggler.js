import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import styles from './HamburgerToggler.module.scss';
import HamburgerMenu from './HamburgerMenu';

const HamburgerToggler = ({toggle, active}) => {
    
    return (
        <>
        {active && <HamburgerMenu toggle={toggle} />}
        <button className={styles.togglerHolder} onClick={toggle}>
            <FontAwesomeIcon icon={faBars} size="xl" className={styles.togglerIcon} />
        </button>
        </>
    )
};

export default HamburgerToggler;