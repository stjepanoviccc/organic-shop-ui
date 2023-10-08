import styles from "./CheckoutCart.module.scss";

const CheckoutCart = () => {
  return (
    <div className={styles.checkoutCart}>
      <div className={styles.cartWrap}>
        <h2 className={styles.subtitle}>Your order</h2>
        <div className={styles.cartItems}>
          <div className={styles.item}>
            <p>Product</p>
            <p>Subtotal</p>
          </div>
          <div className={styles.item}>
            <p>Coffee Assorted</p>
            <p>123</p>
          </div>
          <div className={styles.item}>
            <p>Product</p>
            <p>Subtotal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutCart
