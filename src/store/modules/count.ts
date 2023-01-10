import { createSlice } from '@reduxjs/toolkit'

const countStore = createSlice({
  name: 'count',
  initialState: {
    age: 12,
    name: 'yz'
  },
  reducers: {}
})

export default countStore.reducer
