import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CanvasState {
  height: number
  width: number
  top: number
  left: number
  zoom: number
}

const initialState: CanvasState = {
  height: 700,
  width: 700,
  top: 0,
  left: 0,
  zoom: 1
}

export const canvasSlice = createSlice({
  name: 'brush',
  initialState,
  reducers: {
    setCanvasHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload
    },
    setCanvasWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload
    }
  }
})

export const { setCanvasHeight, setCanvasWidth } = canvasSlice.actions

export const canvasReducer = canvasSlice.reducer
