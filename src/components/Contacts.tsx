import { Box, BoxProps, Link } from '@mui/material'
import { LinkedinIcon } from '../icons/LinkedinIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { mergeSxProps } from '../utils'


export const Contacts = ({ sx, ...rest }: BoxProps) => (
  <Box sx={mergeSxProps({ display: 'flex', flexDirection: 'row', gap: 3, lineHeight: '60%' }, sx)} {...rest}>
    <Link href="https://www.linkedin.com/in/jan-rychly" target="_blank">
      <LinkedinIcon/>
    </Link>
    <Link href="https://github.com/honzaflash" target="_blank">
      <GithubIcon />
    </Link>
  </Box>
)