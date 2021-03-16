import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
class FileUploadButton extends Component {
  handleFileUpload = event => {
    // console.log(event.target.files[0].name);
    console.log(`Selected file - ${event.target.files[0].name}`);
  };

  render() {
    return (
      <React.Fragment>
        <input
          ref="fileInput"
          onChange={this.handleFileUpload}
          type="file"
          style={{ display: "none" }}
          // multiple={false}
        />
        <h1>Upload file </h1>
        <button onClick={() => this.refs.fileInput.click()}>Upload File</button>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FileUploadButton />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
