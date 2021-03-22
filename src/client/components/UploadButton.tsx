import axios from 'axios';
import React from 'react';

interface IProps {
    file: File | null,
    onClick: () => void,
    onSuccess: (filePath: string) => void,
    onFailure: () => void
}

const UploadButton = (props: IProps) => {
    const onClick = () => {
        const formData = new FormData();

        console.log(props.file);
        if (!props.file) return;

        props.onClick();

        formData.append('file', props.file);
        axios.post('/api/images', formData)
            .then(res => {
                if (res.status === 201) {
                    props.onSuccess(res.data);
                } else {
                    props.onFailure();
                }
            })
            .catch(error => {
                console.log(error);
                props.onFailure();
            });
    };

    return (
        <button className="uploadButton" onClick={onClick} disabled={!props.file}>
            <p>Upload</p>
        </button>
    );
};

export default UploadButton;