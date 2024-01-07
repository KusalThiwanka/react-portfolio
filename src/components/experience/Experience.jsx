import React from "react";
import { VerticalTimeline, VerticalTimelineElement  } from "react-vertical-timeline-component";
import "./experience.css";
import 'react-vertical-timeline-component/style.min.css';
import { FaLaptopCode } from 'react-icons/fa';

const Experience = () => {

    return (
        <section id="experience">
            <h2 className="section_title">Experience</h2>
            <div className="container container_experience">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January, 2023 - Present"
                    contentStyle={{ background: 'var(--color-primary)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'var(--color-primary)', color: 'var(--color-bg-variant)' }}
                    icon={<FaLaptopCode />}
                >
                    <h3 className="vertical-timeline-element-title" style={{color:'var(--color-bg-variant)'}}>Freelancing Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color:'var(--color-bg-variant)'}}>Colombo, Sri Lanka</h4>
                    <p  style={{color:'var(--color-bg-variant)'}}>
                    Worked as a Freelancing Web Developer during my academic studies. This role allowed me to gain hands on experience in client collaboration, requirement analysis, website design and development, as well as website maintenance and support. <br/>Also, it enabled me to enhance my ability to work independently, manage diverse projects, and communicate effectively with clients. It honed my problem-solving skills and instilled a strong sense of responsibility and accountability.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'var(--color-primary)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="April, 2020 - December, 2022"
                    iconStyle={{ background: 'var(--color-primary)', color: 'var(--color-bg-variant)' }}
                    icon={<FaLaptopCode />}
                >
                    <h3 className="vertical-timeline-element-title" style={{color:'var(--color-bg-variant)'}}>Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color:'var(--color-bg-variant)'}}>KILATECH Software Development, Colombo</h4>
                    <p  style={{color:'var(--color-bg-variant)'}}>
                    As a Software Engineer at KILATECH , I excelled in developing and integrating Shopify applications, enhancing user experiences through developing shopify apps. Additionally, I contribute to the development of various web projects, showcasing versatility and proficiency in web development. <br/> My role was characterized by a dedication to agile methodologies, collaborative problem-solving, and effective communication, all of which contributed to successful project outcomes.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="April, 2019 - December, 2019"
                    contentStyle={{ background: 'var(--color-primary)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'var(--color-primary)', color: 'var(--color-bg-variant)' }}
                    icon={<FaLaptopCode />}
                >
                    <h3 className="vertical-timeline-element-title" style={{color:'var(--color-bg-variant)'}}>Trainee Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color:'var(--color-bg-variant)'}}>FMI (Pvt) Ltd, Colombo</h4>
                    <p style={{color:'var(--color-bg-variant)'}}>
                    In my role as a Trainee Software Engineer at FMI Company, I had the opportunity to contribute to significant projects, including a Proposal Management System, a Mailroom Tracking System, and the development of the FMI Feedback Mobile App. <br/>These projects allowed me to apply software engineering concepts and practices, learn about project development life cycles, and understand the importance of collaboration within a team.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;
