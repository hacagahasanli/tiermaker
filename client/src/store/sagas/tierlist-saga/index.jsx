import { fetchTierLists } from "api/index";
import { put, call, takeLatest, fork } from "redux-saga/effects";
import { getTierLists, setTierLists } from "store/slices/images-slice";

function* GetAllTierListsAsync({ payload }) {
    try {
        const tierLists = yield call(fetchTierLists, payload)
        if (tierLists !== "Error") {
            yield put(setTierLists(tierLists))
        }
    } catch (err) {
        console.log(err);
    }
}

function* CallGetAllTierlists() {
    yield takeLatest(getTierLists, GetAllTierListsAsync)
}

export const tierListsSaga = [
    fork(CallGetAllTierlists)
]