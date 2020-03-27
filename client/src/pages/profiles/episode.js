import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import API from "../../API/epiLogOut";
import {P, H1NB, H1, H3, BlueHeader, H2, HEp} from "../../styles/homeStyle"
import{ ProviderBox, ProTextBoxN, ProDuoServiceBlock, ProDuoServiceBlockColumn, ProTextBox} from '../../styles/providerStyles'
// import EpisFiller from "../../componets/CatagoryFiller/epi_filler"
// import EpisodeFiller from "../../componets/CatagoryFiller/epi_filler";
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// key={key} id={episode.id} epiName={episode.epi_name} about={episode.about} pImg={episode.img} bImg={Show.b_img}
// showId={episode.show_id} showName={episode.show_name} catagory={episode.catagory} subCatagory={episode.sub_catagory}
// hostId={episode.host_id} hostName={episode.host_name} hostImg={episode.host_img} credits={episode.credits}
// price={episode.price} payment={episode.payment} patreon={episode.patreon} wpTitle={episode.wp_title} webpage={episode.webpage}
// Videolink={episode.v_link} showDate={episode.show_date} startTime={episode.start_time} endTime={episode.end_time}
// eighteenPlus={episode.eighteen_plus} booked={episode.booked} 
// paid={episode.paid} canceled={episode.canceled} entertain={episode.entertain}
// couns={episode.couns} relig={episode.relig} timeStamp={episode.time_stamp}

// epi_name,x
// about,x
// show_id,x
// show_name, x
// img, x+
// catagory, 
// sub_catagory, 
// host_id, x
// host_name, x
// host_img, 
// credits, 
// price, 
// payment, 
// patreon, 
// wp_title, 
// webpage, 
// v_link, 
// show_date, 
// start_time, 
// end_time, 
// eighteen_plus, 
// booked, 
// paid, 
// canceled, 
// entertain, 
// couns, 
// relig

function Episode(){
    let { id } = useParams();
    const [epis, setEpis] = useState([]);
    // const [services, setServices] = useState([])

    useEffect(() => {
        const fetchEpis = async () =>{
         const result = await API.getEpisodesByID(`${id}`)
             setEpis(result.data)
           
         };
         fetchEpis(); 
     }, []);

    return(
        <div>
        {epis.map((epi, key) => (
            <div key={key}>
                <BlueHeader id={epi.id}>
                    <H2>{epi.epi_name}</H2>
                </BlueHeader>
                <ProviderBox>
                    <ProDuoServiceBlock>
                        <iframe 
                            title={`https://www.youtube.com/embed/${epi.v_link}`}
                            width="560" 
                            height="315" 
                            src={`https://www.youtube.com/embed/${epi.v_link}`} 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe> 
                        <ProDuoServiceBlockColumn>
                            <H1>Chatbox</H1>
                            <H3>People will talk can chat here.</H3>
                            <H3>we have plans to make it some someone can rent a private chat box</H3>
                            <H3>But that will come in later</H3>
                        </ProDuoServiceBlockColumn>
                    </ProDuoServiceBlock>
                    <ProDuoServiceBlockColumn>
                    <Paper elevation={3} style={{padding: '10px', borderRadius: '50px',backgroundColor: 'grey', marginbottom: '20px'}}x>
                        <ProTextBoxN>
                            <H1NB id={epi.show_id}>{epi.show_name}</H1NB>
                            <HEp>{epi.epi_name}</HEp>
                            <H3 id={epi.host_id}>By {epi.host_name}</H3>
                        </ProTextBoxN>
                        <ProTextBox>
                            <H3>About</H3>
                            <P>{epi.about}</P> 
                        </ProTextBox> 
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
                            <P>{epi.patreon}</P>
                        </ProTextBox>
                        <ProTextBox>
                            <H3>{epi.wp_title}</H3>
                            <a href={epi.webpage}><P>{epi.webpage}</P></a>
                        </ProTextBox>
                        </Paper>
                    </ProDuoServiceBlockColumn>
                </ProviderBox>
            </div>
        ))}
        </div>             
    )
}

export default Episode;