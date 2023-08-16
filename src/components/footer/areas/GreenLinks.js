import { Link } from 'react-router-dom';
import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import styles from './Areas.module.scss';

const GreenLinksArea = () => {
    const playStoreImageUrl = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/play-store.png`, './static/media/play-store.png');
    const appStoreImageUrl = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/app-store.png`, './static/media/app-store.png');
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
                <Link className={styles.areasGreenLink} to="#">Know More About Us</Link>
                <Link className={styles.areasGreenLink} to="#">Visit Store</Link>
                <Link className={styles.areasGreenLink} to="#">Let's Connect</Link>
                <Link className={styles.areasGreenLink} to="#">Locate Stores</Link>
                <div className={styles.areasStore}>
                    <button className={styles.storeButton} style={playStoreImageStyle}></button>
                    <button className={styles.storeButton} style={appStoreImageStyle}></button>
                </div>
            </div>
        </>
    )
};

export default GreenLinksArea;