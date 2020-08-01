import React,{useState,} from "react";
import {useParams} from "react-router";
import {DivWBorder, MarronHeader, H2,H1, PT, PS} from "../../../styles/homeStyle"
import {FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../../styles/signUpOutStyles"
import API from "../../../API/behindDaScenes";
import {useForm} from 'react-hook-form';
import {Redirect} from "react-router-dom";

// still need to add email verification
function SignUp (){
    const[catType, setCatType] = useState();
    let { id } = useParams();
    const[Created, setCreated] = useState(false);
    const[error, setError] = useState();
    const[emailError, setEmailError] = useState(false);
    const[userNameError, setUserNameError] = useState(false);
    
    // if(error){
    //     console.log(error)
    // }

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
    const onSubmit = (data, e) =>{
        const token = window.localStorage.getItem('tokens');
        // console.log(data)
        // const checkEmail = async () =>{
        //    const result = await API.getEmailCheck({
        //     "user_email": data.email
        //     })
        //     console.log(result)
        // }
        // checkEmail()

        // if(Created){
        //     return <Redirect to='/' />
        // }
        if(!emailError && !userNameError){
            API.createManagAccount({ 
                "token": token,
                "data": {
                    "first_name": data.firstName,
                    "last_name":data.lastName,
                    "user_name": data.userName,
                    "mhswitch": true,
                    "dob": data.DOB,
                    "email": data.email,
                    "password": data.password,
                    "title": data.title,
                    "about": data.about, 
                    "p_img": data.pImg,
                    "b_img": data.bImg,
                    "category":catType,
                    "payment": data.paypal,
                    'patreon': data.patreon,
                    'wp_title': data.wpTitle,
                    'webpage': data.webpage,
                    'rsvp_attend':'',
                    'rsvp_perform':'', 
                    "verified":true
                }
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
            .catch(err => console.log(err))
        }
    }
    // .then(function(){
    //     console.log(`Delete ID test: ${id}`)
    //     API.deleteUserById(`${id}`)
    //     .then(function(){
    //         return <Redirect to='/' />
    //     }).catch(err => console.log(err))
    // })
    return(
        <DivWBorder> 
            {/* <a id="signup"/> */}
            {/* Sign up form */}
            <MarronHeader>
                <H2>Managment creation page!</H2>
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
                        {/* choose all that apply inluding "I'm not sure" */}
                        {/* Might work better if it a select all that apply */}
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
                                <PT>Your Title</PT>
                                <Input
                                    name="title"
                                    ref ={register({required: true })}
                                /> 
                                {errors.title && errors.title.type === "required" &&(<PE>This is required!</PE>)}
                                {errors.title && errors.title.type === "pattern" &&(<PE>Title must at least 3 characters an no longer than 30. </PE>)}
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
                                    ref ={register({required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i })}
                                /> 
                                {emailError &&(<PE>This email is already in use!</PE>)}
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
                                {/* {errors.DOB && errors.DOB.type === "pattern" &&(<div><PE>Must be a valid pnone number.</PE><PE>Excepted formats (123)456-7890 x, 123-456-7890 x, 123 456 7890 x, 1234567890 x</PE></div>)}  */}
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
                        <FormLittleBox>
                            <FormBoxWError>
                                <PT>category</PT>
                                <PS>What category do you want you profile listed under</PS>
                                <select name="category" onChange={e => setCatType(e.target.value)}>
                                    <option>choose one</option>
                                    <option value="music">Music</option>
                                    <option value="performance">Performance Art</option>
                                    <option value="visual">Visual Art</option>
                                    <option value="life">Life</option>
                                    <option value="spiritual">Spiritual Guidance</option>
                                </select>
                                {errors.category && errors.category.type === "required" &&(<PE>This is required!</PE>)} 
                            </FormBoxWError>
                            <FormBoxWError>
                                <PT>Profile Image*</PT>
                                <Input
                                    type="text"
                                    name="pImg"
                                    ref ={register({required: true})}
                                /> 
                                {errors.pImg && errors.pImg.type === "required" &&(<PE>This is required!</PE>)}
                                {errors.PImg && errors.pImg.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                                <PT>Background Image</PT>
                                <Input
                                    name="bImg"
                                    ref ={register}
                                /> 
                                {errors.bImg && errors.bImg.type === "required" &&(<PE>This is required!</PE>)}
                                {errors.bImg && errors.bImg.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}                          
                            </FormBoxWError>
                            <FormBoxWError>
                                <PT>Payment</PT>
                                {/* Will inclued an example of exactly what you need to do. */}
                                <Input
                                    name="payment"
                                    ref ={register}
                                /> 
                                {errors.payment && errors.payment.type === "required" &&(<PE>This is required!</PE>)}
                                {/* {errors.payment && errors.payment.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)} */}
                            </FormBoxWError>
                            <FormBoxWError>
                                <PT>Patreon</PT>
                                {/* Will inclued an example of exactly what you need to do. */}
                                <Input
                                    name="patreon"
                                    ref ={register}
                                /> 
                                {errors.patreon && errors.patreon.type === "required" &&(<PE>This is required!</PE>)}
                                {errors.patreon && errors.patreon.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                            </FormBoxWError>
                        </FormLittleBox>
                        <FormLittleBox>
                            <FormBoxWError>
                                <PT>About</PT>
                                <TextArea 
                                    rows="10"
                                    cols="50"
                                    placeholder="Anything you share is confidential"
                                    name="about" 
                                    ref ={register}   
                                /> 
                            </FormBoxWError>
                            <FormBoxWError>
                                <FormBox>
                                    <PT>WebPage title</PT>
                                    <PS>IE: "Buy our Shwag here!", "Veiw my webpage!" so on.</PS>
                                    {/* Will inclued an example of exactly what you need to do. */}
                                    <Input
                                        name="wpTitle"
                                        ref ={register}
                                    /> 
                                    {errors.wpTitle && errors.wpTitle.type === "required" &&(<PE>This is required!</PE>)}
                                    {errors.wpTitle && errors.wpTitle.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                                </FormBox>
                                <FormBox>
                                    <PT>WebPage Link</PT>
                                    {/* Will inclued an example of exactly what you need to do. */}
                                    <Input
                                        name="webpage"
                                        ref ={register}
                                    /> 
                                    {errors.wpTitle && errors.wpTitle.type === "required" &&(<PE>This is required!</PE>)}
                                    {errors.wpTitle && errors.wpTitle.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                                </FormBox>
                            </FormBoxWError>
                        </FormLittleBox>
                    
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