import React,{useState} from "react";
import {DivWBorder, MarronHeader, H2, PT, PS} from "../../styles/homeStyle"
import {FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../styles/signUpOutStyles"
import API from "../../API/behindDaScenes";
import {useForm} from 'react-hook-form';
// user_name, 
// user_type, 
// mhswitch, 
// dob, 
// email, 
// password, 
// title, 
// about, 
// p_img, 
// b_img, 
// catagory, 
// payment,
// patreon, 
// wp_title, 
// webpage, 
// rsvp_attend, 
// rsvp_perform, 
// verified

function SignUp (){
    const[catType, setCatType] = useState();

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = (data, e) =>{
        console.log(data)
        console.log(`entertain:${data.entertain} couns:${data.couns} relig:${data.relig}`)
        // const checkEmail = async () =>{
        //    const result = await API.getEmailCheck({
        //     "user_email": data.email
        //     })
        //     console.log(result)
        // }
        // checkEmail()

        API.createAccount({ 
            "first_name": data.firstName,
            "last_name":data.lastName,
            "user_name": data.userName,
            "user_type": "host",
            "mhswitch": false,
            "dob": data.DOB,
            "email": data.email,
            "password": data.password,
            "title": data.title,
            "about": data.about, 
            "p_img": data.pImg,
            "b_img": data.bImg,
            "catagory": catType,
            "payment": data.paypal,
            'patreon': data.patreon,
            'wp_title': data.wpTitle,
            'webpage': data.webpage,
            'rsvp_attend':'',
            'rsvp_perform':'', 
            "verified":false
            }).then(e.target.reset())
            .catch(err => console.log(err))
    }
    return(
        <DivWBorder> 
            {/* <a id="signup"/> */}
            {/* Sign up form */}
            <MarronHeader>
                <H2>Host Profile creation page!</H2>
            </MarronHeader>
            <FormBigBox onSubmit={handleSubmit(onSubmit)}>
                {/* choose all that apply inluding "I'm not sure" */}
                {/* Might work better if it a select all that apply */}
                <PT>Thats right make your profile here.</PT>
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
                        <PS>What catagory do you want you profile listed under</PS>
                        <select name="catagory" onChange={e => setCatType(e.target.value)}>
                            <option>choose one</option>
                            <option value="music">Music</option>
                            <option value="performance">Performance Art</option>
                            <option value="visual">Visual Art</option>
                            <option value="life">Life</option>
                            <option value="spiritual">Spiritual Guidance</option>
                        </select>
                        {errors.catagory && errors.catagory.type === "required" &&(<PE>This is required!</PE>)} 
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