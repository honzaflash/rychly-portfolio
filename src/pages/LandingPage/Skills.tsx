import { Box, Chip, ChipProps } from '@mui/material'
import { useParams } from 'react-router-dom'
import _ from 'lodash'

import rawSkills from '../../configs/skills.json'
import { Relevancy, relevancyPredicates } from './relevancyFiltering'


const SkillChipsBox = ({ skills, ...props }: ChipProps & { skills: { name: string }[] }) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
    {skills.map((skill, i) => (
      <Chip {...props} label={skill.name} key={i} />
    ))}
  </Box>
)

export const Skills = () => {
  const { filter } = useParams()
  const skills = _.mapValues(rawSkills.hard, (ratedSkills, level) =>
    _.map(
      _.pickBy(ratedSkills, relevancyPredicates[filter ?? '']),
      (relevancy: Relevancy, name) => ({name, level, relevancy})),
  )

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
      {/* TODO add a tooltip that explains what each style of chip means -> skill level */}
      <SkillChipsBox skills={skills.advanced} color="primary" variant="filled" />
      <SkillChipsBox skills={skills.intermediate} color="primary" variant="outlined" />
      <SkillChipsBox skills={skills.familiar} color="default" variant="outlined" />
    </Box>
  )}