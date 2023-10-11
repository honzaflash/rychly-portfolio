/* eslint-disable react/jsx-no-comment-textnodes */
// The title is supposed to imitate a code source file header
import { AppBar, Box, Container, Link, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { GithubIcon } from '../icons/GithubIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'


const a11yProps = (index: number) => ({
  'id': `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
 
})

const tabs: { label: string, path: string }[] = [
  { label: 'Main', path: '/landing' },
  { label: 'Things', path: '/things' },
]

export const Navigation = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return(
    <AppBar sx={{ backgroundImage: 'none' }}>
      <Container sx={{ px: { xs: 3, md: 20 }}}>
        <Toolbar sx={{ p: { xs: 0 } }}>
          <Typography
            component="div"
            variant='h1'
            sx={{
              position: 'relative',
              writingMode: 'vertical-rl',
              left: '-3px',
              fontSize: '14px',
              fontWeight: 700,
              transform: 'rotate(180deg)',
              mr: 3,
            }}
          >
            Rychly
          </Typography>
          <Tabs
            value={tabs.findIndex((tab) => pathname.includes(tab.path))}
            TabIndicatorProps={{ sx: { display: 'none' } }}
          >
            {tabs.map((tab, index) => (
              <Tab
                label={tab.label}
                onClick={() => navigate(tab.path)}
                key={index} {...a11yProps(index)}
                sx={({ palette }) => ({
                  fontSize: '100%',
                  transition: '300ms color',
                  '&:hover': {
                    color: palette.primary.main,
                  },
                })}
              />
            ))}
          </Tabs>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, lineHeight: '60%' }}>
            <Link href="https://www.linkedin.com/in/jan-rychly" target="_blank">
              <LinkedinIcon/>
            </Link>
            <Link href="https://github.com/honzaflash" target="_blank"><GithubIcon /></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )}
