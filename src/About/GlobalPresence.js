import styles from "./GlobalPresence.module.css";
import Footer from "./Footer";
const GlobalPresence = () => {
    return (
        <>
            <div className={styles.aboutus18}>
                <div className={styles.ourEstablishmentParent}>
                    <div className={styles.ourEstablishment}>Our Establishment</div>
                    <div className={styles.indiaUsa}>
                        <p className={styles.india}>INDIA</p>
                        <p className={styles.india}>USA</p>
                    </div>
                </div>
                <div className={styles.weAlsoWorkAtParent}>
                    <div className={styles.weAlsoWork}>We also Work At</div>
                    <div className={styles.ukIrelandSaudiContainer}>
                        <p className={styles.india}>UK</p>
                        <p className={styles.india}>IRELAND</p>
                        <p className={styles.india}>SAUDI ARABIA</p>
                        <p className={styles.india}>SINGAPORE</p>
                    </div>
                </div>
                <b className={styles.globalPresence}>GLOBAL PRESENCE</b>
                <img className={styles.frameIcon1} alt="" src="/frame1ss.svg" />
            </div>
            <Footer />
        </>
    );
};

export default GlobalPresence;
