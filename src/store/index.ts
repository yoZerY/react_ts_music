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

const state = store.getState()
type StateType = typeof state
type DispatchType = typeof store.dispatch

export const useAppStore: TypedUseSelectorHook<StateType> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const appShallowEqual = shallowEqual

export default store
