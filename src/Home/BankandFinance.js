// import HealthCare from "./HealthCare";
import styles from "./BankandFinance.module.css";
import HealthCare from "./HealthCare";
const BankandFinance = () => {
    return (
        <>
            <div className={styles.home8}>
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
