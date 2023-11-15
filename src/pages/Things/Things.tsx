import { Box, Grid, Typography } from '@mui/material'
import rawProjects from '../../configs/projects.json'
import { unKeyBy } from '../../utils'
import { useEffect, useMemo, useState } from 'react'
import { Project } from './Project'
import { Section } from '../../components/Section'
import { useParams } from 'react-router-dom'
import { CoolArtTarget } from '../../components/CoolArt'


const SCROLL_OFFSET = 80

export const getProjects = () => unKeyBy(rawProjects, 'name')

export const Things = () => {
  const projects = useMemo(getProjects, [])

  const { projectId } = useParams()
  const [extend, setExtend] = useState(0)
  // On mount, scroll down to the project referenced in the URL (if any)
  useEffect(() => {
    if (!projectId) return
    
    const projectY = window.document.getElementById(projectId)?.offsetTop ?? 0

    // if needed extend the page heigth so that we can scroll all the way to the project
    const pageBottom = window.document.getElementsByTagName('body')[0]?.offsetHeight ?? 0
    if (pageBottom < projectY - SCROLL_OFFSET + window.innerHeight) {
      setExtend(projectY - SCROLL_OFFSET + window.innerHeight - pageBottom)
    }
    
    window.scrollTo({ top: 0 }) // jump to the top in case the page did not load that way
    setTimeout(
      () => window.scrollTo({ top: projectY - SCROLL_OFFSET, behavior: 'smooth' }),
      300,
    )
  }, [projectId])
  
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
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
      </Grid>
      <Grid item xs={12} md={6}>
        <CoolArtTarget />
      </Grid>
      <Grid item xs={12}>
        <Section>
          {projects.map((project, i) => <Project details={project} key={i} />)}
        </Section>
        <Box sx={{ height: extend, widht: '1px' }} />
      </Grid>
    </Grid>
  )}
