import { useAppDispatch, useAppSelector } from '../store/Hooks'
import { changeAlpha, changeColor, changeSize } from '../model/brushSlice'
import { useEffect } from "react"
import { type CanvasState } from "../model/canvasSlice"
import SketchBrush from "../lib/tool/brush/SketchBrush"

export const useBrush = (canvasState: CanvasState, canvasElement: HTMLCanvasElement | null, canvasWrapper: HTMLDivElement | null) => {
  const color = useAppSelector((state) => state.brush.color)
  const alpha = useAppSelector((state) => state.brush.alpha)
  const size = useAppSelector((state) => state.brush.size)
  const dispatch = useAppDispatch()

  useEffect(() => {
    let brush: null | SketchBrush = null
    if (canvasElement !== null && canvasWrapper !== null) {
      brush = new SketchBrush(canvasState, canvasElement, canvasWrapper, { size, alpha, color })
      brush.create()
    }

    return () => {
      if (brush != null) {
        brush.destroy()
      }
    }
  }, [canvasState, canvasElement, canvasWrapper, size, alpha])

  const setBrushColor = (color: string) => {
    dispatch(changeColor(color))
  }
  const setBrushAlpha = (alpha: number) => {
    dispatch(changeAlpha(alpha))
  }
  const setBrushSize = (size: number) => {
    dispatch(changeSize(size))
  }

  return { color, setBrushColor, alpha, setBrushAlpha, size, setBrushSize }
}
