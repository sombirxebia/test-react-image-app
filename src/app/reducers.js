import { combineReducers } from '@reduxjs/toolkit'
import listSlice from '../list/listSlice'

const reducers = {
    data: listSlice,
}

export default combineReducers(reducers)