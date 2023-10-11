import { useEffect } from "react";
import Contact from "./Contact";
import OurLeader from "./OurLeader";
import styles from "./WhyChooseUs.module.css";
// import OurCaseStudies from "./OurCaseStudies";

const WhyChooseUs = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.home18}`);
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
            {/* <div className={styles.home18}> */}
            <div className={`${styles.home18} ${styles.hidden}`}>

                <b className={styles.whyChooseUs}>WHY CHOOSE US?</b>
                <div className={styles.satisfiedParent}>
                    <img className={styles.satisfiedIcon} alt="" src="/satisfied.svg" />
                    <div className={styles.agileMethodologyFor}>
                        Agile methodology for efficient and adaptable delivery, ensuring
                        customer satisfaction.
                    </div>
                </div>
                <div className={styles.systemCentralRadialParent}>
                    <img
                        className={styles.systemCentralRadial}
                        alt=""
                        src="/system-central-radial.svg"
                    />
                    <div className={styles.comprehensiveRangeOf}>
                        Comprehensive range of technology services covering software
                        development, digital transformation, and data analytics.
                    </div>
                </div>
                <div className={styles.groupParent6}>
                    <img className={styles.frameChild16} alt="" src="/group-21.svg" />
                    <div className={styles.deepIndustryKnowledge}>
                        Deep industry knowledge and expertise for tailored solutions.
                    </div>
                </div>
                <div className={styles.groupParent7}>
                    <img className={styles.frameChild17} alt="" src="/group-16.svg" />
                    <div className={styles.agileMethodologyFor}>
                        User-centric approach for enhanced user experience and customer
                        loyalty.
                    </div>
                </div>
                <div className={styles.groupParent8}>
                    <img className={styles.frameChild18} alt="" src="/group-17.svg" />
                    <div className={styles.agileMethodologyFor}>
                        Proactive risk management and compliance practices for a secure
                        operation.
                    </div>
                </div>
                <div className={styles.layer1Group}>
                    <img className={styles.layer1Icon5} alt="" src="/Layer_1kkk.svg" />
                    <div
                        className={styles.agileMethodologyFor}
                    >{`Innovative & Problem Solving through partnering with Clients.`}</div>
                </div>
            </div>
            <OurLeader />
        </>
    );
};

export default WhyChooseUs;
