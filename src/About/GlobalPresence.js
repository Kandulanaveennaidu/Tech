import styles from "./GlobalPresence.module.css";
import Footer from "./Footer";
import { useEffect } from "react";
const GlobalPresence = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.aboutus18}`);
            const offset = aboutus13.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (offset < windowHeight * 0.7) {
                aboutus13.classList.add(styles.show);
            } else {
                aboutus13.classList.remove(styles.show);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            {/* <div className={styles.aboutus18}> */}
            <div className={`${styles.aboutus18} ${styles.hidden}`}>

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
