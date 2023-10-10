import { Container, Grid, Stack, Typography } from '@mui/material'
import { Skills } from './Skills'
import { Intro } from './Intro'
import { FilterSelector } from './FilterSelector'
import { ExperienceList } from './ExperienceList'
import { EducationList } from './EducationList'
import { Todo } from '../../components/Todo'

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
      <Container>
        <Todo sx={{ opacity: 0 }} name="Cool art" />
      </Container>
    </Grid>
    <Grid item xs="auto">
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
      <Todo name="Projects" />
    </Grid>
  </Grid>
)
