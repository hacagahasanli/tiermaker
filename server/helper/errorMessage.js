
const Message = (statusCode, type, infos) => {
    try {
        const msg = {
            400: {
                user: `User with username ${infos?.username} already exist`,
                pass: "Password is invalid"
            },
            404: {
                user: `User not found`,
            },
        }
        return msg[statusCode][type]
    }
    catch (err) {
        return "Somethint went wrong on sending error message "
    }
}

export const errorMessage = (res, statusCode, type, infos) => {
    const message = Message(statusCode, type, infos)
    return res.status(statusCode).json({ message });
}