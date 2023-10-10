import { mdToHtmlString } from '../utils'


type SpanFromMdProps = {
  markdown: string
}

/** 
 * Returns a `span` with *dangerously set inner html* as the `markdown` string converted to html 
 * Note: *no sanitization*
 */
export const SpanFromMd = ({ markdown }: SpanFromMdProps) => (
  <span dangerouslySetInnerHTML={{__html: mdToHtmlString(markdown)}} />
)
