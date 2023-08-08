import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import NavigationMenu from "../components/navigation/NavigationMenu";
import Backdrop from '../components/UI/Backdrop';

const RootLayout = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(prevState => !prevState);
    }

    return (
        <>
        {isActive && <Backdrop />}
        <NavigationMenu toggle={toggleMenu} active={isActive} />
        <main>
            <Outlet />
        </main>
    </>
    )
};

export default RootLayout;