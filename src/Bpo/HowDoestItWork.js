import styles from "./HowDoestWork.module.css";
import HowCanWeHelpWithBpo from "./HowCanWeHelpWithBpo"
const HowDoestItWork = () => {
  return (
    <>
      <div className={styles.bpo2}>
        <img className={styles.layer1Icon} alt="" src="/layer-1B.svg" />
        <b className={styles.howDoesIt}>HOW DOES IT WORK?</b>
        <div className={styles.collaborativeSynergyWeWorkWrapper}>
          <div className={styles.collaborativeSynergyWeContainer}>
            <p className={styles.collaborativeSynergyWeWork}>
              <span className={styles.collaborativeSynergy}>
                {" "}
                Collaborative Synergy:
              </span>
              <span>
                {" "}
                We work hand in hand with your business, understanding your needs
                to create a seamless partnership.
              </span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.collaborativeSynergyWeWork}>
              <span className={styles.collaborativeSynergy}>
                Boosted Efficiency:
              </span>
              <span>
                {" "}
                Rest assured as our BPO experts transform tedious tasks into
                time-saving solutions.
              </span>
            </p>
          </div>
        </div>
      </div>
      <HowCanWeHelpWithBpo />
    </>
  );
};

export default HowDoestItWork;
