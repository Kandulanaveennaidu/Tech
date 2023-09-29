import React from 'react'
import styles from "./TitleInsurance.module.css"
import KeyDifferentators from './KeyDifferentators'
// import CoreCompetencies from "./CoreCompetencies"
const TitleInsurance = () => {
    return (
        <>
            <div className={styles.home12}>
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