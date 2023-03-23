import { axiosInstance } from 'api/index'
import React, { useEffect, useState } from 'react'

const Login = () => {
    const [files, setFiles] = useState()

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController()
        const getFiles = async () => {
            try {
                const response = await axiosInstance.get('/get-all-tierlists', {
                    signal: controller.signal
                })
                console.log(response.data);
                isMounted && setFiles(response.data)
            } catch (err) {
                // console.log(err)
            }
        }
        getFiles()

        return () => {
            isMounted = false;
            controller.abort()
        }

    }, [])
    return (
        <div>
            {files?.length > 0 ?
                <ul>
                    {files.map((file, index) => <li key={index}>{file?.coverPhoto}</li>)}
                </ul>
                :
                <p>Cover photo not found</p>
            }
        </div>
    )
}

export default Login