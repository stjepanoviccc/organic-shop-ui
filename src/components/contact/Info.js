import { useEffect } from 'react';
import { useBackgroundColorUpdate } from '../../context/NavBackgroundContext';
import useCheckImagePath from '../../custom_hooks/CheckImagePath';
import InfoCard from '../UI/cards/InfoCard';
import styles from './Info.module.scss';

const ContactInfo = () => {
    const leafImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/basil-leaf-min.png`, './static/images/basil-leaf-min.png');
    const changeBgColor = useBackgroundColorUpdate();
    const lightColor = '#f8f6f3';

    useEffect(() => {
        changeBgColor(lightColor);
        return (() => {
            changeBgColor('default')
        })
    });

    return (
        <section className={styles.contactInfo}>
            <div className={styles.titleHolder} style={{ backgroundColor: lightColor }}>
                <h1 className={styles.infoTitle}>Get In Touch</h1>
            </div>
            <div className={styles.mainWrap}>
                <div className={styles.infoWrap}>
                    <div className={styles.infoCardHolder}>
                        <img className={styles.leafImg} src={leafImg} alt="leaf-img"></img>
                        <InfoCard type="phone"></InfoCard>
                        <InfoCard type="mail"></InfoCard>
                        <InfoCard type="location"></InfoCard>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactInfo;