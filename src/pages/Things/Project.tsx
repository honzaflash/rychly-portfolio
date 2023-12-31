import { Box, Card, CardProps, Chip, Typography } from '@mui/material'
import { ListFromMd } from '../../components/ListFromMd'
import _ from 'lodash'
import { SpanFromMd } from '../../components/SpanFromMd'
import { GithubIcon } from '../../icons/GithubIcon'
import { ExternalLink } from '../../components/ExternalLink'


// TODO flag for projects that are displayed on the landing page vs only on the things page 
type ProjectDetails = {
  name: string
  summary: string
  description: string[]
  tech: string[]
  repo?: string
  link?: string
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

export const getProjectId = (name: string) => name.toLowerCase().replace(/\s+/g, '-')

export const Project = ({ details, summary, ...props }: ProjectProps) => (
  <Card {...props}>
    <Typography variant="h5" id={getProjectId(details.name)} sx={{ scrollMarginTop: '20px' }}>
      {summary || !details.link ? details.name : <ExternalLink href={details.link}>{details.name}</ExternalLink>}
    </Typography>
    <Typography variant="overline">
      {[
        details.date.start,
        details.date.ongoing ? 'Ongoing' : details.date.finish,
      ].filter(_.identity).join('–')}
    </Typography>
    {summary
      ? <Typography><SpanFromMd markdown={details.summary} /></Typography>
      : (<>
        <ListFromMd items={details.description} />
        {details.repo && (
          <Typography sx={{ mt: 2 }}>
            <GithubIcon sx={{ fontSize: '90%', mr: 2 }} />
            <a href={details.repo}>{details.repo.replace(/http(s?):\/\//, '')}</a>
          </Typography>
        )}
        <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {details.tech.map((item, i) => <Chip label={item} variant="outlined" key={i} />)}
        </Box>
      </>)
    }
  </Card>
)