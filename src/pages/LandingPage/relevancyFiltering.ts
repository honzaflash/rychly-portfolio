import _ from 'lodash'
import { getFirstKey, getFirstValue } from '../../utils'
import { filterOpts } from './FilterSelector'


type RelevancyAbbreviations = 'fe' | 'be' | 'fs' | 'chain' | 'data' | 'func' | 'all'
const negationSign = '^'
type NegationSign = typeof negationSign
export type RelevancyTags = (RelevancyAbbreviations | `${NegationSign}${RelevancyAbbreviations}`)[]

const tagsByFilterLabel: Record<typeof filterOpts[number]['filter'] | 'all', RelevancyAbbreviations> = {
  'front-end': 'fe',
  'back-end': 'be',
  'full-stack': 'fs',
  'block-chain': 'chain',
  'data-science': 'data',
  'func': 'func',
  'all': 'all',
}

const isDefinedFilter = (filter?: string): filter is (keyof typeof tagsByFilterLabel) =>
  filter != undefined && filter in tagsByFilterLabel

const filterToTag = (filter?: string) => tagsByFilterLabel[isDefinedFilter(filter) ? filter : 'all']

/**
 * Function for relevancy filtering.
 * If an item has no relevancy tags keep it always;
 * If filter is `undefined` or not one of the predefined ones, use the 'all' filter.
 * @param filter URL parameter
 * @returns Predicate for relevancy filtering
 */
export const getRelevancyPredicate = (filter?: string): ((r: RelevancyTags | 'any' | undefined) => boolean) =>
  (r) => !r || r === 'any' ||  (
    r.includes(filterToTag(filter)) ||
    Boolean(
      // if there are any negation tags...
      r.find((tag) => tag.startsWith(negationSign)) &&
      // ...return true as long as there isn't a negation of the current filter tag
      !r.find((tag) => tag === negationSign + filterToTag(filter))
    )
  )

/** String information that may or may not have relevancy tags attached */
export type MaybeTaggedString = string | { [str: string]: RelevancyTags }

/** For list of items that are tagged or untagged. That means items are strings or objects with a single key */
export const filterStringsByRelevancy = <T extends MaybeTaggedString>(list: T[], filter: string | undefined) =>
  list.filter((item) => typeof item === 'string' || getRelevancyPredicate(filter)(getFirstValue(item)))

export const extractRelevantStrings = <T extends MaybeTaggedString>(list: T[]) =>
  list.map((item) => typeof item === 'string' ? item : getFirstKey(item))

export const filterAndExtractRelevantStrings = <T extends MaybeTaggedString>(list: T[], filter: string | undefined) =>
  extractRelevantStrings(filterStringsByRelevancy(list, filter))

/** For lists of objects with relevancy tags under `path` */
export const filterObjectsByRelevancy = <Path extends string, Obj extends { [k in Path]?: RelevancyTags }>(
  o: Obj[],
  path: Path,
  filter: string | undefined,
) => o.filter((item) => getRelevancyPredicate(filter)(_.get(item, path) as RelevancyTags))
