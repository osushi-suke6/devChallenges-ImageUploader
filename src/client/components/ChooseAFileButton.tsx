// import axios from 'axios';
import React, { useCallback } from 'react';

const ChooseAFileButton = () => {
    const onClick = useCallback(() => {
        const input = document.getElementsByTagName('input')[0];
        input.click();
    }, []);

    return (
        <button className="chooseAFileButton" onClick={onClick}>
            <p>Choose a file</p>
        </button>
    );
};

export default ChooseAFileButton;