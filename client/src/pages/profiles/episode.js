import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import API from "../../API/epiLogOut";
import {P, Btn, H1NB, H3, BlueHeader,H2,} from "../../styles/homeStyle"
import{ ProviderBox, ShowBox, ProTextBoxN, ProDuoServiceBlock, ProDuoServiceBlockColumn, ProImage, ProTextBox} from '../../styles/providerStyles'
import EpisFiller from "../../componets/CatagoryFiller/epi_filler"
import EpisodeFiller from "../../componets/CatagoryFiller/epi_filler";
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
                        <H3>{epi.v_link}</H3>
                        <ProImage src={epi.img} alt={epi.epi_name}/>
                    </ProDuoServiceBlock>
                    <ProDuoServiceBlockColumn>
                        <ProTextBoxN>
                            <H1NB id={epi.show_id}>{epi.show_name}</H1NB>
                            <H2>{epi.epi_name}</H2>
                            <H3 id={epi.host_id}>By {epi.host_name}</H3>
                        </ProTextBoxN>
                        <ProTextBox>
                            <H3>About</H3>
                            <br/>
                            <P>{epi.about}</P> 
                        </ProTextBox>
                        <ProDuoServiceBlock>
                            <H3>{epi.v_link}</H3>
                        </ProDuoServiceBlock> 
                        <ProTextBox>
                            <H3>Tip Me Here.</H3>
                            <br/>
                            <P>{epi.payment}</P>
                        </ProTextBox>
                        <ProTextBox>
                            <H3>My patreon.</H3>
                            <br/>
                            <P>{epi.patreon}</P>
                        </ProTextBox>
                        <ProTextBox>
                            <H3>{epi.wp_title}</H3>
                            <br/>
                            <a href={epi.webpage}><P>{epi.webpage}</P></a>
                        </ProTextBox>
                    </ProDuoServiceBlockColumn>
                </ProviderBox>
            </div>
        ))}
        </div>             
    )
}

export default Episode;