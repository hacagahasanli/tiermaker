import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: {
        colour: "#1a1a17"
    },
    modalVisibility: false,
    columnDetail: {},
    tierlists: [],
    tierlistsCount: 0
}

const ImagesSlice = createSlice({
    name: "ImagesReducer",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            const colour = action.payload
            state.theme.colour = colour
        },
        setModalVisible: (state, action) => {
            const isVisible = action.payload
            state.modalVisibility = isVisible
        },
        setColumnDetail: (state, action) => {
            const data = action.payload;
            state.columnDetail = data
        },
        getTierLists: (payload) => payload,
        setTierLists: (state, action) => {
            const { data } = action.payload
            state.tierlists = [...state.tierlists, ...data.allFiles]
            console.log(data, "DATA");
            console.log(state.tierlists, "DATA");
            state.tierlistsCount = data?.totalCount
        }
    }
})


export const imagesReducer = ImagesSlice.reducer
export const { setTheme, setModalVisible, setColumnDetail, setTierLists, getTierLists } = ImagesSlice.actions 