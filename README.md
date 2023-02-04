# micro-ts

A typescript-first repository for small and efficient snippets of typescript.

## Goals

This project is for utility functions (similar to lodash) that are optimized for the following criteria

- Typescript-first
- small file-size
- treeshakable code
- performance
- minimal impact to the garbage collector

## PRs and colaborators welcome

## Explanation

A lot of code you can find in the wild creates bloated and wasteful code,
specifically in terms of final file size, extra function calls, extra objects created, etc..
Or looks like it was written before modern javascript concepts like promises.

Example of lodash bloat:

```js
// @link https://bundlephobia.com/package/lodash.find@4.6.0
// 12.4kB MINIFIED 4.7kB
import find from 'lodash.find'

// this is actually really useful because arr could be anything
// and you don't have typescript to protect you
// lodash also probably does a lot of extra magic if arr
// is not an array
const obj4 = find(arr, obj => obj.id === 4)
```

```ts
// you don't need a 4.7kb library because typescript knows
// arr is an array
const obj4 = arr.find(obj => obj.id === 4)
```

* https://youmightnotneed.com/lodash
* https://youmightnotneedjquery.com/

TODO: more specific explanations of why some top google results for specific functions/utilities are bloated
