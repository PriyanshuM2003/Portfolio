import React from 'react'

export default function Contact() {
    return (
        <>
            <section className='contact' id='contact'>
                <div className='container'>
                    <div className='section-heading'>
                        <h1>Contact</h1>
                        <h6>Let's work together</h6>
                    </div>
                    <form action='' data-aos='fade-up' data-aos-delay='300'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' id='name' placeholder="Enter your name..." required />
                        <label htmlFor='name'>Email:</label>
                        <input type='text' name='email' id='email' placeholder="Enter your email..." required />
                        <label htmlFor='service'>Services</label>
                        <select name='services' id='service'>
                            <option value=''>Full-Stack Developer</option>
                            <option value=''>Software & Application Programmer</option>
                            <option value=''>Product Strategy & Data Analyst</option>
                        </select>
                        <label htmlFor='subject'>Subject:</label>
                        <textarea name='subject' id='subject' cols='30' rows='10'></textarea>
                        <input align='center' type='submit' value='Submit'></input>
                    </form>
                </div>
            </section>
        </>
    )
}
