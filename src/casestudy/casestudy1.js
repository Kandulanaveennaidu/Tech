import styles from "./casestudy1.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Casestudy1 = () => {
    const handleBackButtonClick = () => {
        window.history.back(); // Simulate browser's back functionality
    };
    return (
        <>
            <div className={styles.casestudy1}>
                <div className={styles.backButtons} onClick={handleBackButtonClick}>
                    <ArrowBackIcon className={styles.arrowIcon} />
                </div>
                <img className={styles.image20Icon} alt="" src="/image-20@2xN.png" />
                <b className={styles.cryptoTradingPlatforms}>
                    Crypto Trading Platform's Market Risk Management System: A US-Based
                    Breakthrough
                </b>
                <div className={styles.techoptimaHelpedAContainer}>
                    <p className={styles.techoptimaHelpedACryptoTra}>
                        <span className={styles.techoptima}>TechOptima</span>
                        <span>
                            <span className={styles.span}>{` `}</span>
                            <span>
                                helped a crypto trading platform design and develop an end-to-end
                                backend risk system to fetch market data, calculate risk
                                parameters, and render data in the front end. Here are the key
                                details:
                            </span>
                        </span>
                    </p>
                    <p className={styles.techoptimaHelpedACryptoTra}>
                        <span>
                            <span className={styles.clientRequirements}>
                                Client Requirements:
                            </span>
                            <span className={styles.span1}>{` `}</span>
                            <span>
                                To build a front-end dashboard and back-end risk system for a
                                crypto trading platform, fetch market data for different asset
                                types, and build risk parameters using Python pandas and React.
                            </span>
                        </span>
                    </p>
                    <p className={styles.techoptimaHelpedACryptoTra}>
                        <span>
                            <span className={styles.clientRequirements}>
                                Solutions Provided:
                            </span>
                            <span className={styles.span3}>{` `}</span>
                            <span>
                                We built backend scripts to fetch market data, designed UI
                                dashboard and tables, created adapter scripts to extract risk
                                calculations, built all rest services using Flask, and created an
                                AWS RDS database, EC2 instance, and deployed services and
                                front-end React application using Nginx and Gunicorn.
                            </span>
                        </span>
                    </p>
                    <div>
                        <p className={styles.techoptimaHelpedACryptoTras}>
                            <span>
                                <span className={styles.clientRequirements}>Results:</span>
                                <span>
                                    <span className={styles.span3}>{` `}</span>
                                    The project was completed within six months, within budget, and
                                    met all client requirements. The client was satisfied with the
                                    final product, which allowed them to fetch market data, calculate
                                    risk parameters, and render data in the front end.
                                </span>
                            </span>
                        </p>
                    </div>
                    <p className={styles.techoptimaHelpedACryptoTra}>
                        <span>
                            <span className={styles.clientRequirements}>Challenges:</span>
                            <span>
                                <span className={styles.span1}>{` `}</span>
                                Our team was able to overcome several unique challenges during the
                                project, including the need to fetch market data for different
                                types of crypto coins. Our solutions included building a robust
                                backend engine to calculate risk parameters using Python pandas
                                and designing a user-friendly UI dashboard using React and
                                DevExpress. With our expertise, we were able to provide the client
                                with an efficient and reliable risk management system that allowed
                                them to make data-driven decisions.
                            </span>
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Casestudy1;
