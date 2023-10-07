import { Card, CardProps, Typography } from '@mui/material'
import { mergeSxProps } from '../utils'

type TodoProps = { name?: string } & CardProps
export const Todo = ({ name, sx, ...rest }: TodoProps) => (
  <Card
    sx={mergeSxProps({
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff05',
      border: 'none',
    }, sx)}
    {...rest}
  >
    {name && <Typography variant="h6">{name}</Typography>}
    <Typography>&#128679; {name ? 'Coming soon' : 'Under construction'} &#128679;</Typography>
  </Card>
)