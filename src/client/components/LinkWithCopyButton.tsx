import React from 'react';

interface IProps {
    filePath: string
}

const LinkWithCopyButton = (props: IProps) => {
    const handleClick = async () => {
        await navigator.clipboard.writeText(props.filePath);
    };

    return (
        <div className='copyLink'>
            <input type='text' value={props.filePath} readOnly={true} />
            <button className="copyLinkButton" onClick={handleClick}>
                <p>Copy Link</p>
            </button>
        </div>

    );
};

export default LinkWithCopyButton;