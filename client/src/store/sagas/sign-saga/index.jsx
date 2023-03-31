import { userRegistration, userLogin, userLogout } from "api/index";
import { put, call, fork, takeLatest } from "redux-saga/effects";
import { setLoading } from "store/slices/loading";
import { registerUser, loginUser, setAuth, setIsUserRegistered, logoutUser } from "store/slices/sign";
import { sweetFire } from "utils/swal";
import Swal from "sweetalert2";

function* RegisterUserAsync({ payload }) {
    try {
        const userValues = payload;
        const res = yield call(userRegistration, userValues)

        if (res.type === "success")
            yield put(setIsUserRegistered(true))
        else
            yield Swal.fire(sweetFire({ type: "error", text: res.message }))

    } catch (err) {
        yield Swal.fire(sweetFire({ type: "error" }))
    }
}

function* LoginUserAsync({ payload }) {
    try {
        const userValues = payload
        yield put(setLoading(true))
        const res = yield call(userLogin, userValues)

        if (res.type === "success") {
            yield put(setAuth(res.data))
            yield put(setLoading(false))
        } else {
            yield Swal.fire(sweetFire({ type: "error", text: res.message }))
            yield put(setLoading(false))
        }

    } catch (err) {
        yield Swal.fire(sweetFire({ type: "error" }))
    }
}

function* LogoutUserAsync({ payload }) {
    try {
        const res = yield call(userLogout, payload)

        if (res.type === "success") {
            yield Swal.fire(sweetFire({ type: "success", text: `Login`, title: "You made It!" }))
            yield put(setAuth({}))
        } else
            yield Swal.fire(sweetFire({ type: "error" }))

    } catch (err) {
        yield Swal.fire(sweetFire({ type: "error" }))
    }
}

function* CallRegisterUser() {
    yield takeLatest(registerUser, RegisterUserAsync)
}

function* CallLoginUser() {
    yield takeLatest(loginUser, LoginUserAsync)
}

function* CallLogoutUser() {
    yield takeLatest(logoutUser, LogoutUserAsync)
}

export const signSaga = [
    fork(CallRegisterUser),
    fork(CallLoginUser),
    fork(CallLogoutUser),
]
