import React from 'react';

interface IProps {
    input: HTMLInputElement | null,
}

const ChooseAFileButton = (props: IProps) => {
    const handleClick = () => {
        props.input?.click();
    };

    return (
        <button className="chooseAFileButton" onClick={handleClick}>
            <p>Choose a file</p>
        </button>
    );
};

export default ChooseAFileButton;