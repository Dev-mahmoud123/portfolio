import { skills } from "../data";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills__content">
      <h2 className="skills__title">My Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => {
            const dashArray = 326.5;
            const dashOffset = dashArray * ((100 - skill.percent)/100);
          return (
            <li className="skill__item" key={skill.id}>
              <svg className="svg__indicator">
                <circle
                  className="svg__indicator__track"
                  cx="60px"
                  cy="60px"
                  r="52px"
                />
                <circle
                  className="svg__indicator__fill"
                  cx="60px"
                  cy="60px"
                  r="52px"
                  strokeDasharray={`${dashArray}px`}
                  strokeDashoffset={`${dashOffset}px`}
                />
                </svg>
                <p className="skill__percent">{skill.percent}%</p>
              <h3 className="skill__name">{skill.skillName}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
