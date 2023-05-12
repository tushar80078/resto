import { configureStore } from '@reduxjs/toolkit'
import restoSlice from '../slices/restoSlice'

export const store = configureStore({
  reducer: {
    restoSlice:restoSlice

  }
})