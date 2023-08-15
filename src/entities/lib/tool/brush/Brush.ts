import { type CanvasState } from '../../../model/canvasSlice'
import Tool from '../Tool'
import ListenerManager from '../../listener-manager/listenerManager'

export default class Brush extends Tool {
  protected listenerManager: null | any = null
  constructor (canvasState: CanvasState, canvasElement: HTMLCanvasElement, canvasWrapper: HTMLDivElement) {
    super(canvasState, canvasElement, canvasWrapper)
    this.listenerManager = new ListenerManager([])
    console.log(this)
  }

  create () {
    super.create()
    if (this.tmpCanvas != null) {
      super.setCanvasStyle(this.tmpCanvas)
      this.workSpace?.append(this.tmpCanvas)
    }
  }

  destroy () {
    super.destroy()
    this.tmpCanvas?.remove()
  }
}
