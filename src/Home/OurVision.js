import OurMission from "./OurMission";
import styles from "./OurVisionsss.module.css";
const OurVision = () => {
    return (
        <>
            <div className={styles.aboutus7}>
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
                                {" "}
                                {/* Catalyst for business success through technology and
                                operations optimization, empowering growth and efficiency. */}
                                Be a preferred partner by leveraging technology, expertise,
                                and talent and deliver <br />best-in-class
                            </span>
                        </p>
                        {/* <p className={styles.visionCatalystForBusiness}>
                            <span className={styles.vision}>Competitive Advantage:</span>
                            <span>
                                {" "}
                                Providing distinct advantages in clients' industries with
                                innovative solutions.
                            </span>
                        </p>
                        <p className={styles.visionCatalystForBusiness}>
                            <span className={styles.vision}>Seamless Integration:</span>
                            <span>
                                {" "}
                                Envisioning a future where technology and operations
                                integrate seamlessly.
                            </span>
                        </p> */}
                    </div>
                </div>
            </div>
            <OurMission />
        </>
    );
};

export default OurVision;

