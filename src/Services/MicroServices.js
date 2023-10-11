import styles from "./MicroServices.module.css";
import Bfsi from "./Bfsi";
import { useEffect } from "react";
const MicroServices = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.services3}`);
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
            {/* <div className={styles.services3}> */}
            <div className={`${styles.services3} ${styles.hidden}`}>

                <img className={styles.services3Child} alt="" src="/rectangle-2sss.svg" />
                <b className={styles.ourApproach}>OUR MICRO SERVICES</b>
                <div className={styles.frameParent3}>
                    <div className={styles.groupParent}>
                        <img className={styles.frameIcon} alt="" src="/framesss.svg" />
                        <div className={styles.assessmentComprehensiveAnalContainer}>
                            <span>Assessment:</span>
                            <span className={styles.comprehensiveAnalysisOfYour}>
                                <span className={styles.span}>{` `}</span>
                                <span>
                                    Comprehensive analysis of your systems to identify opportunities
                                    for micro-services implementation.
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.groupParent}>
                        <img className={styles.groupIcon} alt="" src="/group-67sss.svg" />
                        <div className={styles.assessmentComprehensiveAnalContainer}>
                            <span>
                                <span>Design:</span>
                                <span className={styles.span}>{` `}</span>
                            </span>
                            <span className={styles.comprehensiveAnalysisOfYour}>
                                Tailored micro-services architecture for enhanced agility and
                                accelerated feature delivery.
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.frameParent5}>
                    <div className={styles.groupContainer}>
                        <img className={styles.frameChild2} alt="" src="/group-69sss.svg" />
                        <div className={styles.assessmentComprehensiveAnalContainer}>
                            <span>{`Development: `}</span>
                            <span className={styles.comprehensiveAnalysisOfYour}>
                                Agile development and deployment of scalable and resilient
                                micro-services.
                            </span>
                        </div>
                    </div>
                    <div className={styles.groupParent1}>
                        <img className={styles.frameChild2} alt="" src="/group-70sss.svg" />
                        <div className={styles.assessmentComprehensiveAnalContainer}>
                            <span>Testing:</span>
                            <span className={styles.comprehensiveAnalysisOfYour}>
                                {" "}
                                Rigorous testing for stability, security, and performance
                                compliance.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Bfsi />
        </>
    );
};

export default MicroServices

