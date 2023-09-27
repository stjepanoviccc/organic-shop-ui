import { useFreshProductsData } from '../../../context/FetchDataContext';
import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import UnderFreshContainer from './UnderFreshContainer';
import styles from './FreshContainer.module.scss';
import FreshFruitCard from '../../UI/cards/FreshFruitCard';

const FreshContainer = () => {
    const freshProductsData = useFreshProductsData();
    const leafImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/basil-leaf-min.png`, './static/images/basil-leaf-min.png')

    return (
        <>
            <section className={styles.freshSection}>
                <div className={styles.mainWrap}>
                    <div className={styles.freshWrap}>
                        <img className={styles.freshLeafImg} src={leafImg} alt="small-leaf-img" />
                        <div className={styles.freshProductsWrap}>
                            {freshProductsData.map((_, index) => (
                                <FreshFruitCard key={index} data={freshProductsData[index]} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.underFreshSection}>
                <div className={styles.underFreshDiscountWrap}>
                    <div className={styles.mainWrap}>
                        <UnderFreshContainer type="disc" />
                    </div>
                </div>
                <div className={styles.underFreshRegisterWrap}>
                    <div className={styles.mainWrap}>
                        <UnderFreshContainer type="reg" />
                    </div>
                </div>
            </section>
        </>
    )
};

export default FreshContainer;