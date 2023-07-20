import React from 'react'

export default function Experience() {
    return (
        <>
            <section className='experience' id='experience'>
                <div className='container'>
                    <div className='section-heading'>
                        <h1>Work Experience</h1>
                        <h6>Past and Current Jobs</h6>
                    </div>
                    <div className='timeline' data-aos='fade-down' data-aos-delay='300'>
                        <ul>
                            <li className='date' data-date='May/23 - Present'>
                                <h1>ButterPaper</h1>
                                <p>Currently doing internship at ButterPaper as a Backend developer.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
