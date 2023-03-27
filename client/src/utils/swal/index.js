import Swal from "sweetalert2"

export const sweetFire = (text) => {
    Swal.fire({
        icon: 'error',
        title: 'Speechless...',
        text: text ?? 'Something went wrong!',
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 2000
    })
}