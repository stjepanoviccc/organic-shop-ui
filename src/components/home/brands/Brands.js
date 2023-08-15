import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import styles from './Brands.module.scss';

const BrandsContainer = () => {
    const brandLogo = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/logo-1.svg`, './static/media/logo-1.svg')

    return (
        <section className={styles.brandsSection}>
            <div className={styles.mainWrap}>
                <div className={styles.brandsContainer}>
                    <h4 className={styles.title}>Featured Brands:</h4>
                    <div className={styles.brandsImages}>
                        <img src={brandLogo} alt="logo-1" />
                        <img src={brandLogo} alt="logo-1" />
                        <img src={brandLogo} alt="logo-1" />
                        <img src={brandLogo} alt="logo-1" />
                        <img src={brandLogo} alt="logo-1" />
                    </div>

                </div>
            </div>
        </section>
    )
};

export default BrandsContainer;