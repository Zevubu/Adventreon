import React from "react";
import {DivWBorder, MarronHeader, H2, PT} from "../../styles/homeStyle"
import {FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../styles/signUpOutStyles"
import API from "../../API/loggedOutAPI";
import {useForm} from 'react-hook-form';


function EpiAdd (){

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = (data, e) =>{
        console.log(data)
        // const checkEmail = async () =>{
        //    const result = await API.getEmailCheck({
        //     "user_email": data.email
        //     })
        //     console.log(result)


        // }
        // checkEmail()

        // user_name,
        // user_type, 
        // dob, 
        // email, 
        // password, 
        // title, 
        // about,x
        // p_img, 
        // b_img, 
        // shows, 
        // payment, 
        // patreon, 
        // wp_title, 
        // webpage, 
        // video_channel, 
        // rsvp_attend, 
        // rsvp_perform


        API.createAccount({ 
            "user_name": data.userName,
            "user_type": "user",
            "dob": data.DOB,
            "email": data.email,
            "password": data.password,
            "title": '',
            "about": '', 
            "p_img": '',
            "b_img": '',
            "shows": '',
            "payment": '',
            'patreon': '',
            'wp_title': '',
            'webpage': '',
            'video_channel':'',
            'rsvp_attend':'',
            'rsvp_perform':'',
            "entertain":false,
            "couns":false, 
            "relig":false
            }).then(e.target.reset())
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
                                ref ={register({required: true, pattern: /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/ })}
                            /> 
                            {errors.DOB && errors.DOB.type === "required" &&(<PE>This is required!</PE>)}
                            {errors.DOB && errors.DOB.type === "pattern" &&(<div><PE>Must be a valid pnone number.</PE><PE>Excepted formats (123)456-7890 x, 123-456-7890 x, 123 456 7890 x, 1234567890 x</PE></div>)} 
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

export default EpiAdd;