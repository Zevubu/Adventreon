import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import API from "../../API/loggedOutAPI";
import {P, H1, H3, SpHeaderA, H2} from "../../styles/homeStyle"
import{ProBigBox, ProviderBox, ProDuoServiceBlock, ProDuoServiceBlockColumn, ProImage, ProTextBox} from '../../styles/providerStyles'
import SliderFiller from "../../componets/ShowFiller/slide_filler"
import Carousel from '@brainhubeu/react-carousel';
import '../../styles/Carousel.css';
// import '@brainhubeu/react-carousel/lib/style.css';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//  user_name,x
//  user_type, 
//  dob,  
//  title,x 
//  about,x 
//  p_img, x
//  b_img, 
//  shows, 
//  payment, x
//  patreon, x
//  wp_title, x
//  webpage, x
//  video_channel, 
//  rsvp_attend, 
//  rsvp_perform, 
//  entertain, 
//  couns, 
//  relig

function HostPage(){
    let { id } = useParams();
    console.log(`TESTING ID TEST ${id}`)
    const [Host, setHosts] = useState([]);
    const [shows, setShows] = useState([]);
    const matches = useMediaQuery('(min-width:600px)');
    const num = matches ? 5 : 1
    const scNum = matches ? 4 : 1
    // const [services, setServices] = useState([])

    useEffect(() => {
        const fetchHost = async () =>{
         const result = await API.getHostByID(`${id}`)
             setHosts(result.data[0])
           
         };
         const fetchShows = async () =>{
            const result = await API.getShowByHost(`${id}`)
                console.log(result.data)
                setShows(result.data)
              
            };
         fetchHost(); 
         fetchShows();
     }, []);

    return(
        <ProBigBox bgImg={Host.b_img || "https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}>
            <div>
                <SpHeaderA id={Host.id} BGcolor="rgba(0,0,0,0)">
                    <Paper elevation={3} style={{padding: '0px', borderRadius: '0px',backgroundColor: 'rgba(180,180,180,0.2)', marginbottom: '20px'}}>
                        <ProTextBox>
                            <H1>{Host.user_name}</H1>
                            <H3 style={{fontWeight: 'bold'}}>{Host.title}</H3>
                        </ProTextBox>
                    </Paper>
                </SpHeaderA>
                <ProviderBox>
                        <ProDuoServiceBlockColumn>
                            <Paper elevation={3} style={{padding: '0px', borderRadius: '0px',backgroundColor: 'rgba(180,180,180,0.2)', marginbottom: '20px'}}>
                                {/* <ProTextBox>
                                    <H1>{Host.user_name}</H1>
                                    <H3 style={{fontWeight: 'bold'}}>{Host.title}</H3>
                                </ProTextBox> */}
                                <ProTextBox>
                                    <H2>About</H2>
                                    <P>{Host.about}</P> 
                                </ProTextBox> 
                            </Paper>
                        </ProDuoServiceBlockColumn> 
                        <ProDuoServiceBlock>
                            <ProImage src={Host.p_img} alt={Host.user_name}/>
                        </ProDuoServiceBlock>
                        <ProDuoServiceBlockColumn>
                        <Paper elevation={3} style={{padding: '0px', borderRadius: '0px',backgroundColor: 'rgba(180,180,180,0.2)', marginbottom: '20px'}}>
                                <ProTextBox>
                                    <H3>Tip Me Here.</H3>
                                    <br/>
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick"/>
                                        <input type="hidden" name="hosted_button_id" value="92TZKHPM5****"/>
                                        <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online."/>
                                        <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
                                    </form>
                                </ProTextBox>
                                <ProTextBox>
                                    <H3>My patreon.</H3>
                                    <P>{Host.patreon}</P>
                                </ProTextBox>
                                <ProTextBox>
                                    <H3>{Host.wp_title}</H3>
                                    <a href={Host.webpage}><P>{Host.webpage}</P></a>
                                </ProTextBox>
                            </Paper>
                        </ProDuoServiceBlockColumn>
                </ProviderBox>
                {/* <SpHeaderA>
                    <H2>{Host.user_name}'s shows. </H2>
                </SpHeaderA> */}
            </div>
             <Carousel
                // autoPlay={5000}
                animationSpeed={1500}
                slidesPerPage={num}
                offset={50}
                slidesPerScroll={scNum}
                arrows
                infinite
                dots
            >
                {shows.map((show, key) => (
    
                        <SliderFiller
                            key={key} id={show.id} showName={show.show_name} about={show.about}
                            imgP={show.img} imgB={show.img_b} catagory={show.catagory} subCatagory={show.sub_catagory}
                            hostId={show.host_id} hostName={show.host_name} hostImg={show.host_img} payment={show.payment}
                            patreon={show.patreon} wpTitle={show.wp_title} webpage={show.webpage} ETPlus={show.eighteen_plus}
                            booked={show.booked} paid={show.paid} canceled={show.canceled} entertain={show.entertain} couns={show.couns} 
                            relig={show.relig} timeStamp={show.time_stamp}
                        />
                ))}
                </Carousel>
        </ProBigBox>             
    )
}

export default HostPage;