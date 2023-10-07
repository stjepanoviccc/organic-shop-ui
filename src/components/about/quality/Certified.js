import { Link } from 'react-router-dom';
import { useCertifiedProductsData } from '../../../context/FetchDataContext';
import CertifiedProduct from './CertifiedProduct';
import GreenButton from '../../UI/buttons/GreenButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import styles from './Certified.module.scss';

const CertifiedContainer = () => {
    const certifiedProductsData = useCertifiedProductsData();
    const smallLeafImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/logo-leaf-new-min.png`, './static/images/logo-leaf-new-min.png');
    const organicLogo = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/organic-badge-freeimg-min.png`, './static/images/organic-badge-freeimg-min.png');

    return (
        <>
            <div className={styles.certifiedLogoHolder}>
                <img className={styles.organicLogo} src={organicLogo} alt="organic-logo"></img>
                <div className={styles.certifiedSubtitleHolder}>
                    <h4 className={styles.certifiedSubtitle}>Certified Products</h4>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className={styles.certifiedTitleHolder}>
                <h2 className={`${styles.mainTitle} ${styles.mainTitleExt}`}>We Deal With Various Quality Organic Products!</h2>
            </div>
            <div className={styles.certifiedLeafImgHolder}>
                <img src={smallLeafImage} alt="small-leaf-img"></img>
            </div>
            <div className={styles.certifiedProductsHolder}>
                {certifiedProductsData.map((product, key) => (
                    <CertifiedProduct key={key} text={product.text} />
                ))}
            </div>
            <div className={styles.certifiedButtonHolder}>
                <GreenButton class={true}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <Link to="/shop">Shop Now</Link>
                </GreenButton>
            </div>
        </>
    )
};

export default CertifiedContainer;