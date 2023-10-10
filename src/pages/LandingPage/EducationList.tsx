import { useParams } from 'react-router-dom'
import { MaybeTaggedString, RelevancyTags, filterAndExtractRelevantStrings, filterObjectsByRelevancy } from './relevancyFiltering'
import rawEducation from '../../configs/education.json'
import { useMemo } from 'react'
import _ from 'lodash'
import { Section } from '../../components/Section'
import { EducationItem } from './EducationItem'


type RawEducationDetails = {
  subtitle: string
  from?: string
  to: string
  website?: string
  description: MaybeTaggedString[]
  courses?: MaybeTaggedString[]
  relevancy?: RelevancyTags
}

/** Process the education config and return a filtered list of education details objects */
const getEducation = (filter: string) => {
  // convert the object to a list of the values (objects) each with their key as a new `name` property
  const objectList = _.map(rawEducation as Record<string, RawEducationDetails>, ({description, courses, ...rest}, key) => ({
    name: key,
    description: filterAndExtractRelevantStrings(description as MaybeTaggedString[], filter),
    courses: courses && filterAndExtractRelevantStrings(courses, filter),
    ...rest,
  }))
  // if an item has no relevancy array we assume it is always relevant
  // otherwise we check whether the relevancy matches the filter
  const filtered = filterObjectsByRelevancy(objectList, 'relevancy', filter)

  return filtered
}

export const EducationList = () => {
  const { filter } = useParams()
  const education = useMemo(() => getEducation(filter ?? ''), [filter])

  return (
    <Section title="Education">
      {education.map((itemData, i) => <EducationItem details={itemData} key={i} />)}
    </Section>
  )
}
