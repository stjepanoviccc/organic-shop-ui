import { Link } from 'react-router-dom';
import styles from './Areas.module.scss';

const GreenLinksArea = () => {
    return (
        <>
            <h3 className={styles.areasTitle}>Quick Links</h3>
            <div className={styles.areasContentHolder}>
                <Link className={styles.areasGreenLink} to="#">Know More About Us</Link>
                <Link className={styles.areasGreenLink} to="#">Visit Store</Link>
                <Link className={styles.areasGreenLink} to="#">Let's Connect</Link>
                <Link className={styles.areasGreenLink} to="#">Locate Stores</Link>
                <div className={styles.areasPlaystore}>
                    <button>1</button>
                    <button>2</button>
                </div>
            </div>
        </>
    )
};

export default GreenLinksArea;