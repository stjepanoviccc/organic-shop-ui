import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import CustomerCard from '../../UI/cards/CustomerCard';
import AdsCard from '../../UI/cards/AdsCard';
import styles from './Reviews.module.scss';

const ReviewsContainer = () => {
    const bgImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/logo-leaf2-free-img.png`, './static/media/logo-leaf2-free-img.png');
    const smallLeafImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/logo-leaf-new.png`, './static/media/logo-leaf-new.png');

    return (
        <section className={styles.customersReviewsSection}>
            <div className={styles.mainWrap}>
                <div className={styles.reviewsWrap}>
                    <h2 className={styles.mainTitle}>Customers Reviews</h2>
                    <img className={styles.leafImg} src={smallLeafImage} alt="small-leaf-img"></img>
                    <div className={styles.reviewsCardsHolder}>
                        <CustomerCard />
                        <AdsCard />
                        <CustomerCard />
                    </div>
                </div>
            </div>
            <img className={styles.leafBackgroundImage} src={bgImage} alt="bg-leaf-img" />
        </section>
    )
};

export default ReviewsContainer;