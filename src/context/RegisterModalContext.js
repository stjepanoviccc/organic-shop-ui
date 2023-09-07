import React, { useState, useContext } from 'react';

const RegisterModalContext = React.createContext();
const RegisterModalContextUpdate = React.createContext();

const RegisterModalProvider = (props) => {
    const [isActive, setisActive] = useState(false);
    const toggleModal = () => {
        setisActive(prevState => !prevState);
    }

    return (
        <RegisterModalContext.Provider value={isActive} >
            <RegisterModalContextUpdate.Provider value={toggleModal}>
                    {props.children}
            </RegisterModalContextUpdate.Provider>
        </RegisterModalContext.Provider>
    )
};

export const useRegisterModal = () => {
    return useContext(RegisterModalContext);
};

export const useRegisterModalUpdate = () => {
    return useContext(RegisterModalContextUpdate);
};

export default RegisterModalProvider;