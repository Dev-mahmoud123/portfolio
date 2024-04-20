import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { portfolioData } from "../../data";
import "./portfolio.css";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  return (
    <section className="portfolio section container">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio__content">
        {portfolioData.map((item) => {
          return (
            <div key={item.id} className="portfolio__item">
              <img
                className="portfolio__image "
                src={item.image}
                alt={item.name}
              />
              <div className="portfolio__overlay">
                <h3 className="portfolio__overlay__title">{item.name}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt={item.name}
                >
                  Visit <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
