import {Chrono} from 'react-chrono'

import {
  AppContainer,
  ResponsiveContainer,
  HeadingContainer,
  Heading,
  MainHeading,
} from './styledComponents'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = timelineItem => {
    if (timelineItem.categoryId === 'PROJECT') {
      return (
        <ProjectTimelineCard
          key={timelineItem.id}
          projectDetails={timelineItem}
        />
      )
    }
    return (
      <CourseTimelineCard key={timelineItem.id} courseDetails={timelineItem} />
    )
  }
  return (
    <AppContainer>
      <ResponsiveContainer>
        <HeadingContainer>
          <Heading>
            MY JOURNEY OF <br />
            <MainHeading>CCBP 4.0</MainHeading>
          </Heading>
        </HeadingContainer>
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachTimelineItem =>
            renderTimelineCard(eachTimelineItem),
          )}
        </Chrono>
      </ResponsiveContainer>
    </AppContainer>
  )
}
export default TimelineView
