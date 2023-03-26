import { userRegistration, userLogin } from "api/index";
import { put, call, fork, takeLatest } from "redux-saga/effects";
import { registerUser, loginUser, setAuth, setHideForm, setIsUserRegistered } from "store/slices/sign-slice";
import Swal from 'sweetalert2'

const sweetFire = (text) => {
    Swal.fire({
        icon: 'error',
        title: 'Speechless...',
        text: text ?? 'Something went wrong!',
        showConfirmButton: false,
        timer: 2000
    })
}

function* RegisterUserAsync({ payload }) {
    try {
        const userValues = payload;
        yield call(userRegistration, userValues)
        yield put(setIsUserRegistered(true))
    } catch (err) {
        yield sweetFire(`User with username ${payload?.username} has already exist`)
        yield put(setHideForm(true))
    }
}

function* LoginUserAsync({ payload }) {
    try {
        const userValues = payload
        const token = yield call(userLogin, userValues)
        yield put(setAuth(token))
    } catch (err) {
        yield sweetFire()
        yield put(setHideForm(true))
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
