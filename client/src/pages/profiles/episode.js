import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import API from "../../API/epiLogOut";
import {P, Btn, H1NB, H3, BlueHeader,H2,} from "../../styles/homeStyle"
import{ ProviderBox, ShowBox, ProTextBoxN, ProDuoServiceBlock, ProDuoServiceBlockColumn, ProImage, ProTextBox} from '../../styles/providerStyles'
import EpisFiller from "../../componets/CatagoryFiller/epi_filler"
// key={key} id={episode.id} epiName={episode.epi_name} about={episode.about} pImg={episode.img} bImg={Show.b_img}
// showId={episode.show_id} showName={episode.show_name} catagory={episode.catagory} subCatagory={episode.sub_catagory}
// hostId={episode.host_id} hostName={episode.host_name} hostImg={episode.host_img} credits={episode.credits}
// price={episode.price} payment={episode.payment} patreon={episode.patreon} wpTitle={episode.wp_title} webpage={episode.webpage}
// Videolink={episode.v_link} showDate={episode.show_date} startTime={episode.start_time} endTime={episode.end_time}
// eighteenPlus={episode.eighteen_plus} booked={episode.booked} 
// paid={episode.paid} canceled={episode.canceled} entertain={episode.entertain}
// couns={episode.couns} relig={episode.relig} timeStamp={episode.time_stamp}

function epis(){
    let { id } = useParams();
    const [epis, setepiss] = useState([]);
    // const [services, setServices] = useState([])

    useEffect(() => {
        const fetchEpis = async () =>{
         const result = await API.getEpisodesByID(`${id}`)
             setepiss(result.data)
           
         };
         fetchEpis(); 
     }, []);

    return(
        <div>
        {epis.map((epi, key) => (
            <div key={key}>
                <BlueHeader id={epi.id}>
                    <H2>{epi.user_name}'s profile </H2>
                </BlueHeader>
                <ProviderBox>
                    <ProDuoServiceBlock>
                        <ProImage src={epi.p_img} alt={epi.user_name}/>
                    </ProDuoServiceBlock>
                    <ProDuoServiceBlockColumn>
                        <ProTextBoxN>
                            <H1NB>{epi.user_name}</H1NB>
                            <H3>{epi.title}</H3>
                        </ProTextBoxN>
                        <ProTextBox>
                            <H3>About</H3>
                            <br/>
                            <P>{epi.about}</P> 
                        </ProTextBox> 
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
                            <P>{ep.webpage}</P>
                        </ProTextBox>
                    </ProDuoServiceBlockColumn>
                   
                </ProviderBox>
                <BlueHeader>
                    <H2>{epi.user_name}'s shows. </H2>
                </BlueHeader>
            </div>
        ))}
             
            <ShowBox>
                {Shows.map((show, key) => (
                    <ShowFiller
                    key={key} id={show.id} showName={show.show_name} about={show.about} pImg={show.img} bImg={show.b_img}
                    catagory={show.catagory} subCatagory={show.sub_catagory} episId={show.epis_id} 
                    episName={show.epis_name} episImg={show.epis_img} payment={show.payment}
                    patreon={show.patreon} wpTitle={show.wp_title} webpage={show.webpage}
                    eighteenPlus={show.eighteen_plus} booked={show.booked} 
                    paid={show.paid} canceled={show.canceled} entertain={show.entertain}
                    couns={show.couns} relig={show.relig} timeStamp={show.time_stamp}
                    />
                ))}
            </ShowBox>
        </div>             
    )
}

export default epis;