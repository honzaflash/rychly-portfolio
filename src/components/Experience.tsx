import { Card, List, ListItemText, Typography } from '@mui/material'


export type WorkExperience = {
  companyName: string
  companyLink?: string
  from: string
  to: string
  title: string
  htmlPoints: string[]
}

type ExperienceProps = {
  experience: WorkExperience
}

export const Experience = ({ experience }: ExperienceProps) => (
  <Card>
    <Typography variant="h5">{experience.title} &bull; {experience.companyName}</Typography>
    <Typography variant="overline">{experience.from}&mdash;{experience.to}</Typography>
    <List>
      {experience.htmlPoints.map((point, i) => (
        <ListItemText key={i}><span dangerouslySetInnerHTML={{__html: point}}></span></ListItemText>
      ))}
    </List>
  </Card>
)
