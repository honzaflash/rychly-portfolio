import { Box, Grid, Stack, Typography } from '@mui/material'
import { Skills } from './Skills'

export const LandingPage = () => (
  <Grid container>
    <Grid item xs={12} md={6}>
      <Stack>
        <Typography variant='h1' color='primary' sx={{fontWeight: 700, fontSize: '900%'}}>Jan<br/>Rychly</Typography>
        <Typography variant='h3'>Software Engineer</Typography>
        <Typography variant='body1'>I am amazing and you should hire me.</Typography>
      </Stack>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography><pre>H i g h l i g h t s   G a l l e r y   H e r e</pre></Typography>
      </Box>
    </Grid>
    <Grid xs={12}>
      <Skills />
    </Grid>
  </Grid>
)
