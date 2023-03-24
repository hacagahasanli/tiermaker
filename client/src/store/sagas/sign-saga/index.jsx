import { userRegistration } from "api/index";
import { put, call, fork, takeLatest } from "redux-saga/effects";
import { getRegisterValues, getLoginValues } from "store/slices/sign-slice";


function* RegisterUser({ payload }) {
    try {
        const userValues = payload;
        const response = yield call(userRegistration, userValues)
        console.log(response, "RESPONSE");
    } catch (err) {
        console.log(err);
    }
}

function* CallRegisterUser() {
    yield takeLatest(getRegisterValues, RegisterUser)
}

export const signSaga = [
    fork(CallRegisterUser)
]
