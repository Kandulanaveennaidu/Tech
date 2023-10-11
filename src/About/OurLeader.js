import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import styles from "./OurLeader.module.css";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import OurProces from './OurProcess';
import GlobalPresence from './GlobalPresence';
import Contact from './Contact';
const OurLeader = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleImageClick = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    }
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.home22}`);
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

            {/* <div className={styles.home22}> */}
            <div className={`${styles.home22} ${styles.hidden}`}>

                <b className={styles.ourLeaders} style={{ fontSize: '47px', whiteSpace: 'nowrap' }}>OUR FOUNDING LEADERS</b>
                <div className={styles.knowTheTeamWrapper}>
                    <div className={styles.knowTheTeam}>Know the Team</div>
                </div>
                <div className={styles.ceoCfoParent}>
                    <div className={styles.ceoCfo}></div>
                    <div className={styles.pramod}>Pramod</div>
                </div>
                <div className={styles.parent}>
                    <div className={styles.div}>“</div>
                    <div className={styles.div1}>“</div>
                    <div className={styles.atTechoptimaWe}>

                        At TechOptima, we lead with innovation, empowering businesses through
                        cutting-edge technology solutions. As CEO, I foster a culture of
                        excellence, driving digital transformation for our clients' remarkable
                        success. We are your trusted partner, inspiring positive change in the
                        industry, with a focus on customer satisfaction and strategic growth.
                    </div>
                </div>
                <div className={styles.home22Child11} />
                <div className={styles.ctoParent}>
                    <div className={styles.cto}></div>
                    <div className={styles.bhaskar}>Bhaskar</div>
                </div>
                <div className={styles.asCtoILeadATeamOfInnovParent}>
                    <div className={styles.atTechoptimaWe}>
                        As CTO, I lead a team of innovators committed to delivering
                        cutting-edge solutions that revolutionize industries and enhance user
                        experiences. At TechOptima, we constantly explore emerging
                        technologies to stay ahead of the curve, offering our clients the most
                        advanced solutions.
                    </div>
                    <div className={styles.div}>“</div>
                    <div className={styles.div1}>“</div>
                </div>
                <div className={styles.groupPresidentParent}>
                    <div className={styles.cto}></div>
                    <div className={styles.raghavacharyulu}>Raghavacharyulu</div>
                </div>
                <div className={styles.container}>
                    <div className={styles.div}>“</div>
                    <div className={styles.div1}>“</div>
                    <div className={styles.atTechoptimaWe}>
                        As the Chief Strategy Officer, my focus is on driving TechOptima's
                        growth through strategic planning, innovation, and client-centric
                        solutions. We position ourselves as a leading technology solutions
                        provider. Our commitment to excellence ensures high-impact results for
                        our clients, solidifying our position in the IT industry.
                    </div>
                </div>

                <div className={styles.image69Wrapper} onClick={() => handleImageClick(`
                    25 years experience in various leadership roles at Merrilynch, GE Capital, UBS and Cognizant With deep domain expertise in multiple domains and predominantly in Financial industry. Extensive experience in Application Delivery and Group Operations across US, India, and APAC regions. Deep expertise in Execution excellence and Delivery of complex, large & high visible engagements from Conceptualization to production cutover

                    Experience in building Offshore Delivery Center for IT Development services from scratch including setting up a business entity, infrastructure, hiring and retaining the best talent Experience in successfully defining, executing and stabilizing complex global programs spread across multiple Continents, Countries, Programs and Technologies in the area of enterprise solution Responsible for P & L, Strategic Planning, Business Development, Client Management, and overseeing Global Operations.
                `)}>
                    <img className={styles.image69Icon} alt="" src="/image-69@2x.png" />
                </div>
                <div className={styles.image54Wrapper} onClick={() => handleImageClick(`
                    Bhaskar Kuchana is a Hyderabad-based CTO with over 28 years of experience in various leadership roles across North America, EMEA, Canada, and Australia. He specializes in technology strategy, solution engineering, people leadership, project delivery, governance, and cost management. Bhaskar has deep expertise in digital transformation, cloud transformation, new product development, full-stack development using Microsoft technologies, data science, and DevOps implementations. He has successfully led various Agile, Scrum, Waterfall, TOGAF, Kaizen, Lean, and Six Sigma methodologies-based enterprise architecture and technology assignments. His experience covers various domains, including Financial/Retirement, Wealth Management, BKFS, Healthcare, and Title Insurance.

                    Throughout his career, Bhaskar has provided thought leadership in multiple roles, commencing as a Design Engineer and marking an upward movement in the career ladder to serve as Sr. Director, Sr. Manager, Asst.Vice President, and Sr.Consultant/Tech Lead. He has a PGDM on Bigdata, Data Science, and AI/ML, and is currently pursuing TOGAF certification. Bhaskar is a well-regarded leader with unparalleled business acumen in delivering cutting-edge, futuristic technology, governance, operations, and transformation solutions. He has designed Financial Planning Applications scalable for clients like Fidelity, Home Depot, and Time Warner, and implemented a Digital Signature Platform and Crowd Sourcing Platform (BPO Oper.)
                `)}>
                    <img className={styles.image54Icon} alt="" src="/image-54@2x.png" />
                </div>
                <div className={styles.image71Wrapper} onClick={() => handleImageClick(`
                    PV Raghavacharyulu, also known as Raghu, has over 30 years of experience in building organizations in the client servicing zone for software and ITES. He was the COO for the IPISG division at First American India and head Strategic Ops (COO) for Banking and Financial Services (BPS) operations at Cognizant, where he was responsible for driving critical strategic initiatives for the businesses. He played a lead role in developing go-to-market strategies for the mortgage business and was also responsible for cost and revenue optimization, knowledge management, and career architecture.

                    Raghu believes that excellence should be a habit for an organization to be successful and that strategy, innovation, employee engagement, and customer delight are the four pillars necessary to achieve it. He holds a Master's in Management from the Indian Institute of Management, Ahmedabad, and currently sits on the Board of Advisors for the Asian School of Business Management.

                    In his previous assignments, Raghu was the CEO for technology and call center divisions of Vishaka group and the Executive Director at Indo Infotech Ltd. Under his leadership, the enterprise he led grew from 200 to 2500 FTE with processes across the Mortgage Value Chain.

                    Raghu's specialties include strategic planning and execution, management consulting, building high-performing teams and leadership, interactive industry dynamics, high profile client relations, strategic partnership and alliance building, business development and negotiations, and risk and contingency planning. He holds Six Sigma Black Belt certification and is also certified by Thomas International in Thomas Profiling.
                `)}>
                    <img className={styles.image71Icon} alt="" src="/image-71@2x.png" />
                </div>
                {showModal && (
                    <div className={`${styles.modal} ${showModal ? styles.show : ""}`}>
                        <div className={styles.modalContent}>
                            {modalContent}
                            <div className={styles.closeicon}>
                                <button onClick={handleCloseModal}>
                                    <CloseIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Contact />
        </>
    )
}

export default OurLeader