import styles from "./OurValues.module.css"
import CoreCompetencies from "./CoreCompetencies"
import { useEffect } from "react";
const OurValues = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.aboutus10}`);
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
            {/* <div className={styles.aboutus10}> */}
            <div className={`${styles.aboutus10} ${styles.hidden}`}>
                <img className={styles.aboutus10Child3} alt="" src="/group-50ss.svg" />
                <img className={styles.aboutus10Child4} alt="" src="/group-49ss.svg" />
                <div className={styles.rectangleDiv} />
                <b className={styles.ourValues}>OUR VALUES</b>
                <div className={styles.respectForIndividualsCustoWrapper}>
                    <div className={styles.respectForIndividualsContainer}>
                        <ul className={styles.respectForIndividualsCusto}>
                            <li className={styles.strongRelationshipsTrustC}>
                                <span className={styles.respectForIndividuals}>
                                    Respect for individuals:
                                </span>
                                <span>
                                    {" "}
                                    Respect for Individual Trust Integrity Passion Energy Innovation Customer Satisfaction
                                </span>
                            </li>
                            <li className={styles.strongRelationshipsTrustCs}>
                                <span className={styles.respectForIndividuals}>
                                    Strong relationships
                                </span>
                                <span className={styles.trustCollaborationAnd}>
                                    : Trust, collaboration, and mutual growth are fostered in
                                    partnerships.
                                </span>
                            </li>
                            <li className={styles.strongRelationshipsTrustCs}>
                                <span className={styles.respectForIndividuals}>
                                    Employee engagement:
                                </span>
                                <span className={styles.trustCollaborationAnd}>
                                    {" "}
                                    Employees' goals are aligned with clients' business objectives
                                    for exceptional value.
                                </span>
                            </li>
                            <li className={styles.strongRelationshipsTrustCss}>
                                <span className={styles.respectForIndividuals}>
                                    Social impact:
                                </span>
                                <span className={styles.trustCollaborationAnd}>
                                    {" "}
                                    2% of earnings allocated to meaningful corporate social
                                    responsibility initiatives.
                                </span>
                            </li>
                            <li className={styles.highstandards} >
                                <span className={styles.respectForIndividuals}>
                                    High standards:
                                </span>
                                <span className={styles.trustCollaborationAnd}>
                                    {" "}
                                    Upholding integrity, respect, and social responsibility in all
                                    actions.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <CoreCompetencies />
        </>
    );
};

export default OurValues;
