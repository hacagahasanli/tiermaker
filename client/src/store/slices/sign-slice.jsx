import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerValues: {},
    loginValues: {},
    auth: {}
}

const SignSlice = createSlice({
    name: "SignSlice",
    initialState,
    reducers: {
        registerUser: (payload) => payload,
        loginUser: (payload) => payload,
        setAuth: (state, action) => {
            const { accessToken } = action?.payload
            state.auth = { ...state.auth, accessToken }
        }
    }
})

export const signReducer = SignSlice.reducer
export const { registerUser, loginUser, setAuth } = SignSlice.actions