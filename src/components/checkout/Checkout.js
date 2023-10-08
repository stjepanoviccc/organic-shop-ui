import CheckoutCart from "./CheckoutCart";
import CheckoutForm from "./CheckoutForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import styles from "./Checkout.module.scss";

const CheckoutContainer = () => {
    const username = localStorage.getItem('loggedName');
    const lightColor = '#f8f6f3';

    return (
        <section className={styles.checkoutSection} style={{ backgroundColor: lightColor }}>
            <div className={styles.mainWrap}>
                <div className={styles.titleHolder}>
                    <h1 className={styles.title}>Checkout</h1>
                </div>
                <p className={styles.couponText}>
                    <FontAwesomeIcon className={styles.icon} icon={faCalendar} />Have a coupon? <button className={styles.couponButton}>Click here to ender your code.</button>
                </p>
                <div className={styles.formAndCartWrap}>
                    <div className={styles.formHolder}>
                        <h2 className={styles.subtitle}>Billing details</h2>
                        <CheckoutForm username={username} />
                    </div>
                    <CheckoutCart />
                </div>

            </div>
        </section>
    )
}

export default CheckoutContainer;
