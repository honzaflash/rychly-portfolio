import { mdToHtmlString } from '../utils'


type SpanFromMdProps = {
  markdown: string
}

/** Returns a `span` with *dangerously set inner html* as the `markdown` string converted to html */
export const SpanFromMd = ({ markdown }: SpanFromMdProps) => (
  <span dangerouslySetInnerHTML={{__html: mdToHtmlString(markdown)}} />
)
