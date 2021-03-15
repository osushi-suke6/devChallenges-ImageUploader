import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from './components/Dropzone';
import ChooseAFileButton from './components/ChooseAFileButton';

ReactDOM.render(<Dropzone />, document.getElementById('dropzone'));
ReactDOM.render(<ChooseAFileButton />, document.getElementById('chooseAFileButton'));