import { Grid, Stack, Typography } from '@mui/material'
import { Skills } from './Skills'
import { Intro } from './Intro'
import { FilterSelector } from './FilterSelector'
import { ExperienceList } from './ExperienceList'
import { EducationList } from './EducationList'
import { ProjectList } from './ProjectList'
import { CoolArtTarget } from '../../components/CoolArt'


export const LandingPage = () => (
  <Grid container spacing={2} >
    <Grid item xs={12} md={6}>
      <Stack>
        <Typography variant="h5" component="span">Hi, my name is</Typography>
        <Typography
          variant='h1'
          color='primary'
          sx={{
            fontWeight: 700,
            fontSize: {xs: '600%', sm: '900%'},
            lineHeight: 1,
          }}
        >
          Jan<br/>
          Rychly
        </Typography>
        <Typography variant='h3' sx={{ mt: 6 }}>Software Engineer</Typography>
        <Intro />
      </Stack>
    </Grid>
    <Grid item xs={12} md={6}>
      <CoolArtTarget sx={{ minHeight: '500px' }} />
    </Grid>
    <Grid item xs={12}>
      <FilterSelector />
    </Grid>
    <Grid item xs={12}>
      <Skills />
    </Grid>
    <Grid item xs={12} md={6}>
      <ExperienceList />
    </Grid>
    <Grid item xs={12} md={6}>
      <EducationList />
    </Grid>
    <Grid item xs={12} md={12}>
      <ProjectList />
    </Grid>
  </Grid>
)
