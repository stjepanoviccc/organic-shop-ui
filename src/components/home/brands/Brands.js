import { useBrandsData } from '../../../context/FetchDataContext';
import styles from './Brands.module.scss';

const BrandsContainer = () => {
    const brandsData = useBrandsData();
    const modifiedBrandsData = brandsData.map(item => {
        return {
            image: copiedImagePathHandler(item.image),
        };
    });
    const brandsImages = modifiedBrandsData.map((brand, index) => (
        <img key={index} src={brand.image} alt={`brand-${index}-img`}></img>
    ));


    return (
        <section className={styles.brandsSection}>
            <div className={styles.mainWrap}>
                <div className={styles.brandsContainer}>
                    <h4 className={styles.brandsTitle}>Featured Brands:</h4>
                    <div className={styles.brandsImages}>
                        {brandsImages}
                    </div>
                </div>
            </div>
        </section>
    )
};

// custom hook couldn't be called inside callback and thats reason why i copied exactly same code
const copiedImagePathHandler = (baseUrl) => {
    const fileId = baseUrl.match(/\/file\/d\/([^/]+)/)[1];
    const newUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
    return newUrl;
};

export default BrandsContainer;
