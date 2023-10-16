import { Box, Container, Typography } from '@mui/material'
import { Contacts } from '../components/Contacts'


export const Footer = () => (
  <Box component="footer" sx={{ mt: 12, py: 2, borderTop: 'solid 1px #fff' }}>
    <Container sx={{ px: { xs: 3, md: 20 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>
          This website was built by me, Jan Rychly. See <a href="/#/things/rychly-portfolio">how it was made</a>.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography>
            <Typography color="primary" component="span" fontWeight="500">Connect</Typography> with me
          </Typography>
          <Contacts />
        </Box>
      </Box>
    </Container>
  </Box>
)
