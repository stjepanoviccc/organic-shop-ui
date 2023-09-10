import useInput from '../../custom_hooks/input';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './PassAndPayment.module.scss';

const PaymentForm = ({username}) => {
    const {
        value: firstName, error: firstNameInputIsInvalid,
        valueChangeHandler: firstNameChangeHandler, valueBlurHandler: firstNameBlurHandler, reset: resetFirstNameInput
    } = useInput(value => {
        const trimmedValue = value.trim();
        return /^[A-Z][a-z]*(\s[A-Z][a-z]*)?$/.test(trimmedValue) && trimmedValue.length >= 2 && trimmedValue.length <= 50;
    });

    const {
        value: lastName, error: lastNameInputIsInvalid,
        valueChangeHandler: lastNameChangeHandler, valueBlurHandler: lastNameBlurHandler, reset: resetLastNameInput
    } = useInput(value => {
        const trimmedValue = value.trim();
        return /^[A-Z][a-z]*(\s[A-Z][a-z]*)?$/.test(trimmedValue) && trimmedValue.length >= 2 && trimmedValue.length <= 50;
    });

    const {
        value: country, error: countryInputIsInvalid,
        valueChangeHandler: countryChangeHandler, valueBlurHandler: countryBlurHandler, reset: resetCountryInput
    } = useInput(value => /^(?:\d+\s+)?(?:\b\w+\b\s*)+$/.test(value));

    const {
        value: street, error: streetInputIsInvalid,
        valueChangeHandler: streetChangeHandler, valueBlurHandler: streetBlurHandler, reset: resetStreetInput
    } = useInput(value => {
        const trimmedValue = value.trim();
        return /^(?:[A-Z][a-z]*(?:\s|$)|BB(?:\s|$))*(?:\d*)?$/.test(trimmedValue) && trimmedValue.length >= 2 && trimmedValue.length <= 50;
      });

    const {
        value: city, error: cityInputIsInvalid,
        valueChangeHandler: cityChangeHandler, valueBlurHandler: cityBlurHandler, reset: resetCityInput
    } = useInput(value => {
        const trimmedValue = value.trim();
        return /^[A-Z][a-z]*(\s[A-Z][a-z]*)?$/.test(trimmedValue) && trimmedValue.length >= 2 && trimmedValue.length <= 50;
    });

    const {
        value: zip, error: zipInputIsInvalid,
        valueChangeHandler: zipChangeHandler, valueBlurHandler: zipBlurHandler, reset: resetZipInput
    } = useInput(value => /^\d{5}$/.test(value));

    const {
        value: phone, error: phoneInputIsInvalid,
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
                
            }
            const response = await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/key${username}/payment.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(newPassword_2),
            });
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            resetNewPasswordInput();
            resetNewPasswordInput_2();
            toggle();
        } catch (error) {
            console.error('Fetch Error:', error);
        }
    };

    return (
        <form className={styles.form} onSubmit={paymentSubmitHandler}>
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
                <p className={styles.formText}>Country *</p>
                <input value={country} className={styles.formInput} type="text" onChange={countryChangeHandler} onBlur={countryBlurHandler}></input>
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
            <GreenButton class={true} style={{ marginTop: '10px' }} type="submit">Confirm</GreenButton>
        </form>
    )
};

export default PaymentForm;