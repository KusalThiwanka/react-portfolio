import React, { Suspense } from "react";
import "./header.css";
// import KUSAL from '../../assets/kusal_img.png'
import { BsLinkedin, BsGithub, BsTwitter, BsStackOverflow, BsChevronDoubleDown } from "react-icons/bs";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import Model from "./Model";

function Loader() {
    const { progress } = useProgress();
    return <Html center>3D model {progress} % loaded</Html>;
}

const Header = () => {
    return (
        <header>
            <div className="container header_container" id="header">
                <div className="header_title">
                    <h4>Hello I'm</h4>
                    <h1>
                        <span>Kusal Thiwanka</span>
                    </h1>
                    <h4>Software Engineer</h4>
                </div>
                <div className="header_btns">
                    <a className="btn" href="https://kusalthiwanka.com/resume_kusal_thiwanka.pdf" target="_blank" rel="noreferrer">
                        Resume
                    </a>
                    <a className="btn btn-primary " href="#contact">
                        Let's Talk
                    </a>
                </div>
                <div className="header_social">
                    <a href="https://www.linkedin.com/in/kusal-thiwanka/" target="_blank" rel="noreferrer">
                        <BsLinkedin size={25} />
                    </a>
                    <a href="https://github.com/KusalThiwanka" target="_blank" rel="noreferrer">
                        <BsGithub size={25} />
                    </a>
                    <a href="https://twitter.com/KusalThiwanka" target="_blank" rel="noreferrer">
                        <BsTwitter size={25} />
                    </a>
                    <a href="https://stackoverflow.com/users/11021308/kusal-thiwanka" target="_blank" rel="noreferrer">
                        <BsStackOverflow size={25} />
                    </a>
                </div>
                <div className="header_scroll">
                    <a href="#about">
                        <BsChevronDoubleDown size={25} />
                    </a>
                </div>
                <div className="header_model">
                    <Canvas className="canvas">
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                        <Suspense fallback={<Loader />}>
                            <Model />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </header>
    );
};

export default Header;
