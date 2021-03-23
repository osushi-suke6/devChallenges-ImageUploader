import React, { useEffect, useRef, useState } from 'react';
import Dropzone from './Dropzone';
import ChooseAFileButton from './ChooseAFileButton';
import UploadButton from './UploadButton';
import LinkWithCopyButton from './LinkWithCopyButton';

const UploadForm = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [input, setInput] = useState<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadedFilePath, setUploadedFilePath] = useState('');
    const [isFailure, setIsFailure] = useState(false);

    const onChangeInput = (files: FileList) => {
        setFile(files[0]);
    };

    const onClickUploadButton = () => {
        setIsUploading(true);
    }

    const onSuccessUpload = (filePath: string) => {
        setUploadedFilePath(filePath);
        setIsUploading(false);
    }

    const onFailureUpload = () => {
        setIsFailure(true);
        setIsUploading(false);
    }

    useEffect(() => {
        setInput(inputRef.current);
    }, [inputRef]);

    return (
        <div className='uploadForm' >
            {isUploading ? (
                <div className='uploadingText'>
                    <p>Uploading...</p>
                    <img src='/static/images/uploading.gif' alt='uploading animation' />
                </div>
            ) : uploadedFilePath !== '' ? (
                <div>
                    <div className='containerHeader'>
                        <h1>Uploaded Successfully!</h1>
                    </div >
                    <div className='containerBody'>
                        <div className="uploadedImageContainer">
                            <img src={uploadedFilePath} alt="Uploaded image" className='uploaded' />
                        </div>
                    </div>
                    <div className='containerFooter'>
                        <LinkWithCopyButton filePath={uploadedFilePath} />
                    </div>
                </div>
            ) : (
                <div>
                    <div className='containerHeader'>
                        {isFailure ? (<h1>Faild to upload</h1>) : (<h1>Upload your image</h1>)}
                        <p>File should be Jpeg, Png, ...</p>
                    </div >
                    <div className='containerBody drop'>
                        <Dropzone ref={inputRef} onChangeInput={onChangeInput}></Dropzone>
                    </div>
                    <div className='containerFooter'>
                        <p>Or</p>
                        <div>
                            <ChooseAFileButton input={input} />
                        </div>
                        <div>
                            <UploadButton file={file} onClick={onClickUploadButton} onSuccess={onSuccessUpload} onFailure={onFailureUpload} />
                        </div>
                    </div>
                </div >
            )
            }
        </div >
    );
};

export default UploadForm;