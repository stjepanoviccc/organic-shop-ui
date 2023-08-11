import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faAddressBook, faMoneyCheckDollar, faRotate } from '@fortawesome/free-solid-svg-icons';
import styles from './ServicesCard.module.scss';

const ServicesCard = ({type}) => {
    const iconMap = {
        'truck': faTruck,
        'address': faAddressBook,
        'money': faMoneyCheckDollar,
        'rotate': faRotate
    };
    const titleMap = {
        'truck': 'Free Shipping',
        'address': 'Certified Organic',
        'money': 'Huge Savings',
        'rotate': 'Easy Returns',
    }
    const contentMap = {
        'truck': 'Above 5% Only',
        'address': '100% Guarantee',
        'money': 'At Lowest Price',
        'rotate': 'No Questions Asked',
    }

    return (
        <div className={styles.servicesCard}>
            <div className={styles.iconHolder}>
                <FontAwesomeIcon className={styles.cardIcon} icon={iconMap[type]} />
            </div>
            <div className={styles.contentHolder}>
                <h4 className={styles.cardTitle}>{titleMap[type]}</h4>
                <p className={styles.cardContent}>{contentMap[type]}</p>
            </div>
        </div>
    )
};

export default ServicesCard;