import React from 'react'
import './footer.css'
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
        <ul className="permalinks">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
            <a href="https://www.facebook.com/kusal.thiwanka"><BsFacebook /></a>
            <a href="https://www.instagram.com/"><BsInstagram /></a>
            <a href="https://twitter.com/KusalThiwanka"><BsTwitter /></a>
            <a href="https://www.linkedin.com/in/kusal-thiwanka/"><BsLinkedin /></a>
        </div>
        <div className="footer_copyright">
            <small>Copyright &copy;{(new Date().getFullYear())} | Kusal Thiwanka</small>
        </div>
    </footer>
  )
}

export default Footer