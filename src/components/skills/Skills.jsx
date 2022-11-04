import React from "react";
import "./skills.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Progress from "../progress/Progress";

const Skills = () => {
    var options = {
        strokeWidth: 6,
        color: "var(--color-primary)",
        trailColor: "#fff",
        trailWidth: 6,
        easing: "easeInOut",
        duration: 1400,
        text: {
            value: "",
            alignToBottom: false,
        },
    };
    var containerStyle = { width: "200px", height: "200px", margin: "100px" };
    return (
        <section id="skills">
            <h2>My Skills</h2>
            <div className="container container_skills">
                <div className="skills">
                    <div className="skill">
                        <h5>Java Script</h5>
                        <ProgressBar completed={90} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>React</h5>
                        <ProgressBar completed={85} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill" id="fuck">
                        <h5>Python</h5>
                        <ProgressBar completed={80} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>Django</h5>
                        <ProgressBar completed={85} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>PHP</h5>
                        <ProgressBar completed={90} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>HTML / CSS</h5>
                        <ProgressBar completed={90} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>Solidity</h5>
                        <ProgressBar completed={50} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>MySQL / PostgreSQL / MongoDB</h5>
                        <ProgressBar completed={75} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>Linux Environment</h5>
                        <ProgressBar completed={80} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>Docker</h5>
                        <ProgressBar completed={60} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>NGINX / Apache</h5>
                        <ProgressBar completed={60} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>CI / CD</h5>
                        <ProgressBar completed={75} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>Git and Github</h5>
                        <ProgressBar completed={80} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                    <div className="skill">
                        <h5>Wordpress / Shopify / Moodle platforms</h5>
                        <ProgressBar completed={90} bgColor="var(--color-primary)" height="7px" labelAlignment="outside" labelColor="var(--color-primary)" margin="4px" animateOnRender />
                    </div>
                </div>
                <div className="soft_skills">
                    <div className="soft_skill p_20">
                        <Progress.SemiCircle progress={0.8} options={options} initialAnimate={true} containerStyle={containerStyle} />
                        <h5>Problem Solving</h5>
                    </div>
                    <div className="soft_skill">
                        <Progress.SemiCircle progress={0.9} options={options} initialAnimate={true} containerStyle={containerStyle} />
                        <h5>Team Work</h5>
                    </div>
                    <div className="soft_skill p_20">
                        <Progress.SemiCircle progress={0.8} options={options} initialAnimate={true} containerStyle={containerStyle} />
                        <h5>Fast Learner</h5>
                    </div>
                    <div className="soft_skill">
                        <Progress.SemiCircle progress={0.7} options={options} initialAnimate={true} containerStyle={containerStyle} />
                        <h5>Communication</h5>
                    </div>
                    <div className="soft_skill p_20">
                        <Progress.SemiCircle progress={0.8} options={options} initialAnimate={true} containerStyle={containerStyle} />
                        <h5>Time Management</h5>
                    </div>
                    <div className="soft_skill">
                        <Progress.SemiCircle progress={0.9} options={options} initialAnimate={true} containerStyle={containerStyle} />
                        <h5>Googling</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
