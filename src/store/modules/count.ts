import { createSlice } from '@reduxjs/toolkit'

const countStore = createSlice({
  name: 'count',
  initialState: {
    age: 12,
    name: 'yz'
  },
  reducers: {
    changeAge(state, { payload }) {
      state.age = payload
    }
  }
})

export const { changeAge } = countStore.actions

export default countStore.reducer
