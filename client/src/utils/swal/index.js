export const sweetFire = ({ text, time, type, title }) => {
    const sweetPopups = {
        error: {
            icon: 'error',
            title: 'Speechless...',
            text: text ?? 'Something went wrong!',
            showConfirmButton: false,
            allowOutsideClick: false,
            timer: time ?? 2000
        },
        success: {
            icon: 'success',
            title: `${title ?? "You are a professor!"}`,
            text: `redirecting to ${text ?? "prev page"}`,
            showConfirmButton: false,
            allowOutsideClick: false,
            timer: time ?? 1500,
        }
    }

    return sweetPopups[type]
}