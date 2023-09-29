import React, { useState, useEffect } from "react";
import styles from "./CustomCursor.module.css"; // You can define your cursor styles in a CSS module
import Home from "./home";
const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateCursorPosition);

        return () => {
            window.removeEventListener("mousemove", updateCursorPosition);
        };
    }, []);

    return (
        <>
            <div
                className={styles.customCursor}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            ></div>
            <Home />
        </>
    );
};

export default CustomCursor;
