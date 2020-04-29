import styled from "styled-components";

const ProBigBox = styled.div`
background-image: url(${props => props.bgImg || "https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"});
background-repeat: ${props => props.BGR || "no-repeat"};
background-size:${props => props.BGPsize || "cover"};
background-position-x: ${props => props.BGPy || "center"};
background-position-y: ${props => props.BGPx || "center"};
`


const Slider = styled.div`
position: relative;
height: 100vh;
width: 100vw;
margin: 0 auto;
overflow: hidden;
`

const SliderContent = styled.div`
transform: translateX(-${props => props.translate}px);
transition: transform ease-out ${props => props.transition}s;
height: 100%;
width: ${props => props.width}px;
display: flex;
`

const Slide = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${props => props.bgImg || "https://images.unsplash.com/photo-1583542224916-15a3809d7f0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5%;
`

const ShowSlide = styled.div`
    height: 169.5px;
    width: 100%;
    background-image: url(${props => props.bgImg || "https://images.unsplash.com/photo-1583542224916-15a3809d7f0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5%;
    
`
// background-image: url(${props => props.bgImg || "https://images.unsplash.com/photo-1583542224916-15a3809d7f0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"});
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center;
const SlideBuffer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

// backgound-color:238, 245, 244;
const DuoServiceBlock = styled.div`
height: 100;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
@media only screen and (max-width: 600px) {
    flex-dierction: column;
    };
`
// backgound-color:238, 245, 244;
const DuoServiceBlockColumn = styled.div`
height: auto;
width:50%;
margin:20px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const DuoServiceBlockRow = styled.div`
height: auto;
width:50%;
margin:5px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`
const Image = styled.img`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:0 auto;
`
const TextBox = styled.div`
width:100%;
height:100%;
text-align:center;
`
// profile styles background-color: rgba(209, 202, 179, 0.767);

const ProviderBox = styled.div`
color: rgb(0, 0, 0);
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
height:auto;
margin:0%;
@media only screen and (max-width: 600px) {
    width: 100%;
    grid-template-columns: none;
    align-items: center;
    };
`
const ShowBox = styled.div`
color: rgb(0, 0, 0);
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto auto;
height:auto;
margin-bottom: 100px;
@media only screen and (max-width: 600px) {
    width: 100%;
    grid-template-columns: none;
    align-items: center;
    };

`
const ProDuoServiceBlock = styled.div`
height: auto;
width: auto;
margin: 20px 20px 20px 0px;
backgound-color:238, 245, 2440.767);
display: flex;
flex-direction: row;
justify-content: space-evently;
align-items: center;
@media only screen and (max-width: 600px) {
    width: 75%;
    flex-direction: column;
    };
`

const ProDuoServiceBlockB = styled.div`
height: auto;
width: auto;
margin:20px;
backgound-color:238, 245, 2440.767);
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width: 600px) {
    width: 75%;
    flex-direction: column;
    };
`

const ProDuoServiceBlockColumn = styled.div`
height: auto;
width:50%;
margin: 20px;
grid-template-columns: auto auto;
grid-template-rows: auto;
align-items: center;
@media only screen and (max-width: 600px) {
    align-items: center;
    margin: auto;
    width: 75%;
    };

`

const ProDuoServiceBlockColumnB = styled.div`
height: 250px;
width: 50%;
margin: 30px;
grid-template-columns: auto auto;
grid-template-rows: auto;
align-items: center;
@media only screen and (max-width: 600px) {
    align-items: center;
    margin: auto;
    width: 75%;
    };

`
const AppBox = styled.div`
height: auto;
width: auto;
margin:20px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`
// const AppBlock = styled.div`
// height: auto;
// width: auto;
// margin:20px;
// backgound-color:238, 245, 2440.767);
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// `
const ProTextBox = styled.div`
display: inline-block
margin-bottom:5px;
border-radius: ${props => props.BorderRadius || "0px"};
border: ${props => props.BDcolor ||"rgba(180, 180, 180, 0.6)"} solid 2px;
background-color: ${props => props.BGcolor || "rgba(23, 23, 23, 0.5)"};
padding:16px;
`
const ProTextBoxN = styled(ProTextBox)`
display: inline-block;
height: auto;
background-color: rgb(115, 162, 175);
margin:5px;
opacity: 0.8;
`
const ProImage = styled(Image)`
width: 100%;
height: auto;
@media only screen and (max-width: 600px) {
    width: 75%;
    margin-bottom: 20px;
    };
`

export { ProBigBox, ProviderBox,ProDuoServiceBlockB, ProDuoServiceBlockColumnB, ShowBox,AppBox, Slider, SliderContent, Slide,ShowSlide, SlideBuffer, ProDuoServiceBlock, DuoServiceBlockRow, ProDuoServiceBlockColumn, DuoServiceBlock, DuoServiceBlockColumn, Image, ProImage, TextBox, ProTextBox, ProTextBoxN}