import React from "react";
import './menubar.css'
import {BsFillHouseFill, BsFillPersonLinesFill, BsFillAwardFill, BsFillDisplayFill, BsHeadset} from 'react-icons/bs'
import {useState} from 'react'

const Menubar = () => {
    const [activeNav, setactiveNav] = useState('#')
    return (
        <nav>
            <a href="#header" className={activeNav === '#header' ? 'active':''} onClick={()=>setactiveNav('#header')}><BsFillHouseFill size={25}/></a>
            <a href="#about" className={activeNav === '#about' ? 'active':''} onClick={()=>setactiveNav('#about')}><BsFillPersonLinesFill size={25}/></a>
            <a href="#skills" className={activeNav === '#skills' ? 'active':''} onClick={()=>setactiveNav('#skills')}><BsFillAwardFill size={25}/></a>
            <a href="#portfolio" className={activeNav === '#portfolio' ? 'active':''} onClick={()=>setactiveNav('#portfolio')}><BsFillDisplayFill size={25}/></a>
            <a href="#contact" className={activeNav === '#contact' ? 'active':''} onClick={()=>setactiveNav('#contact')}><BsHeadset size={25}/></a>
        </nav>
    )
}

export default Menubar