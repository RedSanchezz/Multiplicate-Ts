import Brush from './Brush'
import { type CanvasState } from '../../../model/canvasSlice'
import { type MouseEvent } from 'react'
import ColorHelper from "../../color-helper/ColorHelper"

interface IBrushSettings {
  size: number
  alpha: number
  color: string
}
export default class SketchBrush extends Brush {
  private started: boolean = false
  private readonly size: number = 0
  private readonly color: string = ''
  private readonly alpha: number = 0
  constructor (canvasState: CanvasState, canvasElement: HTMLCanvasElement, canvasWrapper: HTMLDivElement, brushSettings: IBrushSettings) {
    super(canvasState, canvasElement, canvasWrapper)
    this.size = brushSettings.size
    this.color = brushSettings.color
    this.alpha = brushSettings.alpha
    this.started = false
  }

  create () {
    let ppts: Array<{ x: number, y: number }> = []
    if (this.tmpCanvas != null && this.canvas != null && this.workSpace != null && this.ctx != null) {
      this.tmpCanvas.style.zIndex = '100'
      this.tmpCanvas.height = this.canvasState.height
      this.tmpCanvas.width = this.canvasState.width
      this.tmpCanvas.style.top = this.canvasState.top.toString() + 'px'
      this.tmpCanvas.style.left = this.canvasState.left.toString() + 'px'
      this.tmpCanvas.style.position = 'absolute'

      // для удобства
      this.tmpCanvas.classList.add('tmpCanvas')

      this.tmpCanvas.style.cursor = 'crosshair'

      this.workSpace.prepend(this.tmpCanvas)
      // Нажимаем на клавишу мыши
      this.listenerManager.addListener(this.workSpace, 'mousedown', (e: MouseEvent) => {
        // const state = store.getState()
        // if (state.layouts.currentLayout.isHidden()) {
        //   alert('Выбранный вами слой скрыт !')
        //   return
        // }
        this.started = true
        if ((this.ctx != null) && (this.tmpCtx != null) && this.tmpCanvas !== null) {
          this.ctx.lineCap = 'round'

          this.tmpCtx.strokeStyle = ColorHelper.toRgba(this.color, this.alpha)
          this.tmpCtx.lineWidth = this.size
          this.tmpCtx.lineCap = this.ctx.lineCap

          this.tmpCanvas.style.transform = `scale(${this.canvasState.zoom})`
          this.tmpCanvas.style.top = this.canvasState.top.toString() + 'px'
          this.tmpCanvas.style.left = this.canvasState.left.toString() + 'px'

          onPaint(e)
          this.listenerManager.addListener(this.tmpCanvas, 'mousemove', onPaint)
        }
      })

      // когда отжимаем клавишу мыши
      this.listenerManager.addListener(this.workSpace, 'mouseup', function (this: SketchBrush) {
        endPaint.call(this)
      })

      // когда мышка уходит с холста
      this.listenerManager.addListener(this.workSpace, 'mouseleave', function (this: SketchBrush) {
        endPaint.call(this)
      })
    }

    const endPaint = () => {
      if (this.started) {
        this.started = false
        if (this.ctx != null && (this.tmpCanvas != null) && (this.tmpCtx != null)) {
          this.listenerManager.removeListener(this.tmpCanvas, 'mousemove', onPaint)
          this.ctx.drawImage(this.tmpCanvas, 0, 0)

          // const state = store.getState()
          // LayoutManager.update()
          // state.layouts.currentLayout.saveInHistory()

          this.tmpCtx.clearRect(0, 0, this.tmpCanvas.width, this.tmpCanvas.height)

          ppts = []
        }
      }
    }

    const onPaint = (e: any) => {
      const x = e.offsetX
      const y = e.offsetY
      ppts.push({ x, y })
      if (this.tmpCtx != null && (this.canvas != null)) {
        this.tmpCtx.beginPath()
        // tmp_ctx.moveTo(ppts[0].x, ppts[0].y);
        this.tmpCtx.clearRect(0, 0, this.canvasState.width, this.canvasState.height)

        if (ppts.length <= 3) {
          this.tmpCtx.arc(ppts[0].x, ppts[0].y, 0, 0, 2 * Math.PI)
        }
        for (let i = 1; i < ppts.length - 2; i++) {
          const c = (ppts[i].x + ppts[i + 1].x) / 2
          const d = (ppts[i].y + ppts[i + 1].y) / 2
          this.tmpCtx.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d)
        }
        this.tmpCtx.stroke()
      }
    }
  }

  destroy () {
    this.listenerManager.removeAllListener()
    this.tmpCanvas?.remove()
  }
}
