import { Box, Typography } from '@mui/material'
import aboutMe from '../../configs/aboutme.json'
import { ListFromMd } from '../../components/ListFromMd'


export const People = () => {
  
  return (
    <Box>
      <Typography>Things are nice. And useful.</Typography>
      <Typography variant="h5">
      But meaning and fulfilment is in<br/>
      interacting with God and other<br/> 
        <Typography
          variant="h1"
          color="primary" 
          sx={{ fontWeight: 700 }}
          component="span"
        >
        People
        </Typography>
      </Typography>
      <Typography>Here is something about me as a <span style={{ textDecoration: 'line-through' }}>people</span> person and as a professional.</Typography>
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" component="h1" sx={{ mt: 6 }}>About me</Typography>
        <ListFromMd items={aboutMe.about} />
        <Typography variant="h4" component="h1" sx={{ mt: 6 }}>Interests</Typography>
        <ListFromMd items={aboutMe.interests} />
      </Box>
    </Box>
  )}
