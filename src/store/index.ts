import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import count from './modules/count'

const store = configureStore({
  reducer: {
    count: count
  }
})

type RootState = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch

export const useAppStore: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const appShallowEqual = shallowEqual

export default store
