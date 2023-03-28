export const buttonValues = {
    SOD: "Save or Download",
    NORMAL_VIEW: "Normal View",
    RESET: "Reset",
    C_B_COLOR: "Change Background Color",
    C_B_COLOR_PICKER: "Close Background Color Picker",
    FULL_SCREEN: "Full Screen View"
}

export const colorSets = {
    S: "#FF7F7F",
    A: "#FFBF7F",
    B: "#FFDF7F",
    C: "#FFFF7F",
    D: "#BFFF7F",
    F: "#7FFF7F",
    G: "#7FFFFF"
}

export const defaultBoards = [
    {
        id: 1,
        bgColor: colorSets.S,
        value: 'S',
        items: []
    },
    {
        id: 2,
        bgColor: colorSets.A,
        value: "A",
        items: []
    },
    {
        id: 3,
        bgColor: colorSets.B,
        value: "B",
        items: []
    },
    {
        id: 4,
        bgColor: colorSets.C,
        value: "C",
        items: []
    },
    {
        id: 5,
        bgColor: colorSets.D,
        value: "D",
        items: []
    },
    {
        id: 6,
        bgColor: colorSets.F,
        value: "F",
        items: []
    },
    {
        id: 7,
        bgColor: colorSets.G,
        value: "G",
        items: []
    },
    {
        id: 8,
        diff: true,
        items: []
    }
]

export const colourPalattes = {
    A1: "#1A1A17",
    A2: '#F7F7F7',
    A3: '#CFCFCF',
    A4: '#858585',
    A5: '#3B3B3B',
    A6: '#BF7FBF',
    A7: '#FF7FFF',
    A8: '#7F7FFF',
    A9: '#7FBFFF',
    A10: '#7FFFFF',
    A11: '#7FFF7F',
    A12: '#BFFF7F',
    A13: '#FFFF7F',
    A14: '#FFDF7F',
    A15: '#FFBF7F',
    A16: '#FF7F7F'
}

export const pageName = {
    '/tierboard': "Tierboard",
    '/': "Home",
    '/login': "Login",
    "/make-a-template": "Make a Template"
}

export const btnText = {
    login: { text: "Sign Up", path: "register" },
    register: { text: "login", path: 'login' }
}

export const categoriesOptions = [
    {
        id: "Select a Category",
        value: "Select a Category"
    },
    {
        id: "Actors && Actresses",
        value: "Actors && Actresses"
    },
    {
        id: "Albums",
        value: "Albums"
    },
    {
        id: "AMC Shows",
        value: "AMC Shows"
    },
    {
        id: "Among Us",
        value: "Among Us"
    },

]

export const imageOrientations = [
    {
        id: "Square",
        value: "Square"
    },
    {
        id: "Landscape",
        value: "Landscape"
    },
    {
        id: "Portrait",
        value: "Portrait"
    },
    {
        id: "Circle",
        value: "Circle"
    },
]