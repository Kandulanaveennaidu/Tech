import { useEffect } from "react";
import styles from "./OurStrategy.module.css";
import OurValues from "./OurValues"
const OurStrategy = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.aboutus13}`);
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
            {/* <div className={styles.aboutus13}> */}
            <div className={`${styles.aboutus13} ${styles.hidden}`}>
                <div className={styles.aboutus13Child4} />
                <img className={styles.chessboardIcon} alt="" src="/chessboardss.svg" />
                <b className={styles.ourStrategy}>OUR STRATEGY</b>
                <img className={styles.aboutus13Child5} alt="" src="/group-51ss.svg" />
                <img className={styles.aboutus13Child6} alt="" src="/group-52ss.svg" />
                <div className={styles.ourStrategyAtTechoptimaRevWrapper}>
                    <div className={styles.ourStrategyAtContainer}>
                        <span>{`Our strategy at TechOptima revolves around four pillars: `}</span>
                        <span
                            className={styles.span}
                        >{`Ready Business Knowledge, Technology Expertise, Accelerators, and Delivery Excellence. `}</span>
                        <span>{`With deep industry knowledge and expertise, we provide tailored insights and cutting-edge solutions for the `}</span>
                        <span className={styles.span}>Banking, Financial,</span>
                        <span>{` and `}</span>
                        <span className={styles.span}>Insurance</span>
                        <span>
                            {" "}
                            sectors. Our Accelerators expedite time-to-market and maximize ROI,
                            while our commitment to Delivery Excellence ensures on-time and
                            on-budget project delivery.
                        </span>
                    </div>
                </div>
            </div>
            <OurValues />
        </>
    );
};

export default OurStrategy;
