import BelowFooter from './BelowFooter';
import styles from './Footer.module.scss';
import LogoArea from './areas/Logo';
import QuickLinksArea from './areas/QuickLinks';
import DownloadArea from './areas/Download';
import SiteLinksArea from './areas/SiteLinks';
import GreenLinksArea from './areas/GreenLinks';

const Footer = () => {
    return (
        <footer>
            <section className={styles.footerSection}>
                <div className={styles.mainWrap}>
                    <div className={styles.footerWrap}>
                        <div className={styles.logoArea}><LogoArea /></div>
                        <div className={styles.quickLinksArea}><QuickLinksArea /></div>
                        <div className={styles.downloadArea}><DownloadArea /></div>
                        <div className={styles.siteLinksArea}><SiteLinksArea /></div>
                        <div className={styles.greenLinksArea}><GreenLinksArea /></div>
                    </div>
                </div>
            </section>
            <section className={styles.belowFooterSection}>
                <div className={styles.mainWrap}><BelowFooter /></div>
            </section>
        </footer>
    )
};

export default Footer;