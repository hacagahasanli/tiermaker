
const Message = (statusCode, type, infos) => {
    try {
        const msg = {
            200: {
                user: "User was created succesfully"
            },
            400: {
                user: `User with username ${infos?.username} already exist`,
                pass: "Password is invalid"
            },
            401: {
                serv: "Empty token value!"
            },
            403: {
                user: `Unauthorized user`
            },
            404: {
                user: `User not found`,
            },
            405: {
                serv: "Method not allowed!"
            },
            500: {
                serv: "Server Error"
            }

        }
        return msg[statusCode][type]
    }
    catch (err) {
        return "Somethint went wrong on sending response message "
    }
}

export const response = (res, statusCode, type = "user", infos) => {
    const message = infos?.message ? infos?.message : Message(statusCode, type, infos)
    return res.status(statusCode).json({ message });
}