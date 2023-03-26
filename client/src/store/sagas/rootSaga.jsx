import { all } from "redux-saga/effects";
import { signSaga } from "./sign-saga";
import { tierListsSaga } from "./tierlist-saga";

export default function* rootSaga() {
    yield all([...signSaga, ...tierListsSaga])
}