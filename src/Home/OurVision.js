import { useEffect } from "react";
import OurMission from "./OurMission";
import styles from "./OurVisionsss.module.css";
const OurVision = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus7 = document.querySelector(`.${styles.aboutus7}`);
            const offset = aboutus7.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (offset < windowHeight * 0.7) {
                aboutus7.classList.add(styles.show);
            } else {
                aboutus7.classList.remove(styles.show);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            {/* <div className={styles.aboutus7}> */}
            <div className={`${styles.aboutus7} ${styles.hidden}`}>
                <div className={styles.whiteBox} />
                <b className={styles.ourVision}>OUR VISION</b>
                <img className={styles.aboutus7Item} alt="" src="/vector-1ss.svg" />
                <img className={styles.aboutus7Inner} alt="" src="/vector-2ss.svg" />
                <img className={styles.aboutus7Child1} alt="" src="/vector-3ss.svg" />
                <img className={styles.aboutus7Child2} alt="" src="/vector-4ss.svg" />
                <div className={styles.textField}>
                    <img src="/middle.svg" alt="" className={styles.middle} />
                    <div className={styles.visionCatalystForContainer}>
                        <p className={styles.visionCatalystForBusiness}>
                            <span className={styles.vision}>Vision:</span>
                            <span>
                                Be a preferred partner by leveraging technology, expertise,
                                and talent and deliver <br />best-in-class
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <OurMission />
        </>
    );
};

export default OurVision;

