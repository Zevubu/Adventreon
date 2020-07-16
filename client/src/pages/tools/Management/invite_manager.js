import React, {useState} from "react";
import {DivWBorder, MarronHeader, H2, PT} from "../../../styles/homeStyle"
import {FormBigBox, FormLittleBox, FormBox, FormBoxWError, Btn, Input, PE} from "../../../styles/signUpOutStyles"
import API from "../../../API/behindDaScenes";
import {useForm} from 'react-hook-form';
// import { ShowBox } from "../../../styles/providerStyles";


function Invite (){
    const [isBox, setIsBox] = useState();
    const [temp, setTemp] = useState();

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = (data, e) =>{
        setTemp(data)
        setIsBox(true)
        // console.log(data)
        API.createAccount({ 
            "user_name": data.userName,
            "user_type": "tempm",
            "mhswitch": false,
            "dob": "1988-09-01",
            "email": "filler@fillingthis.fill",
            "password": data.password,
            "title": '',
            "about": '', 
            "p_img": '',
            "b_img": '',
            "category":'',
            "payment": '',
            'patreon': '',
            'wp_title': '',
            'webpage': '',
            'rsvp_attend':'',
            'rsvp_perform':'', 
            "verified":false,
            }).then(i => setIsBox(true))
            .then(e.target.reset())
            .catch(err => console.log(err))
    }

    return(
        <DivWBorder> 
            {/* <a id="signup"/> */}
            {/* Sign up form */}
            <MarronHeader>
                <H2>Start making positive changes today.</H2>
            </MarronHeader>

            <FormBigBox onSubmit={handleSubmit(onSubmit)}>
                {/* choose all that apply inluding "I'm not sure" */}
                {/* Might work better if it a select all that apply */}
                <PT>Please share you contact info</PT>
                <FormLittleBox>
                    
                    <FormBoxWError>
                            <PT>Name*</PT>
                            <Input
                                name="userName"
                                ref ={register({required: true,  pattern: /^[a-z0-9_-]{3,20}$/i })}
                            /> 
                            {errors.userName && errors.userName.type === "required" &&(<PE>This is required!</PE>)}
                            {errors.userName && errors.userName.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                    </FormBoxWError>
                    {/* <FormBoxWError>
                            <PT>Email*</PT>
                            <Input
                                name="email"
                                ref ={register({required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i })}
                            /> 
                            {errors.email && errors.email.type === "required" &&(<PE>This is required!</PE>)}
                            {errors.email && errors.email.type === "pattern" &&(<PE>Please use valid email address</PE>)}
                    </FormBoxWError> */}
                    <FormBoxWError>
                            <PT>Password*</PT>
                            <Input
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
                        <Btn type="submit" value="Submit">Create Temp account</Btn>


                        {/* disabled={disable} */}
                    </FormBox>
                </FormLittleBox> 
            {isBox && (
                <div>
                    <h2>Account susessfully created</h2>
                    <br/>
                    <p>Your temperaray user name is: {temp.userName} </p>
                    <p>and your temperaray password is: {temp.password}</p>
                </div>
            )}           
            </FormBigBox>
             <a className="nav-link" href="/login"><Btn>Already have an account Login</Btn></a>
        </DivWBorder>
    )
}

export default Invite;