import { useEffect } from "react";
import styles from "./HealthCare.module.css";
import KeyDifferentators from "./KeyDifferentators"
import TitleInsurance from "./TitleInsurance";
const HealthCare = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.home10}`);
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
            {/* <div className={styles.home10}> */}
            <div className={`${styles.home10} ${styles.hidden}`}>

                <b className={styles.industries1}>INDUSTRIES</b>
                <img className={styles.home10Child8} alt="" src="/group-57.svg" />
                <img className={styles.home10Child9} alt="" src="/vector-851.svg" />
                <b className={styles.healthCare}>HEALTH CARE</b>
                <div className={styles.empowerHealthcareOrganizatioContainer}>
                    <span className={styles.empower}>Empower</span>
                    <b className={styles.financialOrganization}> Healthcare</b>
                    <span className={styles.empower}>
                        <span
                            className={styles.organizationsToExpand}
                        >{` organizations to expand their services by creating a `}</span>
                        <span className={styles.financialOrganization}>
                            conducive environment
                        </span>
                        <span>{` to achieve their objectives. Our digital technology capabilities ensure healthcare services are accessible anytime and anywhere, allowing `}</span>
                        <span className={styles.financialOrganization}>
                            seamless delivery
                        </span>
                        <span className={styles.organizationsToExpand}>
                            {" "}
                            of care to patients.
                        </span>
                    </span>
                </div>
            </div>
            <TitleInsurance />
        </>
    );
};

export default HealthCare;
