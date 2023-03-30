import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerValues: {},
    loginValues: {},
    auth: {},
    isRegistered: false
}

const SignSlice = createSlice({
    name: "SignSlice",
    initialState,
    reducers: {
        registerUser: (payload) => payload,
        loginUser: (payload) => payload,
        logoutUser: (payload) => payload,
        setAuth: (state, action) => {
            const accessToken = action?.payload
            state.auth = accessToken
        },
        setIsUserRegistered: (state, action) => {
            state.isRegistered = action.payload
        }
    }
})

export const signReducer = SignSlice.reducer
export const { registerUser, loginUser, setAuth, setIsUserRegistered, logoutUser } = SignSlice.actions