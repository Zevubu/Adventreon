import React, {useContext, useState, useEffect} from "react";
import { useParams} from "react-router";
import {DivWBorder, MarronHeader,BigMarronBtn, H2, PT, PS} from "../../styles/homeStyle"
import {FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../styles/signUpOutStyles"
import API from "../../API/HostLogIn";
import { useForm } from 'react-hook-form';
import {UserInfoContext} from "../../context/heart" 
import {Link} from 'react-router-dom';
// import { host } from "../../../../dbConfig";
// import Hosts from "../../componets/CP_fillers/life_home_hs/life_host";
// user_name
// dob, 
// email, 
// title, 
// about, 
// p_img, 
// b_img, 
// catagory, 
// payment,
// patreon, 
// wp_title, 
// webpage, 

// Upload Status:{
//     "data":{
//         "fieldCount":0,
//         "affectedRows":1,
//         "insertId":0,
//         "serverStatus":2,
//         "warningCount":0,
//         "message":"(Rows matched: 1  Changed: 1  Warnings: 0",
//         "protocol41":true,
//         "changedRows":1
//     },
//     "status":200,
//     "statusText":"OK",
//     "headers":{
//     "access-control-allow-origin":"*",
//     "connection":"close","content-length":"168",
//     "content-type":"application/json; charset=utf-8",
//     "date":"Fri, 22 May 2020 23:06:43 GMT",
//     "etag":"W/\"a8-A6aUB2OZrEICcuz3kHgDb+GNysg\"",
//     "vary":"Accept-Encoding","x-powered-by":"Express"},
//     "config":{
//         "url":"/api/hosts/all/1",
//         "method":"put",
//         "data":"{\"user_name\":\"ZevUbu\",\"email\":\"zevubu@gmail.com\",\"title\":\"Master of this tiny kingdom\",\"about\":\"Founder of Adventreon\",\"p_img\":\"https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/p960x960/23674750_10155167262830745_3099595753383379238_o.jpg?_nc_cat=104&_nc_sid=dd7718&_nc_ohc=2xtTMNjaCA4AX-T8543&_nc_ht=scontent-sjc3-1.xx&_nc_tp=6&oh=b7a86cbe64adc036a9ce114079c1be40&oe=5EE7B279\",\"b_img\":\"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/p960x960/37112608_10155733091650745_697307413887320064_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=6wXJLNCh5LMAX-pGVN8&_nc_ht=scontent-sjc3-1.xx&_nc_tp=6&oh=bad4dfd9a0574a82b3b4d6dc34fcee5d&oe=5EE5FB61\",\"payment\":\"paymentlink\",\"patreon\":\"Patreon link\",\"wp_title\":\"Visit my web page \",\"webpage\":\"www.zevubu.com\"}",
//         "headers":{
//             "Accept":"application/json, text/plain, */*",
//             "Content-Type":"application/json;charset=utf-8"
//         },
//         "transformRequest":[null],
//         "transformResponse":[null],
//         "timeout":0,
//         "xsrfCookieName":"XSRF-TOKEN",
//         "xsrfHeaderName":"X-XSRF-TOKEN",\
//         "maxContentLength":-1
//     },
//     "request":{}
// }

function UpHost (){
    const { userData } = useContext(UserInfoContext)
    const [isPulled, setIsPulled] = useState();
    const[catType, setCatType] = useState();
    const[upComplete, setUpComplete] = useState();
    const[upFail, setUpfail] = useState();
    const { id } = useParams();
    // const [valid, setValid] = useState()
    const [Host, setHost] = useState();
    const[MHSwitch, setMHswitch] = useState()
    // console.log(`profile user data: ${JSON.stringify(Host)}`)


    useEffect(() => {
        console.log(`Profile Update page info: Id:${id}, UserData: ${userData}`)
        // add a password check here. 
         const fetchHost = async () =>{
            const result = await API.getHostByID(`${id}`)
            // console.log(`Profile update result ${JSON.stringify(result.data)}`)
            const user = result.data[0]
            setHost(user);
            setIsPulled(true);
            if(user.mhswitch === '1'){
                setMHswitch(true)
                console.log(`MHSwitch true!`)
            }else{
                setMHswitch(false)
                console.log(`MHSwitch false! ${user.mhswitch}`)
            }

        }
        fetchHost();
    
    },[])

    // if(isPulled && Host && !MHSwitch){
    //     if(Host.mhswitch === 1){
    //         setMHswitch(true)
    //         console.log(`MHSwitch true!`)
    //     }else{
    //         setMHswitch(false)
    //         console.log(`MHSwitch false!`)
    //     }
    // }

    const { register, handleSubmit, watch, errors } = useForm({})
    
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
        // console.log(data)
        // console.log(`entertain:${data.entertain} couns:${data.couns} relig:${data.relig}`)
        // const checkEmail = async () =>{
        //    const result = await API.getEmailCheck({
        //     "user_email": data.email
        //     })
        //     console.log(result)
        // }
        // checkEmail()

        API.updatedProfile(id,{ 
            "user_name": data.userName,
            "mhswitch": data.mhswitch,
            "email": data.email,
            "title": data.title,
            "about": data.about, 
            "p_img": data.pImg,
            "b_img": data.bImg,
            "catagory":catType,
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
                <H2>Host Profile creation page!</H2>
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

                <PT>Update Profile.</PT>
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
                                <PS>What catagory do you want you profile listed under</PS>
                                <select 
                                    name="catagory" 
                                    onChange={e => setCatType(e.target.value)}
                                    defaultValue={Host.catagory}
                                    >
                                    <option>choose one</option>
                                    <option value="music">Music</option>
                                    <option value="performance">Performance Art</option>
                                    <option value="visual">Visual Art</option>
                                    <option value="life">Life</option>
                                    <option value="spiritual">Spiritual Guidance</option>
                                </select>
                                {errors.catagory && errors.catagory.type === "required" &&(<PE>This is required!</PE>)} 
                            </FormBoxWError>
                            {/* bulk text area. opition to hide text? */}
                            <FormBoxWError>
                                <PT>Make your profile findable as a host.</PT>
                                <Input type="checkbox" name="mhswitch" value={true} ref={register} defaultChecked={MHSwitch}/>
                            </FormBoxWError>
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