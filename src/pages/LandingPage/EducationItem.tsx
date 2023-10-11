import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Typography, accordionSummaryClasses } from '@mui/material'
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
    {details.courses && (
      <Accordion
        sx={{
          background: 'none',
        }}>
        <AccordionSummary
          expandIcon={<Box sx={{ transform: 'rotate(90deg)', fontSize: '20px' }}>&#8227;</Box>}
          sx={{
            p: 0,
            m: 0,
            minHeight: '0px',
            justifyContent: 'flex-start',
            gap: 3,
            '& > *': {
              flexGrow: 0
            },
            [`&.${accordionSummaryClasses.expanded}`]: {
              minHeight: '0px',
            },
            [`& > .${accordionSummaryClasses.content}`]: {
              my: 0,
            }
          }}
        >
          <Typography>Some of the courses I took</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 1, pl: 3 }}>
          <Typography>{details.courses.join(', ')}</Typography>
        </AccordionDetails>
      </Accordion>
    )}
  </Card>
)
