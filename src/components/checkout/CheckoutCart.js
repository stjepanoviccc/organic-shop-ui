import { useSelector } from "react-redux";
import GreenButton from "../UI/buttons/GreenButton";
import styles from "./CheckoutCart.module.scss";

const CheckoutCart = ({formIsValid}) => {
  const total = useSelector(state => state.cart.totalAmount);
  const items = useSelector(state => state.cart.items);

  const submitOrder = () => {
    alert("IMPORTANT: This project is used for personal purposes, this isn't real shop.");
  }

  return (
    <div className={styles.checkoutCart}>
      <div className={styles.cartWrap}>
        <h2 className={styles.subtitle}>Your order</h2>
        <div className={styles.cartItems}>
          <div className={styles.item}>
            <p style={{fontWeight:'bold'}}>Product</p>
            <p style={{fontWeight:'bold'}}>Subtotal</p>
          </div>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <p>- {item.title} <span style={{paddingLeft:'5px', fontSize: '0.9rem'}}>x </span>{item.quantity}</p>
              <p>{item.price} $</p>
            </div>
          ))}
          <div className={styles.placeOrderHolder}>
            <p>- Cash on delivery.</p>
            <p>- Total: {total} $</p>
            <GreenButton disabled={!formIsValid} onClick={submitOrder}>PLACE ORDER</GreenButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutCart
