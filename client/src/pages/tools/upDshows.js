import React, {useContext, useState, useEffect} from "react";
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
    const [isPulled, setIsPulled] = useState();
    const {isManager} = useManagment();
    const { isHost } = useHost();
    const[Show, setShow] = useState();;
    const[shows, setShows] = useState([]);
    const[showType, setShowType] = useState();
    const[episodical, setEpisodical] = useState();
    const[oneOff, setOneOff] = useState();
    const[catType, setCatType] = useState();
    const[subCat, setSubCat] = useState();
    // const[videoUp, setVideoUp] = useState();
    const[paid, setPaid] = useState(false)
    const[video, setVideo] = useState()
    const[VideoType, setVideoType] = useState()
    const[compSub, setCompSub]= useState(false)
    const token =  window.localStorage.getItem('tokens');
    const { register, handleSubmit, errors } = useForm();
    // console.log(`showbuild user data: ${JSON.stringify(userData.user_name)}`)

    const ShowReset = (re)=>{
        setCompSub(true)
        setShowType();
        setVideoType();
        setVideo();
        setShow();
        setPaid(false);
        setSubCat();
        setCatType();
        setShows()
    }
    const fetchShows = async () =>{
        const result = await API.getShowsByHostID(token,`${userData.id}`)
        //  console.log(`show by host id and epis data ${JSON.stringify(result.data)}`)
        setShows(result.data)
        setIsPulled(true);
    };

    useEffect(() => {
         fetchShows();  
    }, []);


    const showClear = () =>{
        setShow();
        setShowType();
        setSubCat();
        setCatType();
        setEpisodical();
        setVideoType();
        setVideo();
        setOneOff();
    }

    const showUpdate = (showData) =>{
        setShowType(shows[showData].show_type)
        setVideoType(shows[showData].video_type)
        setVideo(shows[showData].v_link)
        setShow(showData)
        setSubCat(shows[showData].sub_category)
        setCatType(shows[showData].category)
        
    }
    const showOnChange = async (showData) =>{
        console.log(`Show Data input: ${showData}`)
        await showClear()
        if(showData !== ""){
            showUpdate(showData) 
        }
       
    }

    const vLinkOnchange = (input)=>{
        setVideo();
    }
    // function videoUploader (data , e){
    //     API.videoUpload({
    //         "videoData":data.videoLink
    //     }).catch(err => console.log(err))
    // }
    
    const PaidOnChange = (data, e) =>{
        // console.log("Paid function call.")
        if(data === "0"|| data === undefined||  data === 0|| data === ''||  data === 'undefined'||  data === null){
            // console.log(data)
            console.log(`Set paid false check`)
            setPaid(false)
            // console.log(paid)
        }
        else{
            // console.log(data)
            console.log(`Set paid check`)
            setPaid(true)
            // console.log(paid)
        };
    };
        
    const oneMore = async()=>{
        await fetchShows();
        setCompSub(false);
    };

    const onShowSubmit = (data, e) =>{
        // console.log(data)
        if(showType === "episodical"){
            setEpisodical(true)
        }else if(showType === "one_off"){
            setOneOff(true)
        }
        const ShowUploader = () =>{
            console.log(`Show update show Id:${shows[Show].id}`)
            console.log(`Show update token: ${token}`)
            API.updateShow(
                shows[Show].id,
                token,
                { 
                    "show_name": data.showName,
                    "show_type": shows[Show].show_type,
                    "about": data.about,
                    "img": data.pImg,
                    "img_b": data.bImg,
                    "category": catType,
                    "sub_category": data.subcategory,
                    "video_type":VideoType,
                    "v_link":video||data.videoLink,
                    "host_id": userData.id, 
                    "credits":data.credits,
                    "price":data.price,
                    "payment": data.payment,
                    'patreon':data.patreon,
                    'wp_title': data.wpTitle,
                    'webpage': data.webpage,
                    'eighteen_plus':shows[Show].eighteen_plus,
                    'booked':shows[Show].booked,
                    "paid":paid,
                    "canceled":shows[Show].canceled, 
                }).then(e.target.reset())
                .then(ShowReset())
                .catch(err => console.log(err));
        }
        if(showType === "one_off"){
            if(video){
                ShowUploader();
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
    };

    return(
        <DivWBorder> 
        {/* <a id="signup"/> */}
        {/* Sign up form */}
        <MarronHeader>
            <H2>Show Update page!</H2>
        </MarronHeader> 
        <div>
            {oneOff && compSub &&  ( 
                <FormBoxWError>
                    <H2 color="red">Show Updated!</H2>
                    <BigMarronBtn onClick={oneMore}>Update Another Show.</BigMarronBtn>
                </FormBoxWError>
            )}
            {episodical && compSub && isManager && ( 
                <FormBoxWError>
                    <H2 color="red">Show Updated!</H2>
                    <Link style={{ textDecoration: 'none'}} to="/episodebuilderm">
                        <BigMarronBtn>Add episodes to your show here!</BigMarronBtn>
                    </Link>
                    <PT color="red">OR</PT>
                    <BigMarronBtn onClick={oneMore}>Update Another Show.</BigMarronBtn>
                </FormBoxWError>
            )}
            {episodical && compSub && isHost &&( 
                <FormBoxWError>
                    <H2 color="red">Show Updated!</H2>
                    <Link style={{ textDecoration: 'none'}} to="/episodebuilder">
                        <BigMarronBtn>Add episodes to your show here!</BigMarronBtn>
                    </Link>
                    <PT color="red">OR</PT>
                    <BigMarronBtn onClick={oneMore}>Update Another Show.</BigMarronBtn>
                </FormBoxWError>
            )}
        </div>        
        {isPulled && !compSub &&(
            <div>
            <FormBigBox>
                <FormBoxWError>
                    <PT>Select a show</PT>
                    <select name="ShowChoice" onChange={e => showOnChange(e.target.value)} ref={register({required: true})}>
                        <option value="">Choose one</option>
                        {shows.map((show, key) => (
                            <option 
                            value={key}
                            >{show.show_name}</option>
                        ))}
                    </select>
                    {errors.ShowChoice && errors.ShowChoice.type === "required" &&(<PE>This is required!</PE>)}
                </FormBoxWError>
                {!compSub && Show &&(
                    <div>
                    {/* <PT>Changing from One off to episodicle will </PT>
                    <FormBoxWError>
                        <PT>Show type</PT>
                        <PS>{shows[Show].show_type}!</PS>
                        <select name="showType" defaultValue={shows[Show].show_type} onChange={e => setShowType(e.target.value)}>
                            <option>choose one</option>
                            <option value="one_off">One off</option>
                            <option value="episodical">Episodical</option>
                            <option value="ls_one_off">Livestream one off</option>
                            <option value="ls_episodical">Livestream episodical</option>
                        </select>
                    </FormBoxWError> */}
                    <FormBoxWError>
                            <PT>category</PT>
                            <select name="category" defaultValue={shows[Show].category} onChange={e => setCatType(e.target.value)} ref ={register({required: true})}>
                                <option>choose one</option>
                                <option value="music">Music</option>
                                <option value="performance">Performance Art</option>
                                <option value="visual">Visual Art</option>
                                <option value="life">Life</option>
                                <option value="spiritual">Spiritual Guidance</option>
                            </select>
                            {errors.category && errors.category.type === "required" &&(<PE>This is required!</PE>)} 
                        </FormBoxWError>
                    </div>
                )}            
            </FormBigBox>
       
                {!compSub && Show &&( 
                    <FormBigBox onSubmit={handleSubmit(onShowSubmit)}>
                        {/* choose all that apply inluding "I'm not sure" */}
                        {/* Might work better if it a select all that apply */}  
                        <PT>Show type: {shows[Show].show_type}</PT> 
                        {catType==="music" && subCat &&(
                            <FormBoxWError>
                                <PT>Sub-category</PT>
                                <PS>Original: {subCat}</PS>
                                <select name="subcategory" defaultValue={subCat} ref ={register({required: true})}>
                                    <option>choose one</option>
                                    <option value="acoustic">Acoustic</option>
                                    <option value="edm">E.D.M</option>
                                    <option value="dj">DJ</option>
                                    <option value="variety">Variety show</option>
                                    <option value="educate">Educational</option>
                                    <option value="blog">Personal Blog</option>
                                </select>
                                {errors.subcategory && errors.subcategory.type === "required" &&(<PE>This is required!</PE>)} 
                                {/* {errors.subcategory && errors.subcategory.type === "validate" &&(<PE>Passwords must match</PE>)}  */}
                            </FormBoxWError>
                        )}
                        {catType==="performance" && subCat &&(
                            <FormBoxWError>
                                <PT>Sub-category</PT>
                                <PS>Original: {subCat}</PS>
                                <select name="subcategory" defaultValue={subCat} ref ={register({required: true})}>
                                    <option>choose one</option>
                                    <option value="story">Story arched</option>
                                    <option value="play">Play</option>
                                    <option value="mixed">Mixed Media</option>
                                    <option value="variety">Variety show</option>
                                    <option value="educate">Educational</option>
                                    <option value="blog">Personal Blog</option>  
                                </select>
                                {errors.subcategory && errors.subcategory.type === "required" &&(<PE>This is required!</PE>)} 
                                {/* {errors.subcategory && errors.subcategory.type === "validate" &&(<PE>Passwords must match</PE>)}  */}
                            </FormBoxWError>
                        )}
                        {catType==="visual" &&subCat &&(
                            <FormBoxWError>
                                <PT>Sub-category</PT>
                                <PS>Original: {subCat}</PS>
                                <select name="subcategory" defaultValue={shows[Show].sub_category} ref ={register({required: true})}>
                                    <option>choose one</option>
                                    <option value="analog">Analog</option>
                                    <option value="digital">Digital</option>
                                    <option value="mixed">Mixed Media</option>
                                    <option value="variety">Variety Show</option>
                                    <option value="educate">Educational</option>
                                    <option value="blog">Personal Blog</option>   
                                </select>
                                {errors.subcategory && errors.subcategory.type === "required" &&(<PE>This is required!</PE>)} 
                                {/* {errors.subcategory && errors.subcategory.type === "validate" &&(<PE>Passwords must match</PE>)}  */}
                            </FormBoxWError>
                        )}           
                        {catType==="life" && subCat &&(
                            <FormBoxWError>
                                <PT>Sub-category</PT>
                                <PS>Original: {subCat}</PS>
                                <select name="subcategory" defaultValue={shows[Show].sub_category} ref={register({required: true})}>
                                    <option>choose one</option>
                                    <option value="counseling">Counseling</option>
                                    <option value="cooking">Cooking</option>
                                    <option value="lifehack">Life hacks</option>
                                    <option value="variety">Variety Show</option>
                                    <option value="educate">Educational</option>
                                    <option value="blog">Personal Blog</option>   
                                </select>
                                {errors.subcategory && errors.subcategory.type === "required" &&(<PE>This is required!</PE>)} 
                                {/* {errors.subcategory && errors.subcategory.type === "validate" &&(<PE>Passwords must match</PE>)}  */}
                            </FormBoxWError>
                        )}
                        {catType==="spiritual" && subCat &&(
                            <FormBoxWError>
                                <PT>Sub-category</PT>
                                <PS>Original: {subCat}</PS>
                                <select name="subcategory" defaultValue={shows[Show].sub_category} ref ={register({required: true})}>
                                    <option>choose one</option>
                                    <option value="guide">Guidance/Sermon/Prayer</option>
                                    <option value="spells">Spells</option>
                                    <option value="readings">Readings</option>
                                    <option value="variety">Variety Show</option>
                                    <option value="educate">Educational</option>
                                    <option value="blog">Personal Blog</option>
                                </select>
                                {errors.subcategory && errors.subcategory.type === "required" &&(<PE>This is required!</PE>)} 
                                {/* {errors.subcategory && errors.subcategory.type === "validate" &&(<PE>Passwords must match</PE>)}  */}
                            </FormBoxWError>
                        )}
                        <FormLittleBox>
                            <FormBoxWError>
                                    <PT>Show Name</PT>
                                    <Input
                                        name="showName"
                                        defaultValue={shows[Show].show_name}
                                        ref ={register({required: true})}
                                    /> 
                                    {errors.showName && errors.showName.type === "required" &&(<PE>This is required!</PE>)}
                                    {errors.showName && errors.showName.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                            </FormBoxWError>
                            {showType === "one_off" &&(
                                <FormBoxWError>
                                    <PT>Video source</PT>
                                    <select name="videoSource" defaultValue={shows[Show].video_type} onChange={e => setVideoType(e.target.value)}  ref={register()}>
                                        <option value="vimeo">Vimeo</option>
                                        <option value="youtube">YouTube</option>
                                        {/* <option value="twitch">Twitch</option> */}
                                    </select>
                                    {errors.videoSource && errors.videoSource.type === "required" &&(<PE>This is required!</PE>)}
                                
                                    
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
                                                defaultValue={shows[Show].v_link}
                                                onChange={e => vLinkOnchange(e.target.value)}
                                                
                                                ref={register({required: true})}
                                            /> 
                                            {errors.videoLink && errors.videoLink.type === "required" &&(<PE>This is required!</PE>)}
                                            {/* {errors.videoLink && errors.videoLink.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)} */}
                                        </div>
                                </FormBoxWError>
                            )}
                            <FormBoxWError>
                                <PT>Payment Info</PT>
                                {/* Will inclued an example of exactly what you need to do. */}
                                <Input
                                    name="payment"
                                    defaultValue={shows[Show].payment}
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
                                    defaultValue={shows[Show].patreon}
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
                                        defaultValue={shows[Show].price}
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
                                        defaultValue={shows[Show].img}
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
                                        defaultValue={shows[Show].img_b}
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
                                        defaultValue={shows[Show].wp_title}
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
                                        defaultValue={shows[Show].webpage}
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
                                    defaultValue={shows[Show].about}
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
                                    defaultValue={shows[Show].credits}
                                    ref ={register}   
                                /> 
                            </FormBoxWError>
                        </FormLittleBox>
                    
                        <FormLittleBox>
                            {/* contact info email... Name? DOB number */}
                            {/* submit button changes to teal when information is complete. pop up informs more info needed. */}
                            <FormBox>
                                {showType === "one_off" &&(
                                    <PT color="red">Double click to submit Show</PT>
                                )}
                                <Btn type="submit" value="Submit">Submit show</Btn>
                                {/* disabled={disable} */}
                            </FormBox>
                        
                        </FormLittleBox>       
                    </FormBigBox>
                )}  
            </div>   
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