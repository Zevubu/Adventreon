import styled from "styled-components";

const H2 = styled.h2`
font-size: 25px;
font-family:'glacial indiffrence';
color:${props => props.color || "rgb(23, 283, 232)"};
text-shadow: 2px 1px ${props => props.TSColor || "rgb(0,0,0)"};
`
const H6 = styled.p`
font-size: 13px;
font-weight: bold;
font-family:'glacial indiffrence';
margin:0 0;
color: rgb(23, 283, 232);
text-shadow: 1px 1px rgb(26, 24, 24);
`

// Nac Bar styles
const NavBody = styled.div`
    background: linear-gradient(to bottom, rgba(32, 142, 161, 0.999) 5%, rgba(46, 46, 46, 0.999) 100%);
    border-bottom: rgb(115, 162, 175) solid 2px;
    border-top: rgb(115, 162, 175) solid 2px;
    height: 65px;
    margin:0 auto;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position:relative;
    @media only screen and (max-width: 850px) {
        height: 158px;
        flex-direction: column;
        justify-content: center;
        }
`
const BackBtn = styled.button`
background-color: rgba(238, 245, 244, 0);
border-color: rgba(0, 0, 0, 0);
border-radius: 4px;
box-shadow: 0 3px 5px 2px rgba(0, 0, 0, .3);
color: rgb(0,0,0);
height:45px;
font-size: 20px;
`

const NavBtn = styled.button`
background-color: rgb(238, 245, 244);
border-color: #9bacb3;
border-radius: 10px 90px 90px 90px;
color: rgb(0,0,0);
font-size: 18px;
margin-left:5px;
`

const NavBtnB = styled(NavBtn)`
background-color: rgb(100, 126, 160);
color: rgb(238, 245, 244)
`
const NavBtnT = styled(NavBtn)`
background-color: rgb(115, 162, 175);
color: rgb(238, 245, 244)
`
const NavBtnM = styled(NavBtn)`
background-color: rgb(182, 104, 130);
color: rgb(238, 245, 244)
`



const OptionBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;

`
// margin: 10px;@media only screen and (max-width: 600px) {
//     flex-direction: column;
//     }
const PullBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin:0 auto;
`

const SpeachBox = styled.div`
margin:0 5px;
`

// footer Styles
const FooterBody = styled.div`
    background-color: rgb(115, 162, 175);
    width:100%;
    height:100px;
    margin:0 auto;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const LogoImage = styled.img`
width: 85px;
height: auto;
margin:0 auto;
`
const Logo = styled.h2`
font-size: 40px;
@media only screen and (max-width: 600px) {
    font-size: 30px;
    }
`

export {H2, H6,NavBody,BackBtn, NavBtn, NavBtnB, NavBtnM, NavBtnT, FooterBody, OptionBox, PullBox, SpeachBox, Logo, LogoImage}