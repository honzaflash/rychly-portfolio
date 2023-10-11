import { Box, Typography } from '@mui/material'
import { Todo } from '../../components/Todo'


export const Things = () => (
  <Box>
    <Typography>I like people. They are what matters.</Typography>
    <Typography>But as an engineer I like <em>things</em> even more. Designing them. Making them.</Typography>
    <Typography>Here are some of my favorite things I have made, including software and hardware.</Typography>
    <Todo name="My projects in details" />
  </Box>
)
