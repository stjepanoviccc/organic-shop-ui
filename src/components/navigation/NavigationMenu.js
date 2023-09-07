import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { useBackgroundColor } from '../../context/NavBackgroundContext';
import { useLoginModal, useLoginModalUpdate } from '../../context/LoginModalContext';
import useCheckBodyBehavior from '../../custom_hooks/CheckBodyBehavior';
import useCheckDevice from '../../custom_hooks/CheckDevice';
import useCheckImagePath from '../../custom_hooks/CheckImagePath';
import LoginModal from './login-and-reg/Login';
import RegisterModal from './login-and-reg/Register';
import HamburgerMenu from './HamburgerMenu';
import HamburgerToggler from './HamburgerToggler';
import CartToggler from './CartToggler';
import ProfileButton from '../UI/buttons/ProfileButton';
import styles from './NavigationMenu.module.scss';
import { useRegisterModal } from '../../context/RegisterModalContext';

const NavigationMenu = () => {
    const isRegModalOpen = useRegisterModal();
    const isLoginModalOpen = useLoginModal();
    const toggleLoginModal = useLoginModalUpdate(); 
    const isAuth = useSelector(state => state.auth.isAuth);
    const windowWidth = useCheckDevice();
    const logo = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/organic-store-logo5.svg`, './static/media/organic-store-logo5.svg');
    const bgColor = useBackgroundColor();
    useCheckBodyBehavior();

    return (
        <header>
            {isLoginModalOpen && <LoginModal />}
            {isRegModalOpen && <RegisterModal />}
            <div className={styles.nav} style={{ backgroundColor: bgColor }}>
                <Link to="/">
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>
                {windowWidth > 920 && <HamburgerMenu />}
                <CartToggler />
                {windowWidth > 920 && (
                    isAuth
                        ? <ProfileButton />
                        : <button className={styles.loginButton} onClick={toggleLoginModal}>LOGIN</button>
                )}
                {windowWidth <= 920 && <HamburgerToggler />}
            </div>
        </header>
    );
}

export default NavigationMenu;