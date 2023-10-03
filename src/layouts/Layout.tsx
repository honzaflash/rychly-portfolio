import { Navigation } from './Navigation'
import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'


export const Layout = () => (
  <>
    <Navigation />
    {/* a box spacer of the size of the toolbar so that nothing is hidden underneath <Navigation /> */}
    <Box sx={(theme) => (theme.mixins.toolbar)} />
    <Container>
      <Outlet />
    </Container>
  </>
)
