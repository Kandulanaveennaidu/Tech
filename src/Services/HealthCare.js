import styles from "./HealthCare.module.css";
import Footer from "./Footer";
const HealthCare = () => {
    return (
        <>
            <div className={styles.services7}>

                <b className={styles.ourDomainExpertise}>OUR DOMAIN EXPERTISE</b>
                <b className={styles.retail}>RETAIL</b>
                <img className={styles.layer1Icon4} alt="" src="/layer-16sss.svg" />
                <b className={styles.healthcare}>HealthCare</b>
                <div className={styles.techoptimaEmpowersTheHealthWrapper}>
                    <div className={styles.techoptimaEmpowersThe}>
                        TechOptima empowers the healthcare industry with cutting-edge
                        solutions. Our robust telemedicine software enables remote
                        consultations, improving patient care access. Leveraging AI and Big
                        Data, our healthcare analytics tools offer predictive analysis for
                        personalised care and better patient outcomes. With our Electronic
                        Health Records systems, healthcare providers can securely share data,
                        ensuring seamless patient care. Additionally, our practice management
                        tools streamline business operations, providing an intuitive user
                        interface and automation tools for increased efficiency and improved
                        cash flow. Partner with us to transform healthcare with innovative
                        technology and extensive expertise.
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HealthCare;
