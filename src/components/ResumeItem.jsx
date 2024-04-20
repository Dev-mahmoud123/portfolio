
import PropTypes from "prop-types"
import "./resume.css"
function ResumeItem ({icon , title , description , date}) {
  return (
    <div className="resume__item">
        <div className="resume__icon">{icon}</div>
        <span className="resume__date">{date}</span>
        <h3 className="resume__title">{title}</h3>
        <p className="resume__description">{description}</p>
    </div>
  )
}

ResumeItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date:PropTypes.string.isRequired
}

export default ResumeItem;