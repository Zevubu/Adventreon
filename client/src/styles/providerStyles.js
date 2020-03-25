import styled from "styled-components";

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
    justify-content: space-around;
    align-items: center;
    
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
justify-content: space-around;
align-items: center;
margin: 5%;
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
margin:5px;
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
text-align:cente

`
// profile styles background-color: rgba(209, 202, 179, 0.767);

const ProviderBox = styled.div`
color: rgb(0, 0, 0);
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto auto;
height:auto;
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
margin:20px;
backgound-color:238, 245, 2440.767);
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
@media only screen and (max-width: 600px) {
    width: 75%;
    };
`
const ProDuoServiceBlockColumn = styled.div`
height: auto;
width:50%;
margin:20px;
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
border-radius: 5px 50px 50px 50px;
background-color: rgba(209, 202, 179, 0.767);
padding:16px;
opacity: 0.6;
font-family: 'Baloo 2', cursive;
`
const ProTextBoxN = styled(ProTextBox)`
display: inline-block;
height: auto;
background-color: rgb(115, 162, 175);
margin:5px;
opacity: 0.8;
font-family: 'Baloo 2', cursive;
`
const ProImage = styled(Image)`
width: 60%;
height: auto;
@media only screen and (max-width: 600px) {
    width: 75%;
    margin-bottom: 20px;
    };
`

export {ProviderBox, ShowBox,AppBox, Slider, SliderContent, Slide, SlideBuffer, ProDuoServiceBlock, DuoServiceBlockRow, ProDuoServiceBlockColumn, DuoServiceBlock, DuoServiceBlockColumn, Image, ProImage, TextBox, ProTextBox, ProTextBoxN}