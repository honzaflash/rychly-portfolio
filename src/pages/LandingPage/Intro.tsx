import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Intro = () => (
  <Typography
    variant='body1'
    sx={{ fontSize: '110%', mt: 3 }}
  >
    {/* TODO maybe custommize this based on filter as well */}
    I enjoy building <Link to="/things">things</Link> that improve people&apos;s lives in <em>little</em> or <strong>big</strong> ways.
  </Typography>
)