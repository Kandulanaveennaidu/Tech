import { useEffect } from "react";
import styles from "./Bfsi.module.css";
import Retail from "./Retail";
const Bfsi = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.services5}`);
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
            {/* <div className={styles.services5}> */}
            <div className={`${styles.services5} ${styles.hidden}`}>

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
