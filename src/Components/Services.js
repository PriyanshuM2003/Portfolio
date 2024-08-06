import React from "react";

export default function Services() {
  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <div className="section-heading">
            <h1>Services</h1>
            <h6>What can I do for you</h6>
          </div>
          <div className="service-provider">
            <div className="provider">
              <div className="icon-container">
                <i className="fas fa-layer-group"></i>
              </div>
              <h1>Full-Stack Development</h1>
              <p>
                I can do Full-Stack Development. I can make asthetic Websites.
              </p>
            </div>
            <div className="provider">
              <div className="icon-container">
                <i className="fas fa-code"></i>
              </div>
              <h1>Software & Application Programmer</h1>
              <p>
                I can Develope Software and create user-friendly Application.
              </p>
            </div>
            <div className="provider">
              <div className="icon-container">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h1>
                Product Strategy & <br />
                Data Analyst
              </h1>
              <p>
                I can Analyse user data and make an optimum Strategy for Product
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
