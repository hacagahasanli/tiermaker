import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerValues: {},
    loginValues: {},
    auth: {},
    stuckPage: false,
    formVisible: true
}

const SignSlice = createSlice({
    name: "SignSlice",
    initialState,
    reducers: {
        registerUser: (payload) => payload,
        loginUser: (payload) => payload,
        setAuth: (state, action) => {
            console.log(action.payload);
            const accessToken = action?.payload
            state.auth = accessToken
        },
        setStuckPage: (state, action) => {
            state.stuckPage = action.payload
        },
        setHideForm: (state, action) => {
            state.formVisible = action.payload
        }
    }
})

export const signReducer = SignSlice.reducer
export const { registerUser, loginUser, setAuth, setStuckPage, setHideForm } = SignSlice.actions