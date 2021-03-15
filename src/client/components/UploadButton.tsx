//import axios from 'axios';
import React, { useCallback } from 'react';

interface IProps {
    input: HTMLInputElement
}

const UploadButton = (props: IProps) => {
    const onClick = useCallback(() => {
        console.log('clicked');
        console.log(props.input.value);
        //axios.post('/api/images')
    }, []);

    return (
        <button className="uploadButton" onClick={onClick}>
            <p>Upload</p>
        </button>
    );
};

export default UploadButton;