import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = () => {
    const [image, setImage] = useState('/static/images/image.svg');
    const [isDropped, setIsDropped] = useState(false);

    const accept = 'image/jpeg, image/png';
    const maxFiles = 1;
    const maxSize = 5 * 1024 * 1024;

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);

        const creatObjectURL = (window.URL || window.webkitURL).createObjectURL;

        let src = '/static/images/image.svg';
        if (acceptedFiles.length > 0) {
            src = creatObjectURL(acceptedFiles[0]);
        }

        setImage(src);
        setIsDropped(src !== '/static/images/image.svg');
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept, maxFiles, maxSize, onDrop });

    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
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
};

export default Dropzone;