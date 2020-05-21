import React, {useContext, useState, useEffect} from "react";
import {DivWBorder, MarronHeader, MarronBtn, BigMarronBtn, H2, PT, PS} from "../../styles/homeStyle"
import { FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../styles/signUpOutStyles"
import API from "../../API/HostLogIn";
import {useForm} from 'react-hook-form';
import {UserInfoContext, useHost, useManagment} from "../../context/heart"
import {Link} from 'react-router-dom';
import VimeoUp from '../../vimeo-upload/index'

// H = userData, Y= form ie data, S = showData, N doesn't need to be implimnted
// X = already built, B= Boolean
// show_id, 
// user_id, 
// epi_name, 
// about, 
// img, 
// video_type, 
// v_link, 
// credits, 
// show_name, 
// host_name, 
// catagory, 
// sub_catagory, 
// paid, 
// price, 
// epi_date, 
// start_time, 
// end_time, 
// eighteen_plus, 
// verified

// (
// 'Zevs Test episode',
// 'I made this',
// 38,
// 'zevs test',
// 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/37112608_10155733091650745_697307413887320064_o.jpg?_nc_cat=102&_nc_sid=e3f864&_nc_ohc=1KnyLqphPkcAX9eStd-&_nc_ht=scontent-sjc3-1.xx&oh=d4b3247498ae7f7f6c4ed7d3fc779748&oe=5EEA9E58',
// 'performance',
// NULL,
// NULL,
// 'ZevUbu',
// NULL,
// '',
// '12',
// NULL,
// NULL,
// NULL,
// NULL,
// 'https://player.vimeo.com/video/417439888',
// NULL,
// '00:30:00')
function EpiAdd (){
    const { userData } = useContext(UserInfoContext);
    const { isManager } = useManagment();
    const { isHost } = useHost();
    // console.log(`showbuild user data: ${JSON.stringify(userData.user_name)}`)
    const[Show, setShow] = useState();
    const[shows, setShows] = useState([])
    const[VideoType, setVideoType] = useState()
    const[paid, setPaid] = useState(false)
    const[video, setVideo] = useState()
    const { register, handleSubmit, watch, errors } = useForm();
    useEffect(() => {
       const fetchShows = async () =>{
        const result = await API.getShowsByEpisHID(`${userData.id}`)
            console.log(`show by host id and epis data ${JSON.stringify(result.data)}`)
            setShows(result.data)
        };
        fetchShows(); 
    }, []);

    if(Show){
        console.log(Show)
        console.log(shows[Show].id)
    }
    const PaidOnChange = (data, e) =>{
        console.log(`price data: ${data[0]}`)
        if(data !== "0"){
            console.log(`Set paid check`)
            setPaid(true)
        }
        else{
            setPaid(false)
        }
    }
    
    const onShowSubmit = (data, e) =>{
        console.log(data)
        if(VideoType === "vimeo"){
            let videoHold = data.videoLink
            videoHold = videoHold.replace(/\/vimeo.com/,"/player.vimeo.com/video")
            console.log(`Video hold ${videoHold}`)
            setVideo(videoHold);
        }
        else if(VideoType === "youtube"){
            let videoHold = data.videoLink
            videoHold = videoHold.replace(/\/youtu.be/,"/www.youtube.com/embed")
            console.log(`Video hold ${videoHold}`)
            setVideo(videoHold)
        }
        else if(VideoType === "twitch"){
            let videoHold = data.videoLink
            videoHold = videoHold.replace(/\/www.twitch.tv\/videos/,"/player.twitch.tv")
            console.log(`Video hold ${videoHold}`)
            setVideo(videoHold)
        }


     
        API.createEpisode({ 
            "show_id":shows[Show].id,
            "user_id":userData.id,
            "epi_name": data.epiName,
            "about": data.about,
            "img": data.Img,
            "video_type":VideoType,
            'v_link':video,
            "credits":'',
            "show_name":shows[Show].show_name,
            "host_name":userData.user_name,
            "catagory": shows[Show].catagory,
            "sub_catagory":shows[Show].sub_catagory,
            "paid": paid,
            "price": data.price,
            "epi_data":"2020-08-23",
            "start_time":'00:30:00',
            "end_time": '01:30:00',
            "eighteen_plus":false, 
            "verified":true,
            }).then(e.target.reset())
            .catch(err => console.log(err))
    }

    return(
        <DivWBorder> 
        {/* <a id="signup"/> */}
        {/* Sign up form */}
        <MarronHeader>
            <H2>Episode creation page</H2>
        </MarronHeader>
        <FormBigBox>
        
         {/* DONT TOUCH VVV */}
            <PT>What show does this episode belong to?</PT>
            <FormBoxWError>
                <PT>Select a show</PT>
                <select name="showType" onChange={e => setShow(e.target.value)}>
                    <option>Choose one</option>
                {shows.map((show, key) => (
                    <option 
                    value={key}
                    >{show.show_name}</option>
                ))}
                </select>
            </FormBoxWError>

        </FormBigBox>
        {/* form starts here */}
    
        {Show && ( 
            <FormBigBox onSubmit={handleSubmit(onShowSubmit)}>
                {/* <p>{`show ID: ${JSON.stringify(Show)}`}</p> */}
                {/* choose all that apply inluding "I'm not sure" */}
                {/* Might work better if it a select all that apply */}   
               
                <FormLittleBox>
                    <FormBoxWError>
                            <PT>Episode Name</PT>
                            <Input
                                name="epiName"
                                ref ={register({required: true})}
                            /> 
                            {errors.epiName && errors.epiName.type === "required" &&(<PE>This is required!</PE>)}
                            {/* {errors.epiName && errors.epiName.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)} */}
                    </FormBoxWError>
                    
                    <FormBoxWError>
                            <PT>Video source</PT>
                            <select name="videoType" onChange={e => setVideoType(e.target.value)}>
                                <option>choose one</option>
                                <option value="vimeo">Vimeo</option>
                                <option value="youtube">YouTube</option>
                                <option value="twitch">Twitch</option>
                            </select>
                              {errors.videoType && errors.videoType.type === "required" &&(<PE>This is required!</PE>)}
                            {VideoType==="vimeo" &&(
                                <div>
                                    <PT>Video link</PT>
                                    {/* <VimeoUp
                                    //     name="videoLink"
                                    //     ref ={register}
                                    // /> */}
                                    {/* Will inclued an example of exactly what you need to do. */}
                                    <Input
                                        name="videoLink"
                                        ref ={register}
                                    /> 
                                    {errors.videoLink && errors.videoLink.type === "required" &&(<PE>This is required!</PE>)}
                                </div>
                            )}
                            {VideoType==="youtube" &&(
                                <div>
                                    <PT>Video link</PT>
                                    {/* <VimeoUp
                                    //     name="videoLink"
                                    //     ref ={register}
                                    // /> */}
                                    {/* Will inclued an example of exactly what you need to do. */}
                                    <Input
                                        name="videoLink"
                                        ref ={register}
                                    /> 
                                    {errors.videoLink && errors.videoLink.type === "required" &&(<PE>This is required!</PE>)}
                                </div>
                            )}
                            {VideoType==="twitch" &&(
                                <div>
                                    <PT>Video link</PT>
                                    {/* <VimeoUp
                                    //     name="videoLink"
                                    //     ref ={register}
                                    // /> */}
                                    {/* Will inclued an example of exactly what you need to do. */}
                                    <Input
                                        name="videoLink"
                                        ref ={register}
                                    /> 
                                    {errors.videoLink && errors.videoLink.type === "required" &&(<PE>This is required!</PE>)}
                                </div>
                            )}
                           
                            {/* {errors.videoLink && errors.videoLink.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)} */}
                        </FormBoxWError>
                        <FormBoxWError>
                            <PT>Episode Image</PT>
                            <Input
                                name="Img"
                                ref ={register({required: true})}
                            /> 
                            {/* <Input
                                type="file"
                                name="Img"
                                ref ={register({required: true})}
                            />  */}
                            {errors.Img && errors.Img.type === "required" &&(<PE>This is required!</PE>)}
                            {/* {errors.PImg && errors.pImg.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}*/}
                    </FormBoxWError>
                    {/* bulk text area. opition to hide text? */}
                </FormLittleBox>
                    <FormBoxWError>
                        <PT>Price</PT>
                        <PS>Pay wall isn't implimented yet.</PS>
                        {/* Will inclued an example of exactly what you need to do. */}
                        <Input
                            type="number"
                            name="price"
                            onChange = {e=> PaidOnChange(e.target.value)}
                            ref ={register({required: true})}
                        /> 
                        {/* {errors.paypal && errors.paypal.type === "required" &&(<PE>This is required!</PE>)} */}
                        {/* {errors.paypal && errors.paypal.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)} */}
                    </FormBoxWError>

                <FormLittleBox>
                    <FormBoxWError>
                        <PT>About</PT>
                        <TextArea 
                            rows="10"
                            cols="40"
                            placeholder="Tell us about your show"
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
                            name="about" 
                            ref ={register}   
                        /> 
                    </FormBoxWError>
                </FormLittleBox>
                <FormLittleBox>
                    {/* contact info email... Name? DOB number */}
                    {/* submit button changes to teal when information is complete. pop up informs more info needed. */}
                    <FormBox>
                        <Btn type="submit" value="Submit">Submit Episode</Btn>
                        {/* disabled={disable} */}
                    </FormBox>
                
                </FormLittleBox>       
            </FormBigBox>
        )}      
        {/* FORM ENDS HERE */}
    </DivWBorder>
    )
}

export default EpiAdd;