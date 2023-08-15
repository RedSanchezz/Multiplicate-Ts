import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../model/counterSlice'
import { brushReducer } from '../model/brushSlice'
import { canvasReducer } from '../model/canvasSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    brush: brushReducer,
    canvas: canvasReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
