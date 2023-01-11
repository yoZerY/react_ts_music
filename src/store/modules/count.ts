import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Istate {
  age: number
  name: string
}

const initialState: Istate = {
  age: 12,
  name: 'yz'
}

const countStore = createSlice({
  name: 'count',
  initialState,
  reducers: {
    changeAge(state, { payload }: PayloadAction<number>) {
      state.age = payload
    }
  }
})

export const { changeAge } = countStore.actions

export default countStore.reducer
