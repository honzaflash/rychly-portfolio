/* eslint-disable react/jsx-no-comment-textnodes */
// The title is supposed to imitate a code source file header
import { AppBar, Box, Container, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const a11yProps = (index: number) => ({
  'id': `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
 
})

const tabs: { label: string, path: string }[] = [
  { label: 'Main', path: '/landing' },
  { label: 'Things', path: 'things' },
]

export const Navigation = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return(
    <AppBar>
      <Container>
        <Toolbar sx={{ pl: { xs: 8} }}>
          <Typography
            component="div"
            variant='h1'
            sx={{
              position: 'fixed',
              left: 0,
              fontSize: '14px',
              fontWeight: 700,
              transform: 'rotate(-90deg)',
            }}
          >
            Rychly
          </Typography>
          <Box>
            <Tabs value={tabs.findIndex((tab) => pathname.includes(tab.path))} >
              {tabs.map((tab, index) => (<Tab label={tab.label} onClick={() => navigate(tab.path)} key={index} {...a11yProps(index)}/>))}
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )}
