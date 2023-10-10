import { SxProps, Theme } from '@mui/material'
import _ from 'lodash'
import { Converter } from 'showdown'


type ObjectOfObjects = { [k: string]: object }

/** Sort of the reverse to `keyBy` from lodash */
export const unKeyBy = <T extends ObjectOfObjects>(obj: T, keyProp: string) =>
  _.map(obj, (val, key) => ({...val, [keyProp]: key }))

/** Mainly useful when we know `o` has a single key */
export const getFirstKey = <T, Obj extends Record<string | number | symbol, T>>(o: Obj) => Object.keys(o)[0]
/** Mainly useful when we know `o` has a single value */
export const getFirstValue = <T, Obj extends Record<string | number | symbol, T>>(o: Obj) => Object.values(o)[0]

const converter = new Converter()
converter.setOption('openLinksInNewWindow', true)
/** convert markdown to html and strip the `<p>` tag that showdown wraps the string with */
export const mdToHtmlString = (str: string) => converter.makeHtml(str).replace(/^<p>|<\/p>$/g, '')

/** Merge two `SxProp`s */
export const mergeSxProps = (sx1?: SxProps<Theme>, sx2?: SxProps<Theme>) => {
  if (Array.isArray(sx1)) {
    if (Array.isArray(sx2)) {
      return [...sx1, ...sx2]
    }
    return [...sx1, sx2]
  }

  if (Array.isArray(sx2)) {
    return [sx1, ...sx2]
  }
  return [sx1, sx2] as SxProps<Theme>
}
