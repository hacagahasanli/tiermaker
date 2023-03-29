import { checkFieldCorrectnessRgx } from "utils/regex";

const errorMessage = {
    emptyPass: 'Are u okay ? Set your password!',
    emptyUsername: 'Okay , Set your username!',
    notMatchFields: "Speechless , Passwords did not match !",
    incorrect_short: 'Password must be at least 4 characters long !',
    iccorrect_long: 'Password must be less than 17 !',
    onlyCanBeUsed: 'Only letters, numbers, ., and ? is allowed',
    noCoverPhoto: ""
}

export const authValidate = (values) => {
    const authErrors = {};
    const { password, repeatedPassword, username } = values

    const helperAuth = (fieldValue, fieldName) => {
        !checkFieldCorrectnessRgx(fieldValue)
            ? authErrors[fieldName] = errorMessage.onlyCanBeUsed
            : null
    }

    if (!password)
        authErrors.password = errorMessage.emptyPass;
    else helperAuth(password, "password")

    if (!username)
        authErrors.username = errorMessage.username;
    else helperAuth(username, "username")

    if (repeatedPassword !== undefined && repeatedPassword !== password)
        authErrors.repeatedPassword = errorMessage.notMatchFields

    if (password?.length && password.length < 4)
        authErrors.password = errorMessage.incorrect_short;

    if (password?.length > 17)
        authErrors.password = errorMessage.iccorrect_long

    return authErrors;
};

export const tierListTemplateValidater = (values) => {
    const temaplateErrors = {}
    const {
        templateName,
        selectCategory,
        selectImageOrientation,
        templateDescription,
        coverPhoto,
        tierlistImages,
        imageCreditsUrl
    } = values

    return
}