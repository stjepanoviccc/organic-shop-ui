import { useState } from "react";

const useInput = (validation) => {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    const valid = validation(value);
    const error = !valid && touched;

    const valueChangeHandler = (event) => {
        setValue(event.target.value);
    };

    const valueChangeFromLocalStorage = (value) => {
        setValue(value);
    }

    const valueBlurHandler = () => {
        setTouched(true);
    };

    const reset = () => {
        setValue('');
        setTouched(false);
    }

    return {
        value, error, valid, valueChangeHandler, valueBlurHandler, reset, valueChangeFromLocalStorage
    }
};

export default useInput;