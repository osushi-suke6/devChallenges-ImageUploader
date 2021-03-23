import React from 'react';

interface IProps {
    filePath: string
}

const LinkWithCopyButton = (props: IProps) => {
    const filePath = props.filePath.replace(/\\/g, '/');
    const url = `${location.protocol}//${location.host}${filePath}`;

    const handleClick = async () => {
        await navigator.clipboard.writeText(url);
    };

    return (
        <div className='copyLink'>
            <input type='text' value={url} readOnly={true} />
            <button className="copyLinkButton" onClick={handleClick}>
                <p>Copy Link</p>
            </button>
        </div>

    );
};

export default LinkWithCopyButton;