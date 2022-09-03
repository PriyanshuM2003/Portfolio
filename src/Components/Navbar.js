import React, { useState, useEffect } from "react"
import { Link } from "react-scroll";

export default function Navbar() {

    const [isOpen, setISOpen] = useState(false)
    const navToggle = () => {
        if (window.scrollY > -1) {
            setISOpen(false)
        } else {
            setISOpen(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navToggle)
        return () => {
            window.removeEventListener('scroll', navToggle)
        }
    })

    return (
        <>
            <div className={`menu-toggler ${isOpen && "open"}`} onClick={() => setISOpen(!isOpen)}>
                <div className='bar half start'></div>
                <div className='bar'></div>
                <div className='bar half end'></div>
            </div>
            <nav className={`top-nav ${isOpen && "open"}`}>
                <ul className="nav-list">
                    <li>
                        <Link className='nav-link' to="about" spy={true} smooth={true} duration={100} offset={-10}>About</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to="services" spy={true} smooth={true} duration={100} offset={-10}>Services</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to="skills" spy={true} smooth={true} duration={100} offset={-10}>Skills</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to="portfolio" spy={true} smooth={true} duration={100} offset={-10}>Portfolio</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to="experience" spy={true} smooth={true} duration={100} offset={-10}>Experience</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to="contact" spy={true} smooth={true} duration={100} offset={-10}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
