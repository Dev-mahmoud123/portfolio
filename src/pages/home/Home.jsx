import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section className="home section">
      <img src={profile} alt="profile image" className="home__profile" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I&apos;m Mahmoud Awad .</span> Front-end Developer
          </h1>
          <p className="home__description">
            I&apos;m a Egyption web desinger and Front-end developer focused on
            crafting clean & user-friendly experiences, I am passionate about
            building excellent software that improves lives of everyone.
          </p>
          <Link to="/about" className="home button">
            More About Me{" "}
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
