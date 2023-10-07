import { Link } from 'react-router-dom';
import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import styles from './Areas.module.scss';

const GreenLinksArea = () => {
    const playStoreImageUrl = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/play-store-min.png`, './static/images/play-store-min.png');
    const appStoreImageUrl = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/app-store-min.png`, './static/images/app-store-min.png');
    const playStoreImageStyle = {
        backgroundImage: `url(${playStoreImageUrl})`,
      };
      const appStoreImageStyle = {
        backgroundImage: `url(${appStoreImageUrl})`,
      };
    return (
        <>
            <h3 className={styles.areasTitle}>Quick Links</h3>
            <div className={styles.areasContentHolder}>
                <Link className={styles.areasGreenLink} to="/about">Know More About Us</Link>
                <Link className={styles.areasGreenLink} to="/shop">Visit Store</Link>
                <Link className={styles.areasGreenLink} to="/contact">Let's Connect</Link>
                <Link className={styles.areasGreenLink} to="/shop">Locate Stores</Link>
                <div className={styles.areasStore}>
                    <button className={styles.storeButton} style={playStoreImageStyle}></button>
                    <button className={styles.storeButton} style={appStoreImageStyle}></button>
                </div>
            </div>
        </>
    )
};

export default GreenLinksArea;