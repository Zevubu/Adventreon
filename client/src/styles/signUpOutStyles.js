import styled from "styled-components";


const FormBigBox = styled.form`
display: flex;
flex-direction: column;
align-items: center;
background-color: rgb(250, 250, 250);
`
const FormLittleBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 15px 0px;
width:50%;
`

const FormBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
margin: 15px;
`
const FormBoxWError = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
margin: 15px;
`
const Input = styled.input`
padding: 5px;
border: 1px solid #999;
margin-bottom: 1rem;
font-size: 0.8rem;
`
const TextArea = styled.textarea`

`
const PE = styled.p`
color:red;
`
const Btn = styled.button`
color: ${props => props.textColor || "rgb(0, 0, 0)"};
background-color:${props => props.backgroundColor || "rgb(238, 245, 244)"}; 
border-color: #9bacb3;
padding:10px;
font-size: 20px;
width: auto;
`
const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border-color: #3f4eae;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Logo = styled.img`
  width: 50%;
  margin-bottom: 1rem;
`;

const Error = styled.div`
  background-color: red;
`;


export {FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE, Form, Button, Logo, Card, Error }