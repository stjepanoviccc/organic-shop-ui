import { useState } from 'react';
import ReviewForm from './ReviewForm';
import styles from './Submenu.module.scss';

const SubmenuContainer = ({ description, reviews }) => {
    const [activeItem, setActiveItem] = useState("Description");
    const activeHandler = (item) => {
        setActiveItem(prev => item);
    }

    return (
        <div className={styles.submenuWrap}>
            <ul className={styles.submenuList}>
                <li onClick={() => activeHandler("Description")} className={`${styles.submenuItem} ${activeItem === "Description" && styles.submenuItemActive}`}>Description</li>
                <li onClick={() => activeHandler("Reviews")} className={`${styles.submenuItem} ${activeItem === "Reviews" && styles.submenuItemActive}`}>Reviews (0)</li>
            </ul>
            <div className={styles.submenuPanelHolder}>
                {activeItem === "Description" && <p className={styles.submenuText}>{description}</p>}
                {activeItem === "Reviews" && (
                    reviews === undefined ? <p className={styles.submenuText}>There are no reviews</p> : 
                    reviews !== undefined && <p className={styles.reviewsText}>There are reviews</p>
                )}
                <ReviewForm />
            </div>
        </div>
    )
};

export default SubmenuContainer;