import React from "react";
import { useInView } from 'react-intersection-observer';

export default function Skills() {

    const { ref: aniRef, inView: aniTrig } = useInView();
    const { ref: aniRef2, inView: aniTrig2 } = useInView();


    return (
        <>
            <section className="skills" id='skills'>
                <div className='container'>
                    <div className='section-heading'>
                        <h1>Skills</h1>
                        <h6>How much I have learned</h6>
                    </div>

                    <div className='skill-heading'>
                        <h1>Core Skills</h1>
                    </div>

                    <div className='prog-skill' id='prog-skill' ref={aniRef} data-aos="zoom-in-up" data-aos-delay="300">
                        <div className={`${aniTrig ? 'ring' : ''}`}>
                            <h1>HTML, CSS & JS <br /> 90% </h1>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stopColor="#e91e63" />
                                        <stop offset="100%" stopColor="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                        </div>
                        <div className={`${aniTrig ? 'ring' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>React.js <br /> 90% </h1>
                        </div>
                        <div className={`${aniTrig ? 'ring' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>Next.js<br />90%</h1>
                        </div>
                        <div className={`${aniTrig ? 'ring' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>Express.js<br />80%</h1>
                        </div>
                        <div className={`${aniTrig ? 'ring' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>Mongo DB<br />80%</h1>
                        </div>
                        <div className={`${aniTrig ? 'ring' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>PostgreSQL<br />80%</h1>
                        </div>
                        <div className={`${aniTrig ? 'ring' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>Python<br />70%</h1>
                        </div>
                    </div>
                    <br></br><br></br><br></br>
                    <div className='skill-heading'>
                        <h1>Additonal Skills</h1>
                    </div>
                    <div className='prog-skill' id='prog-skill' ref={aniRef2} data-aos="zoom-in-up" data-aos-delay="300">
                        <div className={`${aniTrig2 ? 'ring-two' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>Tailwind CSS<br />90%</h1>
                        </div>
                        <div className={`${aniTrig2 ? 'ring-two' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>BootStrap<br />90%</h1>
                        </div>
                        <div className={`${aniTrig2 ? 'ring-two' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>Material UI & Chakra UI<br />90%</h1>
                        </div>
                        <div className={`${aniTrig2 ? 'ring-two' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>Git/GitHub<br />80%</h1>
                        </div>
                        <div className={`${aniTrig2 ? 'ring-two' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>C++<br />70%</h1>
                        </div>
                        <div className={`${aniTrig2 ? 'ring-two' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>Data Structures & Algorithms<br />60%</h1>
                        </div>
                        <div className={`${aniTrig2 ? 'ring-two' : ''}`}>
                            <svg>
                                <circle cx='50%' cy='50%' r="50%"></circle>
                            </svg>
                            <h1>Java<br />40%</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}