import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true

const getToken = ()=> {
    return(
        sessionStorage.getItem('userToken')
    )
}

export const userLogin = createAsyncThunk('user/userLogin', async(userdata, {rejectWithValue})=>{
    try {
        const response = await axios.post('http://localhost:5000/user/login', userdata)
        console.log(response.data)
        sessionStorage.setItem('userToken', response.data.token)
        sessionStorage.setItem('userId', response.data.user._id)
        sessionStorage.setItem('User', JSON.stringify(response.data.user))

    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const AddUser = createAsyncThunk('user/AddUser', async(newuser, {rejectWithValue})=> {
    try {
        const response = await axios.post('http://localhost:5000/user/signup', newuser, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
        console.log(response)
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message)
    }
})

export const GetCourse = createAsyncThunk('user/GetCourse', async(_, {rejectWithValue})=>{
    try {
        const token = getToken()
        const response = await axios.get('http://localhost:5000/user/course', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

 const initialState = {
    user: [],
    course: [],
    loading: false,
    error: null
 }

 const userSlice = createSlice({
     name: 'user',
     initialState,
    reducers: {},
    extraReducers: (builder)=> {
        
        // For Login User
        builder.addCase(userLogin.pending, (state, action)=> {
            state.loading = true
            state.error = null
        })

        builder.addCase(userLogin.fulfilled, (state, action)=>{
            state.loading = false
            state.user = action.payload
        })

        builder.addCase(userLogin.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        })


        // For Register New User

        builder.addCase(AddUser.pending, (state, action)=>{
            state.loading = true
            state.error = null
        })

        builder.addCase(AddUser.fulfilled, (state, action)=> {
            state.loading = false
            state.user = action.payload
        })

        builder.addCase(AddUser.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        })


        // For Fetch All Courses

        builder.addCase(GetCourse.pending, (state, action)=>{
            state.loading = true
            state.error = null
        })

        builder.addCase(GetCourse.fulfilled, (state, action)=>{
            state.loading = false
            state.course = action.payload
        })

        builder.addCase(GetCourse.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default userSlice.reducer