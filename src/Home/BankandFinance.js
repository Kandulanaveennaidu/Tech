// import HealthCare from "./HealthCare";
import { useEffect } from "react";
import styles from "./BankandFinance.module.css";
import HealthCare from "./HealthCare";
const BankandFinance = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.home8}`);
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
            {/* <div className={styles.home8}> */}
            <div className={`${styles.home8} ${styles.hidden}`}>

                <b className={styles.industries1}>INDUSTRIES</b>
                <img className={styles.bankIcon} alt="" src="/bank.svg" />
                <img className={styles.home8Child8} alt="" src="/vector-85.svg" />
                <b className={styles.bankingFinancials}>{`BANKING & FINANCE`}</b>
                <div className={styles.enhanceYourFinancialContainer}>
                    <span className={styles.enhanceYour}>
                        <span>Enhance your</span>
                    </span>
                    <span className={styles.financialOrganization}>
                        <span className={styles.enhanceYour}> F</span>
                        <b>inancial Organization</b>
                    </span>
                    <span className={styles.enhanceYour}>
                        <span
                            className={styles.withAdvancedTechnology}
                        >{` with advanced technology solutions. Our expertise in `}</span>
                        <span className={styles.financialOrganization}>
                            Digital Transformation, AI, Cyber Security, Blockchain,
                        </span>
                        <span className={styles.withAdvancedTechnology}>{` and `}</span>
                        <span className={styles.financialOrganization}>
                            User Experience Management
                        </span>
                        <span>
                            {" "}
                            drives better customer experiences and improved operational
                            efficiencies in the financial services sector.
                        </span>
                    </span>
                </div>
            </div>
            <HealthCare />
        </>
    );
};

export default BankandFinance;
