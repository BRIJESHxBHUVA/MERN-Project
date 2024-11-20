import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.withCredentials = true

const getToken = ()=> {
    return(
    sessionStorage.getItem('adminToken')
    )
}

export const adminLogin = createAsyncThunk('admin/adminLogin', async(data, {rejectWithValue})=> {
    try {
        const response = await axios.post('http://localhost:5000/admin/login', data)
    
        sessionStorage.setItem('adminToken', response.data.token)
        sessionStorage.setItem('adminId', response.data.user._id)
        sessionStorage.setItem('admin', JSON.stringify(response.data.user))
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const addAdmin = createAsyncThunk('admin/addAdmin', async(data, {rejectWithValue})=> {
    try {
        const response = await axios.post('http://localhost:5000/admin/signup', data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const getUsers = createAsyncThunk('admin/getUsers', async(_, {rejectWithValue})=>{
    try {
        const response = await axios.get('http://localhost:5000/admin/alluser')
       return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const getCourse = createAsyncThunk('admin/getCourse', async (_, {rejectWithValue})=>{
    try {
        const token = getToken()
        const response = await axios.get('http://localhost:5000/admin/course', {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
       return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const adminEdit = createAsyncThunk('admin/adminEdit', async (_, {rejectWithValue})=> {
    try {
        const id = sessionStorage.getItem('adminId')
        const token = getToken()
        const response = await axios.get(`http://localhost:5000/admin/editdata?id=${id}`, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const editAdmin = createAsyncThunk('admin/editAdmin', async(data, {rejectWithValue})=> {
    try {
        const id = sessionStorage.getItem('adminId')
        const token = getToken()
        const response = await axios.put(`http://localhost:5000/admin/edit?id=${id}`, data, {
            headers: {
                "Content-Type" : "multipart/form-data",
                Authorization : `Bearer ${token}`
            }
        })
        console.log(response)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})


const initialState = {
    admins: [],
    course: [],
    users: [],
    loading: false,
    error: null
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {

        // For get all users

        builder.addCase(getUsers.pending, (state, action)=> {
            state.loading = true
            state.error = null
        })

        builder.addCase(getUsers.fulfilled, (state, action)=> {
            state.loading = false
            state.users = action.payload
        })

        builder.addCase(getUsers.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        })


        // For get all courses

        builder.addCase(getCourse.pending, (state, action)=> {
            state.loading = true
            state.error = null
        })

        builder.addCase(getCourse.fulfilled, (state, action)=>{
            state.loading = false
            state.course = action.payload
        })

        builder.addCase(getCourse.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        })


        // For login admin

        builder.addCase(adminLogin.pending, (state, action)=>{
            state.loading = true
            state.error = null
        })

        builder.addCase(adminLogin.fulfilled, (state, action)=> {
            state.loading = false
            state.admins = action.payload
        })

        builder.addCase(adminLogin.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        })


        // For register new admin

        builder.addCase(addAdmin.pending, (state, action)=> {
            state.loading = true
            state.error = null
        })

        builder.addCase(addAdmin.fulfilled, (state, action)=> {
            state.loading = false
            state.admins = action.payload
        })

        builder.addCase(addAdmin.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        })


        // For getting admin previous data to update

        builder.addCase(adminEdit.pending, (state, action)=> {
            state.loading = true
            state.error = null
        })

        builder.addCase(adminEdit.fulfilled, (state, action)=> {
            state.loading = false
            state.admins = action.payload
        })

        builder.addCase(adminEdit.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        })


        // For update admin data

        builder.addCase(editAdmin.pending, (state, action)=> {
            state.loading = true
            state.error = null
        })

        builder.addCase(editAdmin.fulfilled, (state, action)=> {
            state.loading = false
            state.admins = action.payload
        })

        builder.addCase(editAdmin.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        })

    }
})


export default adminSlice.reducer