import { useEffect } from "react";
import styles from "./KeyDifferentators.module.css";
import OurCaseStudies from "./OurCaseStudies";
const KeyDifferentators = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.home16}`);
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
            {/* <div className={styles.home16}> */}
            <div className={`${styles.home16} ${styles.hidden}`}>

                <b className={styles.keyDifferentiators}>KEY DIFFERENTIATORS</b>
                <img className={styles.icon} alt="" src="/-1.svg" />
                <img className={styles.icon1} alt="" src="/2.svg" />
                <img className={styles.icon2} alt="" src="/1.svg" />
                <div className={styles.frameParent13}>
                    <div className={styles.groupParent}>
                        <img className={styles.frameChild10} alt="" src="/group-6.svg" />
                        <div className={styles.customSoftwareSolutions}>
                            Custom software solutions to meet your business needs and
                            requirements.
                        </div>
                    </div>
                    <div className={styles.groupParent1}>
                        <img className={styles.frameChild11} alt="" src="/group-10.svg" />
                        <div className={styles.informedTechnologyDecisions}>
                            {" "}
                            Informed technology decisions aligned with your business goals and
                            objectives.
                        </div>
                    </div>
                    <div className={styles.groupParent2}>
                        <img className={styles.frameChild12} alt="" src="/group-4.svg" />
                        <div className={styles.transformingBusinessProcesse}>
                            Transforming business processes and operations with digital
                            solutions for enhanced efficiency and customer experience.
                        </div>
                    </div>
                    <div className={styles.groupParent}>
                        <img className={styles.frameChild13} alt="" src="/group-40.svg" />
                        <div className={styles.transformingBusinessProcesse}>
                            Custom automation solutions to streamline and automate repetitive
                            tasks for increased productivity and cost savings.
                        </div>
                    </div>
                    <div className={styles.groupParent2}>
                        <img className={styles.frameChild12} alt="" src="/group-26.svg" />
                        <div className={styles.transformingBusinessProcesse}>
                            Unlocking insights from data to enable informed decisions and drive
                            business outcomes.
                        </div>
                    </div>
                    <div className={styles.groupParent5}>
                        <img className={styles.frameChild15} alt="" src="/group-41.svg" />
                        <div className={styles.transformingBusinessProcesse}>
                            Harnessing Advanced AI/ML Technologies for Predictive Capabilities.
                        </div>
                    </div>
                </div>
            </div>
            <OurCaseStudies />
        </>
    );
};

export default KeyDifferentators;
