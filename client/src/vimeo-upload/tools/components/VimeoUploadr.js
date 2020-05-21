import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import {VideoUploaderWrapper, DropSection, UplaodingMask, UplaodFailedMessage, ProgressBarWrapper, ProgressBar} from '../../../styles/VimeoStyles'
import { uploadVimeo } from '../reducers/vimeoUpload';
import 'loaders.css/loaders.min.css';

class VideoUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: [],
      rejected: []
    };
  }

  onDrop = (accepted, rejected) => {
    // retreive props from app.js
    const { createVideoLink, getVideoLink } = this.props;
    console.log(`Create Video Props(VimeoUploadr): ${JSON.stringify(this.props)}`);
    console.log(`Create Video Link(VimeoUploadr): ${createVideoLink}`);
    console.log(`Get Video Link (VimeoUploadr): ${getVideoLink}`);
    console.log(`Rejected (VimeoUploadr): ${rejected}`);

    // convert to Base64
   
    this.setState({
      accepted
    });
    // console.log(`Accepted (VimeoUploadr): ${JSON.stringify(accepted) }`);
    const file = accepted.find(f => f);
    //  var acc= accepted[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log(`Event target result (VimeoUploadr):${event.target.result}`);
    };
    const BFile = reader.readAsDataURL(file);

    console.log(`file(VimeoUploadr): ${JSON.stringify(file)}`);
    console.log(`file size(VimeoUploadr): ${JSON.stringify(file.size) }`);
    console.log(`video data(VimeoUploadr): ${JSON.stringify(file.videoData) }`);
    this.props.uploadVimeo({
      createVideoLink,
      getVideoLink,
      videoData: BFile,
      size: file.size
    });
  };

  render() {
    const {
      VideoUploaderWrapperStyle,
      CustomDropzoneStyle,
      uploading,
      uploadStatus,
      progress
    } = this.props;
    const uploadSuccess = uploadStatus === 'success';
    const uploadFailed = uploadStatus === 'failed';
    return (
      <VideoUploaderWrapper
        className="VideoUploaderWrapper"
        style={VideoUploaderWrapperStyle}
      >
        {uploadFailed && (
          <UplaodFailedMessage>Upload Failed.</UplaodFailedMessage>
        )}
        <Dropzone
          style={{
            ...CustomDropzoneStyle
          }}
          multiple={false}
          accept="video/mp4"
          onDrop={this.onDrop}
          disabled={uploading}
        >
          {/* <p>
            Try dropping some files here, or click to select files to upload.
          </p>
          {uploading && (
            <UplaodingMask>
              <div />
              <div />
              <div />
            </UplaodingMask>
          )} */}
          {({getRootProps, getInputProps}) => (
            <section>
              <DropSection {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </DropSection>
              {uploading && (
                  <UplaodingMask>
                  <div />
                  <div />
                  <div />
                  </UplaodingMask>
              )}
            </section>
          )}
        </Dropzone>
        {(uploading || uploadSuccess) && (
          <ProgressBarWrapper>
            <ProgressBar progress={progress} uploadStatus={uploadStatus} />
          </ProgressBarWrapper>
        )}
      </VideoUploaderWrapper>
    );
  }
}

const mapStateToProps = state => ({
  uploading: state.vimeoUpload.uploading,
  uploadStatus: state.vimeoUpload.uploadStatus,
  progress: state.vimeoUpload.progress
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      uploadVimeo
    },
    dispatch
  );
VideoUploader = connect(mapStateToProps, mapDispatchToProps)(VideoUploader);

export default VideoUploader;
