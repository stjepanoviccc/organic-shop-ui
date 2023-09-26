import { useEffect } from 'react';
import { useBackgroundColorUpdate } from '../../../context/NavBackgroundContext'
import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import styles from './FavoriteStore.module.scss';

const FavoriteStoreContainer = () => {
    const leafImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/basil-leaf-min.png`, './static/images/basil-leaf-min.png');
    const grapesImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/banner-01-min.jpg`, './static/images/banner-01-min.jpg')
    const changeBgColor = useBackgroundColorUpdate();
    const lightColor = '#f8f6f3';

    useEffect(() => {
        changeBgColor(lightColor);
        return (() => {
            changeBgColor('default')
        })
    });

    return (
        <section className={styles.favoriteStoreSection}>
            <div className={styles.titleHolder} style={{ backgroundColor: lightColor }}>
                <h1 className={styles.title}>About Us</h1>
                <img className={styles.leafImg} src={leafImg} alt="leaf-img"></img>
            </div>
            <div className={styles.mainWrap}>
                <div className={styles.favoriteStoreWrap}>
                    <div className={styles.favoriteStoreContent}>
                        <h2 className={styles.mainTitle} style={{ textAlign: 'left' }}>
                            We Are Your Favourite Store.
                        </h2>
                        <p>Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.</p>
                        <p>Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.</p>
                    </div>
                    <div className={styles.favoriteStoreImageHolder}>
                        <img src={grapesImg} className={styles.grapesImg} alt="banner-grapes-img"></img>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default FavoriteStoreContainer;