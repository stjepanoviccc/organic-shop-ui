import NumberCounter from './NumbersCounter';
import styles from './Numbers.module.scss';

const NumbersContainer = () => {
    return (
        <section className={styles.numbersSection}>
            <div className={styles.mainWrap}>
                <div className={styles.numbersWrap}>
                    <div className={`${styles.numbersRow} ${styles.titleRow}`}>
                        <h4 className={styles.numbersTitle}>
                            Numbers Speak For Themselves!
                        </h4>
                    </div>
                    <div className={styles.numbersRow}>
                        <NumberCounter target={5000} />
                        <p className={styles.text}>Curated Products</p>
                    </div>
                    <div className={styles.numbersRow}>
                        <NumberCounter target={800} />
                        <p className={styles.text}>Curated Products</p>
                    </div>
                    <div className={styles.numbersRow}>
                        <NumberCounter target={40} />
                        <p className={styles.text}>Product Categories</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default NumbersContainer;