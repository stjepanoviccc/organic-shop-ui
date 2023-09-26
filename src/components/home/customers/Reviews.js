import { useCustomersData } from '../../../context/FetchDataContext';
import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import CustomerCard from '../../UI/cards/CustomerCard';
import AdsCard from '../../UI/cards/AdsCard';
import styles from './Reviews.module.scss';

const ReviewsContainer = () => {
    const customersData = useCustomersData();
    const bgImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/logo-leaf2-free-img-min.png`, './static/images/logo-leaf2-free-img-min.png');
    const smallLeafImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/logo-leaf-new-min.png`, './static/images/logo-leaf-new-min.png');

    return (
        <section className={styles.customersReviewsSection}>
            <div className={styles.mainWrap}>
                <div className={styles.reviewsWrap}>
                    <h2 className={styles.mainTitle}>Customers Reviews</h2>
                    <img className={styles.leafImg} src={smallLeafImage} alt="small-leaf-img"></img>
                    <div className={styles.reviewsCardsHolder}>
                        {customersData.length > 0 && <CustomerCard data={customersData[0]}/> }
                        <AdsCard />
                        {customersData.length > 0 && <CustomerCard data={customersData[1]}/> }
                    </div>
                </div>
            </div>
            <img className={styles.leafBackgroundImage} src={bgImage} alt="bg-leaf-img" />
        </section>
    )
};

export default ReviewsContainer;