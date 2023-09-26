import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import styles from './Areas.module.scss';

const LogoArea = () => {
    const img = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/organic-store-white-logo-min.png`, './static/images/organic-store-white-logo-min.png');

    return (
        <>
            <img className={styles.areasLogo} src={img} alt="footer-logo-img" />
            <div className={styles.areasContentHolder}>
                <p className={styles.areasLogoText}>
                    Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna.
                    Suspendisse pellentesque.
                </p>
            </div>
        </>
    )
};

export default LogoArea;