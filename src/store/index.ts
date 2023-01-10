import { configureStore } from '@reduxjs/toolkit'
import count from './modules/count'

const store = configureStore({
  reducer: {
    count: count
  }
})

export default store
