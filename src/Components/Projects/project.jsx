import React from "react";

import "./project.css";

export default function Project() {
  return (
    <div className="recommendedArticle" id="projects">
      <div className="container">
        <div className="articleHead">
          <h2
            className="section-heading aos-init aos-animate"
            data-aos-duration="1100"
            data-aos="fade-up"
            style={{ margin: "0 auto" }}
          >
            My Projects/Experience
          </h2>
        </div>
        <div
          className="aos-init aos-animate"
          data-aos-duration="1100"
          style={{ marginBottom: "150px" }}
          data-aos="fade-up"
        >
          <div className="row">
            <div className="row1">
              <video
                id="myVideoPlayer"
                src="./Videos/Wanderlust video.mp4"
                width="100%"
                muted
                loop
                autoPlay
                controls
                controlsList="nodownload"
                style={{ borderRadius: "10px" }}
                oncontextmenu="return false"
              ></video>
            </div>
            <div className="row2">
              <h2
                className="aos-init mt-3 aos-animate"
                data-aos-duration="1100"
                data-aos="fade-up"
                style={{ color: "#00adb5" }}
              >
                WanderLust <br />
                <a href="https://wanderlust-jkza.onrender.com/">View Live</a>
                <span style={{ fontSize: "14px", color: "#00adb5" }}>
                  <i className="fa-solid fa-calendar-days"> </i> &nbsp;
                  <span>2025</span>
                </span>
              </h2>
              <p>
                Wanderlust is a modern stay-booking platform that allows users
                to explore, filter, and book accommodations seamlessly with a
                smooth and responsive UI.
              </p>
              <h5>
                <b>Experience</b>
              </h5>
              <div className="custom-carousel row">
                <div className=" col-1 carousel-controls">
                  <button className="prev-button-class">
                    <i className="fa-solid fa-caret-left"></i>
                  </button>
                </div>
                <div
                  className="col-10 carousel-container"
                  style={{ margin: "0 auto" }}
                >
                  <div className="carousel-track">
                    <div className="carousel-slide">
                      <p>
                      Learned how to build a complete MERN-based 
                      CRUD system for listings, reviews, and user accounts.
                      </p>
                    </div>
                    <div className="carousel-slide">
                      <p>
                      Understood authentication, authorization, 
                      and session handling in a real-world application.
                      </p>
                    </div>
                    <div className="carousel-slide">
                      <p>
                      Improved frontend skills by creating responsive pages,
                       forms, and user-friendly flows.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-controls col-1">
                  <button className="next-button-class">
                    <i className="fa-solid fa-caret-right"> </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="aos-init aos-animate"
            data-aos-duration="1100"
            style={{ marginBottom: "150px" }}
            data-aos="fade-up"
           >
            <div className="row">
              <div className="row1">
                <video
                  id="myVideoPlayer"
                  src="./Videos/Netpro.mp4"
                  width="100%"
                  muted
                  loop
                  autoPlay
                  controls
                  controlsList="nodownload"
                  style={{ borderRadius: "10px" }}
                  oncontextmenu="return false"
                ></video>
              </div>
              <div className="row2">
                <h2
                  className="aos-init mt-3 aos-animate"
                  data-aos-duration="1100"
                  data-aos="fade-up"
                  style={{ color: "#00adb5" }}
                >
                  NetPro <br />
                  <span style={{ fontSize: "14px", color: "#00adb5" }}>
                  <a href="https://net-pro-five.vercel.app//">View Live</a>
                    <i className="fa-solid fa-calendar-days"> </i> &nbsp;
                    <span>2025</span>
                  </span>
                </h2>
                <p>
                NetPro is a professional networking platform
                 where users can register, update profiles, and interact with posts.
                 It's inspired by linkedIn.
                
                </p>
                <h5>
                  <b>Experience</b>
                </h5>
                <div className="custom-carousel row">
                  <div className=" col-1 carousel-controls">
                  
                    <button className="prev-button-class">
                      <i className="fa-solid fa-caret-left"></i>
                    </button>
                  </div>
                  <div
                    className="col-10 carousel-container"
                    style={{ margin: "0 auto" }}
                  >
                    <div className="carousel-track">
                      <div className="carousel-slide">
                        <p>
                        Built secure user authentication
                         and profile update features, including image upload handling.
                        </p>
                      </div>
                      <div className="carousel-slide">
                        <p>
                        Developed scalable REST APIs and
                         learned how to manage relational data between users and posts.
                        </p>
                      </div>
                      <div className="carousel-slide">
                        <p>
                        Enhanced my React skills by creating 
                        interactive components and improving state management.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-controls col-1">
                    <button className="next-button-class">
                      <i className="fa-solid fa-caret-right"> </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="aos-init aos-animate"
            data-aos-duration="1100"
            style={{ marginBottom: "150px" }}
            data-aos="fade-up"
           >
            <div className="row">
              <div className="row1">
                <video
                  id="myVideoPlayer"
                  src="./Videos/Sas.mp4"
                  width="100%"
                  muted
                  loop
                  autoPlay
                  controls
                  controlsList="nodownload"
                  style={{ borderRadius: "10px" }}
                  oncontextmenu="return false"
                ></video>
              </div>
              <div className="row2">
                <h2
                  className="aos-init mt-3 aos-animate"
                  data-aos-duration="1100"
                  data-aos="fade-up"
                  style={{ color: "#00adb5" }}
                >
                  CA DocSuite <br />
                  <span style={{ fontSize: "14px", color: "#00adb5" }}>
                  <a href="https://wanderlust-jkza.onrender.com/">View Live</a>
                    <i className="fa-solid fa-calendar-days"> </i> &nbsp;
                    <span>2025</span>
                  </span>
                </h2>
                <p>
                A finance-focused app designed for Chartered Accountants 
                to manage documents, clients, and invoices efficiently. Building this project helped me understand real business requirements.
                </p>
                <h5>
                  <b>Experience</b>
                </h5>
                <div className="custom-carousel row">
                  <div className=" col-1 carousel-controls">
                  
                    <button className="prev-button-class">
                      <i className="fa-solid fa-caret-left"></i>
                    </button>
                  </div>
                  <div
                    className="col-10 carousel-container"
                    style={{ margin: "0 auto" }}
                  >
                    <div className="carousel-track">
                      <div className="carousel-slide">
                        <p>
                        Learned how to design database schemas for documents,
                         clients, and invoices in a real business workflow.
                        </p>
                      </div>
                      <div className="carousel-slide">
                        <p>
                        Gained experience creating dynamic
                         invoice generation and file management features.
                        </p>
                      </div>
                      <div className="carousel-slide">
                        <p>
                        Improved UI/UX thinking by designing 
                        dashboards tailored for CA/finance users.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-controls col-1">
                    <button className="next-button-class">
                      <i className="fa-solid fa-caret-right"> </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
