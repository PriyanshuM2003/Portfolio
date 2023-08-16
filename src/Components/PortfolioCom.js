import React, { useState } from 'react'

import TabContent from './ProjectTab/TabContent';
import TabItem from './ProjectTab/TabItem';

export default function PortfolioCom() {

    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
            <section className='portfolio' id='portfolio'>
                <div className='container'>
                    <div className='section-heading' id='portfolio-item'>
                        <h1>Portfolio</h1>
                        <h6>View Some of my recent works</h6>
                    </div>

                    <div className="Tabs">
                        <div className="tab">
                            <TabItem title="Full Stack Devlopment" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
                            <TabItem title="Python" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
                            <TabItem title="Other" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
                        </div>
                    </div>
                    <div className='Content'>
                        <div className="outlet">
                            <TabContent id="tab1" activeTab={activeTab}>
                                <div className="card">
                                    <img src="./images/Picture2.png" alt="" />
                                    <h1>Portfolio</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/Portfolio.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>React js</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./images/Picture16.png" alt="" />
                                    <h1>E-commerce</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/OtakuStore.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                        <a className='icon-link' href="https://otakustore.vercel.app/" target='_blank' rel='noopener noreferrer'>
                                            <i className='fa fa-podcast'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>Next js</h6>
                                        </div>
                                        <div className='using-name'>
                                            <h6>React js</h6>
                                        </div>
                                        <div className='using-name'>
                                            <h6>Razorpay</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./images/Picture3.png" alt="" />
                                    <h1>Messenger XD</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/MessengerXD-chat-app.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                        <a className='icon-link' href="https://messengerxd.onrender.com/" target='_blank' rel='noopener noreferrer'>
                                            <i className='fa fa-podcast'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>MERN</h6>
                                        </div>
                                        <div className='using-name'>
                                            <h6>Chakra UI</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./images/Picture5.jpg" alt="" />
                                    <h1>Daily-Dose News</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/Daily-Dose-News.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>React js</h6>
                                        </div>
                                        <div className='using-name'>
                                            <h6>News API</h6>
                                        </div>
                                        <div className='using-name'>
                                            <h6>Bootstrap</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./images/Picture14.jpg" alt="" />
                                    <h1>API Master</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/APImaster.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                        <a className='icon-link' href="https://priyanshum2003.github.io/APImaster/apimaster" target='_blank' rel='noopener noreferrer'>
                                            <i className='fa fa-podcast'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>HTML</h6>
                                        </div>
                                        <div className='using-name'>
                                            <h6>JS</h6>
                                        </div>
                                        <div className='using-name'>
                                            <h6>Bootstrap</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./images/Picture4.jpg" alt="" />
                                    <h1>Super Mario Lite</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/SuperMarioLite.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                        <a className='icon-link' href="https://priyanshum2003.github.io/SuperMarioLite/" target='_blank' rel='noopener noreferrer'>
                                            <i className='fa fa-podcast'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>HTML</h6>
                                        </div>
                                        <div className='using-name'>
                                            <h6>CSS</h6>
                                        </div>
                                        <div className='using-name'>
                                            <h6>JS</h6>
                                        </div>
                                    </div>
                                </div>
                            </TabContent>
                            <TabContent id="tab2" activeTab={activeTab}>
                                <div className="card">
                                    <img src="./images/Picture11.jpg" alt="" />
                                    <h1>Voting System</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/VotingSystem.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>Python</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./images/Picture15.jpg" alt="" />
                                    <h1>C.V. Tracker</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/CoronaVirusLiveTracker.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>Python</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./images/Picture8.jpg" alt="" />
                                    <h1>Snake Game</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/PythonGames.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>Python</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./images/Picture6.jpg" alt="" />
                                    <h1>QR Code Generator</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/QRCodeGenerator.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>Python</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./images/Picture7.png" alt="" />
                                    <h1>Word Cloud Generator</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/WordCloud.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>Python</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./images/Picture12.jpg" alt="" />
                                    <h1>R.P.S</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="https://github.com/PriyanshuM2003/PythonGames.git" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>Python</h6>
                                        </div>
                                    </div>
                                </div>
                            </TabContent>
                            <TabContent id="tab3" activeTab={activeTab}>
                                {/* <div className="card">
                                    <img src="./images/Picture16.jpg" alt="" />
                                    <h1>E-commerce</h1>
                                    <div className="card-social-media">
                                        <a className='icon-link' href="/" target='_blank' rel='noopener noreferrer'>
                                            <i className='fab fa-github'></i>
                                        </a>
                                        <a className='icon-link' href="/" target='_blank' rel='noopener noreferrer'>
                                            <i className='fa fa-podcast'></i>
                                        </a>
                                    </div>
                                    <div className='using'>
                                        <div className='using-name'>
                                            <h6>Next js</h6>
                                        </div>
                                        <div className='using-name'>
                                            <h6>React js</h6>
                                        </div>
                                        <div className='using-name'>
                                            <h6>Tailwind</h6>
                                        </div>
                                    </div>
                                </div> */}
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
