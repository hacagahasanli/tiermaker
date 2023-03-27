const errorMessage = {
    emptyPass: 'Are u okay ? Set your password!',
    emptyUsername: 'Okay , Set your username!',
    notMatchFields: "Speechless , Passwords did not match !",
    incorrect_short: 'Password must be at least 4 characters long !',
    iccorrect_long: 'Password must be less than 17 !'
}


export const authValidate = (values) => {
    const errors = {};
    const { password, repeatedPassword, username } = values
    if (!password)
        errors.password = errorMessage.emptyPass;

    if (!username)
        errors.username = errorMessage.username;

    if (repeatedPassword !== undefined && repeatedPassword !== password)
        errors.repeatedPassword = errorMessage.notMatchFields

    if (password?.length && password.length < 4)
        errors.password = errorMessage.incorrect_short;

    if (password?.length > 17)
        errors.password = errorMessage.iccorrect_long

    return errors;
};
