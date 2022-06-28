import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchList = createAsyncThunk(
  'list/fetchList',
  async (_, { rejectWithValue }) => {
    const response = await axios.get(`https://d27a03nbwzxaug.cloudfront.net/accounts/images/files.json`)
    return response
  }
)

const initialState = {
  data: [],
  categories: [],
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: { },
  extraReducers: (builders) => {
    builders.addCase(fetchList.fulfilled, (state, action) => {
      let category = [];
      let dataInfoArr = [];
      for (let key in action.payload.data) {
       let dataInfoObj = {};
        category.push(key)
        dataInfoObj[key] = action.payload.data[key]
        dataInfoArr.push(dataInfoObj)
      }
     
      state.categories = category
      state.data = dataInfoArr
    })
  },
})

export default listSlice.reducer