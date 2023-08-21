import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import styles from './CertifiedProduct.module.scss';

const CertifiedProduct = ({ text }) => {
    return (
        <div className={styles.certifiedProduct}>
            <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
            <p className={styles.certifiedProductText}>
                {text}
            </p>
        </div>
    )
};

export default CertifiedProduct;