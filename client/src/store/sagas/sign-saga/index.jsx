import { userRegistration, userLogin } from "api/index";
import { put, call, fork, takeLatest } from "redux-saga/effects";
import { setLoading } from "store/slices/loading";
import { registerUser, loginUser, setAuth, setIsUserRegistered } from "store/slices/sign";
import { sweetFire } from "utils/swal";
import Swal from "sweetalert2";

function* RegisterUserAsync({ payload }) {
    try {
        const userValues = payload;
        yield call(userRegistration, userValues)
        yield put(setIsUserRegistered(true))
    } catch (err) {
        yield Swal.fire(sweetFire({ type: "error", text: `User with username ${payload?.username} has already exist` }))
    }
}

function* LoginUserAsync({ payload }) {
    try {
        const userValues = payload
        yield put(setLoading(true))
        const token = yield call(userLogin, userValues)
        yield put(setAuth(token))
        yield put(setLoading(false))
    } catch (err) {
        yield put(setLoading(false))
        yield Swal.fire(sweetFire({ type: "error" }))
    }
}

function* CallRegisterUser() {
    yield takeLatest(registerUser, RegisterUserAsync)
}

function* CallLoginUser() {
    yield takeLatest(loginUser, LoginUserAsync)
}

export const signSaga = [
    fork(CallRegisterUser),
    fork(CallLoginUser),
]
