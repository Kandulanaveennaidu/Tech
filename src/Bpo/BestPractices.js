import styles from "./BestPractices.module.css";
import QualityMetricesForBetterResults from "./QualityMetricesForBetterResults";
const BestPractices = () => {
  return (
    <>
      <div className={styles.bpo13}>
        <b className={styles.bestPractices}>BEST PRACTICES</b>
        <div className={styles.frameParent5}>
          <div className={styles.frameParent6}>
            <img className={styles.frameIcon} alt="" src="/frame-13BBB.svg" />
            <div className={styles.processOptimization}>Process Optimization</div>
            <div className={styles.designTheProcess}>
              Design the process for efficiency, effectiveness, and flexibility,
              using automation, standardisation, and continuous improvement.
            </div>
          </div>
          <div className={styles.frameParent6}>
            <img className={styles.frameIcon} alt="" src="/frame-131BBB.svg" />
            <div className={styles.customerFocus}>Customer Focus</div>
            <div className={styles.alignTheOutsourced}>
              Align the outsourced processes with the customer needs,
              expectations, and satisfaction, through feedback, surveys, and
              insights.
            </div>
          </div>
          <div className={styles.frameParent6}>
            <img className={styles.frameIcon} alt="" src="/frame-132BBB.svg" />
            <div className={styles.performanceManagement}>
              Performance Management
            </div>
            <div className={styles.monitorAndControl}>
              Monitor and control the performance of the provider, the process,
              and the outcomes, using metrics, dashboards, and audits.
            </div>
          </div>
        </div>
      </div>
      <QualityMetricesForBetterResults />
    </>
  );
};

export default BestPractices;
