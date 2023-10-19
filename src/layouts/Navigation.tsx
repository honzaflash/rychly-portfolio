/* eslint-disable react/jsx-no-comment-textnodes */
// The title is supposed to imitate a code source file header
import { AppBar, Box, Card, Container, Tab, Tabs, Toolbar, Typography, buttonBaseClasses, tabsClasses, useScrollTrigger } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Contacts } from '../components/Contacts'


const a11yProps = (index: number) => ({
  'id': `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
 
})

// TODO consolidate this config object with the router object and make creating links safer through constants or type checking
const tabs: { label: string, path: string }[] = [
  { label: 'Main', path: '/landing' },
  { label: 'Things', path: '/things' },
  { label: 'People', path: '/people' },
]

export const Navigation = () => {
  const navigate = useNavigate()

  const { pathname } = useLocation()
  const currentTabIndex = tabs.findIndex((tab) => pathname.includes(tab.path))

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
          {/* TODO rethink navigation on mobile -> hamburger menu and only active tabs shown */}
          <Tabs
            value={currentTabIndex === -1 ? false : currentTabIndex}
            TabIndicatorProps={{ sx: { display: 'none' } }}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              [`& .${tabsClasses.scrollButtons}.${buttonBaseClasses.disabled}`]: {
                opacity: '0.3',
              },
            }}
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
          <Card sx={{ display: { xs: 'none', sm: 'flex' }, p: 2, gap: 3 }}>
            <Typography>Contact</Typography>
            <Contacts />
          </Card>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Contacts />
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
