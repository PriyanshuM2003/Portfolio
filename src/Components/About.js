import React from 'react'

function About() {

    return (
        <>
            <section className='about' id='about'>
                <div className='container'>
                    <div className='profile-img' data-aos="fade-right" data-aos-delay="300">
                        <img src="images/profile.jpeg" alt="" />
                    </div>
                    <div className='about-details' data-aos="fade-left" data-aos-delay="300">
                        <div className='about-heading'>
                            <h1>About</h1>
                            <h6>Myself</h6>
                        </div>
                        <p>
                            Hi, I'm Priyanshu Mishra. A passionate Full Stack Developer | Software Developer from India and pursuing my Bachelor's of Technology Degree from Dr.
                            Akhilesh Das Gupta Institute of Technology And Management, Delhi. <br />
                            I'm looking to Collaborate on any PROJECT which solves any real-life problem.
                        </p>
                        <div className='social-media'>
                            <ul className='nav-list'>
                                <li>
                                    <a className='icon-link' target="_blank" href="https://drive.google.com/file/d/16zs4zn1Yxy-DTDL44VTrT1bRH3h_HQXB/view?usp=sharing" rel='noopener noreferrer'>
                                        <i className='fa fa-file'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className='icon-link' href="https://github.com/PriyanshuM2003" target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-github'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/PriyanshuM2003" className='icon-link' target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className='icon-link' href="https://twitter.com/PRIYANSHUm2003?t=tOzbEIhaRUPfDyVAKrjt6Q&s=09" target='_blank' rel='noopener noreferrer'>
                                        <i className='fa-brands fa-x-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className='icon-link' href="https://www.instagram.com/priyanshu__m24/" target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-instagram'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;