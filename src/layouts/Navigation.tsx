/* eslint-disable react/jsx-no-comment-textnodes */
// The title is supposed to imitate a code source file header
import { AppBar, Box, Container, Tab, Tabs, Toolbar, Typography } from '@mui/material'

const a11yProps = (index: number) => ({
  'id': `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
 
})

export const Navigation = () => {
  return(
    <AppBar>
      <Container>
        <Toolbar>
          <Typography variant='h4' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>/* @author: Jan Rychly */</Typography>
          <Typography variant='h6'sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>J. R.</Typography>
          <Box>
            <Tabs value={0} >
              <Tab label="Dev" {...a11yProps(0)}/>
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )}
