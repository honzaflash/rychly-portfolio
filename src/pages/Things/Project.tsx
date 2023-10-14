import { Card, CardProps, Typography } from '@mui/material'
import { ListFromMd } from '../../components/ListFromMd'
import _ from 'lodash'
import { SpanFromMd } from '../../components/SpanFromMd'


// TODO flag for projects that are displayed on the landing page vs only on the things page 
type ProjectDetails = {
  name: string
  summary: string
  description: string[]
  tech: string[]
  date: {
    start?: string | number
    finish?: string | number
    ongoing?: boolean
  }
}

type ProjectProps = {
  details: ProjectDetails
  summary?: boolean
} & CardProps

export const Project = ({ details, summary, ...props }: ProjectProps) => (
  <Card {...props}>
    <Typography variant="h5">{details.name}</Typography>
    <Typography variant="overline">
      {[
        details.date.start,
        details.date.ongoing ? 'Ongoing' : details.date.finish,
      ].filter(_.identity).join('–')}
    </Typography>
    {summary
      ? <Typography><SpanFromMd markdown={details.summary} /></Typography>
      : <ListFromMd items={details.description} />
    }
  </Card>
)