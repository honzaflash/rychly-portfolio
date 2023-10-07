

export type Relevancy = ('fe' | 'be')[]

/**
 * Object with relevancy predicates for filtering
 * @keys filter parameter
 * @values predicate function
 */
export const relevancyPredicates: Record<string, ((r: Relevancy) => boolean) | undefined> = {
  'full-stack': (r) => r.includes('fe') || r.includes('be'),
  'front-end': (r) => r.includes('fe'),
  'back-end': (r) => r.includes('be'),
} as const

