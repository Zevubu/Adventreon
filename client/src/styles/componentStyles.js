import styled from "styled-components";

// Nac Bar styles
const NavBody = styled.div`
    font-family: 'AthelasReg';
    background-color: rgba(238, 245, 244, 0.867);
    border-bottom: rgb(115, 162, 175) solid 2px;
    border-top: rgb(115, 162, 175) solid 2px;
    height: 65px;
    margin:0 auto;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const NavBtn = styled.button`
background-color: rgb(238, 245, 244);
border-color: #9bacb3;
border-radius: 10px 90px 90px 90px;
font-family: 'AthelasReg';
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
margin: 10px;
`

// footer Styles
const FooterBody = styled.div`
    font-family: 'AthelasReg';
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
const Logo = styled.h2`
font-family: 'Pacifico', cursive;
font-size: 40px;
`

export {NavBody, NavBtn, NavBtnB, NavBtnM, NavBtnT, FooterBody, OptionBox, Logo}