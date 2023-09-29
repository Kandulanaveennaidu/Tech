import styles from "./Bfsi.module.css";
import Retail from "./Retail";
const Bfsi = () => {
    return (
        <>
            <div className={styles.services5}>
                <img className={styles.frameIcon1} alt="" src="/frame1sss.svg" />
                <b className={styles.ourDomainExpertise}>OUR DOMAIN EXPERTISE</b>
                <b className={styles.bfsi}>BFSI</b>
                <div className={styles.revolutionizeBfsiTechnologyWrapper}>
                    <div className={styles.revolutionizeBfsiTechnology}>
                        Revolutionize BFSI technology with TechOptima's innovative solutions.
                        Experience the ease of secure and convenient mobile and online banking
                        services through our digital banking solutions. Elevate customer
                        support and effortlessly perform banking tasks with our AI-powered
                        chatbots. Uncover fraud, assess risks, and receive personalized
                        financial advice through our advanced data analytics and AI
                        capabilities. Ensure transparent and efficient transactions with
                        blockchain technology. Streamline operations and enhance customer
                        service with robotic process automation (RPA). Benefit from robust
                        cybersecurity measures, including multi-factor authentication and data
                        privacy, for enhanced protection. Discover the future of BFSI
                        technology with TechOptima, where cutting-edge solutions meet your
                        financial needs.
                    </div>
                </div>
            </div>
            <Retail />
        </>
    );
};

export default Bfsi;
