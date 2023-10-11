import { Card, Typography } from '@mui/material'
import { ListFromMd } from '../../components/ListFromMd'


export type WorkExperience = {
  companyName: string
  companyLink?: string
  from: string
  to: string
  title: string
  description: string[]
}

type ExperienceItemProps = {
  experience: WorkExperience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => (
  <Card>
    <Typography variant="h5">{experience.title} &bull; {experience.companyName}</Typography>
    <Typography variant="overline">{experience.from}&mdash;{experience.to}</Typography>
    <ListFromMd items={experience.description} />
  </Card>
)