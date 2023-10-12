/* eslint-disable react/jsx-no-comment-textnodes */
// The title is supposed to imitate a code source file header
import { AppBar, Box, Container, Link, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from '@mui/material'
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

  const scrollIsAtTop = !useScrollTrigger({ threshold: 20, disableHysteresis: true })

  return(
    <AppBar sx={({ palette }) => ({
      backgroundImage: 'none',
      background: palette.background.default,
      transition: 'background 200ms',
    })}>
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
          <Box component="span" sx={({ palette }) => ({
            position: 'absolute',
            // width: '100%',
            width: '0%',
            height: '2px',
            bottom: 0,
            left: 'calc(-50vw + 50%)',
            backgroundColor: '#49B53F70',
            ...(!scrollIsAtTop && { width: '100vw', left: 'calc(-50vw + 50%)', backgroundColor: palette.primary.main }),
            transition: '200ms  ',
            transitionProperty: 'width, left, background-color',
          })} />
        </Toolbar>
      </Container>
    </AppBar>
  )}
