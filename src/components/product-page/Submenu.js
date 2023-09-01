import { useState } from 'react';
import styles from './Submenu.module.scss';

const SubmenuContainer = ({description}) => {
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
                {activeItem === "Description" && <p className={styles.submenuDescription}>{description}</p>}
                {activeItem === "Reviews" && <p>Reviews</p>}
            </div>
        </div>
    )
};

export default SubmenuContainer;