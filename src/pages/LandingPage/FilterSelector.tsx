import { Box, Tab, Tabs, Toolbar } from '@mui/material'
import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const a11yProps = (index: number) => ({
  'id': `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
 
})

const PAGE_PATH = '/landing'

const filterOpts = [
  { label: 'Full Stack', filter: 'full-stack' },
  { label: 'Front End', filter: 'front-end' },
  { label: 'Back End', filter: 'back-end' },
] as const

export const FilterSelector = () => {
  const { filter } = useParams()
  const navigate = useNavigate()

  const getTabClickHandler = useCallback((filterOpt: string) => () => {
    navigate(filter !== filterOpt ? `${PAGE_PATH}/${filterOpt}` : `${PAGE_PATH}/all`)
  }, [navigate, filter])

  const currentTabIndex = filterOpts.findIndex((opt) => opt.filter.endsWith(filter ?? ''))

  return(
    <Toolbar sx={{ pl: { xs: 0}, minHeight: { xs: 0}, height: '1.3rem', mt: 3 }}>
      <Box sx={({palette}) => ({ 
        my: 'auto', height: '1rem', lineHeight: '0.9rem', color: palette.text.secondary,
      })}>&#8227;</Box>
      <Tabs
        value={currentTabIndex === -1 ? false : currentTabIndex}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          minHeight: 0,
          height: '100%',
        }}
        TabIndicatorProps={{ sx: { bottom: '0.25rem' }}}
      >
        {filterOpts.map((opt, index) => (
          <Tab
            label={opt.label}
            onClick={getTabClickHandler(opt.filter)}
            key={index}
            {...a11yProps(index)}
            sx={{ mx: 4, p: 0, minHeight: 0, height: '100%', minWidth: 0 }}
          />
        ))}
      </Tabs>
    </Toolbar>
  )
}