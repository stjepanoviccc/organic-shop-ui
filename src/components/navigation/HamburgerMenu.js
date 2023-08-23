import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import useCheckDevice from '../../custom_hooks/CheckDevice';
import ProfileButton from '../UI/buttons/ProfileButton'
import CloseButton from '../UI/buttons/CloseButton';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = ({ toggle, inProp }) => {
    const windowWidth = useCheckDevice();
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in={windowWidth <= 920 ? inProp : true} timeout={300} mountOnEnter unmountOnExit>
            {state => (
                <div className={`${styles.hamburgerMenu} ${state === 'entered' ? styles.active : ''}`} >
                    {windowWidth < 920 && <ProfileButton />}
                    {windowWidth < 920 && <CloseButton close={toggle} />}
                    <div className={styles.navLeft}>
                        <Link onClick={toggle} className={styles.link} to="/shop"><p>Everything</p></Link>
                        <Link onClick={toggle} className={styles.link} to="/shop"><p>Groceries</p></Link>
                        <Link onClick={toggle} className={styles.link} to="/shop"><p>Juice</p></Link>
                    </div>
                    <div className={styles.navRight}>
                        <Link onClick={toggle} className={styles.link} to="/about"><p>About</p></Link>
                        <Link onClick={toggle} className={styles.link} to="/contact"><p>Contact</p></Link>
                    </div>
                </div>
            )}
        </Transition>
    )
};

export default HamburgerMenu;