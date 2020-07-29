import styled, {createGlobalStyle} from "styled-components";
// background-image: url(https://images.unsplash.com/photo-1528481711262-175bb7079126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);
// background-repeat: repeat-x;
// background-size: cover;
// background-position-x: center;
// background-position-y: 20%;
//  font-family: 'AthelasReg';
// background-color: rgb(53, 52, 53);background-color: rgb(43, 42, 42);
// linear-gradient(to bottom, rgba(226, 126, 168, 1) 5%, rgba(46, 46, 46, 0.877) 55%, rgba(32, 142, 161, 0.577) 100%)
// rgb(206,198,205)
const GlobalStyle = createGlobalStyle`

body{
    font-family: 'Oswald', sans-serif;
    background-color: rgb(227,218,226);
    width:100%;
    height:100%;
    margin:auto;
    padding:auto;
    align-items:center;
  }
`
// Athelas Regular
// Athelas Bold
// Athelas Bold italic

const BigistBox = styled.div`
width:100%;
height:100%;
margin:0 auto;
padding:0 auto;
background-color:rgb(238, 245, 244);
`
export {BigistBox, GlobalStyle}