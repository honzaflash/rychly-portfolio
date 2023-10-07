import { Grid, Stack, Typography } from '@mui/material'
import { Skills } from './Skills'
import { Intro } from './Intro'
import { FilterSwitcher } from './FilterSwitcher'
import { ExperienceList } from './ExperienceList'
import { Todo } from '../../components/Todo'

export const LandingPage = () => (
  <Grid container spacing={2} >
    <Grid item xs={12} md={6}>
      <Stack>
        <Typography variant="h5" sx={{ }}>Hey, my name is</Typography>
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
        <FilterSwitcher />
      </Stack>
    </Grid>
    <Grid item xs={12} md={6}>
      <Todo name="H i g h l i g h t s &nbsp; G a l l e r y" />
    </Grid>
    <Grid item xs={12}>
      <Skills />
    </Grid>
    <Grid item xs={12} md={6}>
      <ExperienceList />
    </Grid>
    <Grid item xs={12} md={6}>
      <Todo name="Education" />
    </Grid>
    <Grid item xs={12} md={12}>
      <Todo name="Projects" />
    </Grid>
  </Grid>
)
