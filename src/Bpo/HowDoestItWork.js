import styles from "./HowDoestWork.module.css";
import HowCanWeHelpWithBpo from "./HowCanWeHelpWithBpo"
import { useEffect } from "react";
const HowDoestItWork = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutus13 = document.querySelector(`.${styles.bpo2}`);
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
      {/* <div className={styles.bpo2}> */}
      <div className={`${styles.bpo2} ${styles.hidden}`}>
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
