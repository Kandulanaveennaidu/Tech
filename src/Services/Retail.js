import styles from "./Retail.module.css";
import HealthCare from "./HealthCare";
import { useEffect } from "react";
const Retail = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.services6}`);
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
            {/* <div className={styles.services6}> */}
            <div className={`${styles.services6} ${styles.hidden}`}>

                <b className={styles.ourDomainExpertise}>OUR DOMAIN EXPERTISE</b>
                <img className={styles.layer1Icon3} alt="" src="/layer-14sss.svg" />
                <b className={styles.retail}>Retail</b>
                <div className={styles.techoptimaEnablesSeamlessOmWrapper}>
                    <div className={styles.techoptimaEnablesSeamless}>
                        TechOptima enables seamless omni-channel retailing, integrating
                        physical stores, online platforms, and mobile apps for a consistent
                        shopping experience and enhanced customer engagement. Utilising data
                        analytics and AI, we offer personalised shopping recommendations and
                        advanced customer insights. We accelerate contactless payments and
                        self-service through mobile wallets and self-checkout systems. Our
                        smart store technologies, like IoT, beacons, and RFID tags, enable
                        real-time inventory tracking, while our POS systems enhance efficiency
                        and inventory management. Elevate your retail experience with
                        TechOptima's innovative solutions for improved customer satisfaction
                        and business growth.
                    </div>
                </div>
            </div>
            <HealthCare />
        </>
    );
};

export default Retail;
