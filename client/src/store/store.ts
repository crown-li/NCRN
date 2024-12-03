import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // 这里可以添加更多的reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 