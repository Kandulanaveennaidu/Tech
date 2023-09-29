import styles from "./casestudy4.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Casestudy4 = () => {
  const handleBackButtonClick = () => {
    window.history.back(); // Simulate browser's back functionality
  };
  return (
    <div className={styles.casestudy4}>
      <div className={styles.backButtons} onClick={handleBackButtonClick}>
        <ArrowBackIcon className={styles.arrowIcon} />
      </div>
      <b className={styles.portfolioValuationSystem}>
        Portfolio Valuation System for a Singapore-based Bank
      </b>
      <div className={styles.techoptimaDevelopedAContainer}>
        <p className={styles.techoptimaDevelopedAPortfol}>
          <span>
            <span className={styles.techoptima}>TechOptima</span>
          </span>
          <span>
            <span>
              {" "}
              developed a portfolio valuation system for a Singapore-based bank
              to cater to the portfolio valuation of BTB deals. Here are the key
              details of the project:
            </span>
          </span>
        </p>
        <p className={styles.techoptimaDevelopedAPortfol}>
          <span>
            <span
              className={styles.servicesRendered}
            >{`Services Rendered: `}</span>
            <span>
              Development of loaders for trade upload files received from the
              bank, development of market data loaders to upload the market data
              for various asset classes to price all the trades, support for
              application monitoring and portfolio valuation report generation,
              development of automation scripts and step functions to trigger
              automated job execution, and monitoring job execution through step
              functions to ensure job and data dependencies are addressed.
            </span>
          </span>
        </p>
        <p className={styles.techoptimaDevelopedAPortfol}>
          <span>
            <span
              className={styles.servicesRendered}
            >{`Technologies Used: `}</span>
            <span>{`Python3.9, Pandas, NumPy, PyCharm, Java1.8, Rest services using Spring Boot, Eureka Server, AWS EC2, Lambda & Step functions, S3 buckets, JIRA, Bitbucket, and TeamCity.`}</span>
          </span>
        </p>
        <p className={styles.techoptimaDevelopedAPortfol}>
          <span>
            <span className={styles.servicesRendered}>{`Summary: `}</span>
            <span>
              The system sources trade data from customers and uploads the data
              into the database for portfolio valuation and market risk
              calculations. TechOptima developed loaders for trade upload files
              received from the Singapore-based bank and market data loaders to
              upload the market data for various asset classes to price all the
              trades. We supported the application to monitor the data loading
              and generate the portfolio valuation reports. Additionally, we
              developed automation scripts and step functions to trigger
              automated job execution and monitored job execution through step
              functions to ensure job and data dependencies were addressed.
            </span>
          </span>
        </p>
        <p className={styles.techoptimaDevelopedAPortfol}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.techoptimaDevelopedAPortfols}>
          <span>
            <span>
              The portfolio valuation system developed by TechOptima enabled the
              Singapore-based bank to efficiently manage portfolio valuation
              requirements for BTB deals, resulting in improved market risk
              calculations and portfolio performance.
            </span>
          </span>
        </p>
      </div>
      <img className={styles.layer1Icon} alt="" src="/layer-1NNN.svg" />
      <img
        className={styles.freepikShadowInject27Icon}
        alt=""
        src="/freepikshadowinject27N.svg"
      />
      <img
        className={styles.freepikFloorInject27Icon}
        alt=""
        src="/freepikfloorinject27N.svg"
      />
      <img className={styles.layer1Icon1} alt="" src="/layer-11N.svg" />
    </div>
  );
};

export default Casestudy4;
