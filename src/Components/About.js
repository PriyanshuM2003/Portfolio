import React from "react";
import { socialMediaLinks } from "../data/social-media";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="profile-img">
            <img src="images/profile.jpeg" alt="" />
          </div>
          <div className="about-details">
            <div className="about-heading">
              <h1>About</h1>
              <h6>Myself</h6>
            </div>
            <p>
              Hi, I'm Priyanshu Mishra from India and currently pursuing my
              Bachelor's of Technology Degree from Dr. Akhilesh Das Gupta
              Institute of Technology And Management, Delhi, India. I am a passionate
              and skilled Full Stack Developer with a solid foundation in web
              development, seeking opportunities to collaborate on impactful
              projects that solve real-life problems. Bringing expertise gained
              through years of experience since the early days of college, I am
              driven to leverage my skills to achieve significant advancements
              in the field.
              <br />
            </p>
            <div className="social-media">
              <ul className="nav-list">
                {socialMediaLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      className="icon-link"
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                    >
                      <i className={link.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
