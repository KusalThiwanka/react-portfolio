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
        console.log(form.current);
        var formInputs = document.getElementById("contact_form");
        var elements = formInputs.elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].readOnly = true;
        }
        document.getElementById("contact_submit_btn").style.background = "#dddddd";
        document.getElementById("contact_submit_btn").disabled = true;
        
        // form.current.setAttribute("disabled", true);
        // var formData = form.current;
        // console.log(formData);
        // var formInputs = document.getElementsByClassName("form_input");
        // for (var i = 0; i < formInputs.length; i++) {
        //     formInputs[i].disabled = true;
        // }
        // document.getElementById("contact_submit_btn").style.background = "#dddddd";

        const emailSent = new Promise((resolve, reject) => {
            emailjs.sendForm("service_3yy4pxc", "template_vpc8jua", form.current, "msWxcoRERGDKEFOwz").then(
                (result) => {
                    console.log(result.text);
                    return resolve();
                },
                (error) => {
                    console.log(error.text);
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
                        <small>+94 76 924 2181</small>
                        <br />
                        <a href="https://wa.me/94769242181" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                </div>
                {/* <form ref={form} onSubmit={sendEmail} id="contact_form">
                    <input type="text" name="name" placeholder="Your Name" className="form_input" required />
                    <input type="email" name="email" placeholder="Your Email" className="form_input" required />
                    <textarea name="message" rows="9" placeholder="Your Message" className="form_input" required></textarea>
                    <button type="submit" className="btn btn-primary form_input" id="contact_submit_btn">
                        Send Message
                    </button>
                </form> */}
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
