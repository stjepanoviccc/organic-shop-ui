import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import GreenButton from '../../UI/GreenButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './Hero.module.scss';

const Hero = () => {
    const bgImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/leaves-free-img.png`, './static/media/organic-store-logo5.svg');
    const smallLeafImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/logo-leaf-new.png`, './static/media/logo-leaf-new.png');
    const heroImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/organic-products-hero.png`, './static/media/organic-products-hero.png')
    return (
        <section className={styles.heroSection}>
            <div className={styles.mainWrap}>
                <div className={styles.heroWrap}>
                    <div className={styles.heroImageHolder}>
                        <img className={styles.heroBgImage} src={bgImage} alt="bg-leaves-img" />
                        <img className={styles.heroImage} src={heroImage} alt="organic-products-hero-img" />
                    </div>
                    <div className={styles.headingHolder}>
                        <img className={styles.smallLeafImage} src={smallLeafImage} alt="small-leaf-img" />
                        <h3 className={styles.subtitle}>Best Quality Products</h3>
                        <h1 className={styles.title}>Join The Organic Movement!</h1>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className={styles.buttonHolder}>
                            <GreenButton class="btnHolder"><FontAwesomeIcon icon={faCartShopping} />Shop Now</GreenButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;