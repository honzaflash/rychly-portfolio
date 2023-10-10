import { Card, Typography } from '@mui/material'
import { ListFromMd } from '../../components/ListFromMd'


export type EducationDetails = {
  name: string
  subtitle: string
  from?: string
  to: string
  website?: string
  description: string[]
  courses?: string[]
}

type EducationItemProps = {
  details: EducationDetails
}

export const EducationItem = ({ details }: EducationItemProps) => (
  <Card>
    <Typography variant="h4">{details.name}</Typography>
    <Typography variant="h6">{details.subtitle}</Typography>
    <Typography variant="overline">{details.from ? `${details.from}—` : ''}{details.to}</Typography>
    <ListFromMd items={details.description} />
    {/*  TODO make togglable */}
    {details.courses && <Typography>Some of the courses: {details.courses.join(', ')}</Typography>}
  </Card>
)
