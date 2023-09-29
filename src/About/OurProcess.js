import styles from "./OurProces.module.css";
import GlobalPresence from "./GlobalPresence";
const OurProces = () => {
    return (
        <>
            <div className={styles.aboutus15}>
                <b className={styles.ourProcess}>OUR PROCESS</b>
                <img className={styles.aboutus15Child} alt="" src="/vector-82ss.svg" />
                <img className={styles.image73Icon} alt="" src="/image-73@2xss.png" />
                <div className={styles.wrapper}>
                    <div className={styles.div}>3</div>
                </div>
                <div className={styles.aboutus15Item} />
                <div className={styles.aboutus15Inner} />
                <div className={styles.ellipseDiv} />
                <div
                    className={styles.requirementGathering}
                >{`Requirement Gathering & Analysis`}</div>
                <img className={styles.image74Icon} alt="" src="/image-74@2xss.png" />
                <div className={styles.container}>
                    <div className={styles.div}>1</div>
                </div>
                <img className={styles.image75Icon} alt="" src="/image-75@2xss.png" />
                <div className={styles.frame}>
                    <div className={styles.div}>4</div>
                </div>
                <div className={styles.vectorParent}>
                    <img className={styles.groupChild} alt="" src="/vector-83ss.svg" />
                    <img className={styles.image39Icon} alt="" src="/image-39@2xss.png" />
                    <div className={styles.frameDiv}>
                        <div className={styles.div}>2</div>
                    </div>
                    <div className={styles.groupItem} />
                    <div
                        className={styles.conceptualiseDesign}
                    >{`Conceptualise & Design`}</div>
                </div>
                <div className={styles.developmentTest}>{`Development & Test`}</div>
                <div
                    className={styles.deploymentOperationalisatio}
                >{`Deployment & Operationalisation`}</div>
            </div>
            <GlobalPresence />
        </>
    );
};

export default OurProces;
