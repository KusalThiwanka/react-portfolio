import React from "react";
import './header.css'
// import KUSAL from '../../assets/kusal_img.png'
import {BsLinkedin, BsGithub, BsTwitter, BsStackOverflow, BsChevronDoubleDown} from 'react-icons/bs'

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './Model'

const Header = () => {
    return (
        <header>
            <div className="container header_container" id="header">
                <h5>Hello I'm</h5>
                <h1>Kusal Thiwanka</h1>
                <h5>Fullstack Developer</h5>
                <div className="header_btns">
                    <a className="btn" href="https://kusalthiwanka.com/kusal_thiwanka_cv.pdf" target="_blank" rel="noreferrer">View CV</a>
                    <a className="btn btn-primary " href="#contact">Let's Talk</a>
                </div>
                <div className="header_social">
                    <a href="https://www.linkedin.com/in/kusal-thiwanka/" target="_blank" rel="noreferrer"><BsLinkedin size={25}/></a>
                    <a href="https://github.com/KusalThiwanka" target="_blank" rel="noreferrer"><BsGithub size={25}/></a>
                    <a href="https://twitter.com/KusalThiwanka" target="_blank" rel="noreferrer"><BsTwitter size={25}/></a>
                    <a href="https://stackoverflow.com/users/11021308/kusal-thiwanka" target="_blank" rel="noreferrer"><BsStackOverflow size={25}/></a>
                </div>
                <div className="header_scroll">
                    <a href="#menubar"><BsChevronDoubleDown size={25}/></a>
                </div>
                {/* <div className="header_img">
                    <img src={KUSAL} alt="Kusal Thiwanka Profile" />
                </div> */}
                <div className="header_model">
                    <Canvas className='canvas'>
                        <OrbitControls enableZoom={true} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                        <Suspense fallback={null}>
                        <Model />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </header>
    )
}

export default Header