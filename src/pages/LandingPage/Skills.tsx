import { Box, Chip, ChipProps } from '@mui/material'
import { useParams } from 'react-router-dom'
import _ from 'lodash'

import rawSkills from '../../configs/skills.json'


type Relevancy = ('fe' | 'be')[]

const filterFuns: Record<string, ((r: Relevancy) => boolean) | undefined> = {
  'full-stack': (r) => r.includes('fe') || r.includes('be'),
  'front-end': (r) => r.includes('fe'),
  'back-end': (r) => r.includes('be'),
} as const

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
      _.pickBy(ratedSkills, filterFuns[filter ?? '']),
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