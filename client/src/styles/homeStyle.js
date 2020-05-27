import styled from "styled-components";
// import InfoBlockImg from '..\images\homepagebackground.jpg'

// Font sizes, types and styles;
const H1 = styled.p`
font-size: 45px;
margin:0;
color:${props => props.color || "rgb(233, 233, 232)"};
text-shadow: 2px 2px ${props => props.TSColor || "rgb(98, 98, 98)"};

`
const H1NB = styled.p`
font-size: 24px;
color:${props => props.color || "rgb(233, 233, 232)"};
text-shadow: 1.5px 1.5px rgb(98, 98, 98);
`
const HEp = styled.p`
font-size 20px;
margin:0;
color:${props => props.color || "rgb(233, 233, 232)"};
text-shadow: 1px 1px ${props => props.TSColor || "rgb(98, 98, 98)"};
`

const H2 = styled.p`
font-size: 25px;
margin:0;
color:${props => props.color || "rgb(233, 233, 232)"};
text-shadow: 0.5px 0.5px ${props => props.TSColor || "rgb(98, 98, 98)"};
`
const H3 = styled.p`
font-size: 17px;
margin:0;
color:${props => props.color || "rgb(233, 233, 232)"};
text-shadow: 0.8px 0.8px ${props => props.TSColor || "rgb(98, 98, 98)"};
`
const P = styled.p`
font-size: 18px;
margin:0;
color:${props => props.color || "rgb(233, 233, 232)"};
text-shadow: 0.8px 0.8px ${props => props.TSColor || "rgb(98, 98, 98)"};
`
const PS = styled.p`
font-size: 15px;
margin:0;
color:${props => props.color || "rgb(23, 23, 23)"};
text-shadow: 0.2px 0.2px ${props => props.TSColor || "rgb(98, 98, 98)"};
`
// colored text
const H1B = styled(H1)`
color: rgb(100, 126, 160);
`
const H2B = styled(H2)`
color: rgb(100, 126, 160);
`
const H3B = styled(H3)`
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
const SpHeaderA = styled(Header)`
color: ${props => props.Color ||"rgba(238, 245, 244, 1)"};
background: ${props => props.BGcolor || "linear-gradient(to bottom, rgba(46, 46, 46, 0.877) 0%, rgba(32, 142, 161, 0.577) 100%)"};
text-align: center;
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
background-color: rgb(182, 104, 130, 0.666);
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
const LookBtn = styled.div`
width: 100%;
height: ;
position: absolute;
top: 0;
left: 0;
z-index: 1;
`
const LookTextBox = styled.div`
width: 56px;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 10;
margin-left:93.59%;
margin-right:41px;
box-shadow:inset -46px 0px 23px 0px ${props => props.FdColor ||"rgba(53, 52, 53, 1)"};
@media only screen and (max-width: 1400px) {
    margin-left:93%;
    };
@media only screen and (max-width: 1200px) {
    margin-left:91%;
    };
@media only screen and (max-width: 1010px) {
    margin-left:90%;
    };
@media only screen and (max-width: 860px) {
    margin-left:89%;
    };
@media only screen and (max-width: 800px) {
    margin-left:88%;
    };
@media only screen and (max-width: 780px) {
    margin-left:87.5%;
    };
@media only screen and (max-width: 760px) {
    margin-left:88%;
    };
@media only screen and (max-width: 740px) {
    margin-left:87.5%;
    };
@media only screen and (max-width: 730px) {
    margin-left:87%;
    }
@media only screen and (max-width: 720px) {
    margin-left:86.7%;
    }
@media only screen and (max-width: 710px) {
    margin-left:86.5%;
    }
@media only screen and (max-width: 700px) {
    margin-left:86.2%;
    }
@media only screen and (max-width: 690px) {
    margin-left:85.99%;
    };
@media only screen and (max-width: 600px) {
    margin-left:81.5%;
    box-shadow:none;
    width: 0px;
    }
`
const LookBox = styled.div`
width: 100%;
height: 196.7px;
position: relative;
margin-bottom:23px;
`
const LookHostBox = styled.div`
width: 100%;
height: 223.98px;
position: relative;
margin-bottom:23px;
`

const Btn = styled.button`
border-radius: 90px 90px 90px 90px;
border-color: #9bacb3;
color: rgb(0, 0, 0);
font-size: 18px;
width: auto;
height: auto;
`

const BlueBtn = styled(Btn)`
color: rgb(238, 245, 244);
background-color: rgb(100, 126, 160);

`
const MarronBtn = styled(Btn)`
color: rgb(238, 245, 244);
background-color: #f50057;
font-size: 18px;
`
const BigMarronBtn = styled(MarronBtn)`
height:100px;
font-size: 25px;

`

const TealBtn = styled(Btn)`
color: rgb(238, 245, 244);
background-color: rgb(115, 162, 175);

`
const SpDiv = styled.div`
background: ${props => props.BGcolor ||"rgba(0, 0, 0, 0)"};
width:100%;
height:100%;
`
// Intro Block styles
const IntroBlock = styled.div`
background-image: url(${props => props.bgImg || "https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"});
background-repeat: ${props => props.BGR || "no-repeat"};
background-size:${props => props.BGPsize || "cover"};
background-position-x: ${props => props.BGPy || "center"};
background-position-y: ${props => props.BGPx || "center"};
border-bottom: ${props => props.BDcolor || "rgb(180, 180, 180)"}  solid 2px;
color: ${props => props.color || "rgb(238, 245, 244)"};
font-size: 20px;
height: 600px;
display: flex;
flex-direction: column;
justify-content: center;
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
const DivWPad = styled.div`
margin:40px;
border: ${props => props.BDcolor ||"rgba(180, 180, 180, 0.6)"} solid 2px;
`
// service and coach section styles.

const DivWBorder = styled.div`
border-top: ${props => props.BDcolor ||"rgb(115, 162, 175)"} solid 2px;
margin: ${props => props.Margin ||"5.23px 0px"};
@media only screen and (max-width: 600px) {
    width: 100%;
    }

`
const ProTextBox = styled.div`
display: inline-block
margin-bottom:5px;
border-radius: ${props => props.BorderRadius || "0px"};
border: ${props => props.BDcolor ||"rgba(180, 180, 180, 0.6)"} solid 2px;
background-color: ${props => props.BGcolor || "rgba(23, 23, 23, 0.5)"};
padding:16px;
text-align: center;
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
const BigBlockR = styled.div`
display: flex;
flex-direction: row;
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

export {ProTextBox,DivWPad, IntroBlock,LookBtn,LookTextBox, LookBox,LookHostBox, Btn, MarronBtn, BigMarronBtn, BlueBtn, TealBtn, CCCDiv, FillerDiv, HoldDiv, IntroTxTDiv, SpDiv, DivWBorder, TriServiceBlock, ServiceBlock, ProviderBox, DuoServiceBlock, DuoServiceBlockColumn,TextBox, Image, BigBlock, BigBlockR, HeaderItem, HeaderC, SpHeaderA, BlueHeader, BlueHeaderC, MarronHeader,TealHeader, H1, H1NB, H2, P, PS, H3, H3B, H3M, H3T, H1B, H2B, PB, H1M, H2M, PM, H1T, H2T, PT, PG, HEp}