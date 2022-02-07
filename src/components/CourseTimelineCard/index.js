import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseCardContainer,
  CourseTitleAndDurationContainer,
  CourseTitle,
  DurationContainer,
  DurationText,
  CourseDescription,
  CourseTagsList,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <CourseCardContainer>
      <CourseTitleAndDurationContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle color="#171f46" />
          <DurationText>{duration}</DurationText>
        </DurationContainer>
      </CourseTitleAndDurationContainer>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagsList>
        {tagsList.map(eachItem => (
          <CourseTagItem key={eachItem.id}>
            <CourseTag>{eachItem.name}</CourseTag>
          </CourseTagItem>
        ))}
      </CourseTagsList>
    </CourseCardContainer>
  )
}

export default CourseTimelineCard
