import React from 'react'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = ({timelineItemsList}) => {
  const timelineData = timelineItemsList.map(item => {
    if (item.categoryId === 'COURSE') {
      return {
        title: item.title,
        cardTitle: (
          <CourseTimelineCard
            course={item} /* Corrected prop name from 'courseDetails' */
          />
        ),
        // Wrapping 'duration' in a paragraph for test case 2
        cardSubtitle: <p>{item.duration}</p>,
        media: {
          type: 'COURSE',
          source: {
            url: '',
          },
        },
      }
    }
    if (item.categoryId === 'PROJECT') {
      return {
        title: item.title,
        cardTitle: (
          <ProjectTimelineCard
            project={item} /* Corrected prop name from 'projectDetails' */
          />
        ),
        // Wrapping 'duration' in a paragraph for test case 2
        cardSubtitle: <p>{item.duration}</p>,
        media: {
          type: 'PROJECT',
          source: {
            url: item.imageUrl,
          },
        },
      }
    }
    return null
  })

  return (
    <div className="timeline-container">
      <h1 className="timeline-heading">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        items={timelineData}
        mode="VERTICAL_ALTERNATING"
        cardHeight={200}
        theme={{
          primary: '#3b82f6',
          secondary: '#f1f5f9',
          cardBgColor: '#ffffff',
          cardForeColor: '#000000',
          titleColor: '#1e293b',
        }}
      />
    </div>
  )
}

export default TimelineView
