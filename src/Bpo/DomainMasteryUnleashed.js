import styles from "./DomainMasteryUnleashed.module.css";
import BpoProcessSetupSteps from "./BpoProcessSetupSteps";
import { useEffect } from "react";
const DomainMasteryUnleashed = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutus13 = document.querySelector(`.${styles.bpo8}`);
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
      {/* <div className={styles.bpo8}> */}
      <div className={`${styles.bpo8} ${styles.hidden}`}>

        <div className={styles.blueBox} />
        <b className={styles.domainMasteryUnleashed}>DOMAIN MASTERY UNLEASHED</b>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.domainExpertiseParent}>
              <div className={styles.domainExpertise}>DOMAIN EXPERTISE</div>
              <img className={styles.frameIcon} alt="" src="/frameB.svg" />
            </div>
            <div className={styles.identifySubjectMatter}>
              Identify Subject Matter Experts
            </div>
            <div className={styles.domainExpertiseIs}>
              Domain expertise is critical to successful BPO execution. Identify
              and hire subject matter experts that understand your industry,
              processes, and customer needs.
            </div>
          </div>
          <div className={styles.frameParent2}>
            <img className={styles.frameChild1} alt="" src="/frame-13.svg" />
            <div className={styles.provideComprehensiveTraining}>
              Provide Comprehensive Training
            </div>
            <div className={styles.ensureThatAll}>
              Ensure that all personnel have adequate domain knowledge and
              training to execute on processes effectively.
            </div>
            <div className={styles.training}>TRAINING</div>
          </div>
          <div className={styles.frameParent2}>
            <img className={styles.frameChild1} alt="" src="/frame-131B.svg" />
            <div className={styles.fosterAStrong}>
              Foster A Strong Company Culture
            </div>
            <div className={styles.aPositiveCompany}>
              A positive company culture will encourage collaboration, creativity,
              and domain expertise sharing among employees.
            </div>
            <div className={styles.peopleFirstCulture}>PEOPLE FIRST CULTURE</div>
          </div>
        </div>
      </div>
      <BpoProcessSetupSteps />
    </>
  );
};

export default DomainMasteryUnleashed;
