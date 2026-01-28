import React from "react";
import './menubar.css'
import {BsFillHouseFill, BsFillPersonLinesFill, BsFillAwardFill, BsFillDisplayFill, BsHeadset} from 'react-icons/bs'
import {useState, useEffect} from 'react'

const Menubar = () => {
    const [activeNav, setactiveNav] = useState('#header')
    
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['header', 'about', 'skills', 'portfolio', 'testimonials', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setactiveNav(`#${section}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav>
            <a href="#header" className={activeNav === '#header' ? 'active':''} onClick={()=>setactiveNav('#header')} aria-label="Home"><BsFillHouseFill size={25}/></a>
            <a href="#about" className={activeNav === '#about' ? 'active':''} onClick={()=>setactiveNav('#about')} aria-label="About"><BsFillPersonLinesFill size={25}/></a>
            <a href="#skills" className={activeNav === '#skills' ? 'active':''} onClick={()=>setactiveNav('#skills')} aria-label="Skills"><BsFillAwardFill size={25}/></a>
            <a href="#portfolio" className={activeNav === '#portfolio' ? 'active':''} onClick={()=>setactiveNav('#portfolio')} aria-label="Portfolio"><BsFillDisplayFill size={25}/></a>
            <a href="#contact" className={activeNav === '#contact' ? 'active':''} onClick={()=>setactiveNav('#contact')} aria-label="Contact"><BsHeadset size={25}/></a>
        </nav>
    )
}

export default Menubar