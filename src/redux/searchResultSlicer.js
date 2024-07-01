import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading : false,
    users : [],
    error : ''
}
const fetchUser = createAsyncThunk('user/fetchUser',async (a)=>{
   const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + a)
    return response.data
})

const userSlice = createSlice({
    name : 'user',
    initialState,
    extraReducers : builder =>{
        builder.addCase(fetchUser.pending,state =>{
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled,(state,action) =>{
            state.loading = false
            state.users = action.payload
            state.error =''
        })
        builder.addCase(fetchUser.rejected,(state,action) =>{
            state.loading = false
            state.users = []
            state.error =action.error.message
        })
    }
})
export default userSlice.reducer;
const _fetchUser = fetchUser
export { _fetchUser as fetchUser }