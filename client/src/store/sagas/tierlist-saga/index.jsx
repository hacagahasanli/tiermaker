import { fetchTierLists } from "api/index";
import { put, call, takeLatest, fork } from "redux-saga/effects";
import { getTierLists, setTierLists } from "store/slices/images-slice";
import { setLoading } from "store/slices/loading";
import { sweetFire } from "utils/swal";
import Swal from "sweetalert2";

function* GetAllTierListsAsync({ payload }) {
    try {
        yield put(setLoading(true))
        const tierLists = yield call(fetchTierLists, payload)
        if (tierLists !== "Error") {
            yield put(setTierLists(tierLists))
            yield put(setLoading(false))
        }
    } catch (err) {
        yield put(setLoading(false))
        yield Swal.fire(sweetFire({ type: "error" }))
    }
}

function* CallGetAllTierlists() {
    yield takeLatest(getTierLists, GetAllTierListsAsync)
}

export const tierListsSaga = [
    fork(CallGetAllTierlists)
]