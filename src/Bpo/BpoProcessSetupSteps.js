import { useEffect } from "react";
import styles from "./BpoProcessSetupSteps.module.css";
import OptimizeYourSystems from "./OptimizeYourSystems";
const BpoProcessSetupSteps = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutus13 = document.querySelector(`.${styles.bpo10}`);
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
      {/* <div className={styles.bpo10}> */}
      <div className={`${styles.bpo10} ${styles.hidden}`}>

        <b className={styles.bpoProcessSetup}>BPO PROCESS SETUP STEPS</b>
        <img className={styles.vectorIcon} alt="" src="/vectorB.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1B.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector2B.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector3B.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector4B.svg" />
        <img className={styles.vectorIcon5} alt="" src="/vector5B.svg" />
        <img className={styles.vectorIcon6} alt="" src="/vector6B.svg" />
        <img className={styles.vectorIcon7} alt="" src="/vector7B.svg" />
        <img className={styles.vectorIcon8} alt="" src="/vector8B.svg" />
        <img className={styles.vectorIcon9} alt="" src="/vector9B.svg" />
        <img className={styles.vectorIcon10} alt="" src="/vector10B.svg" />
        <img className={styles.vectorIcon11} alt="" src="/vector11B.svg" />
        <img className={styles.vectorIcon12} alt="" src="/vector12B.svg" />
        <img className={styles.vectorIcon13} alt="" src="/vector13B.svg" />
        <img className={styles.vectorIcon14} alt="" src="/vector14B.svg" />
        <img className={styles.vectorIcon15} alt="" src="/vector15B.svg" />
        <img className={styles.vectorIcon16} alt="" src="/vector16B.svg" />
        <img className={styles.vectorIcon17} alt="" src="/vector17B.svg" />
        <img className={styles.vectorIcon18} alt="" src="/vector18B.svg" />
        <img className={styles.vectorIcon19} alt="" src="/vector19B.svg" />
        <img className={styles.vectorIcon20} alt="" src="/vector20B.svg" />
        <img className={styles.vectorIcon21} alt="" src="/vector21B.svg" />
        <img className={styles.vectorIcon22} alt="" src="/vector22B.svg" />
        <img className={styles.vectorIcon23} alt="" src="/vector23B.svg" />
        <div className={styles.selectTheRight}>
          "Select the Right Provider: Comprehensive Evaluation
        </div>
        <div
          className={styles.implementMonitor}
        >{`Implement & Monitor: Efficient Infrastructure & Performance Tracking`}</div>
        <div className={styles.selectTheRight1}>
          "Select the Right Provider: Comprehensive Evaluation
        </div>
        <div
          className={styles.comprehensiveProcessMapping}
        >{`Comprehensive Process Mapping with SLA & Contract Documentation`}</div>
      </div>
      <OptimizeYourSystems />
    </>
  );
};

export default BpoProcessSetupSteps;
