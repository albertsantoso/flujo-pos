import axios from "axios";
import { Instance } from "../../../src/api/instance";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    profile_picture: "",
    role: ""
};

export const userSlice = createSlice(
    {
        name: "users",
        initialState,
        reducers: {
            setUsername: (initialState, {payload}) => {
                initialState.username = payload
            },
            setProfile_Picture: (initialState, {payload}) => {
                initialState.profile_picture = payload
            },
            setRole: (initialState, {payload}) => {
                initialState.role = payload
            }
        }
    }
)

export const onLoginAsync = ({username, password}) => async(dispatch) => {
    try {
        const data = await axios.post('http://localhost:5000/users/login', {username, password})
        console.log(data.data.accessToken);
        localStorage.setItem('accessToken', response.data[0].id)
        // setTimeout(() => {
        //     dispatch(setUsername(response.data[0].username))
        //     dispatch(setProfile_Picture(response.data[0].profile_picture))
        //     dispatch(setRole(response.data[0].role))
        // }, 3000)
    } catch (error) {
        console.log(error);
        return error
    }
}

export const onCheckIsLogin = () => async(dispatch) => {
    try {
        const id = localStorage.getItem('accessToken')
        const response = await axios.get(`http://localhost:5000/users/specific/${id}`)
        dispatch(setUsername(response.data.data.username))
    } catch (error) {
        
    }
}

export const {setUsername} = userSlice.actions;
export default userSlice.reducer;