import { Box, Grid, Stack, Typography } from '@mui/material'
import { Skills } from './Skills'
import { Intro } from './Intro'
import { FilterSwitcher } from './FilterSwitcher'
import { ExperienceList } from './ExperienceList'

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
            fontSize: '900%',
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
      <Box sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(50,50,50,0.2)'}}>
        <Typography component="pre">H i g h l i g h t s   G a l l e r y   H e r e</Typography>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Skills />
    </Grid>
    <Grid item xs={12} md={6}>
      <ExperienceList />
    </Grid>
  </Grid>
)
