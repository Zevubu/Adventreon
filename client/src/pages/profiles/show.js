import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import API from "../../API/loggedOutAPI";
import {P, Btn, H1NB, H3, BlueHeader,H2,} from "../../styles/homeStyle"
import{ ProviderBox, ShowBox, ProTextBoxN, ProDuoServiceBlock, ProDuoServiceBlockColumn, ProImage, ProTextBox} from '../../styles/providerStyles'
import EpisodeFiller from "../../componets/CatagoryFiller/epi_filler"

// chiquioasis
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
            const result = await API.getEpisByShow(`${id}`)
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
                    <ProDuoServiceBlock>
                        <ProDuoServiceBlockColumn>
                            <ProTextBoxN>
                                <H1NB>{Show.show_name}</H1NB>
                                <H3>By {Show.host_name}</H3>
                            </ProTextBoxN>
                            <ProTextBox>
                                <H3>About</H3>
                                <br/>
                                <P>{Show.about}</P> 
                            </ProTextBox> 
                            </ProDuoServiceBlockColumn>
                            <ProDuoServiceBlockColumn>
                            <ProTextBox>
                                <H3>Tip Me Here.</H3>
                                <br/>
                                <P>{Show.payment}</P>
                            </ProTextBox>
                            <ProTextBox>
                                <H3>My patreon.</H3>
                                <br/>
                                <P>{Show.patreon}</P>
                            </ProTextBox>
                            <ProTextBox>
                                <H3>{Show.wp_title}</H3>
                                <br/>
                                <P>{Show.webpage}</P>
                            </ProTextBox>
                        </ProDuoServiceBlockColumn>
                   </ProDuoServiceBlock>
                </ProviderBox>
                <BlueHeader>
                    <H2>{Show.show_name}'s Episodes. </H2>
                </BlueHeader>
            
        

        {/* //
        // epi_name,
        // about,
        // show_id,
        // show_name,
        // img,
        // catagory,
        // sub_catagory,
        // host_id, x
        // host_name, 
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
        // canceled  */}
             
                <ShowBox>
                    {Episodes.map((episode, key) => (
                        <EpisodeFiller
                        key={key} id={episode.id} epiName={episode.epi_name} about={episode.about} pImg={episode.img} bImg={Show.b_img}
                        showId={episode.show_id} showName={episode.show_name} catagory={episode.catagory} subCatagory={episode.sub_catagory}
                        hostId={episode.host_id} hostName={episode.host_name} hostImg={episode.host_img} credits={episode.credits}
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