import React, { useState } from "react";

const tabData = [
  { id: "tab1", title: "Full Stack Development" },
  { id: "tab2", title: "Python" },
  { id: "tab3", title: "Other" },
];

const projectData = {
  tab1: [
    {
      title: "Portfolio",
      imgSrc: "./images/Picture2.png",
      githubUrl: "https://github.com/PriyanshuM2003/Portfolio.git",
      liveUrl: "",
      technologies: ["React.js"],
    },
    {
      title: "E-commerce",
      imgSrc: "./images/Picture16.png",
      githubUrl: "https://github.com/PriyanshuM2003/OtakuStore.git",
      liveUrl: "https://otakustore.vercel.app/",
      technologies: ["React.js", "Next.js", "Razorpay"],
    },
    {
      title: "Messenger XD",
      imgSrc: "./images/Picture3.png",
      githubUrl: "https://github.com/PriyanshuM2003/MessengerXD-chat-app.git",
      liveUrl: "https://messengerxd.vercel.app/",
      technologies: ["MERN Stack", "Chakra UI"],
    },
    {
      title: "airArticle",
      imgSrc: "./images/Picture5.png",
      githubUrl: "https://github.com/PriyanshuM2003/airArticle.git",
      liveUrl: "https://airarticle.vercel.app/",
      technologies: ["MERN Stack", "Bootstrap"],
    },
    {
      title: "LinkIt-Job Board",
      imgSrc: "./images/Picture20.png",
      githubUrl: "https://github.com/PriyanshuM2003/LinkIt.git",
      liveUrl: "https://linkit-job-board.vercel.app/",
      technologies: ["MERN Stack", "Razorpay", "MaterialUI"],
    },
    {
      title: "Super Mario Lite",
      imgSrc: "./images/Picture4.jpg",
      githubUrl: "https://github.com/PriyanshuM2003/SuperMarioLite.git",
      liveUrl: "https://priyanshum2003.github.io/SuperMarioLite/",
      technologies: ["HTML", "CSS", "JS"],
    },
  ],
  tab2: [
    {
      title: "Voting System",
      imgSrc: "./images/Picture11.jpg",
      githubUrl: "https://github.com/PriyanshuM2003/VotingSystem.git",
      liveUrl: "",
      technologies: ["Python"],
    },
    {
      title: "C.V. Tracker",
      imgSrc: "./images/Picture15.jpg",
      githubUrl: "https://github.com/PriyanshuM2003/CoronaVirusLiveTracker.git",
      liveUrl: "",
      technologies: ["Python"],
    },
    {
      title: "Weather App",
      imgSrc: "./images/Picture17.png",
      githubUrl: "https://github.com/PriyanshuM2003/WeatherApp.git",
      liveUrl: "",
      technologies: ["Python"],
    },
    {
      title: "Snake Game",
      imgSrc: "./images/Picture8.jpg",
      githubUrl: "https://github.com/PriyanshuM2003/PythonGames.git",
      liveUrl: "",
      technologies: ["Python"],
    },
    {
      title: "Word Cloud Generator",
      imgSrc: "./images/Picture7.png",
      githubUrl: "https://github.com/PriyanshuM2003/WordCloud.git",
      liveUrl: "",
      technologies: ["Python"],
    },
    {
      title: "Rock Paper Scissors",
      imgSrc: "./images/Picture12.png",
      githubUrl: "https://github.com/PriyanshuM2003/PythonGames.git",
      liveUrl: "",
      technologies: ["Python"],
    },
  ],
  tab3: [
    {
      title: "Daily-Dose News",
      imgSrc: "./images/Picture18.jpg",
      githubUrl: "https://github.com/PriyanshuM2003/Daily-Dose-News.git",
      liveUrl: "",
      technologies: ["React.js", "News API"],
    },
    {
      title: "PokeTab",
      imgSrc: "./images/Picture19.png",
      githubUrl: "https://github.com/PriyanshuM2003/PokeTab.git",
      liveUrl: "https://priyanshum2003.github.io/PokeTab/",
      technologies: ["React.js","Pokemon API"],
    },
    {
      title: "API Master",
      imgSrc: "./images/Picture14.jpg",
      githubUrl: "https://github.com/PriyanshuM2003/APImaster.git",
      liveUrl: "https://priyanshum2003.github.io/APImaster/apimaster",
      technologies: ["HTML", "JS", "Bootstrap"],
    },
    {
      title: "QR Code Generator",
      imgSrc: "./images/Picture6.png",
      githubUrl: "https://github.com/PriyanshuM2003/QRCodeGenerator.git",
      liveUrl: "",
      technologies: ["Python"],
    },
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-heading" id="projects-item">
          <h1>Projects</h1>
          <h6>View Some of my recent works</h6>
        </div>

        <div className="Tabs">
          <div className="tab">
            {tabData.map((tab) => (
              <TabItem
                key={tab.id}
                id={tab.id}
                title={tab.title}
                activeTab={activeTab}
                onClick={handleTabClick}
              />
            ))}
          </div>
        </div>
        <div className="TabContent">
          {projectData[activeTab].map((project, index) => (
            <TabContent key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TabItem({ id, title, activeTab, onClick }) {
  return (
    <li
      onClick={() => onClick(id)}
      className={activeTab === id ? "active" : ""}
    >
      {title}
    </li>
  );
}

function TabContent({ project }) {
  return (
    <div className="card">
      <img src={project.imgSrc} alt="" />
      <h1>{project.title}</h1>
      <div className="card-social-media">
        <a
          className="icon-link"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        {project.liveUrl && (
          <a
            className="icon-link"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-podcast"></i>
          </a>
        )}
      </div>
      <div className="using">
        {project.technologies.map((tech, index) => (
          <div key={index} className="using-name">
            <h6>{tech}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
