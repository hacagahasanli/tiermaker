import { userRegistration, userLogin } from "api/index";
import { put, call, fork, takeLatest } from "redux-saga/effects";
import { registerUser, loginUser, setAuth, setIsUserRegistered } from "store/slices/sign-slice";
import { sweetFire } from "utils/swal";

function* RegisterUserAsync({ payload }) {
    try {
        const userValues = payload;
        yield call(userRegistration, userValues)
        yield put(setIsUserRegistered(true))
    } catch (err) {
        yield sweetFire(`User with username ${payload?.username} has already exist`)
    }
}

function* LoginUserAsync({ payload }) {
    try {
        const userValues = payload
        const token = yield call(userLogin, userValues)
        yield put(setAuth(token))
    } catch (err) {
        yield sweetFire()
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
