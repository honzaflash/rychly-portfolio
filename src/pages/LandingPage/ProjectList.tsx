import { useMemo } from 'react'
import { getProjects } from '../Things/Things'
import { Project, getProjectId } from '../Things/Project'
import { Box, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


export const ProjectList = () => {
  const navigate = useNavigate()
  const projects = useMemo(getProjects, [])
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Projects</Typography>
      <Grid container spacing={2} >
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Project 
              summary
              details={project}
              sx={{ height: '100%', cursor: 'pointer' }} 
              onClick={() => navigate(`/things/${getProjectId(project.name)}`)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}