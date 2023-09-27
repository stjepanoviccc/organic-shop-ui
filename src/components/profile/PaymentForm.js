import { useState, useEffect } from 'react';
import { useUsersMap } from '../../context/FetchDataContext';
import useInput from '../../custom_hooks/input';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './PassAndPayment.module.scss';

const PaymentForm = ({ username, toggleModal, changeTitle }) => {
    const usersMap = useUsersMap();
    const [userId, setUserId] = useState(null);
    const [paymentSetupSuccess, setIsPaymentSetupSuccess] = useState(false);

    useEffect(() => {
        if (usersMap.get(username)) {
            console.log(usersMap.get(username))
            setUserId(usersMap.get(username)[4]);
        }
    }, [username, usersMap]);

    const {
        value: firstName, error: firstNameInputIsInvalid, valid: firstNameIsValid,
        valueChangeHandler: firstNameChangeHandler, valueBlurHandler: firstNameBlurHandler, reset: resetFirstNameInput
    } = useInput(value => {
        const trimmedValue = value.trim();
        return /^[A-Za-zšđžćčŠĐŽĆČ][a-zA-ZšđžćčŠĐŽĆČ]*(\s[A-Za-zšđžćčŠĐŽĆČ][a-zA-ZšđžćčŠĐŽĆČ]*)?$/.test(trimmedValue) && trimmedValue.length >= 2 && trimmedValue.length <= 50;
    });

    const {
        value: lastName, error: lastNameInputIsInvalid, valid: lastNameIsValid,
        valueChangeHandler: lastNameChangeHandler, valueBlurHandler: lastNameBlurHandler, reset: resetLastNameInput
    } = useInput(value => {
        const trimmedValue = value.trim();
        return /^[A-Za-zšđžćčŠĐŽĆČ][a-zA-ZšđžćčŠĐŽĆČ]*(\s[A-Za-zšđžćčŠĐŽĆČ][a-zA-ZšđžćčŠĐŽĆČ]*)?$/.test(trimmedValue) && trimmedValue.length >= 2 && trimmedValue.length <= 50;
    });

    const [country, setCountry] = useState("Serbia");
    const countryChangeHandler = (event) => {
        setCountry(event.target.value);
    };
    const resetCountryMenu = () => {
        setCountry('');
    }

    const {
        value: street, error: streetInputIsInvalid, valid: streetIsValid,
        valueChangeHandler: streetChangeHandler, valueBlurHandler: streetBlurHandler, reset: resetStreetInput
    } = useInput(value => {
        const trimmedValue = value.trim();
        return /^(?:[A-Za-zšđžćč]*(?:\s|$)|BB(?:\s|$))*(?:\d*)?$/.test(trimmedValue) && trimmedValue.length >= 2 && trimmedValue.length <= 50;
    });

    const {
        value: city, error: cityInputIsInvalid, valid: cityIsValid,
        valueChangeHandler: cityChangeHandler, valueBlurHandler: cityBlurHandler, reset: resetCityInput
    } = useInput(value => {
        const trimmedValue = value.trim();
        return /^[A-Za-zšđžćčŠĐŽĆČ][a-zA-ZšđžćčŠĐŽĆČ]*(\s[A-Za-zšđžćčŠĐŽĆČ][a-zA-ZšđžćčŠĐŽĆČ]*)?$/.test(trimmedValue) && trimmedValue.length >= 2 && trimmedValue.length <= 50;
    });

    const {
        value: zip, error: zipInputIsInvalid, valid: zipIsValid,
        valueChangeHandler: zipChangeHandler, valueBlurHandler: zipBlurHandler, reset: resetZipInput
    } = useInput(value => /^\d{5}$/.test(value));

    const {
        value: phone, error: phoneInputIsInvalid, valid: phoneIsValid,
        valueChangeHandler: phoneChangeHandler, valueBlurHandler: phoneBlurHandler, reset: resetPhoneInput
    } = useInput(value => /^(?:\+(?:387|381|385)|0)?[67]\d{7,8}$/.test(value));

    const {
        value: company, valueChangeHandler: companyChangeHandler, valueBlurHandler: companyBlurHandler, reset: resetCompanyInput
    } = useInput(value => value);

    const paymentSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const paymentObject = {
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                streetAddress: street.trim(),
                city: city.trim(),
                zip, phone, company, country
            }

            const response = await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/${userId}/payment.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(paymentObject),
            });
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            resetFirstNameInput();
            resetLastNameInput();
            resetCountryMenu();
            resetStreetInput();
            resetCityInput();
            resetZipInput();
            resetPhoneInput();
            resetCompanyInput();
            setIsPaymentSetupSuccess(prev => !prev);
            changeTitle("Payment Setup Success!")
        } catch (error) {
            console.error('Fetch Error:', error);
        }
    };

    let formIsValid = false;
    if (firstNameIsValid && lastNameIsValid && streetIsValid && cityIsValid && zipIsValid && phoneIsValid) {
        formIsValid = true;
    }

    return (
        <form className={styles.form} onSubmit={paymentSubmitHandler} style={paymentSetupSuccess ? { paddingTop: '0' } : null}>
            {!paymentSetupSuccess && (
                <>
                    <div className={styles.formInputHolder}>
                        <p className={styles.formText}>First name *</p>
                        <input value={firstName} className={styles.formInput} type="text" onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}></input>
                        {firstNameInputIsInvalid && <p className={styles.formErrorMsg}>First name must be between 2 and 30 characters length and first letter uppercase!</p>}
                    </div>
                    <div className={styles.formInputHolder}>
                        <p className={styles.formText}>Last name *</p>
                        <input value={lastName} className={styles.formInput} type="text" onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}></input>
                        {lastNameInputIsInvalid && <p className={styles.formErrorMsg}>Last name must be between 2 and 30 characters length and first letter uppercase!</p>}
                    </div>
                    <div className={styles.formInputHolder}>
                        <label htmlFor="country" className={styles.formText}>Country *</label>
                        <select name="country" value={country} className={styles.formInput} onChange={countryChangeHandler} style={{ padding: '10px' }}>
                            <option value="Serbia">Serbia</option>
                            <option value="Bosnia">Bosnia</option>
                            <option value="Croatia">Croatia</option>
                        </select>
                    </div>
                    <div className={styles.formInputHolder}>
                        <p className={styles.formText}>Town / City *</p>
                        <input value={city} className={styles.formInput} type="text" onChange={cityChangeHandler} onBlur={cityBlurHandler}></input>
                        {cityInputIsInvalid && <p className={styles.formErrorMsg}>Wrong City Format!</p>}
                    </div>
                    <div className={styles.formInputHolder}>
                        <p className={styles.formText}>Street Address *</p>
                        <input value={street} className={styles.formInput} type="text" onChange={streetChangeHandler} onBlur={streetBlurHandler}></input>
                        {streetInputIsInvalid && <p className={styles.formErrorMsg}>Wrong Street Address Format!</p>}
                    </div>
                    <div className={styles.formInputHolder}>
                        <p className={styles.formText}>Postcode / ZIP *</p>
                        <input value={zip} className={styles.formInput} type="text" onChange={zipChangeHandler} onBlur={zipBlurHandler}></input>
                        {zipInputIsInvalid && <p className={styles.formErrorMsg}>ZIP should contain exactly 5 digits!</p>}
                    </div>
                    <div className={styles.formInputHolder}>
                        <p className={styles.formText}>Phone *</p>
                        <input value={phone} className={styles.formInput} type="text" onChange={phoneChangeHandler} onBlur={phoneBlurHandler}></input>
                        {phoneInputIsInvalid && <p className={styles.formErrorMsg}>Invalid phone number!</p>}
                    </div>
                    <div className={styles.formInputHolder}>
                        <p className={styles.formText}>Company Name (optional)</p>
                        <input value={company} className={styles.formInput} type="text" onChange={companyChangeHandler} onBlur={companyBlurHandler}></input>
                    </div>
                    <GreenButton disabled={!formIsValid} class={true} style={{ marginTop: '10px' }} type="submit">Confirm</GreenButton>
                </>
            )}
            {paymentSetupSuccess && (
                <>
                    <div className={styles.formSuccessMsgHolder}>
                        <p className={styles.formText}>Payment Setup was completed successfully!</p>
                        <p className={styles.formText}>You can close this window now.</p>
                    </div>
                </>
            )}
        </form>
    )
};

export default PaymentForm;