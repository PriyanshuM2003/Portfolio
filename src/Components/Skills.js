import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/skills";

const SkillItem = ({ skillName, percentage, ringClass, aniTrig, index }) => {
  const animationName = `bar_${index + 1}`;
  const animationStyle = {
    animation: `${animationName} 2s linear forwards`,
    strokeDashoffset: `calc(630px - (630px * ${parseInt(percentage) / 100}))`,
  };
  return (
    <div className={`${aniTrig ? ringClass : ""}`}>
      <h1>
        {skillName}
        <br />
        {percentage}
      </h1>
      <svg>
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          cx="50%"
          cy="50%"
          r="50%"
          style={aniTrig ? animationStyle : {}}
        ></circle>
      </svg>
    </div>
  );
};

const generateKeyframes = (activeTab) => {
  let keyframes = "";
  const filteredSkills = skills.filter(
    (skill) => skill.ringClass === activeTab.ringClass
  );
  filteredSkills.forEach((skill, index) => {
    const animationName = `bar_${index + 1}`;
    const fromOffset = "630px";
    const toOffset = `calc(630px - (630px * ${
      parseInt(skill.percentage) / 100
    }))`;
    keyframes += `
      @keyframes ${animationName} {
        from {
          stroke-dashoffset: ${fromOffset};
        }
        to {
          stroke-dashoffset: ${toOffset};
        }
      }
    `;
  });
  return keyframes;
};

const skillTabs = [
  { id: "tab1", title: "Languages", ringClass: "language-ring" },
  { id: "tab2", title: "Libraries", ringClass: "library-ring" },
  { id: "tab3", title: "Frameworks", ringClass: "framework-ring" },
  { id: "tab4", title: "DB & Storage", ringClass: "dbs-ring" },
  { id: "tab5", title: "Other", ringClass: "other-ring" },
];

const Skills = () => {
  const { ref: aniRef, inView: aniTrig } = useInView();
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <style>
        {generateKeyframes(skillTabs.find((tab) => tab.id === activeTab))}
      </style>
      <section className="skills" id="skills">
        <div className="container">
          <div className="section-heading">
            <h1>Skills</h1>
            <h6>How much I have learned</h6>
          </div>

          <div className="Tabs">
            <div className="tab">
              {skillTabs.map((tab) => (
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
            <TabContent
              activeTab={activeTab}
              aniRef={aniRef}
              aniTrig={aniTrig}
            />
          </div>
        </div>
      </section>
    </>
  );
};

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

function TabContent({ activeTab, aniRef, aniTrig }) {
  return skillTabs.map((tab) => {
    if (tab.id === activeTab) {
      return (
        <div key={tab.id} className="prog-skill" id="prog-skill" ref={aniRef}>
          {skills
            .filter((skill) => skill.ringClass === tab.ringClass)
            .map((skill, index) => (
              <SkillItem
                key={index}
                skillName={skill.skillName}
                percentage={skill.percentage}
                ringClass={skill.ringClass}
                aniTrig={aniTrig}
                index={index}
                activeTab={activeTab}
              />
            ))}
        </div>
      );
    }
    return null;
  });
}

export default Skills;
