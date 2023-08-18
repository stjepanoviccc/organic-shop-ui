import React, { useContext, useState } from 'react';

const BackgroundColorContext = React.createContext();
const BackgroundColorUpdateContext = React.createContext();

const BackgroundColorProvider = (props) => {
    const defaultBg = '#fff';
    const [bgColor, setBgColor] = useState(defaultBg);

    const changeBgColor = (newColor) => {
        if(newColor === 'default') {
            newColor = defaultBg;
        }
        setBgColor(prevColor => newColor);
    }

    return (
        <BackgroundColorContext.Provider value={bgColor}>
            <BackgroundColorUpdateContext.Provider value={changeBgColor}>
                {props.children}
            </BackgroundColorUpdateContext.Provider>
        </BackgroundColorContext.Provider>
    )
}

export const useBackgroundColor = () => {
    return useContext(BackgroundColorContext);
};

export const useBackgroundColorUpdate = () => {
    return useContext(BackgroundColorUpdateContext);
}

export default BackgroundColorProvider;
