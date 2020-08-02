import React,{useState} from "react";
import {DivWBorder, MarronHeader, H2, H1, PT} from "../styles/homeStyle"
import {FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, PE} from "../styles/signUpOutStyles"
import API from "../API/loggedOutAPI";
import {useForm} from 'react-hook-form';
import { result } from "lodash";
// import OktaAuth from '@okta/okta-auth-js';
// import { withAuth } from '@okta/okta-react';


function SignUp (){
    const[Created, setCreated] = useState(false);
    const[error, setError] = useState();
    const[emailError, setEmailError] = useState(false);
    const[userNameError, setUserNameError] = useState(false);


    if(error){
        console.log(error)
    }

    const UserChecker = (User) =>{
        const stringNameCheck = new RegExp(/^[a-z0-9_-]{3,20}$/i)
        console.log(`User Name:${User}`)
        if(User.match(stringNameCheck)){
            console.log(`Regex confirm check:${User.match(stringNameCheck)}`)
            API.getUserNameCheck({
                "user_name":User
            }).then(res =>{
                if(res.data[0].total !== 0){
                    setUserNameError(true)
                    console.log(`Name used check: ${JSON.stringify(res.data[0].total)}`)
                }else if (res.data[0].total === 0){
                    console.log(`Name free check:${res.data.total}`)
                    setUserNameError(false)
                }
                else{
                    setUserNameError(true)
                    console.log(`Name fail check: ${res.data.total}`)
                }
            })
        }else{
            // console.log(`Regex fail check:${Email.match(stringCheck)}`)
            return;
        };
    }

    const EmailChecker = (Email) =>{
        const stringCheck = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i)
        console.log(`email:${Email}`)
        if(Email.match(stringCheck)){
            console.log(`Regex confirm check:${Email.match(stringCheck)}`)
            API.getEmailCheck({
                "email":Email
            }).then(res =>{
                if(res.data[0].total !== 0){
                    setEmailError(true)
                    console.log(`Email used check: ${JSON.stringify(res.data[0].total)}`)
                }else if (res.data[0].total === 0){
                    console.log(`Email free check:${res.data.total}`)
                    setEmailError(false)
                }
                else{
                    setEmailError(true)
                    console.log(`Email fail check: ${res.data.total}`)
                }
                
            })
        }else{
            // console.log(`Regex fail check:${Email.match(stringCheck)}`)
            return;
        };
    };

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = async (data, e) =>{
        // console.log(data)

        if(!emailError && !userNameError){
            API.createAccount({ 
                "first_name": data.firstName,
                "last_name":data.lastName,
                "user_name": data.userName,
                "dob": data.DOB,
                "email": data.email,
                "password": data.password,
                "verified":false
            }).then(result =>{
                if(result.status === 200){
                    if(result.data.id !== null){
                        console.log(`result: ${JSON.stringify(result.data.id)}`)  
                        setCreated(true) 
                    }else{
                        setError(true)
                    }
                }else{
                    setError(true)
                }
              
            })
            .catch(err => setError(err))
        }else{
            return;
        };
    };

    return(
        <DivWBorder> 
            {/* <a id="signup"/> */}
            {/* Sign up form */}
            <MarronHeader>
                <H2>Start making positive changes today.</H2>
            </MarronHeader>
          
            <FormBigBox onSubmit={handleSubmit(onSubmit)}>
                {error && (
                    <div>
                        <H1>Form submit error</H1>
                        <H2>{error}</H2>
                    </div>
                )}
                {Created &&(
                    <FormBoxWError>
                        <H2 color="rgb(23,23,23)">Profile created</H2>
                        {/* <H2>Check your email for varification</H2> */}
                    </FormBoxWError>
                )}
                {!Created &&(
                    <div>
                        {/* Might want to add a intrest option */}
                        {/* <PT>Please share you contact info</PT> */}
                        <FormLittleBox>
                            <FormBoxWError>
                                    <PT>Screen name*</PT>

                                    <Input
                                        name="userName"
                                        onChange={e => UserChecker(e.target.value)}
                                        ref ={register({required: true,  pattern: /^[a-z0-9_-]{3,20}$/i })}
                                    /> 
                                    {userNameError &&(<PE>This screen name is already in use!</PE>)}
                                    {errors.userName && errors.userName.type === "required" &&(<PE>This is required!</PE>)}
                                    {errors.userName && errors.userName.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                            </FormBoxWError>
                            <FormBoxWError>
                                    <PT>First name*</PT>
                                    <Input
                                        name="firstName"
                                        ref ={register({required: true})}
                                    /> 
                                    {errors.firstName && errors.firstName.type === "required" &&(<PE>This is required!</PE>)}
                                    {/* {errors.firstName && errors.firstName.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)} */}
                            </FormBoxWError>
                            <FormBoxWError>
                                    <PT>Last name*</PT>
                                    <Input
                                        name="lastName"
                                        ref ={register({required: true})}
                                    /> 
                                    {errors.lastName && errors.lastName.type === "required" &&(<PE>This is required!</PE>)}
                                    {/* {errors.lastName && errors.lastName.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)} */}
                            </FormBoxWError>
                        </FormLittleBox>
                        <FormLittleBox>
                            <FormBoxWError>
                                    <PT>Email*</PT>
                                    <Input
                                        name="email"
                                        onChange={e => EmailChecker(e.target.value)}
                                        ref ={register({required: true, emailCheck:emailError, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i })}
                                    /> 
                                    {emailError &&(<PE>This email is already in use!</PE>)}
                                    {errors.email && errors.email.type === "required" &&(<PE>This is required!</PE>)}
                                    {errors.email && errors.email.type === "emailCheck" &&(<PE>This email is already in use!</PE>)}
                                    {errors.email && errors.email.type === "pattern" &&(<PE>Please use valid email address</PE>)}
                            </FormBoxWError>
                            <FormBoxWError>
                                    <PT>Date of birth*</PT>
                                    <Input
                                        name="DOB"
                                        type="date"
                                        ref ={register({required: true})}
                                    /> 
                                    {errors.DOB && errors.DOB.type === "required" &&(<PE>This is required!</PE>)}
                            </FormBoxWError>
                            <FormBoxWError>
                                    <PT>Password*</PT>
                                    <Input
                                        type="password"
                                        name="password"
                                        ref ={register({required: true, minLength: 8, maxLength: 25, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,25}$/})}
                                    />  
                                    {errors.password && errors.password.type === "required" &&(<PE>This is required!</PE>)} 
                                    {errors.password && errors.password.type === "pattern" &&(<PE>Password must contain one uppercase letter, one lower case letter, and one number.</PE>)} 
                                    {errors.password && errors.password.type === "minLength" &&(<PE>Password must be 8 charecters or longer.</PE>)} 
                                    {errors.password && errors.password.type === "maxLength" &&(<PE>Password can not be longer then 25 charecters.</PE>)} 

                            </FormBoxWError>
                            <FormBoxWError>
                                    <PT>Confirm Password*</PT>
                                    <Input
                                        type="password"
                                        name="password2"
                                        ref ={ register({required:true, validate: (value) => value === watch('password')})}                           
                                    />
                                    {errors.password2 && errors.password2.type === "required" &&(<PE>This is required!</PE>)} 
                                    {errors.password2 && errors.password2.type === "validate" &&(<PE>Passwords must match</PE>)} 
                            </FormBoxWError>  
                            {/* bulk text area. opition to hide text? */}
                            
                        </FormLittleBox>
                        {/* <FormLittleBox>
                            <FormBox>
                                <PT>About</PT>
                                <TextArea 
                                    rows="10"
                                    cols="50"
                                    placeholder="Anything you share is confidential"
                                    name="about" 
                                    ref ={register}   
                                />                    
                            </FormBox>                    
                        </FormLittleBox>
                        <FormLittleBox>
                            <FormBox>
                                <PT>Profile Img</PT>
                                <Input
                                type
                                />
                                                
                            </FormBox>                    
                        </FormLittleBox> */}
                        <FormLittleBox>
                            {/* contact info email... Name? DOB number */}
                            {/* submit button changes to teal when information is complete. pop up informs more info needed. */}
                            <FormBox>
                                <Btn type="submit" value="Submit">Done? Lets get started.</Btn>
                                {/* disabled={disable} */}
                            </FormBox>
                        </FormLittleBox>                    
                    </div>     
                )}       
            </FormBigBox>
            <a className="nav-link" href="/login"><Btn>Already have an account Login</Btn></a>
        </DivWBorder>
    )
}

export default SignUp;