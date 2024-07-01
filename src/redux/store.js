import { configureStore } from '@reduxjs/toolkit'
// const { buildGetDefaultMiddleware } = require('@reduxjs/toolkit/dist/getDefaultMiddleware');
import userReducer from '../redux/searchResultSlicer'

const store = configureStore({
    reducer: {
        user: userReducer
    },
    //  middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})
export default store;