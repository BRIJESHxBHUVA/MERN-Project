import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {count: 0},
    reducers: {
        increment: (state, action)=> {
            state.count += 1
        },
        decrement: (state, action)=> {
            state.count -= 1
        }
    }
})

export const {increment, decrement} = adminSlice.actions
export default adminSlice.reducer