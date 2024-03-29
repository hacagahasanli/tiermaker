import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: {
        colour: "#1a1a17"
    },
    modalVisibility: false,
    columnDetail: {},
    tierLists: [],
    tierListsCount: 0,
    cachedBoardId: "",
    templateCreated: false
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
            state.tierLists = [...data?.allFiles]
            state.tierListsCount = data?.totalCount
        },
        setCachedBoardId: (state, action) => {
            const boardId = action.payload
            state.cachedBoardId = boardId
            localStorage.setItem("cachedId", JSON.stringify(boardId))
        },
        createTierList: (payload) => payload,
        setCreatedTemplate: (state, action) => {
            const createdTemplate = action.payload;
            const prevTierLists = [...state.tierLists]
            state.tierLists = [createdTemplate, ...prevTierLists]
            state.templateCreated = true
        },
        setIsTemplateCreated: (state, action) => state.templateCreated = false

    }
})

export const imagesReducer = ImagesSlice.reducer
export const {
    setTheme,
    setModalVisible,
    setColumnDetail,
    setTierLists,
    getTierLists,
    setCachedBoardId,
    createTierList,
    setCreatedTemplate,
    setIsTemplateCreated
} = ImagesSlice.actions 