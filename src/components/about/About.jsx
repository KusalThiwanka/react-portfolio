import React from "react";
import './about.css'
import KUSAL from '../../assets/about_img.jpeg'
import {FaAward, FaDesktop, FaUsers} from 'react-icons/fa'

const About = () => {
    return (
        <section id="about">
            <h2 className="section_title">About Me</h2>
            <div className="container about_container">
                <div className="about_img">
                    <img src={KUSAL} alt="Kusal Thiwanka" />
                </div>
                <div className="about_text">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years Experience</small>
                        </article>
                        <article className="about_card">
                            <FaDesktop className="about_icon"/>
                            <h5>Projects</h5>
                            <small>20+ Projects</small>
                        </article>
                        <article className="about_card">
                            <FaUsers className="about_icon"/>
                            <h5>Clients</h5>
                            <small>30+ Happy Clients</small>
                        </article>
                    </div>
                    <p className="about_description">
                        I am Full Stack Developer with three years of experience on developing scalable web applications and working across the full stack. Excellence experience in analysis, designing, development, implementation and testing of various internet base applications. Expert in several of languages and platforms. <br />I'm utilizing my knowledge to solve practical problems in the real world and getting opportunities to step beyond my comfort zone and extend my expertise while providing significant service to the community
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About