import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        const navToggle = () => {
            setIsOpen(window.scrollY <= -1);
        };

        window.addEventListener('scroll', navToggle);

        return () => {
            window.removeEventListener('scroll', navToggle);
        };
    }, []);

    return (
        <>
            <div className={`menu-toggler ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className='bar half start'></div>
                <div className='bar'></div>
                <div className='bar half end'></div>
            </div>
            <nav className={`top-nav ${isOpen ? "open" : ""}`}>
                <ul className="nav-list">
                    {[
                        { id: "about", label: "About" },
                        { id: "services", label: "Services" },
                        { id: "skills", label: "Skills" },
                        { id: "projects", label: "Projects" },
                        { id: "experience", label: "Experience" },
                        { id: "contact", label: "Contact" }
                    ].map(item => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} className='nav-link'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}



