import { Link } from 'react-router-dom';
import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import GreenButton from '../../UI/buttons/GreenButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './Hero.module.scss';

const Hero = () => {
    const bgImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/leaves-free-img-min.png`, './static/images/leaves-free-img-min.png');
    const smallLeafImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/logo-leaf-new-min.png`, './static/images/logo-leaf-new-min.png');
    const heroImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/organic-products-hero-min.png`, './static/images/organic-products-hero-min.png')

    return (
        <section className={styles.heroSection}>
            <div className={styles.mainWrap}>
                <div className={styles.heroWrap}>
                    <div className={styles.heroImageHolder}>
                        <img className={`${styles.mainBgImage} ${styles.mainBgImageExt}`} src={bgImage} alt="bg-leaves-img" />
                        <img className={styles.heroImage} src={heroImage} alt="organic-products-hero-img" />
                    </div>
                    <div className={styles.heroHeadingHolder}>
                        <img className={styles.smallLeafImage} src={smallLeafImage} alt="small-leaf-img" />
                        <h3 className={styles.heroSubtitle}>Best Quality Products</h3>
                        <h1 className={styles.heroTitle}>Join The Organic Movement!</h1>
                        <p className={styles.heroText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <Link to="/shop" style={{ width: '170px' }}>
                            <GreenButton>
                                <FontAwesomeIcon icon={faCartShopping} />Shop now
                            </GreenButton>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;