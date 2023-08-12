import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import DiscountContainer from './DiscountContainer';
import styles from './FreshContainer.module.scss';
import FreshFruitCard from './FreshFruitCard';

const FreshContainer = () => {
    const leafImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/basil-leaf.png`, './static/media/basil-leaf.png')

    return (
        <section className={styles.freshSection}>
            <div className={styles.mainWrap}>
                <div className={styles.freshWrap}>
                    <img className={styles.freshLeafImg} src={leafImg} alt="small-leaf-img" />
                    <div className={styles.freshProductsWrap}>
                        <FreshFruitCard />
                        <FreshFruitCard />
                        <FreshFruitCard />
                    </div>
                   
                </div>
            </div>
        </section>
    )
};

export default FreshContainer;