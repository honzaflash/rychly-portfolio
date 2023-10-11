import { Link, LinkProps } from '@mui/material'
import { mergeSxProps } from '../utils'
import { ExternalLinkIcon } from '../icons/ExternalLinkIcon'


export const ExternalLink = ({ children, sx, ...rest }: LinkProps) => (
  <Link
    target="_blank"
    {...rest}
    sx={mergeSxProps(sx, {
      color: 'unset',
      textDecoration: 'inherit',
      '&:any-link:hover': { color: 'inherit' },
      '&:any-link': { color: 'inherit' },
    })}
  >
    {children}
    <ExternalLinkIcon sx={{ position: 'relative', bottom: '-0.05em', ml: '0.5em', fontSize: '80%' }} />
  </Link>
)
