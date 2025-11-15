import "./Navbar.css";
<Navbar className="css"></Navbar>;
export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <a href="index.html" className="logo">
          <img src="/signiture.png" alt="logo" />
        </a>
        <div className="rightoptions">
          <div className="pages">
            <a href="index.html" className="nav-item">
              <i className="fa-solid fa-house"></i> Home
            </a>
            <a href="#about" className="nav-item">
              {" "}
              <i className="fa-solid fa-user"></i>About
            </a>
            <a href="#projects" className="nav-item">
              <i className="fa-solid fa-bars-progress"></i>Projects
            </a>
            <a href="#services" className="nav-item">
              <i className="fa-solid fa-gear fa-fw"></i>Services
            </a>
            <a href="#contact" className="nav-item">
              <i className="fa-solid fa-envelope fa-fw"></i>Contact
            </a>
          </div>
          <div className="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
