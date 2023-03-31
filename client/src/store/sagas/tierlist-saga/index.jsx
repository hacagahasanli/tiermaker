import { fetchTierLists, addTierListTemplate } from "api/index";
import { put, call, takeLatest, fork } from "redux-saga/effects";
import { createTierList, getTierLists, setCreatedTemplate, setTierLists } from "store/slices/images";
import { setLoading } from "store/slices/loading";
import { sweetFire } from "utils/swal";
import Swal from "sweetalert2";

function* GetAllTierListsAsync({ payload }) {
    try {
        yield put(setLoading(true))
        const res = yield call(fetchTierLists, payload)
        if (res.type === "success") {
            yield put(setTierLists(res?.data))
            yield put(setLoading(false))
        }
        else {
            yield put(setLoading(false))
            yield Swal.fire(sweetFire({ type: "error", text: res.message }))
        }
    } catch (err) {
        yield Swal.fire(sweetFire({ type: "error" }))
    }
}

function* AddTierlistAsync({ payload }) {
    try {
        const res = yield call(addTierListTemplate, payload)
        if (type === "success") {
            yield localStorage.setItem('createdTemplate', true)
            yield put(setCreatedTemplate(res?.data))
            yield Swal.fire(sweetFire({ type: "success", text: "Tierboards", title: "You made it!" }))
        } else
            yield Swal.fire(sweetFire({ type: "error", text: "Tierlist was not created !" }))

    } catch (err) {
        yield Swal.fire(sweetFire({ type: "error" }))
    }
}

function* CallGetAllTierlists() {
    yield takeLatest(getTierLists, GetAllTierListsAsync)
}

function* CallAddTierlist() {
    yield takeLatest(createTierList, AddTierlistAsync)
}

export const tierListsSaga = [
    fork(CallGetAllTierlists),
    fork(CallAddTierlist)
]