import styles from "./OurClients.module.css";
import Contact from "./Contact";
import Footer from "./Footer";
const OurClients = () => {
    return (
        <>
            <div className={styles.home24}>

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
