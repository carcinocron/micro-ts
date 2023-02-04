/**
 * remove value from array without creating a new array
 **/
export function removeItem<T>(arr : Array<T>, value : T): void {
  let index
  while (true) {
    index = arr.indexOf(value);
    if (index === -1) {
      return
    }
    arr.splice(index, 1)
  }
}

/**
 * regular typescript enums might not get inlined
 * booleans might minify as !1 or !0
 * so might as well just use 1 and 0 directly.
 * this entire object will be removed by terser
 * as long as you don't try to iterate over it
 * or otherwise try to do something weird with it
 */
export const FilterBy = {
  // FilterBy.Remove should become inlined as 0 by terser
  Remove: 0,
  Reject: 0,
  // FilterBy.Keep should become inlined as 1 by terser
  Keep: 1,
  Accept: 1,
} as const

export type FilterByResult = typeof FilterBy.Remove | typeof FilterBy.Keep
export type FilterByFn<T> = ((item : T) => boolean) | ((item : T) => FilterByResult)

/**
 * remove value(s) from array that the function `fn` returns true
 * Note: the boolean in fn=>boolean means "keep: true/false"
 * @example
 * ```typescript
 * import { filterBy, FilterBy } from './array'
 * const arr = ['aaa', 'bbb']
 * filterBy(arr, (item) => {
 *   if (item === 'aaa') {
 *     return FilterBy.Remove
 *   }
 *   return FilterBy.Keep
 * })
 * // arr now only has one element: 'bbb'
 * ```
 * 
 * @returns void
 **/
export function filterBy<T>(arr : Array<T>, fn : FilterByFn<T>): void {
  let from = 0, to = 0;
  while (from < arr.length) {
    if (fn(arr[from])) {
      arr[to] = arr[from];
      to++;
    }
    from++;
  }
  arr.length = to;
}

