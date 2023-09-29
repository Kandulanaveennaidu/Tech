import styles from "./Retail.module.css";
import HealthCare from "./HealthCare";
const Retail = () => {
    return (
        <>
            <div className={styles.services6}>

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
