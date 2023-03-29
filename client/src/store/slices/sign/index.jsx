import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerValues: {},
    loginValues: {},
    auth: {},
    stuckPage: false,
    isRegistered: false
}

const SignSlice = createSlice({
    name: "SignSlice",
    initialState,
    reducers: {
        registerUser: (payload) => payload,
        loginUser: (payload) => payload,
        setAuth: (state, action) => {
            const accessToken = action?.payload
            state.auth = accessToken
        },
        setStuckPage: (state, action) => {
            state.stuckPage = action.payload
        },
        setIsUserRegistered: (state, action) => {
            state.isRegistered = action.payload
        }
    }
})

export const signReducer = SignSlice.reducer
export const { registerUser, loginUser, setAuth, setStuckPage, setIsUserRegistered } = SignSlice.actions