import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./about.css";
import CV from "/./src/assets/Mahmoud_Awad_cv.pdf";
import Skills from "../../components/Skills";
import Resume from "../../components/Resume";


export default function About() {
  return (
    <main className="section container">
      <section className="about">
        <h1 className="section__title">
          About <span>Me</span>
        </h1>
        <div className="about__content">
          <div className="about__info">
            <h3>Personal Info</h3>
            <div className="about__info__content">
              <div>
                <p>
                  FirstName : <span>Mahmoud</span>
                </p>
                <p>
                  Age : <span>27 years</span>
                </p>
                <p>
                  Freelance : <span>Available</span>
                </p>
                <p>
                  Phone : <span>+20 1150198689</span>
                </p>
              </div>
              <div>
                <p>
                  LastName : <span>Awad</span>
                </p>
                <p>
                  Nationality : <span>Egyptian</span>
                </p>
                <p>
                  Address : <span>Cairo</span>
                </p>
                <p>
                  Email : <span>mah.awad996@gmail.com</span>
                </p>
              </div>
            </div>
            <a className="download button" href={CV} download>
              Download Cv{" "}
              <span>
                <FontAwesomeIcon icon={faDownload} className="icon" />
              </span>
            </a>
          </div>
          <div className="about__stats">
            <div className="experience__info">
              <h3>1</h3>
              <p>Year of Experience</p>
            </div>
            <div className="projects__info">
              <h3>10+</h3>
              <p>Complete Projects</p>
            </div>
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <Skills />
      </section>
      <div className="separator"></div>
      <section className="experience&education">
        <Resume/>
      </section>
    </main>
  );
}
