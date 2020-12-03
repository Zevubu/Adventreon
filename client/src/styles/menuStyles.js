import styled from "styled-components";

const BoxWBorder = styled.div`
border: ${props => props.BDcolor ||"rgba(180, 180, 180, 1)"} solid 2px;
margin: ${props => props.Margin ||"0px"};
@media only screen and (max-width: 600px) {
    width: 100%;
    }
`

const MenuHeader = styled.div`
padding:10px 0px;
font-size: 20px;
width:100%;
display:flex;
flex-direction: row;
justify-content: center;
background-color: rgb(180, 56, 130, 0.666);
`
const MenuHeaderSM = styled.div`
padding:5px 0px;
width:100%;
display:flex;
flex-direction: row;
justify-content: center;
`


const MenuBigBox = styled.div`
padding:40px;
border: ${props => props.BDcolor ||"rgba(180, 180, 180, 1)"} solid 2px;
display: grid;
grid-template-columns: auto auto auto;

`


const MenuBox = styled.div`
display:flex;
flex-direction:column;
border-top: ${props => props.BDcolor ||"rgba(180, 180, 180, 1)"} solid 2px;
padding: 16px;
`

export {BoxWBorder,MenuHeader,MenuHeaderSM,MenuBigBox, MenuBox}