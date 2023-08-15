import { type EventType } from '@testing-library/react'

interface listenerObj {
  element: HTMLElement
  event: EventType
  func: () => void
}

export default class ListenerManager {
  protected listeners: listenerObj[] = []
  constructor (listenersArr: []) {
    this.listeners = listenersArr
  }

  addListener (element: HTMLElement, event: EventType, func: () => void) {
    this.listeners.push({
      element,
      event,
      func
    })

    element.addEventListener(event, func)
  }

  removeLastListener () {
    const obj = this.listeners.pop()
    obj?.element.removeEventListener(obj.event, obj.func)
  }

  removeListenersByEvent (element: HTMLElement, event: EventType) {
    for (let i = 0; i < this.listeners.length; i++) {
      if (this.listeners[i].event === event && this.listeners[i].element === element) {
        const obj = this.listeners[i]
        obj.element.removeEventListener(obj.event, obj.func)
        this.listeners.splice(i, 1)
      }
    }
  }

  removeListener (element: HTMLElement, event: EventType, func: () => void) {
    for (let i = 0; i < this.listeners.length; i++) {
      if (this.listeners[i].event === event &&
                this.listeners[i].element === element &&
                JSON.stringify(this.listeners[i].func) === JSON.stringify(func)) {
        const obj = this.listeners[i]
        obj.element.removeEventListener(obj.event, obj.func)
        this.listeners.splice(i, 1)
      }
    }
  }

  removeAllListener () {
    while (this.listeners.length !== 0) {
      const obj = this.listeners.pop()
      obj?.element.removeEventListener(obj.event, obj.func)
    }
  }
}
