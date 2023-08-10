import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import useCheckDevice from '../../custom_hooks/CheckDevice';
import ProfileButton from './ProfileButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = ({ toggle, inProp }) => {
    const windowWidth = useCheckDevice();
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in={windowWidth <= 920 ? inProp : true} timeout={300} mountOnEnter unmountOnExit>
            {state => (
                <div className={`${styles.hamburgerMenu} ${state === 'entered' ? styles.active : ''}`} >
                    {windowWidth < 920 && <ProfileButton />}
                    {windowWidth < 920 && <button onClick={toggle}><FontAwesomeIcon icon={faX} className={styles.closeIcon} /></button>}
                    <div className={styles.left}>
                        <Link className={styles.link} to="/everything"><p>Everything</p></Link>
                        <Link className={styles.link} to="/everything"><p>Groceries</p></Link>
                        <Link className={styles.link} to="/everything"><p>Juice</p></Link>
                    </div>
                    <div className={styles.right}>
                        <Link className={styles.link} to="/about"><p>About</p></Link>
                        <Link className={styles.link} to="/contact"><p>Contact</p></Link>
                    </div>
                </div>
            )}
        </Transition>
    )
};

export default HamburgerMenu;