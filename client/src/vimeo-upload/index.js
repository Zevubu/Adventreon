import React, {useState} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import VimeoUploadr from './tools/index';
import {VideoComponent, VimeoBox} from '../styles/VimeoStyles';
import {VimeoLinkContext, UploadStatusContext} from './tools/context';

function VimeoUp() {
    const [vimeoLink, setVimeoLink] = useState();
    const [uploadStatus, setUploadStatus] = useState();
    const uploadSuccess = uploadStatus === 'success';
    
    const setVLink = (data) => {
        setVimeoLink(data);
    };

    const setUpStats = data => {
        setUploadStatus(data);
    };

    return (
    <UploadStatusContext.Provider value={{uploadStatus, setUploadStatus: setUpStats }}>
        <VimeoLinkContext.Provider value={{vimeoLink, setVimeoLink:setVLink }}>
            <Provider store={store}>
                <VimeoBox>
                    <VimeoUploadr
                        createVideoLink="http://localhost:3000/video/vimeo"
                        getVideoLink="http://localhost:3000/video/vimeo"
                    />
                    {/* <VideoComponent src={vimeoLink} controls /> */}
                    {uploadSuccess && <VideoComponent src={vimeoLink} controls />}
                </VimeoBox>
            </Provider> 
        </VimeoLinkContext.Provider>
    </UploadStatusContext.Provider>

    );
}

// const mapStateToProps = state => ({
//   vimeoLink: state.vimeoUpload.vimeoLink,
//   uploadStatus: state.vimeoUpload.uploadStatus,
// });

// VimeoUp = connect(
//   mapStateToProps,
//   null
// )(VimeoUp);


export default VimeoUp;