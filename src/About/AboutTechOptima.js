import { Link } from "react-router-dom";
import styles from "./AboutTechOptima.module.css";
import WhyChooseUs from "./WhyChooseUs";
import React, { useState } from "react";
const AboutTechOptima = () => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    };
    const handleMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY + window.scrollY;

        setCursorX(x);
        setCursorY(y);
    };
    React.useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    const handleHover = () => {
        setShowDropdown(true);
    };

    const handleLeave = () => {
        setShowDropdown(false);
    };

    return (
        <>
            <div className={styles.cursor} style={{ transform: `translate(${cursorX}px, ${cursorY}px)` }} />
            <div className={styles.aboutus1}>
                <div className={styles.aboutus1Child} />
                <Link to="/"  >
                    <img
                        className={styles.techoptimalogo2Icon}
                        alt=""
                        // src="/techoptimalogo-2@2x.png"
                        src="/logo.png"
                    />
                </Link>
                <div className={styles.aboutUsParent}>
                    <Link to="/about" className={styles.aboutUs}>
                        About Us
                    </Link>
                    {/* <Link to="/" className={styles.aboutUs}>
                        Services
                    </Link>
                    <select className={styles.select} onChange={handleSelectChange}>
                        <option value="/"></option>
                        <option value="/service">IT SERVICES</option>
                        <option value="/BPO">TOS (BPO)</option>
                    </select> */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        <span className={styles.aboutUs}>Services</span>
                        <div
                            className={showDropdown ? `${styles.dropdownContent} ${styles.show}` : styles.dropdownContent}
                        >
                            <Link to="/service" className={styles.dropdownItem}>
                                IT SERVICES
                            </Link>
                            <Link to="/BPO" className={styles.dropdownItem}>
                                TOS (BPO)
                            </Link>
                        </div>
                    </div>
                    <Link to="/" className={styles.aboutUs}>
                        Careers
                    </Link>

                </div>
                <div className={styles.getInTouchWrapper}>
                    <div className={styles.getInTouch}>Get In Touch</div>
                </div>
                <div className={styles.aboutTechoptimaPvtLtdWrapper}>
                    <b className={styles.aboutTechoptimaPvtContainer}>
                        <span>{`ABOUT `}</span>
                        <span className={styles.techoptima}>TECHOPTIMA</span>
                        <span> PVT LTD</span>
                    </b>
                </div>
                <img className={styles.layer1Icon} alt="" src="/layer-1ss.svg" />
                <img className={styles.frameIcon} alt="" src="/framess.svg" />
                <img className={styles.cloudIcon} alt="" src="/cloudss.svg" />
                <b className={styles.ourMission}>OUR MISSION</b>
                <div className={styles.techoptimaPvtLtdContainer}>
                    <p className={styles.techoptimaPvtLtd}>
                        TechOptima Pvt Ltd is a company incorporated under the Companies Act
                        2013, India. <br /> Our corporate head office is located in Hyderabad, India.
                    </p>
                    <p className={styles.techoptimaPvtLtd}>
                        We are into information technology business providing application
                        development and support services. With our strong domain and technical
                        strength, we help you design technically sound Digital solutions with
                        a quick time to market and keep you ahead of your competition. We
                        offer the right mix of experience, expertise, and resources to turn
                        your challenges into opportunities.
                    </p>
                </div>
            </div >
            <div />
            <WhyChooseUs />
        </>
    );
};

export default AboutTechOptima;
