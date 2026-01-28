import React from "react";
import "./testimonials.css";
import CLIENT1 from "../../assets/testimonial/avatar1.jpg";
import CLIENT2 from "../../assets/testimonial/avatar2.jpg";
import CLIENT3 from "../../assets/testimonial/avatar3.jpg";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
    // Exactly all the features you need for multi-currency selling. The support is excellent: Akila is knowledgeable, quick, and with an eye for style, so the end result matches the store aesthetics well. Currency Converter Ultimate has excellent customization. It integrates with Shopify Payments.

    const testimonial_data = [
        {
            id: 1,
            client_name: "James William",
            image: CLIENT1,
            review: "I have had an ongoing relationship with Kusal and He has continued to deliver great quality professional services for my company development needs. Kusal exceeded my expectations. I can highly recommend his expertise for programming. Thank you!",
        },
        {
            id: 2,
            client_name: "Rajitha Senanayake",
            image: CLIENT2,
            review: "I am really impressed by the quality of services I received from Kusal Thiwanka. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good POS system for my pharmacy. My revenue has increased and I will definitely use his services again.",
        },
        {
            id: 3,
            client_name: "Adaliya Rosella",
            image: CLIENT3,
            review: "We had a very intricate Illustrator website design which needed to be written in React, and Kusal paid exceptional attention to detail to make sure the site was delivered with pixel perfection. He went above and beyond and put in the extra hours to make sure we were happy and our project was executed precisely to our blueprint. We will definitely be using Kusal in the future and recommend him for your React website needs!",
        },
    ];

    return (
        <section id="testimonials">
            <h2 className="section_title">Testimonials</h2>
            <Swiper 
                className="container container_testimonials" 
                modules={[Navigation, Pagination]} 
                slidesPerView={1} 
                spaceBetween={40}
                navigation 
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
            >
                {testimonial_data.map(({ id, client_name, image, review }) => {
                    return (
                        <SwiperSlide key={id} className="testimonial">
                            <div className="client_avatar">
                                <img src={image} alt={`${client_name} - Client testimonial`} />
                            </div>
                            <h4 className="client_name">{client_name}</h4>
                            <br />
                            <small className="client_review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
