import axios from 'axios';
import React from 'react';

interface IProps {
    file: File | null
}

const UploadButton = (props: IProps) => {
    const onClick = () => {
        const formData = new FormData();

        console.log(props.file);
        if (!props.file) return;

        formData.append('file', props.file);
        axios.post('/api/images', formData)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <button className="uploadButton" onClick={onClick} disabled={!props.file}>
            <p>Upload</p>
        </button>
    );
};

export default UploadButton;