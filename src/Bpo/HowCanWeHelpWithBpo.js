import { useEffect } from "react";
import styles from "./HowCanWeHelpWithBpo.module.css";
import StreamlinedProcess from "./StreamlinedProcess"
const HowCanWeHelpWithBpo = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutus13 = document.querySelector(`.${styles.bpo4}`);
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
      {/* <div className={styles.bpo4}> */}
      <div className={`${styles.bpo4} ${styles.hidden}`}>

        <b className={styles.howCanWe}>HOW CAN WE HELP WITH BPO?</b>
        <img className={styles.icon} alt="" src="/--1B.svg" />
        <div className={styles.tailoredSolutionsOurCustomWrapper}>
          <div className={styles.tailoredSolutionsOurContainer}>
            <p className={styles.collaborativeSynergyWeWork}>
              <span className={styles.collaborativeSynergy}>
                {" "}
                Tailored Solutions:
              </span>
              <span>
                {" "}
                Our custom BPO offerings fit your unique needs, ensuring
                efficiency and cost-effectiveness.
              </span>
            </p>
            <p className={styles.collaborativeSynergyWeWork}>{`  `}</p>
            <p className={styles.collaborativeSynergyWeWork}>
              <span className={styles.collaborativeSynergy}>
                Experts at Your Service:
              </span>
              <span>
                {" "}
                Let our skilled team take the Business Transactions and allow you
                to focus on your Success in the Market.
              </span>
            </p>
          </div>
        </div>
      </div>
      <StreamlinedProcess />
    </>
  );
};

export default HowCanWeHelpWithBpo;
