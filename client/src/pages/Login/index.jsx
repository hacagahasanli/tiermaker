import { axiosInstance } from 'api/index'
import React, { useEffect, useState } from 'react'

const Login = () => {
    const [files, setFiles] = useState()

    return (
        <div>

        </div>
    )
}

export default Login



    // useEffect(() => {
    //     let isMounted = true;
    //     const controller = new AbortController()
    //     const getFiles = async () => {
    //         try {
    //             const response = await axiosInstance.get('/get-all-tierlists', {
    //                 signal: controller.signal
    //             })
    //             console.log(response.data);
    //             isMounted && setFiles(response.data)
    //         } catch (err) {
    //             // console.log(err)
    //         }
    //     }
    //     getFiles()

    //     return () => {
    //         isMounted = false;
    //         controller.abort()
    //     }

    // }, [])