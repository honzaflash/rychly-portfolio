import { useMemo } from 'react'
import { getProjects } from '../Things/Things'
import { Project } from '../Things/Project'
import { Box, Grid, Typography } from '@mui/material'


export const ProjectList = () => {
  const projects = useMemo(getProjects, [])
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Projects</Typography>
      <Grid container spacing={2} >
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Project summary details={project} sx={{ height: '100%' }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}