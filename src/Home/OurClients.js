import styles from "./OurClients.module.css";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";
const OurClients = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutus13 = document.querySelector(`.${styles.home24}`);
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
            {/* <div className={styles.home24}> */}
            <div className={`${styles.home24} ${styles.hidden}`}>

                <b className={styles.ourClients}>OUR CLIENTS</b>
                <div className={styles.home24Inner1}>
                    <div className={styles.image41Parent}>
                        <img className={styles.image41Icon} alt="" src="/image-41@2x.png" />
                        <div className={styles.falconx}>FALCONX</div>
                        <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
                        <img className={styles.image42Icon} alt="" src="/image-42@2x.png" />
                        <img className={styles.image45Icon} alt="" src="/image-45@2x.png" />
                        <img className={styles.image44Icon} alt="" src="/image-44@2x.png" />
                        <img className={styles.image41Icon} alt="" src="/image-46@2x.png" />
                    </div>
                </div>
                <div className={styles.joinOurSatisfied}>
                    Join Our Satisfied Clients on the Path to Success!
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OurClients;
