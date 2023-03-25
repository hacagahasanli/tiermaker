import { userRegistration } from "api/index";
import { put, call, fork, takeLatest } from "redux-saga/effects";
import { registerUser, loginUser } from "store/slices/sign-slice";


function* RegisterUser({ payload }) {
    try {
        const userValues = payload;
        yield call(userRegistration, userValues)
    } catch (err) {
        console.log(err);
    }
}

function* CallRegisterUser() {
    yield takeLatest(registerUser, RegisterUser)
}

export const signSaga = [
    fork(CallRegisterUser)
]
