import React, {useContext, useState} from "react";
import {DivWBorder, MarronHeader, BigMarronBtn, H2, PT, PS} from "../../styles/homeStyle"
import { FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../styles/signUpOutStyles"
import API from "../../API/loggedOutAPI";
import {useForm} from 'react-hook-form';
import {UserInfoContext, useHost, useManagment} from "../../context/heart"
import {Link} from 'react-router-dom';
        // show_name, x
        // show_type,x
        // about, x 
        // img, x
        // img_b,x 
        // catagory,x 
        // sub_catagory, x
        // host_id, 
        // host_name, 
        // host_img, 
        // payment, 
        // patreon, 
        // wp_title, 
        // webpage, 
        // eighteen_plus, 
        // booked, 
        // paid, x
        // canceled, 
        // entertain, 
        // couns, 
        // relig

function ShowBuild (){
    const { userData } = useContext(UserInfoContext);
    const {isManager} = useManagment();
    const { isHost } = useHost();
    console.log(`showbuild user data: ${JSON.stringify(userData.user_name)}`)
// id, user_name, user_type, mhswitch, dob, email, password, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig, timestamp
    const[showType, setShowType] = useState();
    const[episodical, setEpisodical] = useState();
    const[catType, setCatType] = useState();
    const { register, handleSubmit, watch, errors } = useForm();

    
    const onShowSubmit = (data, e) =>{
        console.log(data)
        if(showType === "episodical"){
            setEpisodical(true)
        }
     
        API.createShow({ 
            "show_name": data.showName,
            "show_type": showType,
            "about": data.about,
            "img": data.pImg,
            "img_b": data.bImg,
            "catagory": catType,
            "sub_catagory": data.subcatagory,
            "host_id": userData.id, 
            "host_name": userData.user_name,
            "host_img": userData.p_img,
            "payment": data.paypal,
            'patreon':data.patreon,
            'wp_title': data.wpTitle,
            'webpage': data.webpage,
            'video_channel':data.videoLink||"",
            'eighteen_plus':true,
            'booked':true,
            "paid":false,
            "canceled":false, 
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
            <H2>Show creation page!</H2>
        </MarronHeader>
        <FormBigBox>
         
            <PT>What kind of show would you like to make?</PT>
            <PS>If your show is a live stream please choose episodical.</PS>
            <FormBoxWError>
                <PT>Show type</PT>
                <select name="showType" onChange={e => setShowType(e.target.value)}>
                    <option>choose one</option>
                    <option value="one_off">One off</option>
                    <option value="episodical">Episodical</option>
                    <option value="ls_one_off">Livestream one off</option>
                    <option value="ls_episodical">Livestream episodical</option>
                </select>
            </FormBoxWError>
            <PT>What WebPage this show belong in?</PT>
            <FormBoxWError>
                {/* Educational */}
                        <PT>category</PT>
                        <select name="catagory" onChange={e => setCatType(e.target.value)}>
                            <option>choose one</option>
                            <option value="music">Music</option>
                            <option value="performance">Performance Art</option>
                            <option value="visual">Visual Art</option>
                            <option value="life">Life</option>
                            <option value="spiritual">Spiritual Guidance</option>
                        </select>
                        {errors.password && errors.password.type === "required" &&(<PE>This is required!</PE>)} 
                        {errors.password && errors.password.type === "pattern" &&(<PE>Password must contain one uppercase letter, one lower case letter, and one number.</PE>)} 
                        {errors.password && errors.password.type === "minLength" &&(<PE>Password must be 8 charecters or longer.</PE>)} 
                        {errors.password && errors.password.type === "maxLength" &&(<PE>Password can not be longer then 25 charecters.</PE>)} 
                </FormBoxWError>
            {episodical && isHost && ( 
                <FormBoxWError>
                    <Link style={{ textDecoration: 'none'}} to="/episodebuilder">
                        <BigMarronBtn>Add episodes to your show here!</BigMarronBtn>
                    </Link>
                </FormBoxWError>
            )}
            {episodical && isManager && ( 
                <FormBoxWError>
                    <Link style={{ textDecoration: 'none'}} to="/episodebuilderm">
                        <BigMarronBtn>Add episodes to your show here!</BigMarronBtn>
                    </Link>
                </FormBoxWError>
            )}
        </FormBigBox>
        {showType && catType && ( 
            <FormBigBox onSubmit={handleSubmit(onShowSubmit)}>
                {/* choose all that apply inluding "I'm not sure" */}
                {/* Might work better if it a select all that apply */}   
                {catType==="music" &&(
                    <FormBoxWError>
                        <PT>Sub-category</PT>
                        <select name="subcatagory" ref ={register({required: true})}>
                            <option>choose one</option>
                            <option value="acoustic">Acoustic</option>
                            <option value="edm">E.D.M</option>
                            <option value="dj">DJ</option>
                            <option value="mixed">Mixed Media</option>
                            <option value="variety">Variety show</option>
                            <option value="educate">Educational</option>
                            <option value="blog">Personal Blog</option>
                        </select>
                        {errors.password2 && errors.password2.type === "required" &&(<PE>This is required!</PE>)} 
                        {errors.password2 && errors.password2.type === "validate" &&(<PE>Passwords must match</PE>)} 
                    </FormBoxWError>
                )}
                {catType==="performance" &&(
                    <FormBoxWError>
                        <PT>Sub-category</PT>
                        <select name="subcatagory"  ref ={register({required: true})}>
                            <option>choose one</option>
                            <option value="story">Story arched</option>
                            <option value="play">Play</option>
                            <option value="mixed">Mixed Media</option>
                            <option value="variety">Variety show</option>
                            <option value="educate">Educational</option>
                            <option value="blog">Personal Blog</option>  
                        </select>
                        {errors.password2 && errors.password2.type === "required" &&(<PE>This is required!</PE>)} 
                        {errors.password2 && errors.password2.type === "validate" &&(<PE>Passwords must match</PE>)} 
                    </FormBoxWError>
                )}
                {catType==="visual" &&(
                    <FormBoxWError>
                        <PT>Sub-category</PT>
                        <select name="subcatagory"  ref ={register({required: true})}>
                            <option>choose one</option>
                            <option value="analog">Analog</option>
                            <option value="digital">Digital</option>
                            <option value="mixed">Mixed Media</option>
                            <option value="variety">Variety Show</option>
                            <option value="educate">Educational</option>
                            <option value="blog">Personal Blog</option>   
                        </select>
                        {errors.password2 && errors.password2.type === "required" &&(<PE>This is required!</PE>)} 
                        {errors.password2 && errors.password2.type === "validate" &&(<PE>Passwords must match</PE>)} 
                    </FormBoxWError>
                )}           
                {catType==="life" &&(
                    <FormBoxWError>
                        <PT>Sub-category</PT>
                        <select name="subcatagory"  ref ={register({required: true})}>
                            <option>choose one</option>
                            <option value="counseling">Counseling</option>
                            <option value="cooking">Cooking</option>
                            <option value="lifehack">Life hacks</option>
                            <option value="variety">Variety Show</option>
                            <option value="educate">Educational</option>
                            <option value="blog">Personal Blog</option>   
                        </select>
                        {errors.password2 && errors.password2.type === "required" &&(<PE>This is required!</PE>)} 
                        {errors.password2 && errors.password2.type === "validate" &&(<PE>Passwords must match</PE>)} 
                    </FormBoxWError>
                )}
                {catType==="spiritual" &&(
                    <FormBoxWError>
                        <PT>Sub-category</PT>
                        <select name="subcatagory"  ref ={register}>
                            <option>choose one</option>
                            <option value="guide">Guidance/Sermon/Prayer</option>
                            <option value="spells">Spells</option>
                            <option value="readings">Readings</option>
                            <option value="variety">Variety Show</option>
                            <option value="educate">Educational</option>
                            <option value="blog">Personal Blog</option>
                        </select>
                        {errors.password2 && errors.password2.type === "required" &&(<PE>This is required!</PE>)} 
                        {errors.password2 && errors.password2.type === "validate" &&(<PE>Passwords must match</PE>)} 
                    </FormBoxWError>
                )}
                <FormLittleBox>
                    <FormBoxWError>
                            <PT>Show Name</PT>
                            <Input
                                name="showName"
                                ref ={register({required: true})}
                            /> 
                            {errors.showName && errors.showName.type === "required" &&(<PE>This is required!</PE>)}
                            {errors.showName && errors.showName.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                    </FormBoxWError>
                    <FormBoxWError>
                        <PT>Paypal</PT>
                        {/* Will inclued an example of exactly what you need to do. */}
                        <Input
                            name="paypal"
                            ref ={register({required: true})}
                        /> 
                        {errors.paypal && errors.paypal.type === "required" &&(<PE>This is required!</PE>)}
                        {errors.paypal && errors.paypal.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
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
                    {/* bulk text area. opition to hide text? */}
                    </FormLittleBox>
                    <FormLittleBox>
                    {showType === "one_off" &&(
                        <FormBoxWError>
                            <PT>Video link</PT>
                            {/* Will inclued an example of exactly what you need to do. */}
                            <Input
                                name="videoLink"
                                ref ={register}
                            /> 
                            {errors.livefeed && errors.livefeed.type === "required" &&(<PE>This is required!</PE>)}
                            {errors.livefeed && errors.livefeed.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                        </FormBoxWError>
                    )}
                    <FormBoxWError>
                            <PT>Show Image</PT>
                            <Input
                                type="file"
                                name="pImg"
                                ref ={register({required: true})}
                            /> 
                            {errors.pImg && errors.pImg.type === "required" &&(<PE>This is required!</PE>)}
                            {errors.PImg && errors.pImg.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}                          
                    </FormBoxWError>
                    <FormBoxWError>
                            <PT>Background Image</PT>
                            <Input
                                type="file"
                                name="bImg"
                                ref ={register}
                            /> 
                            {errors.bImg && errors.bImg.type === "required" &&(<PE>This is required!</PE>)}
                            {errors.bImg && errors.bImg.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}                          
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
                    {/* <FormBoxWError>
                
                        <PT>Where would you like to be featured</PT>
                        <PS>Entertainment</PS>
                        <Input
                            value="1"
                            type="radio"
                            name="entertain"
                            ref ={register}
                        /> 
                        <PS>Counseling</PS>
                        <Input
                            value="1"
                            type="radio"
                            name="couns"
                            ref ={register}
                        /> 
                        <PS>Exersize</PS>
                        <Input
                            value=""
                            type="radio"
                            name="exer"
                            ref ={register}
                        /> 
                        <PS>Religious Services</PS>
                        <Input
                            value="1"
                            type="radio"
                            name="relig"
                            ref ={register}
                        /> 


                    </FormBoxWError> */}
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
                        <Btn type="submit" value="Submit">Submit show</Btn>
                        {/* disabled={disable} */}
                    </FormBox>
                
                </FormLittleBox>       
            </FormBigBox>
        )}      
        {episodical && isHost && ( 
            <FormBoxWError>
                <Link style={{ textDecoration: 'none'}} to="/episodebuilder">
                    <BigMarronBtn>Add episodes to your show here!</BigMarronBtn>
                </Link>
            </FormBoxWError>
        )}
        {episodical && isManager && ( 
            <FormBoxWError>
                <Link style={{ textDecoration: 'none'}} to="/episodebuilderm">
                    <BigMarronBtn>Add episodes to your show here!</BigMarronBtn>
                </Link>
            </FormBoxWError>
        )}
    </DivWBorder>
    )
}

export default ShowBuild;