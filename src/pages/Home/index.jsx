import React, { useState } from 'react'
import styled from 'styled-components';

const Home = () => {
    const [files, setFiles] = useState([]);
    const [imagePreviewUrls, setImagePreviewUrls] = useState([]);

    const handleFileInputChange = (event) => {
        console.log(event.target.files, "EVENT TARGET FILES")
        const selectedFiles = [...event.target.files];
        setFiles((prev) => [...prev, ...selectedFiles]);
        Promise.all(
            selectedFiles.map((file) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                return new Promise((resolve, reject) => {
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = reject;
                });
            })
        ).then((results) => setImagePreviewUrls([...imagePreviewUrls, ...results]));
    };

    return (
        <Wrapper>
            <Upload>
                <label htmlFor="img">Upload Image</label>
                <input id="img" type="file" multiple accept="image/*" onChange={handleFileInputChange} />
            </Upload>
            <ImageWrapper>
                {files.length > 0 &&
                    files.map((file, index) => (
                        <div key={index}>
                            <img src={imagePreviewUrls[index]} alt="File preview" />
                        </div>
                    ))}
            </ImageWrapper>
        </Wrapper>
    )
}

const Upload = styled.div`
    position: absolute;
    top: 2rem;

    label{
        color: #000000;
        background-color: #ffffff;
        padding: 0.6rem 1rem;
        font-size: 1.2rem;
        border-radius:3px;
        cursor: pointer;
        transition: opacity 0.4s;
        :hover{
            opacity: 0.7;
        }
        
    }

    input{
        display: none;
    }
`

const ImageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    place-items: center;
    gap:2rem;
    margin-top: 8rem;

    div{
        border: 2px solid #c1c1c1;
        img{
            width: 150px;
            height:150px;
            object-fit: cover;
        }
    }   
`

const Wrapper = styled.div`
    position: relative;
    max-width: 1180px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
export default Home;