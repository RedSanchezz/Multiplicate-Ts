import { type CanvasState } from '../../model/canvasSlice'

export default class Tool {
  protected canvas: HTMLCanvasElement | null = null
  protected ctx: CanvasRenderingContext2D | null = null
  protected canvasState: CanvasState
  protected tmpCanvas: HTMLCanvasElement | null = null
  protected tmpCtx: CanvasRenderingContext2D | null = null
  protected workSpace: HTMLDivElement | null = null

  constructor (canvasState: CanvasState, canvasElement: HTMLCanvasElement, canvasWrapper: HTMLDivElement) {
    this.canvasState = canvasState
    this.canvas = canvasElement
    this.ctx = canvasElement.getContext("2d")
    const tmpCanvas = document.createElement('canvas')
    this.tmpCanvas = tmpCanvas
    this.tmpCtx = tmpCanvas.getContext('2d')
    this.workSpace = canvasWrapper
  }

  create () {
  }

  destroy () {
  }

  protected setLayout (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas
    this.ctx = ctx
  }

  protected setCanvasStyle (tmpCanvas: HTMLCanvasElement) {
    tmpCanvas.style.zIndex = '75'
    tmpCanvas.height = this.canvasState.height
    tmpCanvas.width = this.canvasState.width
    tmpCanvas.style.top = this.canvasState.top.toString() + 'px'
    tmpCanvas.style.left = this.canvasState.left.toString() + 'px'
    tmpCanvas.style.position = 'absolute'
    tmpCanvas.style.transform = `scale(${this.canvasState.zoom})`
    // для удобства
    tmpCanvas.classList.add('tmpCanvas')
  }
}
