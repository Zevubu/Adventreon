import React,{useState} from "react";
import {DivWBorder, MarronHeader, H2, H1, PT} from "../styles/homeStyle"
import {FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, PE} from "../styles/signUpOutStyles"
import API from "../API/loggedOutAPI";
import {useForm} from 'react-hook-form';
// import OktaAuth from '@okta/okta-auth-js';
// import { withAuth } from '@okta/okta-react';


function SignUp (){
    const[sessionToken, setSessionToken]=useState();
    const[error, setError] = useState();

    if(error){
        console.log(error)
    }

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = async (data, e) =>{
        // console.log(data)



        API.createAccount({ 
            "first_name": data.firstName,
            "last_name":data.lastName,
            "user_name": data.userName,
            "dob": data.DOB,
            "email": data.email,
            "password": data.password,
            "verified":false
            }).then(e.target.reset())
            .catch(err => setError(err))
    }

    return(
        <DivWBorder> 
            {/* <a id="signup"/> */}
            {/* Sign up form */}
            <MarronHeader>
                <H2>Start making positive changes today.</H2>
            </MarronHeader>
            {error && (
                <div>
                    <H1>Form submit error</H1>
                    <H2>{error}</H2>
                </div>
            )}

            <FormBigBox onSubmit={handleSubmit(onSubmit)}>
                {/* choose all that apply inluding "I'm not sure" */}
                {/* Might work better if it a select all that apply */}
                <PT>Please share you contact info</PT>
                <FormLittleBox>
                    <FormBoxWError>
                            <PT>Profile name*</PT>
                            <Input
                                name="userName"
                                ref ={register({required: true,  pattern: /^[a-z0-9_-]{3,20}$/i })}
                            /> 
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
                                ref ={register({required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i })}
                            /> 
                            {errors.email && errors.email.type === "required" &&(<PE>This is required!</PE>)}
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
            </FormBigBox>
             <a className="nav-link" href="/login"><Btn>Already have an account Login</Btn></a>
        </DivWBorder>
    )
}

export default SignUp;