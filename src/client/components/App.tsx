import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const App = () => {
    const accept = 'image/jpeg, image/png';
    const maxFiles = 1;
    const maxSize = 5 * 1024 * 1024;

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);

        //const creatObjectURL = (window.URL || window.webkitURL).createObjectURL;
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept, maxFiles, maxSize, onDrop });

    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <div className="imageContainer">
                <img src="/static/images/image.svg" alt="Drag and Drop your Image here" />
            </div>
            <div className="textContainer">
                {isDragActive ? (
                    <p>Drop the image here</p>
                ) : (
                    <p>Drag &amp; Drop your image here</p>
                )}
            </div>
        </div>
    );
};

export default App;