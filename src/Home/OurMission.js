import { useEffect } from "react";
import styles from "./OurMission.module.css";
import OurStrategy from "./OurStrategy ";
// import OurVision from "./OurVision";
const OurMission = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus3 = document.querySelector(`.${styles.aboutus3}`);
            const offset = aboutus3.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (offset < windowHeight * 0.7) {
                aboutus3.classList.add(styles.show);
            } else {
                aboutus3.classList.remove(styles.show);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            {/* <div className={styles.aboutus3}> */}
            <div className={`${styles.aboutus3} ${styles.hidden}`}>
                <div className={styles.aboutus3Child} />

                <img className={styles.layer1Icon} alt="" src="/layerss-1.svg" />
                <img className={styles.frameIcon} alt="" src="/framess.svg" />
                <b className={styles.ourMission}>OUR MISSION</b>
                <div className={styles.missionBringOverallGrowthWrapper}>
                    <div className={styles.missionBringOverallContainer}>
                        <ul className={styles.missionBringOverallGrowth}>
                            <li className={styles.solutionsIncrediblyDesigned}>
                                <span className={styles.mission}>Mission:</span>
                                <span>
                                    {" "}
                                    {/* Bring overall growth to customers through industry insights and
                                    domain expertise. */}
                                    Empowering clients’ business with ready knowledge,
                                    technology excellence, accelerated solutions and proven delivery
                                </span>
                            </li>
                            {/* <li className={styles.solutionsIncrediblyDesigned}>
                                <span className={styles.mission}>Solutions:</span>
                                <span className={styles.incrediblyDesignedPragmatic}>
                                    {" "}
                                    Incredibly designed, pragmatic, and cost-effective solutions for
                                    quick goal achievement.
                                </span>
                            </li>
                            <li className={styles.solutionsIncrediblyDesigned}>
                                <span className={styles.mission}>User Experience:</span>
                                <span className={styles.incrediblyDesignedPragmatic}>
                                    {" "}
                                    Focus on enhancing user experience and high-impact technology
                                    initiatives.
                                </span>
                            </li>
                            <li className={styles.solutionsIncrediblyDesigned}>
                                <span className={styles.mission}>Market Share:</span>
                                <span className={styles.incrediblyDesignedPragmatic}>
                                    {" "}
                                    Help businesses gain market share and stay ahead in the digital
                                    landscape.
                                </span>
                            </li>
                            <li className={styles.solutionsIncrediblyDesigned}>
                                <span className={styles.mission}>
                                    Empowering Digital Transformation:
                                </span>
                                <span className={styles.incrediblyDesignedPragmatic}>
                                    {" "}
                                    Drive success through innovative solutions.
                                </span>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <OurStrategy />
        </>
    );
};

export default OurMission;
