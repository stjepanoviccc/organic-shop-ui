import React, { useState, useContext } from 'react';

const NavMenuContext = React.createContext();
const NavMenuContextUpdate = React.createContext();

const NavMenuProvider = (props) => {
    const [isActive, setisActive] = useState(false);
    const toggleMenu = () => {
        setisActive(prevState => !prevState);
    }

    return (
        <NavMenuContext.Provider value={isActive} >
            <NavMenuContextUpdate.Provider value={toggleMenu}>
                    {props.children}
            </NavMenuContextUpdate.Provider>
        </NavMenuContext.Provider>
    )
};

export const useNavMenu = () => {
    return useContext(NavMenuContext);
};

export const useNavMenuUpdate = () => {
    return useContext(NavMenuContextUpdate);
};

export default NavMenuProvider;