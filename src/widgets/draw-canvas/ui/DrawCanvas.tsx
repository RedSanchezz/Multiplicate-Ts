import '../styles/draw-canvas.css'
import { type MutableRefObject, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../../entities/store/Hooks'
import { useBrush } from "../../../entities"

export const DrawCanvas = () => {
  const canvasState = useAppSelector((state) => state.canvas)
  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null)
  const canvasWrapper: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [canvasElem, setCanvasElem] = useState<HTMLCanvasElement | null>(null)

  useEffect(() => {
    setCanvasElem(canvasRef?.current)
  }, [canvasRef?.current])

  useBrush(canvasState, canvasElem, ((canvasWrapper?.current) != null ? canvasWrapper?.current : null))

  return <div className='canvas-wrapper' ref={canvasWrapper} >
        <canvas ref={canvasRef} className="draw-canvas" height={canvasState.height} width={canvasState.width}>
        </canvas>
    </div>
}
