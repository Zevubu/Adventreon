import styled from "styled-components";
// import InfoBlockImg from '..\images\homepagebackground.jpg'

// Font sizes, types and styles;
const H1 = styled.p`
font-family: 'AthelasBoldItalic';
font-size: 45px;
margin:0;
text-shadow: 2px 2px rgb(98, 98, 98);

`
const H1NB = styled.p`
font-size: 24px;
text-shadow: 1px 1px rgb(98, 98, 98);
font-family: 'Baloo 2', cursive;
`
const HEp = styled.p`
font-size 20px;
margin:0;
text-shadow: 0.5px 0.5px rgb(98, 98, 98);
font-family: 'Baloo 2', cursive;
`

const H2 = styled.p`
font-size: 30px;
margin:0;
text-shadow: 0.5px 0.5px rgb(98, 98, 98);
font-family: 'Baloo 2', cursive;
`
const H3 = styled.p`
font-size: 17px;
margin:0;
text-shadow: 0.4px 0.4px rgb(215, 218, 224);
`
const P = styled.p`
font-size: 18px;
margin:0;
text-shadow: 0.4px 0.5px rgb(23, 25, 27);
`
const PS = styled.p`
font-size: 15px;
margin:0;
text-shadow: 0.2px 0.2px rgb(98, 98, 98);
`
// colored text
const H1B = styled(H1)`
color: rgb(100, 126, 160);
`
const H2B = styled(H2)`
color: rgb(100, 126, 160);
`
const H3B = styled(H3)`
font-family: 'AthelasBold';
color: rgb(100, 126, 160);
`
const PB = styled(P)`
color: rgb(215, 218, 224);
`
const H1M = styled(H1)`
color: rgb(182, 104, 130);
`
const H2M = styled(H2)`
color: rgb(182, 104, 130);
`
const H3M = styled(H3)`
color: rgb(182, 104, 130);
`
const PM = styled(P)`
color: rgb(182, 104, 130);
`
const H1T = styled(H1)`
color: rgb(115, 162, 175);
`
const H2T = styled(H2)`
color: rgb(115, 162, 175);
`
const H3T = styled(H3)`
color: rgb(115, 162, 175);
`
const PT = styled(P)`
color: rgb(115, 162, 175);
`
const PG = styled(P)`
color: rgb(140, 140, 140);
`

// space filler
const FillerDiv = styled.div`
width: 400px;
height: 100px;
margin-left: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin:0 auto;
`
const HoldDiv = styled.div`
background-color: rgb(194, 194, 194);
width: 100px;
height: 140px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:0 auto;
`
// headers
const Header = styled.div`
color: rgb(238, 245, 244);
font-family: 'AthelasBoldItalic';
padding:10px 0px;
font-size: 20px;
width:100%;
display:flex;
flex-direction: row;
justify-content: center;
`
const HeaderC = styled(Header)`
flex-direction: column;
`
const HeaderItem = styled.div`
margin:5px;
`

const BlueHeader = styled(Header)`
color: rgb(238, 245, 244);
background-color: rgb(100, 126, 160, 0.6);
padding:10px 0px;
width:100%;
text-align: center;
`

const BlueHeaderC = styled(BlueHeader)`
flex-direction: column;
`
const MarronHeader = styled(Header)`
color: rgb(238, 245, 244);
background-color: rgb(182, 104, 130, 0.3);
padding:10px 0px;
width:100%;
text-align: center;
`


const TealHeader = styled(Header)`
color: rgb(238, 245, 244);
background-color: rgb(115, 162, 200, 0.3);
padding:10px 0px;
width:100%;
text-align: center;
`
// Buttons
const Btn = styled.button`
border-radius: 10px 10px 90px 90px;
border-color: #9bacb3;
font-family: 'AthelasReg';
color: rgb(0, 0, 0);
font-size: 18px;
width: auto;
`

const BlueBtn = styled(Btn)`
color: rgb(238, 245, 244);
background-color: rgb(100, 126, 160);

`
const MarronBtn = styled(Btn)`
color: rgb(238, 245, 244);
background-color: #f50057;

`
const TealBtn = styled(Btn)`
color: rgb(238, 245, 244);
background-color: rgb(115, 162, 175);

`
// Intro Block styles
const IntroBlock = styled.div`
background-image: url(https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
background-repeat: no-repeat;
background-size: Cover;
background-position-x: center;
background-position-y: center;
border-bottom: rgb(115, 162, 175) solid 2px;
font-family: 'AthelasReg';
color: rgb(238, 245, 244);
font-size: 20px;
height: 600px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-bottom:35px;
`
const IntroTxTDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 50%;
height: 100%;
margin-left: 50px;
margin-bottum: 200px;
`
const CCCDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin:0 auto;
`
// service and coach section styles.

const DivWBorder = styled.div`
border: rgb(180, 180, 180) solid 2px;
margin-bottom:35px;
@media only screen and (max-width: 600px) {
    width: 100%;
    }

`

const ServiceBlock = styled.div`
color: rgb(0, 0, 0);
height: 300px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
background-color: rgba(238, 245, 244, 0.867);
@media only screen and (max-width: 600px) {
    flex-direction column;
    height: 100%;
    }

`
const ProviderBox = styled.div`
color: rgb(0, 0, 0);
display: grid;
grid-template-columns: auto auto auto;
height:auto;
background-color: rgba(238, 245, 244, 0.867);
@media only screen and (max-width: 600px) {
    width: 100%;
    grid-template-columns: none;
       };
`
const TriServiceBlock = styled.div`
height: auto;
width:33%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin:0 auto;
text-align: center;
@media only screen and (max-width: 600px) {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 75%;
    };
`
// ${props => props.bgImg || "https://images.unsplash.com/photo-1583542224916-15a3809d7f0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}
const DuoServiceBlock = styled.div`
background-image: url(${props => props.bgImg || "https://images.unsplash.com/photo-1583542224916-15a3809d7f0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"});
background-repeat: no-repeat;
background-size: Cover;
background-position-x: center;
background-position-y: 20%;
height: auto;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin:0 auto;
@media only screen and (max-width: 600px) {
    width: 100%;
    grid-template-columns: none;
    };
`
const DuoServiceBlockColumn = styled.div`
height: auto;
width:50%;
margin:5px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const BigBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
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
width:200px;
text-align:center;
margin-bottom:10px;
`

export {IntroBlock, Btn, MarronBtn, BlueBtn, TealBtn, CCCDiv, FillerDiv, HoldDiv, IntroTxTDiv, DivWBorder, TriServiceBlock, ServiceBlock, ProviderBox, DuoServiceBlock, DuoServiceBlockColumn,TextBox, Image, BigBlock, HeaderItem, BlueHeader, BlueHeaderC,MarronHeader,TealHeader, H1, H1NB, H2, P, PS, H3, H3B, H3M, H3T, H1B, H2B, PB, H1M, H2M, PM, H1T, H2T, PT, PG, HEp}