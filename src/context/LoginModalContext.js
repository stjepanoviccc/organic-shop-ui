import React, { useState, useContext } from 'react';

const LoginModalContext = React.createContext();
const LoginModalContextUpdate = React.createContext();

const LoginModalProvider = (props) => {
    const [isActive, setisActive] = useState(false);
    const toggleModal = () => {
        setisActive(prevState => !prevState);
    }

    return (
        <LoginModalContext.Provider value={isActive} >
            <LoginModalContextUpdate.Provider value={toggleModal}>
                    {props.children}
            </LoginModalContextUpdate.Provider>
        </LoginModalContext.Provider>
    )
};

export const useLoginModal = () => {
    return useContext(LoginModalContext);
};

export const useLoginModalUpdate = () => {
    return useContext(LoginModalContextUpdate);
};

export default LoginModalProvider;