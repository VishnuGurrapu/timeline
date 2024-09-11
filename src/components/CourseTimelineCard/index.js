import React from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = ({course}) => {
  /* Corrected from courseDetails to course */
  const {courseTitle, description, duration, tagsList} = course

  return (
    <div className="course-timeline-card">
      <h1 className="course-title">{courseTitle}</h1>
      <p className="course-description">{description}</p>
      <p className="course-duration">
        <AiFillClockCircle className="clock-icon" />
        {duration}
      </p>
      <ul className="tags-list">
        {tagsList.map(tag => (
          <li key={tag.id} className="tag-item">
            <p>{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
