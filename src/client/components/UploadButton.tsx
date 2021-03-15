import axios from 'axios';
import React, { useCallback } from 'react';

interface IProps {
    input: HTMLInputElement
}

const UploadButton = (props: IProps) => {
    const onClick = useCallback(() => {
        const formData = new FormData();

        if (!props.input.files) return;

        formData.append('file', props.input.files[0]);
        axios.post('/api/images', formData)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <button className="uploadButton" onClick={onClick}>
            <p>Upload</p>
        </button>
    );
};

export default UploadButton;