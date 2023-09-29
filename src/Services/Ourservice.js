import { Link, } from "react-router-dom";
import styles from "./OurServicess.module.css";
import MicroServices from "./MicroServices"
const OurServicess = () => {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    };
    return (
        <>
            <div className={styles.services1}>
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
                    <Link to="/#" className={styles.aboutUs}>
                        Services
                    </Link>
                    <select className={styles.select} onChange={handleSelectChange}>
                        <option value="/"></option>
                        <option value="/service">IT SERVICES</option>
                        <option value="/BPO">TOS (BPO)</option>
                    </select>
                    <Link to="/" className={styles.aboutUs}>
                        Careers
                    </Link>
                </div>
                <div className={styles.getInTouchWrapper}>
                    <div className={styles.getInTouch}>Get In Touch</div>
                </div>
                <b className={styles.ourServices}>OUR SERVICES</b>
                <div className={styles.frameParent}>
                    <div className={styles.frameGroup}>
                        <div className={styles.frameWrapper}>
                            <div className={styles.frameChild} />
                        </div>
                        <b className={styles.staffAugmentation}>Staff Augmentation</b>
                        <div className={styles.highlyQualifiedProfessionalsContainer}>
                            <p className={styles.highlyQualifiedProfessionals}>
                                Highly qualified professionals for project goals.
                            </p>
                            <p className={styles.highlyQualifiedProfessionals}>&nbsp;</p>
                            <p className={styles.highlyQualifiedProfessionals}>
                                Quick integration and high-quality output.
                            </p>
                            <p className={styles.highlyQualifiedProfessionals}>&nbsp;</p>
                            <p className={styles.highlyQualifiedProfessionals}>
                                In-house expertise and trained resources.
                            </p>
                            <p className={styles.highlyQualifiedProfessionals}>&nbsp;</p>
                            <p className={styles.highlyQualifiedProfessionals}>
                                Min 2 years - 15 + years of project lifecycle.
                            </p>
                        </div>
                        <div className={styles.layer1Wrapper}>
                            <img className={styles.layer1Icon2} alt="" src="/layer-1k.svg" />

                        </div>
                    </div>
                    <div className={styles.frameGroup}>
                        <div className={styles.frameWrapper}>
                            <div className={styles.frameChild} />
                        </div>
                        <div className={styles.layer1Container}>
                            <img className={styles.layer1Icon3} alt="" src="/layer-11k.svg" />
                        </div>
                        <b className={styles.managedServices}>Managed Services</b>
                        <div className={styles.endToEndProjectExecutionContainer}>
                            <p className={styles.highlyQualifiedProfessionals}>
                                End-to-end project execution responsibility.
                            </p>
                            <p className={styles.highlyQualifiedProfessionals}>&nbsp;</p>
                            <p className={styles.highlyQualifiedProfessionals}>
                                Accountability for outcomes and service level breaches.
                            </p>
                            <p className={styles.highlyQualifiedProfessionals}>&nbsp;</p>
                            <p
                                className={styles.highlyQualifiedProfessionals}
                            >{` Flexible engagement models (Fixed Price or Time & Material).`}</p>
                        </div>
                    </div>
                    <div className={styles.frameGroup}>
                        <div className={styles.frameWrapper}>
                            <div className={styles.frameChild} />
                        </div>
                        <div className={styles.layer1Container}>
                            <img className={styles.layer1Icon4} alt="" src="/layer-12k.svg" />

                        </div>
                        <b className={styles.pointSolutions}> Point Solutions</b>
                        <div className={styles.lowCostProductsLeveragingContainer}>
                            <p className={styles.highlyQualifiedProfessionals}>
                                Low-cost products leveraging banking and technology expertise.
                            </p>
                            <p className={styles.highlyQualifiedProfessionals}>&nbsp;</p>
                            <p className={styles.highlyQualifiedProfessionals}>
                                Innovation and automation with DevOps, RPA, and AI/ML.
                            </p>
                            <p className={styles.highlyQualifiedProfessionals}>&nbsp;</p>
                            <p className={styles.highlyQualifiedProfessionals}>
                                {" "}
                                Pre-built solutions for faster time-to-market and cost reduction.
                            </p>
                        </div>
                    </div>
                    <div className={styles.frameParent2}>
                        <div className={styles.frameWrapper}>
                            <div className={styles.frameChild} />
                        </div>
                        <div className={styles.layer1Wrapper1}>
                            <div className={styles.layer1}>
                                <img className={styles.vectorIcon1} alt="" src="/vectork.svg" />
                                <img className={styles.vectorIcon2} alt="" src="/vector1k.svg" />
                                <img className={styles.vectorIcon3} alt="" src="/vector2k.svg" />
                                <img className={styles.vectorIcon4} alt="" src="/vector3k.svg" />
                                <img className={styles.vectorIcon5} alt="" src="/vector4k.svg" />
                                <img className={styles.vectorIcon6} alt="" src="/vector5k.svg" />
                                <img className={styles.vectorIcon7} alt="" src="/vector6k.svg" />
                                <img className={styles.vectorIcon8} alt="" src="/vector7k.svg" />
                                <img className={styles.vectorIcon9} alt="" src="/vector8k.svg" />
                                <img className={styles.vectorIcon10} alt="" src="/vector9k.svg" />
                                <img className={styles.vectorIcon11} alt="" src="/vector10k.svg" />
                                <img className={styles.vectorIcon12} alt="" src="/vector11k.svg" />
                                <div className={styles.vectorParent}>
                                    <img
                                        className={styles.vectorIcon13}
                                        alt=""
                                        src="/vector12k.svg"
                                    />
                                    <img
                                        className={styles.vectorIcon14}
                                        alt=""
                                        src="/vector13k.svg"
                                    />
                                    <div className={styles.uiUx}>UI UX</div>
                                </div>
                            </div>
                        </div>
                        <b className={styles.uiuxServices}>UI/UX Services</b>
                        <div className={styles.userCentricDesignApproachContainer}>
                            <p className={styles.highlyQualifiedProfessionals}>
                                User-centric design approach.
                            </p>
                            <p className={styles.highlyQualifiedProfessionals}>&nbsp;</p>
                            <p className={styles.highlyQualifiedProfessionals}>
                                Visual and interaction design.
                            </p>
                            <p className={styles.highlyQualifiedProfessionals}>&nbsp;</p>
                            <p className={styles.highlyQualifiedProfessionals}>
                                Usability testing and user research.
                            </p>
                            <p className={styles.highlyQualifiedProfessionals}>&nbsp;</p>
                            <p className={styles.highlyQualifiedProfessionals}>
                                {" "}
                                Mobile and web application design.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <MicroServices />
        </>
    );
};

export default OurServicess;
