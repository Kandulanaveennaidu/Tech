import { Link } from "react-router-dom";
import styles from "./Empoweringdigital.module.css";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import OurVision from "./OurVision";
// import Cursor from "./Cursor";


const Empoweringdigital = () => {
    const [showElements, setShowElements] = useState(true); // Changed destructuring
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY + window.scrollY;

        setCursorX(x);
        setCursorY(y);
    };

    const toggleElements = () => {
        setShowElements(prevState => !prevState);
    };
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            window.location.href = selectedValue;
        }
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
            <div className={styles.container}>
                <div className={styles.container}>
                    <div className={styles.home}>
                        <div className={styles.toggleButton} onClick={toggleElements}>
                            <MenuIcon />
                        </div>
                        <div className={styles.homeChild} />
                        <div className={styles.parallaxImageY}>
                            <img
                                className={styles.parallaxImageX}
                                alt=""
                                src="/Circuit-bg.png"
                            />
                        </div>
                        <Link to="/" >
                            <img
                                className={styles.techoptimalogo2Icon}
                                alt=""
                                src="/logo.png"
                            />
                        </Link>
                        <div className={styles.aboutUsParent}>
                            <Link to="/about" className={styles.aboutUs}>
                                About Us
                            </Link>
                            {/* <Link to="/#" className={styles.aboutUs}>
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
                            <Link to="/#" className={styles.aboutUs}>
                                Careers
                            </Link>
                        </div>
                        <div className={styles.getInTouchWrapper}>
                            <div className={styles.getInTouch}>Get In Touch</div>
                        </div>
                        <div className={styles.scrollSlowlyFor}>
                            SCROLL SLOWLY FOR THE BEST EXPERIENCE
                        </div>
                        <div className={styles.empoweringDigitalTransformatParent}>
                            <b
                                className={styles.empoweringDigitalTransformat}
                            >{`EMPOWERING DIGITAL TRANSFORMATION  `}</b>
                            <b
                                className={styles.empoweringDigitalTransformats}
                            >{` WITH INNOVATIVE SOLUTIONS `}</b>
                            <div className={styles.letsConnectParent}>
                                <div className={styles.letsConnect}>Let’s Connect!</div>
                                <div className={styles.vectorWrapper}>
                                    <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                                </div>
                            </div>
                        </div>
                        <img className={styles.cloudIcon} alt="" src="/cloud.svg" />
                        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                        <img className={styles.homeItem} alt="" src="/vector-5.svg" />
                    </div>
                </div>
            </div >
            <OurVision />
        </>
    );
};
export default Empoweringdigital;
