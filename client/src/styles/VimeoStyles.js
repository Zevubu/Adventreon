import styled from "styled-components";

const VimeoBox = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const VideoComponent = styled.video`
    display: inline-block;
    width: 80%;
    max-height: 600px;
    box-sizing: border-box;
    vertical-align: middle;
    background-color:black;
`;

const VideoUploaderWrapper = styled.div`
    width: 100%;
    padding: 0.5em 2em;
    text-align: center;
    background-color: #3a3a3a00;
    color: rgba(255, 255, 255, 0.75);
    box-sizing: border-box;
    position: relative;
`;

const DropSection = styled.section`
    width: 200px;
    height: 200px;
    background-color: #3a3a3a;
    border-width: 2px;
    border-color: rgb(102, 102, 1);
    border-style: dashed;
    border-radius: 5px;
    margin: 0 auto;
    position: relative;
    overflow:hidden;
`;
const UplaodingMask = styled.div.attrs({
        className: 'loader-inner ball-pulse'
    })`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 50%;
    background-color: rgba(0, 0, 0, 0.6);
`;
  
const UplaodFailedMessage = styled.div`
    color: red;
    font-size: 20px;
`;
  
const ProgressBarWrapper = styled.div`
    width: 200px;
    margin 10px auto;
`;

const ProgressBar = styled.div`
  width: ${props => {
    if (props.uploadStatus === 'success') {
      return 100;
    } else {
      return props.progress || 3;
    }
  }}%;
  height: 15px;
  border-radius: 10px;
  background-color: green;
  transition: all 0.5s;
`;

export {VimeoBox,VideoComponent,VideoUploaderWrapper, DropSection, UplaodingMask, UplaodFailedMessage,ProgressBarWrapper, ProgressBar}