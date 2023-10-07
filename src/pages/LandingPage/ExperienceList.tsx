import { Experience, WorkExperience } from '../../components/Experience'

import work from '../../configs/work.json'
import _ from 'lodash'
import { Converter } from 'showdown'
import { useParams } from 'react-router-dom'
import { Relevancy, relevancyPredicates } from './relevancyFiltering'
import { Section } from '../../components/Section'


type PointRecord = string | { [key: string]: Relevancy }

const filterPoints = (filter: string, points: PointRecord[]) =>
  points.filter((point) => typeof point === 'string' || (relevancyPredicates[filter] ?? _.identity)(Object.values(point)[0]))

const extractPointStrings = (points: PointRecord[]) =>
  points.map((point) => typeof point === 'string' ? point : Object.keys(point)[0])

const converter = new Converter()
converter.setOption('openLinksInNewWindow', true)
/** convert markdown to html and strip the `<p>` tag that showdown wraps the string with */
const mdToHtmlString = (str: string) => converter.makeHtml(str).replace(/<p>|<\/p>/g, '')

export const ExperienceList = () => {
  const { filter } = useParams()

  const experiences: WorkExperience[] = _.map(work, ({points, ...rest}, key) => ({
    companyName: key,
    htmlPoints: extractPointStrings(filterPoints(filter ?? '', points as PointRecord[])).map(mdToHtmlString),
    ...rest,
  }))

  return (
    <Section title="Work Experience">
      {experiences.map((experience, i) => (
        <Experience experience={experience} key={i} />
      ))}
    </Section>
  )
}