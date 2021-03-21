import React, { forwardRef, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DEFAULT_FILE_PATH = '/static/images/image.svg';

const Dropzone = forwardRef<HTMLInputElement, { onInputChange: (files: FileList) => void }>((props, inputRef) => {
    const [image, setImage] = useState(DEFAULT_FILE_PATH);
    const [isDropped, setIsDropped] = useState(false);

    const accept = 'image/jpeg, image/png, image/gif';
    const maxFiles = 1;
    const maxSize = 5 * 1024 * 1024;

    const creatObjectURL = (window.URL || window.webkitURL).createObjectURL;

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles = acceptedFiles as FileList;
        onChange(acceptedFiles);
    }, []);

    const onChange = (files: FileList | null) => {
        if (files) {
            let src = DEFAULT_FILE_PATH;
            src = creatObjectURL(files[0]);

            setImage(src);
            setIsDropped(src !== DEFAULT_FILE_PATH);

            props.onInputChange(files);
        }
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept, maxFiles, maxSize, onDrop });

    return (
        <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} ref={inputRef} onChange={(event) => { onChange(event.target.files) }} />
            <div className="imageContainer">
                <img src={image} alt="Drag and Drop your Image here" className={isDropped ? 'dropped' : ''} />
            </div>
            {isDropped ? (null) : (
                <div className="textContainer">
                    {isDragActive ? (
                        <p>Drop the image here</p>
                    ) : (
                        <p>Drag &amp; Drop your image here</p>
                    )}
                </div>
            )}
        </div>
    );
});

export default Dropzone;