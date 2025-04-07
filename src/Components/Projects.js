import React, { useState } from "react";
import { projectData } from "../data/project";

const projectTabs = [
  { id: "tab1", title: "Full Stack Development" },
  { id: "tab2", title: "Python" },
  { id: "tab3", title: "Other" },
];

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
            {projectTabs.map((tab) => (
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
      <img src={project.imgSrc} alt="" width={400} height={186} />
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
