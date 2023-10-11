import { Typography, styled } from '@mui/material'
import { SpanFromMd } from './SpanFromMd'
import { mergeSxProps } from '../utils'
import { ComponentProps } from 'react'


const UonrderedList = styled('ul')({

})

type ListFromMdProps = {
  /** list of strings with markdown */
  items: string[]
  ItemProps?: ComponentProps<typeof Typography<'li'>>
} & Omit<ComponentProps<typeof UonrderedList>, 'children'>

/**
 * Displays a list of text items, converting any markdown to html.
 * Note: *no sanitization*
 */
export const ListFromMd = ({ items, ItemProps, sx, ...rest }: ListFromMdProps) => (
  <UonrderedList {...rest} sx={mergeSxProps(sx, { pl: '1em', mt: 3, mb: 1 })}>
    {items.map((item, i) => (
      <Typography component="li" {...ItemProps} key={i}>
        <SpanFromMd markdown={item} />
      </Typography>
    ))}
  </UonrderedList>
)