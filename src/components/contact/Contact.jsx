import React from "react";
import './contact.css'
import { BsEnvelope } from 'react-icons/bs'
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3yy4pxc', 'template_vpc8jua', form.current, 'msWxcoRERGDKEFOwz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id="contact">
            <h2  className="section_title">Contact</h2>
            <div className="container container_contact">
                <div className="contact_options">
                    <article className="contact_option">
                        <BsEnvelope className="contact_option_icon"/>
                        <h4>Email</h4>
                        <small>mhkusalthiwanka@gmail.com</small><br />
                        <a href="mailto:mhkusalthiwanka@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine className="contact_option_icon"/>
                        <h4>Messenger</h4>
                        <small>Kusal Thiwanka</small><br />
                        <a href="https://m.me/kusal.thiwanka" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <RiWhatsappLine className="contact_option_icon"/>
                        <h4>Whatsapp</h4>
                        <small>+94 76 924 2181</small><br />
                        <a href="https://wa.me/94769242181" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="9" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact