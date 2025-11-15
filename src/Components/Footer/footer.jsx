import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container" id="contact">
        <div className="row">
          <div className="col-6 ">
            <h3>Contact Me</h3>
            <ul className="social">
              <li>
                <a
                  href="mailto:atuba4568@gmail.com"
                  className="email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-google"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ayeshatuba"
                  className="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/users/ayeshaq_03999"
                  className="discord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-discord"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-username"
                  className="github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
            <p className="text">MERN Stack Developer, currently in 2nd Year</p>
            <a href="/" className="logo">
              <img src="/signiture.png" alt="logo" />
            </a>
          </div>

          <div className="col-6 ">
            <form
              action="https://formspree.io/f/xblyqjde"
              method="POST"
              className="contact-form"
            >
              <input type="hidden" name="_replyto" value="atuba4568@gmail.com" />
  <input type="hidden" name="_subject" value="New Portfolio Message" />
  <input type="hidden" name="_redirect" value="https://my-portfolio-gamma-brown-78.vercel.app/" />
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  style={{ width: "100%" }}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div style={{ textAlign: "center" }}>
                <button type="submit" className="submit-btn btn btn-primary">
                  <span className="btn-content">Send Message</span> &nbsp;
                  <span className="btn-icon">
                    <i className="fa-brands fa-google"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p>copyright © 2025. All rights reserved.</p>
    </footer>
  );
}
