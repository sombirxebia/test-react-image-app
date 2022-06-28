import { combineReducers } from '@reduxjs/toolkit'
import listSlice from '../listing/listSlice'

const reducers = {
    data: listSlice,
}

export default combineReducers(reducers)