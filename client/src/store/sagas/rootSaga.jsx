import { all } from "redux-saga/effects";
import { signSaga } from "./sign-saga";

export default function* rootSaga() {
    yield all([...signSaga])
}