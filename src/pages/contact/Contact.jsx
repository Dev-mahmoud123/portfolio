import {
  faEnvelopeOpen,
  faPhoneAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./contact.css";
export default function Contact() {
  return (
    <section className="section contact container">
      <h1 className="section__title">
        Get In <span>Touch</span>
      </h1>

      <div className="contact__content">
        <div className="contact__info">
          <h3 className="contact__title">Don&apos;t be shy !</h3>
          <p className="contact__invitation">
            Feel free to get in touch with me . t am always open to discussing
            new projects . Creative ideas or opportunities ot be part of your
            visions.
          </p>
          <div className="contact__mail">
            <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
            <p className="mail__info">
              <a href="mailto:mah.awad996@gmail.com" target="_top">
                <span> Mail me</span> <br /> <span>mah.awad996@gmail.com</span>
              </a>
            </p>
          </div>
          <div className="contact__phone">
            <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
            <p className="phone__info">
              <a href="tel:01150198689" target="_top">
                <span>Call me</span>
                <br />
                <span>+20 1150198689</span>
              </a>
            </p>
          </div>
          <div className="contact__social">
            <a
              href="https://www.linkedin.com/in/mahmoud-awad-3040a81a1"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
            </a>
            <a
              href="https://github.com/Dev-mahmoud123"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </div>
        </div>
        <div className="contact__form">
          <div className="input__info">
            <input type="text" placeholder="Your Name" alt="input name" />
            <input type="mail" placeholder="Your Email" alt="input mail" />
            <input type="text" placeholder="Your Subject" alt="input subject" />
          </div>
          <textarea placeholder="Your Message" alt="input message" />
          <button type="submit" className="button">
            Send Message
            <span>
              <FontAwesomeIcon icon={faPaperPlane} className="icon" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
