import React, {useContext, useState, useEffect} from "react";
import {DivWBorder, MarronHeader,BigMarronBtn, H2, PT, PS} from "../../styles/homeStyle"
import { FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../styles/signUpOutStyles"
import API from "../../API/HostLogIn";
import {useForm} from 'react-hook-form';
import {UserInfoContext} from "../../context/heart"
// import {Link} from 'react-router-dom';
// import VimeoUp from '../../vimeo-upload/index'

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
// category, 
// sub_category, 
// paid, 
// price, 
// epi_date, 
// start_time, 
// end_time, 
// eighteen_plus, 
// verified

function EpiAdd (){
    const { userData } = useContext(UserInfoContext);
    // console.log(`showbuild user data: ${JSON.stringify(userData.user_name)}`)
    const[Show, setShow] = useState();
    const[shows, setShows] = useState([]);
    const[shSelect, setShSelect] = useState(false)
    const[Epi, setEpi] = useState();
    const[epis, setEpis] = useState([])
    const[VideoType, setVideoType] = useState();
    const[paid, setPaid] = useState(false);
    const[video, setVideo] = useState();
    const[compSub, setCompSub]= useState(false)
    const { register, handleSubmit, errors } = useForm();
    const token = window.localStorage.getItem('tokens');

    const EpiReset = (re)=>{
        setVideoType()
        setVideo();
        setPaid(false)
        setCompSub(true)
        setShow()
    }
    
    useEffect(() => {
       const fetchShows = async () =>{
        const result = await API.getShowsByEpisHID(token,`${userData.id}`)
            console.log(`show by host id and epis data ${JSON.stringify(result.data)}`)
            setShows(result.data)
        };
        fetchShows(); 
    }, []);


    const showClear = () =>{
        setEpi();
        setEpis();
        setShow();
        setVideoType();
        setVideo();
    }

    const showUpdate = (showData) =>{
        setShow(showData);
        setShSelect(true); 

    }
    const showOnChange = async (showData)=>{
       await showClear();
       if(showData !== ""){
           showUpdate(showData)
       }
    }

    const epiClear = () =>{
        setEpi();
        setVideoType();
        setVideo();
    }

    const epiUpdate =(epiData)=>{
        setVideoType(epis[epiData].video_type)
        setVideo(epis[epiData].v_link)
        setEpi(epiData);
    }

    const episOnChange = async (epiData) =>{
        await epiClear()
        if(epiData !== ""){
            epiUpdate(epiData)
        }

    }
    const vLinkOnchange = (input)=>{
        setVideo();
    }

    if (Show && shSelect === true){
        const fetchEpis = async () =>{
            const result = await API.getFullEpisBySId(token,`${shows[Show].id}`)
            console.log(`Epis by show ${JSON.stringify(result.data)}`)
            setEpis(result.data);
            setShSelect(false)
        };
        fetchEpis(); 
    }


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
        console.log(data);
        console.log(paid);
        const EpiUploader = ()=>{
            API.updateEpi(
                epis[Epi].id,
                token,{ 
                "show_id":shows[Show].id,
                "user_id":userData.id,
                "epi_name": data.epiName,
                "about": data.about,
                "img": data.Img,
                "video_type":VideoType,
                'v_link':video,
                "credits":data.credits,
                "show_name":shows[Show].show_name,
                "host_name":userData.user_name,
                "category": shows[Show].category,
                "sub_category":shows[Show].sub_category,
                "paid": paid,
                "price": data.price,
                "epi_data":"2020-08-23",
                "start_time":'00:30:00',
                "end_time": '01:30:00',
                "eighteen_plus":false, 
            })
            .then(e.target.reset())
            .then(EpiReset())
            .catch(err => console.log(err));
        };
        if(video){
            EpiUploader();
        }
        else if(VideoType === "vimeo"){
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
        else if(VideoType === "youtube"){
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
        };
      
    };

    return(
        <DivWBorder> 
        {/* <a id="signup"/> */}
        {/* Sign up form */}
        <MarronHeader>
            <H2>Episode Update page</H2>
        </MarronHeader>
        <FormBigBox>
         {/* DONT TOUCH VVV */}
         <br></br>
            <PT>What show does this episode belong to?</PT>
            <FormBoxWError>
                <PT>Select a show</PT>
                <select name="ShowChoice" onChange={e => showOnChange(e.target.value)} ref={register({required: true})}>
                    <option>Choose one</option>
                {shows.map((show, key) => (
                    <option 
                    value={key}
                    >{show.show_name}</option>
                ))}
                </select>
                {errors.ShowChoice && errors.ShowChoice.type === "required" &&(<PE>This is required!</PE>)}
            </FormBoxWError>
        {Show && epis && !shSelect && (
            <FormBoxWError>
                <PT>Select an Episode</PT>
                <select name="epiChoice" onChange={e => episOnChange(e.target.value)} ref={register({required: true})}>
                    <option>Choose one</option>
                {epis.map((epi, key) => (
                    <option 
                    value={key}
                    >{epi.epi_name}</option>
                ))}
                </select>
                {errors.ShowChoice && errors.ShowChoice.type === "required" &&(<PE>This is required!</PE>)}
            </FormBoxWError>
            )}
          
        </FormBigBox>
        {compSub && (
            <FormBoxWError>
                <H2 color="red">EPISODE CREATED!</H2>
                <H2 color="red">You can add more episodes if you like</H2>
                <BigMarronBtn onClick={oneMore}>Add another Episode.</BigMarronBtn>
            </FormBoxWError>
        )}
        {/* form starts here */}
    
        {Show && Epi && !compSub && ( 
            <FormBigBox onSubmit={handleSubmit(onShowSubmit)}>
                {/* <p>{`show ID: ${JSON.stringify(Show)}`}</p> */}
                {/* choose all that apply inluding "I'm not sure" */}
                {/* Might work better if it a select all that apply */}   
               
                <FormLittleBox>
                    <FormBoxWError>
                            <PT>Episode Name</PT>
                            <Input
                                name="epiName"
                                defaultValue={epis[Epi].epi_name}
                                ref ={register({required: true})}
                            /> 
                            {errors.epiName && errors.epiName.type === "required" &&(<PE>This is required!</PE>)}
                            {/* {errors.epiName && errors.epiName.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)} */}
                    </FormBoxWError>
                    
                    <FormBoxWError>
                        <div>
                            <PT>Video source</PT>
                            <select name="videoSource" defaultValue={epis[Epi].video_type} onChange={e => setVideoType(e.target.value)}  ref={register({required: true})}>
                                <option>choose one</option>
                                <option value="vimeo">Vimeo</option>
                                <option value="youtube">YouTube</option>
                                {/* <option value="twitch">Twitch</option> */}
                            </select>
                            {errors.videoSource && errors.videoSource.type === "required" &&(<PE>This is required!</PE>)}
                        </div>
                        
                        {VideoType &&(
                            <div>
                                <PT>Video link</PT>
                                {/* <VimeoUp
                                //     name="videoLink"
                                //     ref ={register}
                                // /> */}
                                {/* Will inclued an example of exactly what you need to do. */}
                                <Input
                                    name="videoLink"
                                    defaultValue={epis[Epi].v_link}
                                    onChange={e=> vLinkOnchange(e.target.value) }
                                    ref ={register}
                                /> 
                                {errors.videoLink && errors.videoLink.type === "required" &&(<PE>This is required!</PE>)}
                            </div>
                        )}
                    </FormBoxWError>
                    <FormBoxWError>
                        <PT>Episode Image</PT>
                        <Input
                            name="Img"
                            defaultValue={epis[Epi].img}
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
                        <PS>If free input 0.</PS>
                        <PS>Pay wall isn't implimented yet.</PS>

                        {/* Will inclued an example of exactly what you need to do. */}
                        <Input
                            type="number"
                            name="price"
                            min='0' 
                            max='500000'
                            defaultValue={epis[Epi].price}
                            onChange = {e=> PaidOnChange(e.target.value)}
                            ref ={register({required: true})}
                        /> 
                        {errors.price && errors.price.type === "required" &&(<PE>This is required!</PE>)}
                        {/* {errors.paypal && errors.paypal.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)} */}
                    </FormBoxWError>
                <FormLittleBox>
                    <FormBoxWError>
                        <PT>About</PT>
                        <TextArea 
                            rows="10"
                            cols="40"
                            placeholder="Tell us about your show"
                            defaultValue={epis[Epi].about}
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
                            defaultValue={epis[Epi].credits}
                            name="credits" 
                            ref ={register}   
                        /> 
                    </FormBoxWError>
                </FormLittleBox>
                <FormLittleBox>
                    {/* contact info email... Name? DOB number */}
                    {/* submit button changes to teal when information is complete. pop up informs more info needed. */}
                    <FormBox>
                        <PT color="red">Double click to submit episode</PT>
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