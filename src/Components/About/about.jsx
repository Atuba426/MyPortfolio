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
              alt="Ayesha Tuba"
              data-aos="fade-up"
              data-aos-duration="1100"
            />

            <div className="txt">
              <h3>Ayesha Tuba</h3>
              <p>MERN Stack Developer</p>
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
            <p>
  👋 <b>Hi, I'm Ayesha — Aspiring AI Engineer.</b> <br />
  I'm a passionate and curious Full-Stack Developer currently pursuing my BCA
  from YCMOU.

I've worked on projects using the MERN stack and am currently building a
real-world service-business booking system using <b>Next.js</b>, <b>JavaScript</b>,
<b>PostgreSQL</b>, and <b>Supabase</b>. I work with <b>SQL</b>, <b>database design</b>, <b>API development</b>,
 backend logic, and relationships between different parts of an
application.
<br />

I have experience with <b>React</b>, <b>JavaScript</b>, and the <b>MERN</b> stack, and I'm
continuously expanding my skills through real-world projects. When I'm not 
building projects, you'll find me exploring Python, AI agents, app development 
and other areas of software development.


I enjoy learning by building things, understanding the logic behind them,
and challenging myself with problems that help me grow as an Enginner. <br />

  <b>
    I believe in continuous learning and building things that solve real
    problems.
  </b>
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
              Currently in 3rd Year <br />
              2024-2027
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
