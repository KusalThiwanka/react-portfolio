import React from 'react';
import './skills.css'
import ProgressBar from 'react-animated-progress-bar';


const Skills = () => {
  return (
    <section id="skills">
        <h2>My Skills</h2>
        <div className="container container_skills">
            <div className="skills">
                <div className="skill">
                    <h5>Python</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="83" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>Django</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="88" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>PHP</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="88" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>Solidity</h5>
                    <ProgressBar  width="100%" height="10px" rect fontColor="gray" percentage="38" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>Java Script</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="78" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>React</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="73" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>HTML / CSS</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="93" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>SQL</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="83" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>REST API</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="73" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>Linux Environment</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="68" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>NGINX / Apache</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="68" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>Git and Github</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="88" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
                <div className="skill">
                    <h5>Wordpress / Shopify / Moodle platforms</h5>
                    <ProgressBar width="100%" height="10px" rect fontColor="gray" percentage="93" rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#4db5ff" trackBorderColor="grey" 
                    style={{}}/>
                </div>
            </div>
            <div className="soft_skills">
                <div className="soft_skill">
                    <h5>Problem Solving</h5>
                    <ProgressBar width="200" trackWidth="10" percentage="83" bgColor="#333333" />
                </div>
                <div className="soft_skill">
                    <h5>TeamWork</h5>
                    <ProgressBar width="200" trackWidth="10" percentage="88" bgColor="#333333" />
                </div>
                <div className="soft_skill">
                    <h5>Fast Learner</h5>
                    <ProgressBar width="200" trackWidth="10" percentage="78" bgColor="#333333" />
                </div>
                <div className="soft_skill">
                    <h5>Communocation</h5>
                    <ProgressBar width="200" trackWidth="10" percentage="73" bgColor="#333333" />
                </div>
                <div className="soft_skill">
                    <h5>Time Management</h5>
                    <ProgressBar width="200" trackWidth="10" percentage="78" bgColor="#333333" />
                </div>
                <div className="soft_skill">
                    <h5>Googling</h5>
                    <ProgressBar width="200" trackWidth="10" percentage="88" bgColor="#333333" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills