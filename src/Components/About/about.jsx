import "./about.css";
export default function About() {
  return (
    <div id="about" className="discover">
      <h2
        className="section-heading "
        data-aos="fade-up"
        data-aos-duration="1100"
      >
        About Me
      </h2>
      <div className="container">
        <div className="collections">
          <div className="box" data-aos="fade-up" data-aos-duration="3000">
            <img
              src="./Ayesha.jpg"
              alt="my photo"
              data-aos="fade-up"
              data-aos-duration="1100"
            ></img>
            <div className="txt">
              <h3>Ayesha Q</h3>
              <p> Mern Stack Developer</p>
            </div>
          </div>
          <div
            className="box "
            style={{ width: "700px" }}
            data-aos-duration="3000"
            data-aos="fade-up"
          >
            <h2
              style={{
                marginTop: "40px",
                marginLeft: "40px",
                color: "#00adb5",
              }}
            >
              Overview
            </h2>
            <p
              
            >
              👋<b> Hi, I'm Ayesha — Aspiring Software Engineer </b>
              I'm a passionate and curious tech enthusiast currently pursuing my
              BCA from YCMOU, with a strong interest in full-stack web
              development and software engineering. I’ve worked on projects like
              Wanderlust, an Airbnb-inspired platform built using the MERN
              stack, where I got hands-on experience with real-world
              development.
            </p>
            <p
              
            >
              I'm always exploring new tools and technologies — recently diving
              deeper into C++ and database management.When I’m not coding,
              you’ll find me learning about data structures, Computer networks,
              or brushing up on Mathematical and statistical concepts for my
              academics.
            </p>
            <p
              
            >
              I believe in continuous learning and love building things that
              challenge me to grow. My goal is to create clean, user-friendly,
              and meaningful digital experiences that solve real problems.
              <b>Let’s connect and create something impactful together!</b>
            </p>
            <h2
              style={{
                marginTop: "40px",
                marginLeft: "40px",
                color: "#00adb5",
              }}
            >
              Education
            </h2>

            <p
              style={{
                margin: "10px 50px",
                textAlign: "justify",
                lineHeight: "1.6",
              }}
            >
              Bachelor of Computer Applications (BCA).
              <br />
              YCMOU Mumbai. <br />
              Currently in 2nd Year <br />
              2024-2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
