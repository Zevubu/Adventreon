import React, {useContext, useState, useEffect} from "react";
import { useParams} from "react-router";
import {DivWBorder, MarronHeader,BigMarronBtn, H2, PT, PS} from "../../styles/homeStyle"
import {FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../styles/signUpOutStyles"
import API from "../../API/HostLogIn";
import { useForm } from 'react-hook-form';
import {UserInfoContext} from "../../context/heart" 
import {Link} from 'react-router-dom';
// user_name
// dob, 
// email, 
// title, 
// about, 
// p_img, 
// b_img, 
// category, 
// payment,
// patreon, 
// wp_title, 
// webpage, 

function UpHost (){
    const { userData } = useContext(UserInfoContext)
    const [isPulled, setIsPulled] = useState();
    const[catType, setCatType] = useState();
    const[upComplete, setUpComplete] = useState();
    const[upFail, setUpfail] = useState();
    const { id } = useParams();
    // const [valid, setValid] = useState()
    const [Host, setHost] = useState();
    // console.log(`profile user data: ${JSON.stringify(Host)}`)

    useEffect(() => {
        console.log(`Profile Update page info: Id:${id}, UserData: ${JSON.stringify(userData)}`)
        // add a password check here. 
         const fetchHost = async () =>{
            const result = await API.getHostByID(`${id}`)
            console.log(`Profile to update result ${JSON.stringify(result.data)}`)
            setHost(result.data[0]);
            setIsPulled(true);
        }
        fetchHost();
    
    },[])

    const { register, handleSubmit,errors } = useForm({})
    
    const OnUpFin = (data, err) =>{
        console.log(`Upload data:${JSON.stringify(data)}`)
        if(err){
            console.log(`Upload function Error:${JSON.stringify(err)}`)
        }
        if(data.data !== ""){
            if(data.status === 200){
                setUpComplete(true)
                console.log(`Upload complete Status:${data.status}`)
            }else{
                setUpfail(true)
                console.log(`Upload Status error:${JSON.stringify(data)}`)
            }
        }
        else{
            setUpfail(true)
            console.log(`Upload data error:${JSON.stringify(data)}`)
        }  
    }
    const OnUpErr = (error) =>{
        console.log(`Upload call Error:${error}`)
    }

    const onSubmit = (data) =>{
        const token = window.localStorage.getItem('tokens');
        console.log(`Auth token test ${token}`);
        // console.log(data)
        API.updatedProfile(id,token,{ 
            "user_name": data.userName,
            "email": data.email,
            "title": data.title,
            "about": data.about, 
            "p_img": data.pImg,
            "b_img": data.bImg,
            "category":catType,
            "payment": data.payment,
            'patreon': data.patreon,
            'wp_title': data.wpTitle,
            'webpage': data.webpage,
            }).then(res => OnUpFin(res))
            .catch(err => OnUpErr(err))
    }

    return(
        <DivWBorder> 
            {/* <a id="signup"/> */}
            {/* Sign up form */}
            <MarronHeader>
                <H2>Update your profile</H2>
            </MarronHeader>
        {isPulled &&(
            <FormBigBox onSubmit={handleSubmit(onSubmit)}>
                {upComplete && ( 
                    <FormBoxWError>
                        <Link style={{ textDecoration: 'none'}} to={"/hosts/" + id}>
                            <BigMarronBtn>Upload complete! Veiw your updated Profile here.</BigMarronBtn>
                        </Link>
                    </FormBoxWError>
                )}
                {upFail && ( 
                    <FormBoxWError>
                        <Link style={{ textDecoration: 'none'}} to={"/hosts/" + id}>
                            <BigMarronBtn>Upload Failed please try again later.</BigMarronBtn>
                        </Link>
                    </FormBoxWError>
                )}
                {/* choose all that apply inluding "I'm not sure" */}
                {/* Might work better if it a select all that apply */}
                {Host &&(
                    <div>
    
                        <FormLittleBox>
                            <FormBoxWError>
                                <PT>Name*</PT>
                                <Input
                                    name="userName"
                                    ref ={register({required: true})}
                                    defaultValue={Host.user_name}
                                /> 
                                {errors.userName && errors.userName.type === "required" &&(<PE>This is required!</PE>)}
                                {errors.userName && errors.userName.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                            </FormBoxWError>
                            <FormBoxWError>
                                <PT>Email*</PT>
                                <Input
                                    name="email"
                                    ref ={register({required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i })}
                                    defaultValue={Host.email}
                                /> 
                                {errors.email && errors.email.type === "required" &&(<PE>This is required!</PE>)}
                                {errors.email && errors.email.type === "pattern" &&(<PE>Please use valid email address</PE>)}
                            </FormBoxWError>
                            <FormBoxWError>
                                <PT>Your Title</PT>
                                <Input
                                    name="title"
                                    ref ={register({required: true })}
                                    defaultValue={Host.title}
                                /> 
                                {errors.title && errors.title.type === "required" &&(<PE>This is required!</PE>)}
                                {errors.title && errors.title.type === "pattern" &&(<PE>Title must at least 3 characters an no longer than 30. </PE>)}
                            </FormBoxWError> 
                            <FormBoxWError>
                                <PT>category</PT>
                                <PS>What category do you want you profile listed under</PS>
                                <select 
                                    name="category" 
                                    onChange={e => setCatType(e.target.value)}
                                    defaultValue={Host.category}
                                    >
                                    <option>choose one</option>
                                    <option value="music">Music</option>
                                    <option value="performance">Performance Art</option>
                                    <option value="visual">Visual Art</option>
                                    <option value="life">Life</option>
                                    <option value="spiritual">Spiritual Guidance</option>
                                </select>
                                {errors.category && errors.category.type === "required" &&(<PE>This is required!</PE>)} 
                            </FormBoxWError>
                            {/* bulk text area. opition to hide text? */}
                        </FormLittleBox>
                        <FormLittleBox>
                            <FormBoxWError>
                                    <PT>Profile Image*</PT>
                                    <Input
                                        name="pImg"
                                        ref ={register}
                                        defaultValue={Host.p_img}
                                    /> 
                                    {errors.pImg && errors.pImg.type === "required" &&(<PE>This is required!</PE>)}
                                    {errors.PImg && errors.pImg.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                                    <PT>Background Image</PT>
                                    <Input
                                        name="bImg"
                                        ref ={register}
                                        defaultValue={Host.b_img}
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
                                    defaultValue={Host.payment}
                                /> 
                                {errors.payment && errors.payment.type === "required" &&(<PE>This is required!</PE>)}
                                {errors.payment && errors.payment.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                            </FormBoxWError>
                            <FormBoxWError>
                                <PT>Patreon</PT>
                                {/* Will inclued an example of exactly what you need to do. */}
                                <Input
                                    name="patreon"
                                    ref ={register}
                                    defaultValue={Host.patreon}
                                /> 
                                {errors.patreon && errors.patreon.type === "required" &&(<PE>This is required!</PE>)}
                                {errors.patreon && errors.patreon.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                            </FormBoxWError>
                            <FormBoxWError>
                                <FormBox>
                                    <PT>WebPage title</PT>
                                    <PS>IE: "Buy our Shwag here!", "Veiw my webpage!" so on.</PS>
                                    {/* Will inclued an example of exactly what you need to do. */}
                                    <Input
                                        name="wpTitle"
                                        ref ={register}
                                        defaultValue={Host.wp_title}
                                    /> 
                                    {errors.wpTitle && errors.wpTitle.type === "required" &&(<PE>This is required!</PE>)}
                                    {errors.wpTitle && errors.wpTitle.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                                
                                    <PT>WebPage Link</PT>
                                    {/* Will inclued an example of exactly what you need to do. */}
                                    <Input
                                        name="webpage"
                                        ref ={register}
                                        defaultValue={Host.webpage}
                                    /> 
                                    {errors.wpTitle && errors.wpTitle.type === "required" &&(<PE>This is required!</PE>)}
                                    {errors.wpTitle && errors.wpTitle.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                                </FormBox>
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
                                    defaultValue={Host.about} 
                                /> 
                            </FormBoxWError>
                            <FormBox>
                                <Btn type="submit" value="Submit">Update</Btn>
                                {/* disabled={disable} */}
                            </FormBox>
                        </FormLittleBox>
                    </div> 
                )}
                {upComplete && ( 
                    <FormBoxWError>
                        <Link style={{ textDecoration: 'none'}} to={"/hosts/" + id}>
                            <BigMarronBtn>Upload complete! Veiw your updated Profile here.</BigMarronBtn>
                        </Link>
                    </FormBoxWError>
                )}
                {upFail && ( 
                    <FormBoxWError>
                        <Link style={{ textDecoration: 'none'}} to={"/hosts/" + id}>
                            <BigMarronBtn>Upload Failed please try again later.</BigMarronBtn>
                        </Link>
                    </FormBoxWError>
                )}          
            </FormBigBox>
        )}
             <a className="nav-link" href="/login"><Btn>Already have an account Login</Btn></a>
        </DivWBorder>
    )
}

export default UpHost;