import { useEffect } from "react";
import styles from "./BestPractices.module.css";
import QualityMetricesForBetterResults from "./QualityMetricesForBetterResults";
const BestPractices = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutus13 = document.querySelector(`.${styles.bpo13}`);
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
      {/* <div className={styles.bpo13}> */}
      <div className={`${styles.bpo13} ${styles.hidden}`}>
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
