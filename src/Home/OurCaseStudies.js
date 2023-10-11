import { Link } from "react-router-dom";
import styles from "./OurCaseStudies.module.css";
import OurClients from "./OurClients";
import { useEffect } from "react";
const Home20 = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.home20}`);
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

            {/* <div className={styles.home20}> */}
            <div className={`${styles.home20} ${styles.hidden}`}>

                <b className={styles.ourCaseStudies}>OUR CASE STUDIES</b>
                <div className={styles.component778Parent}>

                    <Link className={styles.link} to="/casestudy1">
                        <div className={styles.component778}>
                            <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
                            <div className={styles.marketRiskManagement}>
                                Market Risk Management System for a US-Based Crypto Trading Platform
                            </div>
                        </div>
                    </Link>
                    {/* //////////////////////////////////////////////////////////////////////////// */}
                    <Link className={styles.link} to="/casestudy2">
                        <div className={styles.component779}>
                            <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
                            <div className={styles.dataManagementSystem}>
                                Data Management System for Banking Product Company
                            </div>
                        </div>
                    </Link>
                    <Link className={styles.link} to="/casestudy3">
                        <div className={styles.component780}>
                            <div className={styles.image22Parent}>
                                <img className={styles.image20Icon} alt="" src="/image-22@2x.png" />
                                <div
                                    className={styles.commoditiesPortfolioValuatio}
                                >{`Commodities Portfolio Valuation & Reporting System for an Ireland Based Trading Company`}</div>
                            </div>
                        </div>
                    </Link>
                    {/* ///////////////////////////////////////////////////////////////////////////////////////// */}


                    <Link className={styles.link} to="/casestudy4">
                        <div className={styles.component781}>
                            <img className={styles.image20Icon} alt="" src="/image-21@2x.png" />
                            <div className={styles.portfolioValuationSystem}>
                                Portfolio Valuation System for a Singapore-based Bank
                            </div>
                        </div>

                    </Link>
                    {/* //////////////////////////////////////////////////////////////////////////// */}
                </div>
            </div>
            {/* <OurLeaders /> */}
            <OurClients />

        </>
    );
};

export default Home20;

