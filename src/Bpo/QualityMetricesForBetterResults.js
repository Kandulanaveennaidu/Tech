import styles from "./QualityMetricesForBetterResults.module.css";
import StrongTeamsStrongBpoResults from "./StrongTeamsStrongBpoResults";
const QualityMetricesForBetterResults = () => {
  return (
    <>
      <div className={styles.bpo15}>
        <b className={styles.qualityMetricsFor}>
          QUALITY METRICS FOR BETTER RESULTS
        </b>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <img className={styles.frameChild} alt="" src="/frame-13BBBB.svg" />
            <div className={styles.defineYourKpis}>Define Your KPIs</div>
            <div className={styles.clearlyDefineAnd}>
              Clearly define and align organizational goals with key performance
              indicators (KPIs) to measure BPO performance effectively.
            </div>
          </div>
          <div className={styles.frameGroup}>
            <img className={styles.frameChild} alt="" src="/frame-131BBBB.svg" />
            <div className={styles.implementEffectivePerformanc}>
              Implement Effective Performance Monitoring
            </div>
            <div className={styles.monitorPerformanceMetrics}>
              Monitor performance metrics on a regular basis to improve and
              fine-tune BPO operations.
            </div>
          </div>
          <div className={styles.frameGroup}>
            <img className={styles.frameChild} alt="" src="/frame-132BBBB.svg" />
            <div className={styles.establishContinuousImproveme}>
              Establish Continuous Improvement Processes
            </div>
            <div className={styles.setUpContinuous}>
              Set up continuous improvement processes with KPIs to track BPO
              performance and use these to refine operations in real-time.
            </div>
          </div>
        </div>
      </div>
      <StrongTeamsStrongBpoResults />
    </>
  );
};

export default QualityMetricesForBetterResults;
