import { removeItem } from "./array"

export type EventListener<T> = (a :T) => void

export type EventListenerList<T> = Array<EventListener<T>>

export function addListener<T>(list : EventListenerList<T>, fn : EventListener<T>): void {
  list.push(fn)
}

export function removeListener<T>(list : EventListenerList<T>, fn : EventListener<T>): void {
  removeItem(list, fn)
}

export function flushListeners<T>(list : EventListenerList<T>): void {
  list.length = 0
}

export function emit<T>(list : EventListenerList<T>, data : T): void {
  console.log('emit')
  const len = list.length
  for (let index = 0; index < len; index++) {
    list[index](data)
  }
}

export function emitNextTick<T>(list : EventListenerList<T>, data : T): void {
  console.log('emitNextTick')
  setTimeout(emit, 1, list, data)
}
