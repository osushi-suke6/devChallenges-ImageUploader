import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from './components/Dropzone';
import ChooseAFileButton from './components/ChooseAFileButton';
import UploadButton from './components/UploadButton';

const ref = React.createRef<HTMLInputElement>();
ReactDOM.render(<Dropzone ref={ref} />, document.getElementById('dropzone'), () => {
    if (!ref.current) return;

    ReactDOM.render(<ChooseAFileButton input={ref.current} />, document.getElementById('chooseAFileButton'));
    ReactDOM.render(<UploadButton input={ref.current} />, document.getElementById('uploadButton'));
});
