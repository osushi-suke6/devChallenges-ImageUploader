// import axios from 'axios';
import React, { useCallback } from 'react';

interface IProps {
    input: HTMLInputElement
}

const ChooseAFileButton = (props: IProps) => {
    const onClick = useCallback(() => {
        props.input.click();
    }, []);

    return (
        <button className="chooseAFileButton" onClick={onClick}>
            <p>Choose a file</p>
        </button>
    );
};

export default ChooseAFileButton;