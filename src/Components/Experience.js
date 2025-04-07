import React from "react";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-heading">
          <h1>Work Experience</h1>
          <h6>Past and Current Jobs</h6>
        </div>
        <div className="timeline">
          <ul>
            {experiences.map((experience) => (
              <li
                key={experience.id}
                className="date"
                data-date={experience.date}
              >
                <h1>{experience.company}</h1>
                <p>{experience.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
