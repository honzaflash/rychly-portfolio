import { Card, Typography } from '@mui/material'
import { ListFromMd } from '../../components/ListFromMd'
import { ExternalLink } from '../../components/ExternalLink'


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
    <Typography variant="h5" color="primary">
      {experience.title} &mdash; {
        experience.companyLink
          ? <ExternalLink href={experience.companyLink}>{experience.companyName}</ExternalLink>
          : experience.companyName
      }
    </Typography>
    <Typography variant="overline">{experience.from}&ndash;{experience.to}</Typography>
    <ListFromMd items={experience.description} />
  </Card>
)
