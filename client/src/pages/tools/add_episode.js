import React, {useContext, useState, useEffect} from "react";
import {DivWBorder, MarronHeader, MarronBtn, BigMarronBtn, H2, PT, PS} from "../../styles/homeStyle"
import { FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../styles/signUpOutStyles"
import API from "../../API/HostLogIn";
import {useForm} from 'react-hook-form';
import {UserInfoContext, useHost, useManagment} from "../../context/heart"
import {Link} from 'react-router-dom';
// H = userData, Y= form ie data, S = showData, N doesn't need to be implimnted
// X = already built, B= Boolean
// epi_name, Y 
// about, Y
// show_id, S 
// show_name, S 
// img, Y
// catagory, S 
// sub_catagory, S
// host_id, H
// host_name, H 
// b_img, Y 
// credits, N
// price, N
// payment, X
// patreon, X
// wp_title, X
// webpage, X
// v_link, Y/X
// show_date, Y
// start_time, Y
// end_time, Y
// eighteen_plus, N B
// booked, N B
// paid, N B
// canceled, N B
// entertain, N B
// couns, N B
// relig N B
function EpiAdd (){
    const { userData } = useContext(UserInfoContext);
    const {isManager} = useManagment();
    const { isHost } = useHost();
    console.log(`showbuild user data: ${JSON.stringify(userData.user_name)}`)
// id, user_name, user_type, mhswitch, dob, email, password, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig, timestamp
    const[showType, setShowType] = useState();
    const[Show, setShow] = useState();
    const[episodical, setEpisodical] = useState();
    const[catType, setCatType] = useState();
    const[shows, setShows] = useState([])
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
        console.log(`Chosen Show date:${JSON.stringify(Show)}`)
    }
    
    const onShowSubmit = (data, e) =>{
        console.log(data)
        if(showType === "episodical"){
            setEpisodical(true)
        }
     
        API.createEpisode({ 
            "epi_name": data.showName,
            "about": showType,
            "show_id": data.about,
            "show_name": data.pImg,
            "img": data.bImg,
            "catagory": data.catagory,
            "sub_catagory": data.subcatagory,
            "b_img": userData.id, 
            "credits": userData.user_name,
            "price": userData.p_img,
            "payment": data.paypal,
            'patreon':data.patreon,
            'wp_title': data.wpTitle,
            'webpage': data.webpage,
            'v_link':data.videoLink||"",
            'show_date':true,
            'start_time':true,
            "end_time":false,
            "eighteen_plus":false, 
            "booked":false,
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
            <H2>Episode creation page</H2>
        </MarronHeader>
        <FormBigBox>
         
            <PT>What show does this episode belong to?</PT>
            <FormBoxWError>
                <PT>Select a show</PT>
                <select name="showType" onChange={e => setShow(e.target.value)}>
                    <option>Choose one</option>
                {shows.map((show, key) => (
                    <option 
                    value={{
                    id:show.id, 
                    showName:show.show_name, 
                    showType:show.show_type, 
                    category:show.catagory, 
                    subCategory:show.sub_catagory
                    }}
                    >{show.show_name}</option>
                ))}
                </select>
            </FormBoxWError>

        </FormBigBox>
        {/* form starts here */}
        {Show && ( 
            <FormBigBox onSubmit={handleSubmit(onShowSubmit)}>
                <p>show ID{JSON.stringify(Show.showName)}</p>
                {/* choose all that apply inluding "I'm not sure" */}
                {/* Might work better if it a select all that apply */}   
               
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
        {/* FORM ENDS HERE */}
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

export default EpiAdd;