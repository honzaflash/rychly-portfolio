import { Box, Typography } from '@mui/material'
import rawProjects from '../../configs/projects.json'
import { unKeyBy } from '../../utils'
import { useMemo } from 'react'
import { Project } from './Project'
import { Section } from '../../components/Section'


export const getProjects = () => unKeyBy(rawProjects, 'name')

export const Things = () => {
  const projects = useMemo(getProjects, [])
  
  return (
    <Box>
      <Typography variant="body1">I like people. They are what matters.</Typography>
      <Typography variant="h4">
      But as an engineer I like<br/> 
        <Typography
          variant="h1"
          color="primary" 
          sx={{ fontWeight: 700 }}
          component="span"
        >
        Things
        </Typography>
        <br/>even more
      </Typography>
      <Typography variant="body1" sx={{ mt: 3 }}>
      I enjoy designing them, making them, and improving them.
      </Typography>
      <Typography>Here are some of my favorites that I have made, including software and hardware.</Typography>
      <Section>
        {projects.map((project, i) => <Project details={project} key={i} />)}
      </Section>
    </Box>
  )}
