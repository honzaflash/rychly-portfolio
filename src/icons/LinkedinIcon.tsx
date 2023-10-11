import { Box, BoxProps } from '@mui/material'

import { mergeSxProps } from '../utils'
import image from './linked-In-white.png'


export const LinkedinIcon = ({sx, ...rest}: BoxProps) => (
  <Box sx={mergeSxProps(sx, { fontSize: '1.5em', height: '1em', display: 'inline-block' })} {...rest}>
    <img style={{ height: '100%' }} src={image} alt="LinkedIn" />
  </Box>
)
