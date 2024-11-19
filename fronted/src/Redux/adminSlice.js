import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    admin: [],
    loading: false,
    error: null
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {}
})

export default adminSlice.reducer