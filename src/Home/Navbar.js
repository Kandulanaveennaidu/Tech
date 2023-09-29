import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";
import Empoweringdigital from "./Empoweringdigital";

const Navbar: FunctionComponent = () => {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.home1}>
                    <div className={styles.homeChild} />
                    <img
                        className={styles.trailingCursorIcon}
                        alt=""
                        src="/trailing-cursor.svg"
                    />
                    <img
                        className={styles.maskGroupIcon}
                        alt=""
                        src="/trailing-cursor.svg"
                    />
                    <img
                        className={styles.techoptimalogo2Icon}
                        alt=""
                        src="/techoptimalogo-2@2x.png"
                    />
                    <div className={styles.aboutUsParent}>
                        <div className={styles.aboutUs}>About Us</div>
                        <div className={styles.aboutUs}>Services</div>
                        <div className={styles.aboutUs}>Careers</div>
                    </div>
                    <div className={styles.getInTouchWrapper}>
                        <div className={styles.getInTouch}>Get In Touch</div>
                    </div>
                    <div className={styles.homeItem} />
                    <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
                    <img className={styles.frameIcon} alt="" src="/frame.svg" />
                    <img className={styles.cloudIcon} alt="" src="/cloud.svg" />
                    <img className={styles.homeInner} alt="" src="/vector-5.svg" />
                    <b className={styles.ourMission}>OUR MISSION</b>
                </div>
            </div>
            <Empoweringdigital />
        </>
    );
};

export default Navbar;
