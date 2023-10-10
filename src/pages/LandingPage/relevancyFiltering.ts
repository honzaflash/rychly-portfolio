import _ from 'lodash'
import { getFirstKey, getFirstValue } from '../../utils'


export type RelevancyTags = ('fe' | 'be')[]

/**
 * Object with relevancy predicates for filtering
 * @keys filter parameter
 * @values predicate function
 */
export const relevancyPredicates: Record<string, ((r: RelevancyTags) => boolean) | undefined> = {
  'full-stack': (r) => r.includes('fe') || r.includes('be'),
  'front-end': (r) => r.includes('fe'),
  'back-end': (r) => r.includes('be'),
} as const

/** String information that may or may not have relevancy tags attached */
export type MaybeTaggedString = string | { [str: string]: RelevancyTags }

/** For list of items that are rated and unrated. That means items are a string or objects with a single key */
export const filterStringsByRelevancy = <T extends MaybeTaggedString>(list: T[], filter: string | undefined) =>
  list.filter((item) => typeof item === 'string' || (relevancyPredicates[filter ?? '']?.(getFirstValue(item)) ?? true))

export const extractRelevantStrings = <T extends MaybeTaggedString>(list: T[]) =>
  list.map((item) => typeof item === 'string' ? item : getFirstKey(item))

export const filterAndExtractRelevantStrings = <T extends MaybeTaggedString>(list: T[], filter: string | undefined) =>
  extractRelevantStrings(filterStringsByRelevancy(list, filter))

/** For lists of objects with relevancy tags under `path` */
export const filterObjectsByRelevancy = <Path extends string, Obj extends { [k in Path]?: RelevancyTags }>(
  o: Obj[],
  path: Path,
  filter: string | undefined,
) => o.filter((item) => (
    !_.get(item, path)
    || (relevancyPredicates[filter ?? '']?.(_.get(item, path) as RelevancyTags) ?? true)
  ))
