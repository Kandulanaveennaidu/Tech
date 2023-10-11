// import { useEffect } from "react";
// import styles from "./FetureDirectionsAndBeyond.module.css";
// import Footer from "./Footer";
// const FetureDirectionsAndBeyond = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const aboutus13 = document.querySelector(`.${styles.bpo17}`);
//       const offset = aboutus13.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       if (offset < windowHeight * 0.7) {
//         aboutus13.classList.add(styles.show);
//       } else {
//         aboutus13.classList.remove(styles.show);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <>
//       <div className={`${styles.bpo17} ${styles.hidden}`}>
//         <b className={styles.futureDirectionsAnd}>FUTURE DIRECTIONS AND BEYOND</b>
//         <div className={styles.aWellEstablishedBpoContainer}>
//           <p className={styles.collaborativeSynergyWeWork}>
//             "A well-established BPO setup, that relentlessly pursues quality,
//             customer satisfaction, and continual improvement, sets the stage for
//             long-term success and growth."
//           </p>
//           <p className={styles.collaborativeSynergyWeWork}>&nbsp;</p>
//           <p className={styles.collaborativeSynergyWeWork}>
//             By following the steps outlined in this presentation, you will be
//             well-equipped to establish and optimize an effective BPO setup that
//             meets and exceeds customer expectations. With a firm foundation, you
//             can look forward to future growth and continued success.
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default FetureDirectionsAndBeyond;


import { useEffect } from "react";
import styles from "./FetureDirectionsAndBeyond.module.css";
import Footer from "./Footer";

const FetureDirectionsAndBeyond = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutus13 = document.querySelector(`.${styles.bpoContainer}`);
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
      <div className={`${styles.bpoContainer} ${styles.hidden}`}>
        <b className={styles.futureHeading}>FUTURE DIRECTIONS AND BEYOND</b>
        <div className={styles.aWellEstablishedBpoContainer}>
          <p className={styles.bpoText}>
            "A well-established BPO setup, that relentlessly pursues quality,
            customer satisfaction, and continual improvement, sets the stage for
            long-term success and growth."
          </p>
          <p className={styles.bpoText}>&nbsp;</p>
          <p className={styles.bpoText}>
            By following the steps outlined in this presentation, you will be
            well-equipped to establish and optimize an effective BPO setup that
            meets and exceeds customer expectations. With a firm foundation, you
            can look forward to future growth and continued success.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FetureDirectionsAndBeyond;