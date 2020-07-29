import React, {useContext, useState} from "react";
import {DivWBorder, MarronHeader, BigMarronBtn, H2, PT, PS} from "../../styles/homeStyle";
import { FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../styles/signUpOutStyles"
import API from "../../API/HostLogIn";
import {useForm} from 'react-hook-form';
import {UserInfoContext, useHost, useManagment} from "../../context/heart";
import {Link} from 'react-router-dom';
// import Dropzone from 'react-dropzone';
// import {VideoUploaderWrapper, DropSection, UplaodingMask, UplaodFailedMessage, ProgressBarWrapper, ProgressBar} from '../../styles/VimeoStyles'
// import VimeoUp from '../../vimeo-upload/index'

function ShowBuild (){
    const { userData } = useContext(UserInfoContext);
    const {isManager} = useManagment();
    const { isHost } = useHost();
    const[showType, setShowType] = useState();
    const[episodical, setEpisodical] = useState();
    const[oneOff, setOneOff] = useState();
    const[catType, setCatType] = useState();
    // const[videoUp, setVideoUp] = useState();
    const[paid, setPaid] = useState(false)
    const[video, setVideo] = useState()
    const[VideoType, setVideoType] = useState()
    const[compSub, setCompSub]= useState(false)
    const { register, handleSubmit, watch, errors } = useForm();
    
    // console.log(`showbuild user data: ${JSON.stringify(userData.user_name)}`)
    const ShowReset = (re)=>{
        setCompSub(true)
        setShowType();
        setVideoType();
        setVideo();
        setPaid(false);
    }
    
    // function videoUploader (data , e){

    //     API.videoUpload({
    //         "videoData":data.videoLink
    //     }).catch(err => console.log(err))
        
    // }
    const token =  window.localStorage.getItem('tokens');
    const PaidOnChange = (data, e) =>{
        console.log("Paid function call.")
        
        if(data === "0"|| data === undefined||  data === 0|| data === ''||  data === 'undefined'||  data === null){
            console.log(data)
            console.log(`Set paid check`)
            setPaid(false)
            console.log(paid)
        }
        else{
            console.log(data)
            console.log(`Set paid check`)
            setPaid(true)
            console.log(paid)
        };
    };
        
    const oneMore = ()=>{
        setCompSub(false)
    }

    const onShowSubmit = (data, e) =>{
        console.log(data)
        if(showType === "episodical"){
            setEpisodical(true)
        }else if(showType === "one_off"){
            setOneOff(true)
        }
        const ShowUploader = () =>{
            API.createShow(token,{ 
            "show_name": data.showName,
            "show_type": showType,
            "about": data.about,
            "img": data.pImg,
            "img_b": data.bImg,
            "category": catType,
            "sub_category": data.subcategory,
            "video_type":VideoType,
            "v_link":video||data.videoLink,
            "host_id": userData.id, 
            "host_name": userData.user_name,
            "host_img": userData.p_img,
            "credits":data.credits,
            "show_date":'2020-08-23',
            "start_time":'11:27:00',
            "end_time":'12:27:00',
            "price":data.price,
            "payment": data.payment,
            'patreon':data.patreon,
            'wp_title': data.wpTitle,
            'webpage': data.webpage,
            'eighteen_plus':true,
            'booked':true,
            "paid":paid,
            "canceled":false, 
            "verified":false
            }).then(e.target.reset())
            .then(ShowReset())
            .catch(err => console.log(err));

        }
        if(showType === "one_off"){
            if(VideoType === "vimeo"){
                let videoHold = data.videoLink;
                // videoHold = videoHold.replace(/\/vimeo.com/,"/player.vimeo.com/video");
                videoHold = videoHold.replace(/https:\/\/vimeo.com\//,"/");
                console.log(`Video last index of ${videoHold.lastIndexOf('/')}`);
                if(videoHold.lastIndexOf('/') !== -1 && videoHold.lastIndexOf('/') !== 0 ){
                    videoHold = videoHold.substring(0, videoHold.lastIndexOf('/'));
                    videoHold = videoHold.replace(/\//,"https://player.vimeo.com/video/");
                    console.log(`Video hold with extra ${videoHold}`);
                    setVideo(videoHold);
                }
                else{
                    videoHold = videoHold.replace(/\//,"https://player.vimeo.com/video/");
                    console.log(`Video hold no extra ${videoHold}`);
                    setVideo(videoHold);
                };
            }
            else if( showType === "one_off" && VideoType === "youtube"){
                let videoHold = data.videoLink;
                videoHold = videoHold.replace(/\/youtu.be/,"/www.youtube.com/embed");
                console.log(`Video hold ${videoHold}`);
                setVideo(videoHold);
            }
            else if(VideoType === "twitch"){
                let videoHold = data.videoLink;
                videoHold = videoHold.replace(/\/www.twitch.tv\/videos/,"/player.twitch.tv");
                console.log(`Video hold ${videoHold}`);
                setVideo(videoHold);
            }
            else if(VideoType === "facebook"){
                let videoHold = data.videoLink;
                videoHold = videoHold.replace(/facebook\/videos\//,"plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F");
                console.log(`Video hold ${videoHold}`);
                setVideo(videoHold);
            }
            else{
                // add error here
            };
        }else{
            ShowUploader();
        };
        if(video){
            ShowUploader();
        }
    };

    return(
        <DivWBorder> 
        {/* <a id="signup"/> */}
        {/* Sign up form */}
        <MarronHeader>
            <H2>Show creation page!</H2>
        </MarronHeader>
        {oneOff && compSub && ( 
            <FormBoxWError>
                <H2 color="red">SHOW CREATED!</H2>
                <BigMarronBtn onClick={oneMore}>Add Another show.</BigMarronBtn>
            </FormBoxWError>
        )}
        {episodical && compSub && isManager && ( 
            <FormBoxWError>
                <H2 color="red">SHOW CREATED!</H2>
                <Link style={{ textDecoration: 'none'}} to="/episodebuilderm">
                    <BigMarronBtn>Add episodes to your show here!</BigMarronBtn>
                </Link>
                <PT color="red">OR</PT>
                <BigMarronBtn onClick={oneMore}>Add Another show.</BigMarronBtn>
            </FormBoxWError>
        )}
        {episodical && compSub && isHost &&( 
            <FormBoxWError>
                <H2 color="red">SHOW CREATED!</H2>
                <Link style={{ textDecoration: 'none'}} to="/episodebuilder">
                    <BigMarronBtn>Add episodes to your show here!</BigMarronBtn>
                </Link>
                <PT color="red">OR</PT>
                <BigMarronBtn onClick={oneMore}>Add Another show.</BigMarronBtn>
            </FormBoxWError>
        )}
        {!compSub &&(
            <FormBigBox>
            
                <PT>What kind of show would you like to make?</PT>
                {/* <PS>If your show is a live stream please choose episodical.</PS> */}
                <FormBoxWError>
                    <PT>Show type</PT>
                    <select name="showType" onChange={e => setShowType(e.target.value)}>
                        <option>choose one</option>
                        <option value="one_off">One off</option>
                        <option value="episodical">Episodical</option>
                        {/* <option value="ls_one_off">Livestream one off</option>
                        <option value="ls_episodical">Livestream episodical</option> */}
                    </select>
                </FormBoxWError>
                <PT>What WebPage this show belong in?</PT>
                <FormBoxWError>
                            <PT>category</PT>
                            <select name="category" onChange={e => setCatType(e.target.value)}>
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
            </FormBigBox>
        )}
        {showType && catType && !compSub && ( 
            <FormBigBox onSubmit={handleSubmit(onShowSubmit)}>
                {/* choose all that apply inluding "I'm not sure" */}
                {/* Might work better if it a select all that apply */}   
                {catType==="music" &&(
                    <FormBoxWError>
                        <PT>Sub-category</PT>
                        <select name="subcategory" ref ={register({required: true})}>
                            <option>choose one</option>
                            <option value="acoustic">Acoustic</option>
                            <option value="edm">E.D.M</option>
                            <option value="dj">DJ</option>
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
                        <select name="subcategory"  ref ={register({required: true})}>
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
                        <select name="subcategory"  ref ={register({required: true})}>
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
                        <select name="subcategory"  ref ={register({required: true})}>
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
                        <select name="subcategory"  ref ={register}>
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
                    {showType === "one_off" &&(
                        <FormBoxWError>
                            <PT>Video source</PT>
                            <select name="videoSource" onChange={e => setVideoType(e.target.value)}  ref={register({required: true})}>
                                <option>choose one</option>
                                <option value="vimeo">Vimeo</option>
                                <option value="youtube">YouTube</option>
                                {/* <option value="twitch">Twitch</option> */}
                            </select>
                            {errors.videoSource && errors.videoSource.type === "required" &&(<PE>This is required!</PE>)}
                        
                            {VideoType &&(
                                <div>
                                    <PT>Video link</PT>
                                    {/* <VimeoUp/> */}
                                    {/* Will inclued an example of exactly what you need to do. */}
                                    {/* <Input
                                        type="file"
                                        name="videoLink"
                                        onChange={videoUploader}
                                        ref={register}
                                    />  */}
                                    <Input
                                        name="videoLink"
                                        ref={register({required: true})}
                                    /> 
                                    {errors.videoLink && errors.videoLink.type === "required" &&(<PE>This is required!</PE>)}
                                    {/* {errors.videoLink && errors.videoLink.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)} */}
                                </div>
                            )}
                        </FormBoxWError>
                    )}
                    <FormBoxWError>
                        <PT>Payment Info</PT>
                        {/* Will inclued an example of exactly what you need to do. */}
                        <Input
                            name="payment"
                            ref ={register({required: true})}
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
                        /> 
                        {errors.patreon && errors.patreon.type === "required" &&(<PE>This is required!</PE>)}
                        {errors.patreon && errors.patreon.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                    </FormBoxWError>
                    {/* bulk text area. opition to hide text? */}
                    </FormLittleBox>
                    <FormLittleBox>
                    <FormBoxWError>
                        <PT>Price</PT>
                        <PS>If free input 0.</PS>
                        <PS>Pay wall isn't implimented yet.</PS>
                        {/* Will inclued an example of exactly what you need to do. */}
                        <Input
                            type="number"
                            name="price"
                            min='0' 
                            max='500000'
                            defaultValue = "0"
                            onChange = {e=> PaidOnChange(e.target.value)}
                            ref ={register}
                        /> 
                        {/* {errors.paypal && errors.paypal.type === "required" &&(<PE>This is required!</PE>)} */}
                        {/* {errors.paypal && errors.paypal.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)} */}
                    </FormBoxWError>
                    <FormBoxWError>
                            <PT>Show Image</PT>
                            {/* <Input
                                type="file"
                                name="pImg"
                                ref ={register({required: true})}
                            />  */}
                            <Input
                                name="pImg"
                                ref ={register({required: true})}
                            /> 
                            {errors.pImg && errors.pImg.type === "required" &&(<PE>This is required!</PE>)}
                            {errors.pImg && errors.pImg.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                            <PT>Background Image</PT>
                            {/* <Input
                                type="file"
                                name="bImg"
                                ref ={register}
                            />  */}
                            <Input
                                name="bImg"
                                ref ={register}
                            /> 
                            {errors.bImg && errors.bImg.type === "required" &&(<PE>This is required!</PE>)}
                            {errors.bImg && errors.bImg.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}                          
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
                    <FormBoxWError>
                        <PT>About</PT>
                        <TextArea 
                            rows="10"
                            cols="40"
                            placeholder="Anything you share is confidential"
                            name="about" 
                            ref ={register}   
                        /> 
                    </FormBoxWError>
                    <FormBoxWError>
                        <PT>Credits</PT>
                        <TextArea 
                            rows="10"
                            cols="40"
                            placeholder=""
                            name="credits" 
                            ref ={register}   
                        /> 
                    </FormBoxWError>
                </FormLittleBox>
            
                <FormLittleBox>
                    {/* contact info email... Name? DOB number */}
                    {/* submit button changes to teal when information is complete. pop up informs more info needed. */}
                    <FormBox>
                        <PT color="red">Double click to submit Show</PT>
                        <Btn type="submit" value="Submit">Submit show</Btn>
                        {/* disabled={disable} */}
                    </FormBox>
                
                </FormLittleBox>       
            </FormBigBox>
        )}      
        {/* {episodical && compSub && ( 
            <FormBoxWError>
                <Link style={{ textDecoration: 'none'}} to="/episodebuilder">
                    <BigMarronBtn>Add episodes to your show here!</BigMarronBtn>
                </Link>
            </FormBoxWError>
        )} */}
    </DivWBorder>
    )
}

export default ShowBuild;