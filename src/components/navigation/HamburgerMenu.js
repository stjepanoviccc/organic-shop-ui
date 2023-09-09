import { useRef } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import useCheckDevice from '../../custom_hooks/CheckDevice';
import { useLoginModalUpdate } from '../../context/LoginModalContext';
import SettingsButton from '../UI/buttons/SettingsButton'
import CloseButton from '../UI/buttons/CloseButton';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = ({ toggle, inProp }) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const windowWidth = useCheckDevice();
    const nodeRef = useRef(null);
    const toggleLoginModal = useLoginModalUpdate(); 

    const openLoginModal = () => {
        toggle();
        toggleLoginModal()
    }

    return (
        <Transition nodeRef={nodeRef} in={windowWidth <= 920 ? inProp : true} timeout={300} mountOnEnter unmountOnExit>
            {state => (
                <div className={`${styles.hamburgerMenu} ${state === 'entered' ? styles.active : ''}`} >
                    {windowWidth < 920 && isAuth && <SettingsButton />}
                    {windowWidth < 920 && <CloseButton close={toggle} />}
                    <div className={styles.navLeft}>
                        {windowWidth < 920 && !isAuth && <Link onClick={openLoginModal} className={styles.link} style={{marginTop: '50px'}}>Login</Link>}
                        <Link onClick={toggle} className={styles.link} to="/shop"><p>Everything</p></Link>
                        <Link onClick={toggle} className={styles.link} to="/product-category/groceries"><p>Groceries</p></Link>
                        <Link onClick={toggle} className={styles.link} to="/product-category/juice"><p>Juice</p></Link>
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