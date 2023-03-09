import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas/rootSaga";
import { imagesReducer } from "./slices";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        images: imagesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
        sagaMiddleware
    )
})

// sagaMiddleware.run(rootSaga)

export default store;