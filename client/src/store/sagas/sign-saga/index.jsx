import { userRegistration, userLogin } from "api/index";
import { put, call, fork, takeLatest } from "redux-saga/effects";
import { registerUser, loginUser, setAuth } from "store/slices/sign-slice";


function* RegisterUserAsync({ payload }) {
    try {
        const userValues = payload;
        yield call(userRegistration, userValues)
    } catch (err) {
        console.log(err);
    }
}

function* LoginUserAsync({ payload }) {
    try {
        const userValues = payload
        const token = yield call(userLogin, userValues)
        yield put(setAuth(token))
    } catch (err) {
        console.log(err);
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
