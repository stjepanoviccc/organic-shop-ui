import { useState } from 'react';
import ReviewForm from './ReviewForm';
import styles from './Submenu.module.scss';

const SubmenuContainer = ({data}) => {
    const numberOfReviews = data.reviews === undefined ? 0 : Object.keys(data.reviews).length
    const [activeItem, setActiveItem] = useState("Description");
    const activeHandler = (item) => {
        setActiveItem(prev => item);
    }

    return (
        <div className={styles.submenuWrap}>
            <ul className={styles.submenuList}>
                <li onClick={() => activeHandler("Description")} className={`${styles.submenuItem} ${activeItem === "Description" && styles.submenuItemActive}`}>Description</li>
                <li onClick={() => activeHandler("Reviews")} className={`${styles.submenuItem} ${activeItem === "Reviews" && styles.submenuItemActive}`}>
                    Reviews ({numberOfReviews})
                </li>
            </ul>
            <div className={styles.submenuPanelHolder}>
                {activeItem === "Description" && <p className={styles.submenuText}>{data.description}</p>}
                {activeItem === "Reviews" && (
                    data.reviews === undefined ? <p className={styles.submenuText}>There are no reviews</p> : 
                    data.reviews !== undefined && <p className={styles.reviewsText}>There are reviews</p>
                )}
                {activeItem === "Reviews" && (
                    <ReviewForm data={data} />
                )}
            </div>
        </div>
    )
};

export default SubmenuContainer;