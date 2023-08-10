import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationMenu from "../components/navigation/NavigationMenu";
import Backdrop from '../components/UI/Backdrop';

const RootLayout = () => {
    const [isActive, setisActive] = useState(false);

    const toggleMenu = () => {
        setisActive(prevState => !prevState);
    }

    return (
        <>
            <Backdrop toggle={toggleMenu} inProp={isActive} />
            <NavigationMenu toggle={toggleMenu} active={isActive} />
            <main>
                <Outlet />
            </main>
        </>
    )
};

export default RootLayout;