import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface BrushState {
  color: string
  size: number
  alpha: number
  savedBrushes: any[]
}

const initialState: BrushState = {
  color: '#ff0f00',
  size: 5,
  alpha: 0.5,
  savedBrushes: []
}

export const brushSlice = createSlice({
  name: 'brush',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
    },
    changeAlpha: (state, action: PayloadAction<number>) => {
      state.alpha = action.payload
    },
    changeSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload
    }
  }
})

export const { changeColor, changeAlpha, changeSize } = brushSlice.actions

export const brushReducer = brushSlice.reducer
