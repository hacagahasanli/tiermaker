import { userRegistration, userLogin } from "api/index";
import { put, call, fork, takeLatest } from "redux-saga/effects";
import { registerUser, loginUser, setAuth, setHideForm } from "store/slices/sign-slice";
import Swal from 'sweetalert2'

const sweetFire = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
    })
}

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
        // console.log(err); 
        sweetFire()
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
