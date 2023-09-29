import styles from "./casestudy3.module.css";
import Casestudy4 from "./casestudy4";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Casestudy3 = () => {
  const handleBackButtonClick = () => {
    window.history.back(); // Simulate browser's back functionality
  };
  return (
    <>
      <div className={styles.casestudy3}>
        <div className={styles.backButtons} onClick={handleBackButtonClick}>
          <ArrowBackIcon className={styles.arrowIcon} />
        </div>
        <b
          className={styles.commoditiesPortfolioValuatio}
        >{`Commodities Portfolio Valuation & Reporting System for an Ireland Based Trading Company`}</b>
        <div className={styles.projectOverviewOurContainer}>
          <p className={styles.projectOverview}>Project Overview:</p>
          <p className={styles.ourTeamDeveloped}>
            Our team developed a Commodities Portfolio Valuation and Reporting
            System for an Ireland based commodities trading company. The system
            displays various dashboards for active commodities trades using
            commodities prices and dependent FX prices. The project was completed
            within the timeline and budget.
          </p>
          <p className={styles.ourTeamDeveloped}>&nbsp;</p>
          <p className={styles.projectOverview}>Services Provided:</p>
          <p className={styles.ourTeamDeveloped}>
            Our team provided comprehensive solutions for the Commodities
            Portfolio Valuation and Reporting System project, including building
            the backend database, middle-tier APIs, and front-end dashboards. We
            fetched ticker data in JSON files, market data such as Spot Gas, Oil,
            and FX, and built a UI Dashboard using ReactJs and DevExpress.
            Additionally, we created rest services using .Net framework for
            rendering and CRUD operations from the front-end. Our team also
            handled the deployment needs, created a SQL Server Database, Azure
            Repos (Git), and IIS Deployments, and prepared a run book. Finally, we
            utilized code analysis tools like Sonar Qube to identify potential
            issues and proactively fix them.
          </p>
          <p className={styles.ourTeamDeveloped}>&nbsp;</p>
          <p className={styles.projectOverview}>Results:</p>
          <p className={styles.ourTeamDeveloped}>
            The client was extremely satisfied with the final product, which
            displayed dashboards for active commodities trades using commodities
            prices and dependent FX prices. Our team was able to overcome several
            unique challenges during the project, including the need to fetch
            market data for various fuel commodities and FX rates.
          </p>
        </div>
        <img className={styles.layer1Icon} alt="" src="/layer-1NN.svg" />
        <img
          className={styles.freepikCharacter1Inject1Icon}
          alt=""
          src="/freepikcharacter1inject119N.svg"
        />
      </div>
      {/* <Casestudy4 /> */}
    </>
  );
};

export default Casestudy3;
