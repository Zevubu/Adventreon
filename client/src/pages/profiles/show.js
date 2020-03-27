import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
import {Link} from 'react-router-dom';
import API from "../../API/loggedOutAPI";
import eAPI from "../../API/epiLogOut"
import {P, H1NB, H3, BlueHeader, H2} from "../../styles/homeStyle"
import{ ProviderBox, ShowBox, ProTextBoxN, ProDuoServiceBlock, ProDuoServiceBlockColumn, ProImage, ProTextBox} from '../../styles/providerStyles'
import EpisodeFiller from "../../componets/CatagoryFiller/epi_filler"
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// chiquioasis
// show_name,x
// about,x
// img, x
// img_b, 
// catagory, 
// sub_catagory, 
// host_id, 
// host_name, x
// host_img, 
// payment, 
// patreon, 
// wp_title, 
// webpage, 
// eighteen_plus, 
// booked, paid, 
// canceled, 
// entertain,
// couns, 
// relig

function Show(){
    let { id } = useParams();
    const [Shows, setShows] = useState([]);
    const [Episodes, setEpisodes] = useState([]);
    

    useEffect(() => {
        const fetchShow = async () =>{
         const result = await API.getShowByID(`${id}`)
             setShows(result.data)
           
         };
         const fetchEpis = async () =>{
            const result = await eAPI.getEpisByShowID(`${id}`)
                console.log(result.data)
                setEpisodes(result.data)
              
            };
         fetchShow(); 
         fetchEpis();
     }, []);
// show_name,
// about,
// img, 
// img_b, 
// catagory, 
// sub_catagory, 
// host_id, 
// host_name, 
// host_img, 
// payment, 
// patreon, 
// wp_title, 
// webpage, 
// eighteen_plus, 
// booked, paid, 
// canceled, 
// entertain,
// couns, 
// relig
    return(
        <div>
        {Shows.map((Show, key) => (
            <div key={key}>
                <BlueHeader id={Show.id}>
                    <H2>{Show.show_name} </H2>
                </BlueHeader>
                <ProviderBox>
                    <ProDuoServiceBlock>
                        <ProImage src={Show.img} alt={Show.show_name}/>
                    </ProDuoServiceBlock>
                        <ProDuoServiceBlockColumn>
                    <Paper elevation={3} style={{padding: '10px', borderRadius: '50px',backgroundColor: 'grey', marginbottom: '20px'}}x>
                            <ProTextBoxN>
                                <H1NB>{Show.show_name}</H1NB>
                                <Link href={"/hosts/" + Show.host_id}><H3 id={Show.host_id}>By {Show.host_name}</H3></Link>
                            </ProTextBoxN>
                            <ProTextBox>
                                <H3>About</H3>
                                <P>{Show.about}</P> 
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
                                <P>{Show.patreon}</P>
                            </ProTextBox>
                            <ProTextBox>
                                <H3>{Show.wp_title}</H3>
                                <a href={Show.webpage}><P>{Show.webpage}</P></a>
                            </ProTextBox>
                            </Paper>
                        </ProDuoServiceBlockColumn>
                </ProviderBox>
                <BlueHeader>
                    <H2>{Show.show_name}'s Episodes. </H2>
                </BlueHeader>           
        {/* // XX
        // epi_name,
        // about,
        // show_id,
        // show_name,
        // img,
        // catagory,
        // sub_catagory,
        // host_id, x
        // host_name, 
        // b_img, 
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
        // canceled  */}           
                <ShowBox>
                    {Episodes.map((episode, key) => (
                        <EpisodeFiller
                        key={key} id={episode.id} epiName={episode.epi_name} about={episode.about} pImg={episode.img} bImg={Show.b_img}
                        showId={episode.show_id} showName={episode.show_name} catagory={episode.catagory} subCatagory={episode.sub_catagory}
                        hostId={episode.host_id} hostName={episode.host_name} bImg={episode.b_img} credits={episode.credits}
                        price={episode.price} payment={episode.payment} patreon={episode.patreon} wpTitle={episode.wp_title} webpage={episode.webpage}
                        Videolink={episode.v_link} showDate={episode.show_date} startTime={episode.start_time} endTime={episode.end_time}
                        eighteenPlus={episode.eighteen_plus} booked={episode.booked} 
                        paid={episode.paid} canceled={episode.canceled} entertain={episode.entertain}
                        couns={episode.couns} relig={episode.relig} timeStamp={episode.time_stamp}
                        />
                    ))}
                </ShowBox>
            </div>
            ))}
        </div>             
    )
}

export default Show;