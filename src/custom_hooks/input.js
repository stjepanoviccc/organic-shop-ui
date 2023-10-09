import { useState } from "react";

const useInput = (validation) => {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    const [valueExist, setValueExist] = useState(false);
    const valid = validation(value);
    const error = !valid && touched;
    const existError = valueExist === true;

    const valueChangeHandler = (event) => {
        setValue(event.target.value);
        if(valueExist === true) {
            setValueExist(false);
        }
    };

    const valueChangeFetched = (value) => {
        setValue(value);
    }

    const valueChangeFromLocalStorage = (value) => {
        setValue(value);
    }

    const valueExistHandler = (state) => {
        setValueExist(state);
    };

    const valueBlurHandler = () => {
        setTouched(true);
    };

    const reset = () => {
        setValue('');
        setTouched(false);
    }

    return {
        value, error, valid, valueChangeHandler, valueBlurHandler, reset, valueChangeFromLocalStorage, valueExist, valueExistHandler, existError, valueChangeFetched
    }
};

export default useInput;