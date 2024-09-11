import React from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = ({project}) => {
  /* Corrected from projectDetails to project */
  const {projectTitle, description, imageUrl, duration, projectUrl} = project

  return (
    <div className="project-timeline-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <h1 className="project-title">{projectTitle}</h1>
      <p className="project-description">{description}</p>
      <p className="project-duration">
        <AiFillCalendar className="calendar-icon" />
        {duration} {/* Displaying the duration as a separate <p> tag */}
      </p>
      <a
        href={projectUrl}
        className="visit-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
