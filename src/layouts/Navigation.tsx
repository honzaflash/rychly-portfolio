/* eslint-disable react/jsx-no-comment-textnodes */
// The title is supposed to imitate a code source file header
import { AppBar, Box, Container, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const a11yProps = (index: number) => ({
  'id': `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
 
})

const tabs = [
  { label: 'Full Stack', path: 'full-stack' },
  { label: 'Front End', path: 'front-end' },
  { label: 'Back End', path: 'back-end' },
] as const

export const Navigation = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return(
    <AppBar>
      <Container>
        <Toolbar>
          <Typography variant='h4' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>/* @author: Jan Rychly */</Typography>
          <Typography variant='h6'sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>J. R.</Typography>
          <Box>
            <Tabs value={tabs.findIndex((tab) => pathname.includes(tab.path))} >
              {tabs.map((tab, index) => (<Tab label={tab.label} onClick={() => navigate(tab.path)} key={index} {...a11yProps(index)}/>))}
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )}
