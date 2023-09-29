import styles from "./CoreCompetencies.module.css";
import BankandFinance from "./BankandFinance";
const CoreCompetencies = () => {
    return (
        <>
            <div className={styles.home14}>

                <b className={styles.coreCompetencies}>CORE COMPETENCIES</b>
                <div className={styles.frameParent10}>
                    <div className={styles.groupWrapper}>
                        <img className={styles.frameChild8} alt="" src="/group-60.svg" />
                    </div>
                    <div className={styles.readyBusinessKnowledgeContainer}>
                        <span>Ready Business Knowledge:</span>
                        <span className={styles.span1}>{` `}</span>
                        <span className={styles.tapIntoOur}>
                            Tap into our deep industry expertise and insights in Banking,
                            Financial, and Insurance services for tailored solutions.
                        </span>
                    </div>
                </div>
                <div className={styles.frameParent11}>
                    <div className={styles.frame1}>
                        <img
                            className={styles.illustrationIcon}
                            alt=""
                            src="/illustration.svg"
                        />
                    </div>
                    <div className={styles.technologyExcellenceExperieContainer}>
                        <span>Technology Excellence:</span>
                        <span className={styles.tapIntoOur}>
                            {" "}
                            Experience cutting-edge solutions in ADMS, Digital Transformation,
                            AI/ML, Cyber Security, and more for complex business challenges.
                        </span>
                    </div>
                </div>
                <div className={styles.frameParent12}>
                    <div className={styles.groupWrapper}>
                        <img className={styles.frameChild9} alt="" src="/group-62.svg" />
                    </div>
                    <div className={styles.readyBusinessKnowledgeContainer}>
                        <span>{`Accelerated Solutions: `}</span>
                        <span className={styles.tapIntoOur}>
                            Benefit from our frameworks and accelerators that drive faster
                            time-to-market and ensure a competitive advantage.
                        </span>
                    </div>
                </div>
                <div className={styles.layer1Parent}>
                    <div className={styles.layer12}>
                        <img
                            className={styles.freepikClockInject2Icon}
                            alt=""
                            src="/freepikclockinject2.svg"
                        />
                    </div>
                    <div className={styles.readyBusinessKnowledgeContainer}>
                        <span>Proven Delivery:</span>
                        <span className={styles.tapIntoOur}>
                            {" "}
                            Rely on our track record of on-time, on-budget delivery and
                            execution excellence, backed by experienced leadership and strong
                            governance.
                        </span>
                    </div>
                </div>
            </div>
            <BankandFinance />
        </>
    );
};

export default CoreCompetencies;
