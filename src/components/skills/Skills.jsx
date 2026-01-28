import React from "react";
import "./skills.css";
import JSLogo from "../../assets/skills_logo/js.webp";
import ReactLogo from "../../assets/skills_logo/react.png";
import PythonLogo from "../../assets/skills_logo/python.webp";
import DjangoLogo from "../../assets/skills_logo/django2.png";
import TypeScriptLogo from "../../assets/skills_logo/typescript.webp";
import DBMLogo from "../../assets/skills_logo/dbm.png";
import CloudLogo from "../../assets/skills_logo/cloud.webp";
import HTMLCSSLogo from "../../assets/skills_logo/htmlcss.png";
import OSLogo from "../../assets/skills_logo/os.png";
import PMLogo from "../../assets/skills_logo/pm.png";
import SecurityLogo from "../../assets/skills_logo/security.png";

const skills_list = [
    {
        id: 1,
        image: PythonLogo,
        title: "Python",
    },
    {
        id: 2,
        image: JSLogo,
        title: "JavaScript",
    },
    {
        id: 3,
        image: TypeScriptLogo,
        title: "TypeScript",
    },
    {
        id: 4,
        image: ReactLogo,
        title: "React",
    },
    {
        id: 5,
        image: DjangoLogo,
        title: "Django",
    },
    {
        id: 6,
        image: HTMLCSSLogo,
        title: "HTML / CSS",
    },
    
    {
        id: 7,
        image: CloudLogo,
        title: "Cloud Computing",
    },
    {
        id: 8,
        image: DBMLogo,
        title: "Database Management",
    },
    {
        id: 9,
        image: OSLogo,
        title: "System and Environment",
    },
    {
        id: 10,
        image: PMLogo,
        title: "Project Management and Tools",
    },
    {
        id: 11,
        image: SecurityLogo,
        title: "Networking and Security",
    },
];

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="section_title">My Skills</h2>
            <div className="container container_skills">
                {skills_list.map(({ id, image, title }) => {
                        return (
                            <article key={id} className="skill_item">
                                <div className="skill_item_image">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="skill_item_title">{title}</div>
                                {/* <a href={link} className="btn">View More</a> */}
                            </article>
                        );
                    })}
            </div>
        </section>
    );
};

export default Skills;
