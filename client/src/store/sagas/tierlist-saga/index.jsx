import { fetchTierLists, addTierListTemplate } from "api/index";
import { put, call, takeLatest, fork } from "redux-saga/effects";
import { createTierList, getTierLists, setCreatedTemplate, setTierLists } from "store/slices/images";
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

function* AddTierlistAsync({ payload }) {
    try {
        const { navigate, ...rest } = payload
        console.log(...rest, "REST");
        const createdTemplate = yield call(addTierListTemplate, ...rest)
        yield put(setCreatedTemplate(createdTemplate))
        yield Swal.fire(sweetFire({ type: "success", text: "Tierboards", title: "You made it!" }))
        yield setTimeout(() => navigate('/', { replace: true }), 700)
    } catch (err) {
        yield Swal.fire(sweetFire({ type: "error", text: "Tierlist was not created !" }))
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