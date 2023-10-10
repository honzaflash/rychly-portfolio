import { Card, List, ListItemText, Typography } from '@mui/material'
import { SpanFromMd } from '../../components/SpanFromMd'


export type EducationDetails = {
  name: string
  subtitle: string
  from?: string
  to: string
  website?: string
  description: string[]
  courses?: string[]
}

type EducationProps = {
  details: EducationDetails
}

export const Education = ({ details }: EducationProps) => (
  <Card>
    <Typography variant="h4">{details.name}</Typography>
    <Typography variant="h6">{details.subtitle}</Typography>
    <Typography variant="overline">{details.from ? `${details.from}—` : ''}{details.to}</Typography>
    <List>
      {details.description.map((bullet, i) => (
        <ListItemText key={i}><SpanFromMd markdown={bullet} /></ListItemText>
      ))}
    </List>
    {/*  TODO make togglable */}
    {details.courses && <Typography>Some of the courses: {details.courses.join(', ')}</Typography>}
  </Card>
)
