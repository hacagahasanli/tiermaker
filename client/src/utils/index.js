export const validate = (values) => {
    const errors = {};
    const { password, repeatedPassword, username } = values
    if (!password)
        errors.password = ' Are u okay ? Set your password!';

    if (!username)
        errors.username = 'Okay , Set your username!';

    if (repeatedPassword !== password)
        errors.repeatedPassword = "Speechless , Passwords did not match !"

    if (password.length && password.length < 4)
        errors.password = 'Password must be at least 4 characters long !';

    if (password.length > 17)
        errors.password = 'Password must be less than 17 !'


    return errors;
};