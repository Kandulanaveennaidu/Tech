import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeDComponent = () => {
    const containerRef = useRef();

    useEffect(() => {
        let isMounted = true; // To prevent memory leaks

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = () => {
            if (isMounted) {
                requestAnimationFrame(animate);

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render(scene, camera);
            }
        };

        animate();

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Adjust animation based on scroll position
            cube.rotation.x = scrollPosition * 0.001;
            cube.rotation.y = scrollPosition * 0.001;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            isMounted = false;
            containerRef.current.removeChild(renderer.domElement);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <div ref={containerRef} />;
};

export default ThreeDComponent;
