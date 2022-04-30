import React from 'react'
import './testimonials.css'
import CLIENT1 from '../../assets/testimonial/avatar1.jpg';
import CLIENT2 from '../../assets/testimonial/avatar2.jpg';
import CLIENT3 from '../../assets/testimonial/avatar3.jpg';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {

    const testimonial_data = [
        {
            id:1,
            client_name:"Kusal Thiwanka",
            image:CLIENT1,
            review:"Where possible, we recommend using glTF (GL Transmission Format). Both .GLB and .GLTF versions of the format are well supported. Because glTF is focused on runtime asset delivery, it is compact to transmit and fast to load. Features include meshes, materials, textures, skins, skeletons, morph targets, animations, lights, and cameras."
        },
        {
            id:2,
            client_name:"Kusal Thiwanka",
            image:CLIENT2,
            review:"Where possible, we recommend using glTF (GL Transmission Format). Both .GLB and .GLTF versions of the format are well supported. Because glTF is focused on runtime asset delivery, it is compact to transmit and fast to load. Features include meshes, materials, textures, skins, skeletons, morph targets, animations, lights, and cameras."
        },
        {
            id:3,
            client_name:"Kusal Thiwanka",
            image:CLIENT3,
            review:"Where possible, we recommend using glTF (GL Transmission Format). Both .GLB and .GLTF versions of the format are well supported. Because glTF is focused on runtime asset delivery, it is compact to transmit and fast to load. Features include meshes, materials, textures, skins, skeletons, morph targets, animations, lights, and cameras."
        }
    ]
    
    return (
        <section id="testimonials">
            <h2>Testimonials</h2>
            <Swiper className="container container_testimonials" modules={[Navigation, Pagination]} slidesPerView={1} navigation pagination={{ clickable: true }} >
                { 
                    testimonial_data.map(({id, client_name, image, review}) => {
                        return (
                            <SwiperSlide key={id} className="testimonial">
                                <div className="client_avatar">
                                    <img src={image} alt="Client Avatar" />
                                </div>
                                <h4 className='client_name'>{client_name}</h4><br />
                                <small className="client_review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials