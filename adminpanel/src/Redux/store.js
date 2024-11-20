import {configureStore} from '@reduxjs/toolkit'
import adminSlice from '../Redux/adminSlice'

export const store = configureStore({
    reducer: {
        admin: adminSlice,
    }
})

