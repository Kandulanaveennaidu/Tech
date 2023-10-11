import styles from './Ourtechnologyofferings.module.css';
import BankandFinance from './BankandFinance';
const Ourtechnologyofferings = () => {

    return (
        <>
            <div className={styles.home5}>
                <img className={styles.frameIcon1} alt="" src="Frame.svg" />
                <b className={styles.ourTechnologyOfferings}>OUR TECHNOLOGY OFFERINGS</b>
                <div className={styles.frameParent3}>
                    <div className={styles.frameWrapper4}>
                        <div className={styles.enterprisesParent}>
                            <b className={styles.enterprises}>Enterprises</b>
                            <div className={styles.javaNetOracleContainer}>
                                <p className={styles.blankLine}>Python, .NET, Java, Node.js</p>
                                <p className={styles.blankLine}> Oracle, Sybase, SQL Server</p>
                                <p className={styles.blankLine}></p><br />
                                <p className={styles.blankLine}>UI Solutions: Angular, React, Vue, Django, jQuery,
                                    Material UI, Bootstrap</p>
                            </div>
                            <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                        </div>
                    </div>
                    <div className={styles.frameParent4}>
                        <div className={styles.enterprisesParent}>
                            {/* <b className={styles.aiml}>AI/Data Sciences</b> */}
                            <b className={styles.aiml} style={{ fontSize: '18px', whiteSpace: 'nowrap' }}>AI/Data Analytics</b>
                            <div className={styles.javaNetOracleContainer}>
                                <p className={styles.blankLine}>Data Sciences: Python, R, Big Data </p><br />


                                {/* <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" /> */}
                                <p className={styles.blankLine}>Data Analytics: JasperSoft, Power BI, Tableau, ClickView </p>


                            </div>
                        </div>
                        <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                    </div>
                    <div className={styles.frameParent4}>
                        <div className={styles.enterprisesParent}>
                            <b className={styles.integration}>Integration</b>
                            <div className={styles.webServicesMqContainer}>
                                <p className={styles.blankLine}>Web Services,</p>
                                <p className={styles.blankLine}>MQ,</p>
                                <p className={styles.blankLine}>API,</p>
                                <p className={styles.blankLine}>File based Integration.</p>
                            </div>
                        </div>
                        <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                    </div>
                </div>
                <div className={styles.frameParent6}>
                    <div className={styles.frameParent4}>
                        <div className={styles.enterprisesParent}>
                            <b className={styles.devopsServices}>DevOps Services</b>
                            <div className={styles.jenkinsJiraMavenant}>Jenkins, JIRA, Maven/Ant, GIT/SVN, RPA (BluePrism, Automation Anywhere, UIPath).</div>
                        </div>
                        <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                    </div>
                    <div className={styles.frameParent4}>
                        <div className={styles.enterprisesParent}>
                            {/* <b className={styles.dataAnalytics}>Testing Services</b> */}
                            <b className={styles.dataAnalytics} style={{ fontSize: '18px', whiteSpace: 'nowrap' }}>Testing Services</b>

                            <div className={styles.jaspersoftPowerBiContainer}>
                                {/* <p className={styles.blankLine}>{`JasperSoft, `}</p>
                                <p className={styles.blankLine}>{`Power BI, `}</p>
                                <p className={styles.blankLine}>Tableau,</p>
                                <p className={styles.blankLine}> ClickView.</p> */}
                                <div className={styles.seleniumJunitNunit1}>Selenium, Junit, Nunit, Burp, Fortify, Load Runner (Automation/Manual Testing Services).</div>
                            </div>
                        </div>
                        <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                    </div>
                    <div className={styles.frameParent4}>
                        <div className={styles.enterprisesParent}>
                            <b className={styles.testingServices}>UI/UX Services</b>
                            {/* <div className={styles.seleniumJunitNunit1}>Selenium, Junit, Nunit, Burp, Fortify, Load Runner (Automation/Manual Testing Services).</div> */}
                            <div className={styles.seleniumJunitNunit1} >
                                <p className={styles.highlyQualifiedProfessionals}>
                                    User-centric design,
                                </p>

                                <p className={styles.highlyQualifiedProfessionals}>
                                    Visual-Interaction,
                                </p>

                                <p className={styles.highlyQualifiedProfessionals}>
                                    Usability testing ,
                                </p>
                                <p className={styles.blankLine}>User research,</p>
                                <p className={styles.blankLine}>
                                    Mobile and web application design.
                                </p>
                            </div>
                        </div>
                        <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                    </div>
                </div>
            </div>
            <BankandFinance />
        </>

    );
};

export default Ourtechnologyofferings;
