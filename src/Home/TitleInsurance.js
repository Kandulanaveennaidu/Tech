import React, { useEffect } from 'react'
import styles from "./TitleInsurance.module.css"
import KeyDifferentators from './KeyDifferentators'
// import CoreCompetencies from "./CoreCompetencies"
const TitleInsurance = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.home12}`);
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
            {/* <div className={styles.home12}> */}
            <div className={`${styles.home12} ${styles.hidden}`}>

                <b className={styles.industries1}>INDUSTRIES</b>
                <img
                    className={styles.insurancePolicyIcon}
                    alt=""
                    src="/insurance-policy.svg"
                />
                <img className={styles.home12Child10} alt="" src="/vector-85.svg" />
                <b className={styles.titleInsurance}>TITLE INSURANCE</b>
                <div className={styles.leverageOurExtensiveContainer1}>
                    <span className={styles.leverageOurExtensiveDomain}>
                        <span>
                            Leverage our extensive domain knowledge and advanced technologies
                            like
                        </span>
                        <span className={styles.financialOrganization}>
                            {" "}
                            Big Data, AI, and ML
                        </span>
                        <span className={styles.toGainA}>
                            {" "}
                            to gain a competitive edge in the
                        </span>
                    </span>
                    <b className={styles.financialOrganization}> Insurance Sector.</b>
                    <span className={styles.leverageOurExtensiveDomain}>
                        {" "}
                        As a proven leader, we excel in providing digital solutions for
                        Health, General, and Life Insurance, ensuring you stay ahead in the
                        market.
                    </span>
                </div>
            </div>
            <KeyDifferentators />
        </>
    )
}

export default TitleInsurance