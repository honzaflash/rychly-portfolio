import { ExperienceItem } from './ExperienceItem'

import work from '../../configs/work.json'
import _ from 'lodash'
import { useParams } from 'react-router-dom'
import { MaybeTaggedString, filterAndExtractRelevantStrings } from './relevancyFiltering'
import { Section } from '../../components/Section'
import { useMemo } from 'react'


const getExperiences = (filter: string) => _.map(work, ({description, ...rest}, key) => ({
  companyName: key,
  description: filterAndExtractRelevantStrings(description as MaybeTaggedString[], filter ?? ''),
  ...rest,
}))

export const ExperienceList = () => {
  const { filter } = useParams()

  const experiences = useMemo(() => getExperiences(filter ?? ''), [filter])

  return (
    <Section title="Work Experience">
      {experiences.map((experience, i) => (
        <ExperienceItem experience={experience} key={i} />
      ))}
    </Section>
  )
}
