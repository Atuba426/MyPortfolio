import React from "react";
import "./service.css"
export default function Service() {
  return (
    <div id="services" className="our-services">
      <div className="container">
        <h2
          className="section-heading aos-init aos-animate"
          data-aos-duration="1100"
          data-aos="fade-up"
          style={{ margin: " 0 auto" }}
        >
          Services
        </h2>
        <div className="services">
          <div className="service-box">
            <div
              className="icon aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
             <i className="fa-solid fa-layer-group"></i>
            </div>
            <h3
              className="aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
              Full Stack Web Development (Mern)
            </h3>
            <p
              className="aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
              I build end-to-end web applications with complete frontend, backend, and database functionality.
            </p>
          </div>

          <div className="service-box">
            <div
              className="icon aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
             <i className="fa-solid fa-palette"></i>
            </div>
            <h3
              className="aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
            Custom Landing Page Creation
            </h3>
            <p
              className="aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
              I create fast, responsive, and visually modern user interfaces.
            </p>
          </div>

          <div className="service-box">
            <div
              className="icon aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
             <i className="fa-solid fa-gears"></i>
            </div>
            <h3
              className="aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
              Backend Development (Node.js + Express)
            </h3>
            <p
              className="aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
              I develop secure server-side logic, REST APIs, and database-driven features.
            </p>
          </div>


          <div className="service-box">
            <div
              className="icon aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
            <i className="fa-solid fa-link"></i>
            </div>
            <h3
              className="aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
              API Integration & Automation
            </h3>
            <p
              className="aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
             I integrate third-party APIs and automate workflows to enhance functionality and efficiency.
            </p>
          </div>

          <div className="service-box">
            <div
              className="icon aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
             <i className="fa-solid fa-bug"></i>
            </div>
            <h3
              className="aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
              Website Maintenance / Bug Fixing
            </h3>
            <p
              className="aos-init aos-animate"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
             I provide quick fixes, updates, and ongoing support to keep websites running smoothly.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}
