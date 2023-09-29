import { Link } from "react-router-dom";
import styles from "./WhyOutSourceBpo.module.css";
import HowDoestItWork from "./HowDoestItWork";
const WhyOutSourceBpo = () => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  };
  return (
    <>
      <div className={styles.bpo}>
        <div>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </div>
        <Link to="/">
          <img
            className={styles.techoptimalogo2Icon}
            alt=""
            src="/logo.png"
          />
        </Link>
        <div className={styles.aboutUsParent}>
          <Link to="/about" className={styles.aboutUs}>
            About Us
          </Link>
          <Link to="/" className={styles.aboutUs}>
            Services
          </Link>
          <select className={styles.select} onChange={handleSelectChange}>
            <option value="/"></option>
            <option value="/service">IT SERVICES</option>
            <option value="/BPO">TOS (BPO)</option>
          </select>
          <Link to="/" className={styles.aboutUs}>
            Careers
          </Link>
        </div>
        <div className={styles.getInTouchWrapper}>
          <div className={styles.getInTouch}>Get In Touch</div>
        </div>
        <div className={styles.whyOutsourceBpoWrapper}>
          <b className={styles.whyOutsourceBpo} style={{ fontSize: '47px', whiteSpace: 'nowrap' }}>Why outSource Transaction Optimization Sevices  (BPO)  ?</b>
        </div>

        <div className={styles.embraceOutsourcingUnlockContainer}>
          <p className={styles.embraceOutsourcingUnlock}>
            {" "}
            Embrace Outsourcing: Unlock the power of BPO - where specialised teams
            handle transactional tasks, empowering you to focus on your Business
            Strategy
          </p>
          <p className={styles.embraceOutsourcingUnlock}>&nbsp;</p>
          <p className={styles.embraceOutsourcingUnlock}>
            {" "}
            Delegate with Confidence: Trust our expertise as we streamline your
            business processes, ensuring efficient and effective operations.
          </p>
        </div>
      </div>
      <HowDoestItWork />
    </>
  );
};

export default WhyOutSourceBpo;

