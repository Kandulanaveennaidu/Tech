import styles from "./casestudy2.module.css";
import Casestudy3 from "./casestudy3"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Casestudy2 = () => {
  const handleBackButtonClick = () => {
    window.history.back(); // Simulate browser's back functionality
  };
  return (
    <>
      <div className={styles.casestudy2}>
        <div className={styles.backButtons} onClick={handleBackButtonClick}>
          <ArrowBackIcon className={styles.arrowIcon} />
        </div>
        <b className={styles.dataManagementSystem}>
          Data Management System for a US-based Banking Product Company
        </b>
        <div className={styles.projectDescriptionTechoptimContainer}>
          <p className={styles.projectDescription}>Project Description:</p>
          <p className={styles.techoptimaDevelopedA}>
            TechOptima developed a data management system for a US-based banking
            product company to cater to the market data requirements of various
            client-facing applications for portfolio valuation, risk management,
            and regulatory reporting. Key project details include:
          </p>
          <p className={styles.techoptimaDevelopedA}>&nbsp;</p>
          <p className={styles.projectDescription}>Services Rendered:</p>
          <ul className={styles.integrationWithIceToSource}>
            <li className={styles.theSystemSourcesDataFromV}>
              <span>
                Integration with ICE to source market data, solution design and
                architecture, cloud migration to AWS, Step functions and Lambda
                functions development, and data exception reports development.
              </span>
            </li>
            <li className={styles.theSystemSourcesDataFromV}>
              <span>
                The system sources data from various vendors for different asset
                classes, and TechOptima integrated with ICE to source market data
                using XML and .Csv formats. We designed the solution to integrate
                with various client systems and developed Step functions and
                Lambda functions to schedule application needs. Our team also
                developed data exception reports.
              </span>
            </li>
            <li className={styles.theSystemSourcesDataFromV}>
              <span>
                The data management system developed by TechOptima enabled the
                client to efficiently manage market data requirements for various
                client-facing applications, resulting in improved portfolio
                valuation, risk management, and regulatory reporting.
              </span>
            </li>
          </ul>
          <p className={styles.techoptimaDevelopedA}>&nbsp;</p>
          <p className={styles.techoptimaDevelopedA}>
            <span
              className={styles.technologiesUsed}
            >{`Technologies Used: `}</span>
            <span>{`Python3.9, Pandas, NumPy, PyCharm, Java1.8, Spring Boot, AWS EC2, Lambda & Step functions, S3 buckets, JIRA, Bitbucket, and TeamCity.`}</span>
          </p>
        </div>
        <img className={styles.layer1Icon} alt="" src="/layer-1N.svg" />
      </div>
      {/* <Casestudy3 /> */}
    </>
  );
};

export default Casestudy2;
