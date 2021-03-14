import React from 'react';
import Dropzone, { DropzoneState } from 'react-dropzone';

class App extends React.Component {
    onDrop(files: any) {
        console.log(files);
    }

    render() {
        return (
            <Dropzone onDrop={this.onDrop}>
                {this.createDropzone}
            </Dropzone>
        );
    }

    createDropzone({ getRootProps, getInputProps, isDragActive }: DropzoneState) {
        return (
            <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <div className="imageContainer">
                    <img src="/static/images/image.svg" alt="Drag and Drop your Image here" />
                </div>
                <div className="textContainer">
                    {isDragActive ? (
                        <p>Drop the image here</p>
                    ) : (
                        <p>Drag &amp; Drop your image here</p>
                    )}
                </div>
            </div>
        )
    }
}

export default App;