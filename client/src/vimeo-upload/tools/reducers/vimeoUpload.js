import axios from 'axios';
import get from 'lodash/get';
import api from '../../../API/HostLogIn'
// action types
export const POST_VIMEO_START = 'vimeo/POST_VIMEO_START';
export const POST_VIMEO_SUCCESS = 'vimeo/POST_VIMEO_SUCCESS';
export const POST_VIMEO_FAILED = 'vimeo/POST_VIMEO_FAILED';
export const POST_VIMEO_PROGRESS = 'vimeo/POST_VIMEO_PROGRESS';

// initial state
const initialState = {
  vimeoLink: undefined,
  uploading: false,
  uploadStatus: ''
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_VIMEO_START:
      return {
        ...state,
        ...action.payload
      };

    case POST_VIMEO_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case POST_VIMEO_FAILED:
      return {
        ...state,
        ...action.payload
      };

    case POST_VIMEO_PROGRESS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

// actions
export const uploadVimeo = ({ createVideoLink, getVideoLink, ...postBody }) => {
  console.log(`create Video Link 1(VimeoUpload): ${createVideoLink}`)
  console.log(`get Video Link 1(VimeoUpload): ${getVideoLink}`)
  console.log(`Post body 1(VimeoUpload):${JSON.stringify(postBody)}`)
  return async dispatch => {
    const success = async (videoUri, videoData, size, uploadLink, result) => {
      console.log(`Upload Link 2(VimeoUpload): ${uploadLink}`);
      console.log(`Video Uri 2(VimeoUpload): ${videoUri}`);
      console.log(`Video data 2(VimeoUpload): ${JSON.stringify(videoData)}`);
      console.log(`Video size 2(VimeoUpload): ${size}`);
      const apiResult = result.data;
      console.log(`Api Result 2(VimeoUpload):${JSON.stringify(apiResult)}`)
      // check if upload success
      const checkUploadResult = await axios.head(uploadLink, {
        headers: {
          'Tus-Resumable': '1.0.0'
        }
      });
 
      const uploadLength = get(checkUploadResult, ['headers', 'upload-length']);
      const uploadOffset = get(checkUploadResult, ['headers', 'upload-offset']);
      if (uploadLength === uploadOffset) {
        // complete upload
        console.log(`3 (vimeoUpload): uploadLength:${uploadLength}, uploadOffset${uploadOffset}`)
        const getVideoExternalLInk = await axios.get(
          `${getVideoLink}${videoUri}`
        );
        dispatch({
          type: POST_VIMEO_SUCCESS,
          payload: {
            vimeoLink: getVideoExternalLInk.data.data,
            uploading: false,
            uploadStatus: 'success'
          }
        });
        return apiResult;
      } else {
        // upload failed, resume upload?
        console.log('should resume upload(VimeoUpload)');
        return patchVimeoFunc(
          videoUri,
          uploadLink,
          videoData,
          size,
          uploadOffset
        );
      }
    };
    const failed = () => {
      dispatch({
        type: POST_VIMEO_FAILED,
        payload: {
          uploading: false,
          uploadStatus: 'failed'
        }
      });
      return null;
    };

    const patchVimeoFunc = async (
      videoUri,
      uploadLink,
      videoData,
      size,
      uploadOffset
    ) => { 
      console.log(`patch Uri 4 (vimeoUpload): ${videoUri}`)
      console.log(`patch videoData 4 (vimeoUpload): ${JSON.stringify(videoData)}`)
      console.log(`patch uploadLink 4 (vimeoUpload): ${uploadLink}`)
     
      const result = await axios.patch(uploadLink, videoData, {
        headers: {
          'Tus-Resumable': '1.0.0',
          'Upload-Offset': uploadOffset || '0',
          'Content-Type': 'application/offset+octet-stream'
        },
        onUploadProgress: function(progressEvent) {
          console.log(`Patch progress Event 4 (vimeoUpload): ${JSON.stringify(ProgressEvent)}`)
          const total = progressEvent.total || size;
          console.log(`Patch total 4 (vimeoUpload): ${total}`)
          const loaded = progressEvent.loaded || 0;
          const progress = loaded / total * 100;
          dispatch({
            type: POST_VIMEO_PROGRESS,
            payload: {
              uploading: true,
              progress: progress >= 100 ? 90 : progress
            }
          });
        }
      });
      return success(videoUri, videoData, size, uploadLink, result);
    };

    try {
      dispatch({
        type: POST_VIMEO_START,
        payload: {
          uploading: true
        }
      });
      const { videoData, size } = postBody;
      console.log(`1 Post body dispatch (VimeoUpload):${JSON.stringify(postBody)}`)

      // get upload link
      const createVideoAPIResult = await api.videoUpload({
        upload: {
          approach: 'tus',
          size: size
        }
      });
      // const createVideoAPIResult = await axios.post(createVideoLink, {
      //   upload: {
      //     approach: 'tus',
      //     size: size
      //   }
      // });
      const createVideoResult = createVideoAPIResult.data;
      console.log(`1createVideoResult: ${JSON.stringify(createVideoResult)}`);
      if (createVideoResult.status !== 'success') {
        return failed();
      }
      const uploadLink = createVideoResult.uploadLink;
      console.log(`uploadLink 1: ${uploadLink}`)
      const videoUri = createVideoResult.videoUri;
      console.log(`videoUri 1:${videoUri}`)

      // start to upload
      return patchVimeoFunc(videoUri, uploadLink, videoData, size);
    } catch (err) {
      console.log(`post vimeo err (VimeoUpload): ${err}`);
      return failed();
    }
  };
};
