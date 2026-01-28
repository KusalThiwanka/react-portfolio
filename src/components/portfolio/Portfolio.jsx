import React from "react";
import "./portfolio.css";
import PROJECT1 from "../../assets/portfolio/online-class-learning-management-system.jpg";
import PROJECT2 from "../../assets/portfolio/proposal-and-quatation-management-system.jpg";
import PROJECT3 from "../../assets/portfolio/video-undownloadble-protection-service-image.jpg";
import PROJECT4 from "../../assets/portfolio/company-website-landing-page-react-responsive-mobile-friendly.jpg";
import PROJECT5 from "../../assets/portfolio/website-landing page-web-page.jpg";
import PROJECT6 from "../../assets/portfolio/online-store-ecommerce-virtual-store-shopify.jpg";

const portfolio_data = [
    {
        id: 1,
        image: PROJECT1,
        title: "Learning Management System",
        description: "Django",
        link: "/project1",
    },
    {
        id: 2,
        image: PROJECT2,
        title: "Custom Point of Sale System",
        description: "Django",
        link: "/project2",
    },
    {
        id: 3,
        image: PROJECT3,
        title: "Video Protection Service",
        description: "Partnership with KILATECH",
        link: "/project3",
    },
    {
        id: 4,
        image: PROJECT4,
        title: "Custom CRM System",
        description: "PHP",
        link: "/project4",
    },
    {
        id: 5,
        image: PROJECT5,
        title: "Company WebSites",
        description: "React",
        link: "/project5",
    },
    {
        id: 6,
        image: PROJECT6,
        title: "E-Commerce WebSites",
        description: "Wordpress or Shopify",
        link: "/project6",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <div className="container portfolio_container">
                {portfolio_data.map(({ id, image, title, description, link }) => {
                    return (
                        <article key={id} className="portfolio_item">
                            <div className="portfolio_item_image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="portfolio_item_title">
                                <h4>{title}</h4>
                                <small>{description}</small>
                            </div>
                            {/* <a href={link} className="btn">View More</a> */}
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
