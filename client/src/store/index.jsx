import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas/rootSaga";
import { imagesReducer } from "./slices";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    images: imagesReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
        sagaMiddleware
    )
})

sagaMiddleware.run(rootSaga)

export default store;