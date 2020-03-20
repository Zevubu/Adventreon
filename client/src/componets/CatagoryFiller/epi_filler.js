import React from 'react';
import {DuoServiceBlock, DuoServiceBlockColumn,Image, Btn, TextBox, PS,H2B,PG} from "../../styles/homeStyle"

// key={key} id={episode.id} epiName={episode.epi_name} about={episode.about} pImg={episode.img} bImg={Show.b_img}
// showId={episode.show_id} showName={episode.show_name} catagory={episode.catagory} subCatagory={episode.sub_catagory}
// hostId={episode.host_id} hostName={episode.host_name} hostImg={episode.host_img} credits={episode.credits}
// price={episode.price} payment={episode.payment} patreon={episode.patreon} wpTitle={episode.wp_title} webpage={episode.webpage}
// Videolink={episode.v_link} showDate={episode.show_date} startTime={episode.start_time} endTime={episode.end_time}
// eighteenPlus={episode.eighteen_plus} booked={episode.booked} 
// paid={episode.paid} canceled={episode.canceled} entertain={episode.entertain}
// couns={episode.couns} relig={episode.relig} timeStamp={episode.time_stamp}

function EpisodeFiller(props){
   

    return(
        <DuoServiceBlock bgImg={props.bImg}>
            <DuoServiceBlockColumn>
                <Image src={props.pImg} alt={props.showName}/>
            </DuoServiceBlockColumn>
            <DuoServiceBlockColumn>
                <TextBox>
                    <H2B>{props.showName}</H2B>
                    <PG>By {props.hostName}</PG>
                    <PS>{props.about}</PS>
                </TextBox>
                <a className="nav-link" href={"/episodes/" + props.id}><Btn>Click here to see episodes.</Btn></a>
            </DuoServiceBlockColumn>
        </DuoServiceBlock>

    )
}
export default EpisodeFiller;