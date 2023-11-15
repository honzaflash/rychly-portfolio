import { Box, BoxProps, Switch, Typography } from '@mui/material'
import { mergeSxProps } from '../../utils'
import { useCoolArtContext } from './CoolArt'


export const CoolArtSwitch = ({sx, ...rest}: BoxProps) => {
  const { hidden, setHidden } = useCoolArtContext()
  return (
    <Box
      {...rest}
      sx={mergeSxProps({
        display: 'flex',
        alignItems: 'center',
      }, sx)}
    >
      <Typography variant="button">Distraction</Typography>
      <Switch
        checked={!hidden}
        onChange={({target}) => { setHidden(!target.checked)}}
      />
    </Box>
  )}
