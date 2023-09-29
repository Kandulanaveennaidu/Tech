import styles from "./Contact.module.css";
import GlobalPresence from "./GlobalPresence";
import OurLeader from "./OurLeader";

const Contact = () => {

    return (
        <>
            <div className={styles.home26}>
                <b className={styles.contactUs}>CONTACT US</b>
                <b className={styles.getintoch}>Get in Touch with Us for a Personalised Conversation</b>
                <div className={styles.siderightside} >
                    <div className={styles.firstNameWrapper}>
                        <label htmlFor="firstName" className={styles.firstName} >First Name</label>
                        <input
                            className={styles.frameInput}
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div className={styles.lastNameWrapper}>
                        <label htmlFor="lastName" className={styles.lastName}  >Last Name</label>
                        <input
                            className={styles.home26Child14}
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div className={styles.mobileNumberWrapper}>
                        <label htmlFor="mobileNumber" className={styles.mobile} >Mobile</label>
                        <input
                            className={styles.home26Child11}
                            type="text"
                            id="mobileNumber"
                            placeholder="Mobile Number"
                            required
                        />
                    </div>
                    <div className={styles.emailAddressWrapper}>
                        <label htmlFor="emailAddress" className={styles.email} >Email</label>
                        <input
                            className={styles.home26Child13}
                            type="text"
                            id="emailAddress"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div className={styles.chooseServiceParent}>
                        <label htmlFor="chooseService" className={styles.service}  >Service </label>
                        <input
                            className={`${styles.home26Child15} ${styles.inputWithArrow}`}
                            type="text"
                            id="chooseService"
                            placeholder="Choose Service"
                            required
                        />

                    </div>
                    <div className={styles.writeAnyMessageWrapper}>
                        <input
                            className={styles.home26Child12}
                            type="kandulanaveennaidu017@gmail.com"
                            id="message"
                            placeholder="Write any message"
                            required
                        />
                    </div>
                    <img className={styles.home26Child16} alt="" src="/Group 63Na.svg" />
                </div>
            </div>
            <div className={styles.submitWrapper}>
                <button className={styles.submitButton} type="submit">
                    Submit
                </button>
            </div>

            <GlobalPresence />
        </>
    );
};

export default Contact;
