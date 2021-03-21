import React, { useEffect, useRef, useState } from 'react';
import Dropzone from './Dropzone';
import ChooseAFileButton from './ChooseAFileButton';
import UploadButton from './UploadButton';

const UploadForm = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [input, setInput] = useState<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const onInputChange = (files: FileList) => {
        setFile(files[0]);
    };

    useEffect(() => {
        setInput(inputRef.current);
    }, [inputRef]);

    return (
        <div className='uploadForm'>
            <div className='containerHeader'>
                <h1>Upload your image</h1>
                <p>File should be Jpeg, Png, ...</p>
            </div>
            <div className='containerBody'>
                <Dropzone ref={inputRef} onInputChange={onInputChange}></Dropzone>
            </div>
            <div className='containerFooter'>
                <p>Or</p>
            </div>
            <div>
                <ChooseAFileButton input={input} />
            </div>
            <div>
                <UploadButton file={file} />
            </div>
        </div >
    );
};

export default UploadForm;