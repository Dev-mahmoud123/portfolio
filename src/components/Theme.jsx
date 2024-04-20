import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./theme.css";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { colors } from "./utils";

function Theme() {
  const [activeList, setActiveList] = useState(false);

  //  =====  function to set color =====
  const setColor = (color) => {
    document.documentElement.style.setProperty("--first-color", color);
  };
  const themeHandler = () => {
    setActiveList(!activeList);
  };

  return (
    <div className="theme">
      <button className="theme__button" onClick={themeHandler}>
        <FontAwesomeIcon icon={faCog} />
      </button>
      <div className={`theme__container ${activeList ? "active" : ""}`}>
        <div className={`theme__list__colors ${activeList ? "active" : ""}`}>
          {colors.map((color) => {
            console.log(color);
            return (
              <button
                className="theme__item__color"
                style={{ backgroundColor: color.color }}
                key={color.id}
                onClick={() => setColor(color.color)}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Theme;
