import styles from "./HealthCare.module.css";
import Footer from "./Footer";
import { useEffect } from "react";
const HealthCare = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.services7}`);
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
            {/* <div className={styles.services7}> */}
            <div className={`${styles.services7} ${styles.hidden}`}>

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
