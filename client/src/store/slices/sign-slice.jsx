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
        getLoginValues: (payload) => payload,
        setAuth: (state, action) => {
            state.auth = { ...state.auth, accessToken: action.payload }
        }
    }
})

export const signReducer = SignSlice.reducer
export const { registerUser, loginUser, setAuth } = SignSlice.actions