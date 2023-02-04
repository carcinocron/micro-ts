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
 * remove value(s) from array that the function `fn` returns true
 **/
export function removeItemWhere<T>(arr : Array<T>, fn : (item : T)=>boolean): void {
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
