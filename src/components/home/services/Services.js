import ServicesCard from '../../UI/cards/ServicesCard';
import styles from './Services.module.scss';

const ServicesContainer = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.mainWrap}>
                <div className={styles.servicesWrap}>
                    <ServicesCard type="truck" />
                    <ServicesCard type="address" />
                    <ServicesCard type="money" />
                    <ServicesCard type="rotate" />
                </div>
            </div>
        </section>
    )
};

export default ServicesContainer;