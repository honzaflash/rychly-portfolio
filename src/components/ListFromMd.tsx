import { List, ListItemText, ListItemTextProps, ListProps } from '@mui/material'
import { SpanFromMd } from './SpanFromMd'


type ListFromMdProps = {
  /** list of strings with markdown */
  items: string[]
  ItemProps?: ListItemTextProps
} & Omit<ListProps, 'children'>

/**
 * Displays a list of text items, converting any markdown to html.
 * Note: *no sanitization*
 */
export const ListFromMd = ({ items, ItemProps, ...rest }: ListFromMdProps) => (
  <List {...rest}>
    {items.map((item, i) => (
      <ListItemText {...ItemProps} key={i}>
        <SpanFromMd markdown={item} />
      </ListItemText>
    ))}
  </List>
)