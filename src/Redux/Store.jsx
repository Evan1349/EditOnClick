import {configureStore} from '@reduxjs/toolkit'
import tableReducer from './ReduxSlice'

const store = configureStore({
    reducer:{
        table: tableReducer,
    }
})

export default store;