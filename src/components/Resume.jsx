import { resumeData } from "../data";
import "./resume.css";
import ResumeItem from "./ResumeItem";

export default function Resume() {
  return (
    <div className="resume__container">
      <h2 className="resume__title">Experience & Education</h2>
      <div className="resume__content">
        <div className="resume__data">
          {resumeData.map((val) => {
            if (val.category === "experience") {
              return <ResumeItem key={val.id} {...val} />;
            }
          })}
        </div>
        <div className="resume__data">
          {resumeData.map((val) => {
            if (val.category === "education") {
              return <ResumeItem key={val.id} {...val} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
