import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <div className={styles.home27}>
            <div className={styles.contactUs919704448850Container}>
                <p className={styles.contactUs}>CONTACT US</p>
                <p className={styles.contactUs}>&nbsp;</p>
                <p className={styles.contactUs}>+919704448850</p>
                <p className={styles.contactUs}>&nbsp;</p>
                <p className={styles.contactUs}>&nbsp;</p>
                <p className={styles.blankLine3}>&nbsp;</p>
            </div>
            <div className={styles.aboutUsServicesContainer}>
                <p className={styles.contactUs}>ABOUT US</p>
                <p className={styles.contactUs}>&nbsp;</p>
                <p className={styles.contactUs}>Services</p>
                <p className={styles.contactUs}>Careers</p>
            </div>
            <div className={styles.followUsOn}>FOLLOW US ON</div>
            <div className={styles.wantHelpClickContainer}>
                <p className={styles.contactUs}>
                    Want Help? Click Here to chat with us on
                </p>
                <p className={styles.contactUs}>
                    Operating Hours: 10:00AM to 8:00PM Monday to Saturday
                </p>
            </div>
            <img className={styles.vectorIcon} alt="" src="/vectorsss.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector1sss.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector2sss.svg" />
        </div>
    );
};

export default Footer;
