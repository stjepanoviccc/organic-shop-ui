import useCheckImagePath from '../../custom_hooks/CheckImagePath';
import ContactCard from '../UI/cards/ContactCard';
import styles from './Info.module.scss';

const ContactInfo = () => {
    const leafImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/basil-leaf.png`, './static/media/basil-leaf.png');

    return (
        <section className={styles.contactInfo}>
            <div className={styles.mainWrap}>
                <div className={styles.infoWrap}>
                    <h1 className={styles.infoTitle}>Get In Touch</h1>
                    <div className={styles.infoCardHolder}>
                        <img className={styles.leafImg} src={leafImg} alt="leaf-img"></img>
                        <ContactCard></ContactCard>
                        <ContactCard></ContactCard>
                        <ContactCard></ContactCard>
                    </div>
                </div>  
            </div>
        </section>
    )
};

export default ContactInfo;