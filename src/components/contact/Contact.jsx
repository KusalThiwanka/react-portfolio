import React, { useRef } from "react";
import "./contact.css";
import { BsEnvelope } from "react-icons/bs";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const formInputs = document.getElementById("contact_form");
        const submitBtn = document.getElementById("contact_submit_btn");
        
        if (!formInputs || !submitBtn) return;
        
        const elements = formInputs.elements;
        for (let i = 0, len = elements.length; i < len; ++i) {
            elements[i].readOnly = true;
        }
        submitBtn.style.background = "#dddddd";
        submitBtn.disabled = true;

        const emailSent = new Promise((resolve, reject) => {
            emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            ).then(
                (result) => {
                    // Reset form after successful submission
                    form.current.reset();
                    // Re-enable form inputs
                    for (let i = 0, len = elements.length; i < len; ++i) {
                        elements[i].readOnly = false;
                    }
                    submitBtn.style.background = "";
                    submitBtn.disabled = false;
                    return resolve();
                },
                (error) => {
                    // Re-enable form inputs on error
                    for (let i = 0, len = elements.length; i < len; ++i) {
                        elements[i].readOnly = false;
                    }
                    submitBtn.style.background = "";
                    submitBtn.disabled = false;
                    return reject();
                }
            );
        });
        toast.promise(emailSent, {
            pending: "Sending...",
            success: "Thank you for contacting me 🙌 I'll get back to you soon.",
            error: "Sorry. Please try another contacting method.",
        });
    };

    return (
        <section id="contact">
            <h2 className="section_title">Contact</h2>
            <div className="container container_contact">
                <div className="contact_options">
                    <article className="contact_option">
                        <BsEnvelope className="contact_option_icon" />
                        <h4>Email</h4>
                        <small>mhkusalthiwanka@gmail.com</small>
                        <br />
                        <a href="mailto:mhkusalthiwanka@gmail.com" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine className="contact_option_icon" />
                        <h4>Messenger</h4>
                        <small>Kusal Thiwanka</small>
                        <br />
                        <a href="https://m.me/kusal.thiwanka" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                    <article className="contact_option">
                        <RiWhatsappLine className="contact_option_icon" />
                        <h4>Whatsapp</h4>
                        <small>+1 647 677 2260</small>
                        <br />
                        <a href="https://wa.me/16476772260" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail} id="contact_form">
                    <input type="text" name="name" placeholder="Your Name" className="form_input" required />
                    <input type="email" name="email" placeholder="Your Email" className="form_input" required />
                    <textarea name="message" rows="9" placeholder="Your Message" className="form_input" required></textarea>
                    <button type="submit" className="btn btn-primary form_input" id="contact_submit_btn">
                        Send Message
                    </button>
                </form>
            </div>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
        </section>
    );
};

export default Contact;
