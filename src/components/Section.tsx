import { Stack, StackProps, Typography } from '@mui/material'
import { mergeSxProps } from '../utils'


export type SectionProps = {
  title?: string
} & StackProps

export const Section = ({title, children, sx, ...rest}: SectionProps) => (
  <Stack spacing={2} sx={mergeSxProps({ mt: 6 }, sx)} {...rest}>
    {title && <Typography variant="h5">{title}</Typography>}
    {children}
  </Stack>
)
